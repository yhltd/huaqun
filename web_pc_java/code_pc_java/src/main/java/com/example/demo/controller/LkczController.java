package com.example.demo.controller;

import com.example.demo.entity.UserInfo;
import com.example.demo.entity.ddxd;
import com.example.demo.entity.lkcz;
import com.example.demo.service.LkczpzService;
import com.example.demo.service.UserInfoService;
import com.example.demo.util.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/lkcz")
public class LkczController {
    @Autowired
    private UserInfoService userInfoService;
    @Autowired
    private LkczpzService lkczpzService;
    /**
     * 查询所有
     *
     * @return ResultInfo
     */
    @RequestMapping("/getList")
    public ResultInfo getList(HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        if(userInfo.getPower().equals("客户")||userInfo.getPower().equals("玻璃厂")){
            return ResultInfo.error(401, "无权限");
        }
        try {
            List<lkcz> getList = lkczpzService.getList();
            return ResultInfo.success("获取成功", getList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    /**
     * 根据客户名称和订单号查询
     *
     * @return ResultInfo
     */
    @RequestMapping("/queryList")
    public ResultInfo queryList(String lkxh, HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        try {
            List<lkcz> list = lkczpzService.queryList(lkxh);
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
        if(!userInfo.getPower().equals("超级管理员")){
            return ResultInfo.error(401, "无权限");
        }
        lkcz lkcz = null;
        try {
            lkcz = DecodeUtil.decodeToJson(updateJson, lkcz.class);
            if (lkczpzService.update(lkcz)) {
                return ResultInfo.success("修改成功", lkcz);
            } else {
                return ResultInfo.success("修改失败", lkcz);
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
        if(!userInfo.getPower().equals("超级管理员")){
            return ResultInfo.error(401, "无权限");
        }
        try {
            lkcz lkcz = GsonUtil.toEntity(gsonUtil.get("addInfo"), lkcz.class);
            lkcz = lkczpzService.add(lkcz);
            if (StringUtils.isNotNull(lkcz)) {
                return ResultInfo.success("添加成功", lkcz);
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
        if(!userInfo.getPower().equals("超级管理员")){
            return ResultInfo.error(401, "无权限");
        }
        try {
            for(int i=0; i<idList.size(); i++){
                int this_id = idList.get(i);
                lkczpzService.delete(Collections.singletonList(this_id));
            }
            return ResultInfo.success("删除成功", idList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("删除失败：{}", e.getMessage());
            log.error("参数：{}", idList);
            return ResultInfo.error("删除失败");
        }
    }

}