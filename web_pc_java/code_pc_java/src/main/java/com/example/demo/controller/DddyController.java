package com.example.demo.controller;

import com.example.demo.entity.UserInfo;
import com.example.demo.entity.blxd;
import com.example.demo.entity.dddy;
import com.example.demo.service.DddyService;
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
@RequestMapping("/dddy")
public class DddyController {
    @Autowired
    private UserInfoService userInfoService;
    @Autowired
    private DddyService dddyService;
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
            List<dddy> getList = dddyService.getList();
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
    public ResultInfo update(@RequestBody String updateJson,HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        if(!userInfo.getPower().equals("超级管理员")){
            return ResultInfo.error(401, "无权限");
        }
        dddy dddy = null;
        try {
            dddy = DecodeUtil.decodeToJson(updateJson, dddy.class);
            if (dddyService.update(dddy)) {
                return ResultInfo.success("修改成功", dddy);
            } else {
                return ResultInfo.success("修改失败", dddy);
            }
        } catch (Exception e) {
            e.printStackTrace();
            log.error("修改失败：{}", e.getMessage());
            log.error("参数：{}", userInfo);
            return ResultInfo.error("修改失败");
        }
    }

}