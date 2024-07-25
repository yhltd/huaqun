package com.example.demo.controller;

import com.example.demo.entity.UserInfo;
import com.example.demo.entity.blxd;
import com.example.demo.service.BlxdService;
import com.example.demo.service.UserInfoService;
import com.example.demo.util.DecodeUtil;
import com.example.demo.util.GsonUtil;
import com.example.demo.util.ResultInfo;
import com.example.demo.util.SessionUtil;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/blxd")
public class BlxdController {
    @Autowired
    private UserInfoService userInfoService;
    @Autowired
    private BlxdService blxdService;
    /**
     * 查询所有
     *
     * @return ResultInfo
     */
    @RequestMapping("/getList")
    public ResultInfo getList(HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        if(userInfo.getPower().equals("客户")){
            return ResultInfo.error(401, "无权限");
        }
        try {
            if(userInfo.getPower().equals("管理员")||userInfo.getPower().equals("超级管理员")){
                List<blxd> getList = blxdService.getList();
                return ResultInfo.success("获取成功", getList);
            }else if (userInfo.getPower().equals("玻璃厂")){
                List<blxd> getListByBoli = blxdService.getListByBoli();
                return ResultInfo.success("获取成功", getListByBoli);
            }else {
                List<blxd> getQita = blxdService.getQita();
                return ResultInfo.success("获取成功", getQita);
            }
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

    /**
     * 根据简码和生产状态查询
     *
     * @return ResultInfo
     */
    @RequestMapping("/queryList")
    public ResultInfo queryList(String pinyin, String shengchan, HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        try {
            List<blxd> list = blxdService.queryList(pinyin, shengchan);
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
        public ResultInfo update(@RequestBody String updateJson,HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        if(userInfo.getPower().equals("客户")){
            return ResultInfo.error(401, "无权限");
        }
        blxd blxd = null;
        try {
            blxd = DecodeUtil.decodeToJson(updateJson, blxd.class);
            if (blxdService.update(blxd)) {
                return ResultInfo.success("修改成功", blxd);
            } else {
                return ResultInfo.success("修改失败", blxd);
            }
        } catch (Exception e) {
            e.printStackTrace();
            log.error("修改失败：{}", e.getMessage());
            log.error("参数：{}", userInfo);
            return ResultInfo.error("修改失败");
        }
    }

}