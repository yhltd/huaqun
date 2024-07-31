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
            url: '/ddxd/getList',
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
                url: '/ddxd/print',
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
                            "<td style='text-align: center'>" + res.data[i].khmc + "</td>" +
                            "<td style='text-align: center'>" + res.data[i].xdrq + "</td>" +
                            "<td style='text-align: center'>" + res.data[i].djbh + "</td>" +
                            "</tr>";
                    }
                        $("#data").append(t1);

                    for(var i = 0;i<res.data.length;i++) {
                        t2 = "<tr name='printData'>" +
                            "<td style='text-align: center'>" + res.data[i].azdz + "</td>" +
                            "<td style='text-align: center'>" + res.data[i].ddh + "</td>" +
                            "</tr>";
                    }
                        $("#data1").append(t2);

                    for(var i = 0;i<res.data.length;i++){
                        t3 = "<tr name='printData'>" +
                            "<td style='text-align: center'>" + res.data[i].gh + "</td>" +
                            "<td style='text-align: center'>" + res.data[i].lcys + "</td>" +
                            "<td style='text-align: center'>" + res.data[i].gy + "</td>" +
                            "<td style='text-align: center'>" + res.data[i].ddcd + "</td>" +
                            "<td style='text-align: center'>" + res.data[i].sl + "</td>" +
                            "</tr>";

                        $("#data2").append(t3);
                    }
                    // for(var i = 0;i<res.data.length;i++){
                    //     t2 = "<tr name='printData'>" +
                    //         "<td style='text-align: center'>" + res.data[i].gh + "</td>" +
                    //         "<td style='text-align: center'>" + res.data[i].lcys + "</td>" +
                    //
                    //         "<td style='text-align: center'>" + res.data[i].ddcd + "</td>" +
                    //         "<td style='text-align: center'>" + res.data[i].sl + "</td>" +
                    //         "</tr>";
                    //
                    //     $("#data3").append(t4);
                    // }
                    // for(var i = 0;i<res.data.length;i++){
                    //     t2 = "<tr name='printData'>" +
                    //         "<td style='text-align: center'>" + res.data[i].gh + "</td>" +
                    //         "<td style='text-align: center'>" + res.data[i].lcys + "</td>" +
                    //         "<td style='text-align: center'>" + res.data[i].gy + "</td>" +
                    //         "<td style='text-align: center'>" + res.data[i].ddcd + "</td>" +
                    //         "<td style='text-align: center'>" + res.data[i].sl + "</td>" +
                    //         "</tr>";
                    //
                    //     $("#data3").append(t4);
                    // }
                    // for(var i = 0;i<res.data.length;i++){
                    //     t4 = "<tr name='printData'>" +
                    //         "<td style='text-align: center'>" + res.data[i].gh + "</td>" +
                    //         "<td style='text-align: center'>" + res.data[i].sl + "</td>" +
                    //         "<td style='text-align: center'>" + res.data[i].gh + "</td>" +
                    //         "<td style='text-align: center'>" + res.data[i].sl + "</td>" +
                    //         "</tr>";
                    //
                    //     $("#data3").append(t4);
                    // }

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
                field: 'khmc',
                title: '客户名称',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'xdrq',
                title: '日期',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'djbh',
                title: '单据编号',
                align: 'center',
                sortable: true,
                width: 130,
            }, {
                field: 'azdz',
                title: '安装地址',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'ddh',
                title: '客户订单号',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'gh',
                title: '项目名称',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'lcys',
                title: '铝材颜色',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'gy',
                title: '光源',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'ddcd',
                title: '灯带长度',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'sl',
                title: '数量',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'gh',
                title: '电源名称',
                align: 'center',
                sortable: true,
                width: 130,
            }, {
                field: 'sl',
                title: '数量',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'gh',
                title: '开关名称',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'sl',
                title: '数量(支)',
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
                    khmc: tableData[index].khmc,
                    xdrq: tableData[index].xdrq,
                    djbh: tableData[index].djbh,
                })
            }
        }
    });
    return result;
}