import _ from '../Common/underscore.js'
import common from '../Common/common.js'
import WxParse from '../Common/wxDiscode.js'
import prompt from '@system.prompt'
import router from '@system.router'
import fetch from '@system.fetch'
import share from '@system.share'
import device from '@system.device'
import network from '@system.network'
var useM3u8 = false;
module.exports={
      data: {
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
        playHeight:0,
        ts: new Date().getTime(),
        isWIFI: true,//是否是Wi-Fi环境
        showNoneWifiWarning: false,//显示视频播放非WiFi提示浮层
        video: {},//视频信息
        userInfo: {},//用户信息
        recom: {},//推荐信息
        recomAll: {},
        albumList: {}, //剧集
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
        albumListWidth: 710/2,
        albumItemWidth: 310/2,
        albumItemMargin: 20/2,
        albumLoadingGap: 60/2,
        popupTitleHeight: 130/2,
        popupAlbumItemHeight: 91/2,
        popupAlbumItemGap: 55/2,
        videoContext:null,
        video:{},
        vid:'',
        aid:'',
        uid:'',
        deviceInfo:{}
    },
    onShareAppMessage: function () {
        return {
            title: '来，看我分享的视频' || this.video.video_name,
            desc: this.video.video_desc,
            path: '/sohutv/play/play?site=2&aid=' + this.aid + '&vid=' + this.vid + '&user_id=' + this.uid
        }
    },
    onReady: function() {
    },
    goIndex: function (name,index) {
      this.$element(name)&&this.$element(name).scrollTo({ index: index, smooth: true })
    },
    getDeviceInfo: function () {
      var that = this;
      device.getInfo({
        success: function (ret) {
          that.deviceInfo =ret;
          var ratio = 750/that.deviceInfo.screenWidth;
              that.ratio= ratio;
              that.albumListWidth= Math.floor(710/ratio);
              that.albumItemWidth= Math.floor(310/ratio);
              that.albumItemMargin= Math.floor(20/ratio);
              that.albumLoadingGap= Math.floor(60/ratio);
              that.popupTitleHeight= Math.floor(130/ratio);
              that.popupAlbumItemHeight= Math.floor(91/ratio);
              that.popupAlbumItemGap= Math.floor(55/ratio);
              var playerBoxHeight = Math.round(0.563 * that.deviceInfo.screenWidth);
              that.videoContext = that.$element('player');
              that.pageHeight=that.deviceInfo.screenHeight - playerBoxHeight;
              that.playHeight=playerBoxHeight>422?422:playerBoxHeight;
        },
        fail: function (erromsg, errocode) {
          that.deviceInfo = {errocode:erromsg}
        }
      })
    },
    onInit: function () {
        var me = this;
        var uid = me.user_id;
        var vid = me.vid;
        var aid = me.aid;
          me.uid=uid;
          me.vid=vid;
          me.aid=aid;
        me.getDeviceInfo();
        //网络状态
        network.getType({
            success: (ret) => {
              var networkType = ret
                if (networkType['type'] !== 'wifi') {
                  me.isWIFI=false;
                    setTimeout(function () {
                    me.isWIFI=true;
                    }, 3000)
                }
                else{
                    //WiFi自动播放
                    setTimeout(function () {
                    me.videoContext && me.videoContext.start()
                    }, 1000);
                }

                //视频信息
                me.getPlayInfo(vid);
            }
        });
        //出品人信息
        if (uid && Number(uid) > 0) {
            me.getPgcUserInfo(uid);
        }
        //剧集信息
        //推荐视频
        if (aid && Number(aid) > 0) {
            me.getAlbumList(aid);
            me.getRecomList(aid);
        }
        //评论
        me.loadCommentFirst(vid);
    },
    getPgcUserInfo: function(uid) {
        var me = this;
        fetch.fetch({
            url: 'https://api.tv.sohu.com/v4/user/info/' + uid + '.json?api_key=f351515304020cad28c92f70f002261c',
            method: 'GET',
            success: function (res) {
                res=JSON.parse(res.data);
                me.userInfo= res.data;
            },
            fail: function () {
                prompt.showToast({
                    message: '获取出品人失败！'
                });
            }
        });
    },
    getRecomList: function(albumld) {
        var me = this;
        fetch.fetch({
            url:common.tv_api_uri+'/v4/search/recommend.json?site=2&vid='+me.vid+'&aid='+albumld+'&plat=17&api_key=f351515304020cad28c92f70f002261c&sver=6.2&partner=78&poid=1',
            success: function (res) {
              var res=JSON.parse(res.data);
              var vList = res.data.videos;
                _.each(vList, function(item) {
                    item.playCount = common.shortFixedCount(item.play_count);
                });
                me.recomAll= vList;
                me.recom= vList.slice(0, 4);
            },
            fail: function (res) {
                prompt.showToast({
                    message: '获取推荐视频失败！'
                });
            }
        });
    },
    getAlbumList: function(albumId) {
        var me = this;
        me.loadAlbumList(albumId, null, me.vid, function(res) {
            var ls = res.videos, scrollLeft = 0, albumIndex = 0;
            _.each(ls, function(item, idx){
                if (item.vid == me.vid) {
                    albumIndex = idx;
                    scrollLeft = idx * (me.albumItemWidth + me.albumItemMargin) + me.albumItemWidth/2 - me.albumListWidth/2;
                    if (idx == ls.length - 1) {
                        scrollLeft -= ((me.albumListWidth - me.albumItemWidth) / 2);
                    }
                    scrollLeft = scrollLeft>0?scrollLeft:0;
                    scrollLeft += (res.page==1?0:me.albumLoadingGap);
                }
            });
                me.albumIndex= albumIndex;
                me.albumList= ls;
                me.minAlbumPage= res.page;
                me.maxAlbumPage= res.page;
                me.albumFirstPage= res.page;
                me.albumItemCount= res.count;
                me.albumPageCount= Math.ceil(res.count/me.albumPageSize);
            setTimeout(function () {
                var left = albumIndex==0?0:(albumIndex*(me.albumItemWidth+me.albumItemMargin));
                left += (res.page==1?0:me.albumLoadingGap);
                me.albumScrollLeft = scrollLeft;
            }, 20);
            setTimeout(function(){
                me.goIndex('cprList',albumIndex);
            },1000)
        });
    },
    loadCommentFirst: function(vid) {
        var that = this;
        fetch.fetch({
            url: 'https://m.tv.sohu.com/changyan/api/2/topic/load?wx=notuse&client_id=cyqyBluaj&topic_url=http://m.tv.sohu.com/u/vw/'+vid+'.shtml&topic_source_id=bk'+vid+'&page_size=0&hot_size=0',
            success: function (res) {
            var res=JSON.parse(res.data);
                    that.comment =res;
                setTimeout(function(){
                    that.getCommentList();
                }, 20);
            },
            fail: function () {
                 prompt.showToast({
                     message: '获取评论失败！'
                 });
            }
        });
    },
    getCommentList: function() {
        var c = this.comment;
        if ((c.cmt_sum != undefined && c.comments.length >= c.cmt_sum) || this.commentFrozen) return;
        var that = this;
            that.commentFrozen= true;
        fetch.fetch({
            url: 'https://m.tv.sohu.com/changyan/api/2/topic/comments?wx=notuse&client_id=cyqyBluaj&topic_id='+c.topic_id+'&order_by=time&page_size=30&page_no='+that.comment_page_no,
            success: function (res) {
                var rs = JSON.parse(res.data);
                if (rs.comments) {
                    _.each(rs.comments, function(item) {
                        item.publishDate = common.formatDateStr(new Date(item.create_time), 'yyyy-MM-dd');
                        item.commentsR = item.comments.reverse();
                        item.content = WxParse.strDiscode(item.content);
                        _.each(item.commentsR, function(innerItem) {
                            innerItem.content = WxParse.strDiscode(innerItem.content);
                        });
                    });
                }
                var currComment = that.comment;
                var comments = currComment.comments||[];
                currComment.comments = comments.concat(rs.comments);
                that.comment= currComment;
                that.comment_page_no= that.comment_page_no+1;
                setTimeout(function(){
                    that.commentFrozen= false;
                }, 500);

            },
            fail: function () {
                // prompt.showToast({
                //     message: '获取评论失败！'
                // });
            }
        });
    },
    albumLoadFirst: function() {
        var that = this, lowPage = this.minAlbumPage;
        if (lowPage > 1) {
            that.loadingAlbumList= true;
            that.loadAlbumList(that.aid, lowPage-1, that.vid, function(res) {
                var currList = that.albumList, ls = res.videos, scrollLeft = 0;
                that.loadingAlbumList= false;
                that.albumList= ls.concat(currList);
                that.minAlbumPage= lowPage-1;
            });
        }
    },
    albumLoadLast: function() {
        var that = this, upPage = this.maxAlbumPage;
        if (upPage > 0 && upPage < this.albumPageCount) {
            that.loadAlbumList(that.aid, upPage+1, that.vid, function(res) {
            var currList = that.albumList, ls = res.videos, scrollLeft = 0;
                that.loadingAlbumList= false;
               that.albumList=currList.concat(ls);
                that.minAlbumPage=upPage+1;
            });
        }
    },
    loadAlbumList: function(albumId, page, vid, callback) {
        if (this.frozen) return;
        this.frozen= true;
        var that = this;
        var url=common.tv_api_uri + '/v4/album/videos/' + albumId + '.json?page_size='+that.albumPageSize+'&with_trailer=1&with_fee_video=3&prevideo_rule=2&order=1&vid='+vid+'&plat=17&api_key=f351515304020cad28c92f70f002261c&sver=6.2&partner=78&poid=1'
        if(page&&page>1){
          url=common.tv_api_uri + '/v4/album/videos/' + albumId + '.json?page_size='+that.albumPageSize+'&page='+(page==null?1:page)+
          '&with_trailer=1&with_fee_video=3&prevideo_rule=2&order=1&plat=17&api_key=f351515304020cad28c92f70f002261c&sver=6.2&partner=78&poid=1'
        }
        fetch.fetch({
            url: url,
            success: function (res) {
              var res=JSON.parse(res.data);
                var vList = res.data.videos;
                _.each(vList, function(item) {
                    item.playCount = common.shortFixedCount(item.play_count);
                    item.publishDate = common.formatDateStr(new Date(item.create_date), 'yyyy-MM-dd');
                });
                callback && callback(res.data);
                setTimeout(function(){
                    that.frozen= false;
                }, 500);
            },
            fail: function (res) {
                prompt.showToast({
                    message: '获取出品人剧集！'
                });
            }
        });
    },
    toggleAlbumShow: function(e) {
        var that = this;
        that.albumShown= !this.albumShown;
        if (this.albumShown) {
            var scrollTop = that.albumIndex * (that.popupAlbumItemHeight+that.popupAlbumItemGap) + that.popupAlbumItemGap - (that.pageHeight-that.popupTitleHeight)/2;
            scrollTop = scrollTop>0?scrollTop:0;
            setTimeout(function () {
                that.albumScrollTop =scrollTop+(that.albumFirstPage==1?0:that.albumLoadingGap);
            }, 20);
        }
    },
    onShow: function () {
        var me = this;
        if (me.isWIFI) {
            network.subscribe({
                success: function (res) {
                    var networkType =JSON.stringify(res).type; // 返回网络类型2g，3g，4g，wifi
                    if (networkType !== 'wifi') {
                    me.isWIFI=false;
                        setTimeout(function () {
                        me.isWIFI=true;
                        }, 3000)
                    } else {
                        if (me.videoLoaded) {
                            me.videoContext.start();
                        }
                    }
                }
            });
        }
    },
    onHide: function () {
        var ct = this.$element('player');
        this.videoContext&&this.videoContext.pause()
    },
    onUnload: function () {
        //修复分享链接安卓video播放暂停
        var ct = this.$element('player');
        this.videoContext&&this.videoContext.pause()
    },
    getPlayInfo: function (vid, callback) {
        var me = this;
        var video = {};
        var url = 'https://api.tv.sohu.com/phone_playinfo?vid=' + vid + '&site=2&encoding=utf-8&plat=17&partner=78&api_key=f351515304020cad28c92f70f002261c&sver=6.2&poid=1';

        //视频信息
        fetch.fetch({
            url: url,
            data: {},
            dataType: 'json',
            method: 'GET',
            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
            var res=JSON.parse(res.data)
              var video = res&&res.data;
                //标签
                video.keyword = (video.keyword&&video.keyword.trim()) ? video.keyword.split(" ") : [];

                //播放量
                video.play_count = common.shortFixedCount(video.play_count);
                    me.video= video;
                if (!me.aid || me.aid == '0') {
                    me.aid= video.aid;
                    // me.getAlbumList(video.aid);
                    // me.getRecomList(video.aid);
                }

                var isArray = function(obj) {
                    return Object.prototype.toString.call(obj) === '[object Array]';
                };

                var urls = video.urls || {};
                var videosrc = '';
                var formatUrl = function (url) {

                    url = url || '';
                    if(isArray(url)){
                        url = url[0];
                    }
                    url = url.replace('http://', 'https://');// mp4
                    return url;
                };

                for (var i in urls) {
                    if (urls.hasOwnProperty(i)) {
                        //i=m3u8 | mp4
                        if (i === 'downloadUrl') {
                            if (urls[i][0] && urls[i][0] !== '') {
                                urls[i][0] = formatUrl(urls[i][0]);
                            }
                        }
                        else {
                            for (var j in urls[i]) {
                                if (urls[i].hasOwnProperty(j)) {
                                    //j= nor|hig| sup
                                    _.each(urls[i][j], function (src, idx) {
                                        src = formatUrl(src);
                                        urls[i][j][idx] = src;
                                    }, me);
                                }
                            }
                        }
                    }
                }

                //优先m3u8
                if (useM3u8 && !!urls['m3u8']) {
                    videosrc = urls['m3u8']['nor'][0] || urls['m3u8']['hig'][0] || urls['m3u8']['sup'][0];
                }
                else {
                    videosrc = urls['downloadUrl'][0] || urls['mp4']['hig'][0] || '';
                }

                video.urls = urls;
                //test
                console.info(" useM3u8****:" + useM3u8 + " videosrc====> " + videosrc);
                    me.video= video;
                    me.videoLoaded= true;
                    me.duration= video.duration;
                    me.videosrc= videosrc;
                    me.videotitle= encodeURIComponent(video.video_name || '');
                    me.poster= video.video_big_pic || video.hor_w8_pic || '';
                if (video && video.user_id && (!me.uid || me.uid == '0')) {
                        me.uid= video.user_id;
                    me.getPgcUserInfo(video.user_id);
                }

                setTimeout(function(){
                    me.hidePopup= false;
                }, 500);

                callback && callback();
            },
            fail: function (res) {
                prompt.showToast({
              //    message: '获取视频失败'
                });
                callback && callback();
            }
        });

    },
    playstart: function (evt) {
        var me = this;

    },
    playpause: function (evt) {
        var me = this;
    },
    playended: function (evt) {
        var d = this;
        console.log('playended');
        if (d.albumList && d.albumList.length > 1 && d.albumIndex < d.albumList.length-1) {
            var item =  d.albumList[d.albumIndex+1];
            router.push({
             uri:'Play',
              params: {
              site:item.site
              ,user_id:d.uid
              ,vid:item.vid
              ,aid:item.aid
              }
            })
        }
    },
    toggleBlock(cname) {
      if(cname){
        this[cname]=!this[cname];
      }else{
        this.showDesc=!this.showDesc;
        this.showDescVisible=!this.showDescVisible;
      }
    },
    refreshUrl:function(options){
      var me = this;
      var uid = options.user_id;
      var vid = options.vid;
      var aid = options.aid;
        me.uid=uid;
        me.vid=vid;
        me.aid=aid;
      me.getPlayInfo(vid);
      //出品人信息
      if (uid && Number(uid) > 0) {
          me.getPgcUserInfo(uid);
      }
      //剧集信息
      //推荐视频
      if (aid && Number(aid) > 0) {
          me.getAlbumList(aid);
          me.getRecomList(aid);
      }
      //评论
      me.loadCommentFirst(vid);
    },
    shareText: function (sharedata) {
      share.share({
        type: 'text/html',
        data:sharedata.title+sharedata.playUrl,
        success:function(data){
          console.log("分享成功");
        },
        fail: function(data, code) {
          console.log("handling fail, code=" + code);
        }
      });
    },
    routePush: function (path,params) {
    this.refreshUrl(params)
  //    router.push({
  //     uri:path,
  //      params: params
  //    })
  }
}
