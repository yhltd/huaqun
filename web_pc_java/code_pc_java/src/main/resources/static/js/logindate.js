var idd;
function getList() {
    $('#ddxh').val("");
    $ajax({
        type: 'post',
        url: '/logindate/getList',
    }, false, '', function (res) {
        if (res.code == 200) {
            setTable(res.data);
            $("#logindatetable").colResizable({
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
    //刷新
    $("#refresh-btn").click(function () {
        getList();
    });
    //点击删除按钮
    $('#delete-btn').click(function () {
        var msg = confirm("确认要删除吗？");
        if (msg) {
            let rows = getTableSelection("#logindatetable");
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
                url: '/logindate/delete',
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
    if ($('#logindatetable').html != '') {
        $('#logindatetable').bootstrapTable('load', data);
    }

    $('#logindatetable').bootstrapTable({
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
            }
            , {
                field: 'name',
                title: '姓名',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'loginDate',
                title: '登录时间',
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
// function getToken() {
//     $ajax({
//         type: 'post',
//         url: '/user/getToken',
//     }, false, '', function (res) {
//         console.log(res.data.token)
//         if (res.code == 200) {
//             //默认当前日期
//             const year = now.getFullYear();
//             const month = String(now.getMonth() + 1).padStart(2, '0');
//             const day = String(now.getDate()).padStart(2, '0');
//             const hours = String(now.getHours()).padStart(2, '0');
//             const minutes = String(now.getMinutes()).padStart(2, '0');
//             const seconds = String(now.getSeconds()).padStart(2, '0');
//             var logindate=`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
//              name=res.data.token.name;
//              username=res.data.token.username;
//             $ajax({
//                 type: 'post',
//                 url: '/logindate/add',
//                 data: {
//                    name:name,
//                    username:username,
//                     logindate:logindate,
//                 },
//                 async: false,
//             }, false, '', function (res) {
//                 )
//             console.log(djbh)
//             setForm(res.data, '#add-form');
//             $('#add-customerNameRenyuan').val(res.data.name);
//             $('#add-insertDate').val(xdrq);
//             $('#add-orderNumber').val(djbh);
//
//         }
//     })
// }
