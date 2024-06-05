package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
@Data
@TableName("dengdai_dayin")
public class dddy {
    /**
     * id自增列
     */
    @TableId(value = "id" , type = IdType.AUTO)
    private Integer id;
    /**
     * 客户
     */
    private String p1;
    /**
     * 日期
     */
    private String p2;
    /**
     * 订单号
     */
    private String p3;
    /**
     * 地址
     */
    private String p4;
    /**
     * 房间柜号
     */
    private String p5;
    /**
     * 铝型材
     */
    private String p6;
    /**
     * 其他类别
     */
    private String p7;

}
