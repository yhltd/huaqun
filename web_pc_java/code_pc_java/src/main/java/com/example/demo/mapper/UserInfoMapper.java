package com.example.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.UserInfo;
import com.example.demo.entity.xlpz;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface UserInfoMapper extends BaseMapper<UserInfo> {

    @Select("select * from userInfo")
    List<UserInfo> getList();

    @Select("select * from userInfo where name like '%'+#{name}+'%' and pinyin like '%'+#{pinyin}+'%' ")
    List<UserInfo> queryList(String name,String pinyin);

    @Update("update userInfo set username = #{username},password = #{password},company = #{company},name = #{name},pinyin = #{pinyin},power = #{power},quyu = #{quyu},address_name = #{addressName},money = #{money},shendan = #{shendan},pay = #{pay},kailiao = #{kailiao},zuzhuang = #{zuzhuang},baozhuang = #{baozhuang} where id = #{id}")
    boolean update(String username,String password,String company,String name,String pinyin,String power,String quyu,String addressName,String money,String shendan,String pay,String kailiao,String zuzhuang,String baozhuang,int id);

    @Delete("delete from userInfo where id=#{id}")
    boolean delete(int id);

    @Insert("insert into userInfo(username,password,company,name,pinyin,power,quyu,address_name,money,shendan,pay,kailiao,zuzhuang,baozhuang) values(#{username},#{password},#{company},#{name},#{pinyin},#{power},#{quyu},#{addressName},#{money},#{shendan},#{pay},#{kailiao},#{zuzhuang},#{baozhuang})")
    boolean add(String username,String password,String name,String pinyin,String power,String quyu,String addressName,String money,String shendan,String pay,String kailiao,String zuzhuang,String baozhuang);

    @Select("select company from userInfo where power = '客户' ")
    List<UserInfo> hqxlKhmc();

}
