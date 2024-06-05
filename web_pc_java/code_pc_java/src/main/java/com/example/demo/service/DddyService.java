package com.example.demo.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.demo.entity.blxd;
import com.example.demo.entity.dddy;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DddyService extends IService<dddy> {

    /**
     * 查询所有
     */
    List<dddy> getList();

    /**
     * 修改
     */
    boolean update(dddy dddy);
}
