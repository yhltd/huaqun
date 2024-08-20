package com.example.demo.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.entity.blxd;
import com.example.demo.entity.ddxd;
import com.example.demo.entity.lkxd;
import com.example.demo.mapper.LkxdMapper;
import com.example.demo.service.LkxdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LkxdImpl extends ServiceImpl<LkxdMapper, lkxd> implements LkxdService {
    @Autowired
    LkxdMapper lkxdMapper;

    @Override
    public List<lkxd> getList() {
        return lkxdMapper.getList();
    }

    @Override
    public List<lkxd> getListName(String customerName) {
        return lkxdMapper.getListName(customerName);
    }

    @Override
    public String getListOrderNumber(int id) {
        return lkxdMapper.getListOrderNumber(id);
    }

    @Override
    public List<lkxd> queryList(String customerNumber, String customerName,String installAddress,String wancheng,String ksinsertDate,
                                String jsinsertDate) {
        return lkxdMapper.queryList(customerNumber, customerName, installAddress, wancheng, ksinsertDate,
                 jsinsertDate);
    }

    @Override
    public List<lkxd> queryPinYin(String customerName) {
        return lkxdMapper.queryPinYin(customerName);
    }

    @Override
    public boolean update(lkxd lkxd) { return updateById(lkxd); }

    @Override
    public boolean delete(List<Integer> idList) {
        return removeByIds(idList);
    }

    @Override
    public lkxd add(lkxd lkxd) {
        return save(lkxd) ? lkxd : null;
    }

    @Override
    public blxd addBlxd(blxd blxd) { return save(blxd) ? blxd : null; }

    @Override
    public List<lkxd> getListByKhmc(String customerName,String insertDate,String orderNumber) {
        return lkxdMapper.getListByKhmc(customerName,insertDate,orderNumber);
    }

    @Override
    public boolean updatewc(String wancheng, int id) {
        return lkxdMapper.updatewc(wancheng,id);
    }

}
