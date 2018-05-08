/**
 * Created by guoqingzhou on 16/12/22.
 * 公用方法
 */
var _ = require("./underscore.js");
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
        obj2Query: function (obj) {
            return Object.keys(obj).map(function (k) {
                return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
            }).join('&');
        },
        uuid: function () {
            return (+new Date() * 1e6 + Math.floor(Math.random() * 1e6)).toString(36);
        },
        muid: function(){
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
        formatDateStr: function (date, format) {
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
                    format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k]
                        : ('00' + o[k]).substr(('' + o[k]).length));
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
        shortFixedCount: function (count) {
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
        secondsToTime: function (seconds) {
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
        secondsToTimeText: function (seconds) {
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
        makeWxPlayUrl: function (obj) {
            var site = obj['site'] || '2';
            var vid = obj['vid']||'';
            // var aid = obj['aid'] || obj['sid'] || "0";
            // var user_id = obj['user_id']  || "";
            var url_h5 = '/56tv/play/play';
            if (site == '2') {
                url_h5 = '/56tv/play/play';
            }
            var req_params= common.obj2Query({
                vid:vid,
                site:site
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
            url_h5=url_h5+'?'+req_params;
            if (obj['cid'] && obj['cid'] == '1') {
                //付费电影或无版权电影
                if (obj['fee'] == 2 || obj['mobileLimit'] == '2' || obj['mobile_limit'] == '2') {

                }
            }
            return url_h5;
        },
        //h5_url
        makePlayUrl: function (obj) {
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
        isBoke: function (opts) {
            opts = opts || {};
            var boke = opts['boke'] || 0;
            if (boke > 0) {
                return (boke == 1);
            }
            //用户没有传递boke参数，但是传递了site参数
            var site = opts["site"] || 0; //ugc site=2
            if (site > 0) {
                return (site == 2);
            }
            //既没有传递boke参数也没有传递site参数，则默认不是播客
            if (boke == 1 || site > 1) {
                return true;
            } else {
                return false;
            }
        },
        parserUrlParam: function (k, url) {
            url=url||'';
            var reg = new RegExp("(^|&|\\\\?)" + k + "=([^&]*)(&|$|#)"), r = null;
            if (r = url.match(reg)) return r[2];
            return "";
        },
        filterXSS: function (str) {
            if (_.isString(str)) {
                return str.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;").replace(/\'/g, "&apos;").replace(/\`/g, "&#x60;");
            }else{
                return str;
            }
        },
        resizeShareCover: function(img){
          var data = /(.*)cut@.*w=(\d*),.*(\w{3}$)/.exec(img);
          if(data && data.length>2){
            var orgSrc = data && data[1];
            var wid = data[2];
            // 小程序分享的图片比例为5：4
            var shareSrc = orgSrc + 'cut@m=fit,w=320,h=' + wid * 4 / 5 + '.'+data[3];
            return shareSrc;
          }else{
            return img;
          }
        },
        isArray: function (obj) {
          return Object.prototype.toString.call(obj) === '[object Array]';
        },
        formatUrl: function (url) {
          url = url || '';
          if (this.isArray(url)) {
            url = url[0];
          }
          url = url.replace('http://', 'https://');// mp4
          return url;
        }
    };
    module.exports = common;

}());
