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

	var $app_template$ = __webpack_require__(4)
	var $app_style$ = __webpack_require__(5)
	var $app_script$ = __webpack_require__(6)
	
	$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
	     $app_script$($app_module$, $app_exports$, $app_require$)
	     if ($app_exports$.__esModule && $app_exports$.default) {
	            $app_module$.exports = $app_exports$.default
	        }
	     $app_module$.exports.template = $app_template$
	     $app_module$.exports.style = $app_style$
	})
	
	$app_bootstrap$('@app-component/index',{ packagerVersion: '0.0.5'})


/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "attr": {},
	  "classList": [
	    "page"
	  ],
	  "children": [
	    {
	      "type": "tabs",
	      "attr": {
	        "id": "tabList",
	        "index": "0"
	      },
	      "classList": [
	        "scroll-view_H"
	      ],
	      "id": "tabList",
	      "events": {
	        "change": "changeTabactive"
	      },
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": "../Common/logo.png"
	          },
	          "classList": [
	            "nav-logo"
	          ]
	        },
	        {
	          "type": "tab-bar",
	          "attr": {
	            "mode": "scrollable"
	          },
	          "children": [
	            {
	              "type": "text",
	              "attr": {
	                "id": function () {return this.$item.channel_id}
	              },
	              "id": function () {return this.$item.channel_id},
	              "repeat": function () {return this.channelList},
	              "classList": [
	                "scroll-view-item_H",
	                "tab-text"
	              ],
	              "children": [
	                {
	                  "type": "span",
	                  "attr": {
	                    "value": function () {return this.$item.name}
	                  }
	                }
	              ]
	            }
	          ]
	        },
	        {
	          "type": "tab-content",
	          "attr": {},
	          "classList": [
	            "tab-content"
	          ],
	          "children": [
	            {
	              "type": "div",
	              "attr": {},
	              "classList": [
	                "item-container"
	              ],
	              "repeat": function () {return this.channelList},
	              "children": [
	                {
	                  "type": "div",
	                  "attr": {},
	                  "classList": [
	                    "item-content-circular"
	                  ],
	                  "shown": function () {return this.playList.length<1},
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
	                  "type": "refresh",
	                  "attr": {
	                    "refreshing": function () {return this.isRefreshing}
	                  },
	                  "classList": [
	                    "refresh"
	                  ],
	                  "events": {
	                    "refresh": "refresh"
	                  },
	                  "children": [
	                    {
	                      "type": "list",
	                      "attr": {
	                        "scrollpage": function () {return this.scrollPage}
	                      },
	                      "classList": [
	                        "section"
	                      ],
	                      "events": {
	                        "scrollbottom": "onReachBottom"
	                      },
	                      "shown": function () {return this.$item.channel_id==this.currentChannelId&&this.playList.length>0},
	                      "children": [
	                        {
	                          "type": "list-item",
	                          "attr": {
	                            "type": "listItem",
	                            "id": function () {return this.$item.vid}
	                          },
	                          "id": function () {return this.$item.vid},
	                          "repeat": function () {return this.playList},
	                          "classList": [
	                            "play-list"
	                          ],
	                          "children": [
	                            {
	                              "type": "stack",
	                              "attr": {},
	                              "children": [
	                                {
	                                  "type": "block",
	                                  "attr": {},
	                                  "shown": function () {return this.$idx!==this.currPlayIndex},
	                                  "children": [
	                                    {
	                                      "type": "div",
	                                      "attr": {
	                                        "id": function () {return this.$item.vid}
	                                      },
	                                      "classList": [
	                                        "player-container"
	                                      ],
	                                      "id": function () {return this.$item.vid},
	                                      "children": [
	                                        {
	                                          "type": "div",
	                                          "attr": {},
	                                          "classList": [
	                                            "v-cover-container"
	                                          ],
	                                          "events": {
	                                            "click": function (evt) {this.play({vid:this.$item.vid,site:this.$item.site,index:this.$idx},evt)}
	                                          },
	                                          "children": [
	                                            {
	                                              "type": "stack",
	                                              "attr": {},
	                                              "children": [
	                                                {
	                                                  "type": "image",
	                                                  "attr": {
	                                                    "src": function () {return this.$item.cover}
	                                                  },
	                                                  "classList": [
	                                                    "v-cover"
	                                                  ],
	                                                  "style": {
	                                                    "resizeMode": "contain"
	                                                  }
	                                                },
	                                                {
	                                                  "type": "div",
	                                                  "attr": {},
	                                                  "classList": [
	                                                    "v-mask"
	                                                  ]
	                                                },
	                                                {
	                                                  "type": "div",
	                                                  "attr": {},
	                                                  "classList": [
	                                                    "v-title"
	                                                  ],
	                                                  "children": [
	                                                    {
	                                                      "type": "text",
	                                                      "attr": {
	                                                        "value": function () {return this.$item.video_name}
	                                                      }
	                                                    }
	                                                  ]
	                                                },
	                                                {
	                                                  "type": "div",
	                                                  "attr": {},
	                                                  "classList": [
	                                                    "v-play-btn"
	                                                  ],
	                                                  "children": [
	                                                    {
	                                                      "type": "image",
	                                                      "attr": {
	                                                        "src": "../Common/images/play-ico.png"
	                                                      },
	                                                      "classList": [
	                                                        "v-btn"
	                                                      ]
	                                                    }
	                                                  ]
	                                                },
	                                                {
	                                                  "type": "div",
	                                                  "attr": {},
	                                                  "classList": [
	                                                    "v-info"
	                                                  ],
	                                                  "children": [
	                                                    {
	                                                      "type": "text",
	                                                      "attr": {
	                                                        "value": function () {return (this.$item.play_count_short) + '播放 | ' + (this.$item.time_length_format)}
	                                                      }
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
	                                    "height": "422px"
	                                  },
	                                  "children": [
	                                    {
	                                      "type": "video",
	                                      "attr": {
	                                        "id": "player",
	                                        "src": function () {return this.currPlayUrl},
	                                        "autoplay": function () {return this.isWIFI},
	                                        "poster": "../Common/logo.png"
	                                      },
	                                      "id": "player",
	                                      "shown": function () {return this.$idx===this.currPlayIndex&&this.currPlayUrl!==''},
	                                      "events": {
	                                        "finish": function (evt) {this.onfinish(evt)}
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
	                                "v-opt-container",
	                                "cf"
	                              ],
	                              "children": [
	                                {
	                                  "type": "div",
	                                  "attr": {},
	                                  "classList": [
	                                    "v-user"
	                                  ],
	                                  "children": [
	                                    {
	                                      "type": "image",
	                                      "attr": {
	                                        "src": function () {return this.$item.header}
	                                      },
	                                      "classList": [
	                                        "v-user-avatar"
	                                      ]
	                                    },
	                                    {
	                                      "type": "text",
	                                      "attr": {
	                                        "value": function () {return this.$item.userName}
	                                      },
	                                      "shown": function () {return this.$item.header!=undefined},
	                                      "classList": [
	                                        "v-user-name"
	                                      ]
	                                    }
	                                  ]
	                                },
	                                {
	                                  "type": "div",
	                                  "attr": {},
	                                  "classList": [
	                                    "like-wrap"
	                                  ]
	                                },
	                                {
	                                  "type": "div",
	                                  "attr": {},
	                                  "classList": [
	                                    "link-to-playpage"
	                                  ],
	                                  "events": {
	                                    "click": function (evt) {this.routePush('Play',{vid:this.$item.vid,site:this.$item.site,aid:this.$item.aid,user_id:this.$item.user_id},evt)}
	                                  }
	                                },
	                                {
	                                  "type": "div",
	                                  "attr": {},
	                                  "classList": [
	                                    "share_area"
	                                  ],
	                                  "events": {
	                                    "click": function (evt) {this.shareText({title:this.$item.video_name,cover:this.$item.cover,playUrl:this.$item.play_url},evt)}
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
	                          "shown": function () {return this.loadingMore},
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
	                                "value": "更多视频信息请使用搜狐视频app"
	                              }
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
	      ]
	    }
	  ]
	}

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = {
	  ".page": {
	    "flex": 1,
	    "backgroundColor": "#ffffff",
	    "fontSize": "32px",
	    "flexDirection": "column"
	  },
	  ".section_gap": {
	    "paddingTop": "0px",
	    "paddingRight": "0px",
	    "paddingBottom": "0px",
	    "paddingLeft": "0px"
	  },
	  ".play-list": {
	    "fontSize": "0px",
	    "flexDirection": "column",
	    "flex": 1
	  },
	  ".player-container": {
	    "flexDirection": "column",
	    "width": "100%",
	    "fontSize": "0px"
	  },
	  ".player": {
	    "width": "750px",
	    "height": "422px"
	  },
	  ".v-cover-container": {
	    "width": "100%",
	    "height": "422px",
	    "flexGrow": 1,
	    "flexDirection": "column"
	  },
	  ".v-cover-container .v-cover": {
	    "width": "100%",
	    "height": "422px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-cover-container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-cover"
	        }
	      ]
	    }
	  },
	  ".v-cover-container .v-mask": {
	    "width": "100%",
	    "height": "422px",
	    "backgroundColor": "rgba(0,0,0,0.2)",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-cover-container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-mask"
	        }
	      ]
	    }
	  },
	  ".v-cover-container .v-title": {
	    "width": "702px",
	    "alignItems": "flex-start",
	    "marginTop": "22px",
	    "marginLeft": "24px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-cover-container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-title"
	        }
	      ]
	    }
	  },
	  ".v-cover-container .v-title text": {
	    "fontSize": "36px",
	    "color": "#ffffff",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-cover-container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-title"
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
	  ".v-cover-container .v-play-btn": {
	    "flexGrow": 1,
	    "alignItems": "center",
	    "justifyContent": "center",
	    "zIndex": 100,
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-cover-container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-play-btn"
	        }
	      ]
	    }
	  },
	  ".v-cover-container .v-play-btn .v-btn": {
	    "height": "94px",
	    "width": "76px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-cover-container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-play-btn"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-btn"
	        }
	      ]
	    }
	  },
	  ".v-cover-container .v-info": {
	    "flexDirection": "row",
	    "width": "100%",
	    "alignItems": "flex-end",
	    "justifyContent": "flex-end",
	    "marginBottom": "24px",
	    "marginRight": "34px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-cover-container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-info"
	        }
	      ]
	    }
	  },
	  ".v-cover-container .v-info text": {
	    "fontSize": "24px",
	    "color": "#ffffff",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-cover-container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-info"
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
	  ".v-opt-container .like-wrap": {
	    "width": "30px",
	    "height": "30px",
	    "marginLeft": "29px",
	    "marginTop": "30px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-opt-container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "like-wrap"
	        }
	      ]
	    }
	  },
	  ".link-to-playpage": {
	    "width": "30%"
	  },
	  ".v-opt-container .like-wrap .like_num": {
	    "top": "-5px",
	    "left": "25px",
	    "fontSize": "18px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-opt-container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "like-wrap"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "like_num"
	        }
	      ]
	    }
	  },
	  ".v-opt-container .liked .like_num": {
	    "color": "#e63737",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-opt-container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "liked"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "like_num"
	        }
	      ]
	    }
	  },
	  ".v-opt-container .share-text": {
	    "color": "#545454",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-opt-container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "share-text"
	        }
	      ]
	    }
	  },
	  ".v-opt-container .share-wxfriend": {
	    "marginTop": "0px",
	    "marginRight": "0px",
	    "marginBottom": "0px",
	    "marginLeft": "37px",
	    "paddingTop": "0px",
	    "paddingRight": "0px",
	    "paddingBottom": "0px",
	    "paddingLeft": "0px",
	    "height": "40px",
	    "width": "40px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-opt-container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "share-wxfriend"
	        }
	      ]
	    }
	  },
	  ".play-v-name": {
	    "width": "702px",
	    "fontSize": "36px",
	    "color": "#ffffff",
	    "top": "22px",
	    "left": "24px"
	  },
	  ".laoding-wrap": {
	    "width": "100%",
	    "height": "64px",
	    "textAlign": "center",
	    "marginTop": "120px",
	    "marginRight": "0px",
	    "marginBottom": "120px",
	    "marginLeft": "0px"
	  },
	  ".load-more": {
	    "width": "100%",
	    "marginTop": "40px",
	    "marginRight": "0px",
	    "marginBottom": "40px",
	    "marginLeft": "0px",
	    "height": "44px",
	    "justifyContent": "center"
	  },
	  ".p_hide": {
	    "display": "none"
	  },
	  ".section": {
	    "marginBottom": "0px",
	    "backgroundColor": "#ffffff",
	    "flexDirection": "column",
	    "flex": 1
	  },
	  ".nav-logo": {
	    "width": "161px",
	    "height": "41px",
	    "marginTop": "40px",
	    "marginLeft": "10px"
	  },
	  "tab-bar": {
	    "marginLeft": "181px",
	    "marginTop": "-72px"
	  },
	  ".ui-navbar": {
	    "flexDirection": "row",
	    "height": "100px",
	    "alignItems": "center"
	  },
	  ".scroll-view_H": {
	    "flexWrap": "nowrap",
	    "height": "100px",
	    "lineHeight": "100px",
	    "flexDirection": "row",
	    "flex": 1
	  },
	  ".scroll-view-item_H": {
	    "flexWrap": "nowrap",
	    "textAlign": "center",
	    "alignItems": "center",
	    "height": "100px",
	    "lineHeight": "100px",
	    "paddingTop": "0px",
	    "paddingRight": "25px",
	    "paddingBottom": "0px",
	    "paddingLeft": "25px",
	    "color": "#1a1a1a",
	    "fontSize": "34px",
	    "textDecoration": "none"
	  },
	  ".nav-text": {
	    "color": "#1a1a1a"
	  },
	  ".current": {
	    "color": "#ff382e"
	  },
	  ".tab-text": {
	    "color:active": "#f76160"
	  },
	  ".navigator-hover": {
	    "color": "#ff382e",
	    "backgroundColor": "rgba(0,0,0,0.1)"
	  },
	  ".scroll-view-url": {
	    "fontSize": "34px",
	    "color": "#1a1a1a"
	  },
	  ".v-opt-container": {
	    "width": "100%",
	    "fontSize": "24px",
	    "flexDirection": "row",
	    "justifyContent": "space-between"
	  },
	  ".v-opt-container .v-user": {
	    "marginLeft": "24px",
	    "paddingTop": "22px",
	    "paddingRight": "0px",
	    "paddingBottom": "32px",
	    "paddingLeft": "0px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-opt-container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-user"
	        }
	      ]
	    }
	  },
	  ".v-opt-container .v-user .v-user-avatar": {
	    "width": "40px",
	    "height": "40px",
	    "borderRadius": "20px",
	    "alignItems": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-opt-container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-user"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-user-avatar"
	        }
	      ]
	    }
	  },
	  ".v-opt-container .v-user .v-user-name": {
	    "fontSize": "24px",
	    "color": "#545454",
	    "marginLeft": "12px",
	    "alignItems": "center",
	    "lineHeight": "40px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-opt-container"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-user"
	        },
	        {
	          "t": "d"
	        },
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-user-name"
	        }
	      ]
	    }
	  },
	  ".v-opt-container .share_area": {
	    "marginRight": "24px",
	    "alignItems": "center",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-opt-container"
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
	  ".v-opt-container .share_area image": {
	    "width": "30px",
	    "height": "30px",
	    "_meta": {
	      "ruleDef": [
	        {
	          "t": "a",
	          "n": "class",
	          "i": false,
	          "a": "element",
	          "v": "v-opt-container"
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
	  ".item-container": {
	    "flexDirection": "column"
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, $app_require$){'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _common = __webpack_require__(7);
	
	var _common2 = _interopRequireDefault(_common);
	
	var _util = __webpack_require__(9);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _playInfo = __webpack_require__(10);
	
	var _playInfo2 = _interopRequireDefault(_playInfo);
	
	var _system = $app_require$('@app-module/system.prompt');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.fetch');
	
	var _system4 = _interopRequireDefault(_system3);
	
	var _system5 = $app_require$('@app-module/system.router');
	
	var _system6 = _interopRequireDefault(_system5);
	
	var _system7 = $app_require$('@app-module/system.network');
	
	var _system8 = _interopRequireDefault(_system7);
	
	var _system9 = $app_require$('@app-module/system.share');
	
	var _system10 = _interopRequireDefault(_system9);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var video_blank_img = "https://m.tv.sohu.com/upload/touch/img/blank_h5.png?v=1";
	var gData = _util2.default.data;
	module.exports = {
	  data: function () {return {
	    toView: '0',
	    scrollLeft: 0,
	    channelList: [],
	    currentChannelId: 0,
	    playList: [],
	    queryData: {},
	    isRefreshing: false,
	    timer: null,
	    video: {},
	    playUrl: '',
	    currPlayIndex: '',
	    likeList: {},
	    page: -1,
	    scrollPage: false,
	    currPlayedVideo: {},
	    loadingMore: false,
	    isWIFI: false,
	    videoContext: undefined,
	    currPlayUrl: '',
	    options: {}
	  }},
	  onInit: function onInit() {
	    var self = this;
	    var channel_id = self.options && self.options.channel_id || self.channel_id || self.currentChannelId || 0;
	    self.options = {
	      channel_id: channel_id
	    };
	    self.queryData = self.options;
	    _system8.default.getType({
	      success: function success(ret) {
	        var networkType = ret;
	        console.log(JSON.stringify(networkType));
	        if (networkType['type'] !== 'wifi') {
	          self.isWIFI = false;
	          setTimeout(function () {
	            self.isWIFI = true;
	          }, 3000);
	        } else {
	          self.isWIFI = true;
	
	          setTimeout(function () {
	            self.videoContext && self.videoContext.start();
	          }, 1000);
	        }
	      }
	    });
	    console.log("currnt ---> " + channel_id);
	  },
	  onReady: function onReady() {
	    var self = this;
	    self.chlList();
	    self.chlData('fresh');
	  },
	
	  chlList: function chlList() {
	    var self = this;
	    _system4.default.fetch({
	      url: _common2.default.api_uri + '/channel/' + gData.uid + '/list?passport=' + gData.passport,
	      success: function success(rst) {
	        var rst = JSON.parse(rst.data);
	        if (rst && rst.data && rst.data.cateCodes) {
	          var channelList = self.buildTopNav(rst.data.cateCodes, self.currentChannelId);
	          self.scrollLeft = 0;
	          self.channelList = channelList;
	        }
	      },
	      fail: function fail() {
	        _system2.default.showToast({
	          message: '失败'
	        });
	      }
	    });
	  },
	
	  chlData: function chlData(act) {
	    var self = this;
	
	    _system4.default.fetch({
	      url: _common2.default.api_uri + '/channel/' + self.options.channel_id + '/' + gData.uid + '/rc/v1?passport=' + gData.passport + '&flat=6&isH5=1',
	      callback: function callback(rst) {
	        var rst = JSON.parse(rst.data);
	        if (rst && rst.data && rst.data.columns) {
	          var playList = [];
	          var orgList = [];
	          if (act == 'more') {
	            orgList = self.playList;
	          }
	          var page = self.page;
	          self.buildColumns(rst.data.columns, function (playList) {
	            playList = orgList.concat(playList);
	            page++;
	            self.loadingMore = false;
	            self.playList = playList;
	            self.page = page;
	            if (page == 0 && self.isWIFI) {}
	          });
	        }
	        self.isRefreshing = false;
	        clearTimeout(self.timer);
	        self.timer = null;
	      }
	    });
	  },
	  onReachBottom: function onReachBottom() {
	    this.loadingMore = true;
	    this.chlData('more');
	  },
	  upper: function upper(evt) {
	    console.log(evt);
	    try {
	      console.log("----->> ", evt);
	      this.scrollLeftPos = 0;
	    } catch (e) {
	      console.log(e);
	    }
	  },
	  lower: function lower(evt) {
	    console.log(evt);
	  },
	  scroll: function scroll(evt) {
	    console.log(evt);
	    try {
	      console.log("----->> ", evt);
	      this.scrollLeftPos = 0;
	    } catch (e) {
	      console.log(e);
	    }
	  },
	  buildTopNav: function buildTopNav(chlList, curId) {
	    var self = this;
	    var tags = [];
	    var chlList = chlList || [];
	
	    var pos = 1;
	    for (var i = 0; i < chlList.length; i++) {
	      var chlInfo = chlList[i];
	      var channel_id = chlInfo["channel_id"];
	      chlInfo.active = "";
	      if (curId == channel_id) {
	        chlInfo.active = "current";
	        self.toView = curId;
	        pos = i;
	      }
	      tags.push(chlInfo);
	    }
	    return tags;
	  },
	  getVideoLikeNum: function getVideoLikeNum(vids, callback) {
	    _system4.default.fetch({
	      url: 'https://score.my.tv.sohu.com/digg/get/v2.do?callback=?vids=' + vids.join(',') + 'type=9001&isH5=1',
	      dataType: 'json',
	      method: 'GET',
	      timeout: 3000,
	      header: {
	        'content-type': 'application/json'
	      },
	      success: function success(rst) {
	        var resultList;
	        if (rst.data.status == 200) {
	          resultList = rst.data.message || [];
	          callback && callback(resultList);
	        }
	      }
	    });
	  },
	  buildColumns: function buildColumns(data, callback) {
	    var columns = data || [];
	    var playList = [];
	    var vids = [];
	    var self = this;
	    for (var col = 0, cnt = columns.length; col < cnt; col++) {
	      try {
	        var rs = columns[col] || {};
	        var data_list = rs['data_list'] || [];
	        rs.zh_name = encodeURIComponent(rs.name);
	        var focus_img = [];
	        if (data_list && data_list.length > 0) {
	          var obj = data_list[0];
	          obj['play_count'] = obj.play_count || 0;
	          obj['cover'] = obj.data.hor_high_pic || obj["hor_w8_pic"] || video_blank_img;
	          obj['cover'] = _common2.default.formatUrl(obj['cover']);
	          obj['header'] = obj.pgc_header || gData.defaultHeader || '';
	          obj['userName'] = (obj.nick_name.length > 11 ? obj.nick_name.slice(0, 11) + '...' : obj.nick_name) || '56视频';
	
	          obj['play_url'] = _common2.default.makePlayUrl(obj);
	          obj['play_count_short'] = _common2.default.shortFixedCount(obj.play_count);
	
	          vids.push(obj.vid);
	          if (obj.vid) {
	            playList.push(obj);
	          }
	          callback && callback(playList);
	        }
	      } catch (e) {}
	    }
	    this.getVideoLikeNum(vids, function (likeList) {
	      var i,
	          item,
	          len = likeList.length || 0;
	      var _likeList = self.likeList;
	      for (i = 0; i < len; i++) {
	        item = likeList[i] || {};
	        _likeList[item.vid] = {};
	        _likeList[item.vid].likeNum = item.upCount;
	        _likeList[item.vid].isLiked = false;
	      }
	      self.likeList = _likeList;
	      callback && callback(playList);
	    });
	  },
	  playVideo: function playVideo(vid, site, index) {
	    var url = '',
	        me = this;
	    var i = 0,
	        playList = me.playList;
	    if (playList[index].playUrl == undefined) {
	      _playInfo2.default.getPlayInfo(vid, site, function (rst) {
	        playList[index].playUrl = rst;
	
	        me.playList = playList;
	        me.currPlayIndex = index;
	        me.currPlayUrl = rst;
	      }, function () {
	        _system2.default.showToast({
	          title: '提示',
	          message: '该视频无法播放'
	        });
	      });
	    } else {
	      me.playList = playList;
	      me.currPlayIndex = index;
	      me.currPlayUrl = playList[index].playUrl;
	    }
	  },
	  play: function play(dataset) {
	    var vid = dataset.vid;
	    var site = dataset.site;
	    var index = dataset.index;
	    this.currPlayIndex = index;
	    this.playVideo(vid, site, index);
	  },
	  onfinish: function onfinish(event) {
	    this.playNext();
	  },
	  playNext: function playNext(event) {
	    console.log('playNext');
	    var nextIndex = ++this.currPlayIndex;
	    if (nextIndex >= this.playList.length) {
	      return;
	    }
	    var nextVideo = this.playList[nextIndex];
	    var nextVid = nextVideo.vid;
	    var nextSite = nextVideo.site;
	    this.videoContext && this.videoContext.pause();
	    this.playVideo(nextVid, nextSite, nextIndex);
	  },
	  like: function like(event) {
	    var dataset = event.currentTarget.dataset;
	    var vid = dataset.vid;
	    var _likeNum = dataset.likenum || 0;
	    var self = this;
	    var _likeList = self.likeList;
	    _likeList[vid] = _likeList[vid] || {};
	    var _isLike = _likeList[vid].isLiked || 'false';
	    var isUp = _isLike && _isLike === 'true' ? false : true;
	    if (isUp === true) {
	      _system4.default.fetch({
	        url: 'https://score.my.tv.sohu.com/digg/up/v2.do?callback=?vid=' + vid + '&type=9001&from=&isUp=56-weixin' + isUp,
	        dataType: 'json',
	        method: 'GET',
	        timeout: 3000,
	        header: {
	          'content-type': 'application/json'
	        },
	        success: function success(rst) {
	          var msg = rst.data.message;
	          if (rst.statusCode == 200 && msg !== {}) {
	            _likeList[vid] = _likeList[vid] || {};
	            _likeList[vid].isLiked = msg.isUp;
	            _likeList[vid].likeNum = _likeNum + 1;
	            self.likeList = _likeList;
	          }
	        }
	      });
	    } else {
	      _likeList[vid].isLiked = 'fasle';
	      _likeList[vid].likeNum = _likeNum - 1;
	      self.likeList = _likeList;
	    }
	  },
	  playError: function playError(e) {
	    console.log('error:' + e);
	  },
	  openPlayView: function openPlayView(evt) {
	    console.log('openPlayView:' + evt);
	  },
	  onShow: function onShow() {
	    var me = this;
	    if (me.isWIFI) {
	      _system8.default.subscribe({
	        success: function success(res) {
	          var networkType = JSON.stringify(res).type;
	          if (networkType !== 'wifi') {
	            me.isWIFI = false;
	            setTimeout(function () {
	              me.isWIFI = true;
	            }, 3000);
	          } else {}
	        }
	      });
	    }
	  },
	  goIndex: function goIndex(name, index) {
	    this.$element(name) && this.$element(name).scrollTo({ index: index, smooth: true });
	  },
	  refresh: function refresh(e) {
	    var _this = this;
	
	    var that = this;
	    that.isRefreshing = e.refreshing;
	    _system2.default.showToast({
	      message: '更多视频信息请使用搜狐视频app'
	    });
	    this.chlData('fresh');
	    if (this.timer === null) {
	      this.timer = setTimeout(function () {
	        _this.isRefreshing = false;
	        _system2.default.showToast({
	          message: '刷新完成'
	        });
	        clearTimeout(_this.timer);
	        _this.timer = null;
	      }, 3000);
	    }
	  },
	  changeTabactive: function changeTabactive(e) {
	    console.log('----------切换tab: ' + e.index);
	    console.log('----------channel_id: ' + this.options.channel_id);
	    if (e.index == 0 && this.options.channel_id == 0) {
	      return false;
	    }
	
	    this.options.channel_id = this.channelList && this.channelList[e.index].channel_id;
	    this.currentChannelId = this.options.channel_id;
	    this.currPlayIndex = '';
	    this.chlData('fresh');
	  },
	  shareText: function shareText(sharedata) {
	    _system10.default.share({
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
	    console.log(JSON.stringify(params));
	
	    _system6.default.push({
	      uri: path,
	      params: params
	    });
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _system = $app_require$('@app-module/system.fetch');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.device');
	
	var _system4 = _interopRequireDefault(_system3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 显示菜单
	 */
	function showMenu() {
	  var prompt = $app_require$('@app-module/system.prompt');
	  var router = $app_require$('@app-module/system.router');
	  var appInfo = $app_require$('@app-module/system.app').getInfo();
	  prompt.showContextMenu({
	    itemList: ['保存桌面', '关于', '取消'],
	    success: function success(ret) {
	      switch (ret.index) {
	        case 0:
	          // 保存桌面
	          createShortcut();
	          break;
	        case 1:
	          // 关于
	          router.push({
	            uri: '/About',
	            params: {
	              name: appInfo.name,
	              icon: appInfo.icon
	            }
	          });
	          break;
	        case 2:
	          // 取消
	          break;
	        default:
	          prompt.showToast({
	            message: 'error'
	          });
	      }
	    }
	  });
	}
	
	/**
	 * 创建桌面图标
	 * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
	 */
	function createShortcut() {
	  var prompt = $app_require$('@app-module/system.prompt');
	  var shortcut = $app_require$('@app-module/system.shortcut');
	  shortcut.hasInstalled({
	    success: function success(ret) {
	      if (ret) {
	        prompt.showToast({
	          message: '已创建桌面图标'
	        });
	      } else {
	        shortcut.install({
	          success: function success() {
	            prompt.showToast({
	              message: '成功创建桌面图标'
	            });
	          },
	          fail: function fail(errmsg, errcode) {
	            prompt.showToast({
	              message: errcode + ': ' + errmsg
	            });
	          }
	        });
	      }
	    }
	  });
	}
	
	var common = __webpack_require__(7);
	exports.default = {
	  showMenu: showMenu,
	  createShortcut: createShortcut,
	  getUserInfo: function getUserInfo(cb) {
	    var that = this;
	    if (this.userInfo) {
	      typeof cb == "function" && cb(this.userInfo);
	    } else {
	      _system4.default.getInfo({
	        success: function success() {
	          _system4.default.getId({
	            type: ["device", "mac", "user"],
	            success: function success(res) {
	              that.userInfo = res.user;
	              typeof cb == "function" && cb(that.globalData.userInfo);
	            }
	          });
	        }
	      });
	    }
	  },
	  data: {
	    userInfo: null,
	    hasLogin: false,
	    uid: '1109a590ace58b390d584b8f1eff9b30personal', //一期不做定制推荐，uid写死
	    passport: '1746414975%2540sina.sohu.com', //一期不做定制推荐，passport写死
	    muid: '',
	    playInfoApi: 'https://api.tv.sohu.com/phone_playinfo?callback=',
	    defaultHeader: 'https://css.tv.itc.cn/channel/space/avatar/03_small.jpg',
	    scene: ''
	  }
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _system = $app_require$('@app-module/system.fetch');
	
	var _system2 = _interopRequireDefault(_system);
	
	var _system3 = $app_require$('@app-module/system.prompt');
	
	var _system4 = _interopRequireDefault(_system3);
	
	var _util = __webpack_require__(9);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * 播放信息
	 * https://api.tv.sohu.com/phone_playinfo
	 */
	var useM3u8 = false;
	var util = {
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
	var _ = __webpack_require__(8);
	
	var gData = _util2.default.data;
	module.exports = {
	  video: {},
	  playUrl: '',
	  getPlayInfo: function getPlayInfo(vid, site, callback) {
	    var video = {};
	    var me = this;
	    _system2.default.fetch({
	      url: gData.playInfoApi + '&vid=' + vid + '&uid=' + gData.uid + '&muid=' + gData.muid + '&site=' + site + '&plat=17&api_key=f351515304020cad28c92f70f002261c&sver=6.2&partner=78&poid=1&encoding=UTF-8',
	      dataType: 'json',
	      method: 'GET',
	      header: {
	        'content-type': 'application/json'
	      },
	      success: function success(res) {
	        var res = JSON.parse(res.data);
	        if (res.status && res.data) {
	          var urls = {},
	              videosrc = '';
	          video = res.data;
	          urls = video.urls || {};
	          for (var i in urls) {
	            if (urls.hasOwnProperty(i)) {
	              //i=m3u8 | mp4
	              if (i === 'downloadUrl') {
	                if (urls[i][0] && urls[i][0] !== '') {
	                  urls[i][0] = util.formatUrl(urls[i][0]);
	                }
	              } else {
	                for (var j in urls[i]) {
	                  if (urls[i].hasOwnProperty(j)) {
	                    //j= nor|hig| sup
	                    _.each(urls[i][j], function (src, idx) {
	                      src = util.formatUrl(src);
	                      urls[i][j][idx] = src;
	                    }, me);
	                  }
	                }
	              }
	            }
	          }
	          if (useM3u8 && !!urls['m3u8']) {
	            console.log('m3u8');
	            videosrc = urls['m3u8']['nor'][0] || urls['m3u8']['hig'][0] || urls['m3u8']['sup'][0];
	            videosrc = encodeURI(videosrc);
	          } else {
	            console.log('not m3u8');
	            videosrc = urls['downloadUrl'][0] || urls['mp4']['hig'][0] || '';
	            videosrc = encodeURI(videosrc);
	          }
	          video.urls = urls;
	          me.video = video;
	          me.playUrl = videosrc;
	          callback && callback(me.playUrl);
	        }
	      }
	    });
	  }
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
//# sourceMappingURL=index.js.map