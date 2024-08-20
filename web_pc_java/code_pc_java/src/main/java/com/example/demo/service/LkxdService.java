package com.example.demo.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.demo.entity.blxd;
import com.example.demo.entity.ddxd;
import com.example.demo.entity.lkxd;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface LkxdService extends IService<lkxd> {

    /**
     * 查询所有
     */
    List<lkxd> getList();

    List<lkxd> getListName(String customerName);

    String getListOrderNumber(int id);
    /**
     * 根据姓名 订单号 安装地址查询
     */
    List<lkxd> queryList(String customerNumber, String customerName,String installAddress,String wancheng,String ksinsertDate,
                         String jsinsertDateg);

    /**
     * 根据姓名 查简码
     */
    List<lkxd> queryPinYin(String customerName);

    /**
     * 修改
     */
    boolean update(lkxd lkxd);

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
    lkxd add(lkxd lkxd);

    blxd addBlxd(blxd blxd);

    List<lkxd> getListByKhmc(String customerName,String insertDate,String orderNumber);

    boolean updatewc(String wancheng,int id);

}
