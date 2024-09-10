package com.example.demo.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.demo.entity.blxd;
import com.example.demo.entity.ddklcz;
import com.example.demo.entity.ddxd;
import com.example.demo.entity.psd;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DdxdService extends IService<ddxd> {

    /**
     * 查询所有
     */
    List<ddxd> getList();
    List<ddxd> getListdjbh(String djbh);

    List<ddxd> getListByName(String khmc);

    List<ddklcz> getkailiao();

    String getListBydjbh(int id);

    /**
     * 客户查询
     */
//    List<ddxd> getListByKeHu(String khmc);

    /**
     * 根据客户名称和订单号查询
     */
    List<ddxd> queryList1(String khmc, String ddh,String ksxdrq ,String jsxdrq,String azdz );
    List<ddxd> queryList(String khmc, String ddh,String ksxdrq ,String jsxdrq,String azdz );

    /**
     * 修改
     */
    boolean update(ddxd ddxd);

    /**
     * 删除
     *
//     * @param idList 根据id集合删除
     * @return 是否删除成功
     */
    boolean delete(String djbh);

    /**
     * 添加
     */
    ddxd add(ddxd ddxd);

    List<ddxd> getListByKhmc(String khmc,String xdrq,String djbh);

    ddxd add1(ddxd ddxd);

//    boolean update1(String fj, String gh, String ddcd, String sl, String cxdk, String lcys, String gy
//            , String gl, String bz, String dj, String je, String chicun, String cxdkRight, String summoney, String wcsj, String wancheng, int id);
boolean update1(String khmc,String xdrq,String djbh,String shouhuo,String lxdh,String shfs,String azdz,String ddh,String luruyuan,String fj, String gh, String ddcd, String sl, String cxdk, String lcys, String gy, String gl, String bz, String dj, String je, String chicun, String cxdkRight, String summoney, String wcsj, int id);


    boolean updatewc(String wancheng,String djbh);
    void delete1(int id11);
}
