package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("dropdowntable")
public class xlpz {
    /**
     * id自增列
     */
    @TableId(value = "id" , type = IdType.AUTO)
    private Integer id;
    /**
     * 出线端口
     */
    private String cxdk;
    /**
     * 铝型材-灯带
     */
    private String lxc;
    /**
     * 铝材颜色-灯带
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
     * 送货方式
     */
    private String shfs;
    /**
     * 玻璃深加工
     */
    private String blsjg;
    /**
     * 玻璃颜色
     */
    private String blys;
    /**
     * 拉手型号
     */
    private String lsxh;
    /**
     * 拉手位
     */
    private String lsw;
    /**
     * 开铰链孔
     */
    private String kjlk;
    /**
     * 链孔孔位
     */
    private String jlkw;
    /**
     * 铝型材-铝框
     */
    private String lxcLk;
    /**
     * 铝材颜色-铝框
     */
    private String lcysLk;
    /**
     * 附件配置
     */
    private String fjpz;
    /**
     * 铰链品牌
     */
    private String jlpp;
    /**
     * 配送区域
     */
    private String quyu;
}
