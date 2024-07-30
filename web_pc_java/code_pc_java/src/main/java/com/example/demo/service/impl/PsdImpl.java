package com.example.demo.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.entity.lskscpz;
import com.example.demo.entity.psd;
import com.example.demo.mapper.PsdMapper;
import com.example.demo.service.PsdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PsdImpl extends ServiceImpl<PsdMapper, psd> implements PsdService {
    @Autowired
    PsdMapper psdMapper;

    @Override
    public List<psd> getList() {
        return psdMapper.getList();
    }

    @Override
    public String getListBydjbh(int id) {
        return psdMapper.getListBydjbh(id);
    }

    @Override
    public List<psd> getListByName(String customerName) {
        return psdMapper.getListByName(customerName);
    }

    @Override
    public List<psd> queryList(String orderNumber, String customerName, String quyu, String anzhuangAddress, String customerOrder, String songhuoDanhao, String ksinsertDate,
                               String jsinsertDate,
                               String wancheng,
                               String kucun) {
        return psdMapper.queryList(orderNumber, customerName, quyu, anzhuangAddress, customerOrder, songhuoDanhao,
                ksinsertDate,
                jsinsertDate,
                wancheng,
                kucun);
    }

    @Override
    public boolean update(psd psd) {
        return updateById(psd);
    }

    @Override
    public boolean delete(List<Integer> idList) {
        return removeByIds(idList);
    }

    @Override
    public psd add(psd psd) {
        return save(psd) ? psd : null;
    }

    @Override
    public List<psd> queryList1(String ksinsertDate,String jsinsertDate) {
        return psdMapper.queryList1(ksinsertDate, jsinsertDate);
    }

    @Override
    public List<psd> getListByPsd(String customerName) {return psdMapper.getListByPsd(customerName);}

}
