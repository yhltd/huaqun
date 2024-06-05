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
        var newstr = window.document.getElementById("div").innerHTML;
        var oldstr = window.document.body.innerHTML;
        document.body.innerHTML = newstr;
        window.print();
        document.body.innerHTML = oldstr;
        window.location.reload();
        return false;
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
                        var idd="idd"+i;
                        var idd1="idd1"+i;
                        var idd2="idd2"+i;
                        var idd3="idd3"+i;
                        var idd4="idd4"+i;
                        var idd5="idd5"+i;
                        var idd6="idd6"+i;
                        var idd7="idd7"+i;
                        var idd8="idd8"+i;
                        var idd9="idd9"+i;
                        var j = i + 1;
                        tr = "<tr name='printData'>" +
                            "<td><input onchange=\"javascript:inputChange('" + idd + "')\" type='text' id='idd" + i + "'  class='form-control' style='height:25px;border: none' value='"+ p_kehu +"' /></td>" +
                            "<td><input onchange=\"javascript:inputChange('" + idd1 + "')\" type='text' id='idd1" + i + "'  class='form-control' style='height:25px;border: none' value='"+ p_riqi +"' /></td>" +
                            "<td><input onchange=\"javascript:inputChange('" + idd2 + "')\" type='text' id='idd2" + i + "'  class='form-control' style='height:25px;border: none' value='"+ p_danhao +"' /></td>" +
                            "<td><input onchange=\"javascript:inputChange('" + idd3 + "')\" type='text' id='idd3" + i + "'  class='form-control' style='height:25px;border: none' value='"+ p_azdz +"' /></td>" +
                            "<td><input onchange=\"javascript:inputChange('" + idd4 + "')\" type='text' id='idd4" + i + "'  class='form-control' style='height:25px;border: none' value='"+ p_shdz +"'/></td>" +
                            "<td><input onchange=\"javascript:inputChange('" + idd5 + "')\" type='text' id='idd5" + i + "'   class='form-control' style='height:25px;border: none' value='"+ p_xmmc +"'/></td>" +
                            "<td><input onchange=\"javascript:inputChange('" + idd6 + "')\" type='text' id='idd6" + i + "'   class='form-control' style='height:25px;border: none' value='"+ p_lcys +"'/></td>" +
                            "<td><input onchange=\"javascript:inputChange('" + idd7 + "')\" type='text' id='idd6" + i + "'   class='form-control' style='height:25px;border: none' value='"+ p_gy +"'/></td>" +
                            "<td><input onchange=\"javascript:inputChange('" + idd8 + "')\" type='text' id='idd6" + i + "'   class='form-control' style='height:25px;border: none' value='"+ p_ddcd +"'/></td>" +
                            "<td><input onchange=\"javascript:inputChange('" + idd9 + "')\" type='text' id='idd6" + i + "'   class='form-control' style='height:25px;border: none' value='"+ p_sl +"'/></td>" +
                        "</tr>";
                        $('#dd-modal').modal('hide');
                    }
                    $('table').width(this_kuan * 2)
                    $('.table-div').width(this_kuan * 2)
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
        classes: 'table table-hover text-nowrap table table-bordered',
        idField: 'id',
        pagination: true,
        pageSize: 15,//单页记录数
        clickToSelect: true,
        locale: 'zh-CN',
        toolbar: '#table-toolbar',
        toolbarAlign: 'left',
        // theadClasses: "thead-light",//这里设置表头样式
        style:'table-layout:fixed',

        columns: [
            {
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
            }
        ],
        onClickRow: function (row, el) {
            let isSelect = $(el).hasClass('selected')
            if (isSelect) {
                $(el).removeClass('selected')
            } else {
                $(el).addClass('selected')
            }
        }
    })
}