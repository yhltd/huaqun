var idd;
var num = "";
let select_gys = [];
var gongyingshang = "";
var j="";
function getgys() {
    $ajax({
        type: 'post',
        url: '/user/gys',
    }, false, '', function (res) {
        if (res.code == 200) {
            for (var i = 0; i < res.data.length; i++) {
                var item = "";
                select_gys = res.data;
                item = "<option value=\"" + res.data[i].company + "\">" + res.data[i].company + "</option>"

            }
        }

    })
}


function getList() {
    getgys();
    $('#pinyin').val("");
    $('#shengchan').val("");
    $ajax({
        type: 'post',
        url: '/blxd/getList',
    }, false, '', function (res) {
        if (res.code == 200) {
            setTable(res.data);
            for (n = 0; n < res.data.length; n++) {
                if (res.code == 200) {
                    setTable(res.data);
                    for (n = 0; n < res.data.length; n++) {
                        document.getElementById("shengchan" + n).value = res.data[n].shengchan;
                        j = res.data[n].gongyingshang;
                        if (j == null || j == undefined) {
                            j = "请选择供应商";
                            document.getElementById("gongyingshang" + n).value = j;
                        } else {
                            document.getElementById("gongyingshang" + n).value = j;
                        }
                    }
                    $("#blxdTable").colResizable({
                        liveDrag: true,
                        gripInnerHtml: "<div class='grip'></div>",
                        draggingClass: "dragging",
                        resizeMode: 'fit'
                    });
                    for (i = 0; i <= res.data.id; i++) {
                        idd = i;
                    }
                }
            }
        }
    })
}
// function getList() {
//     getgys();
//     $('#pinyin').val("");
//     $('#shengchan').val("");
//     $ajax({
//         type: 'post',
//         url: '/user/getPower'
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             var power = res.data;
//             if (power == "玻璃厂") {
//                 $ajax({
//                     type: 'post',
//                     url: '/blxd/getListByBoli',
//                     async: false,
//                     data:{
//                         gongyingshang: gongyingshang
//                     }
//                 }, false, '', function (res) {
//                     if (res.code == 200) {
//                         setTable(res.data);
//                         for (n = 0; n < res.data.length; n++) {
//                             if (res.code == 200) {
//                                 setTable(res.data);
//                                 for (n = 0; n < res.data.length; n++) {
//                                     document.getElementById("shengchan" + n).value = res.data[n].shengchan;
//                                     j = res.data[n].gongyingshang;
//                                     if (j == null || j == undefined) {
//                                         j = "请选择供应商";
//                                         document.getElementById("gongyingshang" + n).value = j;
//                                     } else {
//                                         document.getElementById("gongyingshang" + n).value = j;
//                                     }
//                                 }
//                                 $("#blxdTable").colResizable({
//                                     liveDrag: true,
//                                     gripInnerHtml: "<div class='grip'></div>",
//                                     draggingClass: "dragging",
//                                     resizeMode: 'fit'
//                                 });
//                                 for (i = 0; i <= res.data.id; i++) {
//                                     idd = i;
//                                 }
//                             }
//                         }
//                     }
//                 })
//             } else {
//                 $ajax({
//                     type: 'post',
//                     url: '/blxd/getList',
//                 }, false, '', function (res) {
//                     if (res.code == 200) {
//                         setTable(res.data);
//                         for (n = 0; n < res.data.length; n++) {
//                             if (res.code == 200) {
//                                 setTable(res.data);
//                                 for (n = 0; n < res.data.length; n++) {
//                                     document.getElementById("shengchan" + n).value = res.data[n].shengchan;
//                                     j = res.data[n].gongyingshang;
//                                     if (j == null || j == undefined) {
//                                         j = "请选择供应商";
//                                         document.getElementById("gongyingshang" + n).value = j;
//                                     } else {
//                                         document.getElementById("gongyingshang" + n).value = j;
//                                     }
//                                 }
//                                 $("#blxdTable").colResizable({
//                                     liveDrag: true,
//                                     gripInnerHtml: "<div class='grip'></div>",
//                                     draggingClass: "dragging",
//                                     resizeMode: 'fit'
//                                 });
//                                 for (i = 0; i <= res.data.id; i++) {
//                                     idd = i;
//                                 }
//                             }
//                         }
//                     }
//                 })
//             }
//         }
//     })
//
//     $ajax({
//         type: 'post',
//         url: '/user/getPower'
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             var power = res.data;
//             if (power == "玻璃厂") {
//                 $ajax({
//                     type: 'post',
//                     url: '/psd/getloginname',
//                 }, false, '', function (res) {
//                     if (res.code == 200) {
//                         var this_name = res.data;
//                         gongyingshang = this_name;
//                     }
//                 })
//             }
//         }
//     })
// }



$(function () {
    getList();
    // document.getElementById("dlm").innerText = ($.session.get('username'));

    $ajax({
        type: 'post',
        url: '/user/getUserName',
    }, false, '', function (res) {
        var this_username = res.data
        document.getElementById("dlm").innerText = this_username;
    })

    $('#select-btn').click(function () {
        var pinyin = $('#pinyin').val();
        var shengchan = $('#shengchan').val();
        var ksxdrq = $('#ksxdrq').val();
        var jsxdrq = $('#jsxdrq').val();
        console.log(ksxdrq)
        if (ksxdrq === "") {
            ksxdrq = "1999-01-01";
        }
        if (jsxdrq === "") {
            jsxdrq = "2030-12-31";
        }
        $ajax({
            type: 'post',
            url: '/blxd/queryList',
            // data: {
            //     pinyin: pinyin,
            //     shengchan: shengchan,
            //     ksxdrq: ksxdrq,
            //     jsxdrq: jsxdrq,
            // }
            data: {
                pinyin: pinyin,
                shengchan: shengchan,
                ksxdrq: ksxdrq,
                jsxdrq: jsxdrq,
                gongyingshang: gongyingshang
            }
        }, true, '', function (res) {
            if (res.code == 200) {
                setTable(res.data);
                for (n = 0; n < res.data.length; n++) {
                    document.getElementById("shengchan" + n).value = res.data[n].shengchan;
                    j = res.data[n].gongyingshang;
                    if (j == null || j == undefined) {
                        j = "请选择供应商";
                        document.getElementById("gongyingshang" + n).value = j;
                    } else {
                        document.getElementById("gongyingshang" + n).value = j;
                    }
                }
            }
        })
    });

    // $('#select-btn').click(function () {
    //
    //     var pinyin = $('#pinyin').val();
    //     var shengchan = $('#shangchan').val();
    //
    //
    //     $ajax({
    //         type: 'post',
    //         url: '/blxd/queryList',
    //         data: {
    //
    //             pinyin: pinyin,
    //             shengchan: shengchan,
    //         }
    //     }, true, '', function (res) {
    //         if (res.code == 200) {
    //             setTable(res.data);
    //         }
    //     })
    // });

    //刷新
    $("#refresh-btn").click(function () {
        getList();
    });

    //点击修改按钮显示弹窗
    $('#update-btn').click(function () {
        let rows = getTableSelection('#blxdTable');
        if (rows.length > 1 || rows.length == 0) {
            swal('请选择一条数据修改!');
            return;
        }
        $('#update-modal').modal('show');
        setForm(rows[0].data, '#update-form');
        $('#update-shengchan').val(rows[0].data.shengchan);
    });

    //修改弹窗点击关闭按钮
    $('#update-close-btn').click(function () {
        $('#update-form')[0].reset();
        $('#update-modal').modal('hide');
    });

    //修改弹窗里点击提交按钮
    $('#update-submit-btn').click(function () {
        var msg = confirm("确认要修改吗？");
        if (msg) {
            if (checkForm('#update-form')) {
                let params = formToJson('#update-form');
                $ajax({
                    type: 'post',
                    url: '/blxd/update',
                    data: {
                        updateJson: JSON.stringify(params)
                    },
                    dataType: 'json',
                    contentType: 'application/json;charset=utf-8'
                }, false, '', function (res) {
                    if (res.code == 200) {
                        swal("", res.msg, "success");
                        $('#update-close-btn').click();
                        $('#update-modal').modal('hide');
                        getList();
                    } else {
                        swal("", res.msg, "error");
                    }
                })
            }
        }
    });
});

function setTable(data) {
    if ($('#blxdTable').html != '') {
        $('#blxdTable').bootstrapTable('load', data);
    }

    $('#blxdTable').bootstrapTable({
        data: data,
        sortStable: true,
        classes: 'table table-hover text-nowrap table table-bordered',
        idField: 'id',
        pagination: false,
        // pageSize: 15,//单页记录数
        clickToSelect: true,
        locale: 'zh-CN',
        toolbar: '#table-toolbar',
        toolbarAlign: 'left',
        theadClasses: "thead-light",//这里设置表头样式
        style: 'table-layout:fixed',
        height: document.body.clientHeight * 0.60,
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
                field: 'customerName',
                title: '客户名称',
                align: 'center',
                sortable: true,
                width: 130,
            }
            , {
                field: 'insertDate',
                title: '下单日期',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'pinyin',
                title: '简码',
                align: 'center',
                sortable: true,
                width: 130,
            }
            , {
                field: 'shengchan',
                title: '生产状态',
                align: 'center',
                sortable: true,
                width: 180,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }
                    $(document).ready(function () {
                        $('#shengchan' + index).change(function () {
                            var selectedValue = $(this).val();
                            let rows = getTableSelection("#blxdTable");
                            $.each(rows, function (index, row) {
                                num = row.data.orderNumber
                            })
                            $ajax({
                                type: 'post',
                                url: '/blxd/updatesc',
                                data: {
                                    shengchan: selectedValue,
                                    orderNumber: num
                                }
                            })

                        })
                    })
                    return "<select id='shengchan" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"shengchan\"" + ")' placeholder='完成状态' type='text' class='form-control'  value='" + value + "'>" +
                        "<option value=''>--请生产状态--</option>" +
                        "<option value='加工完成'>加工完成</option>" +
                        "<option value='正在加工'>正在加工</option>" +
                        "<option value='配送少数'>配送少数</option>" +
                        "<option value='完成'>完成</option>" +
                        "</select>"
                    document.getElementById("wancheng" + index).value = res.data[0].wancheng
                }

            }, {
                field: 'gongyingshang',
                title: '所属供应商',
                align: 'center',
                sortable: true,
                width: 130,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }

                        $(document).ready(function () {
                            $('#gongyingshang' + index).change(function () {
                                var selectedValue = $(this).val();
                                let rows = getTableSelection("#blxdTable");
                                $.each(rows, function (index, row) {
                                    num = row.data.orderNumber
                                })
                                $ajax({
                                    type: 'post',
                                    url: '/blxd/updategys',
                                    data: {
                                        gongyingshang: selectedValue,
                                        orderNumber: num
                                    }
                                })
                                alert("修改成功");
                            })
                        })

                    var this_gys = ""
                    var this_gys1 = ""
                    var select2 = ""
                    // this_gys1 = this_gys1 + "\"<option value=''>--请选择供应商--</option>\" +"
                    for (var i = 0; i < select_gys.length; i++) {
                        this_gys = this_gys + "<option value=\"" + select_gys[i].company + "\">" + select_gys[i].company + "</option>"

                        select2 = "<select id='gongyingshang" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"gongyingshang\"" + ")' placeholder='供应商' type='text' class='form-control'  value='" + value + "'>"
                        select2 = select2 + this_gys;
                        // +this_gys1
                        select2 = select2 + "<select/>"

                    }
                    this_gys="<option value=\"\" selected>请选择</option>" + this_gys;
                    $("#gongyingshang" + index).append("<option selected>" + this_gys + "</option>");
                    return select2;

                }
            }
            , {
                field: 'boliYanse',
                title: '玻璃颜色',
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
                field: 'num',
                title: '数量',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'height',
                title: '高度',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'width',
                title: '宽度',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'shuoming1',
                title: '开拉手孔数量',
                align: 'center',
                sortable: true,
                width: 130,
            }, {
                field: 'shuoming2',
                title: '开锁孔数量',
                align: 'center',
                sortable: true,
                width: 130,
            }, {
                field: 'beizhu',
                title: '开特殊孔数量',
                align: 'center',
                sortable: true,
                width: 130,
            }, {
                field: 'orderNumber',
                title: '单据编号',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'shendan',
                title: '完成时间',
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

function toExcel() {

    // var query = $('#query').val();
    var pinyin = $('#pinyin').val();
    var shengchan = $('#shengchan').val();
    var ksxdrq = $('#ksxdrq').val();
    var jsxdrq = $('#jsxdrq').val();
    console.log(ksxdrq)
    if (ksxdrq === "") {
        ksxdrq = "1999-01-01";
    }
    if (jsxdrq === "") {
        jsxdrq = "2030-12-31";
    }
    $ajax({
        type: 'post',
        url: '/blxd/queryList',
        data: {
            pinyin: pinyin,
            shengchan: shengchan,
            ksxdrq: ksxdrq,
            jsxdrq: jsxdrq,
            // query: query,
        }
    }, true, '', function (res) {
        if (res.code == 200) {
            setTable(res.data);
            console.log(res.data)
            var array = res.data
            var header = []
            for (var i = 0; i < array.length; i++) {
                var body = {
                    customerName: array[i].customerName,
                    pinyin: array[i].pinyin,
                    shengchan: array[i].shengchan,
                    gongyingshang: array[i].gongyingshang,
                    boliYanse: array[i].boliYanse,
                    boliShenjiagong: array[i].boliShenjiagong,
                    num: array[i].num,
                    height: array[i].height,
                    width: array[i].width,
                    shuoming1: array[i].shuoming1,
                    shuoming2: array[i].shuoming2,
                    beizhu: array[i].beizhu,
                    orderNumber: array[i].orderNumber,
                    // insertDate: array[i].insertDate,
                    shendan: array[i].shendan,
                }
                header.push(body)
            }
            console.log(header)
            title = ['客户名称', '简码', '生产状态', '所属供应商', '玻璃颜色', '玻璃深加工', '数量', '高度', '宽度', '开拉孔数量', '开锁孔数量', '开特殊孔数量', '单据编号', '完成时间']
            JSONToExcelConvertor(header, "玻璃下单", title)

        }
    })

}


function JSONToExcelConvertor(JSONData, FileName, title, filter) {
    if (!JSONData)
        return;
    //转化json为object
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

    var excel = "<table>";

    //设置表头
    var row = "<tr>";

    if (title) {
        //使用标题项
        for (var i in title) {
            row += "<th align='center'>" + title[i] + '</th>';
        }

    } else {
        //不使用标题项
        for (var i in arrData[0]) {
            row += "<th align='center'>" + i + '</th>';
        }
    }

    excel += row + "</tr>";

    //设置数据
    for (var i = 0; i < arrData.length; i++) {
        var row = "<tr>";

        for (var index in arrData[i]) {
            //判断是否有过滤行
            if (filter) {
                if (filter.indexOf(index) == -1) {
                    var value = arrData[i][index] == null ? "" : arrData[i][index];
                    row += '<td>' + value + '</td>';
                }
            } else {
                var value = arrData[i][index] == null ? "" : arrData[i][index];
                row += "<td align='center'>" + value + "</td>";
            }
        }

        excel += row + "</tr>";
    }

    excel += "</table>";

    var excelFile = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>";
    excelFile += '<meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">';
    excelFile += '<meta http-equiv="content-type" content="application/vnd.ms-excel';
    excelFile += '; charset=UTF-8">';
    excelFile += "<head>";
    excelFile += "<!--[if gte mso 9]>";
    excelFile += "<xml>";
    excelFile += "<x:ExcelWorkbook>";
    excelFile += "<x:ExcelWorksheets>";
    excelFile += "<x:ExcelWorksheet>";
    excelFile += "<x:Name>";
    excelFile += "{worksheet}";
    excelFile += "</x:Name>";
    excelFile += "<x:WorksheetOptions>";
    excelFile += "<x:DisplayGridlines/>";
    excelFile += "</x:WorksheetOptions>";
    excelFile += "</x:ExcelWorksheet>";
    excelFile += "</x:ExcelWorksheets>";
    excelFile += "</x:ExcelWorkbook>";
    excelFile += "</xml>";
    excelFile += "<![endif]-->";
    excelFile += "</head>";
    excelFile += "<body>";
    excelFile += excel;
    excelFile += "</body>";
    excelFile += "</html>";


    var uri = 'data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(excelFile);

    var link = document.createElement("a");
    link.href = uri;

    link.style = "visibility:hidden";
    link.download = FileName + ".xls";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}