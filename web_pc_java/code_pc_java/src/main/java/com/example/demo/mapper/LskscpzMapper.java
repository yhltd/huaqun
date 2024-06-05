package com.example.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.lskscpz;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface LskscpzMapper extends BaseMapper<lskscpz> {
    @Select("select * from lashou_peizhi")
    List<lskscpz> getList();

    @Delete("delete from lashou_peizhi where id=#{id}")
    boolean deleteid(int id);

    @Update("update lashou_peizhi set lashou = #{lashou},lvxingcai = #{lvxingcai} where id = #{id}")
    boolean update(String lashou,String lvxingcai,int id);

    @Insert("insert into lashou_peizhi(lashou,lvxingcai) values(#{lashou},#{lvxingcai})")
    boolean add(String lashou, String lvxingcai);

}
