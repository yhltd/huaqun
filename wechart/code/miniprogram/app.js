//app.js

App({
  globalData: {
    
  },
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        env:'my-env-id',
        env:'cloud1-7gqvlqet251ed5f7',
        traceUser: true,
      })
    }
  }
})

