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
            url: '/lkxd/getList',
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
                url: '/lkxd/print',
                data: JSON.stringify({
                    list: rows
                }),
                dataType: 'json',
                contentType: 'application/json;charset=utf-8'
            }, false, '', function (res) {
                if (res.code == 200) {
                    $("[name='printData']").remove();
                    for(var i = 0;i<res.data.length;i++) {
                        t1 = "<tr name='printData'>" +
                            "<td style='text-align: center'>" + res.data[i].customerName + "</td>" +
                            "<td style='text-align: center'>" + res.data[i].insertDate + "</td>" +
                            "<td style='text-align: center'>" + res.data[i].customerNumber + "</td>" +

                            "</tr>"
                        ;
                    }
                    $("#data").append(t1);

                    for(var i = 0;i<res.data.length;i++) {
                        t2 = "<tr name='printData'>" +
                                                "<td style='text-align: center'>" + res.data[i].installAddress + "</td>" +
                                                "</tr>";
                    }
                    $("#data1").append(t2);

                    for(var i = 0;i<1;i++){
                        t3 =  "<tr name='printData'>" +
                                                "<td style='text-align: center'>" + res.data[i].orderNumber + "</td>" +
                                                "</tr>";

                        $("#data2").append(t3);
                    }
                    for(var i = 0;i<res.data.length;i++){
                        t4 = "<tr name='printData'>" +
                                                "<td style='text-align: center'>" + res.data[i].lvxingcai + "</td>" +
                                                "<td style='text-align: center'>" + res.data[i].lvcaiYanse + "</td>" +
                                                "<td style='text-align: center'>" + res.data[i].lashouXinghao + "</td>" +
                                                "</tr>";

                        $("#data3").append(t4);
                    }
                    for(var i = 0;i<res.data.length;i++){
                        t5 = "<tr name='printData'>" +
                                                "<td style='text-align: center'>" + res.data[i].boliShenjiagong + "</td>" +
                                                "<td style='text-align: center'>" + res.data[i].boliYanse + "</td>" +
                                                "</tr>";

                        $("#data4").append(t5);
                    }
                    for(var i = 0;i<res.data.length;i++){
                        t6 = "<tr name='printData'>" +
                                                "<td style='text-align: center'>" + res.data[i].height + "</td>" +
                                                "<td style='text-align: center'>" + res.data[i].width + "</td>"+
                                                "<td style='text-align: center'>" + res.data[i].num + "</td>"+
                                            "</tr>";

                        $("#data5").append(t6);
                    }
                    for(var i = 0;i<res.data.length;i++){
                        t7 =  "<tr name='printData'>" +
                                                "<td style='text-align: center'>" + res.data[i].fujianSelect1 + "</td>" +
                                                "<td style='text-align: center'>" + res.data[i].fujianSelect2 + "</td>"+
                                                "<td style='text-align: center'>" + res.data[i].fujianSelect3 + "</td>"+
                                                "<td style='text-align: center'>" + res.data[i].fujianSelect4 + "</td>"+
                                                "</tr>";

                        $("#data6").append(t7);
                    }
                    for(var i = 0;i<res.data.length;i++){
                        t8 =  "<tr name='printData'>" +
                                                "<td style='text-align: center'>" + res.data[i].fujianShuliang1 + "</td>" +
                                                "<td style='text-align: center'>" + res.data[i].fujianShuliang2 + "</td>"+
                                                "<td style='text-align: center'>" + res.data[i].fujianShuliang3 + "</td>"+
                                                "<td style='text-align: center'>" + res.data[i].fujianShuliang4 + "</td>"+
                                                "</tr>";

                        $("#data7").append(t8);
                    }
                   for(var i = 0;i<res.data.length;i++){
                            t9 =   "<tr name='printData'>" +
                                                "<td style='text-align: center'>" + res.data[i].pinpaiSelect1 + "</td>" +
                                                "<td style='text-align: center'>" + res.data[i].pinpaiSelect2 + "</td>"+
                                                "<td style='text-align: center'>" + res.data[i].pinpaiSelect3 + "</td>"+
                                                "<td style='text-align: center'>" + res.data[i].pinpaiSelect4 + "</td>"+
                                                "</tr>";

                            $("#data8").append(t9);
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
                field: 'customerName',
                title: '客户名称',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'insertDate',
                title: '日期',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'orderNumber',
                title: '单据编号',
                align: 'center',
                sortable: true,
                width: 130,
            }, {
                field: 'installAddress',
                title: '安装地址',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'customerNumber',
                title: '客户订单号',
                align: 'center',
                sortable: true,
                width: 80,
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
                    insertDate: tableData[index].insertDate,
                    orderNumber: tableData[index].orderNumber,
                })
            }
        }
    });
    return result;
}