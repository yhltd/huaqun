package com.example.demo.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.entity.UserInfo;
import com.example.demo.entity.psd;
import com.example.demo.entity.xlpz;
import com.example.demo.mapper.UserInfoMapper;
import com.example.demo.service.UserInfoService;
import com.example.demo.util.GsonUtil;
import com.example.demo.util.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
@Service
public class UserInfoImpl extends ServiceImpl<UserInfoMapper, UserInfo> implements UserInfoService {
    @Autowired
    UserInfoMapper userInfoMapper;

    @Override
    public Map<String, Object> login(String username, String password) {
        //条件构造器
        QueryWrapper<UserInfo> queryWrapper = new QueryWrapper<>();
        //账号
        queryWrapper.eq("username", username);
        //密码
        queryWrapper.eq("password", password);
        //获取User
        UserInfo userInfo = this.getOne(queryWrapper);
        //如果不为空
        String data = StringUtils.EMPTY;
        if (StringUtils.isNotNull(userInfo)) {
            //转JSON
            data = GsonUtil.toJson(userInfo);

            Map<String, Object> map = new HashMap<>();
            map.put("token", data);
            String this_power = "";
            return map;
        }
        return null;
    }

    @Override
    public List<UserInfo> getList() {
        return userInfoMapper.getList();
    }



    @Override
    public List<UserInfo> queryList(String name, String pinyin) {
        return userInfoMapper.queryList(name, pinyin);
    }

    @Override
    public List<UserInfo> getNameByUsername(String username){ return userInfoMapper.getNameByUsername(username);}

    @Override
    public boolean update(UserInfo userInfo) { return updateById(userInfo); }

    @Override
    public boolean delete(List<Integer> idList) {
        return removeByIds(idList);
    }

    @Override
    public UserInfo add(UserInfo userInfo) { return save(userInfo) ? userInfo : null; }

    @Override
    public List<UserInfo> hqxlKhmc() {return userInfoMapper.hqxlKhmc();}

    @Override
    public List<UserInfo> glgetList(String username){ return  userInfoMapper.glgetList(username);}

    @Override
    public List<UserInfo> czygetList(String username){ return userInfoMapper.czygetKist(username);}

    @Override
    public boolean glupdate(UserInfo userInfo) { return updateById(userInfo); }
}
