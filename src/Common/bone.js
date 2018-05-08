/**
 * bone库文件挂载lib,object的事件
 */
 var _ = require("./underscore.js");
var common = require('./common.js');

(function() {
    var Bone =  {};
    var slice = Array.prototype.slice;
    var Events = {};
    // Regular expression used to split event strings.
    var eventSplitter = /\s+/;
    var nativeForEach = Array.prototype.forEach;
    Bone._ver ='1.0.1';
    //libs
    Bone._ = _;

    var eventsApi = function(iteratee, events, name, callback, opts) {
        var i = 0, names;
        if (name && typeof name === 'object') {
            // Handle event maps.
            if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;
            for (names = _.keys(name); i < names.length ; i++) {
                events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
            }
        } else if (name && eventSplitter.test(name)) {
            // Handle space separated event names by delegating them individually.
            for (names = name.split(eventSplitter); i < names.length; i++) {
                events = iteratee(events, names[i], callback, opts);
            }
        } else {
            // Finally, standard events.
            events = iteratee(events, name, callback, opts);
        }
        return events;
    };

    Events.on = function(name, callback, context) {
        return internalOn(this, name, callback, context);
    };
    var internalOn = function(obj, name, callback, context, listening) {
        obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
            context: context,
            ctx: obj,
            listening: listening
        });

        if (listening) {
            var listeners = obj._listeners || (obj._listeners = {});
            listeners[listening.id] = listening;
        }

        return obj;
    };


    Events.listenTo =  function(obj, name, callback) {
        if (!obj) return this;
        var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
        var listeningTo = this._listeningTo || (this._listeningTo = {});
        var listening = listeningTo[id];

        // This object is not listening to any other events on `obj` yet.
        // Setup the necessary references to track the listening callbacks.
        if (!listening) {
            var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
            listening = listeningTo[id] = {obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0};
        }

        // Bind callbacks on obj, and keep track of them on listening.
        internalOn(obj, name, callback, this, listening);
        return this;
    };


    var onApi = function(events, name, callback, options) {
        if (callback) {
            var handlers = events[name] || (events[name] = []);
            var context = options.context, ctx = options.ctx, listening = options.listening;
            if (listening) listening.count++;

            handlers.push({ callback: callback, context: context, ctx: context || ctx, listening: listening });
        }
        return events;
    };


    Events.off =  function(name, callback, context) {
        if (!this._events) return this;
        this._events = eventsApi(offApi, this._events, name, callback, {
            context: context,
            listeners: this._listeners
        });
        return this;
    };

    Events.stopListening =  function(obj, name, callback) {
        var listeningTo = this._listeningTo;
        if (!listeningTo) return this;

        var ids = obj ? [obj._listenId] : _.keys(listeningTo);

        for (var i = 0; i < ids.length; i++) {
            var listening = listeningTo[ids[i]];

            // If listening doesn't exist, this object is not currently
            // listening to obj. Break out early.
            if (!listening) break;

            listening.obj.off(name, callback, this);
        }
        if (_.isEmpty(listeningTo)) this._listeningTo = void 0;

        return this;
    };


    var offApi = function(events, name, callback, options) {
        if (!events) return;

        var i = 0, listening;
        var context = options.context, listeners = options.listeners;

        // Delete all events listeners and "drop" events.
        if (!name && !callback && !context) {
            var ids = _.keys(listeners);
            for (; i < ids.length; i++) {
                listening = listeners[ids[i]];
                delete listeners[listening.id];
                delete listening.listeningTo[listening.objId];
            }
            return;
        }

        var names = name ? [name] : _.keys(events);
        for (; i < names.length; i++) {
            name = names[i];
            var handlers = events[name];

            // Bail out if there are no events stored.
            if (!handlers) break;

            // Replace events if there are any remaining.  Otherwise, clean up.
            var remaining = [];
            for (var j = 0; j < handlers.length; j++) {
                var handler = handlers[j];
                if (
                    callback && callback !== handler.callback &&
                    callback !== handler.callback._callback ||
                    context && context !== handler.context
                ) {
                    remaining.push(handler);
                } else {
                    listening = handler.listening;
                    if (listening && --listening.count === 0) {
                        delete listeners[listening.id];
                        delete listening.listeningTo[listening.objId];
                    }
                }
            }

            // Update tail event if the list has any events.  Otherwise, clean up.
            if (remaining.length) {
                events[name] = remaining;
            } else {
                delete events[name];
            }
        }
        if (_.size(events)) return events;
    };


    Events.once =  function(name, callback, context) {
        // Map the event into a `{event: once}` object.
        var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
        return this.on(events, void 0, context);
    };


    Events.listenToOnce =  function(obj, name, callback) {
        // Map the event into a `{event: once}` object.
        var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
        return this.listenTo(obj, events);
    };


    var onceMap = function(map, name, callback, offer) {
        if (callback) {
            var once = map[name] = _.once(function() {
                offer(name, once);
                callback.apply(this, arguments);
            });
            once._callback = callback;
        }
        return map;
    };

    Events.trigger =  function(name) {
        if (!this._events) return this;

        var length = Math.max(0, arguments.length - 1);
        var args = Array(length);
        for (var i = 0; i < length; i++) args[i] = arguments[i + 1];

        eventsApi(triggerApi, this._events, name, void 0, args);
        return this;
    };

// Handles triggering the appropriate event callbacks.
    var triggerApi = function(objEvents, name, cb, args) {
        if (objEvents) {
            var events = objEvents[name];
            var allEvents = objEvents.all;
            if (events && allEvents) allEvents = allEvents.slice();
            if (events) triggerEvents(events, args);
            if (allEvents) triggerEvents(allEvents, [name].concat(args));
        }
        return objEvents;
    };

    var triggerEvents = function(events, args) {
        var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
        switch (args.length) {
            case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
            case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
            case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
            case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
            default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
        }
    };

// Aliases for backwards compatibility.
    Events.bind   = Events.on;
    Events.unbind = Events.off;
    Bone._forEach = function (obj, iterator, context) {
        if (obj == null) return;
        if (nativeForEach && obj.forEach === nativeForEach) {
            obj.forEach(iterator, context);
        } else if (obj.length === +obj.length) {
            for (var i = 0, l = obj.length; i < l; i++) {
                iterator.call(context, obj[i], i, obj);
            }
        } else {
            for (var key in obj) {
                if (this.has(obj, key)) {
                    iterator.call(context, obj[key], key, obj);
                }
            }
        }
    };

    //Events Mixin utility,use Events.mixin(obj) or Events.mixin(fn.prototype);
    Events.mixin = function (proto) {
        var exps = ['on', 'once', 'off', 'trigger', 'stopListening', 'listenTo',
            'listenToOnce', 'bind', 'unbind'];
        Bone._forEach(exps, function (name) {
            proto[name] = Events[name];
        }, Events);
        return proto;
    };

    Bone.Events = Events;
    _.extend(Bone, Events);


    //extend
    Bone.extend = function(protoProps, staticProps) {
        var parent = this;
        var child;
        if (protoProps && _.has(protoProps, 'constructor')) {
            child = protoProps.constructor;
        } else {
            child = function(){ return parent.apply(this, arguments); };
        }
        _.extend(child, parent, staticProps);
        var Surrogate = function(){ this.constructor = child; };
        Surrogate.prototype = parent.prototype;
        child.prototype = new Surrogate;
        if (protoProps) _.extend(child.prototype, protoProps);
        child.__super__ = parent.prototype;
        return child;
    };

    Bone._triggerMethod = (function() {
        // split the event name on the ":"
        var splitter = /(^|:)(\w)/gi;
        // take the event section ("section1:section2:section3")
        // and turn it in to uppercase name
        function getEventName(match, prefix, eventName) {
            return eventName.toUpperCase();
        }
        return function(context, event, args) {
            var noEventArg = arguments.length < 3;
            if (noEventArg) {
                args = event;
                event = args[0];
            }
            // get the method name from the event name
            var methodName = 'on' + event.replace(splitter, getEventName);
            var method = context[methodName];
            var result;
            // call the onMethodName if it exists
            if (_.isFunction(method)) {
                // pass all args, except the event name
                result = method.apply(context, noEventArg ? _.rest(args) : args);
            }

            // trigger the event, if a trigger method exists
            if (_.isFunction(context.trigger)) {
                if (noEventArg + args.length > 1) {
                    context.trigger.apply(context, noEventArg ? args : [event].concat(_.drop(args, 0)));
                } else {
                    context.trigger(event);
                }
            }
            return result;
        };
    })();

    // Trigger an event and/or a corresponding method name. Examples:
    //
    // `this.triggerMethod("foo")` will trigger the "foo" event and
    // call the "onFoo" method.
    //
    // `this.triggerMethod("foo:bar")` will trigger the "foo:bar" event and
    // call the "onFooBar" method.
    Bone.triggerMethod = function(event) {
        return Bone._triggerMethod(this, arguments);
    };

    // triggerMethodOn invokes triggerMethod on a specific context
    // e.g. `Bone.triggerMethodOn(view, 'show')`

    Bone.triggerMethodOn = function(context) {
        var fnc = _.isFunction(context.triggerMethod) ?
            context.triggerMethod :
            Bone.triggerMethod;
        return fnc.apply(context, _.rest(arguments));
    };
    // Merge `keys` from `options` onto `this`
    Bone.mergeOptions = function(options, keys) {
        if (!options) { return; }
        _.extend(this, _.pick(options, keys));
    };

    Bone.setOptions = function setOptions() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        this.options = _.extend.apply(_, [{}, _.result(this, 'options')].concat(args));
    };
    Bone.noop = function noop() {};
    Bone.getOption = function(target, optionName) {
        if (!target || !optionName) { return; }
        if (target.options && (target.options[optionName] !== undefined)) {
            return target.options[optionName];
        } else {
            return target[optionName];
        }
    };
    //object
    Bone.Object = function (options) {
        this.options = _.extend({}, _.result(this, 'options'), options);
        this.initialize.apply(this,arguments);
    };
    Bone.Events.mixin(Bone.Object); //add events
    Bone.Object.extend = Bone.extend;
    Bone.Object.prototype.initialize = function (options) { };

    // var cc={a:1,b:2};
    // _.extend(cc,{c:4,t:6,a:3});
    // Bone.Events.mixin(cc);
    //console.log(cc);

    _.extend(Bone.Object.prototype, Bone.Events,{
        mergeOptions:Bone.mergeOptions,
        setOptions:Bone.setOptions,
        getOption:Bone.getOption,
        triggerMethod:Bone.triggerMethod,
        triggerMethodOn:Bone.triggerMethodOn,
        _isDestroyed: false,
        isDestroyed: function isDestroyed() {
            return this._isDestroyed;
        },
        destroy: function () {
            if (this.isDestroyed()) {
                return this;
            }
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            this._isDestroyed = true;
            this.triggerMethod.apply(this, ['destroy', this].concat(args));
            this.stopListening();
            return this;
        }

    });

    Bone.Model = Bone.Object.extend({
        initialize: function (opts) {
            var self =this;
            this.options = _.extend({}, _.result(this, 'options'), (opts||{}));
            this.req_url = this.options.url || common.api_uri + '/v6/mobile/channel/list.json';
            this.req_params = _.extend({},this.options.params,{
                'channel_list_type': this.options.channel_list_type || 5,
            }, common.api_params);
            this.req_method =  this.options.method ||'GET';
            this.callback = this.options.callback||function (res) {};
            this.complete = this.options.complete||function (res) {};
        },
        _rst:{
            data: {},
            statusText: "",
            statusCode: 200
        },
        _successHandler:function (res) {
            var rst =res;
            //  success:_.bind(self._successHandler,self),
            if (res.statusCode == 200) {
                var _rst = res.data||{}; //包了2层data
                rst = _.extend({},this._rst,{
                    data: _rst.data||{},
                    statusCode: _rst.status||0,
                    statusText: _rst.statusText||'',
                });
                this.trigger('successHandler',rst);
                this.callback && this.callback(rst);
            } else {

                console.error(res.statusCode+' errMsg ' + res.errMsg + '!');
                this.trigger('successHandler',this._rst);
                this.callback && this.callback(rst);
            }
        },
        _failHandler:function (res) {
            console.error(res.statusCode+' errMsg ' + res.errMsg + '!');
            this.trigger('failHandler',this._rst);
            this.callback && this.callback(rst);
        },
        _completeHandler:function (res) {
            var rst=res;
            if (res.statusCode == 200) {
                var _rst = res.data||{};
                rst = _.extend({},this._rst,{
                    data: _rst.data||{},
                    statusCode: _rst.status||0,
                    statusText: _rst.statusText||'',
                });
            }else{
                console.error(res.statusCode+' errMsg ' + res.errMsg + '!');
            }
            this.trigger('completeHandler',rst);
            this.complete && this.complete(rst);
        },
        request: function (opts) {
            var self = this;
            opts = opts || {};
            self.options = _.extend(_.result(self, 'options'),opts);
            self.req_url =  opts.url || self.req_url||"";
            self.req_params = _.extend(self.req_params,opts.params);
            if(_.isFunction(opts.callback)) {
                self.callback = opts.callback;
            }

            console.log(self.req_url + '?' + common.obj2Query(self.req_params));
            wx.request({
                url: self.req_url ,
                data: self.req_params,
                dataType: 'json',
                method: self.req_method||'GET',
                timeout: 3000,
                header: {
                    'content-type': 'application/json'
                },
                success:_.bind(self._successHandler,self),
                fail:_.bind(self._failHandler,self),
                complete:_.bind(self._completeHandler,self)
            });
        }

    });
    Bone.Model.extend = Bone.extend;
    module.exports = Bone;
}());
