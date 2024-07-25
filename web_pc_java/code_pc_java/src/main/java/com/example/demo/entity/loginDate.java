package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * @author hui
 * @date 2024/7/24 9:31
 */
@Data
@TableName("login_date")
public class loginDate {
    /**
     * 自增长id
     */
    @TableId(value = "id" , type = IdType.AUTO)
    private Integer id;
    /**
     * 用户账号
     */
    private  String username;
    /**
     * 用户名
     */
    private String name;
    /**
     * 用户登录时间
     */
    private String loginDate;
}
