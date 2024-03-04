// package_huaqun/page/shows/shows.js
Page({

   /**
   * 页面的初始数据
   */
  data: {
    userInfo:'',
    active:0,
    showList: [{
      text: "铝框参照表",
      url: "../canzhao/canzhao"
    },
    {
      text: "灯带开料参照表",
      url: "../dengdai_kailiao/dengdai_kailiao"
    },
    {
      text: "灯带价格配置表",
      url: "../qtpeizhi/qtpeizhi"
    },
    {
      text: "灯带价格标准",
      url: "../shoufei_biaozhun/shoufei_biaozhun"
    },
    {
      text: "下拉配置表",
      url: "../xlpeizhi/xlpeizhi"
    },
    {
      text: "拉手孔生成配置",
      url: "../../../package_huaqun_erqi/page/lashou_peizhi/lashou_peizhi"
    },
    {
      text: "账号管理",
      url: "../zhguanli/zhguanli"
    },
    {
      text: "灯带打印",
      url: "../dddayin_peizhi/dddayin_peizhi"
    },
    {
      text: "铝框打印1",
      url: "../lkdayin_peizhi/lkdayin_peizhi"
    },
    {
      text: "铝框打印2",
      url: "../lkdayin_peizhi2/lkdayin_peizhi2"
    },
  ]
  },
  

  go: function (e) {
    var _this = this;
    var index = e.currentTarget.dataset.index;
    var url = _this.data.showList[index].url
    var text = _this.data.showList[index].text
    console.log(_this.data.userInfo.power)
    if (_this.data.userInfo.power=="管理员"){
      if(url != ''){
        wx.navigateTo({
          url: url + "?userInfo=" + JSON.stringify(_this.data.userInfo)
        })
      }
    }else{
      wx.showToast({
        title: '非管理员账号无权限查看！',
        icon: 'none'
      })
    }
    
  },

  onChange: function (event) {
    var _this = this;
    console.log(_this.data.userInfo.power)
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