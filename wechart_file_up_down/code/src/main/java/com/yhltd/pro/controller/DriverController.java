package com.yhltd.pro.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import cn.hutool.json.JSONArray;
import cn.hutool.json.JSONObject;
import com.yhltd.pro.util.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.*;
import java.net.URLEncoder;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

/**
 * @author hui
 * @date 2022/11/29 18:46
 */
@Slf4j
@RestController
@RequestMapping("/file")
public class DriverController {

    @GetMapping()
    public ResultInfo upload(){
        System.out.println("1111111111");
        return null;
    }

    @RequestMapping("/qq")
    public ResultInfo upload1(){
        System.out.println("111111110011");
        return null;
    }

    /**
     * 上传
     *
     * @return ResultInfo
     */
//    @RequestMapping("/upload")
    @PostMapping("/upload")
//    @CrossOrigin
    public ResultInfo upload(HttpServletRequest request, MultipartFile file) throws IOException {
//        System.out.println("-------" + file);
//        System.out.println("/////////////////" + request);
        //获取原始名称
        long kongjian = Long.parseLong(request.getParameter("kongjian"));
        String thisPath = request.getParameter("path");
        String fileName = file.getOriginalFilename();
        //文件保存路径
        String filePath = "D:/coach" + thisPath;
        //文件重命名,防止重复
        filePath = filePath + fileName;
        //文件对象
        File dest = new File(filePath);
        //判断路径是否存在,如果不存在则创建
        if (!dest.getParentFile().exists()) {
            dest.getParentFile().mkdir();
        }
        try {
            Path folder = Paths.get("D:/coach" + thisPath);
            long size = Files.walk(folder)
                    .filter(path -> path.toFile().isFile())
                    .mapToLong(path -> path.toFile().length())
                    .sum();
            size = size / 1073741824;
            if(size >= kongjian){
                return ResultInfo.success("存储空间不足", filePath);
            }else{
                //保存到服务器中
                file.transferTo(dest);
                return ResultInfo.success("上传成功", filePath);
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }


    /**
     * 删除
     *
     * @return ResultInfo
     */
    @RequestMapping("/delete")
    public ResultInfo delete(HttpServletRequest request) throws IOException {
        //获取原始名称
        String orderNumber = request.getParameter("order_number");
        String path = request.getParameter("path");
        for (int i=1; i<=14; i++) {
            String filepath = "";
            if(i < 10){
                filepath = "C:/iis_jxc/sharepic_path" + path + orderNumber + "-0" + i + ".jpg";
            }else{
                filepath = "C:/iis_jxc/sharepic_path" + path + orderNumber + "-" + i + ".jpg";
            }
            File dir = new File(filepath);
            if(dir.isFile() && dir.exists()) {
                dir.delete();
            }
        }
        return ResultInfo.success("删除成功",orderNumber);
    }


}
