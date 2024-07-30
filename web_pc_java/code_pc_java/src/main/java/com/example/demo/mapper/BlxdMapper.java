package com.example.demo.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.example.demo.entity.blxd;
import com.example.demo.entity.ddxd;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface BlxdMapper extends BaseMapper<blxd> {

    @Select("select *,case when shengchan = '正在加工' then 1 when shengchan = '配送少数' then 2 when shengchan = '加工完成' then 3 when shengchan = '完成' then 4 end as paixu from (select id,'' as dd,customer_name,insert_date,boli.order_number,pinyin,gongyingshang,boli_yanse,boli_shenjiagong,num,height,width,shengchan,beizhu,shendan,shuoming1,shuoming2 ,'' as type from boli_xiadan as boli left join (select customer_name,order_number,shendan,insert_date,guanlian,wancheng from lvkuang_xiadan ) as lvkuang on boli.guanlian = lvkuang.guanlian where (lvkuang.wancheng != '' and lvkuang.wancheng != '未审验' and lvkuang.wancheng != '推迟处理')) as dan order by paixu,order_number")
    List<blxd> getList();

    @Select("select *,case when shengchan = '正在加工' then 1 when shengchan = '配送少数' then 2 when shengchan = '加工完成' then 3 when shengchan = '完成' then 4 end as paixu from (select id,'' as dd,customer_name,insert_date,boli.order_number,pinyin,gongyingshang,boli_yanse,boli_shenjiagong,num,height,width,shengchan,beizhu,shendan,shuoming1,shuoming2 ,'' as type from boli_xiadan as boli left join (select customer_name,order_number,shendan,insert_date,guanlian,wancheng from lvkuang_xiadan ) as lvkuang on boli.guanlian = lvkuang.guanlian where (lvkuang.wancheng != '' and lvkuang.wancheng != '未审验' and lvkuang.wancheng != '推迟处理')) as dan order by paixu,order_number")
    List<blxd> getListByBoli();

    @Select("select *,case when shengchan = '正在加工' then 1 when shengchan = '配送少数' then 2 when shengchan = '加工完成' then 3 when shengchan = '完成' then 4 end as paixu from (select id,'' as dd,customer_name,insert_date,boli.order_number,pinyin,gongyingshang,boli_yanse,boli_shenjiagong,num,height,width,shengchan,beizhu,shendan,shuoming1,shuoming2 ,'' as type from boli_xiadan as boli left join (select customer_name,order_number,shendan,insert_date,guanlian,wancheng from lvkuang_xiadan ) as lvkuang on boli.guanlian = lvkuang.guanlian where (lvkuang.wancheng != '' and lvkuang.wancheng != '未审验' and lvkuang.wancheng != '推迟处理')) as dan order by paixu,order_number")
    List<blxd> getListKeHu();
    @Select("select *,case when shengchan = '正在加工' then 1 when shengchan = '配送少数' then 2 when shengchan = '加工完成' then 3 when shengchan = '完成' then 4 end as paixu from (select id,'' as dd,customer_name,insert_date,boli.order_number,pinyin,gongyingshang,boli_yanse,boli_shenjiagong,num,height,width,shengchan,beizhu,shendan,shuoming1,shuoming2 ,'' as type from boli_xiadan as boli left join (select customer_name,order_number,shendan,insert_date,guanlian,wancheng from lvkuang_xiadan ) as lvkuang on boli.guanlian = lvkuang.guanlian where (lvkuang.wancheng != '' and lvkuang.wancheng != '未审验' and lvkuang.wancheng != '推迟处理')) as dan order by paixu,order_number")
    List<blxd> getQita();

    @Select("SELECT * FROM boli_xiadan JOIN lvkuang_xiadan ON boli_xiadan.pinyin = lvkuang_xiadan.pinyin AND boli_xiadan.order_number = lvkuang_xiadan.order_number where boli_xiadan.pinyin like '%'+#{pinyin}+'%' AND boli_xiadan.shengchan like '%'+#{shengchan}+'%' AND lvkuang_xiadan.insert_date>=#{ksxdrq}AND lvkuang_xiadan.insert_date<=#{jsxdrq}")
    List<blxd> queryList1(String pinyin,String shengchan,String ksxdrq,String jsxdrq);

    @Select(" select *,case when shengchan = '正在加工' then 1 when shengchan = '配送少数' then 2 when shengchan = '加工完成' then 3 when shengchan = '完成' then 4 end as paixu from (select id,'' as dd,customer_name,insert_date,boli.order_number,pinyin,gongyingshang,boli_yanse,boli_shenjiagong,num,height,width,shengchan,beizhu,shendan,shuoming1,shuoming2 ,'' as type from boli_xiadan as boli left join (select customer_name,order_number,shendan,insert_date,guanlian,wancheng from lvkuang_xiadan ) as lvkuang on boli.guanlian = lvkuang.guanlian where (lvkuang.wancheng != '' and lvkuang.wancheng != '未审验' and lvkuang.wancheng != '推迟处理')) as dan where pinyin like '%'+#{pinyin}+'%' and shengchan like '%'+#{shengchan}+'%' and insert_date>=#{ksxdrq} and insert_date<=#{jsxdrq} order by paixu,order_number")
    List<blxd> queryList(String pinyin, String shengchan,String ksxdrq,String jsxdrq);

    @Update("update boli_xiadan set shengchan = #{shengchan} where id = #{id}")
    boolean update(String shengchan,int id);

}
