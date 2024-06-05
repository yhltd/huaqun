package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("lightbelt")
public class ddxd {
    /**
     * id自增列
     */
    @TableId(value = "id" , type = IdType.AUTO)
    private Integer id;
    /**
     * 客户名称
     */
    private String khmc;
    /**
     * 下单日期
     */
    private String xdrq;
    /**
     * 单据编号
     */
    private String djbh;
    /**
     * 收货
     */
    private String shouhuo;
    /**
     * 联系电话
     */
    private String lxdh;
    /**
     * 送货方式
     */
    private String shfs;
    /**
     * 安装地址
     */
    private String azdz;
    /**
     * 订单号
     */
    private String ddh;
    /**
     * 项目类别
     */
    private String fj;
    /**
     * 项目名称
     */
    private String gh;
    /**
     * 灯带长度mm
     */
    private String ddcd;
    /**
     * 数量(支)
     */
    private String sl;
    /**
     * 出线端口左
     */
    private String cxdk;
    /**
     * 出线端口右
     */
    private String cxdkRight;
    /**
     * 铝材颜色
     */
    private String lcys;
    /**
     * 光源
     */
    private String gy;
    /**
     * 电源
     */
    private String dy;
    /**
     * 开关
     */
    private String kg;
    /**
     * 配件
     */
    private String pj;
    /**
     * 功率W
     */
    private String gl;
    /**
     * 备注
     */
    private String bz;
    /**
     * 单价
     */
    private String dj;
    /**
     * 付款状态
     */
    private String fkzt;
    /**
     * 审单
     */
    private String hd;
    /**
     * 顺序
     */
    private String shunxu;
    /**
     * 尺寸
     */
    private String chicun;
    /**
     * 总金额
     */
    private String summoney;
    /**
     * 完成状态
     */
    private String wancheng;
    /**
     * 加工操作员
     */
    private String jgczy;
    /**
     * 完成时间
     */
    private String wcsj;
    /**
     * 录入员
     */
    private String luruyuan;
    /**
     * 金额
     */
    private String je;
}
