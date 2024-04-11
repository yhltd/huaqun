const util = require("../utils/util");
const PrintUtil = require('../utils/printutil')
const app = getApp();
var tsc = require("../utils/tsc.js");
var encode = require("../utils/encoding.js");
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    qr_code:'',
    gongsi: '',
    userInfo: [],
    list: [],
    order_id: "",
    systemArray: ['入库', '出库'],
    out_in_type: '选择单据类型',
    order_array: [],
    order_number: '选择单号',
    width_user_all: 0,
    width_user: 0,
    height_user: 0,

    width_user_all: 100,
    width_user: 100,
    height_user: 100,
    currentPrint: 1,
    printerNum: 1,
    oneTimeData: 0,
    looptime: 0,
    imageSrc:'../../images/wechat.jpg',


    mask_hid: true,
    updComment_hid: true,

    errMsgs: {
      "10003": "连接失败，重开蓝牙试试~",
      "10012": "连接超时，重开蓝牙试试~",
      "10009": "手机版本不支持",
      "10004": "设备不支持",
      "10005": "设备不支持"
    },

    isConn: false,
    blueList: [],
    option: {
      deviceId: "",
      serviceId: "",
      characteristicId: ""
    },

    startTime: 0,
    endTime: 0
  },

  setCanvas: function (comment_order) {
    var _this = this;
    var list = _this.data.list
    var dayin_peizhi = _this.data.dayin_peizhi
    var width_all = _this.data.width_user_all
    var width = _this.data.width_user
    var height = _this.data.height_user
    console.log(width_all)
    console.log(width)
    console.log(height)
    const ctx = wx.createCanvasContext('outCanvas')
    console.log('赋值前')
    ctx.setFillStyle("white")
    ctx.fillRect(0, 0, width, height)

    height = 20
    var danju_height = 20
    for(var i=0; i<list.length; i++){
      if(list[i].lvxingcai != ""){
        danju_height = danju_height + 1440
        ctx.setTextAlign('center')
        ctx.setFillStyle('#000000')
        ctx.setFontSize(12)
        ctx.setTextAlign('left')
        ctx.fillText('天龙五金铝框', 120, height)
        height = height + 20
        ctx.setTextAlign('left')
        if(dayin_peizhi.P1 == '是'){
          ctx.fillText('客户：' + list[i].customer_name, 0, height)
        }

        ctx.setTextAlign('left')
        if(dayin_peizhi.P2 == '是'){
          ctx.fillText('日期：' + list[i].insert_date, 100, height)
        }

        ctx.setTextAlign('left')
        if(dayin_peizhi.P3 == '是'){
          ctx.fillText( list[i].customer_number, 240, height)
        }

        height = height + 20
        ctx.setTextAlign('left')
        if(dayin_peizhi.P4 == '是'){
          ctx.fillText('安装地址：' + list[i].install_address, 0, height)
          height = height + 30
        }




        if(dayin_peizhi.P5 == '是'){
          ctx.setTextAlign('left')
          ctx.fillText(list[i].order_number, 0, height)
          ctx.fillText((i*1+1*1), 240, height)
          height = height + 20
        }



        ctx.setTextAlign('left')
        if(dayin_peizhi.P6 == '是'){
          ctx.fillText(list[i].lvxingcai, 0, height)
          ctx.fillText(list[i].lvcai_yanse, 120, height)
          ctx.fillText(list[i].lashou_xinghao, 240, height)
  
          height = height + 20
        }

        ctx.setTextAlign('left')
        if(dayin_peizhi.P7 == '是'){
          ctx.fillText(list[i].boli_shenjiagong, 0, height)
          ctx.fillText(list[i].boli_yanse, 120, height)
  
          height = height + 20
        }

        ctx.setTextAlign('left')
        if(dayin_peizhi.P8 == '是'){
          ctx.fillText(list[i].height, 0, height)
          ctx.fillText('*', 80, height)
          ctx.fillText(list[i].width, 120, height)
          ctx.fillText(list[i].num, 240, height)
  
          height = height + 20
        }

        ctx.setTextAlign('left')
        if(dayin_peizhi.P9 == '是'){
          ctx.fillText('铰链孔方向', 0, height)
          ctx.fillText('左开门', 80, height)
          ctx.fillText('', 160, height)
          ctx.fillText('右开门', 240, height)
          ctx.fillText('', 320, height)
  
          height = height + 20
        }

        ctx.setTextAlign('left')
        if(dayin_peizhi.P10 == '是'){
          ctx.fillText('开门方向数量', 0, height)
          ctx.fillText(list[i].jiaoliankong_fangxiang_left, 80, height)
          ctx.fillText('', 160, height)
          ctx.fillText(list[i].jiaoliankong_fangxiang_right, 240, height)
          ctx.fillText('', 320, height)
  
          height = height + 20
        }

        ctx.setTextAlign('left')
        if(dayin_peizhi.P11 == '是'){
          ctx.fillText('有拉手数量(个)', 0, height)
          ctx.fillText(list[i].lashou_shuliang_right, 80, height)
          ctx.fillText('', 160, height)
          ctx.fillText(list[i].lashou_shuliang_left, 240, height)
          ctx.fillText('', 320, height)
  
          height = height + 20
        }

        ctx.setTextAlign('left')
        if(dayin_peizhi.P12 == '是'){
          ctx.fillText('拉手位方向', 0, height)
          ctx.fillText('从下向上', 80, height)
          ctx.fillText('从右向左', 160, height)
          ctx.fillText('从下向上', 240, height)
          ctx.fillText('从左向右', 320, height)
  
          height = height + 20
        }

        ctx.setTextAlign('left')
        if(dayin_peizhi.P13 == '是'){
          ctx.fillText('拉手位', 0, height)
          ctx.fillText(list[i].lashouwei_select_left, 80, height)
          ctx.fillText(list[i].lashouwei_insert_left, 160, height)
          ctx.fillText(list[i].lashouwei_select_right, 240, height)
          ctx.fillText(list[i].lashouwei_insert_right, 320, height)
  
          height = height + 20
        }
        ctx.setTextAlign('left')
        if(dayin_peizhi.P14 == '是'){
          ctx.fillText('装锁数量', 0, height)
          ctx.fillText(list[i].zhuangsuoshuliang_insert_left1, 80, height)
          ctx.fillText('', 160, height)
          ctx.fillText(list[i].zhuangsuoshuliang_insert_right1, 240, height)
          ctx.fillText('', 320, height)
  
          height = height + 20
        }

        ctx.setTextAlign('left')
        if(dayin_peizhi.P15 == '是'){
          ctx.fillText('锁孔位方向', 0, height)
          ctx.fillText('从下向上', 80, height)
          ctx.fillText('从右向左', 160, height)
          ctx.fillText('从下向上', 240, height)
          ctx.fillText('从左向右', 320, height)
  
          height = height + 20
        }

        ctx.setTextAlign('left')
        if(dayin_peizhi.P16 == '是'){
          ctx.fillText('锁孔位', 0, height)
          ctx.fillText(list[i].zhuangsuofangwei_insert_left1, 80, height)
          ctx.fillText(list[i].zhuangsuofangwei_insert_left2, 160, height)
          ctx.fillText(list[i].zhuangsuofangwei_insert_right1, 240, height)
          ctx.fillText(list[i].zhuangsuofangwei_insert_right2, 320, height)
  
          height = height + 20
        }

        ctx.setTextAlign('left')
        if(dayin_peizhi.P17 == '是'){
          ctx.fillText('开铰链孔', 0, height)
          ctx.fillText(list[i].kaijiaolian, 80, height)
          ctx.fillText('', 160, height)
          ctx.fillText('', 240, height)
          ctx.fillText('', 320, height)
  
          height = height + 20
        }

        ctx.setTextAlign('left')
        if(dayin_peizhi.P18 == '是'){
          ctx.fillText('铰链孔位1', 0, height)
          ctx.fillText(list[i].jiaolian1_select_left, 80, height)
          ctx.fillText(list[i].jiaolian1_insert_left, 160, height)
          ctx.fillText(list[i].jiaolian1_select_right, 240, height)
          ctx.fillText(list[i].jiaolian1_insert_right, 320, height)
  
          height = height + 20
        }

        ctx.setTextAlign('left')
        if(dayin_peizhi.P19 == '是'){
          ctx.fillText('铰链孔位2', 0, height)
          ctx.fillText(list[i].jiaolian2_select_left, 80, height)
          ctx.fillText(list[i].jiaolian2_insert_left, 160, height)
          ctx.fillText(list[i].jiaolian2_select_right, 240, height)
          ctx.fillText(list[i].jiaolian2_insert_right, 320, height)
  
          height = height + 20
        }

        ctx.setTextAlign('left')
        if(dayin_peizhi.P20 == '是'){
          ctx.fillText('铰链孔位3', 0, height)
          ctx.fillText(list[i].jiaolian3_select_left, 80, height)
          ctx.fillText(list[i].jiaolian3_insert_left, 160, height)
          ctx.fillText(list[i].jiaolian3_select_right, 240, height)
          ctx.fillText(list[i].jiaolian3_insert_right, 320, height)
  
          height = height + 20
        }

        ctx.setTextAlign('left')
        if(dayin_peizhi.P21 == '是'){
          ctx.fillText('铰链孔位4', 0, height)
          ctx.fillText(list[i].jiaolian4_select_left, 80, height)
          ctx.fillText(list[i].jiaolian4_insert_left, 160, height)
          ctx.fillText(list[i].jiaolian4_select_right, 240, height)
          ctx.fillText(list[i].jiaolian4_insert_right, 320, height)
  
          height = height + 20
        }

        ctx.setTextAlign('left')
        if(dayin_peizhi.P22 == '是'){
          ctx.fillText('铰链孔位5', 0, height)
          ctx.fillText(list[i].jiaolian5_select_left, 80, height)
          ctx.fillText(list[i].jiaolian5_insert_left, 160, height)
          ctx.fillText(list[i].jiaolian5_select_right, 240, height)
          ctx.fillText(list[i].jiaolian5_insert_right, 320, height)
  
          height = height + 20
        }

        ctx.setTextAlign('left')
        if(dayin_peizhi.P23 == '是'){
          ctx.fillText('铰链孔位6', 0, height)
          ctx.fillText(list[i].jiaolian6_select_left, 80, height)
          ctx.fillText(list[i].jiaolian6_insert_left, 160, height)
          ctx.fillText(list[i].jiaolian6_select_right, 240, height)
          ctx.fillText(list[i].jiaolian6_insert_right, 320, height)
        }

        
        height = height + 50
      }
    }
    _this.setData({
      danju_height
    })
    ctx.draw()
  },

  getUserInfo: function () {
    var _this = this;
    var length = 600
    wx.getSystemInfo({
      success: res => {
        _this.setData({
          width_user_all: res.windowWidth,
          width_user: res.windowWidth * 0.98,
          height_user: length
        })
      },
    })
  },

  getTime: function () {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
    var day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
    var hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
    var minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()

    return year + "-" + month + "-" + day + " " + hour + ":" + minute
  },

  updComment_show: function () {
    var _this = this;
    _this.setData({
      mask_hid: false,
      updComment_hid: false
    })
  },

  hid_view: function () {
    this.setData({
      mask_hid: true,
      updComment_hid: true
    })
  },

  updComment: function (e) {
    var _this = this;
    _this.hid_view()
    var value = e.detail.value.comment_order
    _this.setCanvas(value)
  },




  //初始化蓝牙适配器
  openBluetoothAdapter: function () {
    var _this = this;
    wx.openBluetoothAdapter({
      success: function (res) {
        console.log("初始化蓝牙适配器状态");
        console.log(res);
        wx.startBluetoothDevicesDiscovery({
          powerLevel: "medium",
          success: res => {
            console.log("开始搜索=>", res)
            wx.onBluetoothDeviceFound(res => {
              console.log(res)
              var blueList = _this.data.blueList;
              if (blueList.length != 0) {
                for (let i = 0; i < res.devices.length; i++) {
                  if (res.devices[i].name != "") {
                    for (let j = 0; j < blueList.length; j++) {
                      if (res.devices[i].deviceId != blueList[j].deviceId) {
                        blueList.push(res.devices[i])
                      }
                    }
                  }
                }
              } else {
                for (let i = 0; i < res.devices.length; i++) {
                  if (res.devices[i].name != "") {
                    blueList.push(res.devices[i])
                  }
                }
              }
              _this.setData({
                blueList
              })
              console.log(blueList)
            })
          }
        })
      },
      fail: res => {
        if (res.errCode != undefined) {
          if (res.errCode == 10001) {
            wx.showToast({
              title: '本机蓝牙未打开410' + res,
              duration: 2000,
              icon: 'none'
            })
          }
        }
        if (res.state != undefined) {
          if (res.state == 4) {
            wx.showToast({
              title: '本机蓝牙未打开419',
              duration: 2000,
              icon: 'none'
            })
          }
        }
      }
    })
  },

  choiceBlue: function (e) {
    var _this = this;
    console.log(e.currentTarget.dataset.serviceid)
    console.log(e.currentTarget.dataset.deviceid)
    console.log(e.currentTarget.dataset.serviceid)
    var deviceId = e.currentTarget.dataset.deviceid;
    var serviceId = e.currentTarget.dataset.serviceid
    wx.showToast({
      title: '正在连接',
      icon: 'none',
      duration: 2000
    })
    wx.createBLEConnection({
      deviceId,
      timeout: 10000,
      success: res => {
        console.log("连接蓝牙低功耗设备=>" + res)
        wx.stopBluetoothDevicesDiscovery({
          success: res => {
            console.log("停止搜索=>", res)
          },
          complete: res => {
            setTimeout(function () {
              _this.getOptions(deviceId, serviceId)
            }, 1000)
          }
        })
      },
      fail: res => {
        console.log(res)
        if (res.errCode == -1) {
          setTimeout(function () {
            _this.getOptions(deviceId, serviceId)
          }, 500)
        }
        wx.showToast({
          title: errMsgs[465 + res.errCode],
          icon: "none",
          duration: 2000
        })
      }
    })
  },

  getOptions: function (deviceId, serviceId) {
    var _this = this;
    console.log(deviceId)
    console.log(serviceId)
    wx.getBLEDeviceServices({
      deviceId,
      success: res => {
        console.log("获取蓝牙低功耗设备所有服务=>" + res)
        var this_list = res.services
        console.log(this_list)
        // for(var i=0; i<this_list.length; i++){
        if (this_list[0].isPrimary) {
          var sId = this_list[0].uuid
          wx.getBLEDeviceCharacteristics({
            deviceId,
            serviceId: sId,
            success: res => {
              console.log(res)
              for (let i = 0; i < res.characteristics.length; i++) {
                if (res.characteristics[i].properties.write) {
                  _this.setData({
                    option: {
                      deviceId,
                      serviceId: sId,
                      characteristicId: res.characteristics[i].uuid
                    },
                    isConn: true,
                    blueList: []
                  })
                  return;
                }
              }
              wx.showToast({
                title: _this.data.errMsgs[10004],
                icon: 'none',
                duration: 2000
              })
            },
            fail: res => {
              console.log(res)
            }
          })
        }
        // }
      },
      fail: res => {
        console.log(res)
      }
    })
  },

  //打印按钮click事件
  save: function () {
    var _this = this;
    if (!_this.data.isConn) {
      wx.showToast({
        title: '蓝牙未连接',
        icon: 'none'
      })
      return;
    } else {
      _this.printTo()
    }
  },

  labelTest: function () { //标签测试
    var that = this;
    var _this = this;
    // if (!_this.data.isConn) {
    //   wx.showToast({
    //     title: '蓝牙未连接',
    //     icon: 'none'
    //   })
    //   return;
    // }
    var canvasWidth = that.data.canvasWidth
    var canvasHeight = that.data.canvasHeight    
    var list = _this.data.list
    var command_arr = []
    var command = tsc.jpPrinter.createNew()
    command.setCls()//清除缓冲区
    command.setSize(100, 80)//设置标签大小，单位mm.具体参数请用尺子量一下
    command.setGap(2)//设置两个标签之间的间隙，单位mm.具体参数请用尺子量一下
    command.setCls()//清除缓冲区
    for(var i=0; i<list.length; i++){
      if(list[i].lvxingcai != ""){
        command = tsc.jpPrinter.createNew()
        command.setCls()//清除缓冲区
        command.setSize(100, 80)//设置标签大小，单位mm.具体参数请用尺子量一下
        command.setGap(2)//设置两个标签之间的间隙，单位mm.具体参数请用尺子量一下
        command.setCls()//清除缓冲区
        var panduan = false
        var height = 0
        height = height + 40
        command.setText(380, height, "TSS24.BF2", 0, 3, 3, "天龙五金铝框")//绘制文字
        
        height = height + 80
        command.setText(30, height, "TSS24.BF2", 0, 2, 2, '客户：' + list[i].customer_name)//绘制文字
        command.setText(420, height, "TSS24.BF2", 0, 2, 2, '日期：' + list[i].insert_date)//绘制文字
        command.setText(870, height, "TSS24.BF2", 0, 2, 2, list[i].customer_number)//绘制文字

        height = height + 60
        panduan = false
        if(height % 800 == 0 || height % 960 == 0){
          height = 40
          command.setPagePrint()//执行打印指令
          command_arr.push(command)
          command = tsc.jpPrinter.createNew()
          command.setCls()//清除缓冲区
          command.setSize(100, 80)//设置标签大小，单位mm.具体参数请用尺子量一下
          command.setGap(2)//设置两个标签之间的间隙，单位mm.具体参数请用尺子量一下
          command.setCls()//清除缓冲区
          panduan = true
        }
        command.setText(30,height, "TSS24.BF2", 0, 2, 2, '安装地址：' + list[i].install_address)//绘制文字

        height = height + 60
        panduan = false
        if(height % 800 == 0 || height % 960 == 0){
          height = 40
          command.setPagePrint()//执行打印指令
          command_arr.push(command)
          command = tsc.jpPrinter.createNew()
          command.setCls()//清除缓冲区
          command.setSize(100, 80)//设置标签大小，单位mm.具体参数请用尺子量一下
          command.setGap(2)//设置两个标签之间的间隙，单位mm.具体参数请用尺子量一下
          command.setCls()//清除缓冲区
          panduan = true
        }
        command.setText(30, height, "TSS24.BF2", 0, 2, 2, list[i].order_number)
        command.setText(870, height, "TSS24.BF2", 0, 2, 2, (i*1+1*1))
        

        height = height + 60
        panduan = false
        if(height % 800 == 0 || height % 960 == 0){
          height = 40
          command.setPagePrint()//执行打印指令
          command_arr.push(command)
          command = tsc.jpPrinter.createNew()
          command.setCls()//清除缓冲区
          command.setSize(100, 80)//设置标签大小，单位mm.具体参数请用尺子量一下
          command.setGap(2)//设置两个标签之间的间隙，单位mm.具体参数请用尺子量一下
          command.setCls()//清除缓冲区
          panduan = true
        }
        command.setText(30, height, "TSS24.BF2", 0, 2, 2, list[i].lvxingcai)
        command.setText(470, height, "TSS24.BF2", 0, 2, 2, list[i].lvcai_yanse)
        command.setText(870, height, "TSS24.BF2", 0, 2, 2, list[i].lashou_xinghao)

        height = height + 60
        panduan = false
        if(height % 800 == 0 || height % 960 == 0){
          height = 40
          command.setPagePrint()//执行打印指令
          command_arr.push(command)
          command = tsc.jpPrinter.createNew()
          command.setCls()//清除缓冲区
          command.setSize(100, 80)//设置标签大小，单位mm.具体参数请用尺子量一下
          command.setGap(2)//设置两个标签之间的间隙，单位mm.具体参数请用尺子量一下
          command.setCls()//清除缓冲区
          panduan = true
        }
        command.setText(30, height, "TSS24.BF2", 0, 2, 2, list[i].boli_shenjiagong)
        command.setText(470, height, "TSS24.BF2", 0, 2, 2, list[i].boli_yanse)

        height = height + 60
        panduan = false
        if(height % 800 == 0 || height % 960 == 0){
          height = 40
          command.setPagePrint()//执行打印指令
          command_arr.push(command)
          command = tsc.jpPrinter.createNew()
          command.setCls()//清除缓冲区
          command.setSize(100, 80)//设置标签大小，单位mm.具体参数请用尺子量一下
          command.setGap(2)//设置两个标签之间的间隙，单位mm.具体参数请用尺子量一下
          command.setCls()//清除缓冲区
          panduan = true
        }
        command.setText(30, height, "TSS24.BF2", 0, 3, 3, list[i].height)
        command.setText(240, height, "TSS24.BF2", 0, 3, 3, '*')
        command.setText(470, height, "TSS24.BF2", 0, 3, 3, list[i].width)
        command.setText(870, height, "TSS24.BF2", 0, 3, 3, list[i].num)

        height = height + 80
        panduan = false
        if(height % 800 == 0 || height % 960 == 0){
          height = 40
          command.setPagePrint()//执行打印指令
          command_arr.push(command)
          command = tsc.jpPrinter.createNew()
          command.setCls()//清除缓冲区
          command.setSize(100, 80)//设置标签大小，单位mm.具体参数请用尺子量一下
          command.setGap(2)//设置两个标签之间的间隙，单位mm.具体参数请用尺子量一下
          command.setCls()//清除缓冲区
          panduan = true
        }
        command.setText(30, height, "TSS24.BF2", 0, 2, 2, "铰链孔方向")
        command.setText(370, height, "TSS24.BF2", 0, 2, 2, '左开门')
        command.setText(574, height, "TSS24.BF2", 0, 2, 2, "")
        command.setText(778, height, "TSS24.BF2", 0, 2, 2, "右开门")
        command.setText(982, height, "TSS24.BF2", 0, 2, 2, "")

        height = height + 60
        panduan = false
        if(height % 800 == 0 || height % 960 == 0){
          height = 40
          command.setPagePrint()//执行打印指令
          command_arr.push(command)
          command = tsc.jpPrinter.createNew()
          command.setCls()//清除缓冲区
          command.setSize(100, 80)//设置标签大小，单位mm.具体参数请用尺子量一下
          command.setGap(2)//设置两个标签之间的间隙，单位mm.具体参数请用尺子量一下
          command.setCls()//清除缓冲区
          panduan = true
        }
        command.setText(30, height, "TSS24.BF2", 0, 2, 2, "开门方向数量")
        command.setText(452, height, "TSS24.BF2", 0, 2, 2, list[i].jiaoliankong_fangxiang_left)
        command.setText(574, height, "TSS24.BF2", 0, 2, 2, "")
        command.setText(860, height, "TSS24.BF2", 0, 2, 2, list[i].jiaoliankong_fangxiang_right)
        command.setText(982, height, "TSS24.BF2", 0, 2, 2, "")

        height = height + 60
        panduan = false
        if(height % 800 == 0 || height % 960 == 0){
          height = 40
          command.setPagePrint()//执行打印指令
          command_arr.push(command)
          command = tsc.jpPrinter.createNew()
          command.setCls()//清除缓冲区
          command.setSize(100, 80)//设置标签大小，单位mm.具体参数请用尺子量一下
          command.setGap(2)//设置两个标签之间的间隙，单位mm.具体参数请用尺子量一下
          command.setCls()//清除缓冲区
          panduan = true
        }
        command.setText(30, height, "TSS24.BF2", 0, 2, 2, "有拉手数量(个)")
        command.setText(452, height, "TSS24.BF2", 0, 2, 2, list[i].lashou_shuliang_right)
        command.setText(574, height, "TSS24.BF2", 0, 2, 2, "")
        command.setText(860, height, "TSS24.BF2", 0, 2, 2, list[i].lashou_shuliang_left)
        command.setText(982, height, "TSS24.BF2", 0, 2, 2, "")

        height = height + 60
        panduan = false
        if(height % 800 == 0 || height % 960 == 0){
          height = 40
          command.setPagePrint()//执行打印指令
          command_arr.push(command)
          command = tsc.jpPrinter.createNew()
          command.setCls()//清除缓冲区
          command.setSize(100, 80)//设置标签大小，单位mm.具体参数请用尺子量一下
          command.setGap(2)//设置两个标签之间的间隙，单位mm.具体参数请用尺子量一下
          command.setCls()//清除缓冲区
          panduan = true
        }
        command.setText(30, height, "TSS24.BF2", 0, 2, 2, "拉手位方向")
        command.setText(370, height, "TSS24.BF2", 0, 2, 2, '从下向上')
        command.setText(574, height, "TSS24.BF2", 0, 2, 2, "从右向左")
        command.setText(778, height, "TSS24.BF2", 0, 2, 2, "从下向上")
        command.setText(982, height, "TSS24.BF2", 0, 2, 2, "从左向右")

        height = height + 60
        panduan = false
        if(height % 800 == 0 || height % 960 == 0){
          height = 40
          command.setPagePrint()//执行打印指令
          command_arr.push(command)
          command = tsc.jpPrinter.createNew()
          command.setCls()//清除缓冲区
          command.setSize(100, 80)//设置标签大小，单位mm.具体参数请用尺子量一下
          command.setGap(2)//设置两个标签之间的间隙，单位mm.具体参数请用尺子量一下
          command.setCls()//清除缓冲区
          panduan = true
        }
        command.setText(30, height, "TSS24.BF2", 0, 2, 2, "拉手位")
        command.setText(430, height, "TSS24.BF2", 0, 2, 2, list[i].lashouwei_select_left)
        command.setText(574, height, "TSS24.BF2", 0, 2, 2, list[i].lashouwei_insert_left)
        command.setText(838, height, "TSS24.BF2", 0, 2, 2, list[i].lashouwei_select_right)
        command.setText(982, height, "TSS24.BF2", 0, 2, 2, list[i].lashouwei_insert_right)

        height = height + 60
        panduan = false
        console.log(height)
        if(height % 800 == 0 || height % 960 == 0){
          height = 40
          command.setPagePrint()//执行打印指令
          command_arr.push(command)
          command = tsc.jpPrinter.createNew()
          command.setCls()//清除缓冲区
          command.setSize(100, 80)//设置标签大小，单位mm.具体参数请用尺子量一下
          command.setGap(2)//设置两个标签之间的间隙，单位mm.具体参数请用尺子量一下
          command.setCls()//清除缓冲区
          panduan = true
        }
        command.setText(30, height, "TSS24.BF2", 0, 2, 2, "装锁数量")
        command.setText(370, height, "TSS24.BF2", 0, 2, 2, list[i].zhuangsuoshuliang_insert_left1)
        command.setText(574, height, "TSS24.BF2", 0, 2, 2, "")
        command.setText(778, height, "TSS24.BF2", 0, 2, 2, list[i].zhuangsuoshuliang_insert_right1)
        command.setText(982, height, "TSS24.BF2", 0, 2, 2, "")

        height = height + 60
        panduan = false
        if(height % 800 == 0 || height % 960 == 0){
          height = 40
          command.setPagePrint()//执行打印指令
          command_arr.push(command)
          command = tsc.jpPrinter.createNew()
          command.setCls()//清除缓冲区
          command.setSize(100, 80)//设置标签大小，单位mm.具体参数请用尺子量一下
          command.setGap(2)//设置两个标签之间的间隙，单位mm.具体参数请用尺子量一下
          command.setCls()//清除缓冲区
          panduan = true
        }
        command.setText(30, height, "TSS24.BF2", 0, 2, 2, "锁孔位方向")
        command.setText(370, height, "TSS24.BF2", 0, 2, 2, '从下向上')
        command.setText(574, height, "TSS24.BF2", 0, 2, 2, "从右向左")
        command.setText(778, height, "TSS24.BF2", 0, 2, 2, "从下向上")
        command.setText(982, height, "TSS24.BF2", 0, 2, 2, "从左向右")

        height = height + 60
        panduan = false
        if(height % 800 == 0 || height % 960 == 0){
          height = 40
          command.setPagePrint()//执行打印指令
          command_arr.push(command)
          command = tsc.jpPrinter.createNew()
          command.setCls()//清除缓冲区
          command.setSize(100, 80)//设置标签大小，单位mm.具体参数请用尺子量一下
          command.setGap(2)//设置两个标签之间的间隙，单位mm.具体参数请用尺子量一下
          command.setCls()//清除缓冲区
          panduan = true
        }
        command.setText(30, height, "TSS24.BF2", 0, 2, 2, "锁孔位")
        command.setText(370, height, "TSS24.BF2", 0, 2, 2, list[i].zhuangsuofangwei_insert_left1)
        command.setText(574, height, "TSS24.BF2", 0, 2, 2, list[i].zhuangsuofangwei_insert_left2)
        command.setText(778, height, "TSS24.BF2", 0, 2, 2, list[i].zhuangsuofangwei_insert_right1)
        command.setText(982, height, "TSS24.BF2", 0, 2, 2, list[i].zhuangsuofangwei_insert_right2)

        height = height + 60
        panduan = false
        if(height % 800 == 0 || height % 960 == 0){
          height = 40
          command.setPagePrint()//执行打印指令
          command_arr.push(command)
          command = tsc.jpPrinter.createNew()
          command.setCls()//清除缓冲区
          command.setSize(100, 80)//设置标签大小，单位mm.具体参数请用尺子量一下
          command.setGap(2)//设置两个标签之间的间隙，单位mm.具体参数请用尺子量一下
          command.setCls()//清除缓冲区
          panduan = true
        }
        command.setText(30, height, "TSS24.BF2", 0, 2, 2, "开铰链孔")
        command.setText(370, height, "TSS24.BF2", 0, 2, 2, list[i].kaijiaolian)
        command.setText(574, height, "TSS24.BF2", 0, 2, 2, "")
        command.setText(778, height, "TSS24.BF2", 0, 2, 2, "")
        command.setText(982, height, "TSS24.BF2", 0, 2, 2, "")

        height = height + 60
        panduan = false
        if(height % 800 == 0 || height % 960 == 0){
          height = 40
          command.setPagePrint()//执行打印指令
          command_arr.push(command)
          command = tsc.jpPrinter.createNew()
          command.setCls()//清除缓冲区
          command.setSize(100, 80)//设置标签大小，单位mm.具体参数请用尺子量一下
          command.setGap(2)//设置两个标签之间的间隙，单位mm.具体参数请用尺子量一下
          command.setCls()//清除缓冲区
          panduan = true
        }
        command.setText(30, height, "TSS24.BF2", 0, 2, 2, "铰链孔位1")
        command.setText(370, height, "TSS24.BF2", 0, 2, 2, list[i].jiaolian1_select_left)
        command.setText(574, height, "TSS24.BF2", 0, 2, 2, list[i].jiaolian1_insert_left)
        command.setText(778, height, "TSS24.BF2", 0, 2, 2, list[i].jiaolian1_select_right)
        command.setText(982, height, "TSS24.BF2", 0, 2, 2, list[i].jiaolian1_insert_right)

        height = height + 60
        panduan = false
        if(height % 800 == 0 || height % 960 == 0){
          height = 40
          command.setPagePrint()//执行打印指令
          command_arr.push(command)
          command = tsc.jpPrinter.createNew()
          command.setCls()//清除缓冲区
          command.setSize(100, 80)//设置标签大小，单位mm.具体参数请用尺子量一下
          command.setGap(2)//设置两个标签之间的间隙，单位mm.具体参数请用尺子量一下
          command.setCls()//清除缓冲区
          panduan = true
        }
        command.setText(30, height, "TSS24.BF2", 0, 2, 2, "铰链孔位2")
        command.setText(370, height, "TSS24.BF2", 0, 2, 2, list[i].jiaolian2_select_left)
        command.setText(574, height, "TSS24.BF2", 0, 2, 2, list[i].jiaolian2_insert_left)
        command.setText(778, height, "TSS24.BF2", 0, 2, 2, list[i].jiaolian2_select_right)
        command.setText(982, height, "TSS24.BF2", 0, 2, 2, list[i].jiaolian2_insert_right)

        height = height + 60
        panduan = false
        if(height % 800 == 0 || height % 960 == 0){
          height = 40
          command.setPagePrint()//执行打印指令
          command_arr.push(command)
          command = tsc.jpPrinter.createNew()
          command.setCls()//清除缓冲区
          command.setSize(100, 80)//设置标签大小，单位mm.具体参数请用尺子量一下
          command.setGap(2)//设置两个标签之间的间隙，单位mm.具体参数请用尺子量一下
          command.setCls()//清除缓冲区
          panduan = true
        }
        command.setText(30, height, "TSS24.BF2", 0, 2, 2, "铰链孔位3")
        command.setText(370, height, "TSS24.BF2", 0, 2, 2, list[i].jiaolian3_select_left)
        command.setText(574, height, "TSS24.BF2", 0, 2, 2, list[i].jiaolian3_insert_left)
        command.setText(778, height, "TSS24.BF2", 0, 2, 2, list[i].jiaolian3_select_right)
        command.setText(982, height, "TSS24.BF2", 0, 2, 2, list[i].jiaolian3_insert_right)

        height = height + 60
        panduan = false
        if(height % 800 == 0 || height % 960 == 0){
          height = 40
          command.setPagePrint()//执行打印指令
          command_arr.push(command)
          command = tsc.jpPrinter.createNew()
          command.setCls()//清除缓冲区
          command.setSize(100, 80)//设置标签大小，单位mm.具体参数请用尺子量一下
          command.setGap(2)//设置两个标签之间的间隙，单位mm.具体参数请用尺子量一下
          command.setCls()//清除缓冲区
          panduan = true
        }
        command.setText(30, height, "TSS24.BF2", 0, 2, 2, "铰链孔位4")
        command.setText(370, height, "TSS24.BF2", 0, 2, 2, list[i].jiaolian4_select_left)
        command.setText(574, height, "TSS24.BF2", 0, 2, 2, list[i].jiaolian4_insert_left)
        command.setText(778, height, "TSS24.BF2", 0, 2, 2, list[i].jiaolian4_select_right)
        command.setText(982, height, "TSS24.BF2", 0, 2, 2, list[i].jiaolian4_insert_right)

        height = height + 60
        panduan = false
        if(height % 800 == 0 || height % 960 == 0){
          height = 40
          command.setPagePrint()//执行打印指令
          command_arr.push(command)
          command = tsc.jpPrinter.createNew()
          command.setCls()//清除缓冲区
          command.setSize(100, 80)//设置标签大小，单位mm.具体参数请用尺子量一下
          command.setGap(2)//设置两个标签之间的间隙，单位mm.具体参数请用尺子量一下
          command.setCls()//清除缓冲区
          panduan = true
        }
        command.setText(30, height, "TSS24.BF2", 0, 2, 2, "铰链孔位5")
        command.setText(370, height, "TSS24.BF2", 0, 2, 2, list[i].jiaolian5_select_left)
        command.setText(574, height, "TSS24.BF2", 0, 2, 2, list[i].jiaolian5_insert_left)
        command.setText(778, height, "TSS24.BF2", 0, 2, 2, list[i].jiaolian5_select_right)
        command.setText(982, height, "TSS24.BF2", 0, 2, 2, list[i].jiaolian5_insert_right)

        height = height + 60
        panduan = false
        if(height % 800 == 0 || height % 960 == 0){
          height = 40
          command.setPagePrint()//执行打印指令
          command_arr.push(command)
          command = tsc.jpPrinter.createNew()
          command.setCls()//清除缓冲区
          command.setSize(100, 80)//设置标签大小，单位mm.具体参数请用尺子量一下
          command.setGap(2)//设置两个标签之间的间隙，单位mm.具体参数请用尺子量一下
          command.setCls()//清除缓冲区
          panduan = true
        }
        command.setText(30, height, "TSS24.BF2", 0, 2, 2, "铰链孔位6")
        command.setText(370, height, "TSS24.BF2", 0, 2, 2, list[i].jiaolian6_select_left)
        command.setText(574, height, "TSS24.BF2", 0, 2, 2, list[i].jiaolian6_insert_left)
        command.setText(778, height, "TSS24.BF2", 0, 2, 2, list[i].jiaolian6_select_right)
        command.setText(982, height, "TSS24.BF2", 0, 2, 2, list[i].jiaolian6_insert_right)
        
        if(panduan == false){
          command.setPagePrint()//执行打印指令
          command_arr.push(command)
        }
      }
    }
    var str = ""
    for(var i=0; i<command_arr.length; i++){
      str = str + command_arr[i].getZhiLing()
    }
    console.log(str)
    command = tsc.jpPrinter.createNew()
    command.addCommand(str)
    that.setData({
      isLabelSend: true
    })
    that.prepareSend(command.getData())
  },

  prepareSend: function (buff) { //准备发送，根据每次发送字节数来处理分包数量
    //console.log(buff)
    var that = this
    var time = that.data.oneTimeData
    var looptime = parseInt(buff.length / time);
    var lastData = parseInt(buff.length % time);
    //console.log(looptime + "---" + lastData)
    that.setData({
      looptime: looptime + 1,
      lastData: lastData,
      currentTime: 1,
    })
    that.Send(buff)
  },
//     var that = this
//     var _this = this
//     var printNum = that.data.printerNum
//     var currentPrint = that.data.currentPrint
//     var print_buff = []
//     for(var i=0; i<buff.length; i++){
//       var this_data = buff[i].getData()
//       console.log(this_data)
//       var time = that.data.oneTimeData
//       var looptime = parseInt(this_data.length / time);
//       var lastData = parseInt(this_data.length % time);
//       var loopTime = looptime + 1
//       var currentTime = 1
//       var onTimeData = that.data.oneTimeData
//       var buf
//       var dataView
//       var last = 0
//       for(var j=0; j<loopTime-1; j++){
//         buf = new ArrayBuffer(onTimeData)
//         dataView = new DataView(buf)
//         for (var k = 0; k < onTimeData; ++k) {
//           dataView.setUint8(k, this_data[(currentTime - 1) * onTimeData + k])
//         }
//         print_buff.push(buf)
//         currentTime = currentTime + 1
//       }
//       if(lastData > 0){
//         buf = new ArrayBuffer(lastData)
//         dataView = new DataView(buf)
//         for (var k = 0; k < lastData; ++k) {
//           dataView.setUint8(k, this_data[(currentTime - 1) * onTimeData + k])
//         }
//         print_buff.push(buf)
//       }
//     }
//     console.log(print_buff)
//     console.log(_this.data.option.deviceId)
//     console.log(_this.data.option.serviceId)
//     console.log(_this.data.option.characteristicId)
//     console.log(print_buff)
//     _this.setData({
//       xiabiao:0,
//       print_buff
//     })
//     _this.chuandi()

// },

// chuandi(){
//   var _this = this
//   if(_this.data.xiabiao < _this.data.print_buff.length){
//     wx.writeBLECharacteristicValue({
//       deviceId: _this.data.option.deviceId,
//       serviceId: _this.data.option.serviceId,
//       characteristicId: _this.data.option.characteristicId,
//       value: _this.data.print_buff[_this.data.xiabiao],
//       success: function (res) {
//         wx.showToast({
//           title: '第'+ (_this.data.xiabiao+1) +'成功',
//         })
//         _this.setData({
//           xiabiao: (_this.data.xiabiao * 1) + 1
//         })
//         _this.chuandi()
//         console.log(res)
//       },
//       fail: function (e) {
//         wx.showToast({
//           title: '第'+ (_this.data.xiabiao+1) +'失败',
//           icon: 'none',
//         })
//         console.log(_this.data.xiabiao+1)
//         console.log(e)
//       },
//     })
//   }
// },

  Send: function (buff) { //分包发送
    var that = this
    var _this = this
    var currentTime = that.data.currentTime
    var loopTime = that.data.looptime
    var lastData = that.data.lastData
    var onTimeData = that.data.oneTimeData
    var printNum = that.data.printerNum
    var currentPrint = that.data.currentPrint
    var buf
    var dataView
    if (currentTime < loopTime) {
      buf = new ArrayBuffer(onTimeData)
      dataView = new DataView(buf)
      for (var i = 0; i < onTimeData; ++i) {
        dataView.setUint8(i, buff[(currentTime - 1) * onTimeData + i])
      }
    } else {
      buf = new ArrayBuffer(lastData)
      dataView = new DataView(buf)
      for (var i = 0; i < lastData; ++i) {
        dataView.setUint8(i, buff[(currentTime - 1) * onTimeData + i])
      }
    }
    //console.log("第" + currentTime + "次发送数据大小为：" + buf.byteLength)
    console.log(_this.data.option.deviceId)
    console.log(_this.data.option.serviceId)
    console.log(_this.data.option.characteristicId)
    console.log(buf)
    setTimeout(function(){ 
      wx.writeBLECharacteristicValue({
        deviceId: _this.data.option.deviceId,
        serviceId: _this.data.option.serviceId,
        characteristicId: _this.data.option.characteristicId,
        value: buf,
        success: function (res) {
          if (currentPrint == printNum) {
            wx.showToast({
              title: '已打印第' + currentPrint + '张成功',
            })
          }
          //console.log(res)
        },
        fail: function (e) {
          wx.showToast({
            title: '打印第' + currentPrint + '张失败',
            icon: 'none',
          })
  
          //console.log(e)
        },
        complete: function () {
          currentTime++
          if (currentTime <= loopTime) {
            that.setData({
              currentTime: currentTime
            })
            that.Send(buff)
          } else {
            // wx.showToast({
            //   title: '已打印第' + currentPrint + '张',
            // })`
            if (currentPrint == printNum) {
              that.setData({
                looptime: 0,
                lastData: 0,
                currentTime: 1,
                isLabelSend: false,
                currentPrint: 1
              })
            } else {
              currentPrint++
              that.setData({
                currentPrint: currentPrint,
                currentTime: 1,
              })
              that.Send(buff)
            }
          }
        }
      })
    }, 100); 
  },

  printTo : function(){
    var _this = this;
    var list = _this.data.list
    wx.showLoading({
      title: '正在写入...',
    })

    let printUtil = new PrintUtil(1000, 1);

    var height = 20
    for(var i=0; i<list.length; i++){
      if(list[i].lvxingcai != ""){
        printUtil.setFontWidthAndHeight(1, 1);
        printUtil.printlnText(4, 200, height, '天龙五金铝框' );

        height = height + 40
        printUtil.printlnText(4, 35, height, '客户：' + list[i].customer_name);
        printUtil.printlnText(4, 220, height, '日期：' + list[i].insert_date);
        printUtil.printlnText(4, 420, height, list[i].customer_number);

        height = height + 40
        printUtil.printlnText(4, 35, height, '安装地址：' + list[i].install_address);

        height = height + 60
        printUtil.printlnText(4, 35, height, list[i].order_number);
        printUtil.printlnText(4, 420, height, (i*1+1*1));

        height = height + 40
        printUtil.printlnText(4, 35, height, list[i].lvxingcai);
        printUtil.printlnText(4, 220, height, list[i].lvcai_yanse);
        printUtil.printlnText(4, 420, height, list[i].lashou_xinghao);

        height = height + 40
        printUtil.printlnText(4, 35, height, list[i].boli_shenjiagong);
        printUtil.printlnText(4, 220, height, list[i].boli_yanse);

        height = height + 40
        printUtil.printlnText(4, 30, height, list[i].height);
        printUtil.printlnText(4, 160, height, '*');
        printUtil.printlnText(4, 290, height, list[i].width);
        printUtil.printlnText(4, 420, height, list[i].num);

        height = height + 40
        printUtil.printlnText(4, 30, height, list[i].fujian_select1);
        printUtil.printlnText(4, 160, height, list[i].fujian_select2);
        printUtil.printlnText(4, 290, height, list[i].fujian_select3);
        printUtil.printlnText(4, 420, height, list[i].fujian_select4);

        height = height + 40
        printUtil.printlnText(4, 30, height, list[i].pinpai_select1);
        printUtil.printlnText(4, 160, height, list[i].pinpai_select2);
        printUtil.printlnText(4, 290, height, list[i].pinpai_select3);
        printUtil.printlnText(4, 420, height, list[i].pinpai_select4);

        height = height + 40
        printUtil.printlnText(4, 30, height, list[i].fujian_shuliang1);
        printUtil.printlnText(4, 160, height, list[i].fujian_shuliang2);
        printUtil.printlnText(4, 290, height, list[i].fujian_shuliang3);
        printUtil.printlnText(4, 420, height, list[i].fujian_shuliang4);

        height = height + 40
        printUtil.printlnText(5, 0, height, '铰链孔方向');
        printUtil.printlnText(5, 150, height, '左开门');
        printUtil.printlnText(5, 270, height, '');
        printUtil.printlnText(5, 390, height, '右开门');
        printUtil.printlnText(5, 510, height, '');

        height = height + 40
        printUtil.printlnText(5, 0, height, '开门方向数量');
        printUtil.printlnText(5, 200, height, list[i].jiaoliankong_fangxiang_left);
        printUtil.printlnText(5, 270, height, '');
        printUtil.printlnText(5, 390, height, list[i].jiaoliankong_fangxiang_right);
        printUtil.printlnText(5, 510, height, '');

        height = height + 40
        printUtil.printlnText(5, 0, height, '有拉手数量(个)');
        printUtil.printlnText(5, 200, height, list[i].lashou_shuliang_right);
        printUtil.printlnText(5, 270, height, '');
        printUtil.printlnText(5, 390, height, list[i].lashou_shuliang_left);
        printUtil.printlnText(5, 510, height, '');

        height = height + 40
        printUtil.printlnText(5, 0, height, '拉手位方向');
        printUtil.printlnText(5, 150, height, '从下向上');
        printUtil.printlnText(5, 270, height, '从右向左');
        printUtil.printlnText(5, 390, height, '从下向上');
        printUtil.printlnText(5, 510, height, '从左向右');

        height = height + 40
        printUtil.printlnText(5, 0, height, '拉手位');
        printUtil.printlnText(5, 150, height, list[i].lashouwei_select_left);
        printUtil.printlnText(5, 270, height, list[i].lashouwei_insert_left);
        printUtil.printlnText(5, 390, height, list[i].lashouwei_select_right);
        printUtil.printlnText(5, 510, height, list[i].lashouwei_insert_right);

        height = height + 40
        printUtil.printlnText(5, 0, height, '装锁数量');
        printUtil.printlnText(5, 150, height, list[i].zhuangsuoshuliang_insert_left1);
        printUtil.printlnText(5, 270, height, '');
        printUtil.printlnText(5, 390, height, list[i].zhuangsuoshuliang_insert_right1);
        printUtil.printlnText(5, 510, height, '');

        height = height + 40
        printUtil.printlnText(5, 0, height, '锁孔位方向');
        printUtil.printlnText(5, 150, height, '从下向上');
        printUtil.printlnText(5, 270, height, '从右向左');
        printUtil.printlnText(5, 390, height, '从下向上');
        printUtil.printlnText(5, 510, height, '从左向右');

        height = height + 40
        printUtil.printlnText(5, 0, height, '锁孔位');
        printUtil.printlnText(5, 150, height, list[i].zhuangsuofangwei_insert_left1);
        printUtil.printlnText(5, 270, height, list[i].zhuangsuofangwei_insert_left2);
        printUtil.printlnText(5, 390, height, list[i].zhuangsuofangwei_insert_right1);
        printUtil.printlnText(5, 510, height, list[i].zhuangsuofangwei_insert_right2);

        height = height + 40
        printUtil.printlnText(5, 0, height, '开铰链孔');
        printUtil.printlnText(5, 150, height, list[i].kaijiaolian);
        printUtil.printlnText(5, 270, height, '');
        printUtil.printlnText(5, 390, height, '');
        printUtil.printlnText(5, 510, height, '');

        height = height + 40
        printUtil.printlnText(5, 0, height, '铰链孔位1');
        printUtil.printlnText(5, 150, height, list[i].jiaolian1_select_left);
        printUtil.printlnText(5, 270, height, list[i].jiaolian1_insert_left);
        printUtil.printlnText(5, 390, height, list[i].jiaolian1_select_right);
        printUtil.printlnText(5, 510, height, list[i].jiaolian1_insert_right);

        height = height + 40
        printUtil.printlnText(5, 0, height, '铰链孔位2');
        printUtil.printlnText(5, 150, height, list[i].jiaolian2_select_left);
        printUtil.printlnText(5, 270, height, list[i].jiaolian2_insert_left);
        printUtil.printlnText(5, 390, height, list[i].jiaolian2_select_right);
        printUtil.printlnText(5, 510, height, list[i].jiaolian2_insert_right);

        height = height + 40
        printUtil.printlnText(5, 0, height, '铰链孔位3');
        printUtil.printlnText(5, 150, height, list[i].jiaolian3_select_left);
        printUtil.printlnText(5, 270, height, list[i].jiaolian3_insert_left);
        printUtil.printlnText(5, 390, height, list[i].jiaolian3_select_right);
        printUtil.printlnText(5, 510, height, list[i].jiaolian3_insert_right);

        height = height + 40
        printUtil.printlnText(5, 0, height, '铰链孔位4');
        printUtil.printlnText(5, 150, height, list[i].jiaolian4_select_left);
        printUtil.printlnText(5, 270, height, list[i].jiaolian4_insert_left);
        printUtil.printlnText(5, 390, height, list[i].jiaolian4_select_right);
        printUtil.printlnText(5, 510, height, list[i].jiaolian4_insert_right);

        height = height + 40
        printUtil.printlnText(5, 0, height, '铰链孔位5');
        printUtil.printlnText(5, 150, height, list[i].jiaolian5_select_left);
        printUtil.printlnText(5, 270, height, list[i].jiaolian5_insert_left);
        printUtil.printlnText(5, 390, height, list[i].jiaolian5_select_right);
        printUtil.printlnText(5, 510, height, list[i].jiaolian5_insert_right);

        height = height + 40
        printUtil.printlnText(5, 0, height, '铰链孔位6');
        printUtil.printlnText(5, 150, height, list[i].jiaolian6_select_left);
        printUtil.printlnText(5, 270, height, list[i].jiaolian6_insert_left);
        printUtil.printlnText(5, 390, height, list[i].jiaolian6_select_right);
        printUtil.printlnText(5, 510, height, list[i].jiaolian6_insert_right);

        height = height + 100
      }
    }

    printUtil = new PrintUtil(height, 1);

    var height = 20
    for(var i=0; i<list.length; i++){
      if(list[i].lvxingcai != ""){
        printUtil.setFontWidthAndHeight(1, 1);
        printUtil.printlnText(4, 200, height, '天龙五金铝框' );

        height = height + 40
        printUtil.printlnText(4, 35, height, '客户：' + list[i].customer_name);
        printUtil.printlnText(4, 220, height, '日期：' + list[i].insert_date);
        printUtil.printlnText(4, 420, height, list[i].customer_number);

        height = height + 40
        printUtil.printlnText(4, 35, height, '安装地址：' + list[i].install_address);

        height = height + 60
        printUtil.printlnText(4, 35, height, list[i].order_number);
        printUtil.printlnText(4, 420, height, (i*1+1*1));

        height = height + 40
        printUtil.printlnText(4, 35, height, list[i].lvxingcai);
        printUtil.printlnText(4, 220, height, list[i].lvcai_yanse);
        printUtil.printlnText(4, 420, height, list[i].lashou_xinghao);

        height = height + 40
        printUtil.printlnText(4, 35, height, list[i].boli_shenjiagong);
        printUtil.printlnText(4, 220, height, list[i].boli_yanse);

        height = height + 40
        printUtil.printlnText(4, 30, height, list[i].height);
        printUtil.printlnText(4, 160, height, '*');
        printUtil.printlnText(4, 290, height, list[i].width);
        printUtil.printlnText(4, 420, height, list[i].num);

        height = height + 40
        printUtil.printlnText(4, 30, height, list[i].fujian_select1);
        printUtil.printlnText(4, 160, height, list[i].fujian_select2);
        printUtil.printlnText(4, 290, height, list[i].fujian_select3);
        printUtil.printlnText(4, 420, height, list[i].fujian_select4);

        height = height + 40
        printUtil.printlnText(4, 30, height, list[i].pinpai_select1);
        printUtil.printlnText(4, 160, height, list[i].pinpai_select2);
        printUtil.printlnText(4, 290, height, list[i].pinpai_select3);
        printUtil.printlnText(4, 420, height, list[i].pinpai_select4);

        height = height + 40
        printUtil.printlnText(4, 30, height, list[i].fujian_shuliang1);
        printUtil.printlnText(4, 160, height, list[i].fujian_shuliang2);
        printUtil.printlnText(4, 290, height, list[i].fujian_shuliang3);
        printUtil.printlnText(4, 420, height, list[i].fujian_shuliang4);

        height = height + 40
        printUtil.printlnText(5, 0, height, '铰链孔方向');
        printUtil.printlnText(5, 150, height, '左开门');
        printUtil.printlnText(5, 270, height, '');
        printUtil.printlnText(5, 390, height, '右开门');
        printUtil.printlnText(5, 510, height, '');

        height = height + 40
        printUtil.printlnText(5, 0, height, '开门方向数量');
        printUtil.printlnText(5, 200, height, list[i].jiaoliankong_fangxiang_left);
        printUtil.printlnText(5, 270, height, '');
        printUtil.printlnText(5, 390, height, list[i].jiaoliankong_fangxiang_right);
        printUtil.printlnText(5, 510, height, '');

        height = height + 40
        printUtil.printlnText(5, 0, height, '有拉手数量(个)');
        printUtil.printlnText(5, 200, height, list[i].lashou_shuliang_right);
        printUtil.printlnText(5, 270, height, '');
        printUtil.printlnText(5, 390, height, list[i].lashou_shuliang_left);
        printUtil.printlnText(5, 510, height, '');

        height = height + 40
        printUtil.printlnText(5, 0, height, '拉手位方向');
        printUtil.printlnText(5, 150, height, '从下向上');
        printUtil.printlnText(5, 270, height, '从右向左');
        printUtil.printlnText(5, 390, height, '从下向上');
        printUtil.printlnText(5, 510, height, '从左向右');

        height = height + 40
        printUtil.printlnText(5, 0, height, '拉手位');
        printUtil.printlnText(5, 150, height, list[i].lashouwei_select_left);
        printUtil.printlnText(5, 270, height, list[i].lashouwei_insert_left);
        printUtil.printlnText(5, 390, height, list[i].lashouwei_select_right);
        printUtil.printlnText(5, 510, height, list[i].lashouwei_insert_right);

        height = height + 40
        printUtil.printlnText(5, 0, height, '装锁数量');
        printUtil.printlnText(5, 150, height, list[i].zhuangsuoshuliang_insert_left1);
        printUtil.printlnText(5, 270, height, '');
        printUtil.printlnText(5, 390, height, list[i].zhuangsuoshuliang_insert_right1);
        printUtil.printlnText(5, 510, height, '');

        height = height + 40
        printUtil.printlnText(5, 0, height, '锁孔位方向');
        printUtil.printlnText(5, 150, height, '从下向上');
        printUtil.printlnText(5, 270, height, '从右向左');
        printUtil.printlnText(5, 390, height, '从下向上');
        printUtil.printlnText(5, 510, height, '从左向右');

        height = height + 40
        printUtil.printlnText(5, 0, height, '锁孔位');
        printUtil.printlnText(5, 150, height, list[i].zhuangsuofangwei_insert_left1);
        printUtil.printlnText(5, 270, height, list[i].zhuangsuofangwei_insert_left2);
        printUtil.printlnText(5, 390, height, list[i].zhuangsuofangwei_insert_right1);
        printUtil.printlnText(5, 510, height, list[i].zhuangsuofangwei_insert_right2);

        height = height + 40
        printUtil.printlnText(5, 0, height, '开铰链孔');
        printUtil.printlnText(5, 150, height, list[i].kaijiaolian);
        printUtil.printlnText(5, 270, height, '');
        printUtil.printlnText(5, 390, height, '');
        printUtil.printlnText(5, 510, height, '');

        height = height + 40
        printUtil.printlnText(5, 0, height, '铰链孔位1');
        printUtil.printlnText(5, 150, height, list[i].jiaolian1_select_left);
        printUtil.printlnText(5, 270, height, list[i].jiaolian1_insert_left);
        printUtil.printlnText(5, 390, height, list[i].jiaolian1_select_right);
        printUtil.printlnText(5, 510, height, list[i].jiaolian1_insert_right);

        height = height + 40
        printUtil.printlnText(5, 0, height, '铰链孔位2');
        printUtil.printlnText(5, 150, height, list[i].jiaolian2_select_left);
        printUtil.printlnText(5, 270, height, list[i].jiaolian2_insert_left);
        printUtil.printlnText(5, 390, height, list[i].jiaolian2_select_right);
        printUtil.printlnText(5, 510, height, list[i].jiaolian2_insert_right);

        height = height + 40
        printUtil.printlnText(5, 0, height, '铰链孔位3');
        printUtil.printlnText(5, 150, height, list[i].jiaolian3_select_left);
        printUtil.printlnText(5, 270, height, list[i].jiaolian3_insert_left);
        printUtil.printlnText(5, 390, height, list[i].jiaolian3_select_right);
        printUtil.printlnText(5, 510, height, list[i].jiaolian3_insert_right);

        height = height + 40
        printUtil.printlnText(5, 0, height, '铰链孔位4');
        printUtil.printlnText(5, 150, height, list[i].jiaolian4_select_left);
        printUtil.printlnText(5, 270, height, list[i].jiaolian4_insert_left);
        printUtil.printlnText(5, 390, height, list[i].jiaolian4_select_right);
        printUtil.printlnText(5, 510, height, list[i].jiaolian4_insert_right);

        height = height + 40
        printUtil.printlnText(5, 0, height, '铰链孔位5');
        printUtil.printlnText(5, 150, height, list[i].jiaolian5_select_left);
        printUtil.printlnText(5, 270, height, list[i].jiaolian5_insert_left);
        printUtil.printlnText(5, 390, height, list[i].jiaolian5_select_right);
        printUtil.printlnText(5, 510, height, list[i].jiaolian5_insert_right);

        height = height + 40
        printUtil.printlnText(5, 0, height, '铰链孔位6');
        printUtil.printlnText(5, 150, height, list[i].jiaolian6_select_left);
        printUtil.printlnText(5, 270, height, list[i].jiaolian6_insert_left);
        printUtil.printlnText(5, 390, height, list[i].jiaolian6_select_right);
        printUtil.printlnText(5, 510, height, list[i].jiaolian6_insert_right);

        height = height + 100
      }
    }

    let buffer = printUtil.getData();
    const maxChunk = 20;
    const delay = 20;
    for (let c = 0; c < buffer.length; c++) {
      for (let i = 0, j = 0, length = buffer[c].byteLength; i < length; i += maxChunk, j++) {
        let subPackage = buffer[c].slice(i, i + maxChunk <= length ? (i + maxChunk) : length);
        console.log(subPackage)
        setTimeout(this._writeBLECharacteristicValue, delay, subPackage);
      }
    }
    wx.hideLoading();
  },

  _writeBLECharacteristicValue(buffer) {
    var _this = this
    var option = _this.data.option
    wx.writeBLECharacteristicValue({
      deviceId: option.deviceId,
      serviceId: option.serviceId,
      characteristicId: option.characteristicId,
      value: buffer,
      success(res) {
        console.log('writeBLECharacteristicValue success', res)
      },
      fail(res) {
        console.log('writeBLECharacteristicValue fail', res)
      },
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;
    var list = JSON.parse(options.order1)
    var dayin_peizhi = JSON.parse(options.dayin_peizhi)
    console.log(list)
    _this.setData({
      list,
      dayin_peizhi
    })
    var height = 600
    // height = height + list.length * 1
    // height = height + huankuang_list.length * 1
    // for (var i = 0; i < zhongliang_list.length; i++) {
    //   height = height + Math.ceil((zhongliang_list[i].length - 1) / 5) + 1
    // }
    _this.getUserInfo(height)
    _this.setCanvas()

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var list = []
    var numList = []
    var j = 0
    for (var i = 20; i < 200; i += 10) {
      list[j] = i;
      j++
    }
    for (var i = 1; i < 10; i++) {
      numList[i - 1] = i
    }
    this.setData({
      buffSize: list,
      oneTimeData: 100,
      printNum: numList,
      printerNum: numList[0]
    })
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
    wx.closeBluetoothAdapter({
      success: res => {
        console.log("关闭蓝牙模块")
      }
    })
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    wx.stopBluetoothDevicesDiscovery({
      success: res => {
        console.log("停止搜索=>", res)
      }
    })
    wx.closeBluetoothAdapter({
      success: res => {
        console.log("关闭蓝牙模块")
      }
    })
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

  }
})