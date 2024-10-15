package com.example.demo.controller;

import com.example.demo.entity.UserInfo;
import com.example.demo.entity.blxd;
import com.example.demo.entity.lkcz;
import com.example.demo.service.BlxdService;
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
import java.util.HashMap;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/blxd")
public class BlxdController {
    @Autowired
    private UserInfoService userInfoService;
    @Autowired
    private BlxdService blxdService;
    @Autowired
    private LkczpzService lkczpzService;
    /**
     * 查询所有
     *
     * @return ResultInfo
     */
//    @RequestMapping("/getList")
//    public ResultInfo getList(HttpSession session) {
//        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
//        if(userInfo.getPower().equals("客户")){
//            return ResultInfo.error(401, "无权限");
//        }
//        try {
//            if(userInfo.getPower().equals("管理员")||userInfo.getPower().equals("超级管理员")){
//                List<blxd> getList = blxdService.getList();
//                return ResultInfo.success("获取成功", getList);
//            }else if (userInfo.getPower().equals("玻璃厂")){
//                List<blxd> getListByBoli = blxdService.getListByBoli();
//                return ResultInfo.success("获取成功", getListByBoli);
//            }else {
//                List<blxd> getQita = blxdService.getQita();
//                return ResultInfo.success("获取成功", getQita);
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//            log.error("获取失败：{}", e.getMessage());
//            return ResultInfo.error("错误!");
//        }
//    }
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
               String gongyingshang=userInfo.getCompany();
                List<blxd> getListByBoli = blxdService.getListByBoli(gongyingshang);
                return ResultInfo.success("获取成功", getListByBoli);
            } else {
                List<blxd> getQita = blxdService.getQita();
                return ResultInfo.success("获取成功", getQita);
            }
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

//    /**
//     * 根据简码和生产状态查询
//     *
//     * @return ResultInfo
//     */
//    @RequestMapping("/queryList")
//    public ResultInfo queryList(String pinyin, String shengchan,String ksxdrq,String jsxdrq, HttpSession session) {
//        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
//        try {
//            List<blxd> list = blxdService.queryList(pinyin, shengchan,ksxdrq,jsxdrq);
//            return ResultInfo.success("获取成功", list);
//        } catch (Exception e) {
//            e.printStackTrace();
//            log.error("获取失败：{}", e.getMessage());
//            return ResultInfo.error("错误!");
//        }
//    }
    /**
     * 根据简码和生产状态查询
     *
     * @return ResultInfo
     */
    @RequestMapping("/queryList")
    public ResultInfo queryList(String pinyin,String shengchan,String ksxdrq,String jsxdrq, HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        if(userInfo.getPower().equals("客户")){
            return ResultInfo.error(401, "无权限");
        }
        try {
            if (userInfo.getPower().equals("玻璃厂")){
                System.out.println("===============");
                String gongyingshang = userInfo.getCompany();
                System.out.println(gongyingshang);

                List<blxd> getListByBoli = blxdService.queryByBoli(pinyin, shengchan, ksxdrq, jsxdrq,gongyingshang);
                return ResultInfo.success("获取成功", getListByBoli);
            }else {
                List<blxd> list = blxdService.queryList(pinyin, shengchan, ksxdrq, jsxdrq);
                return ResultInfo.success("获取成功", list);
            }
        } catch (Exception e) {
            e.printStackTrace();
            log.error("获取失败：{}", e.getMessage());
            return ResultInfo.error("错误!");
        }
    }

//    @RequestMapping("/queryList1")
//    public ResultInfo queryList1(String pinyin,String shengchan,String ksxdrq,String jsxdrq, HttpSession session) {
//        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
//        try {
//            List<blxd> list = blxdService.queryList1(pinyin, shengchan,ksxdrq,jsxdrq);
//            return ResultInfo.success("获取成功", list);
//        } catch (Exception e) {
//            e.printStackTrace();
//            log.error("获取失败：{}", e.getMessage());
//            return ResultInfo.error("错误!");
//        }
//    }

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
    @RequestMapping(value = "/updatesc", method = RequestMethod.POST)
    public ResultInfo updatesc(HttpSession session,String shengchan ,int id) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        if(userInfo.getPower().equals("客户")){
            return ResultInfo.error(401, "无权限");
        }

        try {
            blxdService.updatesc(shengchan,id);
            return ResultInfo.success("修改成功",null);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("修改失败：{}", e.getMessage());
            log.error("参数：{}", userInfo);
            return ResultInfo.error("修改失败");
        }
    }

    @RequestMapping(value = "/updategys", method = RequestMethod.POST)
    public ResultInfo updategys(HttpSession session,String gongyingshang ,String orderNumber) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        if(userInfo.getPower().equals("玻璃厂") || userInfo.getPower().equals("客户")){
            return ResultInfo.error(401, "无权限");
        }

        try {
            blxdService.updategys(gongyingshang,orderNumber);
            return ResultInfo.success("成功！",null);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("修改失败：{}", e.getMessage());
            log.error("参数：{}", userInfo);
            return ResultInfo.error("修改失败");
        }
    }

    @RequestMapping("/add")
    public ResultInfo add(@RequestBody HashMap map, HttpSession session,String lkxh,String yanse) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        GsonUtil gsonUtil = new GsonUtil(GsonUtil.toJson(map));
        try {
//            lkxd lkxd = GsonUtil.toEntity(gsonUtil.get("addInfo"), lkxd.class);
            blxd blxd = GsonUtil.toEntity(gsonUtil.get("addInfo"), blxd.class);
//            lkxd = lkxdService.add(lkxd);

            System.out.println("--------------------------------");
            System.out.println(lkxh);
            lkxh = blxd.getLxc();
            yanse = blxd.getYanse();
            System.out.println(yanse);
           String chang1 = lkczpzService.getList1(lkxh,yanse);
           String kuan1 = lkczpzService.getList2(lkxh,yanse);
            System.out.println("--------------------------------");
            System.out.println(chang1);
            System.out.println(kuan1);
            if (chang1 != null && kuan1 != null) {
                Integer chang = Integer.parseInt(chang1);
                Integer kuan = Integer.parseInt(kuan1);
                Integer Width = Integer.parseInt(blxd.getWidth()) - kuan;
                String width = Width.toString();
                Integer Height = Integer.parseInt(blxd.getHeight()) - chang;
                String height = Height.toString();
                blxd.setHeight(height);
                blxd.setWidth(width);
            }
            String orderNumber =blxd.getOrderNumber();
            String pinyin = blxd.getPinyin();
            String boliYanse = blxd.getBoliYanse();
            String boliShenjiagong = blxd.getBoliShenjiagong();
            String num=blxd.getNum();
            String height=blxd.getHeight();
            String width = blxd.getWidth();
            String shengchan="";
            String beizhu="";
            String shuoming1=blxd.getShuoming1();
            if (shuoming1==null){
                shuoming1="";
            }

            String shuoming2=blxd.getShuoming2();
            if (shuoming2==null){
                shuoming2="";
            }
            String gongyingshang="";
            String guanlian=blxd.getGuanlian();

            boolean a ;
            a = blxdService.add(orderNumber,pinyin,boliYanse,boliShenjiagong,num,height,width,shengchan,beizhu,shuoming1,shuoming2,gongyingshang,guanlian);
            if (StringUtils.isNotNull(a)) {
                return ResultInfo.success("添加成功", a);
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
     * 玻璃厂刷新
     *
     * @return ResultInfo
     */
//    @RequestMapping("/getListByBoli")
//    public ResultInfo getListByBoli(String gongyingshang,HttpSession session) {
//        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
//        if(userInfo.getPower().equals("客户")){
//            return ResultInfo.error(401, "无权限");
//        }
//        try {
//            System.out.println("++++++++++++");
//            System.out.println(gongyingshang);
//            List<blxd> getListByBoli = blxdService.getListByBoli(gongyingshang);
//            return ResultInfo.success("获取成功", getListByBoli);
//        } catch (Exception e) {
//            e.printStackTrace();
//            log.error("获取失败：{}", e.getMessage());
//            return ResultInfo.error("错误!");
//        }
//    }



}