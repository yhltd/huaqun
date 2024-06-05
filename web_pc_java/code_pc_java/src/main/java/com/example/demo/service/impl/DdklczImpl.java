package com.example.demo.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.entity.ddjgpz;
import com.example.demo.entity.ddklcz;
import com.example.demo.mapper.DdklczMapper;
import com.example.demo.service.DdklczService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class DdklczImpl extends ServiceImpl<DdklczMapper, ddklcz> implements DdklczService {
    @Autowired
    DdklczMapper ddklczMapper;

    @Override
    public List<ddklcz> getList() {
        return ddklczMapper.getList();
    }

    @Override
    public List<ddklcz> queryList(String name) {
        return ddklczMapper.queryList(name);
    }

    @Override
    public boolean update(ddklcz ddklcz) { return updateById(ddklcz); }

    @Override
    public boolean delete(List<Integer> idList) {
        return removeByIds(idList);
    }

    @Override
    public ddklcz add(ddklcz ddklcz) {
        return save(ddklcz) ? ddklcz : null;
    }

}
