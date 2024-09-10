package com.example.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.UserInfo;
import com.example.demo.entity.loginDate;
import com.example.demo.entity.xlpz;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface UserInfoMapper extends BaseMapper<UserInfo> {

    @Select("select * from userInfo")
    List<UserInfo> getList();

    @Select("select * from userInfo where company like '%'+#{company}+'%' and pinyin like '%'+#{pinyin}+'%' ")
    List<UserInfo> queryList(String company,String pinyin);

    @Update("update userInfo set username = #{username},password = #{password},company = #{company},name = #{name},pinyin = #{pinyin},power = #{power},quyu = #{quyu},address_name = #{addressName},money = #{money},shendan = #{shendan},pay = #{pay},kailiao = #{kailiao},zuzhuang = #{zuzhuang},baozhuang = #{baozhuang} where id = #{id}")
    boolean update(String username,String password,String company,String name,String pinyin,String power,String quyu,String addressName,String money,String shendan,String pay,String kailiao,String zuzhuang,String baozhuang,int id);

    @Delete("delete from userInfo where id=#{id}")
    boolean delete(int id);

    @Insert("insert into userInfo(username,password,company,name,pinyin,power,quyu,address_name,money,shendan,pay,kailiao,zuzhuang,baozhuang) values(#{username},#{password},#{company},#{name},#{pinyin},#{power},#{quyu},#{addressName},#{money},#{shendan},#{pay},#{kailiao},#{zuzhuang},#{baozhuang})")
    boolean add(String username,String password,String name,String pinyin,String power,String quyu,String addressName,String money,String shendan,String pay,String kailiao,String zuzhuang,String baozhuang);

//    @Select("select company from userInfo where power = '客户' ")
//    List<UserInfo> hqxlKhmc();
@Select("select distinct company from userInfo where power = '客户' ")
List<UserInfo> hqxlKhmc();

//    @Select("select company from userInfo where power = '客户' and name=#{name}")
//    List<UserInfo> hqxlKhmc1(String name);
@Select("select distinct company from userInfo where power = '客户' and name=#{name}")
List<UserInfo> hqxlKhmc1(String name);


    @Select("select name from userInfo where username = #{username}")
    List<UserInfo> getNameByUsername(String username);

    @Select("select * from userInfo where power = '客户' or power = '玻璃厂' or power = '操作员' or username=#{username} ORDER BY CASE power  " +
            "    WHEN '管理员' THEN 1  " +
            "    WHEN '操作员' THEN 2  " +
            "    WHEN '客户' THEN 3  " +
            "    WHEN '玻璃厂' THEN 4  END;")
    List<UserInfo> glgetList(String username);

    @Select("select * from userInfo where username=#{username}")
    List<UserInfo> czygetKist(String username);
//    @Update("UPDATE userInfo  " +
//            "SET username = #{username},  " +
//            "    password = #{password},  " +
//            "    company = #{company},  " +
//            "    name = #{name},  " +
//            "    pinyin = #{pinyin},  " +
//            "    quyu = #{quyu},  " +
//            "    address_name = #{addressName},  " +
//            "    money = #{money},  " +
//            "    shendan = #{shendan},  " +
//            "    pay = #{pay},  " +
//            "    kailiao = #{kailiao},  " +
//            "    zuzhuang = #{zuzhuang},  " +
//            "    baozhuang = #{baozhuang}  " +
//            "WHERE id = #{id} AND power IN ('操作员', '客户', '玻璃厂');")
//    boolean glupdate(String username,String password,String company,String name,String pinyin,String power,String quyu,String addressName,String money,String shendan,String pay,String kailiao,String zuzhuang,String baozhuang,int id);
    @Select("selcect name from userInfo where username=#{username}")
    String getName(String username);

    @Select("select company from userInfo where power='玻璃厂' ")
            List<UserInfo> GYS();
    @Select("select name from userInfo where power='管理员' or power='操作员' or power='超级管理员' ")
    List<UserInfo> gzry();
}
