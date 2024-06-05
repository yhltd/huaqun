package com.example.demo.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.demo.entity.ddxd;
import com.example.demo.entity.lkcz;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface LkczpzService extends IService<lkcz> {

    /**
     * 查询所有
     */
    List<lkcz> getList();

    /**
     * 根据客户名称和订单号查询
     */
    List<lkcz> queryList(String lkxh);

    /**
     * 修改
     */
    boolean update(lkcz lkcz);

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
    lkcz add(lkcz lkcz);

}
