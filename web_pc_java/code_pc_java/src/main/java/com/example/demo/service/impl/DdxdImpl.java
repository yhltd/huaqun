//package com.example.demo.service.impl;
//
//import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
//import com.example.demo.entity.blxd;
//import com.example.demo.entity.ddklcz;
//import com.example.demo.entity.ddxd;
//import com.example.demo.mapper.DdxdMapper;
//import com.example.demo.service.DdxdService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//
//@Service
//public class DdxdImpl extends ServiceImpl<DdxdMapper, ddxd> implements DdxdService {
//    @Autowired
//    DdxdMapper ddxdMapper;
//
//    @Override
//    public List<ddxd> getList() {
//        return ddxdMapper.getList();
//    }
//
//    @Override
//    public List<ddxd> getListdjbh(String djbh) {
//        return ddxdMapper.getListdjbh(djbh);
//    }
//
//    @Override
//    public List<ddxd> getListByName(String khmc) {
//        return ddxdMapper.getListByName(khmc);
//    }
//
//    @Override
//    public List<ddklcz> getkailiao() {
//        return ddxdMapper.getkailiao();
//    }
//
//
//    @Override
//    public String getListBydjbh(int id) {
//        return ddxdMapper.getListBydjbh(id);
//    }
////    @Override
////    public List<ddxd> getListByKeHu(String khmc) { return ddxdMapper.getListByKeHu(khmc); }
//
//    @Override
//    public List<ddxd> queryList(String khmc, String ddh, String ksxdrq, String jsxdrq, String azdz) {
//        return ddxdMapper.queryList1(khmc, ddh, ksxdrq, jsxdrq, azdz);
//    }
//    @Override
//    public List<ddxd> queryList1(String khmc, String ddh, String ksxdrq, String jsxdrq, String azdz) {
//        return ddxdMapper.queryList(khmc, ddh, ksxdrq, jsxdrq, azdz);
//    }
//
//
//    @Override
//    public boolean update(ddxd ddxd) {
//        return updateById(ddxd);
//    }
//
//    @Override
//    public boolean delete(String djbh) {
//        return ddxdMapper.delete(djbh);
//    }
//
//    @Override
//    public ddxd add(ddxd ddxd) {
//        return save(ddxd) ? ddxd : null;
//    }
//
//    @Override
//    public List<ddxd> getListByKhmc(String khmc, String xdrq, String djbh) {
//        return ddxdMapper.getListByKhmc(khmc, xdrq, djbh);
//    }
//
//    @Override
//    public ddxd add1(ddxd ddxd) {
//        return save(ddxd) ? ddxd : null;
//    }
//
//
////    public boolean update1(String fj, String gh, String ddcd, String sl, String cxdk, String lcys, String gy
////            , String gl, String bz, String dj, String je, String chicun, String cxdkRight, String summoney, String wcsj, String wancheng, int id) {
////        return ddxdMapper.update1(fj, gh, ddcd, sl, cxdk, lcys, gy, gl, bz, dj, je, chicun, cxdkRight, summoney, wcsj, wancheng, id);
////    }
//public boolean update1(String khmc,String xdrq,String djbh,String shouhuo,String lxdh,String shfs,String azdz,String ddh,String luruyuan,String fj, String gh, String ddcd, String sl, String cxdk, String lcys, String gy, String gl, String bz, String dj, String je, String chicun, String cxdkRight, String summoney, String wcsj, int id) {
//    return ddxdMapper.update1(khmc,xdrq,djbh,shouhuo,lxdh,shfs,azdz,ddh,luruyuan,fj, gh, ddcd, sl, cxdk, lcys, gy, gl, bz, dj, je, chicun, cxdkRight, summoney, wcsj, id);
//}
//    @Override
//    public boolean updatewc(String wancheng, String djbh) {
//        return ddxdMapper.updatewc(wancheng,djbh);
//    }
//
//    @Override
//    public void delete1(int id11) {
//        ddxdMapper.delete1(id11);
//    }
//
//
//}
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
    public List<ddxd> getListdjbh(String djbh) {
        return ddxdMapper.getListdjbh(djbh);
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
    public String getListBydjbh(int id) {
        return ddxdMapper.getListBydjbh(id);
    }
//    @Override
//    public List<ddxd> getListByKeHu(String khmc) { return ddxdMapper.getListByKeHu(khmc); }

    @Override
    public List<ddxd> queryList(String khmc, String ddh, String ksxdrq, String jsxdrq, String azdz) {
        return ddxdMapper.queryList1(khmc, ddh, ksxdrq, jsxdrq, azdz);
    }
    @Override
    public List<ddxd> queryList1(String khmc, String ddh, String ksxdrq, String jsxdrq, String azdz) {
        return ddxdMapper.queryList(khmc, ddh, ksxdrq, jsxdrq, azdz);
    }


    @Override
    public boolean update(ddxd ddxd) {
        return updateById(ddxd);
    }

    @Override
    public boolean delete(String djbh) {
        return ddxdMapper.delete(djbh);
    }

    @Override
    public ddxd add(ddxd ddxd) {
        return save(ddxd) ? ddxd : null;
    }

    @Override
    public List<ddxd> getListByKhmc(String khmc, String xdrq, String djbh) {
        return ddxdMapper.getListByKhmc(khmc, xdrq, djbh);
    }

    @Override
    public ddxd add1(ddxd ddxd) {
        return save(ddxd) ? ddxd : null;
    }


    //    public boolean update1(String fj, String gh, String ddcd, String sl, String cxdk, String lcys, String gy
//            , String gl, String bz, String dj, String je, String chicun, String cxdkRight, String summoney, String wcsj, String wancheng, int id) {
//        return ddxdMapper.update1(fj, gh, ddcd, sl, cxdk, lcys, gy, gl, bz, dj, je, chicun, cxdkRight, summoney, wcsj, wancheng, id);
//    }
    public boolean update1(String khmc,String xdrq,String djbh,String shouhuo,String lxdh,String shfs,String azdz,String ddh,String luruyuan,String fj, String gh, String ddcd, String sl, String cxdk, String lcys, String gy, String gl, String bz, String dj, String je, String chicun, String cxdkRight, String summoney, String wcsj, int id) {
        return ddxdMapper.update1(khmc,xdrq,djbh,shouhuo,lxdh,shfs,azdz,ddh,luruyuan,fj, gh, ddcd, sl, cxdk, lcys, gy, gl, bz, dj, je, chicun, cxdkRight, summoney, wcsj, id);
    }
    @Override
    public boolean updatewc(String wancheng, String djbh) {
        return ddxdMapper.updatewc(wancheng,djbh);
    }

    @Override
    public void delete1(int id11) {
        ddxdMapper.delete1(id11);
    }

    @Override
    public void dd() {
        ddxdMapper.dd();
    }

}
