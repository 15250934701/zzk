var app = getApp()
Page({
  data: {
    showView: true,
    menuTapCurrent: 0,
    navActive: '0',
    contentActive: '',
    goods: [],
    info: [],
    foodsname: "热销榜",
    abc: "热销榜",
    zt: true,
  },
  showButton: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  },
  showTop: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  },
  jia: function () {
    var that = this;
    that.setData({
      zt: (!that.data.zt)
    })

  },
  jian: function () {
    that.setData({
      zt: false
    })
  },
  btn: function (e) {
    this.setData({
      foodsname: e.currentTarget.dataset.name,
      abc: e.currentTarget.dataset.name
    })
  },
  menuTap: function (e) {
    var current = e.currentTarget.dataset.current;//获取到绑定的数据
    //改变menuTapCurrent的值为当前选中的menu所绑定的数据
    this.setData({
      menuTapCurrent: current
    });
  },
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'https://www.easy-mock.com/mock/5bc320ecb0bf35423bd75398/ele/goods',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        // success
        for (let i in res.data.goods) {
          for (let j in res.data.goods[i].foods) {
            res.data.goods[i].foods[j].num = 1
          }
        }
        console.log(res.data)

        that.setData({
          goods: res.data.goods
        })

      }
    })
  },
  fail: function () {
    // fail
  },
  complete: function () {
    // complete
  },
})
