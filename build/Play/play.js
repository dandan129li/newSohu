(function(){
      
  var createPageHandler = function() {
    return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var $app_template$ = __webpack_require__(11)
	var $app_style$ = __webpack_require__(12)
	var $app_script$ = __webpack_require__(13)
	
	$app_define$('@app-component/play', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/play',{ packagerVersion: '0.0.5'})


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	/**
	 * Created by guoqingzhou on 16/12/22.
	 * 公用方法
	 */
	var _ = __webpack_require__(8);
	(function () {
	    var common = {
	        api_uri: 'https://rc.vrs.sohu.com/56app/p',
	        api_params: {
	            'plat': '17',
	            'api_key': 'f351515304020cad28c92f70f002261c',
	            'sver': '6.2',
	            'partner': '78',
	            'poid': '1'
	        },
	        tv_api_uri: 'https://api.tv.sohu.com',
	        obj2Query: function obj2Query(obj) {
	            return Object.keys(obj).map(function (k) {
	                return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
	            }).join('&');
	        },
	        uuid: function uuid() {
	            return (+new Date() * 1e6 + Math.floor(Math.random() * 1e6)).toString(36);
	        },
	        muid: function muid() {
	            return (+new Date() * 1e6 + Math.floor(Math.random() * 1e6)).toString(36);
	        },
	        /**
	         * @memberof Util
	         * @summary 格式化时间，返回指定样式的字符串
	         * @type {function}
	         * @param {date} date                       - 时间对象
	         * @param {string} format                   - 格式化结果,如: yyyy-MM-dd hh:mm:ss
	         * @return {string}                         - 返回时间字符串,如20131204
	         */
	        formatDateStr: function formatDateStr(date, format) {
	            date = date || new Date();
	            format = format || 'yyyy-MM-dd hh:mm:ss';
	            var o = {
	                'M+': date.getMonth() + 1, // month
	                'd+': date.getDate(), // day
	                'h+': date.getHours(), // hour
	                'm+': date.getMinutes(), // minute
	                's+': date.getSeconds(), // second
	                'q+': Math.floor((date.getMonth() + 3) / 3), // quarter
	                'S': date.getMilliseconds()
	                // millisecond
	            };
	
	            if (/(y+)/.test(format)) {
	                format = format.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	            }
	
	            for (var k in o) {
	                if (new RegExp('(' + k + ')').test(format)) {
	                    format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length));
	                }
	            }
	            return format;
	        },
	
	        /**
	         * @memberof Util
	         * @summary 将数字数量缩短为带单位的字符串，如10,000转化为'1万 106000 会转为1.1万 (四舍五入)
	         * @type {function}
	         * @param {number|string} count             - 数量
	         * @return {string}                         - 带单位的字符串
	         */
	        shortFixedCount: function shortFixedCount(count) {
	            count = parseFloat(count || 0);
	            if (count && count >= 100000000) {
	                count = (count / 100000000).toFixed(1) + '亿';
	            } else if (count && count >= 10000) {
	                count = (count / 10000).toFixed(1) + '万';
	            }
	            return count;
	        },
	        /**
	         * @memberof Util
	         * @summary 将秒数转换为hh:mm:ss格式
	         * @type {function}
	         * @param {number|string} seconds           - 秒数
	         * @return {string}                         - hh:mm:ss格式的字符串
	         */
	        secondsToTime: function secondsToTime(seconds) {
	            var totalSeconds = parseInt(seconds, 10);
	            if (!_.isNumber(totalSeconds)) {
	                totalSeconds = 0;
	            }
	            var minutes = Math.floor(totalSeconds / 60);
	            seconds = totalSeconds % 60;
	            if (seconds < 10) {
	                seconds = '0' + seconds;
	            }
	            if (minutes < 60) {
	                if (minutes < 10) {
	                    minutes = '0' + minutes;
	                }
	                return minutes + ':' + seconds;
	            } else {
	                var hours = Math.floor(minutes / 60);
	                minutes = minutes % 60;
	                if (minutes < 10) {
	                    minutes = '0' + minutes;
	                }
	                if (hours < 10) {
	                    hours = '0' + hours;
	                }
	                return hours + ':' + minutes + ':' + seconds;
	            }
	        },
	
	        /**
	         * @memberof Util
	         * @summary 将秒数转换为文本格式的时间，eg. 65 -> "1分5秒"
	         * @type {function}
	         * @param {number|string} seconds           - 秒数
	         * @return {string}                         - 文本格式的时间
	         */
	        secondsToTimeText: function secondsToTimeText(seconds) {
	            var totalSeconds = parseInt(seconds, 10);
	            if (!_.isNumber(totalSeconds)) {
	                totalSeconds = 0;
	            }
	            var minutes = Math.floor(totalSeconds / 60);
	            seconds = totalSeconds % 60 + '秒';
	            if (minutes < 60) {
	                return (minutes > 0 ? minutes + '分' : '') + seconds;
	            } else {
	                var hours = Math.floor(minutes / 60);
	                minutes = minutes % 60;
	                return (hours > 0 ? hours + '小时' : '') + minutes + '分' + seconds;
	            }
	        },
	        //小程序内部播放地址
	        makeWxPlayUrl: function makeWxPlayUrl(obj) {
	            var site = obj['site'] || '2';
	            var vid = obj['vid'] || '';
	            // var aid = obj['aid'] || obj['sid'] || "0";
	            // var user_id = obj['user_id']  || "";
	            var url_h5 = '/56tv/play/play';
	            if (site == '2') {
	                url_h5 = '/56tv/play/play';
	            }
	            var req_params = common.obj2Query({
	                vid: vid,
	                site: site
	                // aid:aid,
	                // user_id:user_id,
	                // cover: obj.cover,
	                // play_count: obj.play_count,
	                // tip: obj.time_length_format || obj.tip,
	                // video_name: obj.video_name,
	                // header: obj.header || "",
	                // userName: obj.userName || "",
	                // likeNum: obj.likeNum
	            });
	            url_h5 = url_h5 + '?' + req_params;
	            if (obj['cid'] && obj['cid'] == '1') {
	                //付费电影或无版权电影
	                if (obj['fee'] == 2 || obj['mobileLimit'] == '2' || obj['mobile_limit'] == '2') {}
	            }
	            return url_h5;
	        },
	        //h5_url
	        makePlayUrl: function makePlayUrl(obj) {
	            var domain = "https://m.tv.sohu.com/";
	            var site = obj['site'] || '2';
	            var vid = obj['vid'];
	            var aid = obj['aid'] || obj['sid'] || "0";
	            if (domain.lastIndexOf("/") < 0) {
	                domain = domain + "/";
	            }
	            var url_h5 = '';
	            if (vid) {
	                url_h5 = domain + 'v' + vid + '.shtml';
	                if (site == '2') {
	                    url_h5 = domain + 'u/vw/' + vid + '.shtml';
	                }
	            } else {
	                url_h5 = domain + 'album/s' + aid + '.shtml';
	            }
	            if (aid && aid > 0) {
	                if (url_h5.indexOf("?") < 0) {
	                    url_h5 += "?aid=" + aid;
	                } else {
	                    url_h5 += "&aid=" + aid;
	                }
	            }
	            if (obj['cid'] && obj['cid'] == '1') {
	                //付费电影或无版权电影
	                if (obj['fee'] == 2 || obj['mobileLimit'] == '2' || obj['mobile_limit'] == '2') {
	                    url_h5 = "https://m.film.sohu.com/album/" + aid + ".html?vid=" + vid + "&channeled=1910000001&f=h5";
	                }
	            }
	            return url_h5;
	        },
	
	        /**
	         * 保持和play逻辑一致.
	         * 1、如果用户传递了boke参数，根据boke参数来判断是否为播客
	         * 2、用户没有传递boke，但是传递了site，则根据site判断是否为播客
	         * 3、用户没有传递boke和site参数，则默认返回false，即不是播客
	         *
	         * 注：如果用户同时传递了boke和site参数，则优先根据boke字段判断是否为boke。
	         */
	        isBoke: function isBoke(opts) {
	            opts = opts || {};
	            var boke = opts['boke'] || 0;
	            if (boke > 0) {
	                return boke == 1;
	            }
	            //用户没有传递boke参数，但是传递了site参数
	            var site = opts["site"] || 0; //ugc site=2
	            if (site > 0) {
	                return site == 2;
	            }
	            //既没有传递boke参数也没有传递site参数，则默认不是播客
	            if (boke == 1 || site > 1) {
	                return true;
	            } else {
	                return false;
	            }
	        },
	        parserUrlParam: function parserUrlParam(k, url) {
	            url = url || '';
	            var reg = new RegExp("(^|&|\\\\?)" + k + "=([^&]*)(&|$|#)"),
	                r = null;
	            if (r = url.match(reg)) return r[2];
	            return "";
	        },
	        filterXSS: function filterXSS(str) {
	            if (_.isString(str)) {
	                return str.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&apos;").replace(/\`/g, "&#x60;");
	            } else {
	                return str;
	            }
	        },
	        resizeShareCover: function resizeShareCover(img) {
	            var data = /(.*)cut@.*w=(\d*),.*(\w{3}$)/.exec(img);
	            if (data && data.length > 2) {
	                var orgSrc = data && data[1];
	                var wid = data[2];
	                // 小程序分享的图片比例为5：4
	                var shareSrc = orgSrc + 'cut@m=fit,w=320,h=' + wid * 4 / 5 + '.' + data[3];
	                return shareSrc;
	            } else {
	                return img;
	            }
	        },
	        isArray: function isArray(obj) {
	            return Object.prototype.toString.call(obj) === '[object Array]';
	        },
	        formatUrl: function formatUrl(url) {
	            url = url || '';
	            if (this.isArray(url)) {
	                url = url[0];
	            }
	            url = url.replace('http://', 'https://'); // mp4
	            return url;
	        }
	    };
	    module.exports = common;
	})();

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * Underscore.js 1.8.3
	 */
	
	(function () {
	
	    // Baseline setup
	    // --------------
	    // Save bytes in the minified (but not gzipped) version:
	    var ArrayProto = Array.prototype,
	        ObjProto = Object.prototype,
	        FuncProto = Function.prototype;
	
	    // Create quick reference variables for speed access to core prototypes.
	    var push = ArrayProto.push,
	        slice = ArrayProto.slice,
	        toString = ObjProto.toString,
	        hasOwnProperty = ObjProto.hasOwnProperty;
	
	    // All **ECMAScript 5** native function implementations that we hope to use
	    // are declared here.
	    var nativeIsArray = Array.isArray,
	        nativeKeys = Object.keys,
	        nativeBind = FuncProto.bind,
	        nativeCreate = Object.create;
	
	    // Naked function reference for surrogate-prototype-swapping.
	    var Ctor = function Ctor() {};
	
	    // Create a safe reference to the Underscore object for use below.
	    var _ = function _(obj) {
	        if (obj instanceof _) return obj;
	        if (!(this instanceof _)) return new _(obj);
	        this._wrapped = obj;
	    };
	
	    // Current version.
	    _.VERSION = '1.8.3';
	
	    // Internal function that returns an efficient (for current engines) version
	    // of the passed-in callback, to be repeatedly applied in other Underscore
	    // functions.
	    var optimizeCb = function optimizeCb(func, context, argCount) {
	        if (context === void 0) return func;
	        switch (argCount == null ? 3 : argCount) {
	            case 1:
	                return function (value) {
	                    return func.call(context, value);
	                };
	            case 2:
	                return function (value, other) {
	                    return func.call(context, value, other);
	                };
	            case 3:
	                return function (value, index, collection) {
	                    return func.call(context, value, index, collection);
	                };
	            case 4:
	                return function (accumulator, value, index, collection) {
	                    return func.call(context, accumulator, value, index, collection);
	                };
	        }
	        return function () {
	            return func.apply(context, arguments);
	        };
	    };
	
	    // A mostly-internal function to generate callbacks that can be applied
	    // to each element in a collection, returning the desired result — either
	    // identity, an arbitrary callback, a property matcher, or a property accessor.
	    var cb = function cb(value, context, argCount) {
	        if (value == null) return _.identity;
	        if (_.isFunction(value)) return optimizeCb(value, context, argCount);
	        if (_.isObject(value)) return _.matcher(value);
	        return _.property(value);
	    };
	    _.iteratee = function (value, context) {
	        return cb(value, context, Infinity);
	    };
	
	    // An internal function for creating assigner functions.
	    var createAssigner = function createAssigner(keysFunc, undefinedOnly) {
	        return function (obj) {
	            var length = arguments.length;
	            if (length < 2 || obj == null) return obj;
	            for (var index = 1; index < length; index++) {
	                var source = arguments[index],
	                    keys = keysFunc(source),
	                    l = keys.length;
	                for (var i = 0; i < l; i++) {
	                    var key = keys[i];
	                    if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
	                }
	            }
	            return obj;
	        };
	    };
	
	    // An internal function for creating a new object that inherits from another.
	    var baseCreate = function baseCreate(prototype) {
	        if (!_.isObject(prototype)) return {};
	        if (nativeCreate) return nativeCreate(prototype);
	        Ctor.prototype = prototype;
	        var result = new Ctor();
	        Ctor.prototype = null;
	        return result;
	    };
	
	    var property = function property(key) {
	        return function (obj) {
	            return obj == null ? void 0 : obj[key];
	        };
	    };
	
	    // Helper for collection methods to determine whether a collection
	    // should be iterated as an array or as an object
	    // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
	    // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
	    var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
	    var getLength = property('length');
	    var isArrayLike = function isArrayLike(collection) {
	        var length = getLength(collection);
	        return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
	    };
	
	    // Collection Functions
	    // --------------------
	
	    // The cornerstone, an `each` implementation, aka `forEach`.
	    // Handles raw objects in addition to array-likes. Treats all
	    // sparse array-likes as if they were dense.
	    _.each = _.forEach = function (obj, iteratee, context) {
	        iteratee = optimizeCb(iteratee, context);
	        var i, length;
	        if (isArrayLike(obj)) {
	            for (i = 0, length = obj.length; i < length; i++) {
	                iteratee(obj[i], i, obj);
	            }
	        } else {
	            var keys = _.keys(obj);
	            for (i = 0, length = keys.length; i < length; i++) {
	                iteratee(obj[keys[i]], keys[i], obj);
	            }
	        }
	        return obj;
	    };
	
	    // Return the results of applying the iteratee to each element.
	    _.map = _.collect = function (obj, iteratee, context) {
	        iteratee = cb(iteratee, context);
	        var keys = !isArrayLike(obj) && _.keys(obj),
	            length = (keys || obj).length,
	            results = Array(length);
	        for (var index = 0; index < length; index++) {
	            var currentKey = keys ? keys[index] : index;
	            results[index] = iteratee(obj[currentKey], currentKey, obj);
	        }
	        return results;
	    };
	
	    // Create a reducing function iterating left or right.
	    function createReduce(dir) {
	        // Optimized iterator function as using arguments.length
	        // in the main function will deoptimize the, see #1991.
	        function iterator(obj, iteratee, memo, keys, index, length) {
	            for (; index >= 0 && index < length; index += dir) {
	                var currentKey = keys ? keys[index] : index;
	                memo = iteratee(memo, obj[currentKey], currentKey, obj);
	            }
	            return memo;
	        }
	
	        return function (obj, iteratee, memo, context) {
	            iteratee = optimizeCb(iteratee, context, 4);
	            var keys = !isArrayLike(obj) && _.keys(obj),
	                length = (keys || obj).length,
	                index = dir > 0 ? 0 : length - 1;
	            // Determine the initial value if none is provided.
	            if (arguments.length < 3) {
	                memo = obj[keys ? keys[index] : index];
	                index += dir;
	            }
	            return iterator(obj, iteratee, memo, keys, index, length);
	        };
	    }
	
	    // **Reduce** builds up a single result from a list of values, aka `inject`,
	    // or `foldl`.
	    _.reduce = _.foldl = _.inject = createReduce(1);
	
	    // The right-associative version of reduce, also known as `foldr`.
	    _.reduceRight = _.foldr = createReduce(-1);
	
	    // Return the first value which passes a truth test. Aliased as `detect`.
	    _.find = _.detect = function (obj, predicate, context) {
	        var key;
	        if (isArrayLike(obj)) {
	            key = _.findIndex(obj, predicate, context);
	        } else {
	            key = _.findKey(obj, predicate, context);
	        }
	        if (key !== void 0 && key !== -1) return obj[key];
	    };
	
	    // Return all the elements that pass a truth test.
	    // Aliased as `select`.
	    _.filter = _.select = function (obj, predicate, context) {
	        var results = [];
	        predicate = cb(predicate, context);
	        _.each(obj, function (value, index, list) {
	            if (predicate(value, index, list)) results.push(value);
	        });
	        return results;
	    };
	
	    // Return all the elements for which a truth test fails.
	    _.reject = function (obj, predicate, context) {
	        return _.filter(obj, _.negate(cb(predicate)), context);
	    };
	
	    // Determine whether all of the elements match a truth test.
	    // Aliased as `all`.
	    _.every = _.all = function (obj, predicate, context) {
	        predicate = cb(predicate, context);
	        var keys = !isArrayLike(obj) && _.keys(obj),
	            length = (keys || obj).length;
	        for (var index = 0; index < length; index++) {
	            var currentKey = keys ? keys[index] : index;
	            if (!predicate(obj[currentKey], currentKey, obj)) return false;
	        }
	        return true;
	    };
	
	    // Determine if at least one element in the object matches a truth test.
	    // Aliased as `any`.
	    _.some = _.any = function (obj, predicate, context) {
	        predicate = cb(predicate, context);
	        var keys = !isArrayLike(obj) && _.keys(obj),
	            length = (keys || obj).length;
	        for (var index = 0; index < length; index++) {
	            var currentKey = keys ? keys[index] : index;
	            if (predicate(obj[currentKey], currentKey, obj)) return true;
	        }
	        return false;
	    };
	
	    // Determine if the array or object contains a given item (using `===`).
	    // Aliased as `includes` and `include`.
	    _.contains = _.includes = _.include = function (obj, item, fromIndex, guard) {
	        if (!isArrayLike(obj)) obj = _.values(obj);
	        if (typeof fromIndex != 'number' || guard) fromIndex = 0;
	        return _.indexOf(obj, item, fromIndex) >= 0;
	    };
	
	    // Invoke a method (with arguments) on every item in a collection.
	    _.invoke = function (obj, method) {
	        var args = slice.call(arguments, 2);
	        var isFunc = _.isFunction(method);
	        return _.map(obj, function (value) {
	            var func = isFunc ? method : value[method];
	            return func == null ? func : func.apply(value, args);
	        });
	    };
	
	    // Convenience version of a common use case of `map`: fetching a property.
	    _.pluck = function (obj, key) {
	        return _.map(obj, _.property(key));
	    };
	
	    // Convenience version of a common use case of `filter`: selecting only objects
	    // containing specific `key:value` pairs.
	    _.where = function (obj, attrs) {
	        return _.filter(obj, _.matcher(attrs));
	    };
	
	    // Convenience version of a common use case of `find`: getting the first object
	    // containing specific `key:value` pairs.
	    _.findWhere = function (obj, attrs) {
	        return _.find(obj, _.matcher(attrs));
	    };
	
	    // Return the maximum element (or element-based computation).
	    _.max = function (obj, iteratee, context) {
	        var result = -Infinity,
	            lastComputed = -Infinity,
	            value,
	            computed;
	        if (iteratee == null && obj != null) {
	            obj = isArrayLike(obj) ? obj : _.values(obj);
	            for (var i = 0, length = obj.length; i < length; i++) {
	                value = obj[i];
	                if (value > result) {
	                    result = value;
	                }
	            }
	        } else {
	            iteratee = cb(iteratee, context);
	            _.each(obj, function (value, index, list) {
	                computed = iteratee(value, index, list);
	                if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
	                    result = value;
	                    lastComputed = computed;
	                }
	            });
	        }
	        return result;
	    };
	
	    // Return the minimum element (or element-based computation).
	    _.min = function (obj, iteratee, context) {
	        var result = Infinity,
	            lastComputed = Infinity,
	            value,
	            computed;
	        if (iteratee == null && obj != null) {
	            obj = isArrayLike(obj) ? obj : _.values(obj);
	            for (var i = 0, length = obj.length; i < length; i++) {
	                value = obj[i];
	                if (value < result) {
	                    result = value;
	                }
	            }
	        } else {
	            iteratee = cb(iteratee, context);
	            _.each(obj, function (value, index, list) {
	                computed = iteratee(value, index, list);
	                if (computed < lastComputed || computed === Infinity && result === Infinity) {
	                    result = value;
	                    lastComputed = computed;
	                }
	            });
	        }
	        return result;
	    };
	
	    // Shuffle a collection, using the modern version of the
	    // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
	    _.shuffle = function (obj) {
	        var set = isArrayLike(obj) ? obj : _.values(obj);
	        var length = set.length;
	        var shuffled = Array(length);
	        for (var index = 0, rand; index < length; index++) {
	            rand = _.random(0, index);
	            if (rand !== index) shuffled[index] = shuffled[rand];
	            shuffled[rand] = set[index];
	        }
	        return shuffled;
	    };
	
	    // Sample **n** random values from a collection.
	    // If **n** is not specified, returns a single random element.
	    // The internal `guard` argument allows it to work with `map`.
	    _.sample = function (obj, n, guard) {
	        if (n == null || guard) {
	            if (!isArrayLike(obj)) obj = _.values(obj);
	            return obj[_.random(obj.length - 1)];
	        }
	        return _.shuffle(obj).slice(0, Math.max(0, n));
	    };
	
	    // Sort the object's values by a criterion produced by an iteratee.
	    _.sortBy = function (obj, iteratee, context) {
	        iteratee = cb(iteratee, context);
	        return _.pluck(_.map(obj, function (value, index, list) {
	            return {
	                value: value,
	                index: index,
	                criteria: iteratee(value, index, list)
	            };
	        }).sort(function (left, right) {
	            var a = left.criteria;
	            var b = right.criteria;
	            if (a !== b) {
	                if (a > b || a === void 0) return 1;
	                if (a < b || b === void 0) return -1;
	            }
	            return left.index - right.index;
	        }), 'value');
	    };
	
	    // An internal function used for aggregate "group by" operations.
	    var group = function group(behavior) {
	        return function (obj, iteratee, context) {
	            var result = {};
	            iteratee = cb(iteratee, context);
	            _.each(obj, function (value, index) {
	                var key = iteratee(value, index, obj);
	                behavior(result, value, key);
	            });
	            return result;
	        };
	    };
	
	    // Groups the object's values by a criterion. Pass either a string attribute
	    // to group by, or a function that returns the criterion.
	    _.groupBy = group(function (result, value, key) {
	        if (_.has(result, key)) result[key].push(value);else result[key] = [value];
	    });
	
	    // Indexes the object's values by a criterion, similar to `groupBy`, but for
	    // when you know that your index values will be unique.
	    _.indexBy = group(function (result, value, key) {
	        result[key] = value;
	    });
	
	    // Counts instances of an object that group by a certain criterion. Pass
	    // either a string attribute to count by, or a function that returns the
	    // criterion.
	    _.countBy = group(function (result, value, key) {
	        if (_.has(result, key)) result[key]++;else result[key] = 1;
	    });
	
	    // Safely create a real, live array from anything iterable.
	    _.toArray = function (obj) {
	        if (!obj) return [];
	        if (_.isArray(obj)) return slice.call(obj);
	        if (isArrayLike(obj)) return _.map(obj, _.identity);
	        return _.values(obj);
	    };
	
	    // Return the number of elements in an object.
	    _.size = function (obj) {
	        if (obj == null) return 0;
	        return isArrayLike(obj) ? obj.length : _.keys(obj).length;
	    };
	
	    // Split a collection into two arrays: one whose elements all satisfy the given
	    // predicate, and one whose elements all do not satisfy the predicate.
	    _.partition = function (obj, predicate, context) {
	        predicate = cb(predicate, context);
	        var pass = [],
	            fail = [];
	        _.each(obj, function (value, key, obj) {
	            (predicate(value, key, obj) ? pass : fail).push(value);
	        });
	        return [pass, fail];
	    };
	
	    // Array Functions
	    // ---------------
	
	    // Get the first element of an array. Passing **n** will return the first N
	    // values in the array. Aliased as `head` and `take`. The **guard** check
	    // allows it to work with `_.map`.
	    _.first = _.head = _.take = function (array, n, guard) {
	        if (array == null) return void 0;
	        if (n == null || guard) return array[0];
	        return _.initial(array, array.length - n);
	    };
	
	    // Returns everything but the last entry of the array. Especially useful on
	    // the arguments object. Passing **n** will return all the values in
	    // the array, excluding the last N.
	    _.initial = function (array, n, guard) {
	        return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
	    };
	
	    // Get the last element of an array. Passing **n** will return the last N
	    // values in the array.
	    _.last = function (array, n, guard) {
	        if (array == null) return void 0;
	        if (n == null || guard) return array[array.length - 1];
	        return _.rest(array, Math.max(0, array.length - n));
	    };
	
	    // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
	    // Especially useful on the arguments object. Passing an **n** will return
	    // the rest N values in the array.
	    _.rest = _.tail = _.drop = function (array, n, guard) {
	        return slice.call(array, n == null || guard ? 1 : n);
	    };
	
	    // Trim out all falsy values from an array.
	    _.compact = function (array) {
	        return _.filter(array, _.identity);
	    };
	
	    // Internal implementation of a recursive `flatten` function.
	    var flatten = function flatten(input, shallow, strict, startIndex) {
	        var output = [],
	            idx = 0;
	        for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
	            var value = input[i];
	            if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
	                //flatten current level of array or arguments object
	                if (!shallow) value = flatten(value, shallow, strict);
	                var j = 0,
	                    len = value.length;
	                output.length += len;
	                while (j < len) {
	                    output[idx++] = value[j++];
	                }
	            } else if (!strict) {
	                output[idx++] = value;
	            }
	        }
	        return output;
	    };
	
	    // Flatten out an array, either recursively (by default), or just one level.
	    _.flatten = function (array, shallow) {
	        return flatten(array, shallow, false);
	    };
	
	    // Return a version of the array that does not contain the specified value(s).
	    _.without = function (array) {
	        return _.difference(array, slice.call(arguments, 1));
	    };
	
	    // Produce a duplicate-free version of the array. If the array has already
	    // been sorted, you have the option of using a faster algorithm.
	    // Aliased as `unique`.
	    _.uniq = _.unique = function (array, isSorted, iteratee, context) {
	        if (!_.isBoolean(isSorted)) {
	            context = iteratee;
	            iteratee = isSorted;
	            isSorted = false;
	        }
	        if (iteratee != null) iteratee = cb(iteratee, context);
	        var result = [];
	        var seen = [];
	        for (var i = 0, length = getLength(array); i < length; i++) {
	            var value = array[i],
	                computed = iteratee ? iteratee(value, i, array) : value;
	            if (isSorted) {
	                if (!i || seen !== computed) result.push(value);
	                seen = computed;
	            } else if (iteratee) {
	                if (!_.contains(seen, computed)) {
	                    seen.push(computed);
	                    result.push(value);
	                }
	            } else if (!_.contains(result, value)) {
	                result.push(value);
	            }
	        }
	        return result;
	    };
	
	    // Produce an array that contains the union: each distinct element from all of
	    // the passed-in arrays.
	    _.union = function () {
	        return _.uniq(flatten(arguments, true, true));
	    };
	
	    // Produce an array that contains every item shared between all the
	    // passed-in arrays.
	    _.intersection = function (array) {
	        var result = [];
	        var argsLength = arguments.length;
	        for (var i = 0, length = getLength(array); i < length; i++) {
	            var item = array[i];
	            if (_.contains(result, item)) continue;
	            for (var j = 1; j < argsLength; j++) {
	                if (!_.contains(arguments[j], item)) break;
	            }
	            if (j === argsLength) result.push(item);
	        }
	        return result;
	    };
	
	    // Take the difference between one array and a number of other arrays.
	    // Only the elements present in just the first array will remain.
	    _.difference = function (array) {
	        var rest = flatten(arguments, true, true, 1);
	        return _.filter(array, function (value) {
	            return !_.contains(rest, value);
	        });
	    };
	
	    // Zip together multiple lists into a single array -- elements that share
	    // an index go together.
	    _.zip = function () {
	        return _.unzip(arguments);
	    };
	
	    // Complement of _.zip. Unzip accepts an array of arrays and groups
	    // each array's elements on shared indices
	    _.unzip = function (array) {
	        var length = array && _.max(array, getLength).length || 0;
	        var result = Array(length);
	
	        for (var index = 0; index < length; index++) {
	            result[index] = _.pluck(array, index);
	        }
	        return result;
	    };
	
	    // Converts lists into objects. Pass either a single array of `[key, value]`
	    // pairs, or two parallel arrays of the same length -- one of keys, and one of
	    // the corresponding values.
	    _.object = function (list, values) {
	        var result = {};
	        for (var i = 0, length = getLength(list); i < length; i++) {
	            if (values) {
	                result[list[i]] = values[i];
	            } else {
	                result[list[i][0]] = list[i][1];
	            }
	        }
	        return result;
	    };
	
	    // Generator function to create the findIndex and findLastIndex functions
	    function createPredicateIndexFinder(dir) {
	        return function (array, predicate, context) {
	            predicate = cb(predicate, context);
	            var length = getLength(array);
	            var index = dir > 0 ? 0 : length - 1;
	            for (; index >= 0 && index < length; index += dir) {
	                if (predicate(array[index], index, array)) return index;
	            }
	            return -1;
	        };
	    }
	
	    // Returns the first index on an array-like that passes a predicate test
	    _.findIndex = createPredicateIndexFinder(1);
	    _.findLastIndex = createPredicateIndexFinder(-1);
	
	    // Use a comparator function to figure out the smallest index at which
	    // an object should be inserted so as to maintain order. Uses binary search.
	    _.sortedIndex = function (array, obj, iteratee, context) {
	        iteratee = cb(iteratee, context, 1);
	        var value = iteratee(obj);
	        var low = 0,
	            high = getLength(array);
	        while (low < high) {
	            var mid = Math.floor((low + high) / 2);
	            if (iteratee(array[mid]) < value) low = mid + 1;else high = mid;
	        }
	        return low;
	    };
	
	    // Generator function to create the indexOf and lastIndexOf functions
	    function createIndexFinder(dir, predicateFind, sortedIndex) {
	        return function (array, item, idx) {
	            var i = 0,
	                length = getLength(array);
	            if (typeof idx == 'number') {
	                if (dir > 0) {
	                    i = idx >= 0 ? idx : Math.max(idx + length, i);
	                } else {
	                    length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
	                }
	            } else if (sortedIndex && idx && length) {
	                idx = sortedIndex(array, item);
	                return array[idx] === item ? idx : -1;
	            }
	            if (item !== item) {
	                idx = predicateFind(slice.call(array, i, length), _.isNaN);
	                return idx >= 0 ? idx + i : -1;
	            }
	            for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
	                if (array[idx] === item) return idx;
	            }
	            return -1;
	        };
	    }
	
	    // Return the position of the first occurrence of an item in an array,
	    // or -1 if the item is not included in the array.
	    // If the array is large and already in sort order, pass `true`
	    // for **isSorted** to use binary search.
	    _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
	    _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);
	
	    // Generate an integer Array containing an arithmetic progression. A port of
	    // the native Python `range()` function. See
	    // [the Python documentation](http://docs.python.org/library/functions.html#range).
	    _.range = function (start, stop, step) {
	        if (stop == null) {
	            stop = start || 0;
	            start = 0;
	        }
	        step = step || 1;
	
	        var length = Math.max(Math.ceil((stop - start) / step), 0);
	        var range = Array(length);
	
	        for (var idx = 0; idx < length; idx++, start += step) {
	            range[idx] = start;
	        }
	
	        return range;
	    };
	
	    // Function (ahem) Functions
	    // ------------------
	
	    // Determines whether to execute a function as a constructor
	    // or a normal function with the provided arguments
	    var executeBound = function executeBound(sourceFunc, boundFunc, context, callingContext, args) {
	        if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
	        var self = baseCreate(sourceFunc.prototype);
	        var result = sourceFunc.apply(self, args);
	        if (_.isObject(result)) return result;
	        return self;
	    };
	
	    // Create a function bound to a given object (assigning `this`, and arguments,
	    // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
	    // available.
	    _.bind = function (func, context) {
	        if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
	        if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
	        var args = slice.call(arguments, 2);
	        var bound = function bound() {
	            return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
	        };
	        return bound;
	    };
	
	    // Partially apply a function by creating a version that has had some of its
	    // arguments pre-filled, without changing its dynamic `this` context. _ acts
	    // as a placeholder, allowing any combination of arguments to be pre-filled.
	    _.partial = function (func) {
	        var boundArgs = slice.call(arguments, 1);
	        var bound = function bound() {
	            var position = 0,
	                length = boundArgs.length;
	            var args = Array(length);
	            for (var i = 0; i < length; i++) {
	                args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
	            }
	            while (position < arguments.length) {
	                args.push(arguments[position++]);
	            }return executeBound(func, bound, this, this, args);
	        };
	        return bound;
	    };
	
	    // Bind a number of an object's methods to that object. Remaining arguments
	    // are the method names to be bound. Useful for ensuring that all callbacks
	    // defined on an object belong to it.
	    _.bindAll = function (obj) {
	        var i,
	            length = arguments.length,
	            key;
	        if (length <= 1) throw new Error('bindAll must be passed function names');
	        for (i = 1; i < length; i++) {
	            key = arguments[i];
	            obj[key] = _.bind(obj[key], obj);
	        }
	        return obj;
	    };
	
	    // Memoize an expensive function by storing its results.
	    _.memoize = function (func, hasher) {
	        var memoize = function memoize(key) {
	            var cache = memoize.cache;
	            var address = '' + (hasher ? hasher.apply(this, arguments) : key);
	            if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
	            return cache[address];
	        };
	        memoize.cache = {};
	        return memoize;
	    };
	
	    // Delays a function for the given number of milliseconds, and then calls
	    // it with the arguments supplied.
	    _.delay = function (func, wait) {
	        var args = slice.call(arguments, 2);
	        return setTimeout(function () {
	            return func.apply(null, args);
	        }, wait);
	    };
	
	    // Defers a function, scheduling it to run after the current call stack has
	    // cleared.
	    _.defer = _.partial(_.delay, _, 1);
	
	    // Returns a function, that, when invoked, will only be triggered at most once
	    // during a given window of time. Normally, the throttled function will run
	    // as much as it can, without ever going more than once per `wait` duration;
	    // but if you'd like to disable the execution on the leading edge, pass
	    // `{leading: false}`. To disable execution on the trailing edge, ditto.
	    _.throttle = function (func, wait, options) {
	        var context, args, result;
	        var timeout = null;
	        var previous = 0;
	        if (!options) options = {};
	        var later = function later() {
	            previous = options.leading === false ? 0 : _.now();
	            timeout = null;
	            result = func.apply(context, args);
	            if (!timeout) context = args = null;
	        };
	        return function () {
	            var now = _.now();
	            if (!previous && options.leading === false) previous = now;
	            var remaining = wait - (now - previous);
	            context = this;
	            args = arguments;
	            if (remaining <= 0 || remaining > wait) {
	                if (timeout) {
	                    clearTimeout(timeout);
	                    timeout = null;
	                }
	                previous = now;
	                result = func.apply(context, args);
	                if (!timeout) context = args = null;
	            } else if (!timeout && options.trailing !== false) {
	                timeout = setTimeout(later, remaining);
	            }
	            return result;
	        };
	    };
	
	    // Returns a function, that, as long as it continues to be invoked, will not
	    // be triggered. The function will be called after it stops being called for
	    // N milliseconds. If `immediate` is passed, trigger the function on the
	    // leading edge, instead of the trailing.
	    _.debounce = function (func, wait, immediate) {
	        var timeout, args, context, timestamp, result;
	
	        var later = function later() {
	            var last = _.now() - timestamp;
	
	            if (last < wait && last >= 0) {
	                timeout = setTimeout(later, wait - last);
	            } else {
	                timeout = null;
	                if (!immediate) {
	                    result = func.apply(context, args);
	                    if (!timeout) context = args = null;
	                }
	            }
	        };
	
	        return function () {
	            context = this;
	            args = arguments;
	            timestamp = _.now();
	            var callNow = immediate && !timeout;
	            if (!timeout) timeout = setTimeout(later, wait);
	            if (callNow) {
	                result = func.apply(context, args);
	                context = args = null;
	            }
	
	            return result;
	        };
	    };
	
	    // Returns the first function passed as an argument to the second,
	    // allowing you to adjust arguments, run code before and after, and
	    // conditionally execute the original function.
	    _.wrap = function (func, wrapper) {
	        return _.partial(wrapper, func);
	    };
	
	    // Returns a negated version of the passed-in predicate.
	    _.negate = function (predicate) {
	        return function () {
	            return !predicate.apply(this, arguments);
	        };
	    };
	
	    // Returns a function that is the composition of a list of functions, each
	    // consuming the return value of the function that follows.
	    _.compose = function () {
	        var args = arguments;
	        var start = args.length - 1;
	        return function () {
	            var i = start;
	            var result = args[start].apply(this, arguments);
	            while (i--) {
	                result = args[i].call(this, result);
	            }return result;
	        };
	    };
	
	    // Returns a function that will only be executed on and after the Nth call.
	    _.after = function (times, func) {
	        return function () {
	            if (--times < 1) {
	                return func.apply(this, arguments);
	            }
	        };
	    };
	
	    // Returns a function that will only be executed up to (but not including) the Nth call.
	    _.before = function (times, func) {
	        var memo;
	        return function () {
	            if (--times > 0) {
	                memo = func.apply(this, arguments);
	            }
	            if (times <= 1) func = null;
	            return memo;
	        };
	    };
	
	    // Returns a function that will be executed at most one time, no matter how
	    // often you call it. Useful for lazy initialization.
	    _.once = _.partial(_.before, 2);
	
	    // Object Functions
	    // ----------------
	
	    // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
	    var hasEnumBug = !{ toString: null }.propertyIsEnumerable('toString');
	    var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString', 'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
	
	    function collectNonEnumProps(obj, keys) {
	        var nonEnumIdx = nonEnumerableProps.length;
	        var constructor = obj.constructor;
	        var proto = _.isFunction(constructor) && constructor.prototype || ObjProto;
	
	        // Constructor is a special case.
	        var prop = 'constructor';
	        if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);
	
	        while (nonEnumIdx--) {
	            prop = nonEnumerableProps[nonEnumIdx];
	            if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
	                keys.push(prop);
	            }
	        }
	    }
	
	    // Retrieve the names of an object's own properties.
	    // Delegates to **ECMAScript 5**'s native `Object.keys`
	    _.keys = function (obj) {
	        if (!_.isObject(obj)) return [];
	        if (nativeKeys) return nativeKeys(obj);
	        var keys = [];
	        for (var key in obj) {
	            if (_.has(obj, key)) keys.push(key);
	        } // Ahem, IE < 9.
	        if (hasEnumBug) collectNonEnumProps(obj, keys);
	        return keys;
	    };
	
	    // Retrieve all the property names of an object.
	    _.allKeys = function (obj) {
	        if (!_.isObject(obj)) return [];
	        var keys = [];
	        for (var key in obj) {
	            keys.push(key);
	        } // Ahem, IE < 9.
	        if (hasEnumBug) collectNonEnumProps(obj, keys);
	        return keys;
	    };
	
	    // Retrieve the values of an object's properties.
	    _.values = function (obj) {
	        var keys = _.keys(obj);
	        var length = keys.length;
	        var values = Array(length);
	        for (var i = 0; i < length; i++) {
	            values[i] = obj[keys[i]];
	        }
	        return values;
	    };
	
	    // Returns the results of applying the iteratee to each element of the object
	    // In contrast to _.map it returns an object
	    _.mapObject = function (obj, iteratee, context) {
	        iteratee = cb(iteratee, context);
	        var keys = _.keys(obj),
	            length = keys.length,
	            results = {},
	            currentKey;
	        for (var index = 0; index < length; index++) {
	            currentKey = keys[index];
	            results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
	        }
	        return results;
	    };
	
	    // Convert an object into a list of `[key, value]` pairs.
	    _.pairs = function (obj) {
	        var keys = _.keys(obj);
	        var length = keys.length;
	        var pairs = Array(length);
	        for (var i = 0; i < length; i++) {
	            pairs[i] = [keys[i], obj[keys[i]]];
	        }
	        return pairs;
	    };
	
	    // Invert the keys and values of an object. The values must be serializable.
	    _.invert = function (obj) {
	        var result = {};
	        var keys = _.keys(obj);
	        for (var i = 0, length = keys.length; i < length; i++) {
	            result[obj[keys[i]]] = keys[i];
	        }
	        return result;
	    };
	
	    // Return a sorted list of the function names available on the object.
	    // Aliased as `methods`
	    _.functions = _.methods = function (obj) {
	        var names = [];
	        for (var key in obj) {
	            if (_.isFunction(obj[key])) names.push(key);
	        }
	        return names.sort();
	    };
	
	    // Extend a given object with all the properties in passed-in object(s).
	    _.extend = createAssigner(_.allKeys);
	
	    // Assigns a given object with all the own properties in the passed-in object(s)
	    // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
	    _.extendOwn = _.assign = createAssigner(_.keys);
	
	    // Returns the first key on an object that passes a predicate test
	    _.findKey = function (obj, predicate, context) {
	        predicate = cb(predicate, context);
	        var keys = _.keys(obj),
	            key;
	        for (var i = 0, length = keys.length; i < length; i++) {
	            key = keys[i];
	            if (predicate(obj[key], key, obj)) return key;
	        }
	    };
	
	    // Return a copy of the object only containing the whitelisted properties.
	    _.pick = function (object, oiteratee, context) {
	        var result = {},
	            obj = object,
	            iteratee,
	            keys;
	        if (obj == null) return result;
	        if (_.isFunction(oiteratee)) {
	            keys = _.allKeys(obj);
	            iteratee = optimizeCb(oiteratee, context);
	        } else {
	            keys = flatten(arguments, false, false, 1);
	            iteratee = function iteratee(value, key, obj) {
	                return key in obj;
	            };
	            obj = Object(obj);
	        }
	        for (var i = 0, length = keys.length; i < length; i++) {
	            var key = keys[i];
	            var value = obj[key];
	            if (iteratee(value, key, obj)) result[key] = value;
	        }
	        return result;
	    };
	
	    // Return a copy of the object without the blacklisted properties.
	    _.omit = function (obj, iteratee, context) {
	        if (_.isFunction(iteratee)) {
	            iteratee = _.negate(iteratee);
	        } else {
	            var keys = _.map(flatten(arguments, false, false, 1), String);
	            iteratee = function iteratee(value, key) {
	                return !_.contains(keys, key);
	            };
	        }
	        return _.pick(obj, iteratee, context);
	    };
	
	    // Fill in a given object with default properties.
	    _.defaults = createAssigner(_.allKeys, true);
	
	    // Creates an object that inherits from the given prototype object.
	    // If additional properties are provided then they will be added to the
	    // created object.
	    _.create = function (prototype, props) {
	        var result = baseCreate(prototype);
	        if (props) _.extendOwn(result, props);
	        return result;
	    };
	
	    // Create a (shallow-cloned) duplicate of an object.
	    _.clone = function (obj) {
	        if (!_.isObject(obj)) return obj;
	        return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
	    };
	
	    // Invokes interceptor with the obj, and then returns obj.
	    // The primary purpose of this method is to "tap into" a method chain, in
	    // order to perform operations on intermediate results within the chain.
	    _.tap = function (obj, interceptor) {
	        interceptor(obj);
	        return obj;
	    };
	
	    // Returns whether an object has a given set of `key:value` pairs.
	    _.isMatch = function (object, attrs) {
	        var keys = _.keys(attrs),
	            length = keys.length;
	        if (object == null) return !length;
	        var obj = Object(object);
	        for (var i = 0; i < length; i++) {
	            var key = keys[i];
	            if (attrs[key] !== obj[key] || !(key in obj)) return false;
	        }
	        return true;
	    };
	
	    // Internal recursive comparison function for `isEqual`.
	    var eq = function eq(a, b, aStack, bStack) {
	        // Identical objects are equal. `0 === -0`, but they aren't identical.
	        // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
	        if (a === b) return a !== 0 || 1 / a === 1 / b;
	        // A strict comparison is necessary because `null == undefined`.
	        if (a == null || b == null) return a === b;
	        // Unwrap any wrapped objects.
	        if (a instanceof _) a = a._wrapped;
	        if (b instanceof _) b = b._wrapped;
	        // Compare `[[Class]]` names.
	        var className = toString.call(a);
	        if (className !== toString.call(b)) return false;
	        switch (className) {
	            // Strings, numbers, regular expressions, dates, and booleans are compared by value.
	            case '[object RegExp]':
	            // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
	            case '[object String]':
	                // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
	                // equivalent to `new String("5")`.
	                return '' + a === '' + b;
	            case '[object Number]':
	                // `NaN`s are equivalent, but non-reflexive.
	                // Object(NaN) is equivalent to NaN
	                if (+a !== +a) return +b !== +b;
	                // An `egal` comparison is performed for other numeric values.
	                return +a === 0 ? 1 / +a === 1 / b : +a === +b;
	            case '[object Date]':
	            case '[object Boolean]':
	                // Coerce dates and booleans to numeric primitive values. Dates are compared by their
	                // millisecond representations. Note that invalid dates with millisecond representations
	                // of `NaN` are not equivalent.
	                return +a === +b;
	        }
	
	        var areArrays = className === '[object Array]';
	        if (!areArrays) {
	            if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) != 'object' || (typeof b === 'undefined' ? 'undefined' : _typeof(b)) != 'object') return false;
	
	            // Objects with different constructors are not equivalent, but `Object`s or `Array`s
	            // from different frames are.
	            var aCtor = a.constructor,
	                bCtor = b.constructor;
	            if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor && _.isFunction(bCtor) && bCtor instanceof bCtor) && 'constructor' in a && 'constructor' in b) {
	                return false;
	            }
	        }
	        // Assume equality for cyclic structures. The algorithm for detecting cyclic
	        // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.
	
	        // Initializing stack of traversed objects.
	        // It's done here since we only need them for objects and arrays comparison.
	        aStack = aStack || [];
	        bStack = bStack || [];
	        var length = aStack.length;
	        while (length--) {
	            // Linear search. Performance is inversely proportional to the number of
	            // unique nested structures.
	            if (aStack[length] === a) return bStack[length] === b;
	        }
	
	        // Add the first object to the stack of traversed objects.
	        aStack.push(a);
	        bStack.push(b);
	
	        // Recursively compare objects and arrays.
	        if (areArrays) {
	            // Compare array lengths to determine if a deep comparison is necessary.
	            length = a.length;
	            if (length !== b.length) return false;
	            // Deep compare the contents, ignoring non-numeric properties.
	            while (length--) {
	                if (!eq(a[length], b[length], aStack, bStack)) return false;
	            }
	        } else {
	            // Deep compare objects.
	            var keys = _.keys(a),
	                key;
	            length = keys.length;
	            // Ensure that both objects contain the same number of properties before comparing deep equality.
	            if (_.keys(b).length !== length) return false;
	            while (length--) {
	                // Deep compare each member
	                key = keys[length];
	                if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
	            }
	        }
	        // Remove the first object from the stack of traversed objects.
	        aStack.pop();
	        bStack.pop();
	        return true;
	    };
	
	    // Perform a deep comparison to check if two objects are equal.
	    _.isEqual = function (a, b) {
	        return eq(a, b);
	    };
	
	    // Is a given array, string, or object empty?
	    // An "empty" object has no enumerable own-properties.
	    _.isEmpty = function (obj) {
	        if (obj == null) return true;
	        if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
	        return _.keys(obj).length === 0;
	    };
	
	    // Is a given value a DOM element?
	    _.isElement = function (obj) {
	        return !!(obj && obj.nodeType === 1);
	    };
	
	    // Is a given value an array?
	    // Delegates to ECMA5's native Array.isArray
	    _.isArray = nativeIsArray || function (obj) {
	        return toString.call(obj) === '[object Array]';
	    };
	
	    // Is a given variable an object?
	    _.isObject = function (obj) {
	        var type = typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
	        return type === 'function' || type === 'object' && !!obj;
	    };
	
	    // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
	    _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function (name) {
	        _['is' + name] = function (obj) {
	            return toString.call(obj) === '[object ' + name + ']';
	        };
	    });
	
	    // Define a fallback version of the method in browsers (ahem, IE < 9), where
	    // there isn't any inspectable "Arguments" type.
	    if (!_.isArguments(arguments)) {
	        _.isArguments = function (obj) {
	            return _.has(obj, 'callee');
	        };
	    }
	
	    // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
	    // IE 11 (#1621), and in Safari 8 (#1929).
	    if (typeof /./ != 'function' && (typeof Int8Array === 'undefined' ? 'undefined' : _typeof(Int8Array)) != 'object') {
	        _.isFunction = function (obj) {
	            return typeof obj == 'function' || false;
	        };
	    }
	
	    // Is a given object a finite number?
	    _.isFinite = function (obj) {
	        return isFinite(obj) && !isNaN(parseFloat(obj));
	    };
	
	    // Is the given value `NaN`? (NaN is the only number which does not equal itself).
	    _.isNaN = function (obj) {
	        return _.isNumber(obj) && obj !== +obj;
	    };
	
	    // Is a given value a boolean?
	    _.isBoolean = function (obj) {
	        return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
	    };
	
	    // Is a given value equal to null?
	    _.isNull = function (obj) {
	        return obj === null;
	    };
	
	    // Is a given variable undefined?
	    _.isUndefined = function (obj) {
	        return obj === void 0;
	    };
	
	    // Shortcut function for checking if an object has a given property directly
	    // on itself (in other words, not on a prototype).
	    _.has = function (obj, key) {
	        return obj != null && hasOwnProperty.call(obj, key);
	    };
	
	    // Utility Functions
	    // -----------------
	
	
	    // Keep the identity function around for default iteratees.
	    _.identity = function (value) {
	        return value;
	    };
	
	    // Predicate-generating functions. Often useful outside of Underscore.
	    _.constant = function (value) {
	        return function () {
	            return value;
	        };
	    };
	
	    _.noop = function () {};
	
	    _.property = property;
	
	    // Generates a function for a given object that returns a given property.
	    _.propertyOf = function (obj) {
	        return obj == null ? function () {} : function (key) {
	            return obj[key];
	        };
	    };
	
	    // Returns a predicate for checking whether an object has a given set of
	    // `key:value` pairs.
	    _.matcher = _.matches = function (attrs) {
	        attrs = _.extendOwn({}, attrs);
	        return function (obj) {
	            return _.isMatch(obj, attrs);
	        };
	    };
	
	    // Run a function **n** times.
	    _.times = function (n, iteratee, context) {
	        var accum = Array(Math.max(0, n));
	        iteratee = optimizeCb(iteratee, context, 1);
	        for (var i = 0; i < n; i++) {
	            accum[i] = iteratee(i);
	        }return accum;
	    };
	
	    // Return a random integer between min and max (inclusive).
	    _.random = function (min, max) {
	        if (max == null) {
	            max = min;
	            min = 0;
	        }
	        return min + Math.floor(Math.random() * (max - min + 1));
	    };
	
	    // A (possibly faster) way to get the current timestamp as an integer.
	    _.now = Date.now || function () {
	        return new Date().getTime();
	    };
	
	    // List of HTML entities for escaping.
	    var escapeMap = {
	        '&': '&amp;',
	        '<': '&lt;',
	        '>': '&gt;',
	        '"': '&quot;',
	        "'": '&#x27;',
	        '`': '&#x60;'
	    };
	    var unescapeMap = _.invert(escapeMap);
	
	    // Functions for escaping and unescaping strings to/from HTML interpolation.
	    var createEscaper = function createEscaper(map) {
	        var escaper = function escaper(match) {
	            return map[match];
	        };
	        // Regexes for identifying a key that needs to be escaped
	        var source = '(?:' + _.keys(map).join('|') + ')';
	        var testRegexp = RegExp(source);
	        var replaceRegexp = RegExp(source, 'g');
	        return function (string) {
	            string = string == null ? '' : '' + string;
	            return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
	        };
	    };
	    _.escape = createEscaper(escapeMap);
	    _.unescape = createEscaper(unescapeMap);
	
	    // If the value of the named `property` is a function then invoke it with the
	    // `object` as context; otherwise, return it.
	    _.result = function (object, property, fallback) {
	        var value = object == null ? void 0 : object[property];
	        if (value === void 0) {
	            value = fallback;
	        }
	        return _.isFunction(value) ? value.call(object) : value;
	    };
	
	    // Generate a unique integer id (unique within the entire client session).
	    // Useful for temporary DOM ids.
	    var idCounter = 0;
	    _.uniqueId = function (prefix) {
	        var id = ++idCounter + '';
	        return prefix ? prefix + id : id;
	    };
	
	    // By default, Underscore uses ERB-style template delimiters, change the
	    // following template settings to use alternative delimiters.
	    _.templateSettings = {
	        evaluate: /<%([\s\S]+?)%>/g,
	        interpolate: /<%=([\s\S]+?)%>/g,
	        escape: /<%-([\s\S]+?)%>/g
	    };
	
	    // When customizing `templateSettings`, if you don't want to define an
	    // interpolation, evaluation or escaping regex, we need one that is
	    // guaranteed not to match.
	    var noMatch = /(.)^/;
	
	    // Certain characters need to be escaped so that they can be put into a
	    // string literal.
	    var escapes = {
	        "'": "'",
	        '\\': '\\',
	        '\r': 'r',
	        '\n': 'n',
	        '\u2028': 'u2028',
	        '\u2029': 'u2029'
	    };
	
	    var escaper = /\\|'|\r|\n|\u2028|\u2029/g;
	
	    var escapeChar = function escapeChar(match) {
	        return '\\' + escapes[match];
	    };
	
	    // JavaScript micro-templating, similar to John Resig's implementation.
	    // Underscore templating handles arbitrary delimiters, preserves whitespace,
	    // and correctly escapes quotes within interpolated code.
	    // NB: `oldSettings` only exists for backwards compatibility.
	    _.template = function (text, settings, oldSettings) {
	        if (!settings && oldSettings) settings = oldSettings;
	        settings = _.defaults({}, settings, _.templateSettings);
	
	        // Combine delimiters into one regular expression via alternation.
	        var matcher = RegExp([(settings.escape || noMatch).source, (settings.interpolate || noMatch).source, (settings.evaluate || noMatch).source].join('|') + '|$', 'g');
	
	        // Compile the template source, escaping string literals appropriately.
	        var index = 0;
	        var source = "__p+='";
	        text.replace(matcher, function (match, escape, interpolate, evaluate, offset) {
	            source += text.slice(index, offset).replace(escaper, escapeChar);
	            index = offset + match.length;
	
	            if (escape) {
	                source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
	            } else if (interpolate) {
	                source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
	            } else if (evaluate) {
	                source += "';\n" + evaluate + "\n__p+='";
	            }
	
	            // Adobe VMs need the match returned to produce the correct offest.
	            return match;
	        });
	        source += "';\n";
	
	        // If a variable is not specified, place data values in local scope.
	        if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';
	
	        source = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + source + 'return __p;\n';
	
	        try {
	            var render = new Function(settings.variable || 'obj', '_', source);
	        } catch (e) {
	            e.source = source;
	            throw e;
	        }
	
	        var template = function template(data) {
	            return render.call(this, data, _);
	        };
	
	        // Provide the compiled source as a convenience for precompilation.
	        var argument = settings.variable || 'obj';
	        template.source = 'function(' + argument + '){\n' + source + '}';
	
	        return template;
	    };
	
	    // Add a "chain" function. Start chaining a wrapped Underscore object.
	    _.chain = function (obj) {
	        var instance = _(obj);
	        instance._chain = true;
	        return instance;
	    };
	
	    // OOP
	    // ---------------
	    // If Underscore is called as a function, it returns a wrapped object that
	    // can be used OO-style. This wrapper holds altered versions of all the
	    // underscore functions. Wrapped objects may be chained.
	
	    // Helper function to continue chaining intermediate results.
	    var result = function result(instance, obj) {
	        return instance._chain ? _(obj).chain() : obj;
	    };
	
	    // Add your own custom functions to the Underscore object.
	    _.mixin = function (obj) {
	        _.each(_.functions(obj), function (name) {
	            var func = _[name] = obj[name];
	            _.prototype[name] = function () {
	                var args = [this._wrapped];
	                push.apply(args, arguments);
	                return result(this, func.apply(_, args));
	            };
	        });
	    };
	
	    // Add all of the Underscore functions to the wrapper object.
	    _.mixin(_);
	
	    // Add all mutator Array functions to the wrapper.
	    _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function (name) {
	        var method = ArrayProto[name];
	        _.prototype[name] = function () {
	            var obj = this._wrapped;
	            method.apply(obj, arguments);
	            if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
	            return result(this, obj);
	        };
	    });
	
	    // Add all accessor Array functions to the wrapper.
	    _.each(['concat', 'join', 'slice'], function (name) {
	        var method = ArrayProto[name];
	        _.prototype[name] = function () {
	            return result(this, method.apply(this._wrapped, arguments));
	        };
	    });
	
	    // Extracts the result from a wrapped and chained object.
	    _.prototype.value = function () {
	        return this._wrapped;
	    };
	
	    // Provide unwrapping proxy for some methods used in engine operations
	    // such as arithmetic and JSON stringification.
	    _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;
	
	    _.prototype.toString = function () {
	        return '' + this._wrapped;
	    };
	
	    module.exports = _;
	}).call(undefined);

/***/ },
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "attr": {},
	      "classList": [
	        "item-content-circular"
	      ],
	      "shown": function () {return !this.videoLoaded},
	      "children": [
	        {
	          "type": "progress",
	          "attr": {
	            "type": "circular"
	          },
	          "classList": [
	            "circular-1"
	          ]
	        },
	        {
	          "type": "text",
	          "attr": {
	            "value": "正在努力加载中······"
	          },
	          "classList": [
	            "item-title"
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {
	        "id": "playerBox"
	      },
	      "classList": [
	        "player"
	      ],
	      "id": "playerBox",
	      "style": {
	        "height": function () {return (this.playHeight) + 'px'}
	      },
	      "shown": function () {return this.videoLoaded},
	      "children": [
	        {
	          "type": "stack",
	          "attr": {},
	          "children": [
	            {
	              "type": "video",
	              "attr": {
	                "id": "player",
	                "src": function () {return this.videosrc},
	                "poster": function () {return this.poster},
	                "autoplay": function () {return this.isWIFI}
	              },
	              "id": "player"
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": "您正在使用非wifi网络，播放将产生流量费用"
	              },
	              "classList": [
	                "wifi-tip"
	              ],
	              "shown": function () {return this.showNoneWifiWarning}
	            },
	            {
	              "type": "image",
	              "attr": {
	                "src": "../Common/images/like-ico.png"
	              },
	              "classList": [
	                "video_back"
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {},
	      "shown": function () {return this.videoLoaded},
	      "classList": [
	        "no-player"
	      ],
	      "style": {
	        "width": "100%"
	      },
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "header"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.video.video_name}
	              },
	              "classList": [
	                "title"
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "share_area"
	              ],
	              "events": {
	                "click": function (evt) {this.shareText({title:this.video.video_name,cover:this.poster,playUrl:this.videosrc},evt)}
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": "../Common/images/share-ico.png"
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "videoInfo"
	          ],
	          "shown": function () {return this.showDescVisible},
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "videoInfo-play"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return (this.video.play_count) + '播放'}
	                  },
	                  "classList": [
	                    "video-play"
	                  ]
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.video.publish_time}
	                  },
	                  "classList": [
	                    "video-publishTime"
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": function () {return this.video.video_desc}
	              },
	              "classList": [
	                "video-desc"
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "userinfo",
	            "top-shadow"
	          ],
	          "children": [
	            {
	              "type": "image",
	              "attr": {
	                "src": function () {return this.userInfo.small_pic}
	              },
	              "classList": [
	                "userinfo-avatar"
	              ]
	            },
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "userinfo-text"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.userInfo.nickname}
	                  },
	                  "classList": [
	                    "userinfo-nickname"
	                  ]
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "shown": function () {return this.video.keyword&&this.video.keyword.length},
	                  "classList": [
	                    "tag-list-div"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {},
	                      "classList": [
	                        "tag-list",
	                        "fix-android-align"
	                      ],
	                      "repeat": function () {return this.video.keyword},
	                      "children": [
	                        {
	                          "type": "span",
	                          "attr": {
	                            "value": function () {return this.$item}
	                          }
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "album",
	            "wrap",
	            "top-shadow"
	          ],
	          "shown": function () {return this.albumList&&this.albumList.length},
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "videoInfo-tip"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": " 出品人剧集"
	                  },
	                  "classList": [
	                    "title"
	                  ]
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "查看更多"
	                  },
	                  "classList": [
	                    "more"
	                  ],
	                  "events": {
	                    "click": "toggleAlbumShow"
	                  }
	                }
	              ]
	            },
	            {
	              "type": "list",
	              "attr": {
	                "id": "cprList",
	                "scrollpage": "true"
	              },
	              "classList": function () {return ['album-list', this.loadingAlbumList?'loading-album1':'', this.minAlbumPage==1?'first-done':'', this.maxAlbumPage==this.albumPageCount?'last-done':'']},
	              "events": {
	                "scrolltop": "albumLoadFirst",
	                "scrollbottom": "albumLoadLast"
	              },
	              "id": "cprList",
	              "children": [
	                {
	                  "type": "list-item",
	                  "attr": {
	                    "type": "listItem",
	                    "id": function () {return 'albumItem' + (this.$item.vid)}
	                  },
	                  "repeat": function () {return this.albumList},
	                  "id": function () {return 'albumItem' + (this.$item.vid)},
	                  "events": {
	                    "click": function (evt) {this.routePush('Play',{vid:this.$item.vid,site:this.$item.site,aid:this.$item.aid,user_id:this.$item.user_id},evt)}
	                  },
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.$item.video_name}
	                      },
	                      "classList": function () {return ['album-text', this.$item.vid==this.vid?'curr':'']}
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {},
	              "classList": [
	                "dummy"
	              ],
	              "shown": function () {return this.albumList.length<=2&&this.albumItemCount>2},
	              "children": [
	                {
	                  "type": "span",
	                  "attr": {
	                    "value": "目前只有一个视频"
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "recom",
	            "",
	            "wrap",
	            "top-shadow"
	          ],
	          "shown": function () {return this.recom&&this.recom.length},
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "videoInfo-tip"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": " 相关推荐"
	                  },
	                  "classList": [
	                    "title"
	                  ]
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "查看更多"
	                  },
	                  "classList": [
	                    "more"
	                  ],
	                  "events": {
	                    "click": function (evt) {this.toggleBlock('recomShown',evt)}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "list",
	              "attr": {},
	              "classList": [
	                "recom-list"
	              ],
	              "style": {
	                "columns": 2
	              },
	              "children": [
	                {
	                  "type": "list-item",
	                  "attr": {
	                    "type": "listItem"
	                  },
	                  "classList": [
	                    "recom-list-item"
	                  ],
	                  "repeat": function () {return this.recom},
	                  "events": {
	                    "click": function (evt) {this.routePush('Play',{vid:this.$item.vid,site:this.$item.site,aid:this.$item.aid,user_id:this.$item.user_id},evt)}
	                  },
	                  "children": [
	                    {
	                      "type": "image",
	                      "attr": {
	                        "src": function () {return this.$item.hor_big_pic}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.$item.video_name}
	                      }
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "comment",
	            "wrap",
	            "top-shadow"
	          ],
	          "shown": function () {return this.comment&&this.comment.comments},
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "videoInfo-tip"
	              ],
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "评论"
	                  },
	                  "classList": [
	                    "title"
	                  ]
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return '共' + (this.comment.participation_sum) + '人参与/' + (this.comment.cmt_sum) + '条评论'}
	                  },
	                  "classList": [
	                    "more"
	                  ],
	                  "shown": function () {return this.comment.cmt_sum>3}
	                }
	              ]
	            },
	            {
	              "type": "list",
	              "attr": {},
	              "classList": [
	                "comment-list"
	              ],
	              "shown": function () {return this.comment.comments&&this.comment.comments.length>0},
	              "style": {
	                "columns": 1
	              },
	              "children": [
	                {
	                  "type": "list-item",
	                  "attr": {
	                    "type": "listItem"
	                  },
	                  "repeat": function () {return this.comment.comments},
	                  "classList": [
	                    "item"
	                  ],
	                  "children": [
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "user-info"
	                      ],
	                      "children": [
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "children": [
	                            {
	                              "type": "image",
	                              "attr": {
	                                "src": function () {return this.$item.passport.img_url}
	                              }
	                            },
	                            {
	                              "type": "text",
	                              "attr": {
	                                "value": function () {return this.$item.passport.nickname}
	                              }
	                            }
	                          ]
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return this.$item.publishDate}
	                          },
	                          "classList": [
	                            "date"
	                          ]
	                        }
	                      ]
	                    },
	                    {
	                      "type": "div",
	                      "attr": {},
	                      "classList": [
	                        "comment-content"
	                      ],
	                      "children": [
	                        {
	                          "type": "div",
	                          "attr": {},
	                          "classList": [
	                            "floor-box"
	                          ],
	                          "shown": function () {return this.$item.comments&&this.$item.comments.length}
	                        },
	                        {
	                          "type": "text",
	                          "attr": {
	                            "value": function () {return this.$item.content}
	                          },
	                          "classList": [
	                            "content"
	                          ]
	                        }
	                      ]
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": " 暂无评论 "
	              },
	              "shown": function () {return this.comment.comments&&this.comment.comments.length==0},
	              "classList": [
	                "no-comment"
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {
	        "show": function () {return this.albumShown}
	      },
	      "classList": [
	        "fix-popup"
	      ],
	      "shown": function () {return this.albumList&&this.albumList.length},
	      "style": {
	        "height": function () {return (this.pageHeight) + 'px'},
	        "top": function () {return (this.playHeight) + 'px'}
	      },
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "popup-title"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "出品人剧集"
	              },
	              "classList": [
	                "title"
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": "关闭"
	              },
	              "classList": [
	                "close"
	              ],
	              "events": {
	                "click": "toggleAlbumShow"
	              }
	            }
	          ]
	        },
	        {
	          "type": "list",
	          "attr": {
	            "scrollpage": "true"
	          },
	          "classList": function () {return ['album-popup-list', this.minAlbumPage==1?'first-done':'', this.maxAlbumPage==this.albumPageCount?'last-done':'']},
	          "style": {
	            "height": function () {return (this.pageHeight-this.popupTitleHeight) + 'px'},
	            "columns": 1
	          },
	          "events": {
	            "scrolltop": "albumLoadFirst",
	            "scrollbottom": "albumLoadLast"
	          },
	          "children": [
	            {
	              "type": "list-item",
	              "attr": {
	                "id": function () {return 'albumItemPopup' + (this.$idx)},
	                "type": "listItem"
	              },
	              "classList": function () {return ['album-item', 'item-' + (this.$idx)]},
	              "repeat": function () {return this.albumList},
	              "id": function () {return 'albumItemPopup' + (this.$idx)},
	              "events": {
	                "click": function (evt) {this.routePush('Play',{vid:this.$item.vid,site:this.$item.site,aid:this.$item.aid,user_id:this.$item.user_id},evt)}
	              },
	              "children": [
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": function () {return this.$item.video_name}
	                  },
	                  "classList": function () {return ['title', this.$item.vid==this.vid?'curr':'']}
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "info"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return (this.$item.playCount) + '次播放'}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.$item.publishDate}
	                      }
	                    }
	                  ]
	                }
	              ]
	            },
	            {
	              "type": "list-item",
	              "attr": {
	                "type": "loadMore"
	              },
	              "classList": [
	                "load-more"
	              ],
	              "shown": function () {return this.albumItemCount>4},
	              "children": [
	                {
	                  "type": "progress",
	                  "attr": {
	                    "type": "circular"
	                  }
	                },
	                {
	                  "type": "text",
	                  "attr": {
	                    "value": "加载更多"
	                  }
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    },
	    {
	      "type": "div",
	      "attr": {
	        "show": function () {return this.recomShown}
	      },
	      "classList": [
	        "fix-popup"
	      ],
	      "shown": function () {return this.recomAll&&this.recomAll.length},
	      "style": {
	        "height": function () {return (this.pageHeight) + 'px'},
	        "top": function () {return (this.playHeight) + 'px'}
	      },
	      "children": [
	        {
	          "type": "div",
	          "attr": {},
	          "classList": [
	            "popup-title"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "value": "相关推荐"
	              },
	              "classList": [
	                "title"
	              ]
	            },
	            {
	              "type": "text",
	              "attr": {
	                "value": "关闭"
	              },
	              "classList": [
	                "close"
	              ],
	              "events": {
	                "click": function (evt) {this.toggleBlock('recomShown',evt)}
	              }
	            }
	          ]
	        },
	        {
	          "type": "list",
	          "attr": {},
	          "classList": function () {return ['recom-popup-list', this.minAlbumPage==1?'first-done':'', this.maxAlbumPage==this.albumPageCount?'last-done':'']},
	          "style": {
	            "height": function () {return (this.pageHeight-this.popupTitleHeight) + 'px'},
	            "columns": 1
	          },
	          "children": [
	            {
	              "type": "list-item",
	              "attr": {
	                "type": "product"
	              },
	              "classList": [
	                "item"
	              ],
	              "repeat": function () {return this.recomAll},
	              "events": {
	                "click": function (evt) {this.routePush('Play',{vid:this.$item.vid,site:this.$item.site,aid:this.$item.aid,user_id:this.$item.user_id},evt)}
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return this.$item.hor_big_pic}
	                  }
	                },
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "info"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return this.$item.video_name}
	                      },
	                      "classList": [
	                        "title"
	                      ]
	                    },
	                    {
	                      "type": "text",
	                      "attr": {
	                        "value": function () {return (this.$item.playCount) + '播放'}
	                      },
	                      "classList": [
	                        "play-count"
	                      ]
	                    }
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = {
	  "page": {
	    "backgroundColor": "#ffffff"
	  },
	  ".container": {
	    "flex": 1,
	    "flexDirection": "column"
	  },
	  ".wrap": {
	    "paddingTop": "20px",
	    "paddingRight": "20px",
	    "paddingBottom": "20px",
	    "paddingLeft": "20px"
	  },
	  ".fix-popup": {
	    "position": "fixed",
	    "top": "422px",
	    "left": "0px",
	    "width": "100%",
	    "zIndex": 99,
	    "backgroundColor": "#ffffff",
	    "flexDirection": "column",
	    "flex": 1
	  },
	  ".fix-popup-visible": {},
	  ".fix-popup .popup-title": {
	    "display": "flex",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "width": "100%",
	    "height": "130px",
	    "left": "0px",
	    "top": "0px",
	    "marginTop": "10px",
	    "marginRight": "0px",
	    "marginBottom": "10px",
	    "marginLeft": "0px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "fix-popup"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "popup-title"
	        }
	      ]
	    }
	  },
	  ".fix-popup .popup-title .title": {
	    "color": "#1a1a1a",
	    "fontSize": "30px",
	    "lineHeight": "30px",
	    "marginLeft": "20px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "fix-popup"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "popup-title"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "title"
	        }
	      ]
	    }
	  },
	  ".fix-popup .popup-title .close": {
	    "fontSize": "30px",
	    "lineHeight": "30px",
	    "marginRight": "20px",
	    "display": "flex",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "fix-popup"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "popup-title"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "close"
	        }
	      ]
	    }
	  },
	  ".album-popup-list": {
	    "marginTop": "0px"
	  },
	  ".album-popup-list .album-item": {
	    "marginBottom": "55px",
	    "paddingTop": "0px",
	    "paddingRight": "30px",
	    "paddingBottom": "0px",
	    "paddingLeft": "30px",
	    "flexDirection": "column",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "album-popup-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "album-item"
	        }
	      ]
	    }
	  },
	  ".album-popup-list .item-0": {
	    "marginTop": "60px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "album-popup-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "item-0"
	        }
	      ]
	    }
	  },
	  ".first-done .item-0": {
	    "marginTop": "0px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "first-done"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "item-0"
	        }
	      ]
	    }
	  },
	  ".album-popup-list .album-item .title": {
	    "fontSize": "30px",
	    "height": "40px",
	    "lineHeight": "40px",
	    "width": "100%",
	    "color": "#1a1a1a",
	    "lines": 1,
	    "textOverflow": "ellipsis",
	    "marginBottom": "25px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "album-popup-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "album-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "title"
	        }
	      ]
	    }
	  },
	  ".album-popup-list .album-item .curr": {
	    "color": "#ff3521",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "album-popup-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "album-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "curr"
	        }
	      ]
	    }
	  },
	  ".album-popup-list .album-item .info": {
	    "display": "flex",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "album-popup-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "album-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "info"
	        }
	      ]
	    }
	  },
	  ".album-popup-list .album-item .info text": {
	    "fontSize": "26px",
	    "height": "26px",
	    "lineHeight": "26px",
	    "color": "#a6a6a6",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "album-popup-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "album-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "info"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
	  },
	  ".header": {
	    "display": "flex",
	    "justifyContent": "space-between",
	    "alignItems": "center",
	    "zIndex": 2,
	    "backgroundColor": "#ffffff"
	  },
	  ".header .title": {
	    "fontSize": "34px",
	    "color": "#1a1a1a",
	    "textOverflow": "ellipsis",
	    "lines": 2,
	    "lineHeight": "54px",
	    "marginTop": "10px",
	    "marginRight": "0px",
	    "marginBottom": "10px",
	    "marginLeft": "20px",
	    "width": "622px",
	    "fontWeight": "bold",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "header"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "title"
	        }
	      ]
	    }
	  },
	  ".header .share_area": {
	    "marginRight": "24px",
	    "alignItems": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "header"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "share_area"
	        }
	      ]
	    }
	  },
	  ".header .share_area image": {
	    "width": "30px",
	    "height": "30px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "header"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "share_area"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "image"
	        }
	      ]
	    }
	  },
	  ".header .more-arrow-wrapper": {
	    "width": "80px",
	    "lineHeight": "54px",
	    "marginTop": "10px",
	    "marginRight": "0px",
	    "marginBottom": "10px",
	    "marginLeft": "0px",
	    "fontSize": "34px",
	    "right": "5px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "header"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "more-arrow-wrapper"
	        }
	      ]
	    }
	  },
	  ".video-title": {
	    "fontSize": "40px",
	    "lines": 1,
	    "textOverflow": "ellipsis"
	  },
	  ".player": {
	    "width": "750px",
	    "height": "422px",
	    "position": "fixed",
	    "top": "0px",
	    "left": "0px",
	    "justifyContent": "center",
	    "zIndex": 9999,
	    "alignItems": "center",
	    "flexDirection": "column"
	  },
	  ".player video": {
	    "width": "750px",
	    "height": "422px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "player"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "video"
	        }
	      ]
	    }
	  },
	  ".player .wifi-tip": {
	    "width": "100%",
	    "height": "46px",
	    "textAlign": "center",
	    "lineHeight": "46px",
	    "fontSize": "28px",
	    "color": "#ffffff",
	    "backgroundColor": "#e64340",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "player"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "wifi-tip"
	        }
	      ]
	    }
	  },
	  ".player .video_back": {
	    "width": "32px",
	    "height": "30px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "player"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "video_back"
	        }
	      ]
	    }
	  },
	  ".no-player": {
	    "marginTop": "442px",
	    "top": "422px",
	    "left": "0px",
	    "flexDirection": "column"
	  },
	  ".userinfo": {
	    "flexDirection": "row",
	    "height": "210px",
	    "alignItems": "center"
	  },
	  ".userinfo-avatar": {
	    "width": "110px",
	    "height": "110px",
	    "marginLeft": "20px",
	    "borderRadius": "55px"
	  },
	  ".userinfo-text": {
	    "display": "flex",
	    "flexDirection": "column",
	    "justifyContent": "center",
	    "height": "210px",
	    "left": "150px",
	    "top": "0px",
	    "width": "580px"
	  },
	  ".userinfo-nickname": {
	    "color": "#1a1a1a",
	    "fontSize": "30px",
	    "lineHeight": "30px",
	    "marginLeft": "20px"
	  },
	  ".tag-list-div": {
	    "marginTop": "20px",
	    "marginRight": "0px",
	    "marginBottom": "0px",
	    "marginLeft": "20px",
	    "flexDirection": "row"
	  },
	  ".tag-list": {
	    "fontSize": "20px",
	    "borderTopWidth": "1px",
	    "borderRightWidth": "1px",
	    "borderBottomWidth": "1px",
	    "borderLeftWidth": "1px",
	    "borderStyle": "solid",
	    "borderTopColor": "#b2b2b2",
	    "borderRightColor": "#b2b2b2",
	    "borderBottomColor": "#b2b2b2",
	    "borderLeftColor": "#b2b2b2",
	    "borderRadius": "20px",
	    "lines": 1,
	    "textOverflow": "ellipsis",
	    "lineHeight": "30px",
	    "color": "#a6a6a6",
	    "paddingTop": "5px",
	    "paddingRight": "10px",
	    "paddingBottom": "0px",
	    "paddingLeft": "10px",
	    "marginRight": "10px",
	    "height": "30px",
	    "alignItems": "center",
	    "justifyContent": "center"
	  },
	  ".videoInfo-tip": {
	    "justifyContent": "space-between",
	    "flexDirection": "row",
	    "height": "60px",
	    "marginBottom": "10px"
	  },
	  ".videoInfo-tip .title": {
	    "fontSize": "30px",
	    "lineHeight": "60px",
	    "fontWeight": "bold",
	    "height": "60px",
	    "color": "#1a1a1a",
	    "left": "0px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "videoInfo-tip"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "title"
	        }
	      ]
	    }
	  },
	  ".videoInfo-tip .more": {
	    "fontSize": "26px",
	    "color": "#a6a6a6",
	    "lineHeight": "60px",
	    "fontWeight": "normal",
	    "paddingTop": "5px",
	    "height": "60px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "videoInfo-tip"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "more"
	        }
	      ]
	    }
	  },
	  ".comment .videoInfo-tip .title": {
	    "width": "20%",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "comment"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "videoInfo-tip"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "title"
	        }
	      ]
	    }
	  },
	  ".comment .videoInfo-tip .more": {
	    "width": "80%",
	    "textAlign": "right",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "comment"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "videoInfo-tip"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "more"
	        }
	      ]
	    }
	  },
	  ".videoInfo": {
	    "display": "flex",
	    "flexDirection": "column",
	    "marginTop": "0px",
	    "marginRight": "20px",
	    "marginBottom": "20px",
	    "marginLeft": "20px"
	  },
	  ".videoInfo-play": {
	    "fontSize": "26px",
	    "flexDirection": "row",
	    "height": "26px",
	    "lineHeight": "26px"
	  },
	  ".video-play": {
	    "color": "#a6a6a6",
	    "marginRight": "16px"
	  },
	  ".video-publishTime": {
	    "color": "#a6a6a6",
	    "marginRight": "16px"
	  },
	  ".video-desc": {
	    "fontSize": "26px",
	    "color": "#a6a6a6",
	    "lineHeight": "38px",
	    "paddingTop": "10px"
	  },
	  ".top-shadow": {
	    "background": "{\"values\":[{\"type\":\"linearGradient\",\"directions\":[\"to\",\"bottom\"],\"values\":[\"#f5f5f5\",\"#ffffff\"]}]}"
	  },
	  ".album": {
	    "flexDirection": "column"
	  },
	  ".album .album-list": {
	    "height": "110px",
	    "width": "100%",
	    "flexDirection": "row",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "album"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "album-list"
	        }
	      ]
	    }
	  },
	  ".album .album-list list-item": {
	    "width": "310px",
	    "height": "110px",
	    "backgroundColor": "#f5f5f5",
	    "justifyContent": "center",
	    "alignItems": "center",
	    "borderRadius": "12px",
	    "marginRight": "20px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "album"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "album-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "list-item"
	        }
	      ]
	    }
	  },
	  ".album .album-list .dummy": {
	    "opacity": 0,
	    "width": "620px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "album"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "album-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "dummy"
	        }
	      ]
	    }
	  },
	  ".album .album-list  .album-text": {
	    "fontSize": "30px",
	    "color": "#1a1a1a",
	    "lines": 2,
	    "textOverflow": "ellipsis",
	    "lineHeight": "42px",
	    "height": "84px",
	    "width": "270px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "album"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "album-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "album-text"
	        }
	      ]
	    }
	  },
	  ".album .album-list .curr": {
	    "color": "#ff3521",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "album"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "album-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "curr"
	        }
	      ]
	    }
	  },
	  ".recom": {
	    "paddingBottom": "0px",
	    "flexDirection": "column"
	  },
	  ".recom-list": {
	    "width": "710px",
	    "height": "690px"
	  },
	  ".recom-list-item": {
	    "width": "345px",
	    "paddingBottom": "20px",
	    "flexDirection": "column"
	  },
	  ".recom-list-item image": {
	    "width": "100%",
	    "height": "194px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "recom-list-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "image"
	        }
	      ]
	    }
	  },
	  ".recom-list-item text": {
	    "width": "100%",
	    "fontSize": "30px",
	    "color": "#1a1a1a",
	    "textOverflow": "ellipsis",
	    "lines": 2,
	    "marginTop": "24px",
	    "marginRight": "0px",
	    "marginBottom": "24px",
	    "marginLeft": "0px",
	    "lineHeight": "42px",
	    "height": "84px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "recom-list-item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
	  },
	  ".recom-popup-list": {
	    "flexDirection": "column",
	    "marginTop": "0px",
	    "justifyContent": "center"
	  },
	  ".recom-popup-list .item": {
	    "height": "170px",
	    "marginTop": "20px",
	    "marginRight": "20px",
	    "marginBottom": "20px",
	    "marginLeft": "20px",
	    "flexDirection": "row",
	    "justifyContent": "space-between",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "recom-popup-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "item"
	        }
	      ]
	    }
	  },
	  ".recom-popup-list  .item image": {
	    "width": "300px",
	    "height": "170px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "recom-popup-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "image"
	        }
	      ]
	    }
	  },
	  ".recom-popup-list .item .info": {
	    "flexDirection": "column",
	    "width": "450px",
	    "paddingTop": "20px",
	    "paddingRight": "20px",
	    "paddingBottom": "20px",
	    "paddingLeft": "20px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "recom-popup-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "info"
	        }
	      ]
	    }
	  },
	  ".recom-popup-list .item .title": {
	    "color": "#1a1a1a",
	    "fontSize": "30px",
	    "lineHeight": "42px",
	    "height": "84px",
	    "textOverflow": "ellipsis",
	    "lines": 2,
	    "top": "14px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "recom-popup-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "title"
	        }
	      ]
	    }
	  },
	  ".recom-popup-list .item .play-count": {
	    "color": "#a6a6a6",
	    "fontSize": "26px",
	    "bottom": "18px",
	    "left": "340px",
	    "lineHeight": "30px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "recom-popup-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "item"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "play-count"
	        }
	      ]
	    }
	  },
	  ".comment": {
	    "paddingBottom": "0px",
	    "flexDirection": "column",
	    "marginBottom": "100px"
	  },
	  ".comment .no-comment": {
	    "height": "86px",
	    "display": "flex",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "color": "#a6a6a6",
	    "fontSize": "26px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "comment"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "no-comment"
	        }
	      ]
	    }
	  },
	  ".comment-list": {
	    "width": "710px",
	    "flex": 1,
	    "height": "300px"
	  },
	  ".comment-list  .item": {
	    "paddingTop": "20px",
	    "paddingRight": "0px",
	    "paddingBottom": "20px",
	    "paddingLeft": "0px",
	    "justifyContent": "center",
	    "marginBottom": "15px",
	    "flexDirection": "column",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "comment-list"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "item"
	        }
	      ]
	    }
	  },
	  ".user-info": {
	    "display": "flex",
	    "justifyContent": "space-between",
	    "paddingRight": "10px",
	    "alignItems": "center",
	    "marginBottom": "3px"
	  },
	  ".user-info > div": {
	    "display": "flex",
	    "alignItems": "center",
	    "width": "560px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "user-info"
	        },
	        {
	          "t": "child"
	        },
	        {
	          "t": "t",
	          "n": "div"
	        }
	      ]
	    }
	  },
	  ".user-info image": {
	    "width": "60px",
	    "height": "60px",
	    "borderRadius": "30px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "user-info"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "image"
	        }
	      ]
	    }
	  },
	  ".user-info text": {
	    "color": "#a6a6a6",
	    "fontSize": "26px",
	    "marginLeft": "20px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "user-info"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "t",
	          "n": "text"
	        }
	      ]
	    }
	  },
	  ".user-info .date": {
	    "color": "#a6a6a6",
	    "fontSize": "22px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "user-info"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "date"
	        }
	      ]
	    }
	  },
	  ".comment-content": {
	    "alignItems": "flex-start",
	    "paddingLeft": "80px",
	    "color": "#1a1a1a",
	    "fontSize": "30px",
	    "lineHeight": "42px"
	  },
	  ".comment-content .floor-box": {
	    "backgroundColor": "#f5f5f5",
	    "marginTop": "10px",
	    "marginBottom": "20px",
	    "paddingTop": "0px",
	    "paddingRight": "20px",
	    "paddingBottom": "10px",
	    "paddingLeft": "20px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "comment-content"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "floor-box"
	        }
	      ]
	    }
	  },
	  ".comment-content .content": {
	    "marginTop": "4px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "comment-content"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "content"
	        }
	      ]
	    }
	  },
	  ".item-content-circular": {
	    "marginBottom": "60px",
	    "flexDirection": "column",
	    "alignItems": "center",
	    "justifyContent": "center",
	    "flexGrow": 1,
	    "flex": 1
	  },
	  ".circular-1": {
	    "width": "60px",
	    "height": "60px",
	    "color": "#09ba07"
	  }
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _data;
	
	var _underscore = __webpack_require__(8);
	
	var _underscore2 = _interopRequireDefault(_underscore);
	
	var _common = __webpack_require__(7);
	
	var _common2 = _interopRequireDefault(_common);
	
	var _wxDiscode = __webpack_require__(14);
	
	var _wxDiscode2 = _interopRequireDefault(_wxDiscode);
	
	var _system = $app_require$('@app-module/system.prompt');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.router');
	
	var _system4 = _interopRequireDefault(_system3);
	
	var _system5 = $app_require$('@app-module/system.fetch');
	
	var _system6 = _interopRequireDefault(_system5);
	
	var _system7 = $app_require$('@app-module/system.share');
	
	var _system8 = _interopRequireDefault(_system7);
	
	var _system9 = $app_require$('@app-module/system.device');
	
	var _system10 = _interopRequireDefault(_system9);
	
	var _system11 = $app_require$('@app-module/system.network');
	
	var _system12 = _interopRequireDefault(_system11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var useM3u8 = false;
	module.exports = {
	    data: (_data = {
	        toView: 'playerBox',
	        isAndroid: true,
	        hidePopup: true,
	        videoLoaded: false,
	        albumIndex: 0,
	        duration: '',
	        albumFirstPage: 1,
	        albumScrollLeft: 0,
	        albumScrollTop: 0,
	        pageHeight: 0,
	        playHeight: 0,
	        ts: new Date().getTime(),
	        isWIFI: true,
	        showNoneWifiWarning: false,
	        video: {},
	        userInfo: {},
	        recom: {},
	        recomAll: {},
	        albumList: {},
	        albumPageSize: 50,
	        minAlbumPage: 0,
	        maxAlbumPage: 0,
	        albumItemCount: 0,
	        albumPageCount: 0,
	        albumShown: false,
	        albumShownOnce: false,
	        recomShown: false,
	        videosrc: '',
	        videotitle: '',
	        isEnd: false,
	        poster: '',
	        showDesc: false,
	        showDescPopup: false,
	        showDescVisible: false,
	        frozen: false,
	        commentFrozen: false,
	        loadingAlbumList: false,
	        comment: {},
	        comment_page_no: 1,
	        ratio: 2,
	        albumListWidth: 710 / 2,
	        albumItemWidth: 310 / 2,
	        albumItemMargin: 20 / 2,
	        albumLoadingGap: 60 / 2,
	        popupTitleHeight: 130 / 2,
	        popupAlbumItemHeight: 91 / 2,
	        popupAlbumItemGap: 55 / 2,
	        videoContext: null
	    }, _defineProperty(_data, 'video', {}), _defineProperty(_data, 'vid', ''), _defineProperty(_data, 'aid', ''), _defineProperty(_data, 'uid', ''), _defineProperty(_data, 'deviceInfo', {}), _data),
	    onShareAppMessage: function onShareAppMessage() {
	        return {
	            title: '来，看我分享的视频' || this.video.video_name,
	            desc: this.video.video_desc,
	            path: '/sohutv/play/play?site=2&aid=' + this.aid + '&vid=' + this.vid + '&user_id=' + this.uid
	        };
	    },
	    onReady: function onReady() {},
	    goIndex: function goIndex(name, index) {
	        this.$element(name) && this.$element(name).scrollTo({ index: index, smooth: true });
	    },
	    getDeviceInfo: function getDeviceInfo() {
	        var that = this;
	        _system10.default.getInfo({
	            success: function success(ret) {
	                that.deviceInfo = ret;
	                var ratio = 750 / that.deviceInfo.screenWidth;
	                that.ratio = ratio;
	                that.albumListWidth = Math.floor(710 / ratio);
	                that.albumItemWidth = Math.floor(310 / ratio);
	                that.albumItemMargin = Math.floor(20 / ratio);
	                that.albumLoadingGap = Math.floor(60 / ratio);
	                that.popupTitleHeight = Math.floor(130 / ratio);
	                that.popupAlbumItemHeight = Math.floor(91 / ratio);
	                that.popupAlbumItemGap = Math.floor(55 / ratio);
	                var playerBoxHeight = Math.round(0.563 * that.deviceInfo.screenWidth);
	                that.videoContext = that.$element('player');
	                that.pageHeight = that.deviceInfo.screenHeight - playerBoxHeight;
	                that.playHeight = playerBoxHeight > 422 ? 422 : playerBoxHeight;
	            },
	            fail: function fail(erromsg, errocode) {
	                that.deviceInfo = { errocode: erromsg };
	            }
	        });
	    },
	    onInit: function onInit() {
	        var me = this;
	        var uid = me.user_id;
	        var vid = me.vid;
	        var aid = me.aid;
	        me.uid = uid;
	        me.vid = vid;
	        me.aid = aid;
	        me.getDeviceInfo();
	
	        _system12.default.getType({
	            success: function success(ret) {
	                var networkType = ret;
	                if (networkType['type'] !== 'wifi') {
	                    me.isWIFI = false;
	                    setTimeout(function () {
	                        me.isWIFI = true;
	                    }, 3000);
	                } else {
	                    setTimeout(function () {
	                        me.videoContext && me.videoContext.start();
	                    }, 1000);
	                }
	
	                me.getPlayInfo(vid);
	            }
	        });
	
	        if (uid && Number(uid) > 0) {
	            me.getPgcUserInfo(uid);
	        }
	
	        if (aid && Number(aid) > 0) {
	            me.getAlbumList(aid);
	            me.getRecomList(aid);
	        }
	
	        me.loadCommentFirst(vid);
	    },
	    getPgcUserInfo: function getPgcUserInfo(uid) {
	        var me = this;
	        _system6.default.fetch({
	            url: 'https://api.tv.sohu.com/v4/user/info/' + uid + '.json?api_key=f351515304020cad28c92f70f002261c',
	            method: 'GET',
	            success: function success(res) {
	                res = JSON.parse(res.data);
	                me.userInfo = res.data;
	            },
	            fail: function fail() {
	                _system2.default.showToast({
	                    message: '获取出品人失败！'
	                });
	            }
	        });
	    },
	    getRecomList: function getRecomList(albumld) {
	        var me = this;
	        _system6.default.fetch({
	            url: _common2.default.tv_api_uri + '/v4/search/recommend.json?site=2&vid=' + me.vid + '&aid=' + albumld + '&plat=17&api_key=f351515304020cad28c92f70f002261c&sver=6.2&partner=78&poid=1',
	            success: function success(res) {
	                var res = JSON.parse(res.data);
	                var vList = res.data.videos;
	                _underscore2.default.each(vList, function (item) {
	                    item.playCount = _common2.default.shortFixedCount(item.play_count);
	                });
	                me.recomAll = vList;
	                me.recom = vList.slice(0, 4);
	            },
	            fail: function fail(res) {
	                _system2.default.showToast({
	                    message: '获取推荐视频失败！'
	                });
	            }
	        });
	    },
	    getAlbumList: function getAlbumList(albumId) {
	        var me = this;
	        me.loadAlbumList(albumId, null, me.vid, function (res) {
	            var ls = res.videos,
	                scrollLeft = 0,
	                albumIndex = 0;
	            _underscore2.default.each(ls, function (item, idx) {
	                if (item.vid == me.vid) {
	                    albumIndex = idx;
	                    scrollLeft = idx * (me.albumItemWidth + me.albumItemMargin) + me.albumItemWidth / 2 - me.albumListWidth / 2;
	                    if (idx == ls.length - 1) {
	                        scrollLeft -= (me.albumListWidth - me.albumItemWidth) / 2;
	                    }
	                    scrollLeft = scrollLeft > 0 ? scrollLeft : 0;
	                    scrollLeft += res.page == 1 ? 0 : me.albumLoadingGap;
	                }
	            });
	            me.albumIndex = albumIndex;
	            me.albumList = ls;
	            me.minAlbumPage = res.page;
	            me.maxAlbumPage = res.page;
	            me.albumFirstPage = res.page;
	            me.albumItemCount = res.count;
	            me.albumPageCount = Math.ceil(res.count / me.albumPageSize);
	            setTimeout(function () {
	                var left = albumIndex == 0 ? 0 : albumIndex * (me.albumItemWidth + me.albumItemMargin);
	                left += res.page == 1 ? 0 : me.albumLoadingGap;
	                me.albumScrollLeft = scrollLeft;
	            }, 20);
	            setTimeout(function () {
	                me.goIndex('cprList', albumIndex);
	            }, 1000);
	        });
	    },
	    loadCommentFirst: function loadCommentFirst(vid) {
	        var that = this;
	        _system6.default.fetch({
	            url: 'https://m.tv.sohu.com/changyan/api/2/topic/load?wx=notuse&client_id=cyqyBluaj&topic_url=http://m.tv.sohu.com/u/vw/' + vid + '.shtml&topic_source_id=bk' + vid + '&page_size=0&hot_size=0',
	            success: function success(res) {
	                var res = JSON.parse(res.data);
	                that.comment = res;
	                setTimeout(function () {
	                    that.getCommentList();
	                }, 20);
	            },
	            fail: function fail() {
	                _system2.default.showToast({
	                    message: '获取评论失败！'
	                });
	            }
	        });
	    },
	    getCommentList: function getCommentList() {
	        var c = this.comment;
	        if (c.cmt_sum != undefined && c.comments.length >= c.cmt_sum || this.commentFrozen) return;
	        var that = this;
	        that.commentFrozen = true;
	        _system6.default.fetch({
	            url: 'https://m.tv.sohu.com/changyan/api/2/topic/comments?wx=notuse&client_id=cyqyBluaj&topic_id=' + c.topic_id + '&order_by=time&page_size=30&page_no=' + that.comment_page_no,
	            success: function success(res) {
	                var rs = JSON.parse(res.data);
	                if (rs.comments) {
	                    _underscore2.default.each(rs.comments, function (item) {
	                        item.publishDate = _common2.default.formatDateStr(new Date(item.create_time), 'yyyy-MM-dd');
	                        item.commentsR = item.comments.reverse();
	                        item.content = _wxDiscode2.default.strDiscode(item.content);
	                        _underscore2.default.each(item.commentsR, function (innerItem) {
	                            innerItem.content = _wxDiscode2.default.strDiscode(innerItem.content);
	                        });
	                    });
	                }
	                var currComment = that.comment;
	                var comments = currComment.comments || [];
	                currComment.comments = comments.concat(rs.comments);
	                that.comment = currComment;
	                that.comment_page_no = that.comment_page_no + 1;
	                setTimeout(function () {
	                    that.commentFrozen = false;
	                }, 500);
	            },
	            fail: function fail() {}
	        });
	    },
	    albumLoadFirst: function albumLoadFirst() {
	        var that = this,
	            lowPage = this.minAlbumPage;
	        if (lowPage > 1) {
	            that.loadingAlbumList = true;
	            that.loadAlbumList(that.aid, lowPage - 1, that.vid, function (res) {
	                var currList = that.albumList,
	                    ls = res.videos,
	                    scrollLeft = 0;
	                that.loadingAlbumList = false;
	                that.albumList = ls.concat(currList);
	                that.minAlbumPage = lowPage - 1;
	            });
	        }
	    },
	    albumLoadLast: function albumLoadLast() {
	        var that = this,
	            upPage = this.maxAlbumPage;
	        if (upPage > 0 && upPage < this.albumPageCount) {
	            that.loadAlbumList(that.aid, upPage + 1, that.vid, function (res) {
	                var currList = that.albumList,
	                    ls = res.videos,
	                    scrollLeft = 0;
	                that.loadingAlbumList = false;
	                that.albumList = currList.concat(ls);
	                that.minAlbumPage = upPage + 1;
	            });
	        }
	    },
	    loadAlbumList: function loadAlbumList(albumId, page, vid, callback) {
	        if (this.frozen) return;
	        this.frozen = true;
	        var that = this;
	        var url = _common2.default.tv_api_uri + '/v4/album/videos/' + albumId + '.json?page_size=' + that.albumPageSize + '&with_trailer=1&with_fee_video=3&prevideo_rule=2&order=1&vid=' + vid + '&plat=17&api_key=f351515304020cad28c92f70f002261c&sver=6.2&partner=78&poid=1';
	        if (page && page > 1) {
	            url = _common2.default.tv_api_uri + '/v4/album/videos/' + albumId + '.json?page_size=' + that.albumPageSize + '&page=' + (page == null ? 1 : page) + '&with_trailer=1&with_fee_video=3&prevideo_rule=2&order=1&plat=17&api_key=f351515304020cad28c92f70f002261c&sver=6.2&partner=78&poid=1';
	        }
	        _system6.default.fetch({
	            url: url,
	            success: function success(res) {
	                var res = JSON.parse(res.data);
	                var vList = res.data.videos;
	                _underscore2.default.each(vList, function (item) {
	                    item.playCount = _common2.default.shortFixedCount(item.play_count);
	                    item.publishDate = _common2.default.formatDateStr(new Date(item.create_date), 'yyyy-MM-dd');
	                });
	                callback && callback(res.data);
	                setTimeout(function () {
	                    that.frozen = false;
	                }, 500);
	            },
	            fail: function fail(res) {
	                _system2.default.showToast({
	                    message: '获取出品人剧集！'
	                });
	            }
	        });
	    },
	    toggleAlbumShow: function toggleAlbumShow(e) {
	        var that = this;
	        that.albumShown = !this.albumShown;
	        if (this.albumShown) {
	            var scrollTop = that.albumIndex * (that.popupAlbumItemHeight + that.popupAlbumItemGap) + that.popupAlbumItemGap - (that.pageHeight - that.popupTitleHeight) / 2;
	            scrollTop = scrollTop > 0 ? scrollTop : 0;
	            setTimeout(function () {
	                that.albumScrollTop = scrollTop + (that.albumFirstPage == 1 ? 0 : that.albumLoadingGap);
	            }, 20);
	        }
	    },
	    onShow: function onShow() {
	        var me = this;
	        if (me.isWIFI) {
	            _system12.default.subscribe({
	                success: function success(res) {
	                    var networkType = JSON.stringify(res).type;
	                    if (networkType !== 'wifi') {
	                        me.isWIFI = false;
	                        setTimeout(function () {
	                            me.isWIFI = true;
	                        }, 3000);
	                    } else {
	                        if (me.videoLoaded) {
	                            me.videoContext.start();
	                        }
	                    }
	                }
	            });
	        }
	    },
	    onHide: function onHide() {
	        var ct = this.$element('player');
	        this.videoContext && this.videoContext.pause();
	    },
	    onUnload: function onUnload() {
	        var ct = this.$element('player');
	        this.videoContext && this.videoContext.pause();
	    },
	    getPlayInfo: function getPlayInfo(vid, callback) {
	        var me = this;
	        var video = {};
	        var url = 'https://api.tv.sohu.com/phone_playinfo?vid=' + vid + '&site=2&encoding=utf-8&plat=17&partner=78&api_key=f351515304020cad28c92f70f002261c&sver=6.2&poid=1';
	
	        _system6.default.fetch({
	            url: url,
	            data: {},
	            dataType: 'json',
	            method: 'GET',
	            header: {
	                'content-type': 'application/json'
	            },
	            success: function success(res) {
	                var res = JSON.parse(res.data);
	                var video = res && res.data;
	
	                video.keyword = video.keyword && video.keyword.trim() ? video.keyword.split(" ") : [];
	
	                video.play_count = _common2.default.shortFixedCount(video.play_count);
	                me.video = video;
	                if (!me.aid || me.aid == '0') {
	                    me.aid = video.aid;
	                }
	
	                var isArray = function isArray(obj) {
	                    return Object.prototype.toString.call(obj) === '[object Array]';
	                };
	
	                var urls = video.urls || {};
	                var videosrc = '';
	                var formatUrl = function formatUrl(url) {
	
	                    url = url || '';
	                    if (isArray(url)) {
	                        url = url[0];
	                    }
	                    url = url.replace('http://', 'https://');
	                    return url;
	                };
	
	                for (var i in urls) {
	                    if (urls.hasOwnProperty(i)) {
	                        if (i === 'downloadUrl') {
	                            if (urls[i][0] && urls[i][0] !== '') {
	                                urls[i][0] = formatUrl(urls[i][0]);
	                            }
	                        } else {
	                            for (var j in urls[i]) {
	                                if (urls[i].hasOwnProperty(j)) {
	                                    _underscore2.default.each(urls[i][j], function (src, idx) {
	                                        src = formatUrl(src);
	                                        urls[i][j][idx] = src;
	                                    }, me);
	                                }
	                            }
	                        }
	                    }
	                }
	
	                if (useM3u8 && !!urls['m3u8']) {
	                    videosrc = urls['m3u8']['nor'][0] || urls['m3u8']['hig'][0] || urls['m3u8']['sup'][0];
	                } else {
	                    videosrc = urls['downloadUrl'][0] || urls['mp4']['hig'][0] || '';
	                }
	
	                video.urls = urls;
	
	                console.info(" useM3u8****:" + useM3u8 + " videosrc====> " + videosrc);
	                me.video = video;
	                me.videoLoaded = true;
	                me.duration = video.duration;
	                me.videosrc = videosrc;
	                me.videotitle = encodeURIComponent(video.video_name || '');
	                me.poster = video.video_big_pic || video.hor_w8_pic || '';
	                if (video && video.user_id && (!me.uid || me.uid == '0')) {
	                    me.uid = video.user_id;
	                    me.getPgcUserInfo(video.user_id);
	                }
	
	                setTimeout(function () {
	                    me.hidePopup = false;
	                }, 500);
	
	                callback && callback();
	            },
	            fail: function fail(res) {
	                _system2.default.showToast({});
	                callback && callback();
	            }
	        });
	    },
	    playstart: function playstart(evt) {
	        var me = this;
	    },
	    playpause: function playpause(evt) {
	        var me = this;
	    },
	    playended: function playended(evt) {
	        var d = this;
	        console.log('playended');
	        if (d.albumList && d.albumList.length > 1 && d.albumIndex < d.albumList.length - 1) {
	            var item = d.albumList[d.albumIndex + 1];
	            _system4.default.push({
	                uri: 'Play',
	                params: {
	                    site: item.site,
	                    user_id: d.uid,
	                    vid: item.vid,
	                    aid: item.aid
	                }
	            });
	        }
	    },
	    toggleBlock: function toggleBlock(cname) {
	        if (cname) {
	            this[cname] = !this[cname];
	        } else {
	            this.showDesc = !this.showDesc;
	            this.showDescVisible = !this.showDescVisible;
	        }
	    },
	
	    refreshUrl: function refreshUrl(options) {
	        var me = this;
	        var uid = options.user_id;
	        var vid = options.vid;
	        var aid = options.aid;
	        me.uid = uid;
	        me.vid = vid;
	        me.aid = aid;
	        me.getPlayInfo(vid);
	
	        if (uid && Number(uid) > 0) {
	            me.getPgcUserInfo(uid);
	        }
	
	        if (aid && Number(aid) > 0) {
	            me.getAlbumList(aid);
	            me.getRecomList(aid);
	        }
	
	        me.loadCommentFirst(vid);
	    },
	    shareText: function shareText(sharedata) {
	        _system8.default.share({
	            type: 'text/html',
	            data: sharedata.title + sharedata.playUrl,
	            success: function success(data) {
	                console.log("分享成功");
	            },
	            fail: function fail(data, code) {
	                console.log("handling fail, code=" + code);
	            }
	        });
	    },
	    routePush: function routePush(path, params) {
	        this.refreshUrl(params);
	    }
	};
	
	var moduleOwn = exports.default || module.exports;
	var accessors = ['public', 'protected', 'private'];
	
	if (moduleOwn.data && accessors.some(function (acc) {
	    return moduleOwn[acc];
	})) {
	    throw new Error('页面VM对象中的属性data不可与"' + accessors.join(',') + '"同时存在，请使用private替换data名称');
	} else if (!moduleOwn.data) {
	    moduleOwn.data = {};
	    moduleOwn._descriptor = {};
	    accessors.forEach(function (acc) {
	        var accType = _typeof(moduleOwn[acc]);
	        if (accType === 'object') {
	            moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
	            for (var name in moduleOwn[acc]) {
	                moduleOwn._descriptor[name] = { access: acc };
	            }
	        } else if (accType === 'function') {
	            console.warn('页面VM对象中的属性' + acc + '的值不能是函数，请使用对象');
	        }
	    });
	}}

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	// HTML 支持的数学符号
	function strNumDiscode(str) {
	    str = str.replace(/&forall;/g, '∀');
	    str = str.replace(/&part;/g, '∂');
	    str = str.replace(/&exists;/g, '∃');
	    str = str.replace(/&empty;/g, '∅');
	    str = str.replace(/&nabla;/g, '∇');
	    str = str.replace(/&isin;/g, '∈');
	    str = str.replace(/&notin;/g, '∉');
	    str = str.replace(/&ni;/g, '∋');
	    str = str.replace(/&prod;/g, '∏');
	    str = str.replace(/&sum;/g, '∑');
	    str = str.replace(/&minus;/g, '−');
	    str = str.replace(/&lowast;/g, '∗');
	    str = str.replace(/&radic;/g, '√');
	    str = str.replace(/&prop;/g, '∝');
	    str = str.replace(/&infin;/g, '∞');
	    str = str.replace(/&ang;/g, '∠');
	    str = str.replace(/&and;/g, '∧');
	    str = str.replace(/&or;/g, '∨');
	    str = str.replace(/&cap;/g, '∩');
	    str = str.replace(/&cap;/g, '∪');
	    str = str.replace(/&int;/g, '∫');
	    str = str.replace(/&there4;/g, '∴');
	    str = str.replace(/&sim;/g, '∼');
	    str = str.replace(/&cong;/g, '≅');
	    str = str.replace(/&asymp;/g, '≈');
	    str = str.replace(/&ne;/g, '≠');
	    str = str.replace(/&le;/g, '≤');
	    str = str.replace(/&ge;/g, '≥');
	    str = str.replace(/&sub;/g, '⊂');
	    str = str.replace(/&sup;/g, '⊃');
	    str = str.replace(/&nsub;/g, '⊄');
	    str = str.replace(/&sube;/g, '⊆');
	    str = str.replace(/&supe;/g, '⊇');
	    str = str.replace(/&oplus;/g, '⊕');
	    str = str.replace(/&otimes;/g, '⊗');
	    str = str.replace(/&perp;/g, '⊥');
	    str = str.replace(/&sdot;/g, '⋅');
	    return str;
	}
	
	//HTML 支持的希腊字母
	function strGreeceDiscode(str) {
	    str = str.replace(/&Alpha;/g, 'Α');
	    str = str.replace(/&Beta;/g, 'Β');
	    str = str.replace(/&Gamma;/g, 'Γ');
	    str = str.replace(/&Delta;/g, 'Δ');
	    str = str.replace(/&Epsilon;/g, 'Ε');
	    str = str.replace(/&Zeta;/g, 'Ζ');
	    str = str.replace(/&Eta;/g, 'Η');
	    str = str.replace(/&Theta;/g, 'Θ');
	    str = str.replace(/&Iota;/g, 'Ι');
	    str = str.replace(/&Kappa;/g, 'Κ');
	    str = str.replace(/&Lambda;/g, 'Λ');
	    str = str.replace(/&Mu;/g, 'Μ');
	    str = str.replace(/&Nu;/g, 'Ν');
	    str = str.replace(/&Xi;/g, 'Ν');
	    str = str.replace(/&Omicron;/g, 'Ο');
	    str = str.replace(/&Pi;/g, 'Π');
	    str = str.replace(/&Rho;/g, 'Ρ');
	    str = str.replace(/&Sigma;/g, 'Σ');
	    str = str.replace(/&Tau;/g, 'Τ');
	    str = str.replace(/&Upsilon;/g, 'Υ');
	    str = str.replace(/&Phi;/g, 'Φ');
	    str = str.replace(/&Chi;/g, 'Χ');
	    str = str.replace(/&Psi;/g, 'Ψ');
	    str = str.replace(/&Omega;/g, 'Ω');
	
	    str = str.replace(/&alpha;/g, 'α');
	    str = str.replace(/&beta;/g, 'β');
	    str = str.replace(/&gamma;/g, 'γ');
	    str = str.replace(/&delta;/g, 'δ');
	    str = str.replace(/&epsilon;/g, 'ε');
	    str = str.replace(/&zeta;/g, 'ζ');
	    str = str.replace(/&eta;/g, 'η');
	    str = str.replace(/&theta;/g, 'θ');
	    str = str.replace(/&iota;/g, 'ι');
	    str = str.replace(/&kappa;/g, 'κ');
	    str = str.replace(/&lambda;/g, 'λ');
	    str = str.replace(/&mu;/g, 'μ');
	    str = str.replace(/&nu;/g, 'ν');
	    str = str.replace(/&xi;/g, 'ξ');
	    str = str.replace(/&omicron;/g, 'ο');
	    str = str.replace(/&pi;/g, 'π');
	    str = str.replace(/&rho;/g, 'ρ');
	    str = str.replace(/&sigmaf;/g, 'ς');
	    str = str.replace(/&sigma;/g, 'σ');
	    str = str.replace(/&tau;/g, 'τ');
	    str = str.replace(/&upsilon;/g, 'υ');
	    str = str.replace(/&phi;/g, 'φ');
	    str = str.replace(/&chi;/g, 'χ');
	    str = str.replace(/&psi;/g, 'ψ');
	    str = str.replace(/&omega;/g, 'ω');
	    str = str.replace(/&thetasym;/g, 'ϑ');
	    str = str.replace(/&upsih;/g, 'ϒ');
	    str = str.replace(/&piv;/g, 'ϖ');
	    str = str.replace(/&middot;/g, '·');
	    return str;
	}
	
	// 
	
	function strcharacterDiscode(str) {
	    // 加入常用解析
	    str = str.replace(/&nbsp;/g, ' ');
	    str = str.replace(/&quot;/g, '"');
	    str = str.replace(/&amp;/g, '&');
	    // str = str.replace(/&lt;/g, '‹');
	    // str = str.replace(/&gt;/g, '›');
	
	    str = str.replace(/&lt;/g, '<');
	    str = str.replace(/&gt;/g, '>');
	
	    return str;
	}
	
	// HTML 支持的其他实体
	function strOtherDiscode(str) {
	    str = str.replace(/&OElig;/g, 'Œ');
	    str = str.replace(/&oelig;/g, 'œ');
	    str = str.replace(/&Scaron;/g, 'Š');
	    str = str.replace(/&scaron;/g, 'š');
	    str = str.replace(/&Yuml;/g, 'Ÿ');
	    str = str.replace(/&fnof;/g, 'ƒ');
	    str = str.replace(/&circ;/g, 'ˆ');
	    str = str.replace(/&tilde;/g, '˜');
	    str = str.replace(/&ensp;/g, '');
	    str = str.replace(/&emsp;/g, '');
	    str = str.replace(/&thinsp;/g, '');
	    str = str.replace(/&zwnj;/g, '');
	    str = str.replace(/&zwj;/g, '');
	    str = str.replace(/&lrm;/g, '');
	    str = str.replace(/&rlm;/g, '');
	    str = str.replace(/&ndash;/g, '–');
	    str = str.replace(/&mdash;/g, '—');
	    str = str.replace(/&lsquo;/g, '‘');
	    str = str.replace(/&rsquo;/g, '’');
	    str = str.replace(/&sbquo;/g, '‚');
	    str = str.replace(/&ldquo;/g, '“');
	    str = str.replace(/&rdquo;/g, '”');
	    str = str.replace(/&bdquo;/g, '„');
	    str = str.replace(/&dagger;/g, '†');
	    str = str.replace(/&Dagger;/g, '‡');
	    str = str.replace(/&bull;/g, '•');
	    str = str.replace(/&hellip;/g, '…');
	    str = str.replace(/&permil;/g, '‰');
	    str = str.replace(/&prime;/g, '′');
	    str = str.replace(/&Prime;/g, '″');
	    str = str.replace(/&lsaquo;/g, '‹');
	    str = str.replace(/&rsaquo;/g, '›');
	    str = str.replace(/&oline;/g, '‾');
	    str = str.replace(/&euro;/g, '€');
	    str = str.replace(/&trade;/g, '™');
	
	    str = str.replace(/&larr;/g, '←');
	    str = str.replace(/&uarr;/g, '↑');
	    str = str.replace(/&rarr;/g, '→');
	    str = str.replace(/&darr;/g, '↓');
	    str = str.replace(/&harr;/g, '↔');
	    str = str.replace(/&crarr;/g, '↵');
	    str = str.replace(/&lceil;/g, '⌈');
	    str = str.replace(/&rceil;/g, '⌉');
	
	    str = str.replace(/&lfloor;/g, '⌊');
	    str = str.replace(/&rfloor;/g, '⌋');
	    str = str.replace(/&loz;/g, '◊');
	    str = str.replace(/&spades;/g, '♠');
	    str = str.replace(/&clubs;/g, '♣');
	    str = str.replace(/&hearts;/g, '♥');
	
	    str = str.replace(/&diams;/g, '♦');
	
	    return str;
	}
	
	function strMoreDiscode(str) {
	    str = str.replace(/\r\n/g, "");
	    str = str.replace(/\n/g, "");
	
	    str = str.replace(/code/g, "wxxxcode-style");
	    return str;
	}
	
	function strDiscode(str) {
	    str = strNumDiscode(str);
	    str = strGreeceDiscode(str);
	    str = strcharacterDiscode(str);
	    str = strOtherDiscode(str);
	    str = strMoreDiscode(str);
	    str = str.replace(/\[emoji.+?\]/ig, '');
	    return str;
	}
	function urlToHttpUrl(url, rep) {
	
	    var patt1 = new RegExp("^//");
	    var result = patt1.test(url);
	    if (result) {
	        url = rep + ":" + url;
	    }
	    return url;
	}
	
	module.exports = {
	    strDiscode: strDiscode,
	    urlToHttpUrl: urlToHttpUrl
	};

/***/ }
/******/ ]);
  };
  if (typeof window === "undefined") {
    return createPageHandler();
  }
  else {
    window.createPageHandler = createPageHandler
  }
})();
//# sourceMappingURL=play.js.map