package com.example.demo.controller;

import com.example.demo.entity.UserInfo;
import com.example.demo.entity.ddxd;
import com.example.demo.service.DdxdService;
import com.example.demo.service.UserInfoService;
import com.example.demo.util.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
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

import static org.apache.naming.SelectorContext.prefix;

@Slf4j
@RestController
@RequestMapping("/ddxd")
public class DdxdController {
    @Autowired
    private UserInfoService userInfoService;
    @Autowired
    private DdxdService ddxdService;
    /**
     * 查询所有
     *
     * @return ResultInfo
     */
    @RequestMapping("/getList")
    public ResultInfo getList(HttpSession session,String khmc) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
//        UserInfo userInfo1 = GsonUtil.toEntity(SessionUtil.getCompany(session).toString(), UserInfo.class);
        try {
//            if(userInfo.getPower().equals("客户")){
//                userInfo1.setCompany(khmc);
//                List<ddxd> getListByKeHu = ddxdService.getListByKeHu(khmc);
//                return ResultInfo.success("获取成功", getListByKeHu);
//            }else{
                List<ddxd> getList = ddxdService.getList();
                return ResultInfo.success("获取成功", getList);
//            }
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
    public ResultInfo queryList(String khmc, String ddh,String ksxdrq ,String jsxdrq , String azdz, HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        try {
            List<ddxd> list = ddxdService.queryList(khmc, ddh,ksxdrq ,jsxdrq ,azdz);
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
//        if(!userInfo.getPower().equals("管理员")){
//            return ResultInfo.error(401, "无权限");
//        }
        ddxd ddxd = null;
        try {
            ddxd = DecodeUtil.decodeToJson(updateJson, ddxd.class);
            if (ddxdService.update(ddxd)) {
                return ResultInfo.success("修改成功", ddxd);
            } else {
                return ResultInfo.success("修改失败", ddxd);
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
        if(!userInfo.getPower().equals("管理员")){
            return ResultInfo.error(401, "无权限");
        }
        try {
            ddxd ddxd = GsonUtil.toEntity(gsonUtil.get("addInfo"), ddxd.class);
            ddxd = ddxdService.add(ddxd);
            if (StringUtils.isNotNull(ddxd)) {
                return ResultInfo.success("添加成功", ddxd);
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
        if(!userInfo.getPower().equals("管理员")){
            return ResultInfo.error(401, "无权限");
        }
        try {
            for(int i=0; i<idList.size(); i++){
                int this_id = idList.get(i);
                ddxdService.delete(Collections.singletonList(this_id));
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
            List<ddxd> nlist = GsonUtil.toList(gsonUtil.get("list"), ddxd.class);
            List<ddxd> list=new ArrayList<>();
            if(nlist != null){
                list= ddxdService.getListByKhmc(nlist.get(0).getKhmc(),nlist.get(0).getXdrq(),nlist.get(0).getDjbh());
            }
            return ResultInfo.success("成功！",list);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("失败：{}", e.getMessage());
            return ResultInfo.error("失败！");
        }
    }
}