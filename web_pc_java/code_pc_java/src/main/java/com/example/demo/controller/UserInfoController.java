package com.example.demo.controller;

import com.alibaba.fastjson2.JSONObject;
import com.example.demo.entity.UserInfo;
import com.example.demo.entity.lkxd;
import com.example.demo.entity.loginDate;
import com.example.demo.entity.xlpz;
import com.example.demo.service.LoginDateService;
import com.example.demo.service.UserInfoService;
import com.example.demo.util.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequestMapping("/user")
public class UserInfoController {
    @Autowired
    private UserInfoService userInfoService;

    @Autowired
    private LoginDateService loginDateService;

    @RequestMapping("/login")
    public ResultInfo login(HttpSession session, String username, String password) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);

        try {
            //获取user
            Map<String, Object> map = userInfoService.login(username, password);
            System.out.println("map");
            System.out.println(map);

            //为Null则查询不到
            if (StringUtils.isEmpty(map)) {
                SessionUtil.remove(session, "token");
                SessionUtil.remove(session, "power");
                SessionUtil.remove(session, "company");
                SessionUtil.remove(session, "username");
                return ResultInfo.error(-1, "账号密码错误");
            } else {
                SessionUtil.setToken(session, map.get("token").toString());
                SessionUtil.setPower(session, (List<UserInfo>) map.get("power"));
                SessionUtil.setCompany(session, (List<UserInfo>) map.get("company"));
                SessionUtil.setUserName(session, (List<UserInfo>) map.get("username"));
                return ResultInfo.success("登陆成功");
            }
        } catch (Exception e) {
            log.error("登陆失败：{}", e.getMessage());
            log.error("参数：{}", username);
            log.error("参数：{}", password);
            return ResultInfo.error("错误!");
        }
    }

    /**
     * 查询所有
     *
     * @return ResultInfo
     */
    @RequestMapping("/getList")
    public ResultInfo getList(HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        if (userInfo.getPower().equals("客户") || userInfo.getPower().equals("玻璃厂")) {
            return ResultInfo.error(401, "无权限");
        }
        try {
            if (userInfo.getPower().equals("管理员")) {
                List<UserInfo> glgetList = userInfoService.glgetList(userInfo.getUsername());
                return ResultInfo.success("获取成功", glgetList);
            } else if (userInfo.getPower().equals("操作员")) {
                List<UserInfo> czygetList = userInfoService.czygetList(userInfo.getUsername());
                return ResultInfo.success("获取成功", czygetList);
            } else {
                List<UserInfo> getList = userInfoService.getList();
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
    public ResultInfo queryList(String company, String pinyin, HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        if (userInfo.getPower().equals("客户")) {
            return ResultInfo.error(401, "无权限");
        }
        try {
            List<UserInfo> list = userInfoService.queryList(company, pinyin);
            return ResultInfo.success("获取成功", list);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    @RequestMapping("/getName")
    public ResultInfo getName(HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        try {
            if (userInfo.getPower().equals("客户")) {
                String name = userInfo.getName();
                return ResultInfo.success("获取成功",name);
            }else{
                String uname= "客户名称";
                return ResultInfo.success("获取成功",uname);
            }
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
        if(!(userInfo.getPower().equals("管理员")||userInfo.getPower().equals("超级管理员"))){
            return ResultInfo.error(401, "无权限");
        }
        UserInfo UserInfo = null;
        try {
            UserInfo = DecodeUtil.decodeToJson(updateJson, UserInfo.class);
            if (userInfoService.update(UserInfo)) {
                return ResultInfo.success("修改成功", UserInfo);
            } else {
                return ResultInfo.success("修改失败", UserInfo);
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
        if(!userInfo.getPower().equals("超级管理员") && !userInfo.getPower().equals("管理员")){
            System.out.println(userInfo.getPower());
            return ResultInfo.error(401, "无权限");
        }
        try {
            UserInfo UserInfo = GsonUtil.toEntity(gsonUtil.get("addInfo"), UserInfo.class);
            UserInfo = userInfoService.add(UserInfo);
            if (StringUtils.isNotNull(UserInfo)) {
                return ResultInfo.success("添加成功", UserInfo);
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
        System.out.println(userInfo);
        GsonUtil gsonUtil = new GsonUtil(GsonUtil.toJson(map));
        List<Integer> idList = GsonUtil.toList(gsonUtil.get("idList"), Integer.class);
        if(!userInfo.getPower().equals("超级管理员") || !userInfo.getPower().equals("管理员")){
            return ResultInfo.error(401, "无权限");
        }
        try {
            for(int i=0; i<idList.size(); i++){
                int this_id = idList.get(i);
                userInfoService.delete(Collections.singletonList(this_id));
            }
            return ResultInfo.success("删除成功", idList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("删除失败：{}", e.getMessage());
            log.error("参数：{}", idList);
            return ResultInfo.error("删除失败");
        }
    }

    @RequestMapping("/hqxlKhmc")
    public ResultInfo hqxlKhmc(HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        try {
            if(userInfo.getPower().equals("客户")){
                List<UserInfo> getList = userInfoService.hqxlKhmc1(userInfo.getName());
                return ResultInfo.success("获取成功", getList);
            }else {
                List<UserInfo> getList = userInfoService.hqxlKhmc();
                return ResultInfo.success("获取成功", getList);
            }
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }
    @RequestMapping("/hqxlKhmc1")
    public ResultInfo hqxlKhmc1() {
        try {
            List<UserInfo> getList = userInfoService.hqxlKhmc();
            return ResultInfo.success("获取成功", getList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    @RequestMapping("/getToken")
    public ResultInfo getToken(HttpSession session) {
        try {
            String token = SessionUtil.getToken(session);
            System.out.println(token);
            JSONObject tokenJson = JSONObject.parseObject(token);

            return ResultInfo.success("获取成功", tokenJson);

        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    @RequestMapping("/getUserName")
    public ResultInfo getUserName(HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        try {
            return ResultInfo.success("获取成功", userInfo.getUsername());
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    @RequestMapping("/getPower")
    public ResultInfo getPower(HttpSession session){
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        try {
                String power = userInfo.getPower();
                return ResultInfo.success("获取成功", power);

        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }


    @RequestMapping("/getNameByUserName")
    public ResultInfo getNameByUserName(HttpSession session,String username) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        try {
            List<UserInfo> list = userInfoService.getNameByUsername(username);
            return ResultInfo.success("获取成功",list);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }
    @RequestMapping("/getpower")
    public ResultInfo getpower(HttpSession session,String username) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        try {
            String power = userInfo.getPower();
            return ResultInfo.success("获取成功", power);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }


    @RequestMapping("/gys")
    public ResultInfo gys() {
        try {
            List<UserInfo> gys = userInfoService.GYS();
            return ResultInfo.success("获取成功", gys);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }
    @RequestMapping("/gzry")
    public ResultInfo gzry() {
        try {
            List<UserInfo> gzry = userInfoService.gzry();
            return ResultInfo.success("获取成功", gzry);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }
}