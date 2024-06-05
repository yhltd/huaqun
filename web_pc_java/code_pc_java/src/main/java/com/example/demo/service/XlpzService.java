package com.example.demo.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.demo.entity.UserInfo;
import com.example.demo.entity.ddxd;
import com.example.demo.entity.xlpz;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface XlpzService extends IService<xlpz> {

    /**
     * 查询所有
     */
    List<xlpz> getList();

    /**
     * 修改
     */
    boolean update(xlpz xlpz);

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
    xlpz add(xlpz xlpz);

    List<xlpz> hqxllxc();

    List<xlpz> hqxlDy();

    List<xlpz> hqxlKg();

    List<xlpz> hqxlPj();

    List<xlpz> hqxlLcys();

    List<xlpz> hqxlShfs();

    List<xlpz> hqxlLvxingcai();

    List<xlpz> hqxlLvcaiYanse();

    List<xlpz> hqxlBlsjg();

    List<xlpz> hqxlBlys();

    List<xlpz> hqxlLsxh();

    List<xlpz> hqxlKjlk();

    List<xlpz> hqxlJlkw();

    List<xlpz> hqxlFjpz();

    List<xlpz> hqxlJlpp();

}
