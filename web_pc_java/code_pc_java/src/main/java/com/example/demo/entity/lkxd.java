package com.example.demo.entity;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

@Data
@TableName("lvkuang_xiadan")
public class lkxd {
    /**
     * id自增列
     */
    @TableId(value = "id" , type = IdType.AUTO)
    private Integer id;
    /**
     * 客户名称
     */
    private String customerName;
    /**
     * 下单日期
     */
    private String insertDate;
    /**
     * 单据编号
     */
    private String orderNumber;
    /**
     * 简码
     */
    private String pinyin;
    /**
     * 送货地址
     */
    private String shippingAddress;
    /**
     * 联系电话
     */
    private String phone;
    /**
     * 送货方式
     */
    private String shippingType;
    /**
     * 安装地址
     */
    private String installAddress;
    /**
     * 订单号
     */
    private String customerNumber;
    /**
     * 高
     */
    private String height;
    /**
     * 宽
     */
    private String width;
    /**
     * 铝型材
     */
    private String lvxingcai;
    /**
     * 下单数量
     */
    private String num;
    /**
     * 铝材颜色
     */
    private String lvcaiYanse;
    /**
     * 玻璃深加工
     */
    private String boliShenjiagong;
    /**
     * 玻璃颜色
     */
    private String boliYanse;
    /**
     * 拉手型号
     */
    private String lashouXinghao;
    /**
     * 铰链孔方向左
     */
    private String jiaoliankongFangxiangLeft;
    /**
     * 铰链孔方向右
     */
    private String jiaoliankongFangxiangRight;
    /**
     * 拉手数量左
     */
    private String lashouShuliangLeft;
    /**
     * 拉手数量右
     */
    private String lashouShuliangRight;
    /**
     * 左拉手位从上向下
     */
    private String lashouweiSelectLeft;
    /**
     * 左拉手位从右向左
     */
    private String lashouweiInsertLeft;
    /**
     * 右拉手位从下向上
     */
    private String lashouweiSelectRight;
    /**
     * 右拉手位从左向右
     */
    private String lashouweiInsertRight;
    /**
     * 装锁数量（左）
     */
    private String zhuangsuoshuliangInsertLeft1;
    /**
     * 装锁数量（右）
     */
    private String zhuangsuoshuliangInsertRight1;
    /**
     * 装锁方向（右）
     */
    private String zhuangsuofangxiangSelectRight;
    /**
     * 装锁方位（左1）
     */
    private String zhuangsuofangweiInsertLeft1;
    /**
     * 装锁方位（左2）
     */
    private String zhuangsuofangweiInsertLeft2;
    /**
     * 装锁方位（右1）
     */
    private String zhuangsuofangweiInsertRight1;
    /**
     * 装锁方位（右2）
     */
    private String zhuangsuofangweiInsertRight2;
    /**
     * 开铰链孔
     */
    private String kaijiaolian;
    /**
     * 左铰链孔从下向上
     */
    private String jiaolian1SelectLeft;
    /**
     * 左铰链孔从右向左
     */
    private String jiaolian1InsertLeft;
    /**
     * 右铰链孔从下向上
     */
    private String jiaolian1SelectRight;
    /**
     * 右铰链孔从左向右
     */
    private String jiaolian1InsertRight;
    /**
     * 左铰链孔2从下向上
     */
    private String jiaolian2SelectLeft;
    /**
     * 左铰链孔2从右向左
     */
    private String jiaolian2InsertLeft;
    /**
     * 右铰链孔2从下向上
     */
    private String jiaolian2SelectRight;
    /**
     * 右铰链孔2从左向右
     */
    private String jiaolian2InsertRight;
    /**
     * 左铰链孔3从下向上
     */
    private String jiaolian3SelectLeft;
    /**
     * 左铰链孔3从右向左
     */
    private String jiaolian3InsertLeft;
    /**
     * 右铰链孔3从下向上
     */
    private String jiaolian3SelectRight;
    /**
     * 右铰链孔3从左向右
     */
    private String jiaolian3InsertRight;
    /**
     * 左铰链孔4从下向上
     */
    private String jiaolian4SelectLeft;
    /**
     * 左铰链孔4从右向左
     */
    private String jiaolian4InsertLeft;
    /**
     * 右铰链孔4从下向上
     */
    private String jiaolian4SelectRight;
    /**
     * 右铰链孔4从左向右
     */
    private String jiaolian4InsertRight;
    /**
     * 左铰链孔5从下向上
     */
    private String jiaolian5SelectLeft;
    /**
     * 左铰链孔5从右向左
     */
    private String jiaolian5InsertLeft;
    /**
     * 右铰链孔5从下向上
     */
    private String jiaolian5SelectRight;
    /**
     * 右铰链孔5从左向右
     */
    private String jiaolian5InsertRight;
    /**
     * 左铰链孔6从下向上
     */
    private String jiaolian6SelectLeft;
    /**
     * 左铰链孔6从右向左
     */
    private String jiaolian6InsertLeft;
    /**
     * 右铰链孔6从下向上
     */
    private String jiaolian6SelectRight;
    /**
     * 右铰链孔6从左向右
     */
    private String jiaolian6InsertRight;
    /**
     * 附件1
     */
    private String fujianSelect1;
    /**
     * 附件2
     */
    private String fujianSelect2;
    /**
     * 附件3
     */
    private String fujianSelect3;
    /**
     * 附件4
     */
    private String fujianSelect4;
    /**
     * 品牌1
     */
    private String pinpaiSelect1;
    /**
     * 品牌2
     */
    private String pinpaiSelect2;
    /**
     * 品牌3
     */
    private String pinpaiSelect3;
    /**
     * 品牌4
     */
    private String pinpaiSelect4;
    /**
     * 附件数量1
     */
    private String fujianShuliang1;
    /**
     * 附件数量2
     */
    private String fujianShuliang2;
    /**
     * 附件数量3
     */
    private String fujianShuliang3;
    /**
     * 附件数量4
     */
    private String fujianShuliang4;
    /**
     * 数量(平方)
     */
    private String sumShuliang1;
    /**
     * 单价(平方)
     */
    private String danjia1;
    /**
     * 金额(平方)
     */
    private String sumJine1;
    /**
     * 数量(周长)
     */
    private String sumShuliang2;
    /**
     * 单价(周长)
     */
    private String danjia2;
    /**
     * 金额(周长)
     */
    private String sumJine2;
    /**
     * 完成
     */
    private String wancheng;
    /**
     * 其他项目(说明)
     */
    private String qita;
    /**
     * 录入员
     */
    private String customerNameRenyuan;
    /***
     * 包装
     */
    private String baoZhuang;
    /**
     * 完成状态
     */

    /**
     * 组装
     */
    private String zuzhuang;
}
