package com.example.demo.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.example.demo.entity.blxd;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface BlxdService extends IService<blxd> {

    /**
     * 查询所有
     */
    List<blxd> getList();

    /**
     * 玻璃厂查询
     */
//    List<blxd> getListByBoli();
    List<blxd> getListByBoli(String gongyingshang);

    /**
     * 其他查询
     */
    List<blxd> getQita();

    /**
     * 根据客户姓名和订单号查询
     */
//    List<blxd> queryList(String pinyin, String shengchan);

    List<blxd> queryList(String pinyin,String shengchan,String ksxdrq,String jsxdrq);

    /**
     * 修改
     */
    boolean update(blxd blxd);

    boolean updatesc(String shengchan,int id);
    boolean updategys(String gongyingshang,String orderNumber);
    boolean add(String orderNumber,String pinyin,String boliYanse,String boliShenjiagong,String num,String height,String width,String shengchan,String beizhu,String shuoming1,String shuoming2,String gongyingshang,String guanlian);
    List<blxd> queryByBoli(String pinyin, String shengchan,String ksxdrq,String jsxdrq,String gongyingshang);

}
