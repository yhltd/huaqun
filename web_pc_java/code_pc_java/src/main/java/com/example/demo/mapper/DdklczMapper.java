package com.example.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.ddjgpz;
import com.example.demo.entity.ddklcz;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository

public interface DdklczMapper extends BaseMapper<ddklcz> {

    @Select("select * from dengdai_kailiao")
    List<ddklcz> getList();

    @Select("select * from dengdai_kailiao where name like '%'+#{name}+'%' ")
    List<ddklcz> queryList(String name);

    @Select("select chicun from dengdai_kailiao where name like '%'+#{name}+'%' ")
    String getchicun(String name);

    @Delete("delete from dengdai_kailiao where id=#{id}")
    boolean deleteid(int id);

    @Update("update dengdai_kailiao set name = #{name},chicun = #{chicun} where id = #{id}")
    boolean update(String name,String chicun,int id);

    @Insert("insert into dengdai_kailiao(name,chicun) values(#{name},#{chicun})")
    boolean add(String name, String chicun);

}
