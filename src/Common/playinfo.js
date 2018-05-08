/**
 * 播放信息
 * https://api.tv.sohu.com/phone_playinfo
 */
var useM3u8 = false;
var util = {
  isArray : function (obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  },
  formatUrl : function(url){
    url = url || '';
    if (this.isArray(url)) {
      url = url[0];
    }
    url = url.replace('http://', 'https://');// mp4
    return url;
  }
}
var _ = require('./underscore.js');
import fetch from '@system.fetch'
import prompt from '@system.prompt'
import Futil from '../util.js'
var gData=Futil.data;
module.exports={
  video : {},
  playUrl : '',
  getPlayInfo : function(vid,site,callback){
    var video = {};
    var me = this;
    fetch.fetch({
      url: gData.playInfoApi+'&vid='+vid+'&uid='+gData.uid+'&muid='+ gData.muid+'&site='+site+'&plat=17&api_key=f351515304020cad28c92f70f002261c&sver=6.2&partner=78&poid=1&encoding=UTF-8',
      dataType: 'json',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var res=JSON.parse(res.data);
        if (res.status&& res.data) {
          var urls = {},videosrc = '';
          video = res.data;
          urls = video.urls || {};
          for (var i in urls) {
            if (urls.hasOwnProperty(i)) {
              //i=m3u8 | mp4
              if (i === 'downloadUrl') {
                  if (urls[i][0] && urls[i][0] !== '') {
                    urls[i][0] = util.formatUrl(urls[i][0]);
                  }
              }else {
                for (var j in urls[i]) {
                  if (urls[i].hasOwnProperty(j)) {
                    //j= nor|hig| sup
                    _.each(urls[i][j], function (src, idx) {
                      src = util.formatUrl(src);
                      urls[i][j][idx] = src;
                    },me);
                  }
                }
              }
            }
          }
          if (useM3u8 && !!urls['m3u8']) {
            console.log('m3u8')
            videosrc = urls['m3u8']['nor'][0] || urls['m3u8']['hig'][0] || urls['m3u8']['sup'][0];
            videosrc = encodeURI(videosrc);
          }
          else {
            console.log('not m3u8')
            videosrc = urls['downloadUrl'][0] || urls['mp4']['hig'][0] ||   '';
            videosrc = encodeURI(videosrc);
          }
          video.urls = urls;
          me.video = video;
          me.playUrl = videosrc;
          callback && callback(me.playUrl);
        }
      }
    })
  }
};
