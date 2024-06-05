package com.example.demo.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.entity.dddy;
import com.example.demo.mapper.DddyMapper;
import com.example.demo.service.DddyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DddyImpl extends ServiceImpl<DddyMapper, dddy> implements DddyService {
    @Autowired
    DddyMapper dddyMapper;

    @Override
    public List<dddy> getList() {
        return dddyMapper.getList();
    }

    @Override
    public boolean update(dddy dddy) { return updateById(dddy); }

}
