var idd;
function getList() {
    $ajax({
        type: 'post',
        url: '/xlpz/getList',
    }, false, '', function (res) {
        if (res.code == 200) {
            setTable(res.data);
            $("#xlpzTable").colResizable({
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

    //点击新增按钮显示弹窗
    $("#add-btn").click(function () {
        $('#add-modal').modal('show');
    });

    //新增弹窗里点击关闭按钮
    $('#add-close-btn').click(function () {
        $('#add-modal').modal('hide');
    });

    //新增弹窗里点击提交按钮
    $("#add-submit-btn").click(function () {
        let params = formToJson("#add-form");
        if (checkForm('#add-form')) {
            $ajax({
                type: 'post',
                url: '/xlpz/add',
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
    });

    //点击修改按钮显示弹窗
    $('#update-btn').click(function () {
        let rows = getTableSelection('#xlpzTable');
        if (rows.length > 1 || rows.length == 0) {
            swal('请选择一条数据修改!');
            return;
        }
        $('#update-modal').modal('show');
        setForm(rows[0].data, '#update-form');
        $('#update-cxdk').val(rows[0].data.cxdk);
        $('#update-lxc').val(rows[0].data.lxc);
        $('#update-lcys').val(rows[0].data.lcys);
        $('#update-gy').val(rows[0].data.gy);
        $('#update-dy').val(rows[0].data.dy);
        $('#update-kg').val(rows[0].data.kg);
        $('#update-pj').val(rows[0].data.pj);
        $('#update-shfs').val(rows[0].data.shfs);
        $('#update-blsjg').val(rows[0].data.blsjg);
        $('#update-blys').val(rows[0].data.blys);
        $('#update-lsxh').val(rows[0].data.lsxh);
        $('#update-lsw').val(rows[0].data.lsw);
        $('#update-kjlk').val(rows[0].data.kjlk);
        $('#update-jlkw').val(rows[0].data.jlkw);
        $('#update-lxcLk').val(rows[0].data.lxcLk);
        $('#update-lcysLk').val(rows[0].data.lcysLk);
        $('#update-fjpz').val(rows[0].data.fjpz);
        $('#update-jlpp').val(rows[0].data.jlpp);
        $('#update-quyu').val(rows[0].data.quyu);
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
                    url: '/xlpz/update',
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

    //点击删除按钮
    $('#delete-btn').click(function () {
        var msg = confirm("确认要删除吗？");
        if (msg) {
            let rows = getTableSelection("#xlpzTable");
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
                url: '/xlpz/delete',
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
    if ($('#xlpzTable').html != '') {
        $('#xlpzTable').bootstrapTable('load', data);
    }

    $('#xlpzTable').bootstrapTable({
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
                field: 'cxdk',
                title: '出线端口',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'lxc',
                title: '铝型材-灯带',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'lcys',
                title: '铝材颜色-灯带',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'gy',
                title: '光源',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'dy',
                title: '电源',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'kg',
                title: '开关',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'pj',
                title: '配件',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'shfs',
                title: '送货方式',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'lxcLk',
                title: '铝型材-铝框',
                align: 'center',
                sortable: true,
                width: 110,
            }, {
                field: 'lcysLk',
                title: '铝材颜色-铝框',
                align: 'center',
                sortable: true,
                width: 130,
            }, {
                field: 'blsjg',
                title: '玻璃深加工',
                align: 'center',
                sortable: true,
                width: 110,
            }, {
                field: 'blys',
                title: '玻璃颜色',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'lsxh',
                title: '拉手型号',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'lsw',
                title: '拉手位',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'kjlk',
                title: '开铰链孔',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'jlkw',
                title: '铰链孔位',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'fjpz',
                title: '附件配置',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'jlpp',
                title: '铰链品牌',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'quyu',
                title: '配送区域',
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