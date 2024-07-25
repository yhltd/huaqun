package com.example.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.ddxd;
import com.example.demo.entity.lkxd;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface LkxdMapper extends BaseMapper<lkxd> {

    @Select("select * from lvkuang_xiadan order by order_number DESC")
//    @Select("select customer_name_renyuan,insert_date,customer_name,wancheng,order_number,kailiao,shunxu,zuzhuang,baozhuang,customer_number,install_address,phone,shipping_address,pinyin,shendan,wancheng,shunxu as paixu from lvkuang_xiadan group by customer_name_renyuan,insert_date,customer_name,wancheng,order_number,kailiao,shunxu,zuzhuang,baozhuang,customer_number,install_address,phone,shipping_address,pinyin,shendan order by paixu,order_number desc;select insert_date,order_number,customer_name,num,'' as num,height,width,'正在加工' as jiagong,'' as shendan from lvkuang_xiadan where height != ''")
    List<lkxd> getList();

    @Select("select * from lvkuang_xiadan where customer_number like '%'+#{customerNumber}+'%' and customer_name like '%'+#{customerName}+'%'  and install_address like '%'+#{installAddress}+'%' and wancheng like'%'+#{wancheng}+'%' and insert_date >= #{ksinsertDate} and insert_date <= #{jsinsertDate} ")
    List<lkxd> queryList(String customerNumber, String customerName,String installAddress,String wancheng,String ksinsertDate, String jsinsertDate);

    @Select("select pinyin from userInfo where company like '%'+#{customerName}+'%' ")
    List<lkxd> queryPinYin(String customerName);

    @Delete("delete from lvkuang_xiadan where id=#{id}")
    boolean deleteid(int id);

    @Update("update lvkuang_xiadan set customer_name = #{customerName},insert_date = #{insertDate},order_number = #{orderNumber},pinyin = #{pinyin},shipping_address = #{shippingAddress},phone = #{phone},shipping_type = #{shippingType},install_address = #{installAddress},customer_number = #{customerNumber},height = #{height},width = #{width},num = #{num},lvxingcai = #{lvxingcai},lvcai_yanse = #{lvcaiYanse},boli_shenjiagong = #{boliShenjiagong},boli_yanse = #{boliYanse},lashou_xinghao = #{lashouXinghao},jiaoliankong_fangxiang_left = #{jiaoliankongFangxiangLeft},jiaoliankong_fangxiang_right = #{jiaoliankongFangxiangRight},lashou_shuliang_left = #{lashoushuliangLeft},lashou_shuliang_right = #{lashoushuliangRight},lashouwei_select_left = #{lashouweiselectleft},lashouwei_insert_left = #{lashouweiinsertleft},lashouwei_select_right = #{lashouweiselectright},lashouwei_insert_right = #{lashouweiinsertright},zhuangsuoshuliang_insert_left1 = #{zhuangsuoshulianginsertleft1},zhuangsuoshuliang_insert_right1 = #{zhuangsuoshulianginsertright1},zhuangsuofangwei_insert_left1 = #{zhuangsuofangweiinsertleft1},zhuangsuofangwei_insert_left2 = #{zhuangsuofangweiinsertleft2},zhuangsuofangwei_insert_right1 = #{zhuangsuofangweiinsertright1},zhuangsuofangwei_insert_right2 = #{zhuangsuofangweiinsertright2},kaijiaolian = #{kaijiaolian},jiaolian1_select_left = #{jiaolian1selectleft},jiaolian1_insert_left = #{jiaolian1insertleft},jiaolian1_select_right = #{jiaolian1selectright},jiaolian1_insert_right = #{jiaolian1insertright},jiaolian2_select_left = #{jiaolian2selectleft},jiaolian2_insert_left = #{jiaolian2insertleft},jiaolian2_select_right = #{jiaolian2selectright},jiaolian2_insert_right = #{jiaolian2insertright},jiaolian3_select_left = #{jiaolian3selectleft},jiaolian3_insert_left = #{jiaolian3insertleft},jiaolian3_select_right = #{jiaolian3selectright},jiaolian3_insert_right = #{jiaolian3insertright},jiaolian4_select_left = #{jiaolian4selectleft},jiaolian4_insert_left = #{jiaolian4insertleft},jiaolian4_select_right = #{jiaolian4selectright},jiaolian4_insert_right = #{jiaolian4insertright},jiaolian5_select_left = #{jiaolian5selectleft},jiaolian5_insert_left = #{jiaolian5insertleft},jiaolian5_select_right = #{jiaolian5selectright},jiaolian5_insert_right = #{jiaolian5insertright},jiaolian6_insert_left = #{jiaolian6insertleft},jiaolian6_select_right = #{jiaolian6selectright},jiaolian6_insert_right = #{jiaolian6insertright}fujian_select1 = #{fujianselect1},fujian_select2 = #{fujianselect2},fujian_select3 = #{fujianselect3},fujian_select4 = #{fujianselect4},pinpai_select1 = #{pinpaiselect1},pinpai_select2 = #{pinpaiselect2},pinpai_select3 = #{pinpaiselect3},pinpai_select4 = #{pinpaiselect4},fujian_shuliang1 = #{fujianshuliang1},fujian_shuliang2 = #{fujianshuliang2},fujian_shuliang3 = #{fujianshuliang3},fujian_shuliang4 = #{fujian_shuliang4},sum_shuliang1 = #{sumshuliang1},danjia1 = #{danjia1},sum_jine1 = #{sumjine1},sum_shuliang2 = #{sumshuliang2},danjia2 = #{danjia2},sum_jine2 = #{sumjine2},wancheng = #{wancheng},qita = #{qita},customer_name_renyuan = #{customernamerenyuan} where id = #{id}")
    boolean update(String customerName,String insertDate,String orderNumber,String pinyin,String shippingAddress,String phone,String shippingType,String installAddress,String customerNumber,String height,String width,String num,String lvxingcai,String lvcaiYanse,String boliShenjiagong,String boliYanse,String lashouXinghao,String jiaoliankongFangxiangLeft,String jiaoliankongFangxiangRight,String lashoushuliangLeft,String lashoushuliangRight,String lashouweiSelectLeft,String lashouweiInsertLeft,String lashouweiSelectRight,String lashouweiInsertRight,String zhuangsuoshuliangInsertLeft1,String zhuangsuoshuliangInsertRight1,String zhuangsuofangweiInsertLeft1,String zhuangsuofangweiInsertLeft2,String zhuangsuofangweiInsertRight1,String zhuangsuofangweiInsertRight2,String kaijiaolian,String jiaolian1SelectLeft,String jiaolian1InsertLeft,String jiaolian1SelectRight,String jiaolian1InsertRight,String jiaolian2SelectLeft,String jiaolian2InsertLeft,String jiaolian2SelectRight,String jiaolian2InsertRight,String jiaolian3SelectLeft,String jiaolian3InsertLeft,String jiaolian3SelectRight,String jiaolian3InsertRight,String jiaolian4SelectLeft,String jiaolian4InsertLeft,String jiaolian4SelectRight,String jiaolian4InsertRight,String jiaolian5SelectLeft,String jiaolian5InsertLeft,String jiaolian5SelectRight,String jiaolian5InsertRight,String jiaolian6InsertLeft,String jiaolian6SelectRight,String jiaolian6InsertRight,String fujianSelect1,String fujianSelect2,String fujianSelect3,String fujianSelect4,String pinpaiSelect1,String pinpaiSelect2,String pinpaiSelect3,String pinpaiSelect4,String fujianShuliang1,String fujianShuliang2,String fujianShuliang3,String fujianShuliang4,String sumShuliang1,String danjia1,String sumJine1,String sumShuliang2,String danjia2,String sumJine2,String wancheng,String qita,String customerNameRenyuan,int id);

    @Insert("insert into lvkuang_xiadan(customer_name,insert_date,order_number,pinyin,shipping_address,phone,shipping_type,install_address,customer_number,height,width,num,lvxingcai,lvcai_yanse,boli_shenjiagong,boli_yanse,lashou_xinghao,jiaoliankong_fangxiang_left,jiaoliankong_fangxiang_right,lashou_shuliang_left,lashou_shuliang_right,lashouwei_select_left,lashouwei_insert_left,lashouwei_select_right,lashouwei_insert_right,zhuangsuoshuliang_insert_left1,zhuangsuoshuliang_insert_right1,zhuangsuofangwei_insert_left1,zhuangsuofangwei_insert_left2,zhuangsuofangwei_insert_right1,zhuangsuofangwei_insert_right2,kaijiaolian,jiaolian1_select_left,jiaolian1_insert_left,jiaolian1_select_right,jiaolian1_insert_right,jiaolian2_select_left,jiaolian2_insert_left,jiaolian2_select_right,jiaolian2_insert_right,jiaolian3_select_left,jiaolian3_insert_left,jiaolian3_select_right,jiaolian3_insert_right,jiaolian4_select_left,jiaolian4_insert_left,jiaolian4_select_right,jiaolian4_insert_right,jiaolian5_select_left,jiaolian5_insert_left,jiaolian5_select_right,jiaolian5_insert_right,jiaolian6_select_left,jiaolian6_insert_left,jiaolian6_select_right,jiaolian6_insert_right,fujian_select1,fujian_select2,fujian_select3,fujian_select4,pinpai_select1,pinpai_select2,pinpai_select3,pinpai_select4,fujian_shuliang1,fujian_shuliang2,fujian_shuliang3,fujian_shuliang4,sum_shuliang1,danjia1,sum_jine1,sum_shuliang2,danjia2,sum_jine2,wancheng,qita,customer_name_renyuan) values(#{customerName},#{insertDate},#{orderNumber},#{pinyin},#{shippingAddress},#{phone},#{shippingType},#{installAddress},#{customerNumber},#{height},#{width},#{num},#{lvxingcai},#{lvcaiYanse},#{boliShenjiagong},#{boliYanse},#{lashouXinghao},#{jiaoliankongFangxiangLeft},#{jiaoliankongFangxiangRight},#{lashoushuliangLeft},#{lashoushuliangRight},#{lashouweiSelectLeft},#{lashouweiInsertLeft},#{lashouweiSelectRight},#{lashouweiInsertRight},#{zhuangsuoshuliangInsertLeft1},#{zhuangsuoshuliangInsertRight1},#{zhuangsuofangweiInsertLeft1},#{zhuangsuofangweiInsertLeft2}, #{zhuangsuofangweiInsertRight1},#{zhuangsuofangweiInsertRight2},#{kaijiaolian},#{jiaolian1SelectLeft},#{jiaolian1InsertLeft},#{jiaolian1SelectRight},#{jiaolian1InsertRight},#{jiaolian2SelectLeft},#{jiaolian2InsertLeft},#{jiaolian2SelectRight},#{jiaolian2InsertRight},#{jiaolian3SelectLeft},#{jiaolian3InsertLeft},#{jiaolian3SelectRight},#{jiaolian3InsertRight},#{jiaolian4SelectLeft},#{jiaolian4InsertLeft},#{jiaolian4SelectRight},#{jiaolian4InsertRight},#{jiaolian5SelectLeft},#{jiaolian5InsertLeft},#{jiaolian5SelectRight},#{jiaolian5InsertRight},#{jiaolian6InsertLeft},#{jiaolian6SelectRight},#{jiaolian6InsertRight},#{fujianSelect1},#{fujianSelect2},#{fujianSelect3},#{fujianSelect4},#{pinpaiSelect1},#{pinpaiSelect2},#{pinpaiSelect3},#{pinpaiSelect4},#{fujianShuliang1},#{fujianShuliang2},#{fujianShuliang3},#{fujianShuliang4},#{sumShuliang1},#{danjia1},#{sumJine1},#{sumShuliang2},#{danjia2},#{sumJine2},#{wancheng},#{qita},#{customerNameRenyuan})")
    boolean add(String customerName,String insertDate,String orderNumber,String pinyin,String shippingAddress,String phone,String shippingType,String installAddress,String customerNumber,String height,String width,String num,String lvxingcai,String lvcaiYanse,String boliShenjiagong,String boliYanse,String lashouXinghao,String jiaoliankongFangxiangLeft,String jiaoliankongFangxiangRight,String lashoushuliangLeft,String lashoushuliangRight,String lashouweiSelectLeft,String lashouweiInsertLeft,String lashouweiSelectRight,String lashouweiInsertRight,String zhuangsuoshuliangInsertLeft1,String zhuangsuoshuliangInsertRight1,String zhuangsuofangweiInsertLeft1,String zhuangsuofangweiInsertLeft2,String zhuangsuofangweiInsertRight1,String zhuangsuofangweiInsertRight2,String kaijiaolian,String jiaolian1SelectLeft,String jiaolian1InsertLeft,String jiaolian1SelectRight,String jiaolian1InsertRight,String jiaolian2SelectLeft,String jiaolian2InsertLeft,String jiaolian2SelectRight,String jiaolian2InsertRight,String jiaolian3SelectLeft,String jiaolian3InsertLeft,String jiaolian3SelectRight,String jiaolian3InsertRight,String jiaolian4SelectLeft,String jiaolian4InsertLeft,String jiaolian4SelectRight,String jiaolian4InsertRight,String jiaolian5SelectLeft,String jiaolian5InsertLeft,String jiaolian5SelectRight,String jiaolian5InsertRight,String jiaolian6InsertLeft,String jiaolian6SelectRight,String jiaolian6InsertRight,String fujianSelect1,String fujianSelect2,String fujianSelect3,String fujianSelect4,String pinpaiSelect1,String pinpaiSelect2,String pinpaiSelect3,String pinpaiSelect4,String fujianShuliang1,String fujianShuliang2,String fujianShuliang3,String fujianShuliang4,String sumShuliang1,String danjia1,String sumJine1,String sumShuliang2,String danjia2,String sumJine2,String wancheng,String qita,String customerNameRenyuan);

    @Select("select * from lvkuang_xiadan where customer_name=#{customerName} and insert_date=#{insertDate} and order_number=#{orderNumber}")
    List<lkxd> getListByKhmc(String customerName,String insertDate,String orderNumber);

}
