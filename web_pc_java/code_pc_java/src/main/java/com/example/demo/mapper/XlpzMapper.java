package com.example.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.ddxd;
import com.example.demo.entity.xlpz;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface XlpzMapper extends BaseMapper<xlpz> {

    @Select("select * from dropdowntable")
    List<xlpz> getList();

    @Update("update dropdowntable set cxdk = #{cxdk},lxc = #{lxc},lcys = #{lcys},gy = #{gy},dy = #{dy},kg = #{kg},pj = #{pj},shfs = #{shfs},blsjg = #{blsjg},blys = #{blys},lsxh = #{lsxh},lsw = #{lsw},zuzhuang = #{zuzhuang},kjlk = #{kjlk},jlkw = #{jlkw},lxcLk = #{lxcLk},lcysLk = #{lcysLk},fjpz = #{fjpz} jlpp = #{jlpp},quyu = #{quyu} where id = #{id}")
    boolean update(String cxdk,String lxc,String lcys,String gy,String dy,String kg,String pj,String shfs,String blsjg,String blys,String lsxh,String lsw,String kjlk,String jlkw,String lxcLk,String lcysLk,String fjpz,String jlpp,String quyu,int id);

    @Delete("delete from dropdowntable where id=#{id}")
    boolean delete(int id);

    @Insert("insert into dropdowntable(cxdk,lxc,lcys,gy,dy,kg,pj,shfs,blsjg,blys,lsxh,lsw,kjlk,jlkw,lxc_lk,lcys_lk,fjpz,jlpp,quyu) values(#{cxdk},#{lxc},#{lcys},#{gy},#{dy},#{kg},#{pj},#{shfs},#{blsjg},#{blys},#{lsxh},#{lsw},#{kjlk},#{jlkw},#{lxcLk},#{lcysLk},#{fjpz},#{jlpp},#{quyu})")
    boolean add(String cxdk,String lxc,String lcys,String gy,String dy,String kg,String pj,String shfs,String blsjg,String blys,String lsxh,String lsw,String kjlk,String jlkw,String lxcLk,String lcysLk,String fjpz,String jlpp,String quyu);

    @Select("select lxc from dropdowntable")
    List<xlpz> hqxllxc();

    @Select("select dy from dropdowntable")
    List<xlpz> hqxlDy();

    @Select("select kg from dropdowntable")
    List<xlpz> hqxlKg();

    @Select("select pj from dropdowntable")
    List<xlpz> hqxlPj();

    @Select("select lcys from dropdowntable")
    List<xlpz> hqxlLcys();

    @Select("select shfs from dropdowntable")
    List<xlpz> hqxlShfs();

    @Select("select lxc_lk from dropdowntable")
    List<xlpz> hqxlLvxingcai();

    @Select("select lcys_lk from dropdowntable")
    List<xlpz> hqxlLvcaiYanse();

    @Select("select blsjg from dropdowntable")
    List<xlpz> hqxlBlsjg();

    @Select("select blys from dropdowntable")
    List<xlpz> hqxlBlys();

    @Select("select lsxh from dropdowntable")
    List<xlpz> hqxlLsxh();

    @Select("select kjlk from dropdowntable")
    List<xlpz> hqxlKjlk();

    @Select("select jlkw from dropdowntable")
    List<xlpz> hqxlJlkw();

    @Select("select fjpz from dropdowntable")
    List<xlpz> hqxlFjpz();

    @Select("select jlpp from dropdowntable")
    List<xlpz> hqxlJlpp();

    @Select("select gy from dropdowntable")
    List<xlpz> hqxlgy();

    @Select("select quyu from dropdowntable")
    List<xlpz> hqquyu();

    @Select("select kucun from dropdowntable")
    List<xlpz> hqkucun();

    @Select("select ghxl from dropdowntable")
    List<xlpz> ghxl();

}
