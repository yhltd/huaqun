package com.example.demo.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.entity.ddxd;
import com.example.demo.mapper.DdxdMapper;
import com.example.demo.service.DdxdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DdxdImpl extends ServiceImpl<DdxdMapper, ddxd> implements DdxdService {
    @Autowired
    DdxdMapper ddxdMapper;

    @Override
    public List<ddxd> getList() {
        return ddxdMapper.getList();
    }

    @Override
    public List<ddxd> queryList(String khmc, String ddh) { return ddxdMapper.queryList(khmc,ddh); }

    @Override
    public boolean update(ddxd ddxd) { return updateById(ddxd); }

    @Override
    public boolean delete(List<Integer> idList) {
        return removeByIds(idList);
    }

    @Override
    public ddxd add(ddxd ddxd) {
        return save(ddxd) ? ddxd : null;
    }

}
