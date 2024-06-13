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
            for (i=0;i<=res.data.id;i++){
                idd=i;
            }
        }
    })
}

$(function () {
    getList();
    initFileInput("fileInput1");

    $('#select-btn').click(function () {
        var orderNumber = $('#orderNumber').val();
        var customerName = $('#customerName').val();
        var songhuoAddress = $('#songhuoAddress').val();
        var anzhuangAddress = $('#anzhuangAddress').val();
        var customerOrder = $('#customerOrder').val();
        var songhuoDanhao = $('#songhuoDanhao').val();
        $ajax({
            type: 'post',
            url: '/psd/queryList',
            data: {
                orderNumber: orderNumber,
                customerName: customerName,
                songhuoAddress: songhuoAddress,
                anzhuangAddress: anzhuangAddress,
                customerOrder: customerOrder,
                songhuoDanhao: songhuoDanhao,
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

    // $("#addimg-btn").click(function () {
    //     $('#add-modal').modal('show');
    //     let params = formToJson("#add-form");
    //     $ajax({
    //         type: 'post',
    //         url: '/psd/uploadFile',
    //         data: JSON.stringify({
    //             addInfo: params
    //         }),
    //         dataType: 'json',
    //         contentType: 'application/json;charset=utf-8'
    //     }, false, '', function (res) {
    //         if (res.code == 200) {
    //             swal("", res.msg, "success");
    //             $('#add-form')[0].reset();
    //             getList();
    //             $('#add-close-btn').click();
    //         }
    //     })
    // });

    //点击新增按钮显示弹窗
    $("#add-btn").click(function () {
        $('#add-modal').modal('show');
    });

    //新增弹窗里点击关闭按钮
    $('#add-close-btn').click(function () {
        $('#add-modal').modal('hide');
    });

    $("#addimg-btn").click(function () {
        // var fileInput = document.getElementById('add-customerNeedImg1');
        // var file = fileInput.files[0];
        //
        // var formData = new FormData();
        // formData.append('file', file);
        // $.ajax({
        //     url: 'https://huaqunwechar.com:9087/file/upload',  // 上传文件的服务器端处理脚本
        //     type: 'POST',
            // header: { "Content-Type": "multipart/form-data" },
            // filePath: 'E:\\yho173_20240516\\工作\\万年县入木电子\\缓存文件夹\\测试公司名称1.jpg',
            // async: true,
            // data:{
                // name:'ceshi.jpg',
                // path:'/huaqun_erqi/',
                // kongjian: 8,
            // },
            // contentType: false,
            // processData: false,
        //     success: function(response) {
        //         console.log('文件上传成功！');
        //     },
        //     error: function() {
        //         // console.log(error);
        //         console.log('文件上传失败！');
        //     }
        // });


    // var save_list = this.Product

    // for(var i=0; i<save_list.body.length; i++){
    //     if(save_list.body[i].imgFileName != undefined && save_list.body[i].imgFileName != null && save_list.body[i].imgFileName != ""){
    //         save_list = "http://yhocn.cn:9088/ruilida/" + "ceshi20240607.jpg"
    //         console.log(1);
    //         var formData = new FormData();
    //         formData.append("file","E:\\yho173_20240516\\工作\\万年县入木电子\\缓存文件夹\\测试公司名称1.jpg")
    //         let url = "http://yhocn.cn:8102/file/upload"
    //         console.log(2);
    //         this.axios.post(url,formData).then(res => {
    //             console.log(res.msg)
    //         }).catch(() => {
    //             MessageUtil.error("网络异常");
    //         })
        // }
    // }

        // $.ajax({
        //     url: '/psd/mainUpload',  // 上传文件的服务器端处理脚本
        //     type: 'POST',
        //     // header: { "Content-Type": "multipart/form-data" },
        //     filePath: 'E:\\yho173_20240516\\工作\\万年县入木电子\\缓存文件夹\\测试公司名称1.jpg',
        //     async: false,
        //     // data:{
        //     // name:'ceshi.jpg',
        //     // path:'/huaqun_erqi/',
        //     // kongjian: 8,
        //     // },
        //     contentType: false,
        //     processData: false,
        //         success: function(response) {
        //             console.log('文件上传成功！');
        //         },
        //         error: function() {
        //             // console.log(error);
        //             console.log('文件上传失败！');
        //         }
        //     });

});
    //新增弹窗里点击提交按钮
    $("#add-submit-btn").click(function () {

        // var fileInput = document.getElementById('add-customerNeedImg1');
        // var file = fileInput.files[0];
        //
        // var formData = new FormData();
        // formData.append('file', file);
        // $.ajax({
        //     url: 'https://huaqunwechar.com:9087/file/upload',  // 上传文件的服务器端处理脚本
        //     type: 'POST',
        //     path:'/huaqun_erqi/',
        //     data: formData,
        //     contentType: false,
        //     processData: false,
        //     success: function(response) {
        //         console.log('文件上传成功！');
        //     },
        //     error: function() {
        //         console.log('文件上传失败！');
        //     }
        // });

        // const uploadInput = document.getElementById('add-customerNeedImg1');
        //
        // uploadInput.addEventListener('change', function(event) {
        //     const file = event.target.files[0];
        //     // 执行上传操作
        //     uploadImage(file);
        // });
        // function uploadImage(file) {
        //     const formData = new FormData();
        //     formData.append('image', file);
        //     // 执行上传操作
        //     sendFormData(formData);
        // }
        // function sendFormData(formData) {
        //     const xhr = new XMLHttpRequest();
        //     xhr.open('POST', 'https://huaqunwechar.com:9087/file/upload', true);
        //     xhr.onreadystatechange = function() {
        //         if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        //             // 上传成功处理逻辑
        //             console.log('上传成功');
        //         }
        //     };
        //     xhr.send(formData);
        // }

        // var save_list = this.image
        //
        // for(var i=0; i<save_list.length; i++){
        //     if(save_list.body[i].image !== undefined && save_list.body[i].image != null && save_list.body[i].image != ""){
        //         save_list.body[i].image = "http://huaqunwechar.com:9088/huaqun_erqi/" + save_list.body[i].image
        //         var formData = new FormData();
        //         formData.append("file",save_list.body[i].image)
        //         let url = "https://huaqunwechar.com:9087/file/upload"
        //         this.axios.post(url,formData).then(res => {
        //             console.log(res.msg)
        //         }).catch(() => {
        //             MessageUtil.error("网络异常");
        //         })
        //     }
        // }

        // var formData = new FormData();
        // var file1 = document.getElementById("add-customerNeedImg1").files;
        // if (file1.length > 0) {
        //     formData.append("file1", file1[0]);
        // } else {
        //     formData.append("file1", null);
        // }
        // $ajax({
        //     type: 'post',
        //     url: 'https://huaqunwechar.com:9087/file/upload',
        //     data: formData,
        //     async: true,
        //     path:'/huaqun_erqi/',
        //     cache: false,//不设置缓存
        //     processData: false,  // 不处理数据
        //     contentType: false // 不设置内容类型
        // }, false, '', function (res) {
        //     if (res.code == 200) {
        //         alert(res.msg);
        //         location.reload();
        //     } else {
        //         alert(res.msg);
        //         formData = new FormData();
        //     }
        // })





        let params = formToJson("#add-form");
        if (checkForm('#add-form')) {
            $ajax({
                type: 'post',
                url: '/psd/add',
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

    function initFileInput(ctrlName){
        // var file = document.getElementById("fileInput1").files;
        // var formData2 = new FormData();
        // var formData3 = new FormData();
        // var formData4 = new FormData();
        // var formData = new FormData();
        // var formData1 = new FormData();
        // formData2.append("header",{ "Content-Type": "multipart/form-data" })
        // formData1.append("file",file[0])
        // formData3.append("filePath","PS20240612001-01.jpg")
        // formData4.append("name","file")
        // formData.append("name","PS20240612001-01.jpg")
        // formData.append("path","/huaqun_erqi/")
        // formData.append("kongjian",3)
        var control = $('#' + ctrlName);
        control.fileinput({
            language:'zh',
            uploadUrl:"https://huaqunwechar.com:9087/file/upload",
            // uploadUrl:"http://yhocn.cn:8102/file/upload",
            allowedFileExtensions: ['jpg','gif','png'],
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
            layoutTelates :{

            },

            uploadExtraData:function (){
            var file = document.getElementById("fileInput1").files;
            var name = "PS20240612001-01.jpg"
            var path = "/huaqun_erqi/"
            var kongjian = document.getElementById("fileInput1").size;
            var formData = {
                file:file,
                name:name,
                path:path,
                kongjian:kongjian,
            };
            return formData;

                // var formData = {
                //     // header: { "Content-Type": "multipart/form-data" },
                //     // filePath: "PS20240612001-01.jpg",
                //     // name: "file",
                //     kongjian: 3,
                //     path: "/huaqun_erqi/",
                //     name: "PS20240612001-01.jpg",
                // }
                // return formData;
                // return header = { "Content-Type": "multipart/form-data" }
                // return filePath = "PS20240612001-01.jpg"
                // return name = "file"
                // return {
                    // header: { "Content-Type": "multipart/form-data" },
                    // filePath: "PS20240612001-01.jpg",
                    // name: "file",
                //     kongjian: 3,
                //     path: "/huaqun_erqi/",
                //     name: "PS20240612001-01.jpg",
                // }

                // var formData = new FormData();
                // formData.append("name","cs-01.jpg")
                // formData.append("path","/huaqun_erqi/")
                // formData.append("kongjian",3)
                // return formData;

            }
        }).on("filebatchuploadsuccess",function(event,data,previewId,index){
            console.log('正在上传');
        }).on("filebatchuploadsuccess",function(event,data,previewId,index){
            var form = data.form,files = data.files,extra = data.extra,
                response = data.response,reader = data.reader;
            console.log(response);
            console.log(response.status);
        }).on("filebatchuploaderror",function(event,data,msg){
            console.log('上传失败!'+ data.status);
        })
    }
});

function setTable(data) {
    if ($('#psdTable').html != '') {
        $('#psdTable').bootstrapTable('load', data);
    }

    $('#psdTable').bootstrapTable({
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
                field: 'orderNumber',
                title: '单号',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
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
            }, {
                field: 'customerNameRenyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'customerNameRiqi',
                title: '完成时间',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'customerNeedText',
                title: '客户需求(文字)',
                align: 'center',
                sortable: true,
                width: 130,
            }, {
                field: 'customerNeedTextRenyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'customerNeedTextRiqi',
                title: '完成时间',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'customerNeedImg1',
                title: '客户需求(图片)',
                align: 'center',
                sortable: true,
                width: 130,
                // formatter: function (value, row, index) {
                //     if (value != null && value != "") {
                //         var a = value.split("/");
                //         a = "/" + a[a.length - 1];
                //         return '<a href="' + a + '" style="display:block" target="_blank"><img src="' + a + '" style="width: 50px;"></a> <button onclick="javascript:fileUp(' + row.id + ',' + '\'customerNeedImg1\'' + ')" class="btn btn-small btn-primary">上传</button> <button onclick="javascript:fileDel(' + row.id + ',' + '\'customerNeedImg1\'' + ')" class="btn btn-small btn-primary">删除</button>'
                //     } else {
                //         return '<button onclick="javascript:fileUp(' + row.id + ',' + '\'file1\'' + ')" class="btn btn-small btn-primary">上传</button> </a>'
                //     }
                // }
            }, {
                field: 'customerNeedImg2',
                title: '客户需求(图片)',
                align: 'center',
                sortable: true,
                width: 130,
            }, {
                field: 'customerNeedImg3',
                title: '客户需求(图片)',
                align: 'center',
                sortable: true,
                width: 130,
            }, {
                field: 'customerNeedImg4',
                title: '客户需求(图片)',
                align: 'center',
                sortable: true,
                width: 130,
            }, {
                field: 'customerNeedImg5',
                title: '客户需求(图片)',
                align: 'center',
                sortable: true,
                width: 130,
            }, {
                field: 'customerNeedImg6',
                title: '客户需求(图片)',
                align: 'center',
                sortable: true,
                width: 130,
            }, {
                field: 'customerNeedImg7',
                title: '客户需求(图片)',
                align: 'center',
                sortable: true,
                width: 130,
            }, {
                field: 'customerNeedImg8',
                title: '客户需求(图片)',
                align: 'center',
                sortable: true,
                width: 130,
            }, {
                field: 'customerNeedImg1Renyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'customerNeedImg1Riqi',
                title: '完成时间',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'customerNeedText1',
                title: '配送文字1',
                align: 'center',
                sortable: true,
                width: 130,
            }, {
                field: 'customerNeedText1Renyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'customerNeedText1Riqi',
                title: '完成时间',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'customerNeedText2',
                title: '文件(照片)',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'customerNeedText2Renyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'customerNeedText2Riqi',
                title: '完成时间',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'songhuoAddress',
                title: '送货地址',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'songhuoAddressRenyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'songhuoAddressRiqi',
                title: '完成时间',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'anzhuangAddress',
                title: '安装地址',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'anzhuangAddressRenyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'anzhuangAddressRiqi',
                title: '完成时间',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'phone',
                title: '联系人、电话',
                align: 'center',
                sortable: true,
                width: 130,
            }, {
                field: 'phoneRenyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'phoneRiqi',
                title: '完成时间',
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
                field: 'customerOrderRenyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'customerOrderRiqi',
                title: '完成时间',
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
                field: 'songhuoDanhaoRenyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'songhuoDanhaoRiqi',
                title: '完成时间',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peihuoImg1',
                title: '配货图片',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peihuoImg1Renyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peihuoImg1Riqi',
                title: '完成时间',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peihuoImg2',
                title: '配货图片',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peihuoImg2Renyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peihuoImg2Riqi',
                title: '完成时间',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peihuoImg3',
                title: '配货图片',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peihuoImg3Renyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peihuoImg3Riqi',
                title: '完成时间',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peihuoImg4',
                title: '配货图片',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peihuoImg4Renyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peihuoImg4Riqi',
                title: '完成时间',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peihuoImg5',
                title: '配货图片',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peihuoImg6',
                title: '配货图片',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peihuoImg7',
                title: '配货图片',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peihuoImg8',
                title: '配货图片',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peihuoImg5Renyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peihuoImg5Riqi',
                title: '完成时间',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peisongImg1',
                title: '配送图片',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peisongImg1Renyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peisongImg1Riqi',
                title: '完成时间',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peisongImg2',
                title: '配送图片',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peisongImg2Renyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peisongImg2Riqi',
                title: '完成时间',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peisongImg3',
                title: '配送图片',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peisongImg4',
                title: '配送图片',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peisongImg5',
                title: '配送图片',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peisongImg6',
                title: '配送图片',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peisongImg7',
                title: '配送图片',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peisongImg8',
                title: '配送图片',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peisongImg3Renyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'peisongImg3Riqi',
                title: '完成时间',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'wancheng',
                title: '完成情况',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'wanchengRenyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'wanchengRiqi',
                title: '完成时间',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'beizhu',
                title: '备注',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'beizhuRenyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'beizhuRiqi',
                title: '完成时间',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'kucunText',
                title: '商品库存(文字)',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'kucunTextRenyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'kucunTextRiqi',
                title: '完成时间',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'kucunImg1',
                title: '商品库存(图片)',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'kucunImg1Renyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'kucunImg1Riqi',
                title: '完成时间',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'kucunImg2',
                title: '商品库存(图片)',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'kucunImg2Renyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'kucunImg2Riqi',
                title: '完成时间',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'kucunImg3',
                title: '商品库存(图片)',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'kucunImg4',
                title: '商品库存(图片)',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'kucunImg5',
                title: '商品库存(图片)',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'kucunImg6',
                title: '商品库存(图片)',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'kucunImg7',
                title: '商品库存(图片)',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'kucunImg8',
                title: '商品库存(图片)',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'kucunImg3Renyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'kucunImg3Riqi',
                title: '完成时间',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'money',
                title: '金额',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'moneyRenyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'moneyRiqi',
                title: '完成时间',
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
                field: 'shoukuanRenyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'shoukuanRiqi',
                title: '完成时间',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'songhuoyuan',
                title: '送货员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'wenjianImg1',
                title: '文件(图片)',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'wenjianImg2',
                title: '文件(图片)',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'wenjianImg3',
                title: '文件(图片)',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'wenjianImg4',
                title: '文件(图片)',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'wenjianImg5',
                title: '文件(图片)',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'wenjianImg6',
                title: '文件(图片)',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'wenjianImg7',
                title: '文件(图片)',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'wenjianImg8',
                title: '文件(图片)',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'wenjianImg1Renyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'wenjianImg1Riqi',
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

// $('#add-customerNeedImg1').on('change',function(){
//     if(this.files.length <= 0) {
//         return false;
//     }
//     var pic1 = this.files[0];
//     var formData = new FormData();
//     formData.append('pic1',pic1);
//     $.ajax({
//         // url:'/category/addSecondCategoryPic',
//         url:'/psd/add',
//         type:'post',
//         data:formData,
//         cache:false,
//         procssData:false,
//         contentType:false,
//         success:function(data){
//             console.log(data);
//             $('.head-img').attr('src',data.picAddr);
//         }
//     })
// })

// var imgdata = ""
// function selectImge(obj) {
//
//     var f = $(obj).val();
//     if (f == null || f == undefined || f == '') {
//         document.getElemtById('image').src = "";
//         $("#image").show();
//         return false;
//     }
//     if (!/\.(?:png|jpg|bmp|gif|PNG|JPG|BMP|GIF) $/.test(f)) {
//         alert("类型必须是图片(.png|jpg|bmp|gif|PNG|JPG|BMP|GIF)");
//         $(obj).val('');
//         return false;
//     }
//
//     imgdate = new FormData();
//     $.each($(obj)[0].files,function(i,file){
//         imgdata.append('file',file);
//     });
//     if(!file.files || file.files[0]) {
//         return;
//     }
//     var reader = new FileReader();
//     read.onload = function(evt) {
//         $("#image").show();
//         docuemnt.getElementById('image').src = evt.target.result;
//         uploadfile = evt.target.result;
//     }
//     reader.readAsDataURL(file,files[0]);
// }
// var imageurl = "";
// function importWeldingMachine() {
//     var file = $("#file").val();
//     $.ajax({
//         typr:"post",
//         async:false,
//         url:"https://apis.map.qq.com",
//         data:imgdata,
//         cache:false,
//         contentType:false,
//         processData:false,
//         dataType :"json",
//         success:function(result) {
//             result = JSON.parse(result);
//             if(result){
//                 if(!result.success){
//                     imageurl = "";
//                     $.message.show({title:'Error',msg:result.errorMsg});
//                 } else {
//                     imageurl = result.imgurl;
//                 }
//             }
//         },
//         error:function(errorMsg) {
//             alert("数据请求失败")
//         }
//     })
// }

// const fileInput = document.getElementById('add-customerNeedImg1');
// const xhr = new XMLHttpRequest();
// const formData = new FormData();
// xhr.open('post','/upload-image');
// formData.append('image',fileInput.files[0]);
// xhr.onreadystatechang = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//         console.log(xhr.responseText);
//         alert('上传成功!');
//     }
// };
// xhr.send(formData);

// function fileUp(id, column) {
//     fileId = id;
//     fileColumn = column;
//     $('#file').trigger('click');
// }

// function fileUp(id) {
//     var file = document.getElementById("file" + id).files;
//     if (file == null || file.length == 0) {
//         return;
//     }
//     if (file[0].type.split("/")[0] == "image") {
//         var reader = new FileReader();
//         reader.readAsDataURL(file[0]);
//         reader.onload = function (e) {
//             $('#img' + id).attr("src", this.result);
//         }
//     }
// }


// document.getElementById('fileUploadForm').addEventListener('submit', function(event) {
//     event.preventDefault(); // 阻止表单默认提交行为
//
//     var formData = new FormData();
//     formData.append('file', document.getElementById('fileInput').files[0]);
//
//     fetch('https://huaqunwechar.com:9087/file/upload', {
//         method: 'POST',
//         body: formData,
//         // name: 'file',
//         // path: '/huaqun_erqi/'
//     })
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.error(error));
// });


//     import axios from 'axios'
//
//     export default {
//     data() {
//     return {
//     file: null
// }
// },
//     methods: {
//     onFileSelected(event) {
//     this.file = event.target.files[0]
// },
//     uploadFile() {
//     if (!this.file) {
//     return
// }
//     let formData = new FormData()
//     formData.append('file', this.file)
//     axios.post('http://yhocn.cn:8102/file/upload', formData).then(response => {
//     console.log(response.data)
// })
// }
// }
// }

