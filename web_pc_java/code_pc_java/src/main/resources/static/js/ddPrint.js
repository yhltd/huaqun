let p_kehu = ""
let p_riqi = ""
let p_danhao = ""
let p_azdz = ""
let p_shdz = ""
let p_xmmc = ""
let p_lcys = ""
let p_gy = ""
let p_ddcd = ""
let p_sl = ""

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
            url: '/ddxd/getList',
        }, false, '', function (res) {
            if (res.code == 200) {
                setTable(res.data);
                $('#dd-modal').modal('show');
            }
        })
    });

    //提交按钮
    $('#dd-submit-btn').click(function () {
        let rows = getData("#show-dd-table")
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
                    var tr = "";
                    for (var i = 0; i < res.data.length; i++) {
                        tr1 = "<tr style='display:inline;font-size: 10px;border: none' name='printData'>" +
                            "<td style='margin-left:-9px;display:inline;border: none;font-size: 10px'>" + res.data[i].khmc + "</td>" +
                        "</tr>";
                        tr2 = "<tr style='display:inline;font-size: 10px;border: none' name='printData'>" +
                            "<td style='margin-left:-5px;display:inline;border: none;font-size: 10px'>" + res.data[i].xdrq + "</td>" +
                        "</tr>";
                        tr3 = "<tr style='display:inline;font-size: 10px;border: none' name='printData'>" +
                            "<td style='margin-left:-10px;display:inline;border: none;font-size: 10px'>" + res.data[i].djbh + "</td>" +
                        "</tr>";
                        tr4 = "<tr style='display:inline;font-size: 10px;border: none' name='printData'>" +
                            "<td style='display:inline;border: none;font-size: 10px;padding-left:0px;padding-right:0px'>" + res.data[i].azdz + "</td>" +
                        "</tr>";
                        tr5 = "<tr style='display:inline;font-size: 10px;border: none' name='printData'>" +
                            "<td style='display:inline;border: none;padding-left:0px;padding-right:0px'>" + res.data[i].ddh + "</td>" +
                        "</tr>";
                        tr6 = "<tr style='font-size: 10px;margin-left:3px;border: none' name='printData'>" +
                            "<td colspan='2' style='margin-left:3px;border: none;font-size: 10px'>" + res.data[i].fj + "</td>" +
                            "<td colspan='1' style='margin-left:3px;border: none;font-size: 10px'>" + res.data[i].lcys + "</td>" +
                            "<td colspan='1' style='margin-left:3px;border: none;font-size: 10px'>" + res.data[i].gy + "</td>" +
                            "<td colspan='1' style='margin-left:3px;border: none;font-size: 10px'>" + res.data[i].ddcd + "</td>" +
                            "<td colspan='1' style='margin-left:3px;border: none;font-size: 10px'>" + res.data[i].sl + "</td>" +
                        "</tr>";
                        $("#data6").append(tr6);
                    }
                    $("#data1").append(tr1);
                    $("#data2").append(tr2);
                    $("#data3").append(tr3);
                    $("#data4").append(tr4);
                    $("#data5").append(tr5);

                    $('#dd-modal').modal('hide');
                }
            })
        }
    });

    $('#dd-close-btn').click(function () {
        $('#dd-modal').modal('hide');
    })

});

function setTable(data) {
    if ($('#show-dd-table').html != '') {
        $('#show-dd-table').bootstrapTable('load', data);
    }

    $('#show-dd-table').bootstrapTable({
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
                width: 100,
            }, {
                field: 'xdrq',
                title: '下单日期',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'djbh',
                title: '单据编号',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'shouhuo',
                title: '送货地址',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'lxdh',
                title: '联系电话',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'shfs',
                title: '送货方式',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'azdz',
                title: '安装地址',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'ddh',
                title: '订单编号',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'luruyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'fj',
                title: '项目类别',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'gh',
                title: '项目名称',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'lcys',
                title: '铝材颜色',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'ddcd',
                title: '灯带长度mm',
                align: 'center',
                sortable: true,
                width: 130,
            }, {
                field: 'sl',
                title: '数量(支)',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'cxdk',
                title: '出线端口左出线',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'cxdkRight',
                title: '出线端口右出线',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'gy',
                title: '光源',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'gl',
                title: '功率W',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'bz',
                title: '备注',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'dj',
                title: '单价',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'je',
                title: '金额',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'chicun',
                title: '开料尺寸',
                align: 'center',
                sortable: true,
                width: 100,
            },
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
                    khmc: tableData[index].khmc,
                    xdrq: tableData[index].xdrq,
                    djbh: tableData[index].djbh,
                })
            }
        }
    });
    return result;
}