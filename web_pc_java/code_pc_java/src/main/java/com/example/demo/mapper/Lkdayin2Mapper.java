package com.example.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.lkdayin2;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface Lkdayin2Mapper extends BaseMapper<lkdayin2> {

    @Select("select * from lvkuang_dayin2")
    List<lkdayin2> getList();

    @Update("update lvkuang_dayin2 set P1 = #{p1},P2 = #{p2},P3 = #{p3},P4 = #{p4},P5 = #{p5},P6 = #{p6},P7 = #{p7},P8 = #{p8},P9 = #{p9},P10 = #{p10},P11 = #{p11},P12 = #{p12},P13 = #{p13},P14 = #{p14},P15 = #{p15},P16 = #{p16},P17 = #{p17},P18 = #{p18},P19 = #{p19},P20 = #{p20},P21 = #{p21},P22 = #{p22},P23 = #{p23} where id = #{id}")
    boolean update(String p1,String p2,String p3,String p4,String p5,String p6,String p7,String p8,String p9,String p10,String p11,String p12,String p13,String p14,String p15,String p16,String p17,String p18,String p19,String p20,String p21,String p22,String p23,int id);

}
