package com.example.demo.controller;

import com.example.demo.entity.UserInfo;
import com.example.demo.entity.dddy;
import com.example.demo.entity.ddjgbz;
import com.example.demo.service.DdjgbzService;
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
@RequestMapping("/ddjgbz")
public class DdjgbzController {
    @Autowired
    private UserInfoService userInfoService;
    @Autowired
    private DdjgbzService ddjgbzService;
    /**
     * 查询所有
     *
     * @return ResultInfo
     */
    @RequestMapping("/getList")
    public ResultInfo getList(HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        try {
            List<ddjgbz> getList = ddjgbzService.getList();
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
        if(!userInfo.getPower().equals("管理员")){
            return ResultInfo.error(401, "无权限");
        }
        ddjgbz ddjgbz = null;
        try {
            ddjgbz = DecodeUtil.decodeToJson(updateJson, ddjgbz.class);
            if (ddjgbzService.update(ddjgbz)) {
                return ResultInfo.success("修改成功", ddjgbz);
            } else {
                return ResultInfo.success("修改失败", ddjgbz);
            }
        } catch (Exception e) {
            e.printStackTrace();
            log.error("修改失败：{}", e.getMessage());
            log.error("参数：{}", userInfo);
            return ResultInfo.error("修改失败");
        }
    }

}