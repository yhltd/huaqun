package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("lvkuang_dayin")
public class lkdayin1 {
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
     * 单据编号
     */
    private String p5;
    /**
     * 铝型材
     */
    private String p6;
    /**
     * 玻璃深加工
     */
    private String p7;
    /**
     * 尺寸数量
     */
    private String p8;
    /**
     * 附件配置
     */
    private String p9;
    /**
     * 铰链品牌
     */
    private String p10;
    /**
     * 数量
     */
    private String p11;

}
