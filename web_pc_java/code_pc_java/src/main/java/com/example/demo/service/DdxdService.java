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
    List<ddxd> queryList(String khmc, String ddh,String ksxdrq ,String jsxdrq,String azdz );

    /**
     * 修改
     */
    boolean update(ddxd ddxd);

    /**
     * 删除
     *
     * @param idList 根据id集合删除
     * @return 是否删除成功
     */
    boolean delete(List<Integer> idList);

    /**
     * 添加
     */
    ddxd add(ddxd ddxd);

    List<ddxd> getListByKhmc(String khmc,String xdrq,String djbh);

    ddxd add1(ddxd ddxd);

}
