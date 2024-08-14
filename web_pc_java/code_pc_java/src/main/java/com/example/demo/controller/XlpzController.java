package com.example.demo.controller;

import com.example.demo.entity.UserInfo;
import com.example.demo.entity.ddxd;
import com.example.demo.entity.xlpz;
import com.example.demo.service.UserInfoService;
import com.example.demo.service.XlpzService;
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
@RequestMapping("/xlpz")
public class XlpzController {
    @Autowired
    private UserInfoService userInfoService;
    @Autowired
    private XlpzService xlpzService;
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
            List<xlpz> getList = xlpzService.getList();
            return ResultInfo.success("获取成功", getList);
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
        xlpz xlpz = null;
        try {
            xlpz = DecodeUtil.decodeToJson(updateJson, xlpz.class);
            if (xlpzService.update(xlpz)) {
                return ResultInfo.success("修改成功", xlpz);
            } else {
                return ResultInfo.success("修改失败", xlpz);
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
            xlpz xlpz = GsonUtil.toEntity(gsonUtil.get("addInfo"), xlpz.class);
            xlpz = xlpzService.add(xlpz);
            if (StringUtils.isNotNull(xlpz)) {
                return ResultInfo.success("添加成功", xlpz);
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
                xlpzService.delete(Collections.singletonList(this_id));
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
     * 下拉
     *
     * @return ResultInfo
     */
    @RequestMapping("/hqxllxc")
    public ResultInfo hqxllxc() {
        try {
            List<xlpz> getList = xlpzService.hqxllxc();
            return ResultInfo.success("获取成功", getList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    @RequestMapping("/hqxlDy")
    public ResultInfo hqxlDy() {
        try {
            List<xlpz> getList = xlpzService.hqxlDy();
            return ResultInfo.success("获取成功", getList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    @RequestMapping("/hqxlKg")
    public ResultInfo hqxlKg() {
        try {
            List<xlpz> getList = xlpzService.hqxlKg();
            return ResultInfo.success("获取成功", getList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    @RequestMapping("/hqxlPj")
    public ResultInfo hqxlPj() {
        try {
            List<xlpz> getList = xlpzService.hqxlPj();
            return ResultInfo.success("获取成功", getList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    @RequestMapping("/hqxlLcys")
    public ResultInfo hqxlLcys() {
        try {
            List<xlpz> getList = xlpzService.hqxlLcys();
            return ResultInfo.success("获取成功", getList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    @RequestMapping("/hqxlShfs")
    public ResultInfo hqxlShfs() {
        try {
            List<xlpz> getList = xlpzService.hqxlShfs();
            return ResultInfo.success("获取成功", getList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    @RequestMapping("/hqxlLvxingcai")
    public ResultInfo hqxlLvxingcai() {
        try {
            List<xlpz> getList = xlpzService.hqxlLvxingcai();
            return ResultInfo.success("获取成功", getList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    @RequestMapping("/hqxlLvcaiYanse")
    public ResultInfo hqxlLvcaiYanse() {
        try {
            List<xlpz> getList = xlpzService.hqxlLvcaiYanse();
            return ResultInfo.success("获取成功", getList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    @RequestMapping("/hqxlBlsjg")
    public ResultInfo hqxlBlsjg() {
        try {
            List<xlpz> getList = xlpzService.hqxlBlsjg();
            return ResultInfo.success("获取成功", getList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    @RequestMapping("/hqxlBlys")
    public ResultInfo hqxlBlys() {
        try {
            List<xlpz> getList = xlpzService.hqxlBlys();
            return ResultInfo.success("获取成功", getList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    @RequestMapping("/hqxlLsxh")
    public ResultInfo hqxlLsxh() {
        try {
            List<xlpz> getList = xlpzService.hqxlLsxh();
            return ResultInfo.success("获取成功", getList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    @RequestMapping("/hqxlKjlk")
    public ResultInfo hqxlKjlk() {
        try {
            List<xlpz> getList = xlpzService.hqxlKjlk();
            return ResultInfo.success("获取成功", getList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    @RequestMapping("/hqxlJlkw")
    public ResultInfo hqxlJlkw() {
        try {
            List<xlpz> getList = xlpzService.hqxlJlkw();
            return ResultInfo.success("获取成功", getList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    @RequestMapping("/hqxlFjpz")
    public ResultInfo hqxlFjpz() {
        try {
            List<xlpz> getList = xlpzService.hqxlFjpz();
            return ResultInfo.success("获取成功", getList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    @RequestMapping("/hqxlJlpp")
    public ResultInfo hqxlJlpp() {
        try {
            List<xlpz> getList = xlpzService.hqxlJlpp();
            return ResultInfo.success("获取成功", getList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }
    @RequestMapping("/hqxlgy")
    public ResultInfo hqxlgy() {
        try {
            List<xlpz> getList = xlpzService.hqxlgy();
            return ResultInfo.success("获取成功", getList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }
    @RequestMapping("/hqquyu")
    public ResultInfo hqquyu() {
        try {
            List<xlpz> getList = xlpzService.hqquyu();
            return ResultInfo.success("获取成功", getList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }
    @RequestMapping("/hqkucun")
    public ResultInfo hqkucun() {
        try {
            List<xlpz> getList = xlpzService.hqkucun();
            return ResultInfo.success("获取成功", getList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }
    @RequestMapping("/ghxl")
    public ResultInfo ghxl() {
        try {
            List<xlpz> ghxl = xlpzService.ghxl();
            return ResultInfo.success("获取成功", ghxl);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }
}