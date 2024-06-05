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
    public List<psd> queryList(String orderNumber, String customerName, String songhuoAddress, String anzhuangAddress, String customerOrder, String songhuoDanhao) {
        return psdMapper.queryList(orderNumber, customerName, songhuoAddress, anzhuangAddress, customerOrder, songhuoDanhao);
    }

    @Override
    public boolean update(psd psd) { return updateById(psd); }

    @Override
    public boolean delete(List<Integer> idList) {
        return removeByIds(idList);
    }

    @Override
    public psd add(psd psd) { return save(psd) ? psd : null; }

}
