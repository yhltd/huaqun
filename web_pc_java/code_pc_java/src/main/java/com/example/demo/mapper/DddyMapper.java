package com.example.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.dddy;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface DddyMapper extends BaseMapper<dddy> {

    @Select("select * from dengdai_dayin")
    List<dddy> getList();


    @Update("update dengdai_dayin set P1 = #{p1},P2 = #{p2},P3 = #{p3},P4 = #{p4},P5 = #{p5},P6 = #{p6},P7 = #{p7} where id = #{id}")
    boolean update(String p1,String p2,String p3,String p4,String p5,String p6,String p7,int id);

}
