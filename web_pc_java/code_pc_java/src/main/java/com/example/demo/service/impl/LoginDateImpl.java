package com.example.demo.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.entity.loginDate;
import com.example.demo.mapper.LoginDateMapper;
import com.example.demo.service.LoginDateService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @author hui
 * @date 2024/7/24 9:49
 */
@Service
public class LoginDateImpl extends ServiceImpl<LoginDateMapper, loginDate> implements LoginDateService {
    @Autowired
    LoginDateMapper loginDateMapper;
    @Override
     public boolean add(String userName,String name,String loginDate){
        return loginDateMapper.add(userName,name,loginDate);
    }
    @Override
    public List<loginDate> getList(){return loginDateMapper.getList();};
    @Override
    public boolean delete(List<Integer> idList) {
        return removeByIds(idList);
    }

}
