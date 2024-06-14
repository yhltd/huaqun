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
                $('#lkp1-modal').modal('show');
            }
        })
    });

    //提交按钮
    $('#lkp1-submit-btn').click(function () {
        let rows = getData("#show-lkp1-table")
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
                    $("[name='printData']").remove();
                    var tr = "";
                    for (var i = 0; i < res.data.length; i++) {
                        tr1 = "<tr style='display:inline;font-size: 10px;border: none' name='printData'>" +
                            "<td style='margin-left:-9px;display:inline;border: none;font-size: 10px'>" + res.data[i].customerName + "</td>" +
                        "</tr>";
                        tr2 = "<tr style='display:inline;font-size: 10px;border: none' name='printData'>" +
                            "<td style='margin-left:-5px;display:inline;border: none;font-size: 10px'>" + res.data[i].insertDate + "</td>" +
                        "</tr>";
                        tr3 = "<tr style='display:inline;font-size: 10px;border: none' name='printData'>" +
                            "<td style='margin-left:-10px;display:inline;border: none;font-size: 10px'>" + res.data[i].customerNumber + "</td>" +
                        "</tr>";
                        tr4 = "<tr style='display:inline;font-size: 10px;border: none' name='printData'>" +
                            "<td style='display:inline;border: none;font-size: 10px;padding-left:0px;padding-right:0px'>" + res.data[i].shippingAddress + "</td>" +
                        "</tr>";
                        tr5 = "<tr style='display:inline;font-size: 10px;border: none' name='printData'>" +
                            "<td colspan='2' style='display:inline;border: none;padding-left:0px;padding-right:0px'>" + res.data[i].orderNumber + "</td>" +
                        "</tr>";
                        tr6 = "<tr style='display:inline;font-size: 10px;border: none' name='printData'>" +
                            "<td style='display:inline;border: none;padding-left:0px;padding-right:0px'>" + j+1 + "</td>" +
                            "</tr>";
                        tr7 = "<tr style='font-size: 10px;margin-left:3px;border: none' name='printData'>" +
                            "<td colspan='2' style='margin-left:3px;border: none;font-size: 10px'>" + res.data[i].lvxingcai + "</td>" +
                            "<td colspan='2' style='margin-left:3px;border: none;font-size: 10px'>" + res.data[i].lvcaiYanse + "</td>" +
                            "<td colspan='2' style='margin-left:3px;border: none;font-size: 10px'>" + res.data[i].lashouXinghao + "</td>" +
                        "</tr>";
                        $("#data7").append(tr7);
                    }
                    $("#data1").append(tr1);
                    $("#data2").append(tr2);
                    $("#data3").append(tr3);
                    $("#data4").append(tr4);
                    $("#data5").append(tr5);
                    $("#data6").append(tr6);

                    $('#lkp1-modal').modal('hide');
                }
            })
        }
    });

    $('#lkp1-close-btn').click(function () {
        $('#lkp1-modal').modal('hide');
    })

});

function setTable(data) {
    if ($('#show-lkp1-table').html != '') {
        $('#show-lkp1-table').bootstrapTable('load', data);
    }

    $('#show-lkp1-table').bootstrapTable({
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