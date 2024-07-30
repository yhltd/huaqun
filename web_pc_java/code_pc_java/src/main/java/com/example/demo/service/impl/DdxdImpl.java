package com.example.demo.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.entity.blxd;
import com.example.demo.entity.ddklcz;
import com.example.demo.entity.ddxd;
import com.example.demo.mapper.DdxdMapper;
import com.example.demo.service.DdxdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DdxdImpl extends ServiceImpl<DdxdMapper, ddxd> implements DdxdService {
    @Autowired
    DdxdMapper ddxdMapper;

    @Override
    public List<ddxd> getList() {
        return ddxdMapper.getList();
    }

    @Override
    public List<ddxd> getListByName(String khmc) {
        return ddxdMapper.getListByName(khmc);
    }

    @Override
    public List<ddklcz> getkailiao() {
        return ddxdMapper.getkailiao();
    }


    @Override
    public String getListBydjbh(String djbh) {
        return ddxdMapper.getListBydjbh(djbh);
    }
//    @Override
//    public List<ddxd> getListByKeHu(String khmc) { return ddxdMapper.getListByKeHu(khmc); }

    @Override
    public List<ddxd> queryList(String khmc, String ddh,String ksxdrq ,String jsxdrq ,String azdz ) { return ddxdMapper.queryList(khmc,ddh, ksxdrq , jsxdrq , azdz ); }

    @Override
    public boolean update(ddxd ddxd) { return updateById(ddxd); }

    @Override
    public boolean delete(List<Integer> idList) {
        return removeByIds(idList);
    }

    @Override
    public ddxd add(ddxd ddxd) {
        return save(ddxd) ? ddxd : null;
    }

    @Override
    public List<ddxd> getListByKhmc(String khmc,String xdrq,String djbh) {
        return ddxdMapper.getListByKhmc(khmc,xdrq,djbh);
    }

}
