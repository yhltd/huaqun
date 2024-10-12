package com.example.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.lkcz;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface LkczMapper extends BaseMapper<lkcz> {
    @Select("select * from refertable")
    List<lkcz> getList();

    @Select("select * from refertable where lkxh like '%'+#{lkxh}+'%' ")
    List<lkcz> queryList(String lkxh);

    @Delete("delete from refertable where id=#{id}")
    boolean deleteid(int id);

    @Update("update refertable set lkxh = #{lkxh},yanse = #{yanse},chang = #{chang},kuan = #{kuan} where id = #{id}")
    boolean update(String lkxh,String yanse,String chang,String kuan,int id);

    @Insert("insert into refertable(lkxh,yanse,chang,kuan) values(#{lkxh},#{yanse},#{chang},#{kuan})")
    boolean add(String lkxh,String yanse,String chang,String kuan);

    @Select("select chang from refertable where lkxh = #{lkxh} and yanse = #{yanse}")
    String getList1(String lkxh,String yanse);
    @Select("select kuan from refertable where lkxh = #{lkxh} and yanse = #{yanse}")
    String getList2(String lkxh,String yanse);

}
