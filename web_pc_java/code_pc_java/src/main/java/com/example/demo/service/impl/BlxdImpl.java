package com.example.demo.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.example.demo.entity.UserInfo;
import com.example.demo.entity.blxd;
import com.example.demo.entity.ddxd;
import com.example.demo.mapper.BlxdMapper;
import com.example.demo.service.BlxdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlxdImpl extends ServiceImpl<BlxdMapper, blxd> implements BlxdService {
    @Autowired
    BlxdMapper blxdMapper;

    @Override
    public List<blxd> getList() { return blxdMapper.getList(); }

//    @Override
//    public List<blxd> getListByBoli() { return blxdMapper.getListByBoli(); }
@Override
public List<blxd> getListByBoli(String gongyingshang) { return blxdMapper.getListByBoli(gongyingshang); }


    @Override
    public List<blxd> getQita() { return blxdMapper.getQita(); }

    @Override
    public List<blxd> queryList(String pinyin, String shengchan,String ksxdrq,String jsxdrq) {
        return blxdMapper.queryList(pinyin, shengchan,ksxdrq,jsxdrq);
    }
    @Override
    public List<blxd> queryByBoli(String pinyin, String shengchan,String ksxdrq,String jsxdrq,String gongyingshang) {
        return blxdMapper.queryByBoli(pinyin, shengchan,ksxdrq,jsxdrq,gongyingshang);
    }

//    @Override
//    public List<blxd> queryList1(String pinyin, String shengchan,String ksxdrq,String jsxdrq) {
//        return blxdMapper.queryList1(pinyin, shengchan,ksxdrq,jsxdrq);
//    }


    @Override
    public boolean update(blxd blxd) { return updateById(blxd);}

    @Override
    public boolean updatesc(String shengchan, int id) {
        return blxdMapper.updatesc(shengchan,id);
    }

    @Override
    public boolean updategys(String gongyingshang, String orderNumber) {
        return blxdMapper.updategys(gongyingshang,orderNumber);
    }
    @Override
    public boolean add(String orderNumber,String pinyin,String boliYanse,String boliShenjiagong,String num,String height,String width,String shengchan,String beizhu,String shuoming1,String shuoming2,String gongyingshang,String guanlian) { return blxdMapper.add(orderNumber,pinyin,boliYanse,boliShenjiagong,num,height,width,shengchan,beizhu,shuoming1,shuoming2,gongyingshang,guanlian); }
}
