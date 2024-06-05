package com.example.demo.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.demo.entity.ddjgbz;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DdjgbzService extends IService<ddjgbz> {

    /**
     * 查询所有
     */
    List<ddjgbz> getList();

    /**
     * 修改
     */
    boolean update(ddjgbz ddjgbz);

}
