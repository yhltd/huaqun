package com.example.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.ddklcz;
import com.example.demo.entity.ddxd;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface DdxdMapper extends BaseMapper<ddxd> {

    @Select("select * from lightbelt")
    List<ddxd> getList();

    @Select("select * from lightbelt where khmc like '%'+#{khmc}+'%' and ddh like '%'+#{ddh}+'%' ")
    List<ddxd> queryList(String khmc, String ddh);

    @Delete("delete from lightbelt where id=#{id}")
    boolean deleteid(int id);

    @Update("update lightbelt set khmc=#{khmc},chicun=#{chicun},djbh=#{djbh},shouhuo=#{shouhuo},lxdh=#{lxdh},shfs=#{shfs},azdz=#{azdz},ddh=#{ddh},luruyuan=#{luruyuan},fj=#{fj},gh=#{gh},lcys=#{lcys},ddcd=#{ddcd},sl=#{sl},cxdk=#{cxdk},cxdk_right=#{cxdkright},gy=#{gy},gl=#{gl},bz=#{bz},dj=#{dj},je=#{je},chicun=#{chicun} where id=#{id}")
    boolean update(String khmc,String xdrq,String djbh,String shouhuo,String lxdh,String shfs,String azdz,String ddh,String luruyuan,String fj,String gh,String lcys,String ddcd,String sl,String cxdk,String cxdkright,String gy,String gl,String bz,String dj,String je,String chicun,int id);

    @Insert("insert into lightbelt(khmc,xdrq,djbh,shouhuo,lxdh,shfs,azdz,ddh,luruyuan,fj,gh,lcys,ddcd,sl,cxdk,cxdk_right,gy,gl,bz,dj,je,chicun) values(#{khmc},#{xdrq},#{djbh},#{shouhuo},#{lxdh},#{shfs},#{azdz},#{ddh},#{luruyuan},#{fj},#{gh},#{lcys},#{ddcd},#{sl},#{cxdk},#{cxdkRight},#{gy},#{gl},#{bz},#{dj},#{je}#{chicun})")
    void add(String khmc,String xdrq,String djbh,String shouhuo,String lxdh,String shfs,String azdz,String ddh,String luruyuan,String fj,String gh,String lcys,String ddcd,String sl,String cxdk,String cxdkRight,String gy,String gl,String bz,String dj,String je,String chicun);
}
