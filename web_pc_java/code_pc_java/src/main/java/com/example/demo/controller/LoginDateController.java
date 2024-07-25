package com.example.demo.controller;

import com.example.demo.entity.*;
import com.example.demo.service.LoginDateService;
import com.example.demo.util.GsonUtil;
import com.example.demo.util.ResultInfo;
import com.example.demo.util.SessionUtil;
import com.example.demo.util.StringUtils;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;

/**
 * @author hui
 * @date 2024/7/24 10:07
 */
@Slf4j
@RestController
@RequestMapping("/logindate")
public class LoginDateController {
    @Autowired
    LoginDateService loginDateService;
    @RequestMapping("/add")
    public ResultInfo add(@RequestBody HashMap <String, String> requestData, HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        String userName = requestData.get("userName");
        String name = requestData.get("name");
        String loginDate = requestData.get("loginDate");
        try {
            boolean a = loginDateService.add(userName,name,loginDate);
            if (StringUtils.isNotNull(a)) {
                return ResultInfo.success("添加成功",true);
            } else {
                return ResultInfo.success("添加失败", null);
            }
        } catch (Exception e) {
            e.printStackTrace();
            log.error("添加失败：{}", e.getMessage());
            log.error("参数：{}", requestData);
            return ResultInfo.error("添加失败");
        }
    }
    @RequestMapping("/getList")
    public ResultInfo getList(HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        if(!userInfo.getPower().equals("超级管理员")){
            return ResultInfo.error(401, "无权限");
        }
        try {
            List<loginDate> getList = loginDateService.getList();
            return ResultInfo.success("获取成功", getList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }
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
                loginDateService.delete(Collections.singletonList(this_id));
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
