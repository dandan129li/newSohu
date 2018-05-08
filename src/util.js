/**
 * 显示菜单
 */
function showMenu () {
  const prompt = require('@system.prompt')
  const router = require('@system.router')
  const appInfo = require('@system.app').getInfo()
  prompt.showContextMenu({
    itemList: ['保存桌面', '关于', '取消'],
    success: function (ret) {
      switch (ret.index) {
      case 0:
        // 保存桌面
        createShortcut()
        break
      case 1:
        // 关于
        router.push({
          uri: '/About',
          params: {
            name: appInfo.name,
            icon: appInfo.icon
          }
        })
        break
      case 2:
        // 取消
        break
      default:
        prompt.showToast({
          message: 'error'
        })
      }
    }
  })
}

/**
 * 创建桌面图标
 * 注意：使用加载器测试`创建桌面快捷方式`功能时，请先在`系统设置`中打开`应用加载器`的`桌面快捷方式`权限
 */
function createShortcut () {
  const prompt = require('@system.prompt')
  const shortcut = require('@system.shortcut')
  shortcut.hasInstalled({
    success: function (ret) {
      if (ret) {
        prompt.showToast({
          message: '已创建桌面图标'
        })
      } else {
        shortcut.install({
          success: function () {
            prompt.showToast({
              message: '成功创建桌面图标'
            })
          },
          fail: function (errmsg, errcode) {
            prompt.showToast({
              message: `${errcode}: ${errmsg}`
            })
          }
        })
      }
    }
  })
}

var common = require('./Common/common.js');
import fetch from '@system.fetch'
import device from '@system.device'
export default {
  showMenu,
  createShortcut,
  getUserInfo: function (cb) {
    var that = this;
    if (this.userInfo) {
      typeof cb == "function" && cb(this.userInfo)
    } else {
      device.getInfo({
        success: function () {
          device.getId({
            type: ["device", "mac","user"],
            success: function (res) {
              that.userInfo = res.user;
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      });
    }
  },
  data: {
    userInfo: null,
    hasLogin: false,
    uid: '1109a590ace58b390d584b8f1eff9b30personal',//一期不做定制推荐，uid写死
    passport: '1746414975%2540sina.sohu.com', //一期不做定制推荐，passport写死
    muid: '',
    playInfoApi: 'https://api.tv.sohu.com/phone_playinfo?callback=',
    defaultHeader: 'https://css.tv.itc.cn/channel/space/avatar/03_small.jpg',
    scene: ''
  }
}
