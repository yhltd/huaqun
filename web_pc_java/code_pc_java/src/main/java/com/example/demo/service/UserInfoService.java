package com.example.demo.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.demo.entity.UserInfo;
import com.example.demo.entity.psd;
import com.example.demo.entity.xlpz;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
@Service
public interface UserInfoService extends IService<UserInfo> {
    /**
     * 登陆
     *
     * @param username 用户名
     * @param password 密码
     * @return 转Json后的用户信息
     */
    Map<String, Object> login(String username, String password);

    /**
     * 查询所有
     */
    List<UserInfo> getList();



    /**
     * 根据姓名和部门查询
     */
    List<UserInfo> queryList(String company, String pinyin);
    /**
     * 根据username 查name
     */
    List<UserInfo> getNameByUsername(String username);
    /**
     * 修改
     */
    boolean update(UserInfo userInfo);

    /**
     * 删除
     *
     * @param idList 根据id集合删除
     * @return 是否删除成功
     */
    boolean delete(List<Integer> idList);

    /**
     * 添加
     */
    UserInfo add(UserInfo userInfo);

    List<UserInfo> hqxlKhmc();


    List<UserInfo> hqxlKhmc1(String name);
    /**
     *  管理员查询用户
     */
    List<UserInfo> glgetList(String username);
    /**
     * 操作员查询用户
     */
    List<UserInfo> czygetList(String username);
    /**
     * 管理员管理操作员，客户，玻璃
     */
    boolean glupdate(UserInfo userInfo);

    String getName(String username);
}
