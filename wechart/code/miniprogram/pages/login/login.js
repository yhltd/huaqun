// miniprogram/pages/login/login.js
// const requestUrl = require('../../config').requestUrl
const app = getApp();


var login = function(that,info) {

  // wx.navigateTo({
  //   url:'../../package_huaqun/page/shows/shows'
  // })

  var lock = that.data.lock;
  if(!lock){
    return;
  }else{
    that.setData({
      lock : false
    })
  }
    console.log(system)
    var sql = "select * from userInfo where username ='" + info.inputName + "' and password = '" + info.inputPwd + "'"
    wx.cloud.callFunction({
      name: 'sqlserver_huaqun',
      data:{
        query : sql
      },
      success : res =>{
        var list = res.result.recordset
        console.log(list)
        if(list.length == 0){
          wx.showToast({
            title: '用户名或密码错误',
            icon:'none',
          })
        }else{
          var user_list = list[0]
          if(that.data.jizhu_panduan){
            that.remember_user(info.inputName,info.inputPwd)
          }else{
            that.remove_user()
          }
          wx.navigateTo({
            url:'../../package_huaqun/page/shows/shows?userInfo='+JSON.stringify(user_list)
          })
        }
      },
      err: res => {
        console.log("错误!")
      },
      fail: res => {
        console.log(res)
        wx.showToast({
          title: '请求失败！',
          icon: 'none',
          duration: 3000
        })
        console.log("请求失败！")
      },
      complete: () => {
        that.setData({
          lock : true
        })
      }
    })

}



function getCompanyTime(that,info){
  login(that,info)
} 

Page({

  /**
   * 页面的初始数据
   */
  data: {
    lock : true,
    system : "选择系统",
    systemArray :[],
    pickerArray : [],
    input_text: "",
    name: '',
    pwd: '',
    gongsi: "选择公司",
    jizhu_panduan:false,
  },

  checkboxChange(e){
    var _this = this
    _this.setData({
      jizhu_panduan: !_this.data.jizhu_panduan
    })
    console.log(_this.data.jizhu_panduan)
  },

  remember_user(username,password){
    var _this = this
    wx.setStorage({
      key:"user",
      data:username
    })
    wx.setStorage({
      key:"pass",
      data:password
    })
  },

  remove_user(){
    wx.removeStorage({
      key: 'user',
      success (res) {
          console.log(res.errMsg)
      }
    })
    wx.removeStorage({
      key: 'pass',
      success (res) {
          console.log(res.errMsg)
      }
    })
  },
  
  bindNameInput: function(e) {
    this.setData({
      name: e.detail.value
    })
  },
  bindPwdInput: function(e) {
    this.setData({
      pwd: e.detail.value
    })
  },

  formLogin: function(e) {
    var _this = this
    getCompanyTime(this,e.detail.value,this.data.system)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(e) {
    
    var that = this;
    app.globalData.finduser = 'name1'
    wx.getStorage({
      key: 'user',
      success (res) {
        console.log(res.data)
        that.setData({
          name:res.data,
          jizhu_panduan:true
        })
      }
    })
    wx.getStorage({
      key: 'pass',
      success (res) {
        console.log(res.data)
        that.setData({
          pwd:res.data,
          jizhu_panduan:true
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
    var _this =this
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
    wx.hideToast({
      success: (res) => {
        console.log("隐藏消息提示框")
      },
    })
    this.setData({
      lock : true
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})