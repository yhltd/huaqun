var idd;
function getList() {
    $('#name').val("");
    $('#pinyin').val("");
    $ajax({
        type: 'post',
        url: '/user/getList',
    }, false, '', function (res) {
        if (res.code == 200) {
            setTable(res.data);
            $("#userTable").colResizable({
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

    $('#select-btn').click(function () {
        var name = $('#name').val();
        var pinyin = $('#pinyin').val();
        $ajax({
            type: 'post',
            url: '/user/queryList',
            data: {
                name: name,
                pinyin: pinyin,
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
                url: '/user/add',
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
        let rows = getTableSelection('#userTable');
        if (rows.length > 1 || rows.length == 0) {
            swal('请选择一条数据修改!');
            return;
        }
        $('#update-modal').modal('show');
        setForm(rows[0].data, '#update-form');
        $('#update-username').val(rows[0].data.username);
        $('#update-password').val(rows[0].data.password);
        $('#update-company').val(rows[0].data.company);
        $('#update-pinyin').val(rows[0].data.pinyin);
        $('#update-power').val(rows[0].data.power);
        $('#update-quyu').val(rows[0].data.quyu);
        $('#update-addressName').val(rows[0].data.addressName);
        $('#update-money').val(rows[0].data.money);
        $('#update-shendan').val(rows[0].data.shendan);
        $('#update-pay').val(rows[0].data.pay);
        $('#update-kailiao').val(rows[0].data.kailiao);
        $('#update-zuzhuang').val(rows[0].data.zuzhuang);
        $('#update-baozhuang').val(rows[0].data.baozhuang);
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
                    url: '/user/update',
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
            let rows = getTableSelection("#userTable");
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
                url: '/user/delete',
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
    if ($('#userTable').html != '') {
        $('#userTable').bootstrapTable('load', data);
    }

    $('#userTable').bootstrapTable({
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
                field: 'username',
                title: '账号',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'password',
                title: '密码',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'name',
                title: '姓名',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'company',
                title: '公司',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'pinyin',
                title: '简码',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'power',
                title: '权限',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'quyu',
                title: '区域',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'addressName',
                title: '送货地址',
                align: 'center',
                sortable: true,
                width: 180,
            }, {
                field: 'money',
                title: '铝框金额权限',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'shendan',
                title: '审单权限',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'pay',
                title: '付款权限',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'kailiao',
                title: '开料权限',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'zuzhuang',
                title: '组装权限',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'baozhuang',
                title: '包装权限',
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