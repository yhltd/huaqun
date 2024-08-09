var idd;

function getKhmc() {
    $ajax({
        type: 'post',
        url: '/user/hqxlKhmc',
    }, false, '', function (res) {
        if (res.code == 200) {
            for (var i = 0; i < res.data.length; i++) {
                $("#add-khmc").append("<option>" + res.data[i].company + "</option>");
                $("#update-khmc").append("<option>" + res.data[i].company + "</option>");
                $("#khmc").append("<option>" + res.data[i].company + "</option>");
            }
        }
    })
}

function getShfs() {
    $ajax({
        type: 'post',
        url: '/xlpz/hqxlShfs',
    }, false, '', function (res) {
        if (res.code == 200) {

            for (var i = 0; i < res.data.length; i++) {

                $("#add-shfs").append("<option>" + res.data[i].shfs + "</option>");
                $("#update-shfs").append("<option>" + res.data[i].shfs + "</option>");
            }
        }
    })
}

function getLxc() {
    $ajax({
        type: 'post',
        url: '/xlpz/hqxllxc',
    }, false, '', function (res) {
        if (res.code == 200) {
            for (var i = 0; i < res.data.length; i++) {
                // $("#add-gh").append("<option>" + res.data[i].lxc + "</option>");
                $("#update-gh").append("<option>" + res.data[i].lxc + "</option>");
            }
        }
    })
}

function getDy() {
    $ajax({
        type: 'post',
        url: '/xlpz/hqxlDy',
    }, false, '', function (res) {
        if (res.code == 200) {
            for (var i = 0; i < res.data.length; i++) {
                // $("#add-gh").append("<option>" + res.data[i].dy + "</option>");
                $("#update-gh").append("<option>" + res.data[i].dy + "</option>");
            }
        }
    })
}

function getKg() {
    $ajax({
        type: 'post',
        url: '/xlpz/hqxlKg',
    }, false, '', function (res) {
        if (res.code == 200) {
            for (var i = 0; i < res.data.length; i++) {
                // $("#add-gh").append("<option>" + res.data[i].kg + "</option>");
                $("#update-gh").append("<option>" + res.data[i].kg + "</option>");
            }
        }
    })
}

function getPj() {
    $ajax({
        type: 'post',
        url: '/xlpz/hqxlPj',
    }, false, '', function (res) {
        if (res.code == 200) {
            for (var i = 0; i < res.data.length; i++) {
                // $("#add-gh").append("<option>" + res.data[i].pj + "</option>");
                $("#update-gh").append("<option>" + res.data[i].pj + "</option>");
            }
        }
    })
}

function getLcys() {
    $ajax({
        type: 'post',
        url: '/xlpz/hqxlLcys',
    }, false, '', function (res) {
        if (res.code == 200) {
            for (var i = 0; i < res.data.length; i++) {
                $("#add-lcys").append("<option>" + res.data[i].lcys + "</option>");
                $("#update-lcys").append("<option>" + res.data[i].lcys + "</option>");
            }
        }
    })
}

function hqxlGy() {
    $ajax({
        type: 'post',
        url: '/xlpz/hqxlgy',
    }, false, '', function (res) {
        if (res.code == 200) {
            for (var i = 0; i < res.data.length; i++) {
                    // $("#add-gy").append("<option>" + res.data[i].gy + "</option>");
                    $("#update-gy").append("<option>" + res.data[i].gy + "</option>");
            }
        }
    })
}
function disGy(){
    document.getElementById("add-gy").setAttribute("disabled", "true")
    document.getElementById("update-gy").setAttribute("disabled", "true");
}

function getInputGh() {

    // var elementadd = document.getElementById("class-add-gh");
    // elementadd.innerHTML = '';
    // elementadd.innerHTML = "<label for='add-gh'>项目名称</label><input id='add-gh' name='gh' type='text' class='form-control' autocomplete='off' data-required='1'>";

    var elementupdate = document.getElementById("class-update-gh");
    // elementupdate.innerHTML = '';
    elementupdate.innerHTML = "<label for='update-gh'>项目名称</label><input id='update-gh' name='gh' type='text' class='form-control' autocomplete='off' data-required='1'>";


}

function getInputLcys() {


    // var elementadd = document.getElementById("class-add-lcys");
    // elementadd.innerHTML = '';
    // elementadd.innerHTML = "<label for='add-lcys'>铝材颜色</label><input id='add-lcys' name='lcys' type='text' class='form-control' autocomplete='off' data-required='1'>";

    var elementupdate = document.getElementById("class-update-lcys");
    elementupdate.innerHTML = '';
    elementupdate.innerHTML = "<label for='update-lcys'>铝材颜色</label><input id='update-lcys' name='lcys' type='text' class='form-control' autocomplete='off' data-required='1'>";

}

function getInputGy() {

    var elementadd = document.getElementById("class-add-gy");
    elementadd.innerHTML = '';
    elementadd.innerHTML = "<label for='add-gy'>光源</label><input id='add-gy' name='gy' type='text' class='form-control' autocomplete='off' data-required='1'>";

    var elementupdate = document.getElementById("class-update-gy");
    elementupdate.innerHTML = '';
    elementupdate.innerHTML = "<label for='update-gy'>光源</label><input id='update-gy' name='gy' type='text' class='form-control' autocomplete='off' data-required='1'>";

}


function getSelectGh() {
    // var elementadd = document.getElementById("add-gh");
    // elementadd.innerHTML = '';
    // elementadd.innerHTML = "<label for='add-gh'>项目名称</label><select id='add-gh' name='gh' class='form-control'><option>--请选择--</option></select>";

    var elementupdate = document.getElementById("class-update-gh");
    elementupdate.innerHTML = '';
    elementupdate.innerHTML = "<label for='update-gh'>项目名称</label><select id='update-gh' name='gh' class='form-control'><option>--请选择--</option></select>";
}


function getSelectLcys() {
    // var elementadd = document.getElementById("class-add-lcys");
    // elementadd.innerHTML = '';
    // elementadd.innerHTML = "<label for='add-lcys'>铝材颜色</label><select id='add-lcys' name='lcys' class='form-control'><option>--请选择--</option></select>";

    var elementupdate = document.getElementById("class-update-lcys");
    elementupdate.innerHTML = '';
    elementupdate.innerHTML = "<label for='update-lcys'>铝材颜色</label><select id='update-lcys' name='lcys' class='form-control'><option>--请选择--</option></select>";
}


function getSelectGy() {
    // var elementadd = document.getElementById("class-add-gy");
    // elementadd.innerHTML = '';
    // elementadd.innerHTML = "<label for='add-gy'>光源</label><select id='add-gy' name='gy' class='form-control'><option>--请选择--</option></select>";

    var elementupdate = document.getElementById("class-update-gy");
    elementupdate.innerHTML = '';
    elementupdate.innerHTML = "<label for='update-gy'>光源</label><select id='update-gy' name='gy' class='form-control'><option>--请选择--</option></select>";
}


$(document).ready(function () {
    $('#add-fj').on('change', function () {
        var selectedValue = $(this).val();
        var select = document.getElementById('add-gh');
        if (selectedValue === '房间柜号') {
            // select.innerHTML = '';
            getInputGh()
            getInputLcys()
            getInputGy()
            // disGy()
        } else if (selectedValue === '铝型材') {
            select.innerHTML = '';
            getSelectGh();
            getSelectLcys();
            getInputGy();
            getLxc();
            getLcys();
            // disGy();
        } else if (selectedValue === '电源') {
            select.innerHTML = '';
            getSelectGh();
            getSelectLcys();
            getSelectGy();
            hqxlGy();
            getDy();
            getLcys();

        } else if (selectedValue === '开关') {
            select.innerHTML = '';
            getSelectGh();
            getSelectLcys();
            // getInputGy();
            getKg();
            getLcys();
            disGy();
        } else if (selectedValue === '配件') {
            select.innerHTML = '';
            getSelectGh();
            getSelectLcys();
            // getInputGy();
            getPj();
            getLcys();
            disGy();
        }
    })
})

$(document).ready(function () {
    $('#update-fj').on('change', function () {
        var selectedValue = $(this).val();
        var select = document.getElementById('update-gh');
        if (selectedValue === '房间柜号') {
            select.innerHTML = '';
            getInputGh()
            // getInputLcys()
            // getInputGy()
            // disGy()
        } else if (selectedValue === '铝型材') {
            // select.innerHTML = '';
            // getInputGh()
            getSelectGh();
            getSelectLcys();
            // getInputGy();
            getLxc();
            getLcys();
            // disGy();
        } else if (selectedValue === '电源') {
            select.innerHTML = '';
            getSelectGh();
            // getSelectLcys();
            getSelectGy();
            getDy();
            hqxlGy();

            // getLcys();

        } else if (selectedValue === '开关') {
            select.innerHTML = '';
            getSelectGh();
            // getSelectLcys();
            // getInputGy();
            getKg();
            // getLcys();
            // disGy();
        } else if (selectedValue === '配件') {
            select.innerHTML = '';
            getSelectGh();
            // getSelectLcys();
            // getInputGy();
            getPj();
            // getPj();
            // getLcys();
            // disGy();
        }

    })
})

function getJe() {
    var ddcd = parseFloat(document.getElementById('add-ddcd').value);
    var sl = parseFloat(document.getElementById('add-sl').value);
    var je = ddcd * 1 / 1000 * sl

    document.getElementById("add-je").value = je;
}
function getupJe() {
    var ddcd = parseFloat(document.getElementById('update-ddcd').value);
    var sl = parseFloat(document.getElementById('update-sl').value);
    var je = ddcd * 1 / 1000 * sl

    document.getElementById("update-je").value = je;
}

function getupGl() {
    var ddcd = parseFloat(document.getElementById('update-ddcd').value);
    var sl = parseFloat(document.getElementById('update-sl').value);
    var gl = Math.ceil(ddcd / 1000 * sl * 12);
    document.getElementById("update-gl").value = gl;
}
function getupkailiao() {
    var ddcd = parseFloat(document.getElementById('update-ddcd').value);
        $ajax({
            type: 'post',
            url: '/ddxd/getkailiao',
        }, false, '', function (res) {
            if (res.code == 200) {
                   for(var i=0;i<res.data.length;i++) {
                       var name=res.data[i].name;
                       var gh = document.getElementById('update-gh').value
                    if (name == gh) {
                        var klcc=res.data[i].chicun;
                        var chicun=ddcd-klcc;
                        // document.getElementById("add-chicun").value = chicun;
                        document.getElementById("update-chicun").value = chicun;
                    }
                }
            }

        })

}

function getList() {
    $('#ksxdrq').val("");
    $('#jsxdrq').val("");
    $('#khmc').val("");
    $('#ddh').val("");
    $('#azdz').val("");
    $ajax({
        type: 'post',
        url: '/ddxd/getList',
    }, false, '', function (res) {
        if (res.code == 200) {
            setTable(res.data);
            $("#ddxdTable").colResizable({
                liveDrag: true,
                gripInnerHtml: "<div class='grip'></div>",
                draggingClass: "dragging",
                resizeMode: 'fit'
            });
            for (i = 0; i <= res.data.id; i++) {
                idd = i;
            }
        }
    })
}

$(function () {
    getList();
    getKhmc();
    getShfs();
    // this_kuan = $('table').width();
    //打印
    // $('#print-btn').click(function () {
    //     $('table').width(this_kuan)
    //     $('.table-div').width(this_kuan)
    //     var newstr = window.document.getElementById("div").innerHTML;
    //     var oldstr = window.document.body.innerHTML;
    //     document.body.innerHTML = newstr;
    //     window.print();
    //     document.body.innerHTML = oldstr;
    //     window.location.reload();
    //     return false;
    // });
    // document.getElementById("dlm").innerText = ($.session.get('username'));

    $ajax({
        type: 'post',
        url: '/user/getUserName',
    }, false, '', function (res) {
        var this_username = res.data
        document.getElementById("dlm").innerText = this_username;
    })
    // $ajax({
    //     type: 'post',
    //     url: '/user/getName',
    // }, false, '', function (res) {
    //         var this_name = res.data;
    //
    //         document.getElementById("khmc").value = this_name;
    //
    // })

    $("#add-djbh").focus(function () {
        const today = new Date();
        const year = today.getFullYear();
        const month = ("0" + (today.getMonth() + 1)).slice(-2);
        const day = ('0' + today.getDate()).slice(-2);
        // const orderNumber = year + month + day + ('000').slice(-3);
        const bianhao = orderCount.toString().padStart(3, '0');
        orderCount += 1;
        $ajax({
            type: 'post',
            url: '/ddxd/getList',
        }, false, '', function (res) {
            if (res.code == 200) {
                if (res.data.length > 0) {
                    var num = res.data[0].djbh;
                }
                if (res.data.length = 0) {
                    $("#add-djbh").val("DD")
                } else {
                    var len = 2;
                    num = parseInt(num.split("_")[1], 10) + 1
                    num = num.toString();
                    while (num.length < len) {
                        num = "0" + num;
                    }
                    $("#add-supplierCode").val("DD" + num)
                }
            }
        })
    })

    $('#select-btn').click(function () {
        var ksxdrq = $('#ksxdrq').val();
        var jsxdrq = $('#jsxdrq').val();
        var khmc = $('#khmc').val();
        var ddh = $('#ddh').val();
        var azdz = $('#azdz').val();
        console.log(ksxdrq)
        if (ksxdrq === "") {
            ksxdrq = "1999-01-01";
        }
        if (jsxdrq === "") {
            jsxdrq = "2030-12-31";
        }
        $ajax({
            type: 'post',
            url: '/ddxd/queryList',
            data: {
                ksxdrq: ksxdrq,
                jsxdrq: jsxdrq,
                khmc: khmc,
                ddh: ddh,
                azdz: azdz
            }
        }, true, '', function (res) {
            if (res.code == 200) {
                setTable(res.data);
            }
        })
    });

    //刷新
    $("#refresh-btn").click(function () {
        getList();
    });

    //点击新增按钮显示弹窗
    $("#add-btn").click(function () {
        $('#add-modal').modal('show');
        getToken()
        getInputGh()
        getInputLcys()
        getInputGy()
    });

    //新增弹窗里点击关闭按钮
    $('#add-close-btn').click(function () {
        $('#add-modal').modal('hide');
        getList();
    });

    //新增弹窗里点击提交按钮
    $("#update-add-submit-btn").click(function () {
        getJe();
        getGl();
        let params = formToJson("#add-form");
        if (checkForm('#add-form')) {
            $ajax({
                type: 'post',
                url: '/ddxd/add',
                data: JSON.stringify({
                    addInfo: params
                }),
                dataType: 'json',
                contentType: 'application/json;charset=utf-8'
            }, false, '', function (res) {
                if (res.code == 200) {
                    swal("", res.msg, "success");
                    $('#add-form')[0].reset();
                    getList();
                    $('#add-close-btn').click();
                }
            })
            // var ddcd = parseFloat(document.getElementById('add-ddcd').value);
            // $ajax({
            //     type: 'post',
            //     url: '/ddxd/getkailiao',
            // }, false, '', function (res) {
            //     if (res.code == 200) {
            //         for(var i=0;i<res.data.length;i++) {
            //             var name=res.data[i].name;
            //             var gh = document.getElementById('add-gh').value
            //             if (name == gh) {
            //                 var klcc=res.data[i].chicun;
            //                 var chicun=ddcd-klcc;
            //                 // document.getElementById("add-chicun").value = chicun;
            //                 document.getElementById("add-chicun").value = 111;
            //             }
            //         }
            //     }
            //
            // })
        }
    });
    //新增一行
    $("#add-row").click(function () {
        let params = formToJson("#add-form");
        if (checkForm('#add-form')) {
            $ajax({
                type: 'post',
                url: '/ddxd/add1',
                data: JSON.stringify({
                    addInfo: params
                }),
                dataType: 'json',
                contentType: 'application/json;charset=utf-8'
            }
            , false, '', function (res) {
                    if (res.code == 200) {
                        // swal("", res.msg, "success");
                      addcishu();

                    }
                })
        }
    });
    function addcishu() {
        var spanElement = document.getElementById("cishu");
        var currentCount = parseInt(spanElement.innerText);
        spanElement.innerText = currentCount + 1;
    }

    //点击修改按钮显示弹窗
    $('#update-btn').click(function () {
        getupJe();
        getupGl();
        let rows = getTableSelection('#ddxdTable');
        if (rows.length > 1 || rows.length == 0) {
            swal('请选择一条数据修改!');
            return;
        }
        $('#update-modal').modal('show');
        setForm(rows[0].data, '#update-form');
        $('#update-khmc').val(rows[0].data.khmc);
        $('#update-xdrq').val(rows[0].data.xdrq);
        $('#update-djbh').val(rows[0].data.djbh);
        $('#update-shouhuo').val(rows[0].data.shouhuo);
        $('#update-lxdh').val(rows[0].data.lxdh);
        $('#update-shfs').val(rows[0].data.shfs);
        $('#update-azdz').val(rows[0].data.azdz);
        $('#update-ddh').val(rows[0].data.ddh);
        $('#update-luruyuan').val(rows[0].data.luruyuan);
        $('#update-fj').val(rows[0].data.fj);
        $('#update-gh').val(rows[0].data.gh);
        $('#update-lcys').val(rows[0].data.lcys);
        $('#update-ddcd').val(rows[0].data.ddcd);
        $('#update-sl').val(rows[0].data.sl);
        $('#update-cxdk').val(rows[0].data.cxdk);
        $('#update-cxdkRight').val(rows[0].data.cxdkRight);
        $('#update-gy').val(rows[0].data.gy);
        $('#update-gl').val(rows[0].data.gl);
        $('#update-bz').val(rows[0].data.bz);
        $('#update-dj').val(rows[0].data.dj);
        $('#update-je').val(rows[0].data.je);
        $('#update-chicun').val(rows[0].data.chicun);
        var selectedValue = rows[0].data.fj;
        var select = document.getElementById('update-gh');
        if (selectedValue === '房间柜号') {
            select.innerHTML = '';
            getSelectGh();
            getInputLcys();
            getInputGy();
            disGy();
        } else if (selectedValue === '铝型材') {
            select.innerHTML = '';
            getLxc();
            getLcys();
            disGy();
            getSelectGh();
            getSelectLcys();
            getInputGy();

        } else if (selectedValue === '电源') {
            select.innerHTML = '';
            getSelectGh();
            getSelectLcys();
            getSelectGy();
            hqxlGy();
            getDy();
            getLcys();
        } else if (selectedValue === '开关') {
            select.innerHTML = '';
            getSelectGh();
            getSelectLcys();
            getInputGy();
            getKg();
            getLcys();
            disGy();
        } else if (selectedValue === '配件') {
            select.innerHTML = '';
            getSelectGh();
            getSelectLcys();
            getInputGy();
            getPj();
            getLcys();
            disGy();
        }

        // $('#update-gh').val(rows[0].data.gh);
        // $('#update-lcys').val(rows[0].data.lcys);
        // $('#update-ddcd').val(rows[0].data.ddcd);
        // $('#update-sl').val(rows[0].data.sl);
        // $('#update-cxdk').val(rows[0].data.cxdk);
        // $('#update-cxdkRight').val(rows[0].data.cxdkRight);
        // $('#update-gy').val(rows[0].data.gy);
        // $('#update-gl').val(rows[0].data.gl);
        // $('#update-bz').val(rows[0].data.bz);
        // $('#update-dj').val(rows[0].data.dj);
        // $('#update-je').val(rows[0].data.je);
        // $('#update-chicun').val(rows[0].data.chicun);
    });

    //修改弹窗点击关闭按钮
    $('#update-close-btn').click(function () {
        $('#update-form')[0].reset();
        $('#update-modal').modal('hide');
    });

    //修改弹窗里点击提交按钮
    $('#update-submit-btn').click(function () {
        // var d1 = document.getElementById('add-djbh').value;
        getupGl();
        getupJe();
        var msg = confirm("确认要修改吗？");
        if (msg) {
            if (checkForm('#update-form')) {
                let params = formToJson('#update-form');

                $ajax({
                    type: 'post',
                    url: '/ddxd/update',
                    data: {
                        updateJson: JSON.stringify(params),

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

    //点击删除按钮
    $('#delete-btn').click(function () {
        var msg = confirm("确认要删除吗？");
        if (msg) {
            let rows = getTableSelection("#ddxdTable");
            if (rows.length == 0) {
                swal('请选择要删除的数据！');
                return;
            }
            let idList = [];
            $.each(rows, function (index, row) {
                idList.push(row.data.id)
            });
            $ajax({
                type: 'post',
                url: '/ddxd/delete',
                data: JSON.stringify({
                    idList: idList
                }),
                dataType: 'json',
                contentType: 'application/json;charset=utf-8'
            }, false, '', function (res) {
                if (res.code == 200) {
                    swal("", res.msg, "success");
                    getList();
                } else {
                    swal("", res.msg, "error");
                }
            })
        }
    })
});
function setTable(data) {
    if ($('#ddxdTable').html != '') {
        $('#ddxdTable').bootstrapTable('load', data);
    }

    $('#ddxdTable').bootstrapTable({
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
        theadClasses: "thead-light",//这里设置表头样式
        style: 'table-layout:fixed',
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
                field: 'xdrq',
                title: '下单日期',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'khmc',
                title: '客户名称',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'djbh',
                title: '单据编号',
                align: 'center',
                sortable: true,
                width: 100,
            }
            , {
                field: 'wancheng',
                title: '订单状态',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'je',
                title: '订单总金额金额',
                align: 'center',
                sortable: true,
                width: 80,
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
                title: '操作员',
                align: 'center',
                sortable: true,
                width: 80,
            }
            , {
                field: 'wcsj',
                title: '完成时间',
                align: 'center',
                sortable: true,
                width: 100,
            }
            // }, {
            //     field: 'fj',
            //     title: '项目类别',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'gh',
            //     title: '项目名称',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'lcys',
            //     title: '铝型材颜色',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'ddcd',
            //     title: '灯带长度mm',
            //     align: 'center',
            //     sortable: true,
            //     width: 130,
            // }, {
            //     field: 'sl',
            //     title: '数量(支)',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'cxdk',
            //     title: '出线端口左出线',
            //     align: 'center',
            //     sortable: true,
            //     width: 140,
            // }, {
            //     field: 'cxdkRight',
            //     title: '出线端口右出线',
            //     align: 'center',
            //     sortable: true,
            //     width: 140,
            // }, {
            //     field: 'gy',
            //     title: '光源',
            //     align: 'center',
            //     sortable: true,
            //     width: 80,
            // }, {
            //     field: 'gl',
            //     title: '功率W',
            //     align: 'center',
            //     sortable: true,
            //     width: 80,
            // }, {
            //     field: 'bz',
            //     title: '备注',
            //     align: 'center',
            //     sortable: true,
            //     width: 80,
            // }, {
            //     field: 'dj',
            //     title: '单价',
            //     align: 'center',
            //     sortable: true,
            //     width: 80,
            // }, {
            //     field: 'chicun',
            //     title: '开料尺寸',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            //     }, {
            //         field: 'shouhuo',
            //         title: '送货地址',
            //         align: 'center',
            //         sortable: true,
            //         width: 100,
            //     }, {
            //         field: 'lxdh',
            //         title: '联系电话',
            //         align: 'center',
            //         sortable: true,
            //         width: 100,
            //     }, {
            //         field: 'shfs',
            //         title: '送货方式',
            //         align: 'center',
            //         sortable: true,
            //         width: 100,
            //     }

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

    var query = $('#query').val();
    $ajax({
        type: 'post',
        url: '/ddxd/getList',
        data: {
            query: query,
        }
    }, true, '', function (res) {
        if (res.code == 200) {
            setTable(res.data);
            console.log(res.data)
            var array = res.data
            var header = []
            for (var i = 0; i < array.length; i++) {
                var body = {
                    khmc: array[i].khmc,
                    xdrq: array[i].xdrq,
                    djbh: array[i].djbh,
                    shouhuo: array[i].shouhuo,
                    lxdh: array[i].lxdh,
                    shfs: array[i].shfs,
                    azdz: array[i].azdz,
                    ddh: array[i].ddh,
                    fj: array[i].fj,
                    gh: array[i].gh,
                    ddcd: array[i].ddcd,
                    sl: array[i].sl,
                    cxdk: array[i].cxdk,
                    cxdkRight: array[i].cxdkRight,
                    lcys: array[i].lcys,
                    gy: array[i].gy,
                    dy: array[i].dy,
                    kg: array[i].kg,
                    pj: array[i].pj,
                    gl: array[i].gl,
                    bz: array[i].bz,
                    dj: array[i].dj,
                    fkzt: array[i].fkzt,
                    hd: array[i].hd,
                    shunxu: array[i].shunxu,
                    chicun: array[i].chicun,
                    summoney: array[i].summoney,
                    wancheng: array[i].wancheng,
                    jgczy: array[i].jgczy,
                    wcsj: array[i].wcsj,
                    luruyuan: array[i].luruyuan,
                    je: array[i].je,
                }
                header.push(body)
            }
            console.log(header)
            title = ['客户名称', '下单日期', '单据编号', '收货', '联系电话', '送货方式', '安装地址', '订单号', '项目类别', '项目名称', '灯带长度mm', '数量(支)', '出线端口左', '出线端口右', '铝材颜色', '光源', '电源', '开关', '配件', '功率W', '备注', '单价', '付款状态', '审单', '顺序', '尺寸', '总金额', '完成状态', '加工操作员', '完成时间', '录入员', '金额']
            JSONToExcelConvertor(header, "灯带下单", title)

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

function getToken() {
    $ajax({
        type: 'post',
        url: '/user/getToken',
    }, false, '', function (res) {

        if (res.code == 200) {

            //默认当前日期
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            //拼接成yyyy-MM-dd的形式
            var xdrq = date.getFullYear() + "-" + (month) + "-" + (day);
            var djbh = "";
            var ksxdrq = date.getFullYear() + "-" + (month) + "-" + (day);
            var jsxdrq = date.getFullYear() + "-" + (month) + "-" + ("0" + (date.getDate() + 1)).slice(-2);
            var khmc = "";
            var ddh = "";
            var azdz = "";
            $ajax({
                type: 'post',
                url: '/ddxd/queryList',
                data: {
                    ksxdrq: ksxdrq,
                    jsxdrq: jsxdrq,
                    khmc: khmc,
                    ddh: ddh,
                    azdz: azdz
                },
                async: false,
            }, false, '', function (res) {
                var length;

                length = 0;
                if (res.data != undefined) {
                    length = res.data.length
                }
                console.log(length)
                if (Math.floor((length + 1) / 10) === 0) {
                    length = "000" + (length + 1);
                } else if (Math.floor((length + 1) / 100) === 0) {
                    length = "00" + (length + 1);
                } else if (Math.floor((length + 1) / 1000) === 0) {
                    length = "0" + (length + 1);
                } else if (Math.floor((length + 1) / 10000) === 0) {
                    length = (length + 1);
                }
                console.log(length)
                djbh = "DD" + date.getFullYear() + (month) + (day) + length;
                console.log(djbh)
            })
            console.log(djbh)
            setForm(res.data, '#add-form');
            $('#add-luruyuan').val(res.data.name);
            $('#add-xdrq').val(xdrq);
            $('#add-djbh').val(djbh);

        }
    })
}


$('#add-comeAgain-btn').click(function () {

    getJe();
    getGl();
    getkailiao();
    let params = formToJson("#add-form");
    if (checkForm('#add-form')) {
        $ajax({
            type: 'post',
            url: '/ddxd/add',
            data: JSON.stringify({
                addInfo: params
            }),
            dataType: 'json',
            contentType: 'application/json;charset=utf-8'
        }, false, '', function (res) {
            if (res.code == 200) {
                swal("", res.msg, "success");
                $('#add-form')[0].reset();
                getList();
                $('#add-close-btn').click();
            }
        })
    }


    // $('#add-modal').modal('show');
    // getToken()
    // getInputGh()
    // getInputLcys()
    // getInputGy()

})