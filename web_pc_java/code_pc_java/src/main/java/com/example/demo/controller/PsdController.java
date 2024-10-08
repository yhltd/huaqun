//package com.example.demo.controller;
//
//import com.example.demo.entity.UserInfo;
//import com.example.demo.entity.psd;
//import com.example.demo.service.PsdService;
//import com.example.demo.service.UserInfoService;
//import com.example.demo.util.*;
//import lombok.extern.slf4j.Slf4j;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.RestController;
//
//import javax.servlet.http.HttpServletResponse;
//import javax.servlet.http.HttpSession;
//import java.util.ArrayList;
//import java.util.Collections;
//import java.util.HashMap;
//import java.util.List;
//
//@Slf4j
//@RestController
//@RequestMapping("/psd")
//public class PsdController {
//    @Autowired
//    private UserInfoService userInfoService;
//    @Autowired
//    private PsdService psdService;
//
//    /**
//     * 查询所有
//     *
//     * @return ResultInfo
//     */
//    @RequestMapping("/getloginname")
//    public ResultInfo loginname(HttpSession session) {
//        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
////        try {
////            String name = userInfo.getName();
////            return ResultInfo.success("获取成功", name);
//        try {
//            String name = userInfo.getName();
//            String company = userInfo.getCompany();
//            return ResultInfo.success("获取成功", company);
//        } catch (Exception e) {
//            e.printStackTrace();
//            log.error("获取失败：{}", e.getMessage());
//            return ResultInfo.error("错误!");
//        }
//    }
//    @RequestMapping("/getList")
//    public ResultInfo getList(HttpSession session) {
//        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
//        if(userInfo.getPower().equals("玻璃厂")){
//            return ResultInfo.error(401, "无权限");
//        }
//        try {
////            if(userInfo.getPower().equals("客户")) {
////                List<psd> getList=psdService.getListByName(userInfo.getName());
////                return ResultInfo.success("获取成功",getList);
////            }
//            if(userInfo.getPower().equals("客户")) {
//                List<psd> getList=psdService.getListByName(userInfo.getCompany());
//                return ResultInfo.success("获取成功",getList);
//            }
//            List<psd> getList = psdService.getList();
//            return ResultInfo.success("获取成功", getList);
//        } catch (Exception e) {
//            e.printStackTrace();
//            log.error("获取失败：{}", e.getMessage());
//            return ResultInfo.error("错误!");
//        }
//    }
//    @RequestMapping("/getListByName")
//    public ResultInfo getListByName(HttpSession session) {
//        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
//        if(userInfo.getPower().equals("玻璃厂")){
//            return ResultInfo.error(401, "无权限");
//        }
////        try {
////            List<psd> getList = psdService.getListByName(userInfo.getName());
//        try {
//            List<psd> getList = psdService.getListByName(userInfo.getCompany());
//            return ResultInfo.success("获取成功", getList);
////            return ResultInfo.success("获取成功", getList);
//        } catch (Exception e) {
//            e.printStackTrace();
//            log.error("获取失败：{}", e.getMessage());
//            return ResultInfo.error("错误!");
//        }
//    }
//
//    /**
//     * 根据姓名和部门查询
//     *
//     * @return ResultInfo
//     */
//    @RequestMapping("/queryList")
//    public ResultInfo queryList(String orderNumber, String customerName, String quyu, String anzhuangAddress,
//                                String customerOrder,
//                                String ksinsertDate,
//                                String jsinsertDate,
//                                String wancheng,
//                                String kucun,
//                                HttpSession session) {
//        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
//        try {
//            List<psd> list = psdService.queryList(orderNumber, customerName, quyu, anzhuangAddress, customerOrder,ksinsertDate,
//                     jsinsertDate,
//                     wancheng,
//                     kucun);
//            return ResultInfo.success("获取成功", list);
//        } catch (Exception e) {
//            e.printStackTrace();
//            log.error("获取失败：{}", e.getMessage());
//            return ResultInfo.error("错误!");
//        }
//    }
//
//    /**
//     * 修改
//     */
//    @RequestMapping(value = "/update", method = RequestMethod.POST)
//    public ResultInfo update(@RequestBody String updateJson, HttpSession session) {
//        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
//        if(userInfo.getPower().equals("客户")){
//            return ResultInfo.error(401, "无权限");
//        }
//        psd psd = null;
//        try {
//            psd = DecodeUtil.decodeToJson(updateJson, psd.class);
//            String wancheng = psdService.getListBydjbh(psd.getId());
//            if(!wancheng.equals("完成") || userInfo.getPower().equals("超级管理员") || userInfo.getPower().equals("管理员")) {
//                if (psdService.update(psd)) {
//                    return ResultInfo.success("修改成功", psd);
//                } else {
//                    return ResultInfo.success("修改失败", psd);
//                }
//            }else{
//                return ResultInfo.error("修改失败订单状态完成");
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//            log.error("修改失败：{}", e.getMessage());
//            log.error("参数：{}", userInfo);
//            return ResultInfo.error("修改失败");
//        }
//    }
//
//    /**
//     * 添加
//     */
////    @RequestMapping("/add")
////    public ResultInfo add(@RequestBody HashMap map, HttpSession session) {
////        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
////        GsonUtil gsonUtil = new GsonUtil(GsonUtil.toJson(map));
////        if (userInfo.getPower().equals("玻璃厂")) {
////            return ResultInfo.error(401, "无权限");
////        }
////        try {
////            psd psd = GsonUtil.toEntity(gsonUtil.get("addInfo"), psd.class);
//////            System.out.println("===============");
//////            System.out.println(psd);
////            psd.setCustomerNeedImg1("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-01.jpg");
////            psd.setCustomerNeedImg2("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-02.jpg");
////            psd.setCustomerNeedImg3("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-03.jpg");
////            psd.setCustomerNeedImg4("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-04.jpg");
////            psd.setCustomerNeedImg5("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-05.jpg");
////            psd.setCustomerNeedImg6("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-06.jpg");
////            psd.setCustomerNeedImg7("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-07.jpg");
////            psd.setCustomerNeedImg8("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-08.jpg");
////            psd.setCustomerNeedText2("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-09.jpg");
////            psd.setPeihuoImg1("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-10.jpg");
////            psd.setPeihuoImg2("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-11.jpg");
////            psd.setPeihuoImg3("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-12.jpg");
////            psd.setPeihuoImg4("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-13.jpg");
////            psd.setPeihuoImg5("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-14.jpg");
////            psd.setPeihuoImg6("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-15.jpg");
////            psd.setPeihuoImg7("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-16.jpg");
////            psd.setPeihuoImg8("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-17.jpg");
////            psd.setPeisongImg1("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-18.jpg");
////            psd.setPeisongImg2("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-19.jpg");
////            psd.setPeisongImg3("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-20.jpg");
////            psd.setPeisongImg4("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-21.jpg");
////            psd.setPeisongImg5("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-22.jpg");
////            psd.setPeisongImg6("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-23.jpg");
////            psd.setPeisongImg7("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-24.jpg");
////            psd.setPeisongImg8("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-25.jpg");
////            psd.setKucunImg1("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-26.jpg");
////            psd.setKucunImg2("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-27.jpg");
////            psd.setKucunImg3("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-28.jpg");
////            psd.setKucunImg4("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-29.jpg");
////            psd.setKucunImg5("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-30.jpg");
////            psd.setKucunImg6("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-31.jpg");
////            psd.setKucunImg7("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-32.jpg");
////            psd.setKucunImg8("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-33.jpg");
////            psd.setWenjianImg1("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-34.jpg");
////            psd.setWenjianImg2("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-35.jpg");
////            psd.setWenjianImg3("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-36.jpg");
////            psd.setWenjianImg4("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-37.jpg");
////            psd.setWenjianImg5("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-38.jpg");
////            psd.setWenjianImg6("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-39.jpg");
////            psd.setWenjianImg7("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-40.jpg");
////            psd.setWenjianImg8("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-41.jpg");
////
////            psd = psdService.add(psd);
////            if (StringUtils.isNotNull(psd)) {
////                return ResultInfo.success("添加成功", psd);
////            } else {
////                return ResultInfo.success("添加失败", null);
////            }
////        } catch (Exception e) {
////            e.printStackTrace();
////            log.error("添加失败：{}", e.getMessage());
////            log.error("参数：{}", map);
////            return ResultInfo.error("添加失败");
////        }
////    }
//    @RequestMapping("/add")
//    public ResultInfo add(@RequestBody HashMap map, HttpSession session) {
//        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
//        GsonUtil gsonUtil = new GsonUtil(GsonUtil.toJson(map));
//        if (userInfo.getPower().equals("玻璃厂")) {
//            return ResultInfo.error(401, "无权限");
//        }
//
//        try {
//            psd psd = GsonUtil.toEntity(gsonUtil.get("addInfo"), psd.class);
////            System.out.println("===============");
////            System.out.println(psd);
////            psd.setCustomerNeedImg1("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-01.jpg");
////            psd.setCustomerNeedImg2("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-02.jpg");
////            psd.setCustomerNeedImg3("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-03.jpg");
////            psd.setCustomerNeedImg4("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-04.jpg");
////            psd.setCustomerNeedImg5("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-05.jpg");
////            psd.setCustomerNeedImg6("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-06.jpg");
////            psd.setCustomerNeedImg7("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-07.jpg");
////            psd.setCustomerNeedImg8("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-08.jpg");
////            psd.setCustomerNeedText2("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-09.jpg");
////            psd.setPeihuoImg1("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-10.jpg");
////            psd.setPeihuoImg2("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-11.jpg");
////            psd.setPeihuoImg3("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-12.jpg");
////            psd.setPeihuoImg4("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-13.jpg");
////            psd.setPeihuoImg5("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-14.jpg");
////            psd.setPeihuoImg6("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-15.jpg");
////            psd.setPeihuoImg7("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-16.jpg");
////            psd.setPeihuoImg8("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-17.jpg");
////            psd.setPeisongImg1("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-18.jpg");
////            psd.setPeisongImg2("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-19.jpg");
////            psd.setPeisongImg3("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-20.jpg");
////            psd.setPeisongImg4("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-21.jpg");
////            psd.setPeisongImg5("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-22.jpg");
////            psd.setPeisongImg6("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-23.jpg");
////            psd.setPeisongImg7("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-24.jpg");
////            psd.setPeisongImg8("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-25.jpg");
////            psd.setKucunImg1("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-26.jpg");
////            psd.setKucunImg2("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-27.jpg");
////            psd.setKucunImg3("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-28.jpg");
////            psd.setKucunImg4("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-29.jpg");
////            psd.setKucunImg5("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-30.jpg");
////            psd.setKucunImg6("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-31.jpg");
////            psd.setKucunImg7("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-32.jpg");
////            psd.setKucunImg8("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-33.jpg");
////            psd.setWenjianImg1("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-34.jpg");
////            psd.setWenjianImg2("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-35.jpg");
////            psd.setWenjianImg3("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-36.jpg");
////            psd.setWenjianImg4("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-37.jpg");
////            psd.setWenjianImg5("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-38.jpg");
////            psd.setWenjianImg6("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-39.jpg");
////            psd.setWenjianImg7("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-40.jpg");
////            psd.setWenjianImg8("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-41.jpg");
////            psd.setCustomerNeedImg1("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-01.jpg");
////            psd.setCustomerNeedImg2("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-02.jpg");
////            psd.setCustomerNeedImg3("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-03.jpg");
////            psd.setCustomerNeedImg4("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-04.jpg");
////            psd.setCustomerNeedImg5("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-05.jpg");
////            psd.setCustomerNeedImg6("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-06.jpg");
////            psd.setCustomerNeedImg7("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-07.jpg");
////            psd.setCustomerNeedImg8("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-08.jpg");
////            psd.setCustomerNeedText2("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-09.jpg");
//            psd.setPeihuoImg1("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-10.jpg");
//            psd.setPeihuoImg2("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-11.jpg");
//            psd.setPeihuoImg3("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-12.jpg");
//            psd.setPeihuoImg4("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-13.jpg");
//            psd.setPeihuoImg5("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-14.jpg");
////            psd.setPeihuoImg6("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-15.jpg");
////            psd.setPeihuoImg7("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-16.jpg");
////            psd.setPeihuoImg8("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-17.jpg");
//            psd.setPeisongImg1("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-18.jpg");
//            psd.setPeisongImg2("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-19.jpg");
//            psd.setPeisongImg3("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-20.jpg");
////            psd.setPeisongImg4("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-21.jpg");
////            psd.setPeisongImg5("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-22.jpg");
////            psd.setPeisongImg6("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-23.jpg");
////            psd.setPeisongImg7("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-24.jpg");
////            psd.setPeisongImg8("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-25.jpg");
////            psd.setKucunImg1("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-26.jpg");
////            psd.setKucunImg2("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-27.jpg");
////            psd.setKucunImg3("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-28.jpg");
////            psd.setKucunImg4("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-29.jpg");
////            psd.setKucunImg5("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-30.jpg");
////            psd.setKucunImg6("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-31.jpg");
////            psd.setKucunImg7("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-32.jpg");
////            psd.setKucunImg8("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-33.jpg");
////            psd.setWenjianImg1("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-34.jpg");
////            psd.setWenjianImg2("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-35.jpg");
////            psd.setWenjianImg3("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-36.jpg");
////            psd.setWenjianImg4("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-37.jpg");
////            psd.setWenjianImg5("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-38.jpg");
////            psd.setWenjianImg6("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-39.jpg");
////            psd.setWenjianImg7("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-40.jpg");
////            psd.setWenjianImg8("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-41.jpg");
//            psd = psdService.add(psd);
//            if (StringUtils.isNotNull(psd)) {
//                return ResultInfo.success("添加成功", psd);
//            } else {
//                return ResultInfo.success("添加失败", null);
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//            log.error("添加失败：{}", e.getMessage());
//            log.error("参数：{}", map);
//            return ResultInfo.error("添加失败");
//        }
//    }
//    /**
//     * 删除
//     *
//     * @param map
//     * @return ResultInfo
//     */
//    @RequestMapping("/delete")
//    public ResultInfo delete(@RequestBody HashMap map, HttpSession session) {
//        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
//        GsonUtil gsonUtil = new GsonUtil(GsonUtil.toJson(map));
//        List<Integer> idList = GsonUtil.toList(gsonUtil.get("idList"), Integer.class);
//        if (!(userInfo.getPower().equals("管理员")||userInfo.getPower().equals("超级管理员"))) {
//            return ResultInfo.error(401, "无权限");
//        }
//        try {
//            for (int i = 0; i < idList.size(); i++) {
//                int this_id = idList.get(i);
//                psdService.delete(Collections.singletonList(this_id));
//            }
//            return ResultInfo.success("删除成功", idList);
//        } catch (Exception e) {
//            e.printStackTrace();
//            log.error("删除失败：{}", e.getMessage());
//            log.error("参数：{}", idList);
//            return ResultInfo.error("删除失败");
//        }
//    }
//
//    /**
//     * 根据开始时间和结束时间查询
//     */
//    @RequestMapping("/numberList")
//    public ResultInfo queryList(String ksinsertDate,String jsinsertDate,HttpSession session) {
//        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
//        try {
//            List<psd> list = psdService.queryList1(ksinsertDate ,jsinsertDate);
//            return ResultInfo.success("获取成功", list);
//        } catch (Exception e) {
//            e.printStackTrace();
//            log.error("获取失败：{}", e.getMessage());
//            return ResultInfo.error("错误!");
//        }
//    }
//
//    /**
//     * 打印
//     *
//     * @return ResultInfo
//     */
//    @RequestMapping("/print")
//    public ResultInfo print(@RequestBody HashMap map, HttpSession session, HttpServletResponse response) {
//        try {
//            GsonUtil gsonUtil = new GsonUtil(GsonUtil.toJson(map));
//            List<psd> nlist = GsonUtil.toList(gsonUtil.get("list"), psd.class);
//            List<psd> list=new ArrayList<>();
//            if(nlist != null){
////                list= psdService.getListByPsd(nlist.get(0).getPsd(),nlist.get(0).getDh(),nlist.get(0).getRiqi());
//                list= psdService.getListByPsd(nlist.get(0).getCustomerName());
//            }
//            return ResultInfo.success("成功！",list);
//        } catch (Exception e) {
//            e.printStackTrace();
//            log.error("失败：{}", e.getMessage());
//            return ResultInfo.error("失败！");
//        }
//    }
//    @RequestMapping(value = "/updatesk", method = RequestMethod.POST)
//    public ResultInfo upsk(HttpSession session,String shoukuan ,String orderNumber) {
//        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
//        if( userInfo.getPower().equals("客户")){
//            return ResultInfo.error(401, "无权限");
//        }
//
//        try {
//            psdService.upsk(shoukuan,orderNumber);
//            return ResultInfo.success("成功！",null);
//        } catch (Exception e) {
//            e.printStackTrace();
//            log.error("修改失败：{}", e.getMessage());
//            log.error("参数：{}", userInfo);
//            return ResultInfo.error("修改失败");
//        }
//    }
//    @RequestMapping(value = "/updatewc", method = RequestMethod.POST)
//    public ResultInfo upwc(HttpSession session,String wancheng ,String orderNumber) {
//        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
//        if( userInfo.getPower().equals("客户")){
//            return ResultInfo.error(401, "无权限");
//        }
//
//        try {
//            psdService.upwc(wancheng,orderNumber);
//            return ResultInfo.success("成功！",null);
//        } catch (Exception e) {
//            e.printStackTrace();
//            log.error("修改失败：{}", e.getMessage());
//            log.error("参数：{}", userInfo);
//            return ResultInfo.error("修改失败");
//        }
//    }
//    @RequestMapping(value = "/updatemy", method = RequestMethod.POST)
//    public ResultInfo upmy(HttpSession session,String money ,String orderNumber) {
//        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
//        if(userInfo.getPower().equals("客户")){
//            return ResultInfo.error(401, "无权限");
//        }
//
//        try {
//            psdService.upmy(money,orderNumber);
//            return ResultInfo.success("成功！",null);
//        } catch (Exception e) {
//            e.printStackTrace();
//            log.error("修改失败：{}", e.getMessage());
//            log.error("参数：{}", userInfo);
//            return ResultInfo.error("修改失败");
//        }
//    }
//    @RequestMapping(value = "/updateqy", method = RequestMethod.POST)
//    public ResultInfo upqy(HttpSession session,String quyu ,String orderNumber) {
//        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
//        if( userInfo.getPower().equals("客户")){
//            return ResultInfo.error(401, "无权限");
//        }
//
//        try {
//            psdService.upqy(quyu,orderNumber);
//            return ResultInfo.success("成功！",null);
//        } catch (Exception e) {
//            e.printStackTrace();
//            log.error("修改失败：{}", e.getMessage());
//            log.error("参数：{}", userInfo);
//            return ResultInfo.error("修改失败");
//        }
//    }
//
////    public static void uploadFile(String url, File file) throws Exception {
////        HttpClient httpClient = HttpClients.createDefault();
////        HttpPost httpPost = new HttpPost(url);
////
////        // 设置请求的内容类型为multipart/form-data
////        MultipartEntityBuilder builder = MultipartEntityBuilder.create();
////        builder.addBinaryBody("file", file, ContentType.DEFAULT_BINARY, file.getName());
////
////        // 设置请求体
////        httpPost.setEntity(builder.build());
////
////        // 执行请求并获取响应
////        HttpResponse response = httpClient.execute(httpPost);
////
////        // 打印响应状态和内容
////        System.out.println("Response Status: " + response.getStatusLine().getStatusCode());
////        System.out.println("Response Body: " + EntityUtils.toString(response.getEntity()));
////    }
////
////    public static void main(String[] args) {
////        try {
////            // 替换为你的上传地址和要上传的文件
////            String uploadUrl = "https://huaqunwechar.com:9087/file/upload";
////            File file = new File("path/to/your/file.jpg");
////
////            uploadFile(uploadUrl, file);
////        } catch (Exception e) {
////            e.printStackTrace();
////        }
////    }
//
////    public static void uploadFile(String filePath, String apiUrl) {
////        try {
////            URL url = new URL(apiUrl);
////            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
////            conn.setDoOutput(true);
////            System.out.println("p");
////            conn.setRequestMethod("POST");
////            System.out.println("pj");
////            File file = new File(filePath);
////            FileInputStream fileInputStream = new FileInputStream(file);
////            System.out.println("oo");
////            OutputStream outputStream = conn.getOutputStream();
////            byte[] buffer = new byte[4096];
////            System.out.println("by");
////            int bytesRead = -1;
////
////            while ((bytesRead = fileInputStream.read(buffer)) != -1) {
////                outputStream.write(buffer, 0, bytesRead);
////            }
////            System.out.println("cc");
////            fileInputStream.close();
////            outputStream.close();
////            int responseCode = conn.getResponseCode();
////            System.out.println("Response Code: " + responseCode);
////
////        } catch (Exception e) {
////            e.printStackTrace();
////        }
////    }
////
////    @RequestMapping("/mainUpload")
////    public ResultInfo mainUpload(HttpSession session) {
////
////        System.out.println("1");
////        String filePath = "E:\\yho173_20240516\\工作\\万年县入木电子\\缓存文件夹\\测试公司名称1.jpg";
////        String apiUrl = "https://huaqunwechar.com:9087/file/upload";
////        uploadFile(filePath, apiUrl);
////        System.out.println("2");
////        return null;
////    }
////
////
////    @Controller
////
////    @RequestMapping("goods")
////
////    public class GoodsController {
////
////
////        private Logger logger = Logger.getLogger(GoodsController.class);
////
////        @ResponseBody
////
////        @RequestMapping("upload")
////
////        public String upload(HttpServletRequest request, @RequestParam(value = "file", required = false) MultipartFile file) throws IOException {
////            request.setCharacterEncoding("UTF-8");
////            String user = request.getParameter("user");
////            if (!file.isEmpty()) {
////
////                logger.info("成功获取照片");
////
////                String fileName = file.getOriginalFilename();
////
////                String path = null;
////
////                String type = null;
////
////                type = fileName.indexOf(".") != -1 ? fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length()) : null;
////
////                logger.info("图片初始名称为：" + fileName + " 类型为：" + type);
////
////                if (type != null) {
////
////                    if ("GIF".equals(type.toUpperCase()) || "PNG".equals(type.toUpperCase()) || "JPG".equals(type.toUpperCase())) {
////
////// 项目在容器中实际发布运行的根路径
////
////                        String realPath = request.getSession().getServletContext().getRealPath("/");
////
////// 自定义的文件名称
////
////                        String trueFileName = String.valueOf(System.currentTimeMillis()) + fileName;
////
////// 设置存放图片文件的路径
////
////                        path = realPath + "/uploads/" + trueFileName;
////
////                        logger.info("存放图片文件的路径:" + path);
////
////                        file.transferTo(new File(path));
////
////                        logger.info("文件成功上传到指定目录下");
////
////                    } else {
////
////                        logger.info("不是我们想要的文件类型,请按要求重新上传");
////
////                        return "error";
////
////                    }
////
////                } else {
////
////                    logger.info("文件类型为空");
////
////                    return "error";
////
////                }
////
////            } else {
////
////                logger.info("没有找到相对应的文件");
////
////                return "error";
////
////            }
////
////            return "success";
////
////        }
////
////    }
////
////
////    public class FileUploader {
////        public void upload(String url, File file) throws IOException {
////            HttpClient client = HttpClientBuilder.create().build();
////            HttpPost post = new HttpPost(url);
////            MultipartEntityBuilder builder = MultipartEntityBuilder.create();
////            builder.addPart("file", new FileBody(file, ContentType.DEFAULT_BINARY));
////            HttpEntity entity = builder.build();
////            post.setEntity(entity);
////            HttpResponse response = client.execute(post);         // 处理上传结果     } }
////
////
////        }
////    }
////
////
////        public void main(String[] args) {
////            FileUploader uploader = new FileUploader();
////            try {
////                File file = new File("/huaqun_erqi/");
////                uploader.upload("https://huaqunwechar.com:9087/file/upload", file);
////            } catch (IOException e) {
////                e.printStackTrace();
////            }
////        }
//
//}
//
//
////class FileUploadExample {
////    public static void uploadFile(String targetUrl, String filePath) throws IOException {
////        System.out.println("111");
////        String boundary = Long.toHexString(System.currentTimeMillis()); // 随机边界
////        String CRLF = "\r\n"; // 换行符
////        URL url = new URL(targetUrl);
////        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
////        connection.setDoOutput(true);
////        connection.setRequestMethod("POST");
////        connection.setRequestProperty("Content-Type", "multipart/form-data; boundary=" + boundary);
////        System.out.println("123");
////        try (
////                OutputStream output = connection.getOutputStream();
////                PrintWriter writer = new PrintWriter(new OutputStreamWriter(output, "UTF-8"), true);
////        ) {
////            // 发送文件数据
////            File file = new File(filePath);
////            writer.append("--" + boundary).append(CRLF);
////            writer.append("Content-Disposition: form-data; name=\"file\"; filename=\"" + file.getName() + "\"").append(CRLF);
////            writer.append("Content-Type: " + URLConnection.guessContentTypeFromName(file.getName())).append(CRLF);
////            writer.append(CRLF).flush();
////            System.out.println("456");
////            Files.copy(file.toPath(), output);
////            output.flush(); // 确保文件数据发送完毕
////
////            writer.append(CRLF).flush(); // 结束行
////            writer.append("--" + boundary + "--").append(CRLF);
////        }
////
////        int responseCode = connection.getResponseCode();
////        System.out.println("Response Code: " + responseCode);
////
////        connection.disconnect();
////    }
////
////    public static void main(String[] args) {
////        System.out.println("789");
////        try {
////            String targetUrl = "https://huaqunwechar.com:9087/file/upload"; // 目标上传接口
////            String filePath = "E:\\yho173_20240516\\工作\\万年县入木电子\\缓存文件夹\\测试公司名称1.jpg"; // 本地文件路径
////            uploadFile(targetUrl, filePath);
////        } catch (IOException e) {
////            e.printStackTrace();
////        }
////    }
////}
//
//
////class FileUploader {
////    public static void uploadFile(String filePath, String apiUrl) {
////        try {
////            URL url = new URL(apiUrl);
////            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
////            conn.setDoOutput(true);
////            System.out.println("p");
////            conn.setRequestMethod("POST");
////            System.out.println("pj");
////            File file = new File(filePath);
////            FileInputStream fileInputStream = new FileInputStream(file);
////            System.out.println("oo");
////            OutputStream outputStream = conn.getOutputStream();
////            byte[] buffer = new byte[4096];
////            System.out.println("by");
////            int bytesRead = -1;
////
////            while ((bytesRead = fileInputStream.read(buffer)) != -1) {
////                outputStream.write(buffer, 0, bytesRead);
////            }
////            System.out.println("cc");
////            fileInputStream.close();
////            outputStream.close();
////            int responseCode = conn.getResponseCode();
////            System.out.println("Response Code: " + responseCode);
////
////        } catch (Exception e) {
////            e.printStackTrace();
////        }
////    }
////
////    public static void main(String[] args) {
////        System.out.println("1");
////        String filePath = "E:\\yho173_20240516\\工作\\万年县入木电子\\缓存文件夹\\测试公司名称1.jpg";
////        String apiUrl = "https://huaqunwechar.com:9087/file/upload";
////        uploadFile(filePath, apiUrl);
////        System.out.println("2");
////    }
////}
package com.example.demo.controller;

import com.example.demo.entity.UserInfo;
import com.example.demo.entity.psd;
import com.example.demo.service.PsdService;
import com.example.demo.service.UserInfoService;
import com.example.demo.util.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/psd")
public class PsdController {
    @Autowired
    private UserInfoService userInfoService;
    @Autowired
    private PsdService psdService;

    /**
     * 查询所有
     *
     * @return ResultInfo
     */
    @RequestMapping("/getloginname")
    public ResultInfo loginname(HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
//        try {
//            String name = userInfo.getName();
//            return ResultInfo.success("获取成功", name);
        try {
            String name = userInfo.getName();
//            String company = userInfo.getCompany();
            return ResultInfo.success("获取成功", name);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    /**
     * 查询所有
     *
     * @return ResultInfo
     */
    @RequestMapping("/getloginname1")
    public ResultInfo getloginname1(HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
//        try {
//            String name = userInfo.getName();
//            return ResultInfo.success("获取成功", name);
        try {
//            String name = userInfo.getName();
            String company = userInfo.getCompany();
            return ResultInfo.success("获取成功", company);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    @RequestMapping("/getList")
    public ResultInfo getList(HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        if(userInfo.getPower().equals("玻璃厂")){
            return ResultInfo.error(401, "无权限");
        }
        try {
//            if(userInfo.getPower().equals("客户")) {
//                List<psd> getList=psdService.getListByName(userInfo.getName());
//                return ResultInfo.success("获取成功",getList);
//            }
            if(userInfo.getPower().equals("客户")) {
                List<psd> getList=psdService.getListByName(userInfo.getCompany());
                return ResultInfo.success("获取成功",getList);
            } else {
                List<psd> getList = psdService.getList();
                return ResultInfo.success("获取成功", getList);
            }
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }
    @RequestMapping("/getListByName")
    public ResultInfo getListByName(HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        if(userInfo.getPower().equals("玻璃厂")){
            return ResultInfo.error(401, "无权限");
        }
//        try {
//            List<psd> getList = psdService.getListByName(userInfo.getName());
        try {
            List<psd> getList = psdService.getListByName(userInfo.getCompany());
            return ResultInfo.success("获取成功", getList);
//            return ResultInfo.success("获取成功", getList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    /**
     * 根据姓名和部门查询
     *
     * @return ResultInfo
     */
    @RequestMapping("/queryList")
    public ResultInfo queryList(String orderNumber, String customerName, String quyu, String anzhuangAddress,
                                String customerOrder,
                                String ksinsertDate,
                                String jsinsertDate,
                                String wancheng,
                                String kucun,
                                HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        try {
            List<psd> list = psdService.queryList(orderNumber, customerName, quyu, anzhuangAddress, customerOrder,ksinsertDate,
                    jsinsertDate,
                    wancheng,
                    kucun);
            return ResultInfo.success("获取成功", list);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    /**
     * 修改
     */
    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public ResultInfo update(@RequestBody String updateJson, HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
//        if(userInfo.getPower().equals("客户")){
//            return ResultInfo.error(401, "无权限");
//        }
        psd psd = null;
        try {
            psd = DecodeUtil.decodeToJson(updateJson, psd.class);
            String wancheng = psdService.getListBydjbh(psd.getId());
            System.out.println(wancheng);
            if(userInfo.getPower().equals("客户") && wancheng.isEmpty()){
                System.out.println("客户");
                psdService.update(psd);
                return ResultInfo.success("修改成功", psd);
            }else if(!userInfo.getPower().equals("客户") && !wancheng.equals("完成") || userInfo.getPower().equals("超级管理员") || userInfo.getPower().equals("管理员")) {
                System.out.println("----不是客户----");
                psdService.update(psd);
                return ResultInfo.success("修改成功", psd);
            }else{
                return ResultInfo.error("修改失败订单状态完成");
            }
        } catch (Exception e) {
            e.printStackTrace();
            log.error("修改失败：{}", e.getMessage());
            log.error("参数：{}", userInfo);
            return ResultInfo.error("修改失败");
        }
    }

    /**
     * 添加
     */
//    @RequestMapping("/add")
//    public ResultInfo add(@RequestBody HashMap map, HttpSession session) {
//        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
//        GsonUtil gsonUtil = new GsonUtil(GsonUtil.toJson(map));
//        if (userInfo.getPower().equals("玻璃厂")) {
//            return ResultInfo.error(401, "无权限");
//        }
//        try {
//            psd psd = GsonUtil.toEntity(gsonUtil.get("addInfo"), psd.class);
////            System.out.println("===============");
////            System.out.println(psd);
//            psd.setCustomerNeedImg1("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-01.jpg");
//            psd.setCustomerNeedImg2("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-02.jpg");
//            psd.setCustomerNeedImg3("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-03.jpg");
//            psd.setCustomerNeedImg4("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-04.jpg");
//            psd.setCustomerNeedImg5("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-05.jpg");
//            psd.setCustomerNeedImg6("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-06.jpg");
//            psd.setCustomerNeedImg7("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-07.jpg");
//            psd.setCustomerNeedImg8("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-08.jpg");
//            psd.setCustomerNeedText2("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-09.jpg");
//            psd.setPeihuoImg1("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-10.jpg");
//            psd.setPeihuoImg2("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-11.jpg");
//            psd.setPeihuoImg3("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-12.jpg");
//            psd.setPeihuoImg4("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-13.jpg");
//            psd.setPeihuoImg5("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-14.jpg");
//            psd.setPeihuoImg6("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-15.jpg");
//            psd.setPeihuoImg7("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-16.jpg");
//            psd.setPeihuoImg8("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-17.jpg");
//            psd.setPeisongImg1("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-18.jpg");
//            psd.setPeisongImg2("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-19.jpg");
//            psd.setPeisongImg3("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-20.jpg");
//            psd.setPeisongImg4("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-21.jpg");
//            psd.setPeisongImg5("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-22.jpg");
//            psd.setPeisongImg6("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-23.jpg");
//            psd.setPeisongImg7("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-24.jpg");
//            psd.setPeisongImg8("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-25.jpg");
//            psd.setKucunImg1("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-26.jpg");
//            psd.setKucunImg2("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-27.jpg");
//            psd.setKucunImg3("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-28.jpg");
//            psd.setKucunImg4("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-29.jpg");
//            psd.setKucunImg5("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-30.jpg");
//            psd.setKucunImg6("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-31.jpg");
//            psd.setKucunImg7("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-32.jpg");
//            psd.setKucunImg8("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-33.jpg");
//            psd.setWenjianImg1("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-34.jpg");
//            psd.setWenjianImg2("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-35.jpg");
//            psd.setWenjianImg3("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-36.jpg");
//            psd.setWenjianImg4("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-37.jpg");
//            psd.setWenjianImg5("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-38.jpg");
//            psd.setWenjianImg6("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-39.jpg");
//            psd.setWenjianImg7("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-40.jpg");
//            psd.setWenjianImg8("http://yhocn.cn:9076/huaqun_erqi/" + psd.getOrderNumber()+ "-41.jpg");
//
//            psd = psdService.add(psd);
//            if (StringUtils.isNotNull(psd)) {
//                return ResultInfo.success("添加成功", psd);
//            } else {
//                return ResultInfo.success("添加失败", null);
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//            log.error("添加失败：{}", e.getMessage());
//            log.error("参数：{}", map);
//            return ResultInfo.error("添加失败");
//        }
//    }
//    @RequestMapping("/add")
//    public ResultInfo add(@RequestBody HashMap map, HttpSession session) {
//        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
//        GsonUtil gsonUtil = new GsonUtil(GsonUtil.toJson(map));
//        if (userInfo.getPower().equals("玻璃厂")) {
//            return ResultInfo.error(401, "无权限");
//        }
//        try {
//            psd psd = GsonUtil.toEntity(gsonUtil.get("addInfo"), psd.class);
//            psd.setPeihuoImg1("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-10.jpg");
//            psd.setPeihuoImg2("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-11.jpg");
//            psd.setPeihuoImg3("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-12.jpg");
//            psd.setPeihuoImg4("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-13.jpg");
//            psd.setPeihuoImg5("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-14.jpg");
//            psd.setPeisongImg1("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-18.jpg");
//            psd.setPeisongImg2("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-19.jpg");
//            psd.setPeisongImg3("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-20.jpg");
//
////            ---------------填入空串
//            psd.setCustomerNeedImg1("-");
//            psd.setCustomerNeedImg2("-");
//            psd.setCustomerNeedImg3("-");
//            psd.setCustomerNeedImg4("-");
//            psd.setCustomerNeedImg5("-");
//            psd.setCustomerNeedImg6("-");
//            psd.setCustomerNeedImg7("-");
//            psd.setCustomerNeedImg8("-");
//            psd.setCustomerNeedImg1Renyuan("-");
//            psd.setCustomerNeedImg1Riqi("-");
//
//            psd.setCustomerNeedText2("-");
//            psd.setCustomerNeedText2Riqi("-");
//            psd.setCustomerNeedText2Renyuan("-");
//            psd.setSonghuoDanhao("-");
//            psd.setSonghuoDanhaoRiqi("-");
//            psd.setSonghuoDanhaoRenyuan("-");
////            psd.setPeihuoImg1Renyuan("-");
////            psd.setPeihuoImg1Riqi("-");
////            psd.setPeihuoImg2Riqi("-");
////            psd.setPeihuoImg2Renyuan("-");
////            psd.setPeihuoImg3Riqi("-");
////            psd.setPeihuoImg3Renyuan("-");
////            psd.setPeihuoImg4Riqi("-");
////            psd.setPeihuoImg4Renyuan("-");
////            psd.setPeihuoImg5Riqi("-");
////            psd.setPeihuoImg5Renyuan("-");
////            psd.setPeisongImg1Renyuan("-");
////            psd.setPeisongImg1Riqi("-");
////            psd.setPeisongImg2Renyuan("-");
////            psd.setPeisongImg2Riqi("-");
////            psd.setPeisongImg3Renyuan("-");
////            psd.setPeisongImg3Riqi("-");
//            psd.setBeizhu("-");
//            psd.setBeizhuRenyuan("-");
//            psd.setBeizhuRiqi("-");
//            psd.setKucunText("-");
//            psd.setKucunTextRenyuan("-");
//            psd.setKucunTextRiqi("-");
//            psd.setKucunImg1("-");
//            psd.setKucunImg1Renyuan("-");
//            psd.setKucunImg1Riqi("-");
//            psd.setKucunImg2("-");
//            psd.setKucunImg2Renyuan("-");
//            psd.setKucunImg2Riqi("-");
//            psd.setKucunImg3("-");
//            psd.setKucunImg3Renyuan("-");
//            psd.setKucunImg3Riqi("-");
//            psd.setCustomerNeedImg2("-");
//            psd.setCustomerNeedImg3("-");
//            psd.setCustomerNeedImg4("-");
//            psd.setCustomerNeedImg5("-");
//            psd.setCustomerNeedImg6("-");
//            psd.setCustomerNeedImg7("-");
//            psd.setCustomerNeedImg8("-");
//            psd.setPeihuoImg6("-");
//            psd.setPeihuoImg7("-");
//            psd.setPeihuoImg8("-");
//            psd.setPeisongImg4("-");
//            psd.setPeisongImg5("-");
//            psd.setPeisongImg6("-");
//            psd.setPeisongImg7("-");
//            psd.setPeisongImg8("-");
//            psd.setKucunImg4("-");
//            psd.setKucunImg5("-");
//            psd.setKucunImg6("-");
//            psd.setKucunImg7("-");
//            psd.setKucunImg8("-");
//            psd.setWenjianImg1("-");
//            psd.setWenjianImg2("-");
//            psd.setWenjianImg3("-");
//            psd.setWenjianImg4("-");
//            psd.setWenjianImg5("-");
//            psd.setWenjianImg6("-");
//            psd.setWenjianImg7("-");
//            psd.setWenjianImg8("-");
//            psd.setWenjianImg1Renyuan("-");
//            psd.setWenjianImg1Riqi("-");
//
////            ---------------
//            psd = psdService.add(psd);
//            if (StringUtils.isNotNull(psd)) {
//                return ResultInfo.success("添加成功", psd);
//            } else {
//                return ResultInfo.success("添加失败", null);
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//            log.error("添加失败：{}", e.getMessage());
//            log.error("参数：{}", map);
//            return ResultInfo.error("添加失败");
//        }
//    }
    @RequestMapping("/add")
    public ResultInfo add(@RequestBody HashMap map, HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        GsonUtil gsonUtil = new GsonUtil(GsonUtil.toJson(map));
        if (userInfo.getPower().equals("玻璃厂")) {
            return ResultInfo.error(401, "无权限");
        }
        try {
            psd psd = GsonUtil.toEntity(gsonUtil.get("addInfo"), psd.class);
            psd.setPeihuoImg1("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-10.jpg");
            psd.setPeihuoImg2("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-11.jpg");
            psd.setPeihuoImg3("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-12.jpg");
            psd.setPeihuoImg4("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-13.jpg");
            psd.setPeihuoImg5("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-14.jpg");
            psd.setPeisongImg1("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-18.jpg");
            psd.setPeisongImg2("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-19.jpg");
            psd.setPeisongImg3("http://huaqunwechar.com:9088/huaqun_erqi/" + psd.getOrderNumber()+ "-20.jpg");

//            ---------------填入空串
            psd.setCustomerNeedImg1("-");
            psd.setCustomerNeedImg2("-");
            psd.setCustomerNeedImg3("-");
            psd.setCustomerNeedImg4("-");
            psd.setCustomerNeedImg5("-");
            psd.setCustomerNeedImg6("-");
            psd.setCustomerNeedImg7("-");
            psd.setCustomerNeedImg8("-");
            psd.setCustomerNeedImg1Renyuan("-");
            psd.setCustomerNeedImg1Riqi("-");

            psd.setCustomerNeedText2("-");
            psd.setCustomerNeedText2Riqi("-");
            psd.setCustomerNeedText2Renyuan("-");
//            psd.setSonghuoDanhao("-");
//            psd.setSonghuoDanhaoRiqi("-");
//            psd.setSonghuoDanhaoRenyuan("-");
//            psd.setPeihuoImg1Renyuan("-");
//            psd.setPeihuoImg1Riqi("-");
//            psd.setPeihuoImg2Riqi("-");
//            psd.setPeihuoImg2Renyuan("-");
//            psd.setPeihuoImg3Riqi("-");
//            psd.setPeihuoImg3Renyuan("-");
//            psd.setPeihuoImg4Riqi("-");
//            psd.setPeihuoImg4Renyuan("-");
//            psd.setPeihuoImg5Riqi("-");
//            psd.setPeihuoImg5Renyuan("-");
//            psd.setPeisongImg1Renyuan("-");
//            psd.setPeisongImg1Riqi("-");
//            psd.setPeisongImg2Renyuan("-");
//            psd.setPeisongImg2Riqi("-");
//            psd.setPeisongImg3Renyuan("-");
//            psd.setPeisongImg3Riqi("-");
            psd.setBeizhu("-");
            psd.setBeizhuRenyuan("-");
            psd.setBeizhuRiqi("-");
            psd.setKucunText("-");
//            psd.setKucunTextRenyuan("-");
//            psd.setKucunTextRiqi("-");
            psd.setKucunImg1("-");
            psd.setKucunImg1Renyuan("-");
            psd.setKucunImg1Riqi("-");
            psd.setKucunImg2("-");
            psd.setKucunImg2Renyuan("-");
            psd.setKucunImg2Riqi("-");
            psd.setKucunImg3("-");
            psd.setKucunImg3Renyuan("-");
            psd.setKucunImg3Riqi("-");
            psd.setCustomerNeedImg2("-");
            psd.setCustomerNeedImg3("-");
            psd.setCustomerNeedImg4("-");
            psd.setCustomerNeedImg5("-");
            psd.setCustomerNeedImg6("-");
            psd.setCustomerNeedImg7("-");
            psd.setCustomerNeedImg8("-");
            psd.setPeihuoImg6("-");
            psd.setPeihuoImg7("-");
            psd.setPeihuoImg8("-");
            psd.setPeisongImg4("-");
            psd.setPeisongImg5("-");
            psd.setPeisongImg6("-");
            psd.setPeisongImg7("-");
            psd.setPeisongImg8("-");
            psd.setKucunImg4("-");
            psd.setKucunImg5("-");
            psd.setKucunImg6("-");
            psd.setKucunImg7("-");
            psd.setKucunImg8("-");
            psd.setWenjianImg1("-");
            psd.setWenjianImg2("-");
            psd.setWenjianImg3("-");
            psd.setWenjianImg4("-");
            psd.setWenjianImg5("-");
            psd.setWenjianImg6("-");
            psd.setWenjianImg7("-");
            psd.setWenjianImg8("-");
            psd.setWenjianImg1Renyuan("-");
            psd.setWenjianImg1Riqi("-");

//            ---------------
            psd = psdService.add(psd);
            if (StringUtils.isNotNull(psd)) {
                return ResultInfo.success("添加成功", psd);
            } else {
                return ResultInfo.success("添加失败", null);
            }
        } catch (Exception e) {
            e.printStackTrace();
            log.error("添加失败：{}", e.getMessage());
            log.error("参数：{}", map);
            return ResultInfo.error("添加失败");
        }
    }
    /**
     * 删除
     *
     * @param map
     * @return ResultInfo
     */
    @RequestMapping("/delete")
    public ResultInfo delete(@RequestBody HashMap map, HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        GsonUtil gsonUtil = new GsonUtil(GsonUtil.toJson(map));
        List<Integer> idList = GsonUtil.toList(gsonUtil.get("idList"), Integer.class);
        if (!(userInfo.getPower().equals("管理员")||userInfo.getPower().equals("超级管理员"))) {
            return ResultInfo.error(401, "无权限");
        }
        try {
            for (int i = 0; i < idList.size(); i++) {
                int this_id = idList.get(i);
                psdService.delete(Collections.singletonList(this_id));
            }
            return ResultInfo.success("删除成功", idList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("删除失败：{}", e.getMessage());
            log.error("参数：{}", idList);
            return ResultInfo.error("删除失败");
        }
    }

    /**
     * 根据开始时间和结束时间查询
     */
    @RequestMapping("/numberList")
    public ResultInfo queryList(String ksinsertDate,String jsinsertDate,HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        try {
            List<psd> list = psdService.queryList1(ksinsertDate ,jsinsertDate);
            return ResultInfo.success("获取成功", list);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    /**
     * 打印
     *
     * @return ResultInfo
     */
    @RequestMapping("/print")
    public ResultInfo print(@RequestBody HashMap map, HttpSession session, HttpServletResponse response) {
        try {
            GsonUtil gsonUtil = new GsonUtil(GsonUtil.toJson(map));
            List<psd> nlist = GsonUtil.toList(gsonUtil.get("list"), psd.class);
            List<psd> list=new ArrayList<>();
            if(nlist != null){
//                list= psdService.getListByPsd(nlist.get(0).getPsd(),nlist.get(0).getDh(),nlist.get(0).getRiqi());
                list= psdService.getListByPsd(nlist.get(0).getCustomerName());
            }
            return ResultInfo.success("成功！",list);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("失败：{}", e.getMessage());
            return ResultInfo.error("失败！");
        }
    }
    @RequestMapping(value = "/updatesk", method = RequestMethod.POST)
    public ResultInfo upsk(HttpSession session,String shoukuan ,String orderNumber) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        if( userInfo.getPower().equals("客户")){
            return ResultInfo.error(401, "无权限");
        }

        try {
            psdService.upsk(shoukuan,orderNumber);
            return ResultInfo.success("成功！",null);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("修改失败：{}", e.getMessage());
            log.error("参数：{}", userInfo);
            return ResultInfo.error("修改失败");
        }
    }
    @RequestMapping(value = "/updatewc", method = RequestMethod.POST)
    public ResultInfo upwc(HttpSession session,String wancheng ,String orderNumber) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        if( userInfo.getPower().equals("客户")){
            return ResultInfo.error(401, "无权限");
        }

        try {
            psdService.upwc(wancheng,orderNumber);
            return ResultInfo.success("成功！",null);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("修改失败：{}", e.getMessage());
            log.error("参数：{}", userInfo);
            return ResultInfo.error("修改失败");
        }
    }
    @RequestMapping(value = "/updatemy", method = RequestMethod.POST)
    public ResultInfo upmy(HttpSession session,String money ,String orderNumber) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        if(userInfo.getPower().equals("客户")){
            return ResultInfo.error(401, "无权限");
        }

        try {
            psdService.upmy(money,orderNumber);
            return ResultInfo.success("成功！",null);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("修改失败：{}", e.getMessage());
            log.error("参数：{}", userInfo);
            return ResultInfo.error("修改失败");
        }
    }
    @RequestMapping(value = "/updateqy", method = RequestMethod.POST)
    public ResultInfo upqy(HttpSession session,String quyu ,String orderNumber) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        if( userInfo.getPower().equals("客户")){
            return ResultInfo.error(401, "无权限");
        }

        try {
            psdService.upqy(quyu,orderNumber);
            return ResultInfo.success("成功！",null);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("修改失败：{}", e.getMessage());
            log.error("参数：{}", userInfo);
            return ResultInfo.error("修改失败");
        }
    }

//    public static void uploadFile(String url, File file) throws Exception {
//        HttpClient httpClient = HttpClients.createDefault();
//        HttpPost httpPost = new HttpPost(url);
//
//        // 设置请求的内容类型为multipart/form-data
//        MultipartEntityBuilder builder = MultipartEntityBuilder.create();
//        builder.addBinaryBody("file", file, ContentType.DEFAULT_BINARY, file.getName());
//
//        // 设置请求体
//        httpPost.setEntity(builder.build());
//
//        // 执行请求并获取响应
//        HttpResponse response = httpClient.execute(httpPost);
//
//        // 打印响应状态和内容
//        System.out.println("Response Status: " + response.getStatusLine().getStatusCode());
//        System.out.println("Response Body: " + EntityUtils.toString(response.getEntity()));
//    }
//
//    public static void main(String[] args) {
//        try {
//            // 替换为你的上传地址和要上传的文件
//            String uploadUrl = "https://huaqunwechar.com:9087/file/upload";
//            File file = new File("path/to/your/file.jpg");
//
//            uploadFile(uploadUrl, file);
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }

//    public static void uploadFile(String filePath, String apiUrl) {
//        try {
//            URL url = new URL(apiUrl);
//            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
//            conn.setDoOutput(true);
//            System.out.println("p");
//            conn.setRequestMethod("POST");
//            System.out.println("pj");
//            File file = new File(filePath);
//            FileInputStream fileInputStream = new FileInputStream(file);
//            System.out.println("oo");
//            OutputStream outputStream = conn.getOutputStream();
//            byte[] buffer = new byte[4096];
//            System.out.println("by");
//            int bytesRead = -1;
//
//            while ((bytesRead = fileInputStream.read(buffer)) != -1) {
//                outputStream.write(buffer, 0, bytesRead);
//            }
//            System.out.println("cc");
//            fileInputStream.close();
//            outputStream.close();
//            int responseCode = conn.getResponseCode();
//            System.out.println("Response Code: " + responseCode);
//
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }
//
//    @RequestMapping("/mainUpload")
//    public ResultInfo mainUpload(HttpSession session) {
//
//        System.out.println("1");
//        String filePath = "E:\\yho173_20240516\\工作\\万年县入木电子\\缓存文件夹\\测试公司名称1.jpg";
//        String apiUrl = "https://huaqunwechar.com:9087/file/upload";
//        uploadFile(filePath, apiUrl);
//        System.out.println("2");
//        return null;
//    }
//
//
//    @Controller
//
//    @RequestMapping("goods")
//
//    public class GoodsController {
//
//
//        private Logger logger = Logger.getLogger(GoodsController.class);
//
//        @ResponseBody
//
//        @RequestMapping("upload")
//
//        public String upload(HttpServletRequest request, @RequestParam(value = "file", required = false) MultipartFile file) throws IOException {
//            request.setCharacterEncoding("UTF-8");
//            String user = request.getParameter("user");
//            if (!file.isEmpty()) {
//
//                logger.info("成功获取照片");
//
//                String fileName = file.getOriginalFilename();
//
//                String path = null;
//
//                String type = null;
//
//                type = fileName.indexOf(".") != -1 ? fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length()) : null;
//
//                logger.info("图片初始名称为：" + fileName + " 类型为：" + type);
//
//                if (type != null) {
//
//                    if ("GIF".equals(type.toUpperCase()) || "PNG".equals(type.toUpperCase()) || "JPG".equals(type.toUpperCase())) {
//
//// 项目在容器中实际发布运行的根路径
//
//                        String realPath = request.getSession().getServletContext().getRealPath("/");
//
//// 自定义的文件名称
//
//                        String trueFileName = String.valueOf(System.currentTimeMillis()) + fileName;
//
//// 设置存放图片文件的路径
//
//                        path = realPath + "/uploads/" + trueFileName;
//
//                        logger.info("存放图片文件的路径:" + path);
//
//                        file.transferTo(new File(path));
//
//                        logger.info("文件成功上传到指定目录下");
//
//                    } else {
//
//                        logger.info("不是我们想要的文件类型,请按要求重新上传");
//
//                        return "error";
//
//                    }
//
//                } else {
//
//                    logger.info("文件类型为空");
//
//                    return "error";
//
//                }
//
//            } else {
//
//                logger.info("没有找到相对应的文件");
//
//                return "error";
//
//            }
//
//            return "success";
//
//        }
//
//    }
//
//
//    public class FileUploader {
//        public void upload(String url, File file) throws IOException {
//            HttpClient client = HttpClientBuilder.create().build();
//            HttpPost post = new HttpPost(url);
//            MultipartEntityBuilder builder = MultipartEntityBuilder.create();
//            builder.addPart("file", new FileBody(file, ContentType.DEFAULT_BINARY));
//            HttpEntity entity = builder.build();
//            post.setEntity(entity);
//            HttpResponse response = client.execute(post);         // 处理上传结果     } }
//
//
//        }
//    }
//
//
//        public void main(String[] args) {
//            FileUploader uploader = new FileUploader();
//            try {
//                File file = new File("/huaqun_erqi/");
//                uploader.upload("https://huaqunwechar.com:9087/file/upload", file);
//            } catch (IOException e) {
//                e.printStackTrace();
//            }
//        }

}


//class FileUploadExample {
//    public static void uploadFile(String targetUrl, String filePath) throws IOException {
//        System.out.println("111");
//        String boundary = Long.toHexString(System.currentTimeMillis()); // 随机边界
//        String CRLF = "\r\n"; // 换行符
//        URL url = new URL(targetUrl);
//        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
//        connection.setDoOutput(true);
//        connection.setRequestMethod("POST");
//        connection.setRequestProperty("Content-Type", "multipart/form-data; boundary=" + boundary);
//        System.out.println("123");
//        try (
//                OutputStream output = connection.getOutputStream();
//                PrintWriter writer = new PrintWriter(new OutputStreamWriter(output, "UTF-8"), true);
//        ) {
//            // 发送文件数据
//            File file = new File(filePath);
//            writer.append("--" + boundary).append(CRLF);
//            writer.append("Content-Disposition: form-data; name=\"file\"; filename=\"" + file.getName() + "\"").append(CRLF);
//            writer.append("Content-Type: " + URLConnection.guessContentTypeFromName(file.getName())).append(CRLF);
//            writer.append(CRLF).flush();
//            System.out.println("456");
//            Files.copy(file.toPath(), output);
//            output.flush(); // 确保文件数据发送完毕
//
//            writer.append(CRLF).flush(); // 结束行
//            writer.append("--" + boundary + "--").append(CRLF);
//        }
//
//        int responseCode = connection.getResponseCode();
//        System.out.println("Response Code: " + responseCode);
//
//        connection.disconnect();
//    }
//
//    public static void main(String[] args) {
//        System.out.println("789");
//        try {
//            String targetUrl = "https://huaqunwechar.com:9087/file/upload"; // 目标上传接口
//            String filePath = "E:\\yho173_20240516\\工作\\万年县入木电子\\缓存文件夹\\测试公司名称1.jpg"; // 本地文件路径
//            uploadFile(targetUrl, filePath);
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//    }
//}


//class FileUploader {
//    public static void uploadFile(String filePath, String apiUrl) {
//        try {
//            URL url = new URL(apiUrl);
//            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
//            conn.setDoOutput(true);
//            System.out.println("p");
//            conn.setRequestMethod("POST");
//            System.out.println("pj");
//            File file = new File(filePath);
//            FileInputStream fileInputStream = new FileInputStream(file);
//            System.out.println("oo");
//            OutputStream outputStream = conn.getOutputStream();
//            byte[] buffer = new byte[4096];
//            System.out.println("by");
//            int bytesRead = -1;
//
//            while ((bytesRead = fileInputStream.read(buffer)) != -1) {
//                outputStream.write(buffer, 0, bytesRead);
//            }
//            System.out.println("cc");
//            fileInputStream.close();
//            outputStream.close();
//            int responseCode = conn.getResponseCode();
//            System.out.println("Response Code: " + responseCode);
//
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }
//
//    public static void main(String[] args) {
//        System.out.println("1");
//        String filePath = "E:\\yho173_20240516\\工作\\万年县入木电子\\缓存文件夹\\测试公司名称1.jpg";
//        String apiUrl = "https://huaqunwechar.com:9087/file/upload";
//        uploadFile(filePath, apiUrl);
//        System.out.println("2");
//    }
//}

