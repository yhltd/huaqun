package com.example.demo.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
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
    public List<lkxd> queryList(String customer_number, String customer_name,String install_address) {
        return lkxdMapper.queryList(customer_number, customer_name, install_address);
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

}
