// Information/InformationList.js
Page({
  to_details: function () {
    wx.navigateTo({
      url: "../information/information-details"
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    clientHeight:0,
    rotate:0,
    array: [1, 2, 3, 4, 5, 6, 8]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this =this;
    wx.getSystemInfo({
      success: function (res) {
        _this.setData({ clientHeight: res.windowHeight })
      }
    });
    wx.onAccelerometerChange(function (res) {
      var rotate = parseInt(res.x * 20.8);
      _this.setData({ rotate: 0-rotate})
    })
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
  bindtouchstart:function(){
    wx.stopAccelerometer();
  },
  bindtouchend: function () {
      wx.startAccelerometer()
  }
})
