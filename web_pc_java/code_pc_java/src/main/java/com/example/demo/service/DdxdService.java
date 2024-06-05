package com.example.demo.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.demo.entity.ddklcz;
import com.example.demo.entity.ddxd;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DdxdService extends IService<ddxd> {

    /**
     * 查询所有
     */
    List<ddxd> getList();

    /**
     * 根据客户名称和订单号查询
     */
    List<ddxd> queryList(String khmc, String ddh);

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

}
