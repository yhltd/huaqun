package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("boli_xiadan")
public class blxd {
    /**
     * id自增列
     */
    @TableId(value = "id" , type = IdType.AUTO)
    private Integer id;
    /**
     * 下单日期
     */
    private String insertDate;
    /**
     * 单据编号
     */
    private String orderNumber;
    /**
     * 生产状态
     */
    private String shengchan;
    /**
     * 所属供应商
     */
    private String gongyingshang;
    /**
     * 玻璃颜色
     */
    private String boliYanse;
    /**
     * 玻璃深加工
     */
    private String boliShenjiagong;
    /**
     * 数量
     */
    private String num;
    /**
     * 开拉手孔数量
     */
    private String shuoming1;
    /**
     * 开锁孔数量
     */
    private String shuoming2;
    /**
     * 开特殊孔数量
     */
    private String beizhu;
    /**
     * 高度
     */
    private String height;
    /**
     * 宽度
     */
    private String width;
    /**
     * 简码
     */
    private String pinyin;
    /**
     * 完成时间
     */
    private String shendan;

}
