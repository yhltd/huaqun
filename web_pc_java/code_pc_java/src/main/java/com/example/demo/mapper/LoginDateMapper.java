package com.example.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.lkdayin2;
import com.example.demo.entity.loginDate;
import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author hui
 * @date 2024/7/24 9:36
 */
@Mapper
@Repository
public interface LoginDateMapper extends BaseMapper <loginDate>{
    @Insert("insert into login_date(username,name,login_date) values(#{userName},#{name},#{loginDate})")
    boolean add(String userName,String name,String loginDate);

    @Select("select * from login_date")
    List<loginDate> getList();

    @Delete("delete from login_date where id=#{id}")
    boolean deleteid(int id);


}
