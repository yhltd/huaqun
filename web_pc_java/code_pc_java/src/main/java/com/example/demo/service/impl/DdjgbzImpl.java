package com.example.demo.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.entity.dddy;
import com.example.demo.entity.ddjgbz;
import com.example.demo.mapper.DdjgbzMapper;
import com.example.demo.service.DdjgbzService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DdjgbzImpl extends ServiceImpl<DdjgbzMapper, ddjgbz> implements DdjgbzService {
    @Autowired
    DdjgbzMapper ddjgbzMapper;

    @Override
    public List<ddjgbz> getList() {
        return ddjgbzMapper.getList();
    }

    @Override
    public boolean update(ddjgbz ddjgbz) { return updateById(ddjgbz); }

}
