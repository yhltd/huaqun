package com.example.demo.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.demo.entity.dddy;
import com.example.demo.entity.lkdayin1;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface Lkdayin1Service extends IService<lkdayin1> {

    /**
     * 查询所有
     */
    List<lkdayin1> getList();

    /**
     * 修改
     */
    boolean update(lkdayin1 lkdayin1);

}
