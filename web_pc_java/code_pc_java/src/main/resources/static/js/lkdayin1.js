var idd;
function getList() {
    $ajax({
        type: 'post',
        url: '/lkdayin1/getList',
    }, false, '', function (res) {
        if (res.code == 200) {
            setTable(res.data);
            $("#lkdayinTable").colResizable({
                liveDrag: true,
                gripInnerHtml: "<div class='grip'></div>",
                draggingClass: "dragging",
                resizeMode: 'fit'
            });
            for (i=0;i<=res.data.id;i++){
                idd=i;
            }
        }
    })
}

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

    //刷新
    $("#refresh-btn").click(function () {
        getList();
    });

    //点击修改按钮显示弹窗
    $('#update-btn').click(function () {
        let rows = getTableSelection('#lkdayinTable');
        if (rows.length > 1 || rows.length == 0) {
            swal('请选择一条数据修改!');
            return;
        }
        $('#update-modal').modal('show');
        setForm(rows[0].data, '#update-form');
        $('#update-p1').val(rows[0].data.p1);
        $('#update-p2').val(rows[0].data.p2);
        $('#update-p3').val(rows[0].data.p3);
        $('#update-p4').val(rows[0].data.p4);
        $('#update-p5').val(rows[0].data.p5);
        $('#update-p6').val(rows[0].data.p6);
        $('#update-p7').val(rows[0].data.p7);
        $('#update-p8').val(rows[0].data.p8);
        $('#update-p9').val(rows[0].data.p9);
        $('#update-p10').val(rows[0].data.p10);
        $('#update-p11').val(rows[0].data.p11);
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
                    url: '/lkdayin1/update',
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
    if ($('#lkdayinTable').html != '') {
        $('#lkdayinTable').bootstrapTable('load', data);
    }

    $('#lkdayinTable').bootstrapTable({
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
                field: 'p1',
                title: '客户',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'p2',
                title: '日期',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'p3',
                title: '订单号',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'p4',
                title: '地址',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'p5',
                title: '单据编号',
                align: 'center',
                sortable: true,
                width: 110,
            }, {
                field: 'p6',
                title: '铝型材',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'p7',
                title: '玻璃深加工',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'p8',
                title: '尺寸数量',
                align: 'center',
                sortable: true,
                width: 110,
            }, {
                field: 'p9',
                title: '附件配置',
                align: 'center',
                sortable: true,
                width: 110,
            }, {
                field: 'p10',
                title: '铰链品牌',
                align: 'center',
                sortable: true,
                width: 110,
            }, {
                field: 'p11',
                title: '数量',
                align: 'center',
                sortable: true,
                width: 80,
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