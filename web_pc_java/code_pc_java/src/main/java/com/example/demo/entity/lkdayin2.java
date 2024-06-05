package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("lvkuang_dayin2")
public class lkdayin2 {
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
     * 铰链孔方向
     */
    private String p9;
    /**
     * 开门方向数量
     */
    private String p10;
    /**
     * 有拉手数量(个)
     */
    private String p11;
    /**
     * 拉手位方向
     */
    private String p12;
    /**
     * 拉手位
     */
    private String p13;
    /**
     * 装锁数量
     */
    private String p14;
    /**
     * 锁孔位方向
     */
    private String p15;
    /**
     * 锁孔位
     */
    private String p16;
    /**
     * 开铰链孔
     */
    private String p17;
    /**
     * 铰链孔位1
     */
    private String p18;
    /**
     * 铰链孔位2
     */
    private String p19;
    /**
     * 铰链孔位3
     */
    private String p20;
    /**
     * 铰链孔位4
     */
    private String p21;
    /**
     * 铰链孔位5
     */
    private String p22;
    /**
     * 铰链孔位6
     */
    private String p23;

}
