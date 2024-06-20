package com.example.demo.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.entity.UserInfo;
import com.example.demo.entity.ddxd;
import com.example.demo.entity.xlpz;
import com.example.demo.mapper.XlpzMapper;
import com.example.demo.service.XlpzService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class XlpzImpl extends ServiceImpl<XlpzMapper, xlpz> implements XlpzService {
    @Autowired
    XlpzMapper xlpzMapper;

    @Override
    public List<xlpz> getList() {
        return xlpzMapper.getList();
    }

    @Override
    public boolean update(xlpz xlpz) { return updateById(xlpz); }

    @Override
    public boolean delete(List<Integer> idList) {
        return removeByIds(idList);
    }

    @Override
    public xlpz add(xlpz xlpz) { return save(xlpz) ? xlpz : null; }

    @Override
    public List<xlpz> hqxllxc() {return xlpzMapper.hqxllxc();}

    @Override
    public List<xlpz> hqxlDy() {return xlpzMapper.hqxlDy();}

    @Override
    public List<xlpz> hqxlKg() {return xlpzMapper.hqxlKg();}

    @Override
    public List<xlpz> hqxlPj() {return xlpzMapper.hqxlPj();}

    @Override
    public List<xlpz> hqxlLcys() {return xlpzMapper.hqxlLcys();}

    @Override
    public List<xlpz> hqxlShfs() {return xlpzMapper.hqxlShfs();}

    @Override
    public List<xlpz> hqxlLvxingcai() {return xlpzMapper.hqxlLvxingcai();}

    @Override
    public List<xlpz> hqxlLvcaiYanse() {return xlpzMapper.hqxlLvcaiYanse();}

    @Override
    public List<xlpz> hqxlBlsjg() {return xlpzMapper.hqxlBlsjg();}

    @Override
    public List<xlpz> hqxlBlys() {return xlpzMapper.hqxlBlys();}

    @Override
    public List<xlpz> hqxlLsxh() {return xlpzMapper.hqxlLsxh();}

    @Override
    public List<xlpz> hqxlKjlk() {return xlpzMapper.hqxlKjlk();}

    @Override
    public List<xlpz> hqxlJlkw() {return xlpzMapper.hqxlJlkw();}

    @Override
    public List<xlpz> hqxlFjpz() {return xlpzMapper.hqxlFjpz();}

    @Override
    public List<xlpz> hqxlJlpp() {return xlpzMapper.hqxlJlpp();}

    @Override
    public List<xlpz> hqxlgy() {return xlpzMapper.hqxlgy();}

}
