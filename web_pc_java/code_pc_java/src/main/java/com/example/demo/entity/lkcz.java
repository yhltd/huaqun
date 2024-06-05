package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("refertable")
public class lkcz {
    /**
     * id自增列
     */
    @TableId(value = "id" , type = IdType.AUTO)
    private Integer id;
    /**
     * 铝框型号
     */
    private String lkxh;
    /**
     * 长
     */
    private String chang;
    /**
     * 宽
     */
    private String kuan;
    /**
     * 颜色
     */
    private String yanse;
}
