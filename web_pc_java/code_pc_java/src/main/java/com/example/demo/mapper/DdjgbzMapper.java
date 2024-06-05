package com.example.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.ddjgbz;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface DdjgbzMapper extends BaseMapper<ddjgbz> {
    @Select("select * from shoufei_biaozhun")
    List<ddjgbz> getList();

    @Update("update shoufei_biaozhun set sfbz = #{sfbz} where id = #{id}")
    boolean update(String username,int id);


}
