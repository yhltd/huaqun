$(function () {
    this_kuan = $('table').width();
    //打印
    $('#print-btn').click(function () {
        $('table').width(this_kuan)
        $('.table-div').width(this_kuan)
        $('#select-btn').hide();
        $('#print-btn').hide();
        $('#dqy').hide();
        // var newstr = window.document.getElementById("div").innerHTML;
        // var oldstr = window.document.body.innerHTML;
        // document.body.innerHTML = newstr;
        window.print();
        // document.body.innerHTML = oldstr;
        // window.location.reload();
        // return false;
    });

    //选择数据
    $('#select-btn').click(function () {
        $ajax({
            type: 'post',
            url: '/lkxd/getList',
        }, false, '', function (res) {
            if (res.code == 200) {
                setTable(res.data);
                $('#lkp2-modal').modal('show');
            }
        })
    });

    //提交按钮
    $('#lkp2-submit-btn').click(function () {
        let rows = getData("#show-lkp2-table")
        var j = 0
        if (rows.length == 0) {
            swal('请选择数据！');
        } else {
            $ajax({
                type: 'post',
                url: '/lkxd/print',
                data: JSON.stringify({
                    list: rows
                }),
                dataType: 'json',
                contentType: 'application/json;charset=utf-8'
            }, false, '', function (res) {
                if (res.code == 200) {
                    // $("[name='printData']").remove();
                    var sl = 0;
                    for (var i = 0; i < res.data.length;i++){
                        if (res.data[i].lvxingcai == "" && res.data[i].lvcaiYanse == "" && res.data[i].lashouXinghao == "") {
                            sl++;
                        }
                    }
                    for (var i = 0; i < res.data.length - sl; i++) {
                        tr1 = res.data[i].customerName
                        tr2 = res.data[i].insertDate
                        tr3 = res.data[i].customerNumber
                        tr4 = res.data[i].shippingAddress
                        tr5 = res.data[i].orderNumber
                        tr6 = j + 1
                        tr7 = "<tr>" +
                            "<td colspan='2' style='border: none;font-size: 10px'>" + res.data[i].lvxingcai + "</td>" +
                            "<td colspan='2' style='border: none;font-size: 10px'>" + res.data[i].lvcaiYanse + "</td>" +
                            "<td colspan='2' style='3px;border: none;font-size: 10px'>" + res.data[i].lashouXinghao + "</td>" +
                            "</tr>";
                        $("#data7").append(tr7);
                        tr8 = res.data[i].jiaoliankongFangxiangLeft
                        tr9 = res.data[i].jiaoliankongFangxiangRight
                        tr10 = res.data[i].lashouShuliangRight
                        tr11 = res.data[i].lashouShuliangLeft
                        tr12 = res.data[i].lashouweiSelectLeft
                        tr13 = res.data[i].lashouweiInsertLeft
                        tr14 = res.data[i].lashouweiSelectRight
                        tr15 = res.data[i].lashouweiInsertRight
                        tr16 = res.data[i].zhuangsuoshuliangInsertLeft1
                        tr17 = res.data[i].zhuangsuoshuliangInsertRight1
                        tr18 = res.data[i].zhuangsuofangweiInsertLeft1
                        tr19 = res.data[i].zhuangsuofangweiInsertLeft2
                        tr20 = res.data[i].zhuangsuofangweiInsertRight1
                        tr21 = res.data[i].zhuangsuofangweiInsertRight2
                        tr22 = res.data[i].kaijiaolian
                        tr23 = res.data[i].jiaolian1SelectLeft
                        tr24 = res.data[i].jiaolian1InsertLeft
                        tr25 = res.data[i].jiaolian1SelectRight
                        tr26 = res.data[i].jiaolian1InsertRight
                        tr27 = res.data[i].jiaolian2SelectLeft
                        tr28 = res.data[i].jiaolian2InsertLeft
                        tr29 = res.data[i].jiaolian2SelectRight
                        tr30 = res.data[i].jiaolian2InsertRight
                        tr31 = res.data[i].jiaolian3SelectLeft
                        tr32 = res.data[i].jiaolian3InsertLeft
                        tr33 = res.data[i].jiaolian3SelectRight
                        tr34 = res.data[i].jiaolian3InsertRight
                        tr35 = res.data[i].jiaolian4SelectLeft
                        tr36 = res.data[i].jiaolian4InsertLeft
                        tr37 = res.data[i].jiaolian4SelectRight
                        tr38 = res.data[i].jiaolian4InsertRight
                        tr39 = res.data[i].jiaolian5SelectLeft
                        tr40 = res.data[i].jiaolian5InsertLeft
                        tr41 = res.data[i].jiaolian5SelectRight
                        tr42 = res.data[i].jiaolian5InsertRight
                        tr43 = res.data[i].jiaolian6SelectLeft
                        tr44 = res.data[i].jiaolian6InsertLeft
                        tr45 = res.data[i].jiaolian6SelectRight
                        tr46 = res.data[i].jiaolian6InsertRight

                    }
                    $("#data1").append(tr1);
                    $("#data2").append(tr2);
                    $("#data3").append(tr3);
                    $("#data4").append(tr4);
                    $("#data5").append(tr5);
                    $("#data6").append(tr6);
                    $("#data8").append(tr8);
                    $("#data9").append(tr9);
                    $("#data10").append(tr10);
                    $("#data11").append(tr11);
                    $("#data12").append(tr12);
                    $("#data13").append(tr13);
                    $("#data14").append(tr14);
                    $("#data15").append(tr15);
                    $("#data16").append(tr16);
                    $("#data17").append(tr17);
                    $("#data18").append(tr18);
                    $("#data19").append(tr19);
                    $("#data20").append(tr20);
                    $("#data21").append(tr21);
                    $("#data22").append(tr22);
                    $("#data23").append(tr23);
                    $("#data24").append(tr24);
                    $("#data25").append(tr25);
                    $("#data26").append(tr26);
                    $("#data27").append(tr27);
                    $("#data28").append(tr28);
                    $("#data29").append(tr29);
                    $("#data30").append(tr30);
                    $("#data31").append(tr31);
                    $("#data32").append(tr32);
                    $("#data33").append(tr33);
                    $("#data34").append(tr34);
                    $("#data35").append(tr35);
                    $("#data36").append(tr36);
                    $("#data37").append(tr37);
                    $("#data38").append(tr38);
                    $("#data39").append(tr39);
                    $("#data40").append(tr40);
                    $("#data41").append(tr41);
                    $("#data42").append(tr42);
                    $("#data43").append(tr43);
                    $("#data44").append(tr44);
                    $("#data45").append(tr45);
                    $("#data46").append(tr46);

                    $('#lkp2-modal').modal('hide');
                }
            })
        }
    });

    $('#lkp2-close-btn').click(function () {
        $('#lkp2-modal').modal('hide');
    })

});

function setTable(data) {
    if ($('#show-lkp2-table').html != '') {
        $('#show-lkp2-table').bootstrapTable('load', data);
    }

    $('#show-lkp2-table').bootstrapTable({
        data: data,
        sortStable: true,
        classes: 'table table-hover',
        idField: 'id',
        pagination: true,
        search: true,
        searchAlign: 'left',
        clickToSelect: false,
        locale: 'zh-CN',
        singleSelect: true,
        columns: [
            {
                checkbox: true
            }, {
                field: '',
                title: '序号',
                align: 'center',
                width: 50,
                formatter: function (value, row, index) {
                    return index + 1;
                }
            }, {
                field: 'customerName',
                title: '客户名称',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'insertDate',
                title: '下单日期',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'orderNumber',
                title: '单据编号',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'pinyin',
                title: '简码',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'shippingAddress',
                title: '送货地址',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'phone',
                title: '联系电话',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'shippingType',
                title: '送货方式',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'installAddress',
                title: '安装地址',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'customerNameRenyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'customerNumber',
                title: '订单号',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'height',
                title: '高',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'width',
                title: '宽',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'num',
                title: '下单数量',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'lvxingcai',
                title: '铝型材',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'lvcaiYanse',
                title: '铝材颜色',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'boliShenjiagong',
                title: '玻璃深加工',
                align: 'center',
                sortable: true,
                width: 130,
            }, {
                field: 'boliYanse',
                title: '玻璃颜色',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'lashouXinghao',
                title: '拉手型号',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'jiaoliankongFangxiangLeft',
                title: '铰链孔左开门',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'jiaoliankongFangxiangRight',
                title: '铰链孔右开门',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'lashouShuliangLeft',
                title: '有拉手数量(个)左',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'lashouShuliangRight',
                title: '有拉手数量(个)右',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'lashouweiSelectLeft',
                title: '左拉手位从下向上',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'lashouweiInsertLeft',
                title: '左拉手位从右向左',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'lashouweiSelectRight',
                title: '右拉手位从下向上',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'lashouweiInsertRight',
                title: '右拉手位从左向右',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'zhuangsuoshuliangInsertLeft1',
                title: '左装锁数量',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'zhuangsuoshuliangInsertRight1',
                title: '右装锁数量',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'zhuangsuofangweiInsertLeft1',
                title: '左锁孔位从下向上',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'zhuangsuofangweiInsertLeft2',
                title: '左锁孔位从右向左',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'zhuangsuofangweiInsertRight1',
                title: '右锁孔位从下向上',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'zhuangsuofangweiInsertRight2',
                title: '右锁孔位从左向右',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'kaijiaolian',
                title: '开铰链孔',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'jiaolian1SelectLeft',
                title: '左铰链孔位1',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'jiaolian1InsertLeft',
                title: '左铰链孔位1数量',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'jiaolian1SelectRight',
                title: '右铰链孔位1',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'jiaolian1InsertRight',
                title: '右铰链孔位1数量',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'jiaolian2SelectLeft',
                title: '左铰链孔位2',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'jiaolian2InsertLeft',
                title: '左铰链孔位2数量',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'jiaolian2SelectRight',
                title: '右铰链孔位2',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'jiaolian2InsertRight',
                title: '右铰链孔位2数量',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'jiaolian3SelectLeft',
                title: '左铰链孔位3',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'jiaolian3InsertLeft',
                title: '左铰链孔位3数量',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'jiaolian3SelectRight',
                title: '右铰链孔位3',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'jiaolian3InsertRight',
                title: '右铰链孔位3数量',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'jiaolian4SelectLeft',
                title: '左铰链孔位4',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'jiaolian4InsertLeft',
                title: '左铰链孔位4数量',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'jiaolian4SelectRight',
                title: '右铰链孔位4',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'jiaolian4InsertRight',
                title: '右铰链孔位4数量',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'jiaolian5SelectLeft',
                title: '左铰链孔位5',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'jiaolian5InsertLeft',
                title: '左铰链孔位5数量',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'jiaolian5SelectRight',
                title: '右铰链孔位5',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'jiaolian5InsertRight',
                title: '右铰链孔位5数量',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'jiaolian6SelectLeft',
                title: '左铰链孔位6',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'jiaolian6InsertLeft',
                title: '左铰链孔位6数量',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'jiaolian6SelectRight',
                title: '右铰链孔位6',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'jiaolian6InsertRight',
                title: '右铰链孔位6数量',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'fujianSelect1',
                title: '附件配置1',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'fujianSelect2',
                title: '附件配置2',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'fujianSelect3',
                title: '附件配置3',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'fujianSelect4',
                title: '附件配置4',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'pinpaiSelect1',
                title: '铰链品牌1',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'pinpaiSelect2',
                title: '铰链品牌2',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'pinpaiSelect3',
                title: '铰链品牌3',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'pinpaiSelect4',
                title: '铰链品牌4',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'fujianShuliang1',
                title: '附件数量1',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'fujianShuliang2',
                title: '附件数量2',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'fujianShuliang3',
                title: '附件数量3',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'fujianShuliang4',
                title: '附件数量4',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'sumShuliang1',
                title: '数量(平方)',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'danjia1',
                title: '单价(平方)',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'sumJine1',
                title: '金额(平方)',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'sumShuliang2',
                title: '数量(周长)',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'danjia2',
                title: '单价(周长)',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'sumJine2',
                title: '金额(周长)',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'wancheng',
                title: '完成',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'qita',
                title: '其他(项目说明)',
                align: 'center',
                sortable: true,
                width: 150,
            }
        ],
        // onClickRow: function (row, el) {
        //     let isSelect = $(el).hasClass('selected')
        //     if (isSelect) {
        //         $(el).removeClass('selected')
        //     } else {
        //         $(el).addClass('selected')
        //     }
        // }
    })
}

function getData(tableEl) {
    let result = [];
    let tableData = $(tableEl).bootstrapTable('getData');
    $(tableEl + ' tr').each(function (i, tr) {
        let index = $(tr).data('index');
        if (index != undefined) {
            if ($(tr).hasClass('selected')) {
                result.push({
                    customerName: tableData[index].customerName,
                    insertDate: tableData[index].insertDate,
                    orderNumber: tableData[index].orderNumber,
                })
            }
        }
    });
    return result;
}