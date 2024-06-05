package com.example.demo.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.entity.lkdayin1;
import com.example.demo.entity.lkdayin2;
import com.example.demo.mapper.Lkdayin2Mapper;
import com.example.demo.service.Lkdayin2Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Lkdayin2Impl extends ServiceImpl<Lkdayin2Mapper, lkdayin2> implements Lkdayin2Service {
    @Autowired
    Lkdayin2Mapper lkdayin2Mapper;

    @Override
    public List<lkdayin2> getList() {
        return lkdayin2Mapper.getList();
    }

    @Override
    public boolean update(lkdayin2 lkdayin2) { return updateById(lkdayin2); }

}
