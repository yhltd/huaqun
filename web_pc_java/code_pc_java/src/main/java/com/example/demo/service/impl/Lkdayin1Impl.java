package com.example.demo.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.entity.dddy;
import com.example.demo.entity.lkdayin1;
import com.example.demo.mapper.Lkdayin1Mapper;
import com.example.demo.service.Lkdayin1Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Lkdayin1Impl extends ServiceImpl<Lkdayin1Mapper, lkdayin1> implements Lkdayin1Service {
    @Autowired
    Lkdayin1Mapper lkdayin1Mapper;

    @Override
    public List<lkdayin1> getList() {
        return lkdayin1Mapper.getList();
    }

    @Override
    public boolean update(lkdayin1 lkdayin1) { return updateById(lkdayin1); }

}
