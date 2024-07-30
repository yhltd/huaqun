package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("erqi_peisongdan")
public class psd {
    /**
     * id自增列
     */
    @TableId(value = "id" , type = IdType.AUTO)
    private Integer id;
    /**
     * 单号
     */
    private String orderNumber;
    /**
     * 日期
     */
    private String insertDate;
    /**
     * 客户名称
     */
    private String customerName;
    /**
     * 录入员
     */
    private String customerNameRenyuan;
    /**
     * 完成时间
     */
    private String customerNameRiqi;
    /**
     * 客户需求(文字)
     */
    private String customerNeedText;
    /**
     * 录入员
     */
    private String customerNeedTextRenyuan;
    /**
     * 完成时间
     */
    private String customerNeedTextRiqi;
    /**
     * 客户需求(图片)
     */
    private String customerNeedImg1;
    /**
     * 录入员
     */
    private String customerNeedImg1Renyuan;
    /**
     * 完成时间
     */
    private String customerNeedImg1Riqi;
    /**
     * 配送文字1
     */
    private String customerNeedText1;
    /**
     * 录入员
     */
    private String customerNeedText1Renyuan;
    /**
     * 完成时间
     */
    private String customerNeedText1Riqi;
    /**
     * 文件(图片)
     */
    private String customerNeedText2;
    /**
     * 录入员
     */
    private String customerNeedText2Renyuan;
    /**
     * 完成时间
     */
    private String customerNeedText2Riqi;
    /**
     * 送货地址
     */
    private String songhuoAddress;
    /**
     * 录入员
     */
    private String songhuoAddressRenyuan;
    /**
     * 完成时间
     */
    private String songhuoAddressRiqi;
    /**
     * 安装地址
     */
    private String anzhuangAddress;
    /**
     * 录入员
     */
    private String anzhuangAddressRenyuan;
    /**
     * 完成时间
     */
    private String anzhuangAddressRiqi;
    /**
     * 联系人、电话
     */
    private String phone;
    /**
     * 录入员
     */
    private String phoneRenyuan;
    /**
     * 完成时间
     */
    private String phoneRiqi;
    /**
     * 客户订单号
     */
    private String customerOrder;
    /**
     * 录入员
     */
    private String customerOrderRenyuan;
    /**
     * 完成时间
     */
    private String customerOrderRiqi;
    /**
     * 送货单号
     */
    private String songhuoDanhao;
    /**
     * 录入员
     */
    private String songhuoDanhaoRenyuan;
    /**
     * 完成时间
     */
    private String songhuoDanhaoRiqi;
    /**
     * 配货图片
     */
    private String peihuoImg1;
    /**
     * 录入员
     */
    private String peihuoImg1Renyuan;
    /**
     * 完成时间
     */
    private String peihuoImg1Riqi;
    /**
     * 配货图片
     */
    private String peihuoImg2;
    /**
     * 录入员
     */
    private String peihuoImg2Renyuan;
    /**
     * 完成时间
     */
    private String peihuoImg2Riqi;
    /**
     * 配货图片
     */
    private String peihuoImg3;
    /**
     * 录入员
     */
    private String peihuoImg3Renyuan;
    /**
     * 完成时间
     */
    private String peihuoImg3Riqi;
    /**
     * 配货图片
     */
    private String peihuoImg4;
    /**
     * 录入员
     */
    private String peihuoImg4Renyuan;
    /**
     * 完成时间
     */
    private String peihuoImg4Riqi;
    /**
     * 配货图片
     */
    private String peihuoImg5;
    /**
     * 录入员
     */
    private String peihuoImg5Renyuan;
    /**
     * 完成时间
     */
    private String peihuoImg5Riqi;
    /**
     * 配送图片
     */
    private String peisongImg1;
    /**
     * 录入员
     */
    private String peisongImg1Renyuan;
    /**
     * 完成时间
     */
    private String peisongImg1Riqi;
    /**
     * 配送照片
     */
    private String peisongImg2;
    /**
     * 录入员
     */
    private String peisongImg2Renyuan;
    /**
     * 完成时间
     */
    private String peisongImg2Riqi;
    /**
     * 配送照片
     */
    private String peisongImg3;
    /**
     * 录入员
     */
    private String peisongImg3Renyuan;
    /**
     * 完成时间
     */
    private String peisongImg3Riqi;
    /**
     * 完成情况
     */
    private String wancheng;
    /**
     * 录入员
     */
    private String wanchengRenyuan;
    /**
     * 完成时间
     */
    private String wanchengRiqi;
    /**
     * 备注
     */
    private String beizhu;
    /**
     * 录入员
     */
    private String beizhuRenyuan;
    /**
     * 完成时间
     */
    private String beizhuRiqi;
    /**
     * 商品库存(文字)
     */
    private String kucunText;
    /**
     * 录入员
     */
    private String kucunTextRenyuan;
    /**
     * 完成时间
     */
    private String kucunTextRiqi;
    /**
     * 商品库存(图片)
     */
    private String kucunImg1;
    /**
     * 录入员
     */
    private String kucunImg1Renyuan;
    /**
     * 完成时间
     */
    private String kucunImg1Riqi;
    /**
     * 商品库存(图片)
     */
    private String kucunImg2;
    /**
     * 录入员
     */
    private String kucunImg2Renyuan;
    /**
     * 完成时间
     */
    private String kucunImg2Riqi;
    /**
     * 商品库存(图片)
     */
    private String kucunImg3;
    /**
     * 录入员
     */
    private String kucunImg3Renyuan;
    /**
     * 完成时间
     */
    private String kucunImg3Riqi;
    /**
     * 金额
     */
    private String money;
    /**
     * 录入员
     */
    private String moneyRenyuan;
    /**
     * 完成时间
     */
    private String moneyRiqi;
    /**
     * 收款情况
     */
    private String shoukuan;
    /**
     * 录入员
     */
    private String shoukuanRenyuan;
    /**
     * 完成时间
     */
    private String shoukuanRiqi;
    /**
     * 送货员
     */
    private String songhuoyuan;
    /**
     * 客户需求(图片)
     */
    private String customerNeedImg2;
    /**
     * 客户需求(图片)
     */
    private String customerNeedImg3;
    /**
     * 客户需求(图片)
     */
    private String customerNeedImg4;
    /**
     * 客户需求(图片
     */
    private String customerNeedImg5;
    /**
     * 客户需求(图片)
     */
    private String customerNeedImg6;
    /**
     * 客户需求(图片)
     */
    private String customerNeedImg7;
    /**
     * 客户需求(图片)
     */
    private String customerNeedImg8;
    /**
     * 配货图片
     */
    private String peihuoImg6;
    /**
     * 配货图片
     */
    private String peihuoImg7;
    /**
     * 配货图片
     */
    private String peihuoImg8;
    /**
     * 配送图片
     */
    private String peisongImg4;
    /**
     * 配送图片
     */
    private String peisongImg5;
    /**
     * 配送图片
     */
    private String peisongImg6;
    /**
     * 配送图片
     */
    private String peisongImg7;
    /**
     * 配送图片
     */
    private String peisongImg8;
    /**
     * 商品库存(图片)
     */
    private String kucunImg4;
    /**
     * 商品库存(图片)
     */
    private String kucunImg5;
    /**
     * 商品库存(图片)
     */
    private String kucunImg6;
    /**
     * 商品库存(图片)
     */
    private String kucunImg7;
    /**
     * 商品库存(图片)
     */
    private String kucunImg8;
    /**
     * 文件(图片)
     */
    private String wenjianImg1;
    /**
     * 文件(图片)
     */
    private String wenjianImg2;
    /**
     * 文件(图片)
     */
    private String wenjianImg3;
    /**
     * 文件(图片)
     */
    private String wenjianImg4;
    /**
     * 文件(图片)
     */
    private String wenjianImg5;
    /**
     * 文件(图片)
     */
    private String wenjianImg6;
    /**
     * 文件(图片)
     */
    private String wenjianImg7;
    /**
     * 文件(图片)
     */
    private String wenjianImg8;
    /**
     * 录入员
     */
    private String wenjianImg1Renyuan;
    /**
     * 完成时间
     */
    private String wenjianImg1Riqi;

    private String quyu;

}
