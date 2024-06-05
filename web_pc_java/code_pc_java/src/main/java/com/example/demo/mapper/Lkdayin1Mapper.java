package com.example.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.lkdayin1;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface Lkdayin1Mapper extends BaseMapper<lkdayin1> {

    @Select("select * from lvkuang_dayin")
    List<lkdayin1> getList();

    @Update("update lvkuang_dayin set P1 = #{p1},P2 = #{p2},P3 = #{p3},P4 = #{p4},P5 = #{p5},P6 = #{p6},P7 = #{p7},P8 = #{p8},P9 = #{p9},P10 = #{p10},P11 = #{p11} where id = #{id}")
    boolean update(String p1,String p2,String p3,String p4,String p5,String p6,String p7,String p8,String p9,String p10,String p11,int id);

}
