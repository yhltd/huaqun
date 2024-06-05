var idd;
function getList() {
    $ajax({
        type: 'post',
        url: '/dddy/getList',
    }, false, '', function (res) {
        if (res.code == 200) {
            setTable(res.data);
            $("#dddayinTable").colResizable({
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

    //刷新
    $("#refresh-btn").click(function () {
        getList();
    });

    //点击修改按钮显示弹窗
    $('#update-btn').click(function () {
        let rows = getTableSelection('#dddayinTable');
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
                    url: '/dddy/update',
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
    if ($('#dddayinTable').html != '') {
        $('#dddayinTable').bootstrapTable('load', data);
    }

    $('#dddayinTable').bootstrapTable({
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
                title: '房间柜号',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'p6',
                title: '铝型材',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'p7',
                title: '其他类别',
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