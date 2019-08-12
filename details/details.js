// pages/details/details.js
let a = 1
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addshopbtnzt:true, //加入购物车状态
    addshopaddzt:false,  //加购物车件数的
    sum:1,//件数的初始值
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  // 返回
  Back:function(){
    wx.navigateTo({
      url:'../index/index'
    })
  },
  //点击加入购物车  购物车按钮隐藏    件数加减显示出来
  addshop:function(){
    this.setData({
      addshopbtnzt:false,
      addshopaddzt:true
    })
  },
  //点击 加
  shopadd:function(){
     a++
    this.setData({
      sum:a
    })
  },
  //点击减
  delshop:function(){
    if(a>=1){
      a--
    }else if(a===0){
      this.setData({
        addshopbtnzt: true,
        addshopaddzt: false
      })
    }
    this.setData({
      sum:a
    })
  }
})