// package_huaqun/page/ddxiadan/ddxiadan.js

Page({

  /**
   * 页面的初始数据
   */
  tableShow: true,
  delWindow1: false,
  tjShow: false,
  rqxzShow1: false,
  xgShow: false,
  cxShow: false,
  xlShow: false,
  rqxzShow2: false,
  data: {
    minDate: new Date(2000, 1, 1).getTime(),
    maxDate: new Date(2099, 12, 31).getTime(),
    currentDate: new Date().getTime(),
    onload_panduan:'',
    header_list:{
      customer_name:'',
      insert_date:'',
      order_number:'',
      pinyin:'',
      shipping_address:'',
      phone:'',
      shipping_type:'',
      install_address:'',
      customer_name_renyuan:'',
      customer_number:'',
    },
    body_list:[
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
    ],
    body_list_refresh:[
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
      {
        height:'',
        width:'',
        num:'',
        lvxingcai:'',
        lvcai_yanse:'',
        boli_shenjiagong:'',
        boli_yanse:'',
        lashou_xinghao:'',

        jiaoliankong_fangxiang_left:'',
        jiaoliankong_fangxiang_right:'',

        lashou_shuliang_right:'',
        lashou_shuliang_left:'',

        lashouwei_select_left:'',
        lashouwei_insert_left:'',
        lashouwei_select_right:'',
        lashouwei_insert_right:'',

        zhuangsuoshuliang_insert_left1:'',
        zhuangsuoshuliang_insert_right1:'',

        zhuangsuofangwei_insert_left1:'',
        zhuangsuofangwei_insert_left2:'',
        zhuangsuofangwei_insert_right1:'',
        zhuangsuofangwei_insert_right2:'',

        kaijiaolian:'',

        jiaolian1_select_left:'',
        jiaolian1_insert_left:'',
        jiaolian1_select_right:'',
        jiaolian1_insert_right:'',

        jiaolian2_select_left:'',
        jiaolian2_insert_left:'',
        jiaolian2_select_right:'',
        jiaolian2_insert_right:'',

        jiaolian3_select_left:'',
        jiaolian3_insert_left:'',
        jiaolian3_select_right:'',
        jiaolian3_insert_right:'',

        jiaolian4_select_left:'',
        jiaolian4_insert_left:'',
        jiaolian4_select_right:'',
        jiaolian4_insert_right:'',

        jiaolian5_select_left:'',
        jiaolian5_insert_left:'',
        jiaolian5_select_right:'',
        jiaolian5_insert_right:'',

        jiaolian6_select_left:'',
        jiaolian6_insert_left:'',
        jiaolian6_select_right:'',
        jiaolian6_insert_right:'',

        qita:'',

        sum_shuliang1:'',
        danjia1:'',
        sum_jine1:'',

        fujian_select1:'',
        fujian_select2:'',
        fujian_select3:'',
        fujian_select4:'',

        pinpai_select1:'',
        pinpai_select2:'',
        pinpai_select3:'',
        pinpai_select4:'',

        fujian_shuliang1:'',
        fujian_shuliang2:'',
        fujian_shuliang3:'',
        fujian_shuliang4:'',

        sum_shuliang2:'',
        danjia2:'',
        sum_jine2:'',
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var _this = this
    console.log(_this.data.minDate)
    console.log(_this.data.maxDate)
    console.log(_this.data.currentDate)
    var p_order_number = options.order_number
    if(p_order_number != undefined){
      p_order_number = JSON.parse(p_order_number)
      _this.setData({
        p_order_number
      })
    }
    if(_this.data.onload_panduan != 1){
      var userInfo = JSON.parse(options.userInfo)
      _this.setData({
        userInfo:userInfo,
        onload_panduan:1
      })
    }

    if(p_order_number == undefined){
      var insert_date = getNowDate()
      var header_list = _this.data.header_list
      header_list.insert_date = insert_date
      header_list.customer_name_renyuan =_this.data.userInfo.name
      if(_this.data.userInfo.power == '客户'){
        header_list.customer_name = _this.data.userInfo.company
        header_list.pinyin = _this.data.userInfo.pinyin
      }
      _this.setData({
        header_list,
      })
  
      var bianhao_left = getBianHao()
      console.log(bianhao_left)
      var sql = "select order_number from lvkuang_xiadan where order_number like '" + bianhao_left + "%'"
      wx.cloud.callFunction({
        name: 'sqlserver_huaqun',
        data: {
          query: sql
        },
        success: res => {
          var bianhao_list = res.result.recordset
          var new_bianhao = "001" 
          for(var i=0; i<bianhao_list.length; i++){
            if(bianhao_list[i].order_number != '' && bianhao_list[i].order_number != null && bianhao_list[i].order_number != undefined){
              var this_bianhao = bianhao_list[i].order_number.slice(10)
              console.log(this_bianhao)
              if(this_bianhao >= new_bianhao){
                new_bianhao = (this_bianhao * 1 + 1).toString()
                if(new_bianhao.length == 1){
                  new_bianhao = "00" + new_bianhao.toString()
                }else if(new_bianhao.length == 2){
                  new_bianhao = "0" + new_bianhao.toString()
                }
                console.log(new_bianhao)
              }
            }
          }
          new_bianhao = bianhao_left.toString() + new_bianhao.toString()
          var header_list = _this.data.header_list
          header_list.order_number = new_bianhao
          _this.setData({
            header_list
          })
        },
        err: res => {
          wx.showToast({
            title: '读取下拉列表错误3550！' + res,
            icon: 'none'
          })
          console.log("错误!")
        },
        fail: res => {
          wx.showToast({
            title: '请求失败3557！' + res,
            icon: 'none'
          })
          console.log("请求失败！")
        }
      })
    }else{
      var sql = "select * from lvkuang_xiadan where order_number ='" + p_order_number + "'"
      wx.cloud.callFunction({
        name: 'sqlserver_huaqun',
        data: {
          query: sql
        },
        success: res => {
          var order_list = res.result.recordset
          var header_list = _this.data.header_list
          header_list.customer_name = order_list[0].customer_name
          header_list.insert_date = order_list[0].insert_date
          header_list.order_number = order_list[0].order_number
          header_list.pinyin = order_list[0].pinyin
          header_list.shipping_address = order_list[0].shipping_address
          header_list.phone = order_list[0].phone
          header_list.shipping_type = order_list[0].shipping_type
          header_list.install_address = order_list[0].install_address
          header_list.customer_name_renyuan = order_list[0].customer_name_renyuan
          header_list.customer_number = order_list[0].customer_number
          var body_list = order_list
          _this.setData({
            header_list,
            body_list
          })
        },
        err: res => {
          wx.showToast({
            title: '读取单据错误3591！' + res,
            icon: 'none'
          })
          console.log("错误!")
        },
        fail: res => {
          wx.showToast({
            title: '请求失败3598！' + res,
            icon: 'none'
          })
          console.log("请求失败！")
        }
      })
    }



    var sql = "select * from userInfo where power = '客户'"
    wx.cloud.callFunction({
      name: 'sqlserver_huaqun',
      data: {
        query: sql
      },
      success: res => {
        var user_list = res.result.recordset
        var customer_name = []
        for(var i=0; i<user_list.length; i++){
          if(user_list[i].name != '' && user_list[i].name != null && user_list[i].name != undefined){
            customer_name.push({
              name:user_list[i].company,
              pinyin:user_list[i].pinyin
            })
          }
        }
        _this.setData({
          customer_name
        })
      },
      err: res => {
        wx.showToast({
          title: '读取下拉列表错误3631！' + res,
          icon: 'none'
        })
        console.log("错误!")
      },
      fail: res => {
        wx.showToast({
          title: '请求失败3638！' + res,
          icon: 'none'
        })
        console.log("请求失败！")
      }
    })
    
    var sql = "select * from dropdowntable"
    wx.cloud.callFunction({
      name: 'sqlserver_huaqun',
      data: {
        query: sql
      },
      success: res => {
        var list = res.result.recordset
        var shipping_type = [{name:''}]
        var lvxingcai = [{name:''}]
        var lvcai_yanse = [{name:''}]
        var boli_shenjiagong = [{name:''}]
        var boli_yanse = [{name:''}]
        var lashou_xinghao = [{name:''}]
        var lashouwei_select_left = [{name:''}]
        var lashouwei_select_right = [{name:''}]
        var kaijiaolian = [{name:''}]
        var jiaolian1_select_left = [{name:''}]
        var jiaolian1_select_right = [{name:''}]
        var jiaolian2_select_left = [{name:''}]
        var jiaolian2_select_right = [{name:''}]
        var jiaolian3_select_left = [{name:''}]
        var jiaolian3_select_right = [{name:''}]
        var jiaolian4_select_left = [{name:''}]
        var jiaolian4_select_right = [{name:''}]
        var jiaolian5_select_left = [{name:''}]
        var jiaolian5_select_right = [{name:''}]
        var jiaolian6_select_left = [{name:''}]
        var jiaolian6_select_right = [{name:''}]
        var zhuangsuofangxiang_select_left = [{name:''}]
        var zhuangsuofangxiang_select_right = [{name:''}]
        var zhuangsuofangxiang_select_left = [{name:''}]
        var zhuangsuofangxiang_select_right = [{name:''}]
        var fujian_select1 =[{name:''}]
        var fujian_select2 =[{name:''}]
        var fujian_select3 =[{name:''}]
        var fujian_select4 =[{name:''}]
        var pinpai_select1 = [{name:''}]
        var pinpai_select2 = [{name:''}]
        var pinpai_select3 = [{name:''}]
        var pinpai_select4 = [{name:''}]
        for(var i=0; i<list.length; i++){
          if(list[i].jlpp != '' && list[i].jlpp != null && list[i].jlpp != undefined){
            pinpai_select1.push({
              name:list[i].jlpp,
            })
            pinpai_select2.push({
              name:list[i].jlpp,
            })
            pinpai_select3.push({
              name:list[i].jlpp,
            })
            pinpai_select4.push({
              name:list[i].jlpp,
            })
          }

          if(list[i].fjpz != '' && list[i].fjpz != null && list[i].fjpz != undefined){
            fujian_select1.push({
              name:list[i].fjpz,
            })
            fujian_select2.push({
              name:list[i].fjpz,
            })
            fujian_select3.push({
              name:list[i].fjpz,
            })
            fujian_select4.push({
              name:list[i].fjpz,
            })
          }

          if(list[i].shfs != '' && list[i].shfs != null && list[i].shfs != undefined){
            shipping_type.push({
              name:list[i].shfs,
            })
          }
          if(list[i].lxc_lk != '' && list[i].lxc_lk != null && list[i].lxc_lk != undefined){
            lvxingcai.push({
              name:list[i].lxc_lk,
            })
          }
          if(list[i].lcys_lk != '' && list[i].lcys_lk != null && list[i].lcys_lk != undefined){
            lvcai_yanse.push({
              name:list[i].lcys_lk,
            })
          }
          if(list[i].blsjg != '' && list[i].blsjg != null && list[i].blsjg != undefined){
            boli_shenjiagong.push({
              name:list[i].blsjg,
            })
          }
          if(list[i].blys != '' && list[i].blys != null && list[i].blys != undefined){
            boli_yanse.push({
              name:list[i].blys,
            })
          }
          if(list[i].lsxh != '' && list[i].lsxh != null && list[i].lsxh != undefined){
            lashou_xinghao.push({
              name:list[i].lsxh,
            })
          }
          if(list[i].lsw != '' && list[i].lsw != null && list[i].lsw != undefined){
            lashouwei_select_left.push({
              name:list[i].lsw,
            })
            lashouwei_select_right.push({
              name:list[i].lsw,
            })
          }
          if(list[i].kjlk != '' && list[i].kjlk != null && list[i].kjlk != undefined){
            kaijiaolian.push({
              name:list[i].kjlk,
            })
          }
          if(list[i].jlkw != '' && list[i].jlkw != null && list[i].jlkw != undefined){
            jiaolian1_select_left.push({
              name:list[i].jlkw,
            })
            jiaolian1_select_right.push({
              name:list[i].jlkw,
            })
            jiaolian2_select_left.push({
              name:list[i].jlkw,
            })
            jiaolian2_select_right.push({
              name:list[i].jlkw,
            })
            jiaolian3_select_left.push({
              name:list[i].jlkw,
            })
            jiaolian3_select_right.push({
              name:list[i].jlkw,
            })
            jiaolian4_select_left.push({
              name:list[i].jlkw,
            })
            jiaolian4_select_right.push({
              name:list[i].jlkw,
            })
            jiaolian5_select_left.push({
              name:list[i].jlkw,
            })
            jiaolian5_select_right.push({
              name:list[i].jlkw,
            })
            jiaolian6_select_left.push({
              name:list[i].jlkw,
            })
            jiaolian6_select_right.push({
              name:list[i].jlkw,
            })
            zhuangsuofangxiang_select_left.push({
              name:list[i].jlkw,
            })
            zhuangsuofangxiang_select_right.push({
              name:list[i].jlkw,
            })
          }
        }
        _this.setData({
          shipping_type,
          lvxingcai,
          lvcai_yanse,
          boli_shenjiagong,
          boli_yanse,
          lashou_xinghao,
          lashouwei_select_left,
          lashouwei_select_right,
          kaijiaolian,
          jiaolian1_select_left,
          jiaolian1_select_right,
          jiaolian2_select_left,
          jiaolian2_select_right,
          jiaolian3_select_left,
          jiaolian3_select_right,
          jiaolian4_select_left,
          jiaolian4_select_right,
          jiaolian5_select_left,
          jiaolian5_select_right,
          jiaolian6_select_left,
          jiaolian6_select_right,
          zhuangsuofangxiang_select_left,
          zhuangsuofangxiang_select_right,
          fujian_select1,
          fujian_select2,
          fujian_select3,
          fujian_select4,
          pinpai_select1,
          pinpai_select2,
          pinpai_select3,
          pinpai_select4,
        })
      },
      err: res => {
        wx.showToast({
          title: '读取下拉列表错误3841！' + res,
          icon: 'none'
        })
        console.log("错误!")
      },
      fail: res => {
        wx.showToast({
          title: '请求失败3848！' + res,
          icon: 'none'
        })
        console.log("请求失败！")
      }
    })
  },

  qxShow22: function () {
    var _this = this
    _this.setData({
      rqxzShow2: false,
    })
  },

  selRIQI2: function () {
    var _this = this
    _this.setData({
      rqxzShow2: true,
    })
  },

  choiceDate: function (e) {
    //e.preventDefault(); 
    var _this = this
    var header_list = _this.data.header_list
    header_list[e.target.dataset.column_name] = e.detail.value 
    _this.setData({ 
      header_list
    })
    console.log(e.detail.value)
  },

  sel_xiala: function (e) {
    var _this = this
    console.log('列名：', e.currentTarget.dataset.column)
    console.log('index：', e.currentTarget.dataset.index)
    var index = e.currentTarget.dataset.index
    var column = e.currentTarget.dataset.column
    var list = _this.data[column]

    if((column == 'jiaolian1_select_left' || column == 'jiaolian2_select_left' || column == 'jiaolian3_select_left' || column == 'jiaolian4_select_left' || column == 'jiaolian5_select_left' || column == 'jiaolian6_select_left') && _this.data.body_list[index].jiaoliankong_fangxiang_left == ''){
      wx.showToast({
        title: '未填写左开铰链孔方向及数量！',
        icon: 'none'
      })
      return;
    }

    if((column == 'jiaolian1_select_right' || column == 'jiaolian2_select_right' || column == 'jiaolian3_select_right' || column == 'jiaolian4_select_right' || column == 'jiaolian5_select_right' || column == 'jiaolian6_select_right') && _this.data.body_list[index].jiaoliankong_fangxiang_right == ''){
      wx.showToast({
        title: '未填写右开铰链孔方向及数量！',
        icon: 'none'
      })
      return;
    }

    if(column == 'jiaolian1_select_left' || column == 'jiaolian2_select_left'){
      if(_this.data.body_list[index].kaijiaolian == ''){
        wx.showToast({
          title: '开铰链孔不符合要求！',
          icon: 'none'
        })
        return;
      }
    }
    if(column == 'jiaolian1_select_right' || column == 'jiaolian2_select_right'){
      if(_this.data.body_list[index].kaijiaolian == ''){
        wx.showToast({
          title: '开铰链孔不符合要求！',
          icon: 'none'
        })
        return;
      }
    }
    if(column == 'jiaolian3_select_left'){
      if(_this.data.body_list[index].kaijiaolian == '' || _this.data.body_list[index].kaijiaolian == '开二孔'){
        wx.showToast({
          title: '开铰链孔不符合要求！',
          icon: 'none'
        })
        return;
      }
    }
    if(column == 'jiaolian3_select_right'){
      if(_this.data.body_list[index].kaijiaolian == '' || _this.data.body_list[index].kaijiaolian == '开二孔'){
        wx.showToast({
          title: '开铰链孔不符合要求！',
          icon: 'none'
        })
        return;
      }
    }
    if(column == 'jiaolian4_select_left'){
      if(_this.data.body_list[index].kaijiaolian == '' || _this.data.body_list[index].kaijiaolian == '开二孔' || _this.data.body_list[index].kaijiaolian == '开三孔'){
        wx.showToast({
          title: '开铰链孔不符合要求！',
          icon: 'none'
        })
        return;
      }
    }
    if(column == 'jiaolian4_select_right'){
      if(_this.data.body_list[index].kaijiaolian == '' || _this.data.body_list[index].kaijiaolian == '开二孔' || _this.data.body_list[index].kaijiaolian == '开三孔'){
        wx.showToast({
          title: '开铰链孔不符合要求！',
          icon: 'none'
        })
        return;
      }
    }
    if(column == 'jiaolian5_select_left'){
      if(_this.data.body_list[index].kaijiaolian == '' || _this.data.body_list[index].kaijiaolian == '开二孔' || _this.data.body_list[index].kaijiaolian == '开三孔' || _this.data.body_list[index].kaijiaolian == '开四孔'){
        wx.showToast({
          title: '开铰链孔不符合要求！',
          icon: 'none'
        })
        return;
      }
    }
    if(column == 'jiaolian5_select_right'){
      if(_this.data.body_list[index].kaijiaolian == '' || _this.data.body_list[index].kaijiaolian == '开二孔' || _this.data.body_list[index].kaijiaolian == '开三孔' || _this.data.body_list[index].kaijiaolian == '开四孔'){
        wx.showToast({
          title: '开铰链孔不符合要求！',
          icon: 'none'
        })
        return;
      }
    }
    if(column == 'jiaolian6_select_left'){
      if(_this.data.body_list[index].kaijiaolian == '' || _this.data.body_list[index].kaijiaolian == '开二孔' || _this.data.body_list[index].kaijiaolian == '开三孔' || _this.data.body_list[index].kaijiaolian == '开四孔' || _this.data.body_list[index].kaijiaolian == '开五孔'){
        wx.showToast({
          title: '开铰链孔不符合要求！',
          icon: 'none'
        })
        return;
      }
    }
    if(column == 'jiaolian6_select_right'){
      if(_this.data.body_list[index].kaijiaolian == '' || _this.data.body_list[index].kaijiaolian == '开二孔' || _this.data.body_list[index].kaijiaolian == '开三孔' || _this.data.body_list[index].kaijiaolian == '开四孔' || _this.data.body_list[index].kaijiaolian == '开五孔'){
        wx.showToast({
          title: '开铰链孔不符合要求！',
          icon: 'none'
        })
        return;
      }
    }

    _this.setData({
      list_xiala: list,
      click_index:index,
      click_column:column,
    })
    console.log(list)
    _this.setData({
      xlShow: true
    })
  },

  header_xiala: function (e) {
    var _this = this
    console.log('列名：', e.currentTarget.dataset.column)
    var column = e.currentTarget.dataset.column
    var list = _this.data[column]
    if(_this.data.userInfo.power == '客户' && column == 'customer_name'){
      return;
    }
    _this.setData({
      list_xiala: list,
      click_column:column,
    })
    console.log(list)
    _this.setData({
      xlShow2: true
    })
  },

  select1: function (e) {
    var _this = this
    if (e.type == "select") {
      var body_list = _this.data.body_list
      var new_val = e.detail.name
      var click_index = _this.data.click_index
      var click_column = _this.data.click_column
      body_list[click_index][click_column] = new_val
      if(click_column == 'jiaolian1_select_left'){
        body_list[click_index].jiaolian1_select_right = new_val
        if(new_val == '距中'){
          if(body_list[click_index].height != ""){
            body_list[click_index].jiaolian1_insert_left = body_list[click_index].height / 2
            body_list[click_index].jiaolian1_insert_right = body_list[click_index].height / 2
          }
        }
      }
      if(click_column == 'jiaolian2_select_left'){
        body_list[click_index].jiaolian2_select_right = new_val
        if(new_val == '距中'){
          if(body_list[click_index].height != ""){
            body_list[click_index].jiaolian2_insert_left = body_list[click_index].height / 2
            body_list[click_index].jiaolian2_insert_right = body_list[click_index].height / 2
          }
        }
      }
      if(click_column == 'jiaolian3_select_left'){
        body_list[click_index].jiaolian3_select_right = new_val
        if(new_val == '距中'){
          if(body_list[click_index].height != ""){
            body_list[click_index].jiaolian3_insert_left = body_list[click_index].height / 2
            body_list[click_index].jiaolian3_insert_right = body_list[click_index].height / 2
          }
        }
      }
      if(click_column == 'jiaolian4_select_left'){
        body_list[click_index].jiaolian4_select_right = new_val
        if(new_val == '距中'){
          if(body_list[click_index].height != ""){
            body_list[click_index].jiaolian4_insert_left = body_list[click_index].height / 2
            body_list[click_index].jiaolian4_insert_right = body_list[click_index].height / 2
          }
        }
      }
      if(click_column == 'jiaolian5_select_left'){
        body_list[click_index].jiaolian5_select_right = new_val
        if(new_val == '距中'){
          if(body_list[click_index].height != ""){
            body_list[click_index].jiaolian5_insert_left = body_list[click_index].height / 2
            body_list[click_index].jiaolian5_insert_right = body_list[click_index].height / 2
          }
        }
      }
      if(click_column == 'jiaolian6_select_left'){
        body_list[click_index].jiaolian6_select_right = new_val
        if(new_val == '距中'){
          if(body_list[click_index].height != ""){
            body_list[click_index].jiaolian6_insert_left = body_list[click_index].height / 2
            body_list[click_index].jiaolian6_insert_right = body_list[click_index].height / 2
          }
        }
      }
      if(click_column == 'lashou_xinghao'){
        if(new_val == '无拉手' || new_val == '常规趟门' || new_val == '吊趟门' || new_val == '四角开螺丝孔'){
          body_list[click_index].lashou_shuliang_right = ""
          body_list[click_index].lashou_shuliang_left = ""
        }
      }
      _this.setData({
        xlShow: false,
        body_list
      })
    } else if (e.type == "close") {
      _this.setData({
        xlShow: false,
      })
    }
  },

  select2: function (e) {
    var _this = this
    if (e.type == "select") {
      var header_list = _this.data.header_list
      var new_val = e.detail.name
      var click_column = _this.data.click_column
      if(click_column == 'customer_name'){
        header_list.pinyin = e.detail.pinyin
      }
      header_list[click_column] = new_val
      _this.setData({
        xlShow2: false,
        header_list
      })
    } else if (e.type == "close") {
      _this.setData({
        xlShow2:false,
      })
    }
  },


  bindPickerChange: function(e) {
    var _this = this
    console.log('picker发送选择改变，携带值为：', e.detail.value)
    console.log('列名：', e.currentTarget.dataset.column)
    console.log('index：', e.currentTarget.dataset.index)
    var index = e.currentTarget.dataset.index
    var column = e.currentTarget.dataset.column
    var body_list = _this.data.body_list
    body_list[index][column] = _this.data[column][e.detail.value] 
    _this.setData({
      body_list 
    })
  },

  copy_01:function(){
    var _this = this
    var this_list = _this.data.body_list
    var panduan = false
    for(var i=this_list.length-2; i>=0; i--){
      if(this_list[i].height != "" && this_list[i + 1].height == ""){
        panduan = true
        break;
      }
    }
    if(panduan){
        var _this = this
        wx.showModal({
          title: '提示',
          content: '确认复制表单'+ (i * 1+1*1) +'到表单'+ (i*1+2*1) +'？',
          success (res) {
            if (res.confirm) {
              this_list[i+1].height=this_list[i].height
              this_list[i+1].width=this_list[i].width
              this_list[i+1].num=this_list[i].num
              this_list[i+1].lvxingcai=this_list[i].lvxingcai
              this_list[i+1].lvcai_yanse=this_list[i].lvcai_yanse
              this_list[i+1].boli_shenjiagong=this_list[i].boli_shenjiagong
              this_list[i+1].boli_yanse=this_list[i].boli_yanse
              this_list[i+1].lashou_xinghao=this_list[i].lashou_xinghao

              this_list[i+1].jiaoliankong_fangxiang_left=this_list[i].jiaoliankong_fangxiang_left
              this_list[i+1].jiaoliankong_fangxiang_right=this_list[i].jiaoliankong_fangxiang_right

              this_list[i+1].lashou_shuliang_right=this_list[i].lashou_shuliang_right
              this_list[i+1].lashou_shuliang_left=this_list[i].lashou_shuliang_left

              this_list[i+1].lashouwei_select_left=this_list[i].lashouwei_select_left
              this_list[i+1].lashouwei_insert_left=this_list[i].lashouwei_insert_left
              this_list[i+1].lashouwei_select_right=this_list[i].lashouwei_select_right
              this_list[i+1].lashouwei_insert_right=this_list[i].lashouwei_insert_right

              this_list[i+1].zhuangsuoshuliang_insert_left1=this_list[i].zhuangsuoshuliang_insert_left1
              this_list[i+1].zhuangsuoshuliang_insert_right1=this_list[i].zhuangsuoshuliang_insert_right1

              this_list[i+1].zhuangsuofangwei_insert_left1=this_list[i].zhuangsuofangwei_insert_left1
              this_list[i+1].zhuangsuofangwei_insert_left2=this_list[i].zhuangsuofangwei_insert_left2
              this_list[i+1].zhuangsuofangwei_insert_right1=this_list[i].zhuangsuofangwei_insert_right1
              this_list[i+1].zhuangsuofangwei_insert_right2=this_list[i].zhuangsuofangwei_insert_right2

              this_list[i+1].kaijiaolian=this_list[i].kaijiaolian

              this_list[i+1].jiaolian1_select_left=this_list[i].jiaolian1_select_left
              this_list[i+1].jiaolian1_insert_left=this_list[i].jiaolian1_insert_left
              this_list[i+1].jiaolian1_select_right=this_list[i].jiaolian1_select_right
              this_list[i+1].jiaolian1_insert_right=this_list[i].jiaolian1_insert_right

              this_list[i+1].jiaolian2_select_left=this_list[i].jiaolian2_select_left
              this_list[i+1].jiaolian2_insert_left=this_list[i].jiaolian2_insert_left
              this_list[i+1].jiaolian2_select_right=this_list[i].jiaolian2_select_right
              this_list[i+1].jiaolian2_insert_right=this_list[i].jiaolian2_insert_right

              this_list[i+1].jiaolian3_select_left=this_list[i].jiaolian3_select_left
              this_list[i+1].jiaolian3_insert_left=this_list[i].jiaolian3_insert_left
              this_list[i+1].jiaolian3_select_right=this_list[i].jiaolian3_select_right
              this_list[i+1].jiaolian3_insert_right=this_list[i].jiaolian3_insert_right

              this_list[i+1].jiaolian4_select_left=this_list[i].jiaolian4_select_left
              this_list[i+1].jiaolian4_insert_left=this_list[i].jiaolian4_insert_left
              this_list[i+1].jiaolian4_select_right=this_list[i].jiaolian4_select_right
              this_list[i+1].jiaolian4_insert_right=this_list[i].jiaolian4_insert_right

              this_list[i+1].jiaolian5_select_left=this_list[i].jiaolian5_select_left
              this_list[i+1].jiaolian5_insert_left=this_list[i].jiaolian5_insert_left
              this_list[i+1].jiaolian5_select_right=this_list[i].jiaolian5_select_right
              this_list[i+1].jiaolian5_insert_right=this_list[i].jiaolian5_insert_right

              this_list[i+1].jiaolian6_select_left=this_list[i].jiaolian6_select_left
              this_list[i+1].jiaolian6_insert_left=this_list[i].jiaolian6_insert_left
              this_list[i+1].jiaolian6_select_right=this_list[i].jiaolian6_select_right
              this_list[i+1].jiaolian6_insert_right=this_list[i].jiaolian6_insert_right

              this_list[i+1].qita=this_list[i].qita

              this_list[i+1].sum_shuliang1=this_list[i].sum_shuliang1
              this_list[i+1].danjia1=this_list[i].danjia1
              this_list[i+1].sum_jine1=this_list[i].sum_jine1

              this_list[i+1].fujian_select1=this_list[i].fujian_select1
              this_list[i+1].fujian_select2=this_list[i].fujian_select2
              this_list[i+1].fujian_select3=this_list[i].fujian_select3
              this_list[i+1].fujian_select4=this_list[i].fujian_select4

              this_list[i+1].pinpai_select1=this_list[i].pinpai_select1
              this_list[i+1].pinpai_select2=this_list[i].pinpai_select2
              this_list[i+1].pinpai_select3=this_list[i].pinpai_select3
              this_list[i+1].pinpai_select4=this_list[i].pinpai_select4

              this_list[i+1].fujian_shuliang1=this_list[i].fujian_shuliang1
              this_list[i+1].fujian_shuliang2=this_list[i].fujian_shuliang2
              this_list[i+1].fujian_shuliang3=this_list[i].fujian_shuliang3
              this_list[i+1].fujian_shuliang4=this_list[i].fujian_shuliang4

              this_list[i+1].sum_shuliang2=this_list[i].sum_shuliang2
              this_list[i+1].danjia2=this_list[i].danjia2
              this_list[i+1].sum_jine2=this_list[i].sum_jine2
              console.log(this_list)
              _this.setData({
                body_list: this_list
              })
              wx.showToast({
                title: '完成！',
                icon: 'none'
              })
              return;
            } else if (res.cancel) {
              wx.showToast({
                title: '已取消！',
                icon: 'none'
              })
              return;
            }
          }
        })
      }
  },

  save:function(){
    var _this = this
    var header_list = _this.data.header_list
    var body_list = _this.data.body_list
    if(header_list.customer_name == ''){
      wx.showToast({
        title: '未填写客户名称！',
        icon: 'none'
      })
      return;
    }
    if(header_list.insert_date == ''){
      wx.showToast({
        title: '未填写下单日期！',
        icon: 'none'
      })
      return;
    }
    if(header_list.order_number == ''){
      wx.showToast({
        title: '未填写单据编号！',
        icon: 'none'
      })
      return;
    }
    if(header_list.pinyin == ''){
      wx.showToast({
        title: '未填写简码！',
        icon: 'none'
      })
      return;
    }
    if(header_list.shipping_address == ''){
      wx.showToast({
        title: '未填写送货地址！',
        icon: 'none'
      })
      return;
    }
    if(header_list.phone == ''){
      wx.showToast({
        title: '未填写联系电话！',
        icon: 'none'
      })
      return;
    }
    if(header_list.shipping_type == ''){
      wx.showToast({
        title: '未填写送货方式！',
        icon: 'none'
      })
      return;
    }
    if(header_list.install_address == ''){
      wx.showToast({
        title: '未填写安装地址！',
        icon: 'none'
      })
      return;
    }
    wx.showLoading({
      title:'保存中'
    })
    var del_sql = ""
    if(_this.data.p_order_number != undefined){
      del_sql = "delete from lvkuang_xiadan where order_number='" + _this.data.p_order_number + "';delete from boli_xiadan where order_number='" + _this.data.p_order_number + "';"
    }
    var insert_sql = "insert into lvkuang_xiadan(customer_name,insert_date,order_number,pinyin,shipping_address,phone,shipping_type,install_address,customer_number,height,width,num,lvxingcai,lvcai_yanse,boli_shenjiagong,boli_yanse,lashou_xinghao,jiaoliankong_fangxiang_left,jiaoliankong_fangxiang_right,lashou_shuliang_right,lashou_shuliang_left,lashouwei_select_left,lashouwei_insert_left,lashouwei_select_right,lashouwei_insert_right,zhuangsuoshuliang_insert_left1,zhuangsuoshuliang_insert_right1,zhuangsuofangwei_insert_left1,zhuangsuofangwei_insert_left2,zhuangsuofangwei_insert_right1,zhuangsuofangwei_insert_right2,kaijiaolian,jiaolian1_select_left,jiaolian1_insert_left,jiaolian1_select_right,jiaolian1_insert_right,jiaolian2_select_left,jiaolian2_insert_left,jiaolian2_select_right,jiaolian2_insert_right,jiaolian3_select_left,jiaolian3_insert_left,jiaolian3_select_right,jiaolian3_insert_right,jiaolian4_select_left,jiaolian4_insert_left,jiaolian4_select_right,jiaolian4_insert_right,jiaolian5_select_left,jiaolian5_insert_left,jiaolian5_select_right,jiaolian5_insert_right,jiaolian6_select_left,jiaolian6_insert_left,jiaolian6_select_right,jiaolian6_insert_right,qita,sum_shuliang1,danjia1,sum_jine1,fujian_select1,fujian_select2,fujian_select3,fujian_select4,pinpai_select1,pinpai_select2,pinpai_select3,pinpai_select4,fujian_shuliang1,fujian_shuliang2,fujian_shuliang3,fujian_shuliang4,sum_shuliang2,danjia2,sum_jine2,guanlian,customer_name_renyuan) values "
    var sql_foot = ""
    for(var i=0; i<body_list.length; i++){
      if(sql_foot == ''){
        sql_foot = "('" + header_list.customer_name + "','" + header_list.insert_date + "','" + header_list.order_number + "','" + header_list.pinyin + "','" + header_list.shipping_address + "','" + header_list.phone + "','" + header_list.shipping_type + "','" + header_list.install_address + "','" + header_list.customer_number + "','" + body_list[i].height + "','" + body_list[i].width + "','" + body_list[i].num + "','" + body_list[i].lvxingcai + "','" + body_list[i].lvcai_yanse + "','" + body_list[i].boli_shenjiagong + "','" + body_list[i].boli_yanse + "','" + body_list[i].lashou_xinghao + "','" + body_list[i].jiaoliankong_fangxiang_left + "','" + body_list[i].jiaoliankong_fangxiang_right + "','" + body_list[i].lashou_shuliang_right + "','" + body_list[i].lashou_shuliang_left + "','" + body_list[i].lashouwei_select_left + "','" + body_list[i].lashouwei_insert_left + "','" + body_list[i].lashouwei_select_right + "','" + body_list[i].lashouwei_insert_right + "','" + body_list[i].zhuangsuoshuliang_insert_left1 + "','" + body_list[i].zhuangsuoshuliang_insert_right1 + "','" + body_list[i].zhuangsuofangwei_insert_left1 + "','" + body_list[i].zhuangsuofangwei_insert_left2 + "','" + body_list[i].zhuangsuofangwei_insert_right1 + "','" + body_list[i].zhuangsuofangwei_insert_right2 + "','" + body_list[i].kaijiaolian + "','" + body_list[i].jiaolian1_select_left + "','" + body_list[i].jiaolian1_insert_left + "','" + body_list[i].jiaolian1_select_right + "','" + body_list[i].jiaolian1_insert_right + "','" + body_list[i].jiaolian2_select_left + "','" + body_list[i].jiaolian2_insert_left + "','" + body_list[i].jiaolian2_select_right + "','" + body_list[i].jiaolian2_insert_right + "','" + body_list[i].jiaolian3_select_left + "','" + body_list[i].jiaolian3_insert_left + "','" + body_list[i].jiaolian3_select_right + "','" + body_list[i].jiaolian3_insert_right + "','" + body_list[i].jiaolian4_select_left + "','" + body_list[i].jiaolian4_insert_left + "','" + body_list[i].jiaolian4_select_right + "','" + body_list[i].jiaolian4_insert_right + "','" + body_list[i].jiaolian5_select_left + "','" + body_list[i].jiaolian5_insert_left + "','" + body_list[i].jiaolian5_select_right + "','" + body_list[i].jiaolian5_insert_right + "','" + body_list[i].jiaolian6_select_left + "','" + body_list[i].jiaolian6_insert_left + "','" + body_list[i].jiaolian6_select_right + "','" + body_list[i].jiaolian6_insert_right + "','" + body_list[i].qita + "','" + body_list[i].sum_shuliang1 + "','" + body_list[i].danjia1 + "','" + body_list[i].sum_jine1 + "','" + body_list[i].fujian_select1 + "','" + body_list[i].fujian_select2 + "','" + body_list[i].fujian_select3 + "','" + body_list[i].fujian_select4 + "','" + body_list[i].pinpai_select1 + "','" + body_list[i].pinpai_select2 + "','" + body_list[i].pinpai_select3 + "','" + body_list[i].pinpai_select4 + "','" + body_list[i].fujian_shuliang1 + "','" + body_list[i].fujian_shuliang2 + "','" + body_list[i].fujian_shuliang3 + "','" + body_list[i].fujian_shuliang4 + "','" + body_list[i].sum_shuliang2 + "','" + body_list[i].danjia2 + "','" + body_list[i].sum_jine2 + "','" + header_list.order_number + i + "','" + header_list.customer_name_renyuan + "')"
      }else{
        sql_foot = sql_foot + ",('" + header_list.customer_name + "','" + header_list.insert_date + "','" + header_list.order_number + "','" + header_list.pinyin + "','" + header_list.shipping_address + "','" + header_list.phone + "','" + header_list.shipping_type + "','" + header_list.install_address + "','" + header_list.customer_number + "','" + body_list[i].height + "','" + body_list[i].width + "','" + body_list[i].num + "','" + body_list[i].lvxingcai + "','" + body_list[i].lvcai_yanse + "','" + body_list[i].boli_shenjiagong + "','" + body_list[i].boli_yanse + "','" + body_list[i].lashou_xinghao + "','" + body_list[i].jiaoliankong_fangxiang_left + "','" + body_list[i].jiaoliankong_fangxiang_right + "','" + body_list[i].lashou_shuliang_right + "','" + body_list[i].lashou_shuliang_left + "','" + body_list[i].lashouwei_select_left + "','" + body_list[i].lashouwei_insert_left + "','" + body_list[i].lashouwei_select_right + "','" + body_list[i].lashouwei_insert_right + "','" + body_list[i].zhuangsuoshuliang_insert_left1 + "','" + body_list[i].zhuangsuoshuliang_insert_right1 + "','" + body_list[i].zhuangsuofangwei_insert_left1 + "','" + body_list[i].zhuangsuofangwei_insert_left2 + "','" + body_list[i].zhuangsuofangwei_insert_right1 + "','" + body_list[i].zhuangsuofangwei_insert_right2 + "','" + body_list[i].kaijiaolian + "','" + body_list[i].jiaolian1_select_left + "','" + body_list[i].jiaolian1_insert_left + "','" + body_list[i].jiaolian1_select_right + "','" + body_list[i].jiaolian1_insert_right + "','" + body_list[i].jiaolian2_select_left + "','" + body_list[i].jiaolian2_insert_left + "','" + body_list[i].jiaolian2_select_right + "','" + body_list[i].jiaolian2_insert_right + "','" + body_list[i].jiaolian3_select_left + "','" + body_list[i].jiaolian3_insert_left + "','" + body_list[i].jiaolian3_select_right + "','" + body_list[i].jiaolian3_insert_right + "','" + body_list[i].jiaolian4_select_left + "','" + body_list[i].jiaolian4_insert_left + "','" + body_list[i].jiaolian4_select_right + "','" + body_list[i].jiaolian4_insert_right + "','" + body_list[i].jiaolian5_select_left + "','" + body_list[i].jiaolian5_insert_left + "','" + body_list[i].jiaolian5_select_right + "','" + body_list[i].jiaolian5_insert_right + "','" + body_list[i].jiaolian6_select_left + "','" + body_list[i].jiaolian6_insert_left + "','" + body_list[i].jiaolian6_select_right + "','" + body_list[i].jiaolian6_insert_right + "','" + body_list[i].qita + "','" + body_list[i].sum_shuliang1 + "','" + body_list[i].danjia1 + "','" + body_list[i].sum_jine1 + "','" + body_list[i].fujian_select1 + "','" + body_list[i].fujian_select2 + "','" + body_list[i].fujian_select3 + "','" + body_list[i].fujian_select4 + "','" + body_list[i].pinpai_select1 + "','" + body_list[i].pinpai_select2 + "','" + body_list[i].pinpai_select3 + "','" + body_list[i].pinpai_select4 + "','" + body_list[i].fujian_shuliang1 + "','" + body_list[i].fujian_shuliang2 + "','" + body_list[i].fujian_shuliang3 + "','" + body_list[i].fujian_shuliang4 + "','" + body_list[i].sum_shuliang2 + "','" + body_list[i].danjia2 + "','" + body_list[i].sum_jine2 + "','" + header_list.order_number + i + "','" + header_list.customer_name_renyuan + "')"
      }
    }
    insert_sql = insert_sql + sql_foot + ";"
    console.log(insert_sql)

    var select_sql_head = "select * from refertable "
    var select_sql_foot = ""

    for(var i=0; i<body_list.length; i++){
      if(body_list[i].lvxingcai != ''){
        if(select_sql_foot == ""){
          select_sql_foot = "where lkxh ='" + body_list[i].lvxingcai + "' "
        }else{
          select_sql_foot = select_sql_foot + "or lkxh ='" + body_list[i].lvxingcai + "' "
        }
      }
    }
    var select_sql = select_sql_head + select_sql_foot + ";"
    select_sql = select_sql +  "select * from lashou_peizhi;"
    console.log(select_sql)
    wx.cloud.callFunction({
      name: 'sqlserver_huaqun',
      data: {
        query: select_sql
      },
      success: res => {
        console.log(res)
        var list = res.result.recordsets

        var canzhao_list = res.result.recordsets[0]
        var lashou_peizhi_list = res.result.recordsets[1]
        var lashou_xinghao_panduan = {}
        var lvxingcai_panduan = {}
        for(var i=0; i<lashou_peizhi_list.length; i++){
          if(lashou_peizhi_list[i].lashou != ''){
            lashou_xinghao_panduan[lashou_peizhi_list[i].lashou] = ""
          }
          if(lashou_peizhi_list[i].lvxingcai != ''){
            lvxingcai_panduan[lashou_peizhi_list[i].lvxingcai] = ""
          }
        }
        console.log(lashou_xinghao_panduan)
        console.log(lvxingcai_panduan)
        console.log(canzhao_list)
        var boli_insert_sql_head = "insert into boli_xiadan(order_number,pinyin,boli_yanse,boli_shenjiagong,num,height,width,shuoming1,shuoming2,shengchan,guanlian) values "
        var boli_insert_sql_foot = ""
        
        for(var i=0; i<body_list.length; i++){
          if(body_list[i].boli_yanse != '' && body_list[i].width != '' && body_list[i].height != '' && body_list[i].num != ''){
            var width = parseFloat(body_list[i].width)
            var height = parseFloat(body_list[i].height)
            for(var j=0; j<canzhao_list.length; j++){
              if(width == NaN){
                width = 0
              }
              if(height == NaN){
                height = 0
              }
              if(canzhao_list[j].lkxh == body_list[i].lvxingcai && canzhao_list[j].yanse == body_list[i].lvcai_yanse){
                var this_width = parseFloat(canzhao_list[j].kuan)
                var this_height = parseFloat(canzhao_list[j].chang)
                if(this_width == NaN){
                  this_width = 0
                }
                if(this_height == NaN){
                  this_height = 0
                }
                width = width - this_width
                height = height - this_height
                break;
              }
            }
            var num = parseFloat(body_list[i].num)
            if(num == NaN){
              num = 0
            }
            var shuoming1 = 0
            var shuoming2 = 0
            if(body_list[i].zhuangsuoshuliang_insert_left1 != ""){
              shuoming2 = shuoming2 + body_list[i].zhuangsuoshuliang_insert_left1 * 1
            }
            if(body_list[i].zhuangsuoshuliang_insert_right1 != ""){
              shuoming2 = shuoming2 + body_list[i].zhuangsuoshuliang_insert_right1 * 1
            }
            
            if(lashou_xinghao_panduan[body_list[i].lashou_xinghao] != undefined && lvxingcai_panduan[body_list[i].lvxingcai] != undefined){
              if(body_list[i].lashouwei_insert_left != ""){
                if(body_list[i].lashouwei_insert_left * 1 < 13){
                  shuoming1 = shuoming1 + 0
                }else{
                  shuoming1 = shuoming1 + body_list[i].lashou_shuliang_right * 1
                }
              }
              if(body_list[i].lashouwei_insert_right != ""){
                if(body_list[i].lashouwei_insert_right * 1 < 13){
                  shuoming1 = shuoming1 + 0
                }else{
                  shuoming1 = shuoming1 + body_list[i].lashou_shuliang_left * 1
                }
              }
            }else if(lashou_xinghao_panduan[body_list[i].lashou_xinghao] != undefined){
              if(body_list[i].lashouwei_insert_left != ""){
                shuoming1 = shuoming1 + body_list[i].lashou_shuliang_right * 1
              }
              if(body_list[i].lashouwei_insert_right != ""){
                shuoming1 = shuoming1 + body_list[i].lashou_shuliang_left * 1
              }
            }

            if(boli_insert_sql_foot == ""){
              boli_insert_sql_foot = "('" + header_list.order_number + "','" + header_list.pinyin + "','" + body_list[i].boli_yanse + "','" + body_list[i].boli_shenjiagong + "','" + num + "','" + height + "','" + width + "','" + shuoming1 + "','" + shuoming2 + "','正在加工','"  + header_list.order_number + i + "')"
            }else{
              boli_insert_sql_foot = boli_insert_sql_foot + ",('" + header_list.order_number + "','" + header_list.pinyin + "','" + body_list[i].boli_yanse + "','" + body_list[i].boli_shenjiagong + "','" + num + "','" + height + "','" + width + "','" + shuoming1 + "','" + shuoming2 + "','正在加工','"  + header_list.order_number + i + "')"
            }
          }
        }

        if(boli_insert_sql_foot != ''){
          insert_sql = del_sql + insert_sql + boli_insert_sql_head + boli_insert_sql_foot + ";"
        }
        console.log(insert_sql)
        wx.cloud.callFunction({
          name: 'sqlserver_huaqun',
          data: {
            query: insert_sql
          },
          success: res => {
            console.log(res)
            wx.showToast({
              title: '下单成功！',
              icon: 'none'
            })
            wx.hideLoading()
            var common_Interval = setInterval(()=>
            {
              wx.navigateBack({ 
                delta: 1
              });
              clearInterval(common_Interval);
            }, 2000)
          },
          err: res => {
            wx.hideLoading()
            wx.showToast({
              title: '错误4480！' + res,
              icon: 'none'
            })
            console.log("错误!")
          },
          fail: res => {
            wx.hideLoading()
            wx.showToast({
              title: '请求失败4488！' + res,
              icon: 'none'
            })
            console.log("请求失败！")
          }
        })
        
      },
      err: res => {
        wx.hideLoading()
        wx.showToast({
          title: '错误4499！' + res,
          icon: 'none'
        })
        console.log("错误!")
      },
      fail: res => {
        wx.hideLoading()
        wx.showToast({
          title: '请求失败4507！' + res,
          icon: 'none'
        })
        console.log("请求失败！")
      }
    })
  },

  onInput: function (e) {
    var _this = this
    let column = e.currentTarget.dataset.column
    _this.setData({
      [column]: e.detail.value
    })
  },

  onInputDate(event) {
    var _this = this
    _this.setData({
      currentDate: event.detail,
    });
  },

  onInput22: function () {
    var _this = this
    var date = new Date(_this.data.currentDate)
    var Y = date.getFullYear() + '-'
    var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
    var D = (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())

    var riqi = Y + M + D
    var header_list = _this.data.header_list
    header_list.insert_date = riqi
    _this.setData({
      header_list
    });
    _this.qxShow22()
  },

  onInput_text: function (e) {
    var _this = this
    let column = e.currentTarget.dataset.column
    var list = _this.data.header_list
    list[column] = e.detail.value
    _this.setData({
      header_list: list
    })
  },

  clickView:function(e){
    var _this = this
    console.log(e.currentTarget.dataset.column)
    console.log(e.currentTarget.dataset.value)
    console.log(e.currentTarget.dataset.index)
    var index = e.currentTarget.dataset.index
    var column = e.currentTarget.dataset.column
    if(_this.data.body_list[index].jiaolian1_select_left == '' && column == 'jiaolian1_insert_left' ){
      wx.showToast({
        title: '未选择铰链孔1左开方向！',
        icon: 'none'
      })
      return;
    }
    if(_this.data.body_list[index].jiaolian2_select_left == '' && column == 'jiaolian2_insert_left' ){
      wx.showToast({
        title: '未选择铰链孔2左开方向！',
        icon: 'none'
      })
      return;
    }
    if(_this.data.body_list[index].jiaolian3_select_left == '' && column == 'jiaolian3_insert_left' ){
      wx.showToast({
        title: '未选择铰链孔3左开方向！',
        icon: 'none'
      })
      return;
    }
    if(_this.data.body_list[index].jiaolian4_select_left == '' && column == 'jiaolian4_insert_left' ){
      wx.showToast({
        title: '未选择铰链孔4左开方向！',
        icon: 'none'
      })
      return;
    }
    if(_this.data.body_list[index].jiaolian5_select_left == '' && column == 'jiaolian5_insert_left' ){
      wx.showToast({
        title: '未选择铰链孔5左开方向！',
        icon: 'none'
      })
      return;
    }
    if(_this.data.body_list[index].jiaolian6_select_left == '' && column == 'jiaolian6_insert_left' ){
      wx.showToast({
        title: '未选择铰链孔6左开方向！',
        icon: 'none'
      })
      return;
    }

    if(_this.data.body_list[index].jiaolian1_select_right == '' && column == 'jiaolian1_insert_right' ){
      wx.showToast({
        title: '未选择铰链孔1右开方向！',
        icon: 'none'
      })
      return;
    }
    if(_this.data.body_list[index].jiaolian2_select_right == '' && column == 'jiaolian2_insert_right' ){
      wx.showToast({
        title: '未选择铰链孔2右开方向！',
        icon: 'none'
      })
      return;
    }
    if(_this.data.body_list[index].jiaolian3_select_right == '' && column == 'jiaolian3_insert_right' ){
      wx.showToast({
        title: '未选择铰链孔3右开方向！',
        icon: 'none'
      })
      return;
    }
    if(_this.data.body_list[index].jiaolian4_select_right == '' && column == 'jiaolian4_insert_right' ){
      wx.showToast({
        title: '未选择铰链孔4右开方向！',
        icon: 'none'
      })
      return;
    }
    if(_this.data.body_list[index].jiaolian5_select_right == '' && column == 'jiaolian5_insert_right' ){
      wx.showToast({
        title: '未选择铰链孔5右开方向！',
        icon: 'none'
      })
      return;
    }
    if(_this.data.body_list[index].jiaolian6_select_right == '' && column == 'jiaolian6_insert_right' ){
      wx.showToast({
        title: '未选择铰链孔6右开方向！',
        icon: 'none'
      })
      return;
    }

    var column = e.currentTarget.dataset.column
    var this_type = "text"
    if(column == 'height' || column == 'width' || column == 'lashou_shuliang_right' || column == 'lashou_shuliang_left' || column == 'lashou_shuliang_left' || column == 'jiaoliankong_fangxiang_left' || column == 'jiaoliankong_fangxiang_right'){
      this_type = 'digit'
    }

    _this.setData({
      this_column:e.currentTarget.dataset.column,
      this_value:e.currentTarget.dataset.value,
      this_index:e.currentTarget.dataset.index,
      this_type:this_type,
      xgShow:true,
    })
  },

  upd1:function(){
    var _this = this
    var index = _this.data.this_index
    var this_column = _this.data.this_column
    var this_value = _this.data.this_value
    var list = _this.data.body_list
    list[index * 1][this_column] = this_value
    if(this_column == 'jiaolian1_insert_left'){
      list[index * 1].jiaolian1_insert_right = this_value
    }
    if(this_column == 'jiaolian2_insert_left'){
      list[index * 1].jiaolian2_insert_right = this_value
    }
    if(this_column == 'jiaolian3_insert_left'){
      list[index * 1].jiaolian3_insert_right = this_value
    }
    if(this_column == 'jiaolian4_insert_left'){
      list[index * 1].jiaolian4_insert_right = this_value
    }
    if(this_column == 'jiaolian5_insert_left'){
      list[index * 1].jiaolian5_insert_right = this_value
    }
    if(this_column == 'jiaolian6_insert_left'){
      list[index * 1].jiaolian6_insert_right = this_value
    }
    if(this_column == 'jiaoliankong_fangxiang_left'){
      list[index * 1].jiaoliankong_fangxiang_right = (list[index * 1].num * 1) - (this_value * 1)
      list[index * 1].lashou_shuliang_right = this_value
      list[index * 1].lashou_shuliang_left = (list[index * 1].num * 1) - (this_value * 1)
      if(list[index * 1].lashou_xinghao == '无拉手' || list[index * 1].lashou_xinghao == '常规趟门' || list[index * 1].lashou_xinghao == '吊趟门' || list[index * 1].lashou_xinghao == '四角开螺丝孔'){
        list[index * 1].lashou_shuliang_right = ""
        list[index * 1].lashou_shuliang_left = ""
      }
    }
    if(this_column == 'jiaoliankong_fangxiang_right'){
      list[index * 1].jiaoliankong_fangxiang_left = (list[index * 1].num * 1) - (this_value * 1)
      list[index * 1].lashou_shuliang_left = this_value
      list[index * 1].lashou_shuliang_right = (list[index * 1].num * 1) - (this_value * 1)
      if(list[index * 1].lashou_xinghao == '无拉手' || list[index * 1].lashou_xinghao == '常规趟门' || list[index * 1].lashou_xinghao == '吊趟门' || list[index * 1].lashou_xinghao == '四角开螺丝孔'){
        list[index * 1].lashou_shuliang_right = ""
        list[index * 1].lashou_shuliang_left = ""
      }
    }
    if(this_column == 'lashouwei_select_left'){
      list[index * 1].lashouwei_select_right = this_value
    }
    if(this_column == 'lashouwei_insert_left'){
      list[index * 1].lashouwei_insert_right = this_value
    }
    if(list[index * 1].height != '' && list[index * 1].width != '' && list[index * 1].num != ''){
      list[index].sum_shuliang1 = Math.round(list[index * 1].height * list[index * 1].width / 1000000 * list[index * 1].num * 1000) / 1000 
    }else{
      list[index].sum_shuliang1 = ''
    }

    if(list[index * 1].sum_shuliang1 != '' && list[index * 1].danjia1 != ''){
      list[index * 1].sum_jine1 = Math.round(list[index * 1].sum_shuliang1 * list[index * 1].danjia1 * 100) / 100
    }else{
      list[index].sum_jine1 = ''
    }

    if(list[index * 1].height != '' && list[index * 1].width != '' && list[index * 1].num != ''){
      list[index].sum_shuliang2 = Math.round((list[index * 1].height * 1 + list[index * 1].width * 1) / 1000 * 2 * list[index * 1].num * 1000) / 1000 
    }else{
      list[index].sum_shuliang2 = ''
    }

    if(list[index * 1].sum_shuliang2 != '' && list[index * 1].danjia2 != ''){
      list[index * 1].sum_jine2 = Math.round(list[index * 1].sum_shuliang2 * list[index * 1].danjia2 * 100) / 100
    }else{
      list[index].sum_jine2 = ''
    }

    console.log(list[index * 1])
    _this.setData({
      body_list:list,
      xgShow:false,
    })
  },

  qxShow: function () {
    var _this = this
    _this.setData({
      tjShow: false,
      xgShow: false,
      cxShow: false,
    })
  },

  refresh:function(){
    var _this = this 
    wx.showModal({
      title: '提示',
      content: '确认清空表单？',
      success (res) {
        if (res.confirm) {
          var body_list = _this.data.body_list_refresh
          var header_list = _this.data.header_list
          header_list.shipping_address = ''
          header_list.phone = ''
          header_list.shipping_type = ''
          header_list.install_address = ''
          header_list.customer_number = ''
          _this.setData({
            body_list:body_list,
            header_list:header_list
          })
          wx.showToast({
            title: '已清空！',
            icon: 'none'
          })
        } else if (res.cancel) {
          wx.showToast({
            title: '已取消！',
            icon: 'none'
          })
        }
      }
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

function getNowDate() {
  var date = new Date();
  var sign1 = "-";
  var sign2 = ":";
  var year = date.getFullYear() // 年
  var month = date.getMonth() + 1; // 月
  var day  = date.getDate(); // 日
  var hour = date.getHours(); // 时
  var minutes = date.getMinutes(); // 分
  var seconds = date.getSeconds() //秒
  var weekArr = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'];
  var week = weekArr[date.getDay()];
  // 给一位数数据前面加 “0”
  if (month >= 1 && month <= 9) {
   month = "0" + month;
  }
  if (day >= 0 && day <= 9) {
   day = "0" + day;
  }
  if (hour >= 0 && hour <= 9) {
   hour = "0" + hour;
  }
  if (minutes >= 0 && minutes <= 9) {
   minutes = "0" + minutes;
  }
  if (seconds >= 0 && seconds <= 9) {
   seconds = "0" + seconds;
  }
  // var currentdate = year + sign1 + month + sign1 + day + " " + hour + sign2 + minutes + sign2 + seconds + " " + week;
  var currentdate = year + sign1 + month + sign1 + day ;
  return currentdate;
 }

 function getBianHao() {
  var date = new Date();
  var sign1 = "-";
  var sign2 = ":";
  var year = date.getFullYear() // 年
  var month = date.getMonth() + 1; // 月
  var day  = date.getDate(); // 日
  var hour = date.getHours(); // 时
  var minutes = date.getMinutes(); // 分
  var seconds = date.getSeconds() //秒
  var weekArr = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天'];
  var week = weekArr[date.getDay()];
  // 给一位数数据前面加 “0”
  if (month >= 1 && month <= 9) {
   month = "0" + month;
  }
  if (day >= 0 && day <= 9) {
   day = "0" + day;
  }
  if (hour >= 0 && hour <= 9) {
   hour = "0" + hour;
  }
  if (minutes >= 0 && minutes <= 9) {
   minutes = "0" + minutes;
  }
  if (seconds >= 0 && seconds <= 9) {
   seconds = "0" + seconds;
  }
  // var currentdate = year + sign1 + month + sign1 + day + " " + hour + sign2 + minutes + sign2 + seconds + " " + week;
  var currentdate = "LK"+ year.toString() + month.toString() + day.toString() ;
  return currentdate;
 }