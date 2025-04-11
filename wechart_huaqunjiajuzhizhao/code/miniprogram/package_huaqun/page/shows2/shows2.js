// package_huaqun/page/shows/shows.js
Page({

  /**
  * 页面的初始数据
  */
 data: {
   userInfo:'',
   active:1,
   showList: [
   {
     text: "灯带下单表",
     url: "../ddxiadan/ddxiadan"
   },
   {
    text: "铝框下单表",
    url: "../lvkuang_xiadan/lvkuang_xiadan"
  },
  {
    text: "灯带下单明细",
    url: "../ddchakan/ddchakan"
  },
  {
    text: "铝框下单明细",
    url: "../lvkuang_mingxi/lvkuang_mingxi"
  },
  {
    text: "玻璃下单明细",
    url: "../boli_mingxi/boli_mingxi"
  },
  {
    text: "配送单",
    url: "../../../package_huaqun_erqi/page/peisong/peisong"
  },
  {
    text: "配送单明细",
    url: "../../../package_huaqun_erqi/page/peisong_mingxi/peisong_mingxi"
  },
  {
    text: "位置查看",
    url: "../../../package_huaqun_erqi/page/map/map"
  },
  {
    text: "实时定位",
    url: "../../../package_huaqun_erqi/page/dingwei/dingwei"
  },
  // {
  //   text: "配送计划",
  //   url: "../../../package_huaqun_erqi/page/peisong_jihua/peisong_jihua"
  // },
 ]
 },
 

 go: function (e) {
   var _this = this;
   var index = e.currentTarget.dataset.index;
   var url = _this.data.showList[index].url
   var text = _this.data.showList[index].text

   if((index == 0 || index == 1) && _this.data.userInfo.power == '玻璃厂' ){
    wx.showToast({
      title: '玻璃厂账号无权限下单！',
      icon: 'none'
    })
    return;
   }

   if((index == 2 || index == 3) && _this.data.userInfo.power == '玻璃厂' ){
    wx.showToast({
      title: '玻璃厂账号无权限查看订单明细！',
      icon: 'none'
    })
    return;
   }

   if(index == 4 && _this.data.userInfo.power != '玻璃厂' && _this.data.userInfo.power != '管理员'){
    wx.showToast({
      title: '非玻璃厂账号无权限查看玻璃下单明细！',
      icon: 'none'
    })
    return;
   }

   if((index == 5 || index == 6) && _this.data.userInfo.power == '玻璃厂' ){
    wx.showToast({
      title: '玻璃厂账号无权使用配送单！',
      icon: 'none'
    })
    return;
   }

   if(index == 7 && _this.data.userInfo.power != '管理员' && _this.data.userInfo.power != '操作员'){
    wx.showToast({
      title: '此账号无权使用位置查看功能！',
      icon: 'none'
    })
    return;
   }

   if(index == 8 && _this.data.userInfo.power != '管理员' && _this.data.userInfo.power != '操作员'){
    wx.showToast({
      title: '非操作员账号无权使用实时定位功能！',
      icon: 'none'
    })
    return;
   }

   if(index == 9 && _this.data.userInfo.power != '管理员' && _this.data.userInfo.power != '操作员'){
    wx.showToast({
      title: '非操作员账号无权使用配送计划功能！',
      icon: 'none'
    })
    return;
   }

   if(url != ''){
     wx.navigateTo({
       url: url + "?userInfo=" + JSON.stringify(_this.data.userInfo)
     })
   }
 },

 onChange: function (event) {
   var _this = this;
   if (event.detail == 0) {
     wx.redirectTo({
       url: '../shows/shows?userInfo='+JSON.stringify(_this.data.userInfo)
     })
   } else if (event.detail == 1) {
     wx.redirectTo({
      url: '../shows2/shows2?userInfo='+JSON.stringify(_this.data.userInfo)
     })
   }
 },

 /**
  * 生命周期函数--监听页面加载
  */
 onLoad(options) {
  var _this = this
  var userInfo = JSON.parse(options.userInfo)
  _this.setData({
    userInfo:userInfo
  })
},

 /**
  * 生命周期函数--监听页面初次渲染完成
  */
 onReady() {

 },

 /**
  * 生命周期函数--监听页面显示
  */
 onShow() {
   var _this = this
  wx.getSetting({  
    success: function(res) {  
      console.log(res)
      if (!res.authSetting['scope.userLocation']) {  
        // 2. 用户未授权，请求授权  
        wx.authorize({  
          scope: 'scope.userLocation',  
          success: function () {  
            // 3. 用户已授权，获取位置信息  
            wx.showToast({
              title: '已获取位置授权',
              icon: 'none'
            })
          },  
          fail: function () {  
            // 用户拒绝授权  
            wx.showModal({  
              title: '警告',  
              content: '您拒绝了授权，无法获取位置信息',  
              showCancel: true,  
              confirmText: '重新获取',  
              cancelText: '取消',
              success (res) {  
                if (res.confirm) {  
                  _this.openConfirm()
                  // 用户点击确定，可以做一些操作，例如跳转页面  
                }  
              }  
            })  
          }  
        })  
      } 
    }  
  })
 },

 openConfirm: function () {
  wx.showModal({
      content: '检测到您没打开此小程序的定位权限，是否去设置打开？',
      confirmText: "确认",
      cancelText: "取消",
      success: function (res) {
          console.log(res);
          //点击“确认”时打开设置页面
          if (res.confirm) {
              console.log('用户点击确认')
              wx.openSetting({
                  success: (res) => {}
              })
          } else {
              console.log('用户点击取消')
          }
      }
  });
},

 /**
  * 生命周期函数--监听页面隐藏
  */
 onHide() {

 },

 /**
  * 生命周期函数--监听页面卸载
  */
 onUnload() {

 },

 /**
  * 页面相关事件处理函数--监听用户下拉动作
  */
 onPullDownRefresh() {

 },

 /**
  * 页面上拉触底事件的处理函数
  */
 onReachBottom() {

 },

 /**
  * 用户点击右上角分享
  */
 onShareAppMessage() {

 }
})