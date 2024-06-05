package com.example.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.ddjgpz;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface DdjgpzMapper extends BaseMapper<ddjgpz> {

    @Select("select * from otherconfigurations")
    List<ddjgpz> getList();

    @Select("select * from otherconfigurations where ddxh like '%'+#{ddxh}+'%' ")
    List<ddjgpz> queryList(String ddxh);

    @Delete("delete from otherconfigurations where id=#{id}")
    boolean deleteid(int id);

    @Update("update otherconfigurations set ddxh = #{ddxh},mmdj = #{mmdj},zjdj = #{zjdj} where id = #{id}")
    boolean update(String ddxh,String mmdj,String zjdj,int id);

    @Insert("insert into otherconfigurations(ddxh,mmdj,zjdj) values(#{ddxh},#{mmdj},#{zjdj})")
    boolean add(String ddxh, String mmdj, String zjdj);
}
