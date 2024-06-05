package com.example.demo.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.demo.entity.UserInfo;
import com.example.demo.entity.ddjgbz;
import com.example.demo.entity.ddjgpz;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DdjgpzService extends IService<ddjgpz> {

    /**
     * 查询所有
     */
    List<ddjgpz> getList();

    /**
     * 根据灯带型号查询
     */
    List<ddjgpz> queryList(String ddxh);

    /**
     * 修改
     */
    boolean update(ddjgpz ddjgpz);

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
    ddjgpz add(ddjgpz ddjgpz);

}
