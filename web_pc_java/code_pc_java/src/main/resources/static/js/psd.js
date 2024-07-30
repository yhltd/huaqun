var idd;

function getList() {
    $('#orderNumber').val("");
    $('#customerName').val("");
    $('#songhuoAddress').val("");
    $('#anzhuangAddress').val("");
    $('#customerOrder').val("");
    $('#songhuoDanhao').val("");

    $ajax({
        type: 'post',
        url: '/psd/getList',
    }, false, '', function (res) {
        if (res.code == 200) {
            setTable(res.data);
            $("#psdTable").colResizable({
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
// function getriqi(){
//     const now = new Date();
//     const year = now.getFullYear();
//     const month = (now.getMonth() + 1).toString().padStart(2, '0');
//     const day = now.getDate().toString().padStart(2, '0');
//     const hours = now.getHours().toString().padStart(2, '0');
//     const minutes = now.getMinutes().toString().padStart(2, '0');
//     const seconds = now.getSeconds().toString().padStart(2, '0');
// }
function getKhmc() {
    $ajax({
        type: 'post',
        url: '/user/hqxlKhmc',
    }, false, '', function (res) {
        if (res.code == 200) {
            for (var i = 0; i < res.data.length; i++) {
                $("#add-customerName").append("<option>" + res.data[i].company + "</option>");
                $("#update-customerName").append("<option>" + res.data[i].company + "</option>");
            }
        }
    })
}
function getName() {
    $ajax({
        type: 'post',
        url: '/psd/getloginname',
    }, false, '', function (res) {
        if (res.code == 200) {
            var this_name = res.data;
            document.getElementById("add-customerNameRenyuan").value = this_name;

                // $("#update-customerName").append("<option>" + res.data[i].company + "</option>");

        }
    })
}
function getriqi(){

    document.getElementById("add-customerNameRiqi").value = new Date();
}

$(function () {
    $ajax({
        type: 'post',
        url: '/user/getUserName',
    }, false, '', function (res) {
        var this_username = res.data
        document.getElementById("dlm").innerText = this_username;
    })

    getList();
    getKhmc();
    getName();
    getriqi();
    setTable();
    getkucun();
    getquyuxl();
    initFileInput("fileInput1");
    initFileInput("fileInput2");
    initFileInput("fileInput3");
    initFileInput("fileInput4");
    initFileInput("fileInput5");
    initFileInput("fileInput6");
    initFileInput("fileInput7");
    initFileInput("fileInput8");
    initFileInput("fileInput9");
    initFileInput("fileInput10");
    initFileInput("fileInput11");
    initFileInput("fileInput12");
    initFileInput("fileInput13");
    initFileInput("fileInput14");
    initFileInput("fileInput15");
    initFileInput("fileInput16");
    initFileInput("fileInput17");
    initFileInput("fileInput18");
    initFileInput("fileInput19");
    initFileInput("fileInput20");
    initFileInput("fileInput21");
    initFileInput("fileInput22");
    initFileInput("fileInput23");
    initFileInput("fileInput24");
    initFileInput("fileInput25");
    initFileInput("fileInput26");
    initFileInput("fileInput27");
    initFileInput("fileInput28");
    initFileInput("fileInput29");
    initFileInput("fileInput30");
    initFileInput("fileInput31");
    initFileInput("fileInput32");
    initFileInput("fileInput33");
    initFileInput("fileInput34");
    initFileInput("fileInput35");
    initFileInput("fileInput36");
    initFileInput("fileInput37");
    initFileInput("fileInput38");
    initFileInput("fileInput39");
    initFileInput("fileInput40");
    initFileInput("fileInput41");
    initFileInput("fileInput42");
    // document.getElementById("dlm").innerText = ($.session.get('username'));

    $('#select-btn').click(function () {
        var orderNumber = $('#orderNumber').val();
        var customerName = $('#customerName').val();
        var quyu = $('#quyu').val();
        var anzhuangAddress = $('#anzhuangAddress').val();
        var customerOrder = $('#customerOrder').val();
        var songhuoDanhao = $('#songhuoDanhao').val();
        var ksinsertDate = $('#ksinsertDate').val();
        var jsinsertDate = $('#jsinsertDate').val();
        var wancheng = $('#wancheng').val();
        var kucun = $('#kucun').val();
        if (ksinsertDate === "") {
            ksinsertDate = "1999-01-01";
        }
        if (jsinsertDate === "") {
            jsinsertDate = "2030-12-31";
        }
        $ajax({
            type: 'post',
            url: '/psd/queryList',
            data: {
                orderNumber: orderNumber,
                customerName: customerName,
                quyu: quyu,
                anzhuangAddress: anzhuangAddress,
                customerOrder: customerOrder,
                songhuoDanhao: songhuoDanhao,
                ksinsertDate: ksinsertDate,
                jsinsertDate: jsinsertDate,
                wancheng: wancheng,
                kucun: kucun,
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
        getNumbern();
    });

    //新增弹窗里点击关闭按钮
    $('#add-close-btn').click(function () {
        $('#add-modal').modal('hide');
    });

    //新增弹窗里点击提交按钮
    $("#add-submit-btn").click(function () {
        var orderNumber = $('#add-orderNumber').val();
        let params = formToJson("#add-form");
        console.log("params", params)
        console.log("orderNumber", orderNumber)
        // if (checkForm('#add-form')) {
        $ajax({
            type: 'post',
            url: '/psd/add',
            data: JSON.stringify({
                addInfo: params,
                orderNumber: orderNumber,
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
        // }
    });

    //点击修改按钮显示弹窗
    $('#update-btn').click(function () {
        let rows = getTableSelection('#psdTable');
        if (rows.length > 1 || rows.length == 0) {
            swal('请选择一条数据修改!');
            return;
        }
        $('#update-modal').modal('show');
        setForm(rows[0].data, '#update-form');
        $('#update-orderNumber').val(rows[0].data.orderNumber);
        $('#update-insertDate').val(rows[0].data.insertDate);
        $('#update-customerName').val(rows[0].data.customerName);
        $('#update-customerNameRenyuan').val(rows[0].data.customerNameRenyuan);
        $('#update-customerNameRiqi').val(rows[0].data.customerNameRiqi);
        $('#update-customerNeedText').val(rows[0].data.customerNeedText);
        $('#update-customerNeedTextRenyuan').val(rows[0].data.customerNeedTextRenyuan);
        $('#update-customerNeedTextRiqi').val(rows[0].data.customerNeedTextRiqi);
        $('#update-customerNeedImg1').val(rows[0].data.customerNeedImg1);
        $('#update-customerNeedImg1Renyuan').val(rows[0].data.customerNeedImg1Renyuan);
        $('#update-customerNeedImg1Riqi').val(rows[0].data.customerNeedImg1Riqi);
        $('#update-customerNeedText1').val(rows[0].data.customerNeedText1);
        $('#update-customerNeedText1Renyuan').val(rows[0].data.customerNeedText1Renyuan);
        $('#update-customerNeedText1Riqi').val(rows[0].data.customerNeedText1Riqi);
        $('#update-customerNeedText2').val(rows[0].data.customerNeedText2);
        $('#update-customerNeedText2Renyuan').val(rows[0].data.customerNeedText2Renyuan);
        $('#update-customerNeedText2Riqi').val(rows[0].data.customerNeedText2Riqi);
        $('#update-songhuoAddress').val(rows[0].data.songhuoAddress);
        $('#update-songhuoAddressRenyuan').val(rows[0].data.songhuoAddressRenyuan);
        $('#update-songhuoAddressRiqi').val(rows[0].data.songhuoAddressRiqi);
        $('#update-anzhuangAddress').val(rows[0].data.anzhuangAddress);
        $('#update-anzhuangAddressRenyuan').val(rows[0].data.anzhuangAddressRenyuan);
        $('#update-anzhuangAddressRiqi').val(rows[0].data.anzhuangAddressRiqi);
        $('#update-phone').val(rows[0].data.phone);
        $('#update-phoneRenyuan').val(rows[0].data.phoneRenyuan);
        $('#update-phoneRiqi').val(rows[0].data.phoneRiqi);
        $('#update-customerOrder').val(rows[0].data.customerOrder);
        $('#update-customerOrderRenyuan').val(rows[0].data.customerOrderRenyuan);
        $('#update-customerOrderRiqi').val(rows[0].data.customerOrderRiqi);
        $('#update-songhuoDanhao').val(rows[0].data.songhuoDanhao);
        $('#update-songhuoDanhaoRenyuan').val(rows[0].data.songhuoDanhaoRenyuan);
        $('#update-songhuoDanhaoRiqi').val(rows[0].data.songhuoDanhaoRiqi);
        $('#update-peihuoImg1').val(rows[0].data.peihuoImg1);
        $('#update-peihuoImg1Renyuan').val(rows[0].data.peihuoImg1Renyuan);
        $('#update-peihuoImg1Riqi').val(rows[0].data.peihuoImg1Riqi);
        $('#update-peihuoImg2').val(rows[0].data.peihuoImg2);
        $('#update-peihuoImg2Renyuan').val(rows[0].data.peihuoImg2Renyuan);
        $('#update-peihuoImg2Riqi').val(rows[0].data.peihuoImg2Riqi);
        $('#update-peihuoImg3').val(rows[0].data.peihuoImg3);
        $('#update-peihuoImg3Renyuan').val(rows[0].data.peihuoImg3Renyuan);
        $('#update-peihuoImg3Riqi').val(rows[0].data.peihuoImg3Riqi);
        $('#update-peihuoImg4').val(rows[0].data.peihuoImg4);
        $('#update-peihuoImg4Renyuan').val(rows[0].data.peihuoImg4Renyuan);
        $('#update-peihuoImg4Riqi').val(rows[0].data.peihuoImg4Riqi);
        $('#update-peihuoImg5').val(rows[0].data.peihuoImg5);
        $('#update-peihuoImg5Renyuan').val(rows[0].data.peihuoImg5Renyuan);
        $('#update-peihuoImg5Riqi').val(rows[0].data.peihuoImg5Riqi);
        $('#update-peisongImg1').val(rows[0].data.peisongImg1);
        $('#update-peisongImg1Renyuan').val(rows[0].data.peisongImg1Renyuan);
        $('#update-peisongImg1Riqi').val(rows[0].data.peisongImg1Riqi);
        $('#update-peisongImg2').val(rows[0].data.peisongImg2);
        $('#update-peisongImg2Renyuan').val(rows[0].data.peisongImg2Renyuan);
        $('#update-peisongImg2Riqi').val(rows[0].data.peisongImg2Riqi);
        $('#update-peisongImg3').val(rows[0].data.peisongImg3);
        $('#update-peisongImg3Renyuan').val(rows[0].data.peisongImg3Renyuan);
        $('#update-peisongImg3Riqi').val(rows[0].data.peisongImg3Riqi);
        $('#update-wancheng').val(rows[0].data.wancheng);
        $('#update-wanchengRenyuan').val(rows[0].data.wanchengRenyuan);
        $('#update-wanchengRiqi').val(rows[0].data.wanchengRiqi);
        $('#update-beizhu').val(rows[0].data.beizhu);
        $('#update-beizhuRenyuan').val(rows[0].data.beizhuRenyuan);
        $('#update-beizhuRiqi').val(rows[0].data.beizhuRiqi);
        $('#update-kucunText').val(rows[0].data.kucunText);
        $('#update-kucunTextRenyuan').val(rows[0].data.kucunTextRenyuan);
        $('#update-kucunTextRiqi').val(rows[0].data.kucunTextRiqi);
        $('#update-kucunImg1').val(rows[0].data.kucunImg1);
        $('#update-kucunImg1Renyuan').val(rows[0].data.kucunImg1Renyuan);
        $('#update-kucunImg1Riqi').val(rows[0].data.kucunImg1Riqi);
        $('#update-kucunImg2').val(rows[0].data.kucunImg2);
        $('#update-kucunImg2Renyuan').val(rows[0].data.kucunImg2Renyuan);
        $('#update-kucunImg2Riqi').val(rows[0].data.kucunImg2Riqi);
        $('#update-kucunImg3').val(rows[0].data.kucunImg3);
        $('#update-kucunImg3Renyuan').val(rows[0].data.kucunImg3Renyuan);
        $('#update-kucunImg3Riqi').val(rows[0].data.kucunImg3Riqi);
        $('#update-money').val(rows[0].data.money);
        $('#update-moneyRenyuan').val(rows[0].data.moneyRenyuan);
        $('#update-moneyRiqi').val(rows[0].data.moneyRiqi);
        $('#update-shoukuan').val(rows[0].data.shoukuan);
        $('#update-shoukuanRenyuan').val(rows[0].data.shoukuanRenyuan);
        $('#update-shoukuanRiqi').val(rows[0].data.shoukuanRiqi);
        $('#update-customerNeedImg2').val(rows[0].data.customerNeedImg2);
        $('#update-customerNeedImg3').val(rows[0].data.customerNeedImg3);
        $('#update-customerNeedImg4').val(rows[0].data.customerNeedImg4);
        $('#update-customerNeedImg5').val(rows[0].data.customerNeedImg5);
        $('#update-customerNeedImg6').val(rows[0].data.customerNeedImg6);
        $('#update-customerNeedImg7').val(rows[0].data.customerNeedImg7);
        $('#update-customerNeedImg8').val(rows[0].data.customerNeedImg8);
        $('#update-peihuoImg6').val(rows[0].data.peihuoImg6);
        $('#update-peihuoImg7').val(rows[0].data.peihuoImg7);
        $('#update-peihuoImg8').val(rows[0].data.peihuoImg8);
        $('#update-peisongImg4').val(rows[0].data.peisongImg4);
        $('#update-peisongImg5').val(rows[0].data.peisongImg5);
        $('#update-peisongImg6').val(rows[0].data.peisongImg6);
        $('#update-peisongImg7').val(rows[0].data.peisongImg7);
        $('#update-peisongImg8').val(rows[0].data.peisongImg8);
        $('#update-kucunImg4').val(rows[0].data.kucunImg4);
        $('#update-kucunImg5').val(rows[0].data.kucunImg5);
        $('#update-kucunImg6').val(rows[0].data.kucunImg6);
        $('#update-kucunImg7').val(rows[0].data.kucunImg7);
        $('#update-kucunImg8').val(rows[0].data.kucunImg8);
        $('#update-wenjianImg1').val(rows[0].data.wenjianImg1);
        $('#update-wenjianImg2').val(rows[0].data.wenjianImg2);
        $('#update-wenjianImg3').val(rows[0].data.wenjianImg3);
        $('#update-wenjianImg4').val(rows[0].data.wenjianImg4);
        $('#update-wenjianImg5').val(rows[0].data.wenjianImg5);
        $('#update-wenjianImg6').val(rows[0].data.wenjianImg6);
        $('#update-wenjianImg7').val(rows[0].data.wenjianImg7);
        $('#update-wenjianImg8').val(rows[0].data.wenjianImg8);
        $('#update-wenjianImg1Renyuan').val(rows[0].data.wenjianImg1Renyuan);
        $('#update-wenjianImg1Riqi').val(rows[0].data.wenjianImg1Riqi);
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
                    url: '/psd/update',
                    data: {
                        updateJson: JSON.stringify(params)
                    },
                    dataType: 'json',
                    contentType: 'application/json;charset=utf-8'
                }, false, '', function (res) {
                    if (res.code == 200) {
                        setTable(res.data);
                        $("#psdTable").colResizable({
                            liveDrag: true,
                            gripInnerHtml: "<div class='grip'></div>",
                            draggingClass: "dragging",
                            resizeMode: 'fit',
                        })
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
            let rows = getTableSelection("#psdTable");
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
                url: '/psd/delete',
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

    function initFileInput(ctrlName) {
        var control = $('#' + ctrlName);
        control.fileinput({
            language: 'zh',
            uploadUrl: "https://localhost:9076/file/upload",
            allowedFileExtensions: ['jpg', 'gif', 'png'],
            uploadAsync: false,
            showUpload: true,
            showRemove: true,
            showPreview: true,
            showCaption: false,
            browseClass: "btn btn-primary",
            maxFileCount: 1,
            enctype: 'multipart/form-data',
            validateInialCount: true,
            msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}!",
            layoutTelates: {},
            uploadExtraData: function () {
                // var file = document.getElementById("fileInput1").files;
                var file = $("#add-orderNumber").val() + "-01.jpg"
                var path = "/huaqun_erqi/"
                var kongjian = 3
                var formData = {
                    file: file,
                    name: name,
                    path: path,
                    kongjian: kongjian,
                };
                return formData;
            }
        }).on("filebatchuploadsuccess", function (event, data, previewId, index) {
            console.log('正在上传');
        }).on("filebatchuploadsuccess", function (event, data, previewId, index) {
            var form = data.form, files = data.files, extra = data.extra,
                response = data.response, reader = data.reader;
            console.log(response);
            console.log(response.status);
        }).on("filebatchuploaderror", function (event, data, msg) {
            console.log('上传失败!' + data.status);
        })
    }
});

function getquyuxl() {
    $ajax({
        type: 'post',
        url: '/xlpz/hqquyu',
    }, false, '', function (res) {
        if (res.code == 200) {

            for (var i = 0; i < res.data.length; i++) {
                $("#add-hqquyu").append("<option>" + res.data[i].quyu + "</option>");
                $("#update-hqquyu").append("<option>" + res.data[i].quyu + "</option>");
            }
        }
    })
}

function getshoukuan() {
    $ajax({
        type: 'post',
        url: '/xlpz/hqquyu',
    }, false, '', function (res) {
        if (res.code == 200) {

            for (var i = 0; i < res.data.length; i++) {
                $("#add-hqquyu").append("<option>" + res.data[i].quyu + "</option>");
                $("#update-hqquyu").append("<option>" + res.data[i].quyu + "</option>");
            }
        }
    })
}

function getkucun() {
    $ajax({
        type: 'post',
        url: '/xlpz/hqkucun',
    }, false, '', function (res) {
        if (res.code == 200) {

            for (var i = 0; i < res.data.length; i++) {
                $("#add-kucun").append("<option>" + res.data[i].kucun + "</option>");
                $("#update-kucun").append("<option>" + res.data[i].kucun + "</option>");
            }
        }
    })
}

function setTable(data) {
    if ($('#psdTable').html != '') {
        $('#psdTable').bootstrapTable('load', data);
    }

    $('#psdTable').bootstrapTable({
        // url: "http://本机ip:后台端口/Journalism/getList",
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
            // {
            //     field: '',
            //     title: '序号',
            //     align: 'center',
            //     width: 50,
            //     formatter: function (value, row, index) {
            //         return index + 1;
            //     }
            // },
            {
                field: 'insertDate',
                title: '日期',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'customerName',
                title: '客户名称',
                align: 'center',
                sortable: true,
                width: 100,
            }
            , {
                field: 'customerNeedText1',
                title: '配送详情',
                align: 'center',
                sortable: true,
                width: 130,
            },
            {
                field: 'orderNumber',
                title: '单号',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'songhuoDanhao',
                title: '送货单号',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'money',
                title: '货款金额',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'shoukuan',
                title: '收款情况',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'customerOrder',
                title: '客户订单号',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'quyu',
                title: '配送区域',
                align: 'center',
                sortable: true,
                width: 100,
            },
            // {
            //     field: 'songhuoAddress',
            //     title: '配送地址',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // },
            {
                field: 'anzhuangAddress',
                title: '安装地址',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'customerNeedTextRenyuan',
                title: '客户需求文字录入员',
                align: 'center',
                sortable: true,
                width: 200,
            }, {
                field: 'kucun',
                title: '商品库存(文字)',
                align: 'center',
                sortable: true,
                width: 200,
                height: 400,
            }
            // },  {
            //     field: 'customerNameRenyuan',
            //     title: '录入员',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'customerNameRiqi',
            //     title: '完成时间',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'customerNeedText',
            //     title: '客户需求(文字)',
            //     align: 'center',
            //     sortable: true,
            //     width: 130,
            // }, {
            //     field: 'customerNeedTextRiqi',
            //     title: '完成时间',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // },
            , {
                field: 'customerNeedImg1',
                title: '客户需求(图片)',
                align: 'center',
                sortable: true,
                width: 130,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }, {
                field: 'customerNeedImg2',
                title: '客户需求(图片)',
                align: 'center',
                sortable: true,
                width: 130,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }, {
                field: 'customerNeedImg3',
                title: '客户需求(图片)',
                align: 'center',
                sortable: true,
                width: 130,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }, {
                field: 'customerNeedImg4',
                title: '客户需求(图片)',
                align: 'center',
                sortable: true,
                width: 130,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }, {
                field: 'customerNeedImg5',
                title: '客户需求(图片)',
                align: 'center',
                sortable: true,
                width: 130,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }, {
                field: 'customerNeedImg6',
                title: '客户需求(图片)',
                align: 'center',
                sortable: true,
                width: 130,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }, {
                field: 'customerNeedImg7',
                title: '客户需求(图片)',
                align: 'center',
                sortable: true,
                width: 130,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }, {
                field: 'customerNeedImg8',
                title: '客户需求(图片)',
                align: 'center',
                sortable: true,
                width: 130,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }
            // , {
            //     field: 'customerNeedImg1Renyuan',
            //     title: '录入员',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'customerNeedImg1Riqi',
            //     title: '完成时间',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'customerNeedText1Renyuan',
            //     title: '录入员',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'customerNeedText1Riqi',
            //     title: '完成时间',
            //     align: 'center',
            //     sortable: true,
            //     width: 140,
            // }
            , {
                field: 'customerNeedText2',
                title: '文件(照片)',
                align: 'center',
                sortable: true,
                width: 120,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }
            // , {
            //     field: 'customerNeedText2Renyuan',
            //     title: '录入员',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'customerNeedText2Riqi',
            //     title: '完成时间',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'songhuoAddressRenyuan',
            //     title: '录入员',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'songhuoAddressRiqi',
            //     title: '完成时间',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'anzhuangAddressRenyuan',
            //     title: '录入员',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'anzhuangAddressRiqi',
            //     title: '完成时间',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'phone',
            //     title: '联系人、电话',
            //     align: 'center',
            //     sortable: true,
            //     width: 130,
            // }, {
            //     field: 'phoneRenyuan',
            //     title: '录入员',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'phoneRiqi',
            //     title: '完成时间',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'customerOrderRenyuan',
            //     title: '录入员',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'customerOrderRiqi',
            //     title: '完成时间',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'songhuoDanhaoRenyuan',
            //     title: '录入员',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'songhuoDanhaoRiqi',
            //     title: '完成时间',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }
            , {
                field: 'peihuoImg1',
                title: '配货图片',
                align: 'center',
                sortable: true,
                width: 100,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }
            // , {
            //     field: 'peihuoImg1Renyuan',
            //     title: '录入员',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'peihuoImg1Riqi',
            //     title: '完成时间',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }
            , {
                field: 'peihuoImg2',
                title: '配货图片',
                align: 'center',
                sortable: true,
                width: 100,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }
            // , {
            //     field: 'peihuoImg2Renyuan',
            //     title: '录入员',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'peihuoImg2Riqi',
            //     title: '完成时间',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }
            , {
                field: 'peihuoImg3',
                title: '配货图片',
                align: 'center',
                sortable: true,
                width: 100,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }
            // , {
            //     field: 'peihuoImg3Renyuan',
            //     title: '录入员',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'peihuoImg3Riqi',
            //     title: '完成时间',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }
            , {
                field: 'peihuoImg4',
                title: '配货图片',
                align: 'center',
                sortable: true,
                width: 100,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }
            // , {
            //     field: 'peihuoImg4Renyuan',
            //     title: '录入员',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }
            , {
                field: 'peihuoImg4Riqi',
                title: '完成时间',
                align: 'center',
                sortable: true,
                width: 100,
            }
            , {
                field: 'peihuoImg5',
                title: '配货图片',
                align: 'center',
                sortable: true,
                width: 100,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }
            , {
                field: 'peihuoImg6',
                title: '配货图片',
                align: 'center',
                sortable: true,
                width: 100,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }, {
                field: 'peihuoImg7',
                title: '配货图片',
                align: 'center',
                sortable: true,
                width: 100,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }, {
                field: 'peihuoImg8',
                title: '配货图片',
                align: 'center',
                sortable: true,
                width: 100,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }
            // , {
            //     field: 'peihuoImg5Renyuan',
            //     title: '录入员',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }
            // , {
            //     field: 'peihuoImg5Riqi',
            //     title: '完成时间',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }
            , {
                field: 'peisongImg1',
                title: '配送图片',
                align: 'center',
                sortable: true,
                width: 100,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }
            // , {
            //     field: 'peisongImg1Renyuan',
            //     title: '录入员',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }
            // , {
            //     field: 'peisongImg1Riqi',
            //     title: '完成时间',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }
            , {
                field: 'peisongImg2',
                title: '配送图片',
                align: 'center',
                sortable: true,
                width: 100,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }
            // , {
            //     field: 'peisongImg2Renyuan',
            //     title: '录入员',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'peisongImg2Riqi',
            //     title: '完成时间',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }
            , {
                field: 'peisongImg3',
                title: '配送图片',
                align: 'center',
                sortable: true,
                width: 100,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }
            , {
                field: 'peisongImg4',
                title: '配送图片',
                align: 'center',
                sortable: true,
                width: 100,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }, {
                field: 'peisongImg5',
                title: '配送图片',
                align: 'center',
                sortable: true,
                width: 100,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }, {
                field: 'peisongImg6',
                title: '配送图片',
                align: 'center',
                sortable: true,
                width: 100,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }, {
                field: 'peisongImg7',
                title: '配送图片',
                align: 'center',
                sortable: true,
                width: 100,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }, {
                field: 'peisongImg8',
                title: '配送图片',
                align: 'center',
                sortable: true,
                width: 100,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }
            // , {
            //     field: 'peisongImg3Renyuan',
            //     title: '录入员',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'peisongImg3Riqi',
            //     title: '完成时间',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'wancheng',
            //     title: '完成情况',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'wanchengRenyuan',
            //     title: '录入员',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'wanchengRiqi',
            //     title: '完成时间',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'beizhu',
            //     title: '备注',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'beizhuRenyuan',
            //     title: '录入员',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'beizhuRiqi',
            //     title: '完成时间',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'kucunText',
            //     title: '商品库存(文字)',
            //     align: 'center',
            //     sortable: true,
            //     width: 200,
            //     height: 400,
            // }, {
            //     field: 'kucunTextRenyuan',
            //     title: '录入员',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'kucunTextRiqi',
            //     title: '完成时间',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }
            , {
                field: 'kucunImg1',
                title: '商品库存(图片)',
                align: 'center',
                sortable: true,
                width: 140,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }
            // , {
            //     field: 'kucunImg1Renyuan',
            //     title: '录入员',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'kucunImg1Riqi',
            //     title: '完成时间',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }
            , {
                field: 'kucunImg2',
                title: '商品库存(图片)',
                align: 'center',
                sortable: true,
                width: 140,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }
            // , {
            //     field: 'kucunImg2Renyuan',
            //     title: '录入员',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'kucunImg2Riqi',
            //     title: '完成时间',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }
            , {
                field: 'kucunImg3',
                title: '商品库存(图片)',
                align: 'center',
                sortable: true,
                width: 140,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }, {
                field: 'kucunImg4',
                title: '商品库存(图片)',
                align: 'center',
                sortable: true,
                width: 140,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }, {
                field: 'kucunImg5',
                title: '商品库存(图片)',
                align: 'center',
                sortable: true,
                width: 140,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }, {
                field: 'kucunImg6',
                title: '商品库存(图片)',
                align: 'center',
                sortable: true,
                width: 140,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }, {
                field: 'kucunImg7',
                title: '商品库存(图片)',
                align: 'center',
                sortable: true,
                width: 140,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }, {
                field: 'kucunImg8',
                title: '商品库存(图片)',
                align: 'center',
                sortable: true,
                width: 140,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            },
            // {
            //     field: 'kucunImg3Renyuan',
            //     title: '录入员',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'kucunImg3Riqi',
            //     title: '完成时间',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }
            //      ,{
            //     field: 'moneyRenyuan',
            //     title: '录入员',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'moneyRiqi',
            //     title: '完成时间',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'shoukuanRenyuan',
            //     title: '录入员',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'shoukuanRiqi',
            //     title: '完成时间',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'songhuoyuan',
            //     title: '送货员',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }
            {
                field: 'wenjianImg1',
                title: '文件(图片)',
                align: 'center',
                sortable: true,
                width: 100,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }, {
                field: 'wenjianImg2',
                title: '文件(图片)',
                align: 'center',
                sortable: true,
                width: 100,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }, {
                field: 'wenjianImg3',
                title: '文件(图片)',
                align: 'center',
                sortable: true,
                width: 100,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }, {
                field: 'wenjianImg4',
                title: '文件(图片)',
                align: 'center',
                sortable: true,
                width: 100,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }, {
                field: 'wenjianImg5',
                title: '文件(图片)',
                align: 'center',
                sortable: true,
                width: 100,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }, {
                field: 'wenjianImg6',
                title: '文件(图片)',
                align: 'center',
                sortable: true,
                width: 100,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }, {
                field: 'wenjianImg7',
                title: '文件(图片)',
                align: 'center',
                sortable: true,
                width: 100,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }, {
                field: 'wenjianImg8',
                title: '文件(图片)',
                align: 'center',
                sortable: true,
                width: 100,
                height: 50,
                formatter: function (value, row, index) {
                    console.log("value", value)
                    console.log("row", row)
                    return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
                }
            }
            // {
            //     field: 'wenjianImg1Renyuan',
            //     title: '录入员',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'wenjianImg1Riqi',
            //     title: '完成时间',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }
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

// $(document).ready(function(){
//     $('#add-customerNameRiqi').on('change',function(){
//         var d1 = $("#add-customerNameRiqi").customerNameRiqi;
//         var ud1 = d1.split("T")[0];
//         var format1 = ud1.split("-")[2] + "年" + ud1.split("-")[1] + "月" + ud1.split("-")[2] + "日"
//         $("add-customerNameRiqi").value = format1
//     })
// })

function getNumbern() {
    //默认当前日期
    var date = new Date();
    var day = ("0" + date.getDate()).slice(-2);
    var month = ("0" + (date.getMonth() + 1)).slice(-2);
    //拼接成yyyy-MM-dd的形式
    var xdrq = date.getFullYear() + "-" + (month) + "-" + (day);
    var djbh = "";
    var ksinsertDate = date.getFullYear() + "-" + (month) + "-" + (day);
    var jsinsertDate = date.getFullYear() + "-" + (month) + "-" + ("0" + (date.getDate() + 1)).slice(-2);
    $ajax({
        type: 'post',
        url: '/psd/numberList',
        data: {
            ksinsertDate: ksinsertDate,
            jsinsertDate: jsinsertDate,
        },
        async: false,
    }, false, '', function (res) {
        var length;

        length = 0;
        if (res.data != undefined) {
            length = res.data.length
        }
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
        djbh = "LK" + date.getFullYear() + (month) + (day) + length;
        console.log(djbh)
    })
    console.log(djbh)
    $('#add-orderNumber').val(djbh);
    $('#add-insertDate').val(xdrq);
    $('#update-insertDate').val(xdrq);
    $('#add-customerNameRiqi').val(xdrq);

}

