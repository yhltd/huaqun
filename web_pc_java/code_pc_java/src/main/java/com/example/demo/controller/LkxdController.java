package com.example.demo.controller;

import com.example.demo.entity.UserInfo;
import com.example.demo.entity.blxd;
import com.example.demo.entity.ddxd;
import com.example.demo.entity.lkxd;
import com.example.demo.service.LkxdService;
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
@RequestMapping("/lkxd")
public class LkxdController {
    @Autowired
    private UserInfoService userInfoService;
    @Autowired
    private LkxdService lkxdService;
    /**
     * 查询所有
     *
     * @return ResultInfo
     */
    @RequestMapping("/getList")
    public ResultInfo getList(HttpSession session,String khmc) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
//        UserInfo userInfo1 = GsonUtil.toEntity(SessionUtil.getCompany(session).toString(), UserInfo.class);
        if(userInfo.getPower().equals("玻璃厂")){
            return ResultInfo.error(401, "无权限");
        }
        try {
//            if(userInfo.getPower().equals("客户")){
//               userInfo1.setCompany(khmc);
//               List<lkxd> getListByKeHU = lkxdService.queryPinYin(khmc);
//               return  ResultInfo.success("获取成功",getListByKeHU);
//            }
            if(userInfo.getPower().equals("客户")) {
                List<lkxd> getList = lkxdService.getListName(userInfo.getName());
                return ResultInfo.success("获取成功", getList);
            } else {
                List<lkxd> getList = lkxdService.getList();
                return ResultInfo.success("获取成功", getList);
            }
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
    public ResultInfo queryList(String customerNumber, String customerName,String installAddress,String wancheng, String ksinsertDate,
                                String jsinsertDate
                                , HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        if(userInfo.getPower().equals("玻璃厂")){
            return ResultInfo.error(401, "无权限");
        }
        try {
            List<lkxd> list = lkxdService.queryList(customerNumber, customerName, installAddress, wancheng, ksinsertDate,jsinsertDate);
            return ResultInfo.success("获取成功", list);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    /**
     * 根据姓名 查简码
     *
     * @return ResultInfo
     */
    @RequestMapping("/queryPinYin")
    public ResultInfo queryPinYin(String customerName, HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        if(userInfo.getPower().equals("玻璃厂")){
            return ResultInfo.error(401, "无权限");
        }
        try {
            List<lkxd> list = lkxdService.queryPinYin(customerName);
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
        if(userInfo.getPower().equals("玻璃厂")){
            return ResultInfo.error(401, "无权限");
        }
        lkxd lkxd = null;
        try {
            lkxd = DecodeUtil.decodeToJson(updateJson, lkxd.class);
            String wancheng=lkxdService.getListOrderNumber(lkxd.getId());
            if(!wancheng.equals("已审验") && !wancheng.equals("完成") || userInfo.getPower().equals("超级管理员") || userInfo.getPower().equals("管理员")) {
                if (lkxdService.update(lkxd)) {
                    return ResultInfo.success("修改成功", lkxd);
                } else {
                    return ResultInfo.success("修改失败", lkxd);
                }
            }else{
            return ResultInfo.error("修改失败订单状态已完成或已审验");
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
    @RequestMapping("/add")
    public ResultInfo add(@RequestBody HashMap map, HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        GsonUtil gsonUtil = new GsonUtil(GsonUtil.toJson(map));
        if(userInfo.getPower().equals("玻璃厂")){
            return ResultInfo.error(401, "无权限");
        }
        try {
            lkxd lkxd = GsonUtil.toEntity(gsonUtil.get("addInfo"), lkxd.class);
            blxd blxd = GsonUtil.toEntity(gsonUtil.get("addInfo"), blxd.class);
            lkxd = lkxdService.add(lkxd);
            blxd = lkxdService.addBlxd(blxd);
            if (StringUtils.isNotNull(lkxd)) {
                return ResultInfo.success("添加成功", lkxd);
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
    public ResultInfo delete(@RequestBody HashMap map,HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        GsonUtil gsonUtil = new GsonUtil(GsonUtil.toJson(map));
        List<Integer> idList = GsonUtil.toList(gsonUtil.get("idList"), Integer.class);
        if(!(userInfo.getPower().equals("管理员")||userInfo.getPower().equals("超级管理员"))){
            return ResultInfo.error(401, "无权限");
        }
        try {
            for(int i=0; i<idList.size(); i++){
                int this_id = idList.get(i);
                lkxdService.delete(Collections.singletonList(this_id));
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
     * 打印
     *
     * @return ResultInfo
     */
    @RequestMapping("/print")
    public ResultInfo print(@RequestBody HashMap map, HttpSession session, HttpServletResponse response) {
        try {
            GsonUtil gsonUtil = new GsonUtil(GsonUtil.toJson(map));
            List<lkxd> nlist = GsonUtil.toList(gsonUtil.get("list"), lkxd.class);
            List<lkxd> list=new ArrayList<>();
            if(nlist != null){
                list= lkxdService.getListByKhmc(nlist.get(0).getCustomerName(),nlist.get(0).getInsertDate(),nlist.get(0).getOrderNumber());
            }
            return ResultInfo.success("成功！",list);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("失败：{}", e.getMessage());
            return ResultInfo.error("失败！");
        }
    }

    @RequestMapping(value = "/updatewc", method = RequestMethod.POST)
    public ResultInfo updatewc(HttpSession session,String wancheng ,int id) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        if(userInfo.getPower().equals("玻璃厂")){
            return ResultInfo.error(401, "无权限");
        }

        try {
            lkxdService.updatewc(wancheng,id);
            return ResultInfo.success("成功！",null);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("修改失败：{}", e.getMessage());
            log.error("参数：{}", userInfo);
            return ResultInfo.error("修改失败");
        }
    }

}