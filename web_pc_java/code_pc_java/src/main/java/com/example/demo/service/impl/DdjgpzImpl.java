package com.example.demo.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.entity.UserInfo;
import com.example.demo.entity.ddjgbz;
import com.example.demo.entity.ddjgpz;
import com.example.demo.mapper.DdjgpzMapper;
import com.example.demo.service.DdjgpzService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DdjgpzImpl extends ServiceImpl<DdjgpzMapper, ddjgpz> implements DdjgpzService {
    @Autowired
    DdjgpzMapper ddjgpzMapper;

    @Override
    public List<ddjgpz> getList() {
        return ddjgpzMapper.getList();
    }

    @Override
    public List<ddjgpz> queryList(String ddxh) {
        return ddjgpzMapper.queryList(ddxh);
    }

    @Override
    public boolean update(ddjgpz ddjgpz) { return updateById(ddjgpz); }

    @Override
    public boolean delete(List<Integer> idList) {
        return removeByIds(idList);
    }

    @Override
    public ddjgpz add(ddjgpz ddjgpz) {
        return save(ddjgpz) ? ddjgpz : null;
    }

}
