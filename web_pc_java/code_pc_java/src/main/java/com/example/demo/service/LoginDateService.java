package com.example.demo.service;


import com.baomidou.mybatisplus.extension.service.IService;

import com.example.demo.entity.lkxd;
import com.example.demo.entity.loginDate;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author hui
 * @date 2024/7/24 9:43
 */
@Service
public interface LoginDateService extends IService<loginDate> {
   boolean add(String userName,String name,String loginDate);


    List<loginDate> getList();

    boolean delete(List<Integer> idList);
}
