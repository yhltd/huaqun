var idd;
function getList() {
    $ajax({
        type: 'post',
        url: '/lkdayin2/getList',
    }, false, '', function (res) {
        if (res.code == 200) {
            setTable(res.data);
            $("#lkdayin2Table").colResizable({
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
        let rows = getTableSelection('#lkdayin2Table');
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
        $('#update-p12').val(rows[0].data.p12);
        $('#update-p13').val(rows[0].data.p13);
        $('#update-p14').val(rows[0].data.p14);
        $('#update-p15').val(rows[0].data.p15);
        $('#update-p16').val(rows[0].data.p16);
        $('#update-p17').val(rows[0].data.p17);
        $('#update-p18').val(rows[0].data.p18);
        $('#update-p19').val(rows[0].data.p19);
        $('#update-p20').val(rows[0].data.p20);
        $('#update-p21').val(rows[0].data.p21);
        $('#update-p22').val(rows[0].data.p22);
        $('#update-p23').val(rows[0].data.p23);
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
                    url: '/lkdayin2/update',
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
    if ($('#lkdayin2Table').html != '') {
        $('#lkdayin2Table').bootstrapTable('load', data);
    }

    $('#lkdayin2Table').bootstrapTable({
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
                title: '铰链孔方向',
                align: 'center',
                sortable: true,
                width: 110,
            }, {
                field: 'p10',
                title: '开门方向数量',
                align: 'center',
                sortable: true,
                width: 110,
            }, {
                field: 'p11',
                title: '有拉手数量（个）',
                align: 'center',
                sortable: true,
                width: 110,
            }, {
                field: 'p12',
                title: '拉手位方向',
                align: 'center',
                sortable: true,
                width: 110,
            }, {
                field: 'p13',
                title: '拉手位',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'p14',
                title: '装锁数量',
                align: 'center',
                sortable: true,
                width: 110,
            }, {
                field: 'p15',
                title: '锁孔位方向',
                align: 'center',
                sortable: true,
                width: 110,
            }, {
                field: 'p16',
                title: '锁孔位',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'p17',
                title: '开铰链孔',
                align: 'center',
                sortable: true,
                width: 110,
            }, {
                field: 'p18',
                title: '铰链孔位1',
                align: 'center',
                sortable: true,
                width: 110,
            }, {
                field: 'p19',
                title: '铰链孔位2',
                align: 'center',
                sortable: true,
                width: 110,
            }, {
                field: 'p20',
                title: '铰链孔位3',
                align: 'center',
                sortable: true,
                width: 110,
            }, {
                field: 'p21',
                title: '铰链孔位4',
                align: 'center',
                sortable: true,
                width: 110,
            }, {
                field: 'p22',
                title: '铰链孔位5',
                align: 'center',
                sortable: true,
                width: 110,
            }, {
                field: 'p23',
                title: '铰链孔位6',
                align: 'center',
                sortable: true,
                width: 110,
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