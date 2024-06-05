package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("otherconfigurations")
public class ddjgpz {
    /**
     * id自增列
     */
    @TableId(value = "id" , type = IdType.AUTO)
    private Integer id;
    /**
     * 灯带型号
     */
    private String ddxh;
    /**
     * 400mm单价
     */
    private String mmdj;
    /**
     * 每100mm增加单价
     */
    private String zjdj;
}
