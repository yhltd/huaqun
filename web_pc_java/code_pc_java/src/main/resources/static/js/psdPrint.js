var aa;
$(function () {
    //打印
    $('#print-btn').click(function () {
        $('#select-btn').hide();
        $('#print-btn').hide();
        $('#dqy').hide();
        window.print();
    });

    // $ajax({
    //     type: 'post',
    //     url: '/user/getName',
    // }, false, '', function (res) {
    //     var this_name = res.data
    //     $("#zdr").append(this_name);
    // })

    //选择数据
    $('#select-btn').click(function () {
        $ajax({
            type: 'post',
            url: '/psd/getList',
        }, false, '', function (res) {
            if (res.code == 200) {
                setTable(res.data);
                $('#psdPrint-modal').modal('show');
            }
        })
    });

    //提交按钮
    $('#psdPrint-submit-btn').click(function () {
        let rows = getData("#show-psdPrint-table")
        if (rows.length == 0) {
            swal('请选择数据！');
        } else {
            $ajax({
                type: 'post',
                url: '/psd/print',
                data: JSON.stringify({
                    list: rows
                }),
                dataType: 'json',
                contentType: 'application/json;charset=utf-8'
            }, false, '', function (res) {
                if (res.code == 200) {
                    $("[name='printData']").remove();
                    for(var i = 0;i<res.data.length;i++){
                        t1 = "<tr name='printData'>" +
                            "<td style='text-align: center'>" + res.data[i].insertDate + "</td>" +
                            "<td style='text-align: center'>" + res.data[i].customerName + "</td>" +
                            "<td style='text-align: center'>" + res.data[i].customerNeedText1 + "</td>" +
                            "<td style='text-align: center'>" + res.data[i].orderNumber + "</td>" +
                            "<td style='text-align: center'>" + res.data[i].songhuoDanhao + "</td>" +
                            "<td style='text-align: center'>" + res.data[i].money + "</td>" +
                            "<td style='text-align: center'>" + res.data[i].shoukuan + "</td>" +
                            "</tr>";

                        $("#data").append(t1);
                    }
                    for(var i = 0;i<res.data.length;i++){
                        t2 = "<tr name='printData'>" +
                            "<td style='text-align: center'>" + res.data[i].customerOrder + "</td>" +
                            "<td style='text-align: center'>" + res.data[i].quyu + "</td>" +
                            "<td style='text-align: center'>" + res.data[i].anzhuangAddress + "</td>" +
                            "<td style='text-align: center'>" + res.data[i].customerNeedTextRenyuan + "</td>" +
                            "<td style='text-align: center'>" + res.data[i].customerNameRiqi + "</td>" +
                            "<td style='text-align: center'>" + res.data[i].kucunText + "</td>" +
                            "</tr>";

                        $("#data1").append(t2);
                    }

                    $('#psdPrint-modal').modal('hide');

                }
            })
        }
    });
    $('#psdPrint-close-btn').click(function () {
        $('#psdPrint-modal').modal('hide');
    })
});

function setTable(data) {
    if ($('#show-psdPrint-table').html != '') {
        $('#show-psdPrint-table').bootstrapTable('load', data);
    }

    $('#show-psdPrint-table').bootstrapTable({
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
                field: 'insertDate',
                title: '日期',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'customerName',
                title: '客户名称',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'customerNeedText1',
                title: '配送情况',
                align: 'center',
                sortable: true,
                width: 130,
            }, {
                field: 'orderNumber',
                title: '单号',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'songhuoDanhao',
                title: '送货单号',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'money',
                title: '货款金额',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'shoukuan',
                title: '收款情况',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'customerOrder',
                title: '客户订单号',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'quyu',
                title: '配送区域',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'anzhuangAddress',
                title: '安装地址',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'customerNeedTextRenyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 130,
            }, {
                field: 'customerNameRiqi',
                title: '完成时间',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'kucunText',
                title: '商品库存信息',
                align: 'center',
                sortable: true,
                width: 100,
            }
        ],
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
                })
            }
        }
    });
    return result;
}