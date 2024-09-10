package com.example.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.ddxd;
import com.example.demo.entity.psd;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface PsdMapper extends BaseMapper<psd> {

//    @Select("select * from erqi_peisongdan")
//    List<psd> getList();
@Select("select * from erqi_peisongdan order by order_number desc")
List<psd> getList();

//    @Select("select * from erqi_peisongdan where customer_name=#{customerName}")
//    List<psd> getListByName(String customerName);
@Select("select * from erqi_peisongdan where customer_name=#{customerName} order by order_number desc")
List<psd> getListByName(String customerName);


    @Select("select wancheng from erqi_peisongdan where id=#{id}")
    String getListBydjbh(int id);

//    @Select("select * from erqi_peisongdan where order_number like '%'+#{orderNumber}+'%' and customer_name like '%'+#{customerName}+'%' and quyu like '%'+#{quyu}+'%' and anzhuang_address like '%'+#{anzhuangAddress}+'%' and customer_order like '%'+#{customerOrder}+'%' and isnull(wancheng,'') like '%'+#{wancheng}+'%' and kucun like '%'+#{kucun}+'%' and insert_date >= #{ksinsertDate} and insert_date <= #{jsinsertDate}")
//    List<psd> queryList(String orderNumber, String customerName, String quyu, String anzhuangAddress, String customerOrder,String ksinsertDate, String jsinsertDate, String wancheng, String kucun);
@Select("select * from erqi_peisongdan where order_number like '%'+#{orderNumber}+'%' and customer_name like '%'+#{customerName}+'%' and quyu like '%'+#{quyu}+'%' and anzhuang_address like '%'+#{anzhuangAddress}+'%' and customer_order like '%'+#{customerOrder}+'%' and isnull(wancheng,'') like '%'+#{wancheng}+'%' and kucun like '%'+#{kucun}+'%' and insert_date >= #{ksinsertDate} and insert_date <= #{jsinsertDate} order by order_number desc")
List<psd> queryList(String orderNumber, String customerName, String quyu, String anzhuangAddress, String customerOrder,String ksinsertDate, String jsinsertDate, String wancheng, String kucun);
    @Delete("delete from erqi_peisongdan where id=#{id}")
    boolean deleteid(int id);

//    @Update("update erqi_peisongdan set order_number=#{orderNumber},quyu=#{quyu},insert_date=#{insert_date},customer_name=#{customerName},customer_name_renyuan=#{customerNameRenyuan},customer_name_riqi=#{customerNameRiqi},customer_need_text=#{customerNeedText},customer_need_text_renyuan=#{customerNeedTextRenyuan},customer_need_text_riqi=#{customerNeedTextRiqi},customer_need_img1=#{customerNeedImg1},customer_need_img1_renyuan=#{customerNeedImg1Renyuan},customer_need_img1_riqi=#{customerNeedImg1Riqi},customer_need_text1=#{customerNeedText1},customer_need_text1_renyuan=#{customerNeedText1Renyuan},customer_need_text1_riqi=#{customerNeedText1Riqi},customer_need_text2=#{customerNeedText2},customer_need_text2_renyuan=#{customerNeedText2Renyuan},customer_need_text2_riqi=#{customerNeedText2Riqi},songhuo_address=#{songhuoAddress},songhuo_address_renyuan=#{songhuoAddressRenyuan},songhuo_address_riqi=#{songhuoAddressRiqi},anzhuang_address=#{anzhuangAddress},anzhuang_address_renyuan=#{anzhuangAddressRenyuan},anzhuang_address_riqi=#{anzhuangAddressRiqi},phone=#{phone},phone_renyuan=#{phoneRenyuan},phone_riqi=#{phoneRiqi},customer_order=#{customerOrder},customer_order_renyuan=#{customerOrderRenyuan},customer_order_riqi=#{customerOrderRiqi},songhuo_danhao=#{songhuoDanhao},songhuo_danhao_renyuan=#{songhuoDanhaoRenyuan},songhuo_danhao_riqi=#{songhuoDanhaoRiqi},peihuo_img1=#{peihuoImg1},peihuo_img1_renyuan=#{peihuoImg1Renyuan},peihuo_img1_riqi=#{peihuoImg1Riqi},peihuo_img2=#{peihuoImg2},peihuo_img2_renyuan=#{peihuoImg2Renyuan},peihuo_img2_riqi=#{peihuoImg2Riqi},peihuo_img3=#{peihuoImg3},peihuo_img3_renyuan=#{peihuoImg3Renyuan},peihuo_img3_riqi=#{peihuoImg3Riqi},peihuo_img4=#{peihuoImg4},peihuo_img4_renyuan=#{peihuoImg4Renyuan},peihuo_img4_riqi=#{peihuoImg4Riqi},peihuo_img5=#{peihuoImg5},peihuo_img5_renyuan=#{peihuoImg5Renyuan},peihuo_img5_riqi=#{peihuoImg5Riqi},peisong_img1=#{peisongImg1},peisong_img1_renyuan=#{peisongImg1Renyuan},peisong_img1_riqi=#{peisongImg1Riqi},peisong_img2=#{peisongImg2},peisong_img2_renyuan=#{peisongImg2Renyuan},peisong_img2_riqi=#{peisongImg2Riqi},peisong_img3=#{peisongImg3},peisong_img3_renyuan=#{peisongImg3Renyuan},peisong_img3_riqi=#{peisongImg3Riqi},wancheng=#{wancheng},wancheng_renyuan=#{wanchengRenyuan},wancheng_riqi=#{wanchengRiqi},beizhu=#{beizhu},beizhu_renyuan=#{beizhuRenyuan},beizhu_riqi=#{beizhuRiqi},kucun_text=#{kucunText},kucun_text_renyuan=#{kucunTextRenyuan},kucun_text_riqi=#{kucunTextRiqi},kucun_img1=#{kucunImg1},kucun_img1_renyuan=#{kucunImg1Renyuan},kucun_img1_riqi=#{kucunImg1Riqi},kucun_img2=#{kucunImg2},kucun_img2_renyuan=#{kucunImg2Renyuan},kucun_img2_riqi=#{kucunImg2Riqi},kucun_img3=#{kucunImg3},kucun_img3_renyuan=#{kucunImg3Renyuan},kucun_img3_riqi=#{kucunImg3Riqi},money=#{money},money_renyuan=#{moneyRenyuan},money_riqi=#{moneyRiqi},shoukuan=#{shoukuan},shoukuan_renyuan=#{shoukuanRenyuan},shoukuan_riqi=#{shoukuanRiqi},songhuoyuan=#{songhuoyuan},customer_need_img2=#{customerNeedImg2},customer_need_img3=#{customerNeedImg3},customer_need_img4=#{customerNeedImg4},customer_need_img5=#{customerNeedImg5},customer_need_img6=#{customerNeedImg6},customer_need_img7=#{customerNeedImg7},customer_need_img8=#{customerNeedImg8},peihuo_img6=#{peihuoImg6},peihuo_img7=#{peihuoImg7},peihuo_img8=#{peihuoImg8},peisong_img4=#{peisongImg4},peisong_img5=#{peisongImg5},peisong_img6=#{peisongImg6},peisong_img7=#{peisongImg7},peisong_img8=#{peisongImg8},kucun_img4=#{kucunImg4},kucun_img5=#{kucunImg5},kucun_img6=#{kucunImg6},kucun_img7=#{kucunImg7},kucun_img8=#{kucunImg8},wenjian_img1=#{wenjianImg1},wenjian_img=#{wenjianImg2},wenjian_img3=#{wenjianImg3},wenjian_img4=#{wenjianImg4},wenjian_img5=#{wenjianImg5},wenjian_img6=#{wenjianImg6},wenjian_img7=#{wenjianImg7},wenjian_img8=#{wenjianImg8},wenjian_img1_renyuan=#{wenjianImg1Renyuan},wenjian_img1_riqi=#{wenjianImg1Riqi} where id = #{id}")
//    boolean update(String orderNumber,String quyu, String insertDate, String customerName, String customerNameRenyuan, String customerNameRiqi, String customerNeedText, String customerNeedTextRenyuan, String customerNeedTextRiqi, String customerNeedImg1, String customerNeedImg1Renyuan, String customerNeedImg1Riqi, String customerNeedText1, String customerNeedText1Renyuan, String customerNeedText1Riqi, String customerNeedText2, String customerNeedText2Renyuan, String customerNeedText2Riqi, String songhuoAddress, String songhuoAddressRenyuan, String songhuoAddressRiqi, String anzhuangAddress, String anzhuangAddressRenyuan, String anzhuangAddressRiqi, String phone, String phoneRenyuan, String phoneRiqi, String customerOrder, String customerOrderRenyuan, String customerOrderRiqi, String songhuoDanhao, String songhuoDanhaoRenyuan, String songhuoDanhaoRiqi, String peihuoImg1, String peihuoImg1Renyuan, String peihuoImg1Riqi, String peihuoImg2, String peihuoImg2Renyuan, String peihuoImg2Riqi, String peihuoImg3, String peihuoImg3Renyuan, String peihuoImg3Riqi, String peihuoImg4, String peihuoImg4Renyuan, String peihuoImg4Riqi, String peihuoImg5, String peihuoImg5Renyuan, String peihuoImg5Riqi, String peisongImg1, String peisongImg1Renyuan, String peisongImg1Riqi, String peisongImg2, String peisongImg2Renyuan, String peisongImg2Riqi, String peisongImg3, String peisongImg3Renyuan, String peisongImg3Riqi, String wancheng, String wanchengRenyuan, String wanchengRiqi, String beizhu, String beizhuRenyuan, String beizhuRiqi, String kucunText, String kucunTextRenyuan, String kucunTextRiqi, String kucunImg1, String kucunImg1Renyuan, String kucunImg1Riqi, String kucunImg2, String kucunImg2Renyuan, String kucunImg2Riqi, String kucunImg3, String kucunImg3Renyuan, String kucunImg3riqi, String money, String moneyRenyuan, String moneyRiqi, String shoukuan, String shoukuanRenyuan, String shoukuanRiqi, String customerNeedImg2, String customerNeedImg3, String customerNeedImg4, String customerNeedImg5, String customerNeedImg6, String customerNeedImg7, String customerNeedImg8, String peihuoImg6, String peihuoImg7, String peihuoImg8, String peisongImg4, String peisongImg5, String peisongImg6, String peisongImg7, String peisongImg8, String kucunImg4, String kucunImg5, String kucunImg6, String kucunImg7, String kucunimg8, String wenjianImg1, String wenjianImg2, String wenjianImg3, String wenjianImg4, String wenjianImg5, String wenjianImg6, String wenjianImg7, String wenjianImg8, String wenjianImg1Renyuan,String wenjianImg1Riqi,int id);
@Update("update erqi_peisongdan set order_number=#{orderNumber},quyu=#{quyu},insert_date=#{insert_date},customer_name=#{customerName},customer_name_renyuan=#{customerNameRenyuan},customer_name_riqi=#{customerNameRiqi},customer_need_text=#{customerNeedText},customer_need_text_renyuan=#{customerNeedTextRenyuan},customer_need_text_riqi=#{customerNeedTextRiqi},customer_need_img1=#{customerNeedImg1},customer_need_img1_renyuan=#{customerNeedImg1Renyuan},customer_need_img1_riqi=#{customerNeedImg1Riqi},customer_need_text1=#{customerNeedText1},customer_need_text1_renyuan=#{customerNeedText1Renyuan},customer_need_text1_riqi=#{customerNeedText1Riqi},customer_need_text2=#{customerNeedText2},customer_need_text2_renyuan=#{customerNeedText2Renyuan},customer_need_text2_riqi=#{customerNeedText2Riqi},songhuo_address=#{songhuoAddress},songhuo_address_renyuan=#{songhuoAddressRenyuan},songhuo_address_riqi=#{songhuoAddressRiqi},anzhuang_address=#{anzhuangAddress},anzhuang_address_renyuan=#{anzhuangAddressRenyuan},anzhuang_address_riqi=#{anzhuangAddressRiqi},phone=#{phone},phone_renyuan=#{phoneRenyuan},phone_riqi=#{phoneRiqi},customer_order=#{customerOrder},customer_order_renyuan=#{customerOrderRenyuan},customer_order_riqi=#{customerOrderRiqi},songhuo_danhao=#{songhuoDanhao},songhuo_danhao_renyuan=#{songhuoDanhaoRenyuan},songhuo_danhao_riqi=#{songhuoDanhaoRiqi},peihuo_img1=#{peihuoImg1},peihuo_img1_renyuan=#{peihuoImg1Renyuan},peihuo_img1_riqi=#{peihuoImg1Riqi},peihuo_img2=#{peihuoImg2},peihuo_img2_renyuan=#{peihuoImg2Renyuan},peihuo_img2_riqi=#{peihuoImg2Riqi},peihuo_img3=#{peihuoImg3},peihuo_img3_renyuan=#{peihuoImg3Renyuan},peihuo_img3_riqi=#{peihuoImg3Riqi},peihuo_img4=#{peihuoImg4},peihuo_img4_renyuan=#{peihuoImg4Renyuan},peihuo_img4_riqi=#{peihuoImg4Riqi},peihuo_img5=#{peihuoImg5},peihuo_img5_renyuan=#{peihuoImg5Renyuan},peihuo_img5_riqi=#{peihuoImg5Riqi},peisong_img1=#{peisongImg1},peisong_img1_renyuan=#{peisongImg1Renyuan},peisong_img1_riqi=#{peisongImg1Riqi},peisong_img2=#{peisongImg2},peisong_img2_renyuan=#{peisongImg2Renyuan},peisong_img2_riqi=#{peisongImg2Riqi},peisong_img3=#{peisongImg3},peisong_img3_renyuan=#{peisongImg3Renyuan},peisong_img3_riqi=#{peisongImg3Riqi},wancheng=#{wancheng},wancheng_renyuan=#{wanchengRenyuan},wancheng_riqi=#{wanchengRiqi},beizhu=#{beizhu},beizhu_renyuan=#{beizhuRenyuan},beizhu_riqi=#{beizhuRiqi},kucun_text=#{kucun},kucun_text_renyuan=#{kucunTextRenyuan},kucun_text_riqi=#{kucunTextRiqi},kucun_text=#{kucunText},kucun_img1=#{kucunImg1},kucun_img1_renyuan=#{kucunImg1Renyuan},kucun_img1_riqi=#{kucunImg1Riqi},kucun_img2=#{kucunImg2},kucun_img2_renyuan=#{kucunImg2Renyuan},kucun_img2_riqi=#{kucunImg2Riqi},kucun_img3=#{kucunImg3},kucun_img3_renyuan=#{kucunImg3Renyuan},kucun_img3_riqi=#{kucunImg3Riqi},money=#{money},money_renyuan=#{moneyRenyuan},money_riqi=#{moneyRiqi},shoukuan=#{shoukuan},shoukuan_renyuan=#{shoukuanRenyuan},shoukuan_riqi=#{shoukuanRiqi},songhuoyuan=#{songhuoyuan},customer_need_img2=#{customerNeedImg2},customer_need_img3=#{customerNeedImg3},customer_need_img4=#{customerNeedImg4},customer_need_img5=#{customerNeedImg5},customer_need_img6=#{customerNeedImg6},customer_need_img7=#{customerNeedImg7},customer_need_img8=#{customerNeedImg8},peihuo_img6=#{peihuoImg6},peihuo_img7=#{peihuoImg7},peihuo_img8=#{peihuoImg8},peisong_img4=#{peisongImg4},peisong_img5=#{peisongImg5},peisong_img6=#{peisongImg6},peisong_img7=#{peisongImg7},peisong_img8=#{peisongImg8},kucun_img4=#{kucunImg4},kucun_img5=#{kucunImg5},kucun_img6=#{kucunImg6},kucun_img7=#{kucunImg7},kucun_img8=#{kucunImg8},wenjian_img1=#{wenjianImg1},wenjian_img=#{wenjianImg2},wenjian_img3=#{wenjianImg3},wenjian_img4=#{wenjianImg4},wenjian_img5=#{wenjianImg5},wenjian_img6=#{wenjianImg6},wenjian_img7=#{wenjianImg7},wenjian_img8=#{wenjianImg8},wenjian_img1_renyuan=#{wenjianImg1Renyuan},wenjian_img1_riqi=#{wenjianImg1Riqi} where id = #{id}")
boolean update(String orderNumber,String quyu, String insertDate, String customerName, String customerNameRenyuan, String customerNameRiqi, String customerNeedText, String customerNeedTextRenyuan, String customerNeedTextRiqi, String customerNeedImg1, String customerNeedImg1Renyuan, String customerNeedImg1Riqi, String customerNeedText1, String customerNeedText1Renyuan, String customerNeedText1Riqi, String customerNeedText2, String customerNeedText2Renyuan, String customerNeedText2Riqi, String songhuoAddress, String songhuoAddressRenyuan, String songhuoAddressRiqi, String anzhuangAddress, String anzhuangAddressRenyuan, String anzhuangAddressRiqi, String phone, String phoneRenyuan, String phoneRiqi, String customerOrder, String customerOrderRenyuan, String customerOrderRiqi, String songhuoDanhao, String songhuoDanhaoRenyuan, String songhuoDanhaoRiqi, String peihuoImg1, String peihuoImg1Renyuan, String peihuoImg1Riqi, String peihuoImg2, String peihuoImg2Renyuan, String peihuoImg2Riqi, String peihuoImg3, String peihuoImg3Renyuan, String peihuoImg3Riqi, String peihuoImg4, String peihuoImg4Renyuan, String peihuoImg4Riqi, String peihuoImg5, String peihuoImg5Renyuan, String peihuoImg5Riqi, String peisongImg1, String peisongImg1Renyuan, String peisongImg1Riqi, String peisongImg2, String peisongImg2Renyuan, String peisongImg2Riqi, String peisongImg3, String peisongImg3Renyuan, String peisongImg3Riqi, String wancheng, String wanchengRenyuan, String wanchengRiqi, String beizhu, String beizhuRenyuan, String beizhuRiqi, String kucun, String kucunTextRenyuan, String kucunTextRiqi, String kucunText, String kucunImg1, String kucunImg1Renyuan, String kucunImg1Riqi, String kucunImg2, String kucunImg2Renyuan, String kucunImg2Riqi, String kucunImg3, String kucunImg3Renyuan, String kucunImg3riqi, String money, String moneyRenyuan, String moneyRiqi, String shoukuan, String shoukuanRenyuan, String shoukuanRiqi, String customerNeedImg2, String customerNeedImg3, String customerNeedImg4, String customerNeedImg5, String customerNeedImg6, String customerNeedImg7, String customerNeedImg8, String peihuoImg6, String peihuoImg7, String peihuoImg8, String peisongImg4, String peisongImg5, String peisongImg6, String peisongImg7, String peisongImg8, String kucunImg4, String kucunImg5, String kucunImg6, String kucunImg7, String kucunimg8, String wenjianImg1, String wenjianImg2, String wenjianImg3, String wenjianImg4, String wenjianImg5, String wenjianImg6, String wenjianImg7, String wenjianImg8, String wenjianImg1Renyuan,String wenjianImg1Riqi,int id);
//    @Insert("insert into erqi_peisongdan(order_number,quyu,insert_date,customer_name,customer_name_renyuan,customer_name_riqi,customer_need_text,customer_need_text_renyuan,customer_need_text_riqi,customer_need_img1,customer_need_img2,customer_need_img3,customer_need_img4,customer_need_img5,customer_need_img6,customer_need_img7,customer_need_img8,customer_need_img1_renyuan,customer_need_img1_riqi,customer_need_text1,customer_need_text1_renyuan,customer_need_text1_riqi,customer_need_text2,customer_need_text2_renyuan,customer_need_text2_riqi,songhuo_address,songhuo_address_renyuan,songhuo_address_riqi,anzhuang_address,anzhuang_address_renyuan,anzhuang_address_riqi,phone,phone_renyuan,phone_riqi,customer_order,customer_order_renyuan,customer_order_riqi,songhuo_danhao,songhuo_danhao_renyuan,songhuo_danhao_riqi,peihuo_img1,peihuo_img1_renyuan,peihuo_img1_riqi,peihuo_img2,peihuo_img2_renyuan,peihuo_img2_riqi,peihuo_img3,peihuo_img3_renyuan,peihuo_img3_riqi,peihuo_img4,peihuo_img4_renyuan,peihuo_img4_riqi,peihuo_img5,peihuo_img6,peihuo_img7,peihuo_img8,peihuo_img5_renyuan,peihuo_img5_riqi,peisong_img1,peisong_img1_renyuan,peisong_img1_riqi,peisong_img2,peisong_img2_renyuan,peisong_img2_riqi,peisong_img3,peisong_img4,peisong_img5,peisong_img6,peisong_img7,peisong_img8,peisong_img3_renyuan,peisong_img3_riqi,wancheng,wancheng_renyuan,wancheng_riqi,beizhu,beizhu_renyuan,beizhu_riqi,kucun_text,kucun_text_renyuan,kucun_text_riqi,kucun_img1,kucun_img1_renyuan,kucun_img1_riqi,kucun_img2,kucun_img2_renyuan,kucun_img2_riqi,kucun_img3,kucunImg4,kucun_img5,kucun_img6,kucun_img7,kucun_img8,kucun_img3_renyuan,kucun_img3_riqi,money,money_renyuan,money_riqi,shoukuan,shoukuan_renyuan,shoukuan_riqi,songhuoyuan,wenjian_img1,wenjian_img2,wenjian_img3,wenjian_img4,wenjian_img5,wenjian_img6,wenjian_img7,wenjian_img8,wenjian_img1_renyuan,wenjian_img1_riqi) values (#{orderNumber},#{quyu},#{insert_date},#{customerName},#{customerNameRenyuan},#{customerNameRiqi},#{customerNeedText},#{customerNeedTextRenyuan},#{customerNeedTextRiqi},#{customerNeedImg2},#{customerNeedImg3},#{customerNeedImg4},#{customerNeedImg5},#{customerNeedImg6},#{customerNeedImg7},#{customerNeedImg8},#{customerNeedImg1Renyuan},#{customerNeedImg1Riqi},#{customerNeedText1},#{customerNeedText1Renyuan},#{customerNeedText1Riqi},#{customerNeedText2},#{customerNeedText2Renyuan},#{customerNeedText2Riqi},#{songhuoAddress},#{songhuoAddressRenyuan},#{songhuoAddressRiqi},#{anzhuangAddress},#{anzhuangAddressRenyuan},#{anzhuangAddressRiqi},#{phone},#{phoneRenyuan},#{phoneRiqi},#{customerOrder},#{customerOrderRenyuan},#{customerOrderRiqi},#{songhuoDanhao},#{songhuoDanhaoRenyuan},#{songhuoDanhaoRiqi},#{peihuoImg1},#{peihuoImg1Renyuan},#{peihuoImg1Riqi},#{peihuoImg2},#{peihuoImg2Renyuan},#{peihuoImg2Riqi},#{peihuoImg3},#{peihuoImg3Renyuan},#{peihuoImg3Riqi},#{peihuoImg4},#{peihuoImg4Renyuan},#{peihuoImg4Riqi},#{peihuoImg5},#{peihuoImg6},#{peihuoImg7},#{peihuoImg8},#{peihuoImg5Renyuan},#{peihuoImg5Riqi},#{peisongImg1},#{peisongImg1Renyuan},#{peisongImg1Riqi},#{peisongImg2},#{peisongImg2Renyuan},#{peisongImg2Riqi},#{peisongImg3},#{peisongImg4},#{peisongImg5},#{peisongImg6},#{peisongImg7},#{peisongImg8},#{peisongImg3Renyuan},#{peisongImg3Riqi},#{wancheng},#{wanchengRenyuan},#{wanchengRiqi},#{beizhu},#{beizhuRenyuan},#{beizhuRiqi},#{kucunText},#{kucunTextRenyuan},#{kucunTextRiqi},#{kucunImg1},#{kucunImg1Renyuan},#{kucunImg1Riqi},#{kucunImg2},#{kucunImg2Renyuan},#{kucunImg2Riqi},#{kucunImg3},#{kucunImg4},#{kucunImg5},#{kucunImg6},#{kucunImg7},#{kucunImg8},#{kucunImg3Renyuan},#{kucunImg3Riqi},#{money},#{moneyRenyuan},#{moneyRiqi},#{shoukuan},#{shoukuanRenyuan},#{shoukuanRiqi},#{songhuoyuan},#{wenjianImg1},#{wenjianImg2},{wenjianImg3},#{wenjianImg4},#{wenjianImg5},#{wenjianImg6},#{wenjianImg7},#{wenjianImg8},#{wenjianImg1Renyuan},#{wenjianImg1Riqi})")
//    boolean add(String orderNumber,String quyu,String insertDate,String customerName,String customerNameRenyuan,String customerNameRiqi,String customerNeedText,String customerNeedTextRenyuan,String customerNeedTextRiqi,String customerNeedImg2,String customerNeedImg3,String customerNeedImg4,String customerNeedImg5,String customerNeedImg6,String customerNeedImg7,String customerNeedImg8,String customerNeedImg1Renyuan,String customerNeedImg1Riqi,String customerNeedText1,String customerNeedText1Renyuan,String customerNeedText1Riqi,String customerNeedText2,String customerNeedText2Renyuan,String customerNeedText2Riqi,String songhuoAddress,String songhuoAddressRenyuan,String songhuoAddressRiqi,String anzhuangAddress,String anzhuangAddressRenyuan,String anzhuangAddressRiqi,String phone,String phoneRenyuan,String phoneRiqi,String customerOrder,String customerOrderRenyuan,String customerOrderRiqi,String songhuoDanhao,String songhuoDanhaoRenyuan,String songhuoDanhaoRiqi,String peihuoImg1,String peihuoImg1Renyuan,String peihuoImg1Riqi,String peihuoImg2,String peihuoImg2Renyuan,String peihuoImg2Riqi,String peihuoImg3,String peihuoImg3Renyuan,String peihuoImg3Riqi,String peihuoImg4,String peihuoImg4Renyuan,String peihuoImg4Riqi,String peihuoImg5,String peihuoImg6,String peihuoImg7,String peihuoImg8,String peihuoImg5Renyuan,String peihuoImg5Riqi,String peisongImg1,String peisongImg1Renyuan,String peisongImg1Riqi,String peisongImg2,String peisongImg2Renyuan,String peisongImg2Riqi,String peisongImg3,String peisongImg4,String peisongImg5,String peisongImg6,String peisongImg7,String peisongImg8,String peisongImg3Renyuan,String peisongImg3Riqi,String wancheng,String wanchengRenyuan,String wanchengRiqi,String beizhu,String beizhuRenyuan,String beizhuRiqi,String kucunText,String kucunTextRenyuan,String kucunTextRiqi,String kucunImg1,String kucunImg1Renyuan,String kucunImg1Riqi,String kucunImg2,String kucunImg2Renyuan,String kucunImg2Riqi,String kucunImg3,String kucunImg4,String kucunImg5,String kucunImg6,String kucunImg7,String kucunImg8,String kucunImg3Renyuan,String kucunImg3Riqi,String money,String moneyRenyuan,String moneyRiqi,String shoukuan,String shoukuanRenyuan,String shoukuanRiqi,String songhuoyuan,String wenjianImg1,String wenjianImg2,String wenjianImg3,String wenjianImg4,String wenjianImg5,String wenjianImg6,String wenjianImg7,String wenjianImg8,String wenjianImg1Renyuan,String wenjianImg1Riqi);
//@Insert("insert into erqi_peisongdan(order_number,quyu,insert_date,customer_name,customer_name_renyuan,customer_name_riqi,customer_need_text,customer_need_text_renyuan,customer_need_text_riqi,customer_need_img1,customer_need_img2,customer_need_img3,customer_need_img4,customer_need_img5,customer_need_img6,customer_need_img7,customer_need_img8,customer_need_img1_renyuan,customer_need_img1_riqi,customer_need_text1,customer_need_text1_renyuan,customer_need_text1_riqi,customer_need_text2,customer_need_text2_renyuan,customer_need_text2_riqi,songhuo_address,songhuo_address_renyuan,songhuo_address_riqi,anzhuang_address,anzhuang_address_renyuan,anzhuang_address_riqi,phone,phone_renyuan,phone_riqi,customer_order,customer_order_renyuan,customer_order_riqi,songhuo_danhao,songhuo_danhao_renyuan,songhuo_danhao_riqi,peihuo_img1,peihuo_img1_renyuan,peihuo_img1_riqi,peihuo_img2,peihuo_img2_renyuan,peihuo_img2_riqi,peihuo_img3,peihuo_img3_renyuan,peihuo_img3_riqi,peihuo_img4,peihuo_img4_renyuan,peihuo_img4_riqi,peihuo_img5,peihuo_img6,peihuo_img7,peihuo_img8,peihuo_img5_renyuan,peihuo_img5_riqi,peisong_img1,peisong_img1_renyuan,peisong_img1_riqi,peisong_img2,peisong_img2_renyuan,peisong_img2_riqi,peisong_img3,peisong_img4,peisong_img5,peisong_img6,peisong_img7,peisong_img8,peisong_img3_renyuan,peisong_img3_riqi,wancheng,wancheng_renyuan,wancheng_riqi,beizhu,beizhu_renyuan,beizhu_riqi,kucun_text,kucun_text_renyuan,kucun_text_riqi,kucun_img1,kucun_img1_renyuan,kucun_img1_riqi,kucun_img2,kucun_img2_renyuan,kucun_img2_riqi,kucun_img3,kucunImg4,kucun_img5,kucun_img6,kucun_img7,kucun_img8,kucun_img3_renyuan,kucun_img3_riqi,money,money_renyuan,money_riqi,shoukuan,shoukuan_renyuan,shoukuan_riqi,songhuoyuan,wenjian_img1,wenjian_img2,wenjian_img3,wenjian_img4,wenjian_img5,wenjian_img6,wenjian_img7,wenjian_img8,wenjian_img1_renyuan,wenjian_img1_riqi) values (#{orderNumber},#{quyu},#{insert_date},#{customerName},#{customerNameRenyuan},#{customerNameRiqi},#{customerNeedText},#{customerNeedTextRenyuan},#{customerNeedTextRiqi},'',#{customerNeedImg2},#{customerNeedImg3},#{customerNeedImg4},#{customerNeedImg5},#{customerNeedImg6},#{customerNeedImg7},#{customerNeedImg8},#{customerNeedImg1Renyuan},#{customerNeedImg1Riqi},#{customerNeedText1},#{customerNeedText1Renyuan},#{customerNeedText1Riqi},#{customerNeedText2},#{customerNeedText2Renyuan},#{customerNeedText2Riqi},#{songhuoAddress},#{songhuoAddressRenyuan},#{songhuoAddressRiqi},#{anzhuangAddress},#{anzhuangAddressRenyuan},#{anzhuangAddressRiqi},#{phone},#{phoneRenyuan},#{phoneRiqi},#{customerOrder},#{customerOrderRenyuan},#{customerOrderRiqi},#{songhuoDanhao},#{songhuoDanhaoRenyuan},#{songhuoDanhaoRiqi},#{peihuoImg1},#{peihuoImg1Renyuan},#{peihuoImg1Riqi},#{peihuoImg2},#{peihuoImg2Renyuan},#{peihuoImg2Riqi},#{peihuoImg3},#{peihuoImg3Renyuan},#{peihuoImg3Riqi},#{peihuoImg4},#{peihuoImg4Renyuan},#{peihuoImg4Riqi},#{peihuoImg5},#{peihuoImg6},#{peihuoImg7},#{peihuoImg8},#{peihuoImg5Renyuan},#{peihuoImg5Riqi},#{peisongImg1},#{peisongImg1Renyuan},#{peisongImg1Riqi},#{peisongImg2},#{peisongImg2Renyuan},#{peisongImg2Riqi},#{peisongImg3},#{peisongImg4},#{peisongImg5},#{peisongImg6},#{peisongImg7},#{peisongImg8},#{peisongImg3Renyuan},#{peisongImg3Riqi},#{wancheng},#{wanchengRenyuan},#{wanchengRiqi},#{beizhu},#{beizhuRenyuan},#{beizhuRiqi},#{kucunText},#{kucunTextRenyuan},#{kucunTextRiqi},#{kucunImg1},#{kucunImg1Renyuan},#{kucunImg1Riqi},#{kucunImg2},#{kucunImg2Renyuan},#{kucunImg2Riqi},#{kucunImg3},#{kucunImg4},#{kucunImg5},#{kucunImg6},#{kucunImg7},#{kucunImg8},#{kucunImg3Renyuan},#{kucunImg3Riqi},#{money},#{moneyRenyuan},#{moneyRiqi},#{shoukuan},#{shoukuanRenyuan},#{shoukuanRiqi},#{songhuoyuan},#{wenjianImg1},#{wenjianImg2},{wenjianImg3},#{wenjianImg4},#{wenjianImg5},#{wenjianImg6},#{wenjianImg7},#{wenjianImg8},#{wenjianImg1Renyuan},#{wenjianImg1Riqi})")
//boolean add(String orderNumber,String quyu,String insertDate,String customerName,String customerNameRenyuan,String customerNameRiqi,String customerNeedText,String customerNeedTextRenyuan,String customerNeedTextRiqi,String customerNeedImg2,String customerNeedImg3,String customerNeedImg4,String customerNeedImg5,String customerNeedImg6,String customerNeedImg7,String customerNeedImg8,String customerNeedImg1Renyuan,String customerNeedImg1Riqi,String customerNeedText1,String customerNeedText1Renyuan,String customerNeedText1Riqi,String customerNeedText2,String customerNeedText2Renyuan,String customerNeedText2Riqi,String songhuoAddress,String songhuoAddressRenyuan,String songhuoAddressRiqi,String anzhuangAddress,String anzhuangAddressRenyuan,String anzhuangAddressRiqi,String phone,String phoneRenyuan,String phoneRiqi,String customerOrder,String customerOrderRenyuan,String customerOrderRiqi,String songhuoDanhao,String songhuoDanhaoRenyuan,String songhuoDanhaoRiqi,String peihuoImg1,String peihuoImg1Renyuan,String peihuoImg1Riqi,String peihuoImg2,String peihuoImg2Renyuan,String peihuoImg2Riqi,String peihuoImg3,String peihuoImg3Renyuan,String peihuoImg3Riqi,String peihuoImg4,String peihuoImg4Renyuan,String peihuoImg4Riqi,String peihuoImg5,String peihuoImg6,String peihuoImg7,String peihuoImg8,String peihuoImg5Renyuan,String peihuoImg5Riqi,String peisongImg1,String peisongImg1Renyuan,String peisongImg1Riqi,String peisongImg2,String peisongImg2Renyuan,String peisongImg2Riqi,String peisongImg3,String peisongImg4,String peisongImg5,String peisongImg6,String peisongImg7,String peisongImg8,String peisongImg3Renyuan,String peisongImg3Riqi,String wancheng,String wanchengRenyuan,String wanchengRiqi,String beizhu,String beizhuRenyuan,String beizhuRiqi,String kucunText,String kucunTextRenyuan,String kucunTextRiqi,String kucunImg1,String kucunImg1Renyuan,String kucunImg1Riqi,String kucunImg2,String kucunImg2Renyuan,String kucunImg2Riqi,String kucunImg3,String kucunImg4,String kucunImg5,String kucunImg6,String kucunImg7,String kucunImg8,String kucunImg3Renyuan,String kucunImg3Riqi,String money,String moneyRenyuan,String moneyRiqi,String shoukuan,String shoukuanRenyuan,String shoukuanRiqi,String songhuoyuan,String wenjianImg1,String wenjianImg2,String wenjianImg3,String wenjianImg4,String wenjianImg5,String wenjianImg6,String wenjianImg7,String wenjianImg8,String wenjianImg1Renyuan,String wenjianImg1Riqi);
@Insert("insert into erqi_peisongdan(order_number,quyu,insert_date,customer_name,customer_name_renyuan,customer_name_riqi,customer_need_text,customer_need_text_renyuan,customer_need_text_riqi,customer_need_img1,customer_need_img2,customer_need_img3,customer_need_img4,customer_need_img5,customer_need_img6,customer_need_img7,customer_need_img8,customer_need_img1_renyuan,customer_need_img1_riqi,customer_need_text1,customer_need_text1_renyuan,customer_need_text1_riqi,customer_need_text2,customer_need_text2_renyuan,customer_need_text2_riqi,songhuo_address,songhuo_address_renyuan,songhuo_address_riqi,anzhuang_address,anzhuang_address_renyuan,anzhuang_address_riqi,phone,phone_renyuan,phone_riqi,customer_order,customer_order_renyuan,customer_order_riqi,songhuo_danhao,songhuo_danhao_renyuan,songhuo_danhao_riqi,peihuo_img1,peihuo_img1_renyuan,peihuo_img1_riqi,peihuo_img2,peihuo_img2_renyuan,peihuo_img2_riqi,peihuo_img3,peihuo_img3_renyuan,peihuo_img3_riqi,peihuo_img4,peihuo_img4_renyuan,peihuo_img4_riqi,peihuo_img5,peihuo_img6,peihuo_img7,peihuo_img8,peihuo_img5_renyuan,peihuo_img5_riqi,peisong_img1,peisong_img1_renyuan,peisong_img1_riqi,peisong_img2,peisong_img2_renyuan,peisong_img2_riqi,peisong_img3,peisong_img4,peisong_img5,peisong_img6,peisong_img7,peisong_img8,peisong_img3_renyuan,peisong_img3_riqi,wancheng,wancheng_renyuan,wancheng_riqi,beizhu,beizhu_renyuan,beizhu_riqi,kucun,kucun_text_renyuan,kucun_text_riqi,kucun_text,kucun_img1,kucun_img1_renyuan,kucun_img1_riqi,kucun_img2,kucun_img2_renyuan,kucun_img2_riqi,kucun_img3,kucunImg4,kucun_img5,kucun_img6,kucun_img7,kucun_img8,kucun_img3_renyuan,kucun_img3_riqi,money,money_renyuan,money_riqi,shoukuan,shoukuan_renyuan,shoukuan_riqi,songhuoyuan,wenjian_img1,wenjian_img2,wenjian_img3,wenjian_img4,wenjian_img5,wenjian_img6,wenjian_img7,wenjian_img8,wenjian_img1_renyuan,wenjian_img1_riqi) values (#{orderNumber},#{quyu},#{insert_date},#{customerName},#{customerNameRenyuan},#{customerNameRiqi},#{customerNeedText},#{customerNeedTextRenyuan},#{customerNeedTextRiqi},'',#{customerNeedImg2},#{customerNeedImg3},#{customerNeedImg4},#{customerNeedImg5},#{customerNeedImg6},#{customerNeedImg7},#{customerNeedImg8},#{customerNeedImg1Renyuan},#{customerNeedImg1Riqi},#{customerNeedText1},#{customerNeedText1Renyuan},#{customerNeedText1Riqi},#{customerNeedText2},#{customerNeedText2Renyuan},#{customerNeedText2Riqi},#{songhuoAddress},#{songhuoAddressRenyuan},#{songhuoAddressRiqi},#{anzhuangAddress},#{anzhuangAddressRenyuan},#{anzhuangAddressRiqi},#{phone},#{phoneRenyuan},#{phoneRiqi},#{customerOrder},#{customerOrderRenyuan},#{customerOrderRiqi},#{songhuoDanhao},#{songhuoDanhaoRenyuan},#{songhuoDanhaoRiqi},#{peihuoImg1},#{peihuoImg1Renyuan},#{peihuoImg1Riqi},#{peihuoImg2},#{peihuoImg2Renyuan},#{peihuoImg2Riqi},#{peihuoImg3},#{peihuoImg3Renyuan},#{peihuoImg3Riqi},#{peihuoImg4},#{peihuoImg4Renyuan},#{peihuoImg4Riqi},#{peihuoImg5},#{peihuoImg6},#{peihuoImg7},#{peihuoImg8},#{peihuoImg5Renyuan},#{peihuoImg5Riqi},#{peisongImg1},#{peisongImg1Renyuan},#{peisongImg1Riqi},#{peisongImg2},#{peisongImg2Renyuan},#{peisongImg2Riqi},#{peisongImg3},#{peisongImg4},#{peisongImg5},#{peisongImg6},#{peisongImg7},#{peisongImg8},#{peisongImg3Renyuan},#{peisongImg3Riqi},#{wancheng},#{wanchengRenyuan},#{wanchengRiqi},#{beizhu},#{beizhuRenyuan},#{beizhuRiqi},#{kucun},#{kucunTextRenyuan},#{kucunTextRiqi},#{kucunText},#{kucunImg1},#{kucunImg1Renyuan},#{kucunImg1Riqi},#{kucunImg2},#{kucunImg2Renyuan},#{kucunImg2Riqi},#{kucunImg3},#{kucunImg4},#{kucunImg5},#{kucunImg6},#{kucunImg7},#{kucunImg8},#{kucunImg3Renyuan},#{kucunImg3Riqi},#{money},#{moneyRenyuan},#{moneyRiqi},#{shoukuan},#{shoukuanRenyuan},#{shoukuanRiqi},#{songhuoyuan},#{wenjianImg1},#{wenjianImg2},{wenjianImg3},#{wenjianImg4},#{wenjianImg5},#{wenjianImg6},#{wenjianImg7},#{wenjianImg8},#{wenjianImg1Renyuan},#{wenjianImg1Riqi})")
boolean add(String orderNumber,String quyu,String insertDate,String customerName,String customerNameRenyuan,String customerNameRiqi,String customerNeedText,String customerNeedTextRenyuan,String customerNeedTextRiqi,String customerNeedImg2,String customerNeedImg3,String customerNeedImg4,String customerNeedImg5,String customerNeedImg6,String customerNeedImg7,String customerNeedImg8,String customerNeedImg1Renyuan,String customerNeedImg1Riqi,String customerNeedText1,String customerNeedText1Renyuan,String customerNeedText1Riqi,String customerNeedText2,String customerNeedText2Renyuan,String customerNeedText2Riqi,String songhuoAddress,String songhuoAddressRenyuan,String songhuoAddressRiqi,String anzhuangAddress,String anzhuangAddressRenyuan,String anzhuangAddressRiqi,String phone,String phoneRenyuan,String phoneRiqi,String customerOrder,String customerOrderRenyuan,String customerOrderRiqi,String songhuoDanhao,String songhuoDanhaoRenyuan,String songhuoDanhaoRiqi,String peihuoImg1,String peihuoImg1Renyuan,String peihuoImg1Riqi,String peihuoImg2,String peihuoImg2Renyuan,String peihuoImg2Riqi,String peihuoImg3,String peihuoImg3Renyuan,String peihuoImg3Riqi,String peihuoImg4,String peihuoImg4Renyuan,String peihuoImg4Riqi,String peihuoImg5,String peihuoImg6,String peihuoImg7,String peihuoImg8,String peihuoImg5Renyuan,String peihuoImg5Riqi,String peisongImg1,String peisongImg1Renyuan,String peisongImg1Riqi,String peisongImg2,String peisongImg2Renyuan,String peisongImg2Riqi,String peisongImg3,String peisongImg4,String peisongImg5,String peisongImg6,String peisongImg7,String peisongImg8,String peisongImg3Renyuan,String peisongImg3Riqi,String wancheng,String wanchengRenyuan,String wanchengRiqi,String beizhu,String beizhuRenyuan,String beizhuRiqi,String kucun,String kucunTextRenyuan,String kucunTextRiqi,String kucunText,String kucunImg1,String kucunImg1Renyuan,String kucunImg1Riqi,String kucunImg2,String kucunImg2Renyuan,String kucunImg2Riqi,String kucunImg3,String kucunImg4,String kucunImg5,String kucunImg6,String kucunImg7,String kucunImg8,String kucunImg3Renyuan,String kucunImg3Riqi,String money,String moneyRenyuan,String moneyRiqi,String shoukuan,String shoukuanRenyuan,String shoukuanRiqi,String songhuoyuan,String wenjianImg1,String wenjianImg2,String wenjianImg3,String wenjianImg4,String wenjianImg5,String wenjianImg6,String wenjianImg7,String wenjianImg8,String wenjianImg1Renyuan,String wenjianImg1Riqi);










    @Select("select * from erqi_peisongdan where insert_date >= #{ksinsertDate} and insert_date <= #{jsinsertDate} ")
    List<psd> queryList1(String ksinsertDate,String jsinsertDate);

    @Select("select * from erqi_peisongdan where customer_name=#{customerName}")
    List<psd> getListByPsd(String customerName);
    @Update("update erqi_peisongdan set wancheng = #{wancheng} where order_number=#{orderNumber}")
    boolean upwc(String wancheng, String orderNumber);
    @Update("update erqi_peisongdan set shoukuan = #{shoukuan} where order_number=#{orderNumber}")
    boolean upsk(String shoukuan, String orderNumber);
    @Update("update erqi_peisongdan set quyu = #{quyu} where order_number=#{orderNumber}")
    boolean upqy(String quyu, String orderNumber);
    @Update("update erqi_peisongdan set money = #{money} where order_number=#{orderNumber}")
    boolean upmy(String money, String orderNumber);
}
