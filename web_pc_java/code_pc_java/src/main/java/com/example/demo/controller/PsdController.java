package com.example.demo.controller;

import com.example.demo.entity.UserInfo;
import com.example.demo.entity.psd;
import com.example.demo.service.PsdService;
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
@RequestMapping("/psd")
public class PsdController {
    @Autowired
    private UserInfoService userInfoService;
    @Autowired
    private PsdService psdService;

    /**
     * 查询所有
     *
     * @return ResultInfo
     */
    @RequestMapping("/getList")
    public ResultInfo getList(HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        try {
            List<psd> getList = psdService.getList();
            return ResultInfo.success("获取成功", getList);
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
    public ResultInfo queryList(String orderNumber, String customerName, String songhuoAddress, String anzhuangAddress, String customerOrder, String songhuoDanhao, HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        try {
            List<psd> list = psdService.queryList(orderNumber, customerName, songhuoAddress, anzhuangAddress, customerOrder, songhuoDanhao);
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
        psd psd = null;
        try {
            psd = DecodeUtil.decodeToJson(updateJson, psd.class);
            if (psdService.update(psd)) {
                return ResultInfo.success("修改成功", psd);
            } else {
                return ResultInfo.success("修改失败", psd);
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
        if (!userInfo.getPower().equals("管理员")) {
            return ResultInfo.error(401, "无权限");
        }
        try {
            psd psd = GsonUtil.toEntity(gsonUtil.get("addInfo"), psd.class);
            psd = psdService.add(psd);
            if (StringUtils.isNotNull(psd)) {
                return ResultInfo.success("添加成功", psd);
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
    public ResultInfo delete(@RequestBody HashMap map, HttpSession session) {
        UserInfo userInfo = GsonUtil.toEntity(SessionUtil.getToken(session), UserInfo.class);
        GsonUtil gsonUtil = new GsonUtil(GsonUtil.toJson(map));
        List<Integer> idList = GsonUtil.toList(gsonUtil.get("idList"), Integer.class);
        if (!userInfo.getPower().equals("管理员")) {
            return ResultInfo.error(401, "无权限");
        }
        try {
            for (int i = 0; i < idList.size(); i++) {
                int this_id = idList.get(i);
                psdService.delete(Collections.singletonList(this_id));
            }
            return ResultInfo.success("删除成功", idList);
        } catch (Exception e) {
            e.printStackTrace();
            log.error("删除失败：{}", e.getMessage());
            log.error("参数：{}", idList);
            return ResultInfo.error("删除失败");
        }
    }

//    public static void uploadFile(String url, File file) throws Exception {
//        HttpClient httpClient = HttpClients.createDefault();
//        HttpPost httpPost = new HttpPost(url);
//
//        // 设置请求的内容类型为multipart/form-data
//        MultipartEntityBuilder builder = MultipartEntityBuilder.create();
//        builder.addBinaryBody("file", file, ContentType.DEFAULT_BINARY, file.getName());
//
//        // 设置请求体
//        httpPost.setEntity(builder.build());
//
//        // 执行请求并获取响应
//        HttpResponse response = httpClient.execute(httpPost);
//
//        // 打印响应状态和内容
//        System.out.println("Response Status: " + response.getStatusLine().getStatusCode());
//        System.out.println("Response Body: " + EntityUtils.toString(response.getEntity()));
//    }
//
//    public static void main(String[] args) {
//        try {
//            // 替换为你的上传地址和要上传的文件
//            String uploadUrl = "https://huaqunwechar.com:9087/file/upload";
//            File file = new File("path/to/your/file.jpg");
//
//            uploadFile(uploadUrl, file);
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }

//    public static void uploadFile(String filePath, String apiUrl) {
//        try {
//            URL url = new URL(apiUrl);
//            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
//            conn.setDoOutput(true);
//            System.out.println("p");
//            conn.setRequestMethod("POST");
//            System.out.println("pj");
//            File file = new File(filePath);
//            FileInputStream fileInputStream = new FileInputStream(file);
//            System.out.println("oo");
//            OutputStream outputStream = conn.getOutputStream();
//            byte[] buffer = new byte[4096];
//            System.out.println("by");
//            int bytesRead = -1;
//
//            while ((bytesRead = fileInputStream.read(buffer)) != -1) {
//                outputStream.write(buffer, 0, bytesRead);
//            }
//            System.out.println("cc");
//            fileInputStream.close();
//            outputStream.close();
//            int responseCode = conn.getResponseCode();
//            System.out.println("Response Code: " + responseCode);
//
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }
//
//    @RequestMapping("/mainUpload")
//    public ResultInfo mainUpload(HttpSession session) {
//
//        System.out.println("1");
//        String filePath = "E:\\yho173_20240516\\工作\\万年县入木电子\\缓存文件夹\\测试公司名称1.jpg";
//        String apiUrl = "https://huaqunwechar.com:9087/file/upload";
//        uploadFile(filePath, apiUrl);
//        System.out.println("2");
//        return null;
//    }
//
//
//    @Controller
//
//    @RequestMapping("goods")
//
//    public class GoodsController {
//
//
//        private Logger logger = Logger.getLogger(GoodsController.class);
//
//        @ResponseBody
//
//        @RequestMapping("upload")
//
//        public String upload(HttpServletRequest request, @RequestParam(value = "file", required = false) MultipartFile file) throws IOException {
//            request.setCharacterEncoding("UTF-8");
//            String user = request.getParameter("user");
//            if (!file.isEmpty()) {
//
//                logger.info("成功获取照片");
//
//                String fileName = file.getOriginalFilename();
//
//                String path = null;
//
//                String type = null;
//
//                type = fileName.indexOf(".") != -1 ? fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length()) : null;
//
//                logger.info("图片初始名称为：" + fileName + " 类型为：" + type);
//
//                if (type != null) {
//
//                    if ("GIF".equals(type.toUpperCase()) || "PNG".equals(type.toUpperCase()) || "JPG".equals(type.toUpperCase())) {
//
//// 项目在容器中实际发布运行的根路径
//
//                        String realPath = request.getSession().getServletContext().getRealPath("/");
//
//// 自定义的文件名称
//
//                        String trueFileName = String.valueOf(System.currentTimeMillis()) + fileName;
//
//// 设置存放图片文件的路径
//
//                        path = realPath + "/uploads/" + trueFileName;
//
//                        logger.info("存放图片文件的路径:" + path);
//
//                        file.transferTo(new File(path));
//
//                        logger.info("文件成功上传到指定目录下");
//
//                    } else {
//
//                        logger.info("不是我们想要的文件类型,请按要求重新上传");
//
//                        return "error";
//
//                    }
//
//                } else {
//
//                    logger.info("文件类型为空");
//
//                    return "error";
//
//                }
//
//            } else {
//
//                logger.info("没有找到相对应的文件");
//
//                return "error";
//
//            }
//
//            return "success";
//
//        }
//
//    }
//
//
//    public class FileUploader {
//        public void upload(String url, File file) throws IOException {
//            HttpClient client = HttpClientBuilder.create().build();
//            HttpPost post = new HttpPost(url);
//            MultipartEntityBuilder builder = MultipartEntityBuilder.create();
//            builder.addPart("file", new FileBody(file, ContentType.DEFAULT_BINARY));
//            HttpEntity entity = builder.build();
//            post.setEntity(entity);
//            HttpResponse response = client.execute(post);         // 处理上传结果     } }
//
//
//        }
//    }
//
//
//        public void main(String[] args) {
//            FileUploader uploader = new FileUploader();
//            try {
//                File file = new File("/huaqun_erqi/");
//                uploader.upload("https://huaqunwechar.com:9087/file/upload", file);
//            } catch (IOException e) {
//                e.printStackTrace();
//            }
//        }

}


//class FileUploadExample {
//    public static void uploadFile(String targetUrl, String filePath) throws IOException {
//        System.out.println("111");
//        String boundary = Long.toHexString(System.currentTimeMillis()); // 随机边界
//        String CRLF = "\r\n"; // 换行符
//        URL url = new URL(targetUrl);
//        HttpURLConnection connection = (HttpURLConnection) url.openConnection();
//        connection.setDoOutput(true);
//        connection.setRequestMethod("POST");
//        connection.setRequestProperty("Content-Type", "multipart/form-data; boundary=" + boundary);
//        System.out.println("123");
//        try (
//                OutputStream output = connection.getOutputStream();
//                PrintWriter writer = new PrintWriter(new OutputStreamWriter(output, "UTF-8"), true);
//        ) {
//            // 发送文件数据
//            File file = new File(filePath);
//            writer.append("--" + boundary).append(CRLF);
//            writer.append("Content-Disposition: form-data; name=\"file\"; filename=\"" + file.getName() + "\"").append(CRLF);
//            writer.append("Content-Type: " + URLConnection.guessContentTypeFromName(file.getName())).append(CRLF);
//            writer.append(CRLF).flush();
//            System.out.println("456");
//            Files.copy(file.toPath(), output);
//            output.flush(); // 确保文件数据发送完毕
//
//            writer.append(CRLF).flush(); // 结束行
//            writer.append("--" + boundary + "--").append(CRLF);
//        }
//
//        int responseCode = connection.getResponseCode();
//        System.out.println("Response Code: " + responseCode);
//
//        connection.disconnect();
//    }
//
//    public static void main(String[] args) {
//        System.out.println("789");
//        try {
//            String targetUrl = "https://huaqunwechar.com:9087/file/upload"; // 目标上传接口
//            String filePath = "E:\\yho173_20240516\\工作\\万年县入木电子\\缓存文件夹\\测试公司名称1.jpg"; // 本地文件路径
//            uploadFile(targetUrl, filePath);
//        } catch (IOException e) {
//            e.printStackTrace();
//        }
//    }
//}


//class FileUploader {
//    public static void uploadFile(String filePath, String apiUrl) {
//        try {
//            URL url = new URL(apiUrl);
//            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
//            conn.setDoOutput(true);
//            System.out.println("p");
//            conn.setRequestMethod("POST");
//            System.out.println("pj");
//            File file = new File(filePath);
//            FileInputStream fileInputStream = new FileInputStream(file);
//            System.out.println("oo");
//            OutputStream outputStream = conn.getOutputStream();
//            byte[] buffer = new byte[4096];
//            System.out.println("by");
//            int bytesRead = -1;
//
//            while ((bytesRead = fileInputStream.read(buffer)) != -1) {
//                outputStream.write(buffer, 0, bytesRead);
//            }
//            System.out.println("cc");
//            fileInputStream.close();
//            outputStream.close();
//            int responseCode = conn.getResponseCode();
//            System.out.println("Response Code: " + responseCode);
//
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//    }
//
//    public static void main(String[] args) {
//        System.out.println("1");
//        String filePath = "E:\\yho173_20240516\\工作\\万年县入木电子\\缓存文件夹\\测试公司名称1.jpg";
//        String apiUrl = "https://huaqunwechar.com:9087/file/upload";
//        uploadFile(filePath, apiUrl);
//        System.out.println("2");
//    }
//}