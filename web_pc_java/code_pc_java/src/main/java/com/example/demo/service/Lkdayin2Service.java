package com.example.demo.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.demo.entity.lkdayin1;
import com.example.demo.entity.lkdayin2;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface Lkdayin2Service extends IService<lkdayin2> {

    /**
     * 查询所有
     */
    List<lkdayin2> getList();

    /**
     * 修改
     */
    boolean update(lkdayin2 lkdayin2);

}
