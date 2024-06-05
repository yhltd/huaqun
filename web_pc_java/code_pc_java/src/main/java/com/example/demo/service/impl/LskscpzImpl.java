package com.example.demo.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.entity.ddklcz;
import com.example.demo.entity.lskscpz;
import com.example.demo.mapper.LskscpzMapper;
import com.example.demo.service.LskscpzService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LskscpzImpl extends ServiceImpl<LskscpzMapper, lskscpz> implements LskscpzService {
    @Autowired
    LskscpzMapper lskscpzMapper;

    @Override
    public List<lskscpz> getList() {
        return lskscpzMapper.getList();
    }

    @Override
    public boolean update(lskscpz lskscpz) { return updateById(lskscpz); }

    @Override
    public boolean delete(List<Integer> idList) {
        return removeByIds(idList);
    }

    @Override
    public lskscpz add(lskscpz lskscpz) {
        return save(lskscpz) ? lskscpz : null;
    }

}
