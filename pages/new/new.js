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
    txq:true,
  },
  xq:function(){
    var that=this;
    that.setData({
      txq:(!that.data.txq)
    })
  },
  back:function(){
    var that=this;
    that.setData({
      txq:(!that.data.txq)
    })
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
      zt: (!that.data.zt)
    })
  },
  btn: function (e) {
    this.setData({
      foodsname: e.currentTarget.dataset.name,
      abc: e.currentTarget.dataset.name
    })
  },
  menuTap: function (e) {
    var current = e.currentTarget.dataset.current;
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
