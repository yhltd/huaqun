package com.example.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.ddklcz;
import com.example.demo.entity.ddxd;
import com.example.demo.entity.psd;
import com.example.demo.util.SessionUtil;
import org.apache.ibatis.annotations.*;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface DdxdMapper extends BaseMapper<ddxd> {

    @Select("select distinct ddh,luruyuan,case when isnull(wancheng,'未审验') = '' then '未审验' else isnull(wancheng,'未审验') end as wancheng,xdrq,djbh,shouhuo,lxdh,shfs,azdz,khmc,case when isnull(fkzt,'未付款') = '' then '未付款' else isnull(fkzt,'未付款') end as fkzt,isnull(hd,'')as hd,case case when isnull(wancheng,'未审验') = '' then '未审验' else isnull(wancheng,'未审验') end when '未审验' then '1' when '优先处理' then '2' when '已审验' then '3' when '正在加工' then '4' when '加工完成' then '5' when '完成' then '6' else shunxu end as shunxu,sum_money,jgczy,wcsj from lightbelt order by shunxu,djbh DESC")
    List<ddxd> getList();

    @Select("select * from lightbelt where djbh=#{djbh} order by djbh DESC")
    List<ddxd> getListdjbh(String djbh);

//    @Select("select * from lightbelt where khmc=#{khmc} order by djbh DESC")
//    List<ddxd> getListByName(String khmc);
@Select("select distinct ddh,luruyuan,xdrq,djbh,shouhuo,lxdh,shfs,azdz,khmc from lightbelt where khmc =#{khmc} order by djbh DESC")
List<ddxd> getListByName(String khmc);

    @Select("select wancheng from lightbelt where id=#{id} order by djbh DESC")
    String getListBydjbh(int id);

    @Select("select * from dengdai_kailiao")
    List<ddklcz> getkailiao();

//    @Select("select distinct ddh,luruyuan,case when isnull(wancheng,'未审验') = '' then '未审验' else isnull(wancheng,'未审验') end as wancheng,xdrq,djbh,shouhuo,lxdh,shfs,azdz,khmc,case when isnull(fkzt,'未付款') = '' then '未付款' else isnull(fkzt,'未付款') end as fkzt,isnull(hd,'')as hd,case case when isnull(wancheng,'未审验') = '' then '未审验' else isnull(wancheng,'未审验') end when '未审验' then '1' when '优先处理' then '2' when '已审验' then '3' when '正在加工' then '4' when '加工完成' then '5' when '完成' then '6' else shunxu end as shunxu,sum_money,jgczy,wcsj from lightbelt order by shunxu,djbh DESC")
//    List<ddxd> getList();

//    @Select("select distinct ddh,luruyuan,case when isnull(wancheng,'未审验') = '' then '未审验' else isnull(wancheng,'未审验') end as wancheng,xdrq,djbh,shouhuo,lxdh,shfs,azdz,khmc,case when isnull(fkzt,'未付款') = '' then '未付款' else isnull(fkzt,'未付款') end as fkzt,isnull(hd,'')as hd,case case when isnull(wancheng,'未审验') = '' then '未审验' else isnull(wancheng,'未审验') end when '未审验' then '1' when '优先处理' then '2' when '已审验' then '3' when '正在加工' then '4' when '加工完成' then '5' when '完成' then '6' else shunxu end as shunxu,sum_money,jgczy,wcsj from lightbelt where khmc = #{khmc} order by shunxu,djbh DESC")
//    List<ddxd> getListByKeHu(String khmc);

    @Select("select * from lightbelt where khmc like '%'+#{khmc}+'%' and ddh like '%'+#{ddh}+'%' and azdz like '%'+#{azdz}+'%' and xdrq >= #{ksxdrq} and xdrq <= #{jsxdrq}")
    List<ddxd> queryList(String khmc, String ddh,String ksxdrq ,String jsxdrq , String azdz );
@Select("select distinct ddh,luruyuan,xdrq,djbh,shouhuo,lxdh,shfs,azdz,khmc from lightbelt where khmc =#{khmc} and ddh like '%'+#{ddh}+'%' and azdz like '%'+#{azdz}+'%' order by djbh DESC")
List<ddxd> queryList1(String khmc, String ddh, String ksxdrq, String jsxdrq, String azdz);

    @Delete("delete from lightbelt where djbh=#{djbh}")
    boolean delete(String djbh);

    @Update("update lightbelt set khmc=#{khmc},chicun=#{chicun},djbh=#{djbh},shouhuo=#{shouhuo},lxdh=#{lxdh},shfs=#{shfs},azdz=#{azdz},ddh=#{ddh},luruyuan=#{luruyuan},fj=#{fj},gh=#{gh},lcys=#{lcys},ddcd=#{ddcd},sl=#{sl},cxdk=#{cxdk},cxdk_right=#{cxdkright},gy=#{gy},gl=#{gl},bz=#{bz},dj=#{dj},je=#{je} where id=#{id}")
    boolean update(String khmc,String chicun,String xdrq,String djbh,String shouhuo,String lxdh,String shfs,String azdz,String ddh,String luruyuan,String fj,String gh,String lcys,String ddcd,String sl,String cxdk,String cxdkright,String gy,String gl,String bz,String dj,String je ,int id);

    @Insert("insert into lightbelt(khmc,xdrq,djbh,shouhuo,lxdh,shfs,azdz,ddh,luruyuan,fj,gh,lcys,ddcd,sl,cxdk,cxdk_right,gy,gl,bz,dj,je,chicun) values(#{khmc},#{xdrq},#{djbh},#{shouhuo},#{lxdh},#{shfs},#{azdz},#{ddh},#{luruyuan},#{fj},#{gh},#{lcys},#{ddcd},#{sl},#{cxdk},#{cxdkRight},#{gy},#{gl},#{bz},#{dj},#{je},#{chicun})")
    void add(String khmc,String xdrq,String djbh,String shouhuo,String lxdh,String shfs,String azdz,String ddh,String luruyuan,String fj,String gh,String lcys,String ddcd,String sl,String cxdk,String cxdkRight,String gy,String gl,String bz,String dj,String je,String chicun);

    @Insert("insert into lightbelt(khmc,xdrq,djbh,shouhuo,lxdh,shfs,azdz,ddh,luruyuan) values(#{khmc},#{xdrq},#{djbh},#{shouhuo},#{lxdh},#{shfs},#{azdz},#{ddh},#{luruyuan})")
    void add1(String khmc,String xdrq,String djbh,String shouhuo,String lxdh,String shfs,String azdz,String ddh,String luruyuan);

    @Select("select * from lightbelt where khmc=#{khmc} and xdrq=#{xdrq} and djbh=#{djbh}")
    List<ddxd> getListByKhmc(String khmc,String xdrq,String djbh);





    @Update("update lightbelt set fj = #{fj},gh = #{gh},ddcd = #{ddcd},sl = #{sl},cxdk = #{cxdk},lcys = #{lcys},gy = #{gy},gl = #{gl},bz = #{bz},dj = #{dj},je = #{je},chicun = #{chicun},cxdk_right = #{cxdkRight},sum_money = #{summoney},wcsj = #{wcsj},luruyuan = #{luruyuan},wancheng = #{wancheng} where id=#{id}")
    boolean update1(String fj, String gh, String ddcd, String sl, String cxdk, String lcys, String gy, String gl, String bz, String dj, String je, String chicun, String cxdkRight, String summoney, String wcsj, String luruyuan, String wancheng, int id);

    @Update("update lightbelt set wancheng = #{wancheng} where djbh=#{djbh}")
    boolean updatewc(String wancheng,String djbh);
    @Delete("delete from lightbelt where id = #{id11}")
    void delete1(int id11);




//    @Select("select * from lightbelt where khmc=#{khmc}")
//    List<ddxd> getListByPsd(String khmc);

}
