package com.example.demo.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.demo.entity.ddxd;
import com.example.demo.entity.psd;
import org.apache.ibatis.annotations.Update;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface PsdService extends IService<psd> {

    /**
     * 查询所有
     */
    List<psd> getList();

    List<psd> getListByName(String customerName);
    /**
     * 根据姓名和部门查询
     */
    List<psd> queryList(String ordernumber, String customername, String quyu, String anzhuangaddress, String customerorder,String ksinsertDate,
                        String jsinsertDate,
                        String wancheng,
                        String kucun);

    String getListBydjbh(int id);

    /**
     * 修改
     */
    boolean update(psd psd);

    /**
     * 删除
     *
     * @param idList 根据id集合删除
     * @return 是否删除成功
     */
    boolean delete(List<Integer> idList);

    /**
     * 添加
     */
    psd add(psd psd);

    /**
     * 根据开始时间和结束时间查询
     */
    List<psd> queryList1(String ksinsertDate,String jsinsertDate);

    List<psd> getListByPsd(String customerName);

    boolean upwc(String wancheng, String orderNumber);

    boolean upsk(String shoukuan, String orderNumber);

    boolean upqy(String quyu, String orderNumber);

    boolean upmy(String money, String orderNumber);

}
