package com.example.demo.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.entity.ddxd;
import com.example.demo.entity.lkcz;
import com.example.demo.mapper.LkczMapper;
import com.example.demo.service.LkczpzService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LkczImpl extends ServiceImpl<LkczMapper, lkcz> implements LkczpzService {
    @Autowired
    LkczMapper lkczMapper;

    @Override
    public List<lkcz> getList() {
        return lkczMapper.getList();
    }

    @Override
    public List<lkcz> queryList(String lkxh) { return lkczMapper.queryList(lkxh); }

    @Override
    public boolean update(lkcz lkcz) { return updateById(lkcz); }

    @Override
    public boolean delete(List<Integer> idList) {
        return removeByIds(idList);
    }

    @Override
    public lkcz add(lkcz lkcz) {
        return save(lkcz) ? lkcz : null;
    }

    @Override
    public String getList1(String lkxh, String yanse) {
        return lkczMapper.getList1(lkxh,yanse);
    }

    @Override
    public String getList2(String lkxh, String yanse) {
        return lkczMapper.getList2(lkxh,yanse);
    }

}
