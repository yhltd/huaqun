package com.example.demo.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.demo.entity.ddjgpz;
import com.example.demo.entity.ddklcz;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public interface DdklczService extends IService<ddklcz> {

    /**
     * 查询所有
     */
    List<ddklcz> getList();

    /**
     * 根据名称型材查询
     */
    List<ddklcz> queryList(String name);

    /**
     * 修改
     */
    boolean update(ddklcz ddklcz);

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
    ddklcz add(ddklcz ddklcz);
}
