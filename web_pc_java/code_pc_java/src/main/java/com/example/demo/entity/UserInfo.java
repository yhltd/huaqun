package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("userInfo")
public class UserInfo {
    /**
     * id自增列
     */
    @TableId(value = "id" , type = IdType.AUTO)
    private Integer id;
    /**
     * 账号
     */
    private String username;
    /**
     * 密码
     */
    private String password;
    /**
     * 公司
     */
    private String company;
    /**
     * 姓名
     */
    private String name;
    /**
     * 简码
     */
    private String pinyin;
    /**
     * 权限
     */
    private String power;
    /**
     * 区域
     */
    private String quyu;
    /**
     * 送货地址
     */
    private String addressName;
    /**
     * 填写铝框金额权限
     */
    private String money;
    /**
     * 审单权限
     */
    private String shendan;
    /**
     * 付款权限
     */
    private String pay;
    /**
     * 开料权限
     */
    private String kailiao;
    /**
     * 组装权限
     */
    private String zuzhuang;
    /**
     * 包装权限
     */
    private String baozhuang;
}
