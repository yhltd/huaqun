package com.example.demo.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.demo.entity.ddklcz;
import com.example.demo.entity.lskscpz;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface LskscpzService extends IService<lskscpz> {

    /**
     * 查询所有
     */
    List<lskscpz> getList();

    /**
     * 修改
     */
    boolean update(lskscpz lskscpz);

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
    lskscpz add(lskscpz lskscpz);

}
