var idd;

function getKhmc() {
    $ajax({
        type: 'post',
        url: '/user/hqxlKhmc',
    }, false, '', function (res) {
        if (res.code == 200) {
            for (var i = 0; i < res.data.length; i++) {
                $("#add-customerName").append("<option>" + res.data[i].company + "</option>");
                $("#update-customer_name").append("<option>" + res.data[i].company + "</option>");
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
                $("#add-shippingType").append("<option>" + res.data[i].shfs + "</option>");
                $("#update-shipping_type").append("<option>" + res.data[i].shfs + "</option>");
            }
        }
    })
}

function getLvxingcai() {
    $ajax({
        type: 'post',
        url: '/xlpz/hqxlLvxingcai',
    }, false, '', function (res) {
        if (res.code == 200) {
            for (var i = 0; i < res.data.length; i++) {
                $("#add-lvxingcai").append("<option>" + res.data[i].lxcLk + "</option>");
                $("#update-lvxingcai").append("<option>" + res.data[i].lxcLk + "</option>");
            }
        }
    })
}

function getLvcaiYanse() {
    $ajax({
        type: 'post',
        url: '/xlpz/hqxlLvcaiYanse',
    }, false, '', function (res) {
        if (res.code == 200) {
            for (var i = 0; i < res.data.length; i++) {
                $("#add-lvcaiYanse").append("<option>" + res.data[i].lcysLk + "</option>");
                $("#update-lvcai_yanse").append("<option>" + res.data[i].lcysLk + "</option>");
            }
        }
    })
}

function getBlsjg() {
    $ajax({
        type: 'post',
        url: '/xlpz/hqxlBlsjg',
    }, false, '', function (res) {
        if (res.code == 200) {
            for (var i = 0; i < res.data.length; i++) {
                $("#add-boliShenjiagong").append("<option>" + res.data[i].blsjg + "</option>");
                $("#update-boli_shenjiagong").append("<option>" + res.data[i].blsjg + "</option>");
            }
        }
    })
}

function getBlys() {
    $ajax({
        type: 'post',
        url: '/xlpz/hqxlBlys',
    }, false, '', function (res) {
        if (res.code == 200) {
            for (var i = 0; i < res.data.length; i++) {
                $("#add-boliYanse").append("<option>" + res.data[i].blys + "</option>");
                $("#update-boli_yanse").append("<option>" + res.data[i].blys + "</option>");
            }
        }
    })
}

function getLsxh() {
    $ajax({
        type: 'post',
        url: '/xlpz/hqxlLsxh',
    }, false, '', function (res) {
        if (res.code == 200) {
            for (var i = 0; i < res.data.length; i++) {
                $("#add-lashouXinghao").append("<option>" + res.data[i].lsxh + "</option>");
                $("#update-lashou_xinghao").append("<option>" + res.data[i].lsxh + "</option>");
            }
        }
    })
}

function getKjlk() {
    $ajax({
        type: 'post',
        url: '/xlpz/hqxlKjlk',
    }, false, '', function (res) {
        if (res.code == 200) {
            for (var i = 0; i < res.data.length; i++) {
                $("#add-kaijiaolian").append("<option>" + res.data[i].kjlk + "</option>");
                $("#update-kaijiaolian").append("<option>" + res.data[i].kjlk + "</option>");
            }
        }
    })
}

function getJlkw() {
    $ajax({
        type: 'post',
        url: '/xlpz/hqxlJlkw',
    }, false, '', function (res) {
        if (res.code == 200) {
            for (var i = 0; i < res.data.length; i++) {
                $("#add-jiaolian1SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
                $("#add-jiaolian2SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
                $("#add-jiaolian3SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
                $("#add-jiaolian4SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
                $("#add-jiaolian5SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
                $("#add-jiaolian6SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");

                $("#update-jiaolian1_select_left").append("<option>" + res.data[i].jlkw + "</option>");
                $("#update-jiaolian2_select_left").append("<option>" + res.data[i].jlkw + "</option>");
                $("#update-jiaolian3_select_left").append("<option>" + res.data[i].jlkw + "</option>");
                $("#update-jiaolian4_select_left").append("<option>" + res.data[i].jlkw + "</option>");
                $("#update-jiaolian5_select_left").append("<option>" + res.data[i].jlkw + "</option>");
                $("#update-jiaolian6_select_left").append("<option>" + res.data[i].jlkw + "</option>");
            }
        }
    })
}

function getFjpz() {
    $ajax({
        type: 'post',
        url: '/xlpz/hqxlFjpz',
    }, false, '', function (res) {
        if (res.code == 200) {
            for (var i = 0; i < res.data.length; i++) {
                $("#add-fujianSelect1").append("<option>" + res.data[i].fjpz + "</option>");
                $("#add-fujianSelect2").append("<option>" + res.data[i].fjpz + "</option>");
                $("#add-fujianSelect3").append("<option>" + res.data[i].fjpz + "</option>");
                $("#add-fujianSelect4").append("<option>" + res.data[i].fjpz + "</option>");

                $("#update-fujian_select1").append("<option>" + res.data[i].fjpz + "</option>");
                $("#update-fujian_select2").append("<option>" + res.data[i].fjpz + "</option>");
                $("#update-fujian_select3").append("<option>" + res.data[i].fjpz + "</option>");
                $("#update-fujian_select4").append("<option>" + res.data[i].fjpz + "</option>");
            }
        }
    })
}

function getJlpp() {
    $ajax({
        type: 'post',
        url: '/xlpz/hqxlJlpp',
    }, false, '', function (res) {
        if (res.code == 200) {
            for (var i = 0; i < res.data.length; i++) {
                $("#add-pinpaiSelect1").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect2").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect3").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect4").append("<option>" + res.data[i].jlpp + "</option>");

                $("#update-pinpai_select1").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpai_select2").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpai_select3").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpai_select4").append("<option>" + res.data[i].jlpp + "</option>");
            }
        }
    })
}

function getAddKk() {
    var kjlk = document.getElementById('add-kaijiaolian').value;
    if (kjlk == '开二孔') {
        document.getElementById("add-jiaolian3SelectLeft").remove();
        document.getElementById("add-jiaolian3InsertLeft").remove();
        document.getElementById("add-jiaolian3SelectRight").remove();
        document.getElementById("add-jiaolian3InsertRight").remove();

        document.getElementById("add-jiaolian4SelectLeft").remove();
        document.getElementById("add-jiaolian4InsertLeft").remove();
        document.getElementById("add-jiaolian4SelectRight").remove();
        document.getElementById("add-jiaolian4InsertRight").remove();

        document.getElementById("add-jiaolian5SelectLeft").remove();
        document.getElementById("add-jiaolian5InsertLeft").remove();
        document.getElementById("add-jiaolian5SelectRight").remove();
        document.getElementById("add-jiaolian5InsertRight").remove();

        document.getElementById("add-jiaolian6SelectLeft").remove();
        document.getElementById("add-jiaolian6InsertLeft").remove();
        document.getElementById("add-jiaolian6SelectRight").remove();
        document.getElementById("add-jiaolian6InsertRight").remove();

        document.getElementById("l3sl").remove();
        document.getElementById("l3il").remove();
        document.getElementById("l3sr").remove();
        document.getElementById("l3ir").remove();

        document.getElementById("l4sl").remove();
        document.getElementById("l4il").remove();
        document.getElementById("l4sr").remove();
        document.getElementById("l4ir").remove();

        document.getElementById("l5sl").remove();
        document.getElementById("l5il").remove();
        document.getElementById("l5sr").remove();
        document.getElementById("l5ir").remove();

        document.getElementById("l6sl").remove();
        document.getElementById("l6il").remove();
        document.getElementById("l6sr").remove();
        document.getElementById("l6ir").remove();
    }
    if (kjlk == '开三孔') {
        document.getElementById("add-jiaolian4SelectLeft").remove();
        document.getElementById("add-jiaolian4InsertLeft").remove();
        document.getElementById("add-jiaolian4SelectRight").remove();
        document.getElementById("add-jiaolian4InsertRight").remove();

        document.getElementById("add-jiaolian5SelectLeft").remove();
        document.getElementById("add-jiaolian5InsertLeft").remove();
        document.getElementById("add-jiaolian5SelectRight").remove();
        document.getElementById("add-jiaolian5InsertRight").remove();

        document.getElementById("add-jiaolian6SelectLeft").remove();
        document.getElementById("add-jiaolian6InsertLeft").remove();
        document.getElementById("add-jiaolian6SelectRight").remove();
        document.getElementById("add-jiaolian6InsertRight").remove();

        document.getElementById("l4sl").remove();
        document.getElementById("l4il").remove();
        document.getElementById("l4sr").remove();
        document.getElementById("l4ir").remove();

        document.getElementById("l5sl").remove();
        document.getElementById("l5il").remove();
        document.getElementById("l5sr").remove();
        document.getElementById("l5ir").remove();

        document.getElementById("l6sl").remove();
        document.getElementById("l6il").remove();
        document.getElementById("l6sr").remove();
        document.getElementById("l6ir").remove();
    }
    if (kjlk == '开四孔') {
        document.getElementById("add-jiaolian5SelectLeft").remove();
        document.getElementById("add-jiaolian5InsertLeft").remove();
        document.getElementById("add-jiaolian5SelectRight").remove();
        document.getElementById("add-jiaolian5InsertRight").remove();

        document.getElementById("add-jiaolian6SelectLeft").remove();
        document.getElementById("add-jiaolian6InsertLeft").remove();
        document.getElementById("add-jiaolian6SelectRight").remove();
        document.getElementById("add-jiaolian6InsertRight").remove();

        document.getElementById("l5sl").remove();
        document.getElementById("l5il").remove();
        document.getElementById("l5sr").remove();
        document.getElementById("l5ir").remove();

        document.getElementById("l6sl").remove();
        document.getElementById("l6il").remove();
        document.getElementById("l6sr").remove();
        document.getElementById("l6ir").remove();
    }
    if (kjlk == '开五孔') {
        document.getElementById("add-jiaolian6SelectLeft").remove();
        document.getElementById("add-jiaolian6InsertLeft").remove();
        document.getElementById("add-jiaolian6SelectRight").remove();
        document.getElementById("add-jiaolian6InsertRight").remove();

        document.getElementById("l6sl").remove();
        document.getElementById("l6il").remove();
        document.getElementById("l6sr").remove();
        document.getElementById("l6ir").remove();
    }
}

// function getUpdKk() {
//     var kjlk = document.getElementById('update-kaijiaolian').value;
//     if (kjlk == '开二孔') {
//         document.getElementById("update-jiaolian3_select_left").remove();
//         document.getElementById("update-jiaolian3_Insert_Left").remove();
//         document.getElementById("update-jiaolian3_Select_Right").remove();
//         document.getElementById("update-jiaolian3_Insert_Right").remove();
//
//         document.getElementById("update-jiaolian4_Select_Left").remove();
//         document.getElementById("update-jiaolian4_Insert_Left").remove();
//         document.getElementById("update-jiaolian4_Select_Right").remove();
//         document.getElementById("update-jiaolian4_Insert_Right").remove();
//
//         document.getElementById("update-jiaolian5_Select_Left").remove();
//         document.getElementById("update-jiaolian5_Insert_Left").remove();
//         document.getElementById("update-jiaolian5_Select_Right").remove();
//         document.getElementById("update-jiaolian5_Insert_Right").remove();
//
//         document.getElementById("update-jiaolian6_Select_Left").remove();
//         document.getElementById("update-jiaolian6_Insert_Left").remove();
//         document.getElementById("update-jiaolian6_Select_Right").remove();
//         document.getElementById("update-jiaolian6_Insert_Right").remove();
//
//         document.getElementById("ul3sl").remove();
//         document.getElementById("ul3il").remove();
//         document.getElementById("ul3sr").remove();
//         document.getElementById("ul3ir").remove();
//
//         document.getElementById("ul4sl").remove();
//         document.getElementById("ul4il").remove();
//         document.getElementById("ul4sr").remove();
//         document.getElementById("ul4ir").remove();
//
//         document.getElementById("ul5sl").remove();
//         document.getElementById("ul5il").remove();
//         document.getElementById("ul5sr").remove();
//         document.getElementById("ul5ir").remove();
//
//         document.getElementById("ul6sl").remove();
//         document.getElementById("ul6il").remove();
//         document.getElementById("ul6sr").remove();
//         document.getElementById("ul6ir").remove();
//     }
//     if (kjlk == '开三孔') {
//         document.getElementById("update-jiaolian4_Select_Left").remove();
//         document.getElementById("update-jiaolian4_Insert_Left").remove();
//         document.getElementById("update-jiaolian4_Select_Right").remove();
//         document.getElementById("update-jiaolian4_Insert_Right").remove();
//
//         document.getElementById("update-jiaolian5_Select_Left").remove();
//         document.getElementById("update-jiaolian5_Insert_Left").remove();
//         document.getElementById("update-jiaolian5_Select_Right").remove();
//         document.getElementById("update-jiaolian5_Insert_Right").remove();
//
//         document.getElementById("update-jiaolian6_Select_Left").remove();
//         document.getElementById("update-jiaolian6_Insert_Left").remove();
//         document.getElementById("update-jiaolian6_Select_Right").remove();
//         document.getElementById("update-jiaolian6_Insert_Right").remove();
//
//         document.getElementById("ul4sl").remove();
//         document.getElementById("ul4il").remove();
//         document.getElementById("ul4sr").remove();
//         document.getElementById("ul4ir").remove();
//
//         document.getElementById("ul5sl").remove();
//         document.getElementById("ul5il").remove();
//         document.getElementById("ul5sr").remove();
//         document.getElementById("ul5ir").remove();
//
//         document.getElementById("ul6sl").remove();
//         document.getElementById("ul6il").remove();
//         document.getElementById("ul6sr").remove();
//         document.getElementById("ul6ir").remove();
//     }
//     if (kjlk == '开四孔') {
//         document.getElementById("update-jiaolian5_Select_Left").remove();
//         document.getElementById("update-jiaolian5_Insert_Left").remove();
//         document.getElementById("update-jiaolian5_Select_Right").remove();
//         document.getElementById("update-jiaolian5_Insert_Right").remove();
//
//         document.getElementById("update-jiaolian6_Select_Left").remove();
//         document.getElementById("update-jiaolian6_Insert_Left").remove();
//         document.getElementById("update-jiaolian6_Select_Right").remove();
//         document.getElementById("update-jiaolian6_Insert_Right").remove();
//
//         document.getElementById("ul5sl").remove();
//         document.getElementById("ul5il").remove();
//         document.getElementById("ul5sr").remove();
//         document.getElementById("ul5ir").remove();
//
//         document.getElementById("ul6sl").remove();
//         document.getElementById("ul6il").remove();
//         document.getElementById("ul6sr").remove();
//         document.getElementById("ul6ir").remove();
//     }
//     if (kjlk == '开五孔') {
//         document.getElementById("update-jiaolian6_Select_Left").remove();
//         document.getElementById("update-jiaolian6_Insert_Left").remove();
//         document.getElementById("update-jiaolian6_Select_Right").remove();
//         document.getElementById("update-jiaolian6_Insert_Right").remove();
//
//         document.getElementById("ul6sl").remove();
//         document.getElementById("ul6il").remove();
//         document.getElementById("ul6sr").remove();
//         document.getElementById("ul6ir").remove();
//     }
// }

function getJe() {
    var jl1 = document.getElementById('add-jiaolian1SelectLeft').value;
    var jl2 = document.getElementById('add-jiaolian2SelectLeft').value;
    var jl3 = document.getElementById('add-jiaolian3SelectLeft').value;
    var jl4 = document.getElementById('add-jiaolian4SelectLeft').value;
    var jl5 = document.getElementById('add-jiaolian5SelectLeft').value;
    var jl6 = document.getElementById('add-jiaolian6SelectLeft').value;
    var height = parseFloat(document.getElementById('add-height').value);
    if (jl1 == '距中'){
        var jiaolian1Insert = height / 2;
        document.getElementById("add-jiaolian1SelectRight").value = jl1
        document.getElementById("add-jiaolian1InsertLeft").value = jiaolian1Insert;
        document.getElementById("add-jiaolian1InsertRight").value = jiaolian1Insert;
    }
    if (jl2 == '距中') {
        var jiaolian2Insert = height / 2;
        document.getElementById("add-jiaolian2SelectRight").value = jl2
        document.getElementById("add-jiaolian2InsertLeft").value = jiaolian2Insert;
        document.getElementById("add-jiaolian2InsertRight").value = jiaolian2Insert;
    }
    if (jl3 == '距中') {
        var jiaolian3Insert = height / 2;
        document.getElementById("add-jiaolian3SelectRight").value = jl3
        document.getElementById("add-jiaolian3InsertLeft").value = jiaolian3Insert;
        document.getElementById("add-jiaolian3InsertRight").value = jiaolian3Insert;
    }
    if (jl4 == '距中') {
        var jiaolian4Insert = height / 2;
        document.getElementById("add-jiaolian4SelectRight").value = jl4
        document.getElementById("add-jiaolian4InsertLeft").value = jiaolian4Insert;
        document.getElementById("add-jiaolian4InsertRight").value = jiaolian4Insert;
    }
    if (jl5 == '距中') {
        var jiaolian5Insert = height / 2;
        document.getElementById("add-jiaolian5SelectRight").value = jl5
        document.getElementById("add-jiaolian5InsertLeft").value = jiaolian5Insert;
        document.getElementById("add-jiaolian5InsertRight").value = jiaolian5Insert;
    }
    if (jl6 == '距中') {
        var jiaolian6Insert = height / 2;
        document.getElementById("add-jiaolian6SelectRight").value = jl6
        document.getElementById("add-jiaolian6InsertLeft").value = jiaolian6Insert;
        document.getElementById("add-jiaolian6InsertRight").value = jiaolian6Insert;
    }
}

function getUpdJe() {
    var jl1 = document.getElementById('update-jiaolian1_select_left').value;
    var jl2 = document.getElementById('update-jiaolian2_select_left').value;
    var jl3 = document.getElementById('update-jiaolian3_select_left').value;
    var jl4 = document.getElementById('update-jiaolian4_select_left').value;
    var jl5 = document.getElementById('update-jiaolian5_select_left').value;
    var jl6 = document.getElementById('update-jiaolian6_select_left').value;
    var height = parseFloat(document.getElementById('add-height').value);
    if (jl1 == '距中'){
        var jiaolian1Insert = height / 2;
        document.getElementById("update-jiaolian1_select_right").value = jl1
        document.getElementById("update-jiaolian1_insert_left").value = jiaolian1Insert;
        document.getElementById("update-jiaolian1_insert_right").value = jiaolian1Insert;
    }
    if (jl2 == '距中') {
        var jiaolian2Insert = height / 2;
        document.getElementById("update-jiaolian2_select_right").value = jl2
        document.getElementById("update-jiaolian2_insert_left").value = jiaolian2Insert;
        document.getElementById("update-jiaolian2_insert_right").value = jiaolian2Insert;
    }
    if (jl3 == '距中') {
        var jiaolian3Insert = height / 2;
        document.getElementById("update-jiaolian3_select_right").value = jl3
        document.getElementById("update-jiaolian3_insert_left").value = jiaolian3Insert;
        document.getElementById("update-jiaolian3_insert_right").value = jiaolian3Insert;
    }
    if (jl4 == '距中') {
        var jiaolian4Insert = height / 2;
        document.getElementById("update-jiaolian4_select_right").value = jl4
        document.getElementById("update-jiaolian4_insert_left").value = jiaolian4Insert;
        document.getElementById("update-jiaolian4_insert_right").value = jiaolian4Insert;
    }
    if (jl5 == '距中') {
        var jiaolian5Insert = height / 2;
        document.getElementById("update-jiaolian5_select_right").value = jl5
        document.getElementById("update-jiaolian5_insert_left").value = jiaolian5Insert;
        document.getElementById("update-jiaolian5_insert_right").value = jiaolian5Insert;
    }
    if (jl6 == '距中') {
        var jiaolian6Insert = height / 2;
        document.getElementById("update-jiaolian6_select_right").value = jl6
        document.getElementById("update-jiaolian6_insert_left").value = jiaolian6Insert;
        document.getElementById("update-jiaolian6_insert_right").value = jiaolian6Insert;
    }
}

function getPfsl() {
    var height = parseFloat(document.getElementById('add-height').value);
    var width = parseFloat(document.getElementById('add-width').value);
    var num = parseFloat(document.getElementById('add-num').value);
    var sum_sl = Math.round(height * width / 1000000 * num * 1000) / 1000
    document.getElementById("add-sumShuliang1").value = sum_sl
}

function getUpdPfsl() {
    var height = parseFloat(document.getElementById('update-height').value);
    var width = parseFloat(document.getElementById('update-width').value);
    var num = parseFloat(document.getElementById('update-num').value);
    var sum_sl = Math.round(height * width / 1000000 * num * 1000) / 1000
    document.getElementById("update-sum_shuliang1").value = sum_sl
}

function getPfje() {
    var sum_sl = parseFloat(document.getElementById('add-sumShuliang1').value);
    var pfdj = parseFloat(document.getElementById('add-danjia1').value);
    var sum_je = Math.round(sum_sl * pfdj * 100) / 100
    document.getElementById("add-sumJine1").value = sum_je
}

function getUpdPfje() {
    var sum_sl = parseFloat(document.getElementById('update-sum_shuliang1').value);
    var pfdj = parseFloat(document.getElementById('update-danjia1').value);
    var sum_je = Math.round(sum_sl * pfdj * 100) / 100
    document.getElementById("update-sum_jine1").value = sum_je
}

function getZcsl() {
    var height = parseFloat(document.getElementById('add-height').value);
    var width = parseFloat(document.getElementById('add-width').value);
    var num = parseFloat(document.getElementById('add-num').value);
    var sum_sl2 = Math.round((height * 1 + width * 1) / 1000 * 2 * num * 1000) / 1000
    document.getElementById("add-sumShuliang2").value = sum_sl2
}

function getUpdZcsl() {
    var height = parseFloat(document.getElementById('update-height').value);
    var width = parseFloat(document.getElementById('update-width').value);
    var num = parseFloat(document.getElementById('update-num').value);
    var sum_sl2 = Math.round((height * 1 + width * 1) / 1000 * 2 * num * 1000) / 1000
    document.getElementById("update-sum_shuliang2").value = sum_sl2
}

function getZcje() {
    var sum_sl2 = parseFloat(document.getElementById('add-sumShuliang2').value);
    var zcdj2 = parseFloat(document.getElementById('add-danjia2').value);
    var sum_je2 = Math.round(sum_sl2 * zcdj2 * 100) / 100
    document.getElementById("add-sumJine2").value = sum_je2
}

function getUpdZcje() {
    var sum_sl2 = parseFloat(document.getElementById('update-sum_shuliang2').value);
    var zcdj2 = parseFloat(document.getElementById('update-danjia2').value);
    var sum_je2 = Math.round(sum_sl2 * zcdj2 * 100) / 100
    document.getElementById("update-sum_jine2").value = sum_je2
}

function getList() {
    $('#customer_number').val("");
    $('#customer_name').val("");
    $('#install_address').val("");
    $ajax({
        type: 'post',
        url: '/lkxd/getList',
    }, false, '', function (res) {
        if (res.code == 200) {
            setTable(res.data);
            $("#lkxdTable").colResizable({
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
    getKhmc();
    getShfs();
    getLvxingcai();
    getLvcaiYanse();
    getBlsjg();
    getBlys();
    getLsxh();
    getKjlk();
    getJlkw();
    getFjpz();
    getJlpp();

    $('#select-btn').click(function () {
        var customer_number = $('#customer_number').val();
        var customer_name = $('#customer_name').val();
        var install_address = $('#install_address').val();
        $ajax({
            type: 'post',
            url: '/lkxd/queryList',
            data: {
                customer_number: customer_number,
                customer_name: customer_name,
                install_address: install_address,
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
        getAddKk();
        getJe();
        getPfsl();
        getPfje();
        getZcsl();
        getZcje();
        let params = formToJson("#add-form");
        if (checkForm('#add-form')) {
            $ajax({
                type: 'post',
                url: '/lkxd/add',
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
        let rows = getTableSelection('#lkxdTable');
        if (rows.length > 1 || rows.length == 0) {
            swal('请选择一条数据修改!');
            return;
        }
        $('#update-modal').modal('show');
        setForm(rows[0].data, '#update-form');
        $('#update-customer_name').val(rows[0].data.customerName);
        $('#update-insert_date').val(rows[0].data.insertDate);
        $('#update-order_number').val(rows[0].data.orderNumber);
        $('#update-pinyin').val(rows[0].data.pinyin);
        $('#update-shipping_address').val(rows[0].data.shippingAddress);
        $('#update-phone').val(rows[0].data.phone);
        $('#update-shipping_type').val(rows[0].data.shippingType);
        $('#update-install_address').val(rows[0].data.installAddress);
        $('#update-customer_name_renyuan').val(rows[0].data.customerNameRenyuan);
        $('#update-customer_number').val(rows[0].data.customerNumber);
        $('#update-height').val(rows[0].data.height);
        $('#update-width').val(rows[0].data.width);
        $('#update-num').val(rows[0].data.num);
        $('#update-lvxingcai').val(rows[0].data.lvxingcai);
        $('#update-lvcai_yanse').val(rows[0].data.lvcaiYanse);
        $('#update-boli_shenjiagong').val(rows[0].data.boliShenjiagong);
        $('#update-boli_yanse').val(rows[0].data.boliYanse);
        $('#update-lashou_xinghao').val(rows[0].data.lashouXinghao);
        $('#update-jiaoliankong_fangxiang_left').val(rows[0].data.jiaoliankongFangxiangLeft);
        $('#update-jiaoliankong_fangxiang_right').val(rows[0].data.jiaoliankongFangxiangRight);
        $('#update-lashou_shuliang_left').val(rows[0].data.lashouShuliangLeft);
        $('#update-lashou_shuliang_right').val(rows[0].data.lashouShuliangRight);
        $('#update-lashouwei_select_left').val(rows[0].data.lashouweiSelectLeft);
        $('#update-lashouwei_insert_left').val(rows[0].data.lashouweiInsertLeft);
        $('#update-lashouwei_select_right').val(rows[0].data.lashouweiSelectRight);
        $('#update-lashouwei_insert_right').val(rows[0].data.lashouweiInsertRight);
        $('#update-zhuangsuoshuliang_insert_left1').val(rows[0].data.zhuangsuoshuliangInsertLeft1);
        $('#update-zhuangsuoshuliang_insert_right1').val(rows[0].data.zhuangsuoshuliangInsertRight1);
        $('#update-zhuangsuofangwei_insert_left1').val(rows[0].data.zhuangsuofangweiInsertLeft1);
        $('#update-zhuangsuofangwei_insert_left2').val(rows[0].data.zhuangsuofangweiInsertLeft2);
        $('#update-zhuangsuofangwei_insert_right1').val(rows[0].data.zhuangsuofangweiInsertRight1);
        $('#update-zhuangsuofangwei_insert_right2').val(rows[0].data.zhuangsuofangweiInsertRight2);
        $('#update-kaijiaolian').val(rows[0].data.kaijiaolian);
        $('#update-jiaolian1_select_left').val(rows[0].data.jiaolian1SelectLeft);
        $('#update-jiaolian1_insert_left').val(rows[0].data.jiaolian1InsertLeft);
        $('#update-jiaolian1_select_right').val(rows[0].data.jiaolian1SelectRight);
        $('#update-jiaolian1_insert_right').val(rows[0].data.jiaolian1InsertRight);
        $('#update-jiaolian2_select_left').val(rows[0].data.jiaolian2SelectLeft);
        $('#update-jiaolian2_insert_left').val(rows[0].data.jiaolian2InsertLeft);
        $('#update-jiaolian2_select_right').val(rows[0].data.jiaolian2SelectRight);
        $('#update-jiaolian2_insert_right').val(rows[0].data.jiaolian2InsertRight);
        $('#update-jiaolian3_select_left').val(rows[0].data.jiaolian3SelectLeft);
        $('#update-jiaolian3_insert_left').val(rows[0].data.jiaolian3InsertLeft);
        $('#update-jiaolian3_select_right').val(rows[0].data.jiaolian3SelectRight);
        $('#update-jiaolian3_insert_right').val(rows[0].data.jiaolian3InsertRight);
        $('#update-jiaolian4_select_left').val(rows[0].data.jiaolian4SelectLeft);
        $('#update-jiaolian4_insert_left').val(rows[0].data.jiaolian4InsertLeft);
        $('#update-jiaolian4_select_right').val(rows[0].data.jiaolian4SelectRight);
        $('#update-jiaolian4_insert_right').val(rows[0].data.jiaolian4InsertRight);
        $('#update-jiaolian5_select_left').val(rows[0].data.jiaolian5SelectLeft);
        $('#update-jiaolian5_insert_left').val(rows[0].data.jiaolian5InsertLeft);
        $('#update-jiaolian5_select_right').val(rows[0].data.jiaolian5SelectRight);
        $('#update-jiaolian5_insert_right').val(rows[0].data.jiaolian5InsertRight);
        $('#update-jiaolian6_select_left').val(rows[0].data.jiaolian6SelectLeft);
        $('#update-jiaolian6_insert_left').val(rows[0].data.jiaolian6InsertLeft);
        $('#update-jiaolian6_select_right').val(rows[0].data.jiaolian6SelectRight);
        $('#update-jiaolian6_insert_right').val(rows[0].data.jiaolian6InsertRight);
        $('#update-fujian_select1').val(rows[0].data.fujianSelect1);
        $('#update-fujian_select2').val(rows[0].data.fujianSelect2);
        $('#update-fujian_select3').val(rows[0].data.fujianSelect3);
        $('#update-fujian_select4').val(rows[0].data.fujianSelect4);
        $('#update-pinpai_select1').val(rows[0].data.pinpaiSelect1);
        $('#update-pinpai_select2').val(rows[0].data.pinpaiSelect2);
        $('#update-pinpai_select3').val(rows[0].data.pinpaiSelect3);
        $('#update-pinpai_select4').val(rows[0].data.pinpaiSelect4);
        $('#update-fujian_shuliang1').val(rows[0].data.fujianShuliang1);
        $('#update-fujian_shuliang2').val(rows[0].data.fujianShuliang2);
        $('#update-fujian_shuliang3').val(rows[0].data.fujianShuliang3);
        $('#update-fujian_shuliang4').val(rows[0].data.fujianShuliang4);
        $('#update-sum_shuliang1').val(rows[0].data.sumShuliang1);
        $('#update-danjia1').val(rows[0].data.danjia1);
        $('#update-sum_jine1').val(rows[0].data.sumJine1);
        $('#update-sum_shuliang2').val(rows[0].data.sumShuliang2);
        $('#update-danjia2').val(rows[0].data.danjia2);
        $('#update-sum_jine2').val(rows[0].data.sumJine2);
        $('#update-wancheng').val(rows[0].data.wancheng);
        $('#update-qita').val(rows[0].data.qita);
    });

    //修改弹窗点击关闭按钮
    $('#update-close-btn').click(function () {
        $('#update-form')[0].reset();
        $('#update-modal').modal('hide');
    });

    //修改弹窗里点击提交按钮
    $('#update-submit-btn').click(function () {
        getUpdKk();
        // getUpdJe();
        getUpdPfsl();
        getUpdPfje();
        getUpdZcsl();
        getUpdZcje();
        var msg = confirm("确认要修改吗？");
        if (msg) {
            if (checkForm('#update-form')) {
                let params = formToJson('#update-form');
                $ajax({
                    type: 'post',
                    url: '/lkxd/update',
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
            let rows = getTableSelection("#lkxdTable");
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
                url: '/lkxd/delete',
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
    if ($('#lkxdTable').html != '') {
        $('#lkxdTable').bootstrapTable('load', data);
    }

    $('#lkxdTable').bootstrapTable({
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
                field: 'customerName',
                title: '客户名称',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'insertDate',
                title: '下单日期',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'orderNumber',
                title: '单据编号',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'pinyin',
                title: '简码',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'shippingAddress',
                title: '送货地址',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'phone',
                title: '联系电话',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'shippingType',
                title: '送货方式',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'installAddress',
                title: '安装地址',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'customerNameRenyuan',
                title: '录入员',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'customerNumber',
                title: '订单号',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'height',
                title: '高',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'width',
                title: '宽',
                align: 'center',
                sortable: true,
                width: 80,
            }, {
                field: 'num',
                title: '下单数量',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'lvxingcai',
                title: '铝型材',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'lvcaiYanse',
                title: '铝材颜色',
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
                field: 'boliYanse',
                title: '玻璃颜色',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'lashouXinghao',
                title: '拉手型号',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'jiaoliankongFangxiangLeft',
                title: '铰链孔左开门',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'jiaoliankongFangxiangRight',
                title: '铰链孔右开门',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'lashouShuliangLeft',
                title: '有拉手数量(个)左',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'lashouShuliangRight',
                title: '有拉手数量(个)右',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'lashouweiSelectLeft',
                title: '左拉手位从下向上',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'lashouweiInsertLeft',
                title: '左拉手位从右向左',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'lashouweiSelectRight',
                title: '右拉手位从下向上',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'lashouweiInsertRight',
                title: '右拉手位从左向右',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'zhuangsuoshuliangInsertLeft1',
                title: '左装锁数量',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'zhuangsuoshuliangInsertRight1',
                title: '右装锁数量',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'zhuangsuofangweiInsertLeft1',
                title: '左锁孔位从下向上',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'zhuangsuofangweiInsertLeft2',
                title: '左锁孔位从右向左',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'zhuangsuofangweiInsertRight1',
                title: '右锁孔位从下向上',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'zhuangsuofangweiInsertRight2',
                title: '右锁孔位从左向右',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'kaijiaolian',
                title: '开铰链孔',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'jiaolian1SelectLeft',
                title: '左铰链孔位1',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'jiaolian1InsertLeft',
                title: '左铰链孔位1数量',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'jiaolian1SelectRight',
                title: '右铰链孔位1',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'jiaolian1InsertRight',
                title: '右铰链孔位1数量',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'jiaolian2SelectLeft',
                title: '左铰链孔位2',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'jiaolian2InsertLeft',
                title: '左铰链孔位2数量',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'jiaolian2SelectRight',
                title: '右铰链孔位2',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'jiaolian2InsertRight',
                title: '右铰链孔位2数量',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'jiaolian3SelectLeft',
                title: '左铰链孔位3',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'jiaolian3InsertLeft',
                title: '左铰链孔位3数量',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'jiaolian3SelectRight',
                title: '右铰链孔位3',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'jiaolian3InsertRight',
                title: '右铰链孔位3数量',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'jiaolian4SelectLeft',
                title: '左铰链孔位4',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'jiaolian4InsertLeft',
                title: '左铰链孔位4数量',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'jiaolian4SelectRight',
                title: '右铰链孔位4',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'jiaolian4InsertRight',
                title: '右铰链孔位4数量',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'jiaolian5SelectLeft',
                title: '左铰链孔位5',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'jiaolian5InsertLeft',
                title: '左铰链孔位5数量',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'jiaolian5SelectRight',
                title: '右铰链孔位5',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'jiaolian5InsertRight',
                title: '右铰链孔位5数量',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'jiaolian6SelectLeft',
                title: '左铰链孔位6',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'jiaolian6InsertLeft',
                title: '左铰链孔位6数量',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'jiaolian6SelectRight',
                title: '右铰链孔位6',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'jiaolian6InsertRight',
                title: '右铰链孔位6数量',
                align: 'center',
                sortable: true,
                width: 150,
            }, {
                field: 'fujianSelect1',
                title: '附件配置1',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'fujianSelect2',
                title: '附件配置2',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'fujianSelect3',
                title: '附件配置3',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'fujianSelect4',
                title: '附件配置4',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'pinpaiSelect1',
                title: '铰链品牌1',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'pinpaiSelect2',
                title: '铰链品牌2',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'pinpaiSelect3',
                title: '铰链品牌3',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'pinpaiSelect4',
                title: '铰链品牌4',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'fujianShuliang1',
                title: '附件数量1',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'fujianShuliang2',
                title: '附件数量2',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'fujianShuliang3',
                title: '附件数量3',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'fujianShuliang4',
                title: '附件数量4',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'sumShuliang1',
                title: '数量(平方)',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'danjia1',
                title: '单价(平方)',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'sumJine1',
                title: '金额(平方)',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'sumShuliang2',
                title: '数量(周长)',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'danjia2',
                title: '单价(周长)',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'sumJine2',
                title: '金额(周长)',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'wancheng',
                title: '完成',
                align: 'center',
                sortable: true,
                width: 120,
            }, {
                field: 'qita',
                title: '其他(项目说明)',
                align: 'center',
                sortable: true,
                width: 150,
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

    var query = $('#query').val();
    $ajax({
        type: 'post',
        url: '/lkxd/getList',
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
                    customerName: array[i].customerName,
                    insertDate: array[i].insertDate,
                    orderNumber:array[i].orderNumber,
                    pinyin: array[i].pinyin,
                    shippingAddress: array[i].shippingAddress,
                    phone: array[i].phone,
                    shippingType: array[i].shippingType,
                    installAddress: array[i].installAddress,
                    customerNumber: array[i].customerNumber,
                    height: array[i].height,
                    width:array[i].width,
                    lvxingcai: array[i].lvxingcai,
                    num: array[i].num,
                    lvcaiYanse: array[i].lvcaiYanse,
                    boliShenjiagong: array[i].boliShenjiagong,
                    boliYanse: array[i].boliYanse,
                    lashouXinghao: array[i].lashouXinghao,
                    jiaoliankongFangxiangLeft: array[i].jiaoliankongFangxiangLeft,
                    jiaoliankongFangxiangRight:array[i].jiaoliankongFangxiangRight,
                    lashouShuliangLeft: array[i].lashouShuliangLeft,
                    lashouShuliangRight: array[i].lashouShuliangRight,
                    lashouweiSelectLeft: array[i].lashouweiSelectLeft,
                    lashouweiInsertLeft: array[i].lashouweiInsertLeft,
                    lashouweiSelectRight: array[i].lashouweiSelectRight,
                    lashouweiInsertRight: array[i].lashouweiInsertRight,
                    zhuangsuoshuliangInsertLeft1: array[i].zhuangsuoshuliangInsertLeft1,
                    zhuangsuoshuliangInsertRight1:array[i].zhuangsuoshuliangInsertRight1,
                    zhuangsuofangwiangSelectRight: array[i].zhuangsuofangwiangSelectRight,
                    zhuangsuofangweiInsertLeft1: array[i].zhuangsuofangweiInsertLeft1,
                    zhuangsuofangweiInsertLeft2: array[i].zhuangsuofangweiInsertLeft2,
                    zhuangsuofangweiInsertRight1: array[i].zhuangsuofangweiInsertRight1,
                    zhuangsuofangweiInsertRight2: array[i].zhuangsuofangweiInsertRight2,
                    kaijiaolian: array[i].kaijiaolian,
                    jiaolian1SelectLeft: array[i].jiaolian1SelectLeft,
                    jiaolian1InsertLeft:array[i].jiaolian1InsertLeft,
                    jiaolian1SelectRight: array[i].jiaolian1SelectRight,
                    jiaolian1InsertRight: array[i].jiaolian1InsertRight,
                    jiaolian2SelectLeft: array[i].jiaolian2SelectLeft,
                    jiaolian2InsertLeft: array[i].jiaolian2InsertLeft,
                    jiaolian2SelectRight: array[i].jiaolian2SelectRight,
                    jiaolian2InsertRight: array[i].jiaolian2InsertRight,
                    jiaolian3SelectLeft: array[i].jiaolian3SelectLeft,
                    jiaolian3InsertLeft:array[i].jiaolian3InsertLeft,
                    jiaolian3SelectRight: array[i].jiaolian3SelectRight,
                    jiaolian3InsertRight: array[i].jiaolian3InsertRight,
                    jiaolian4SelectLeft: array[i].jiaolian4SelectLeft,
                    jiaolian4InsertLeft: array[i].jiaolian4InsertLeft,
                    jiaolian4SelectRight: array[i].jiaolian4SelectRight,
                    jiaolian4InsertRight: array[i].jiaolian4InsertRight,
                    jiaolian5SelectLeft: array[i].jiaolian5SelectLeft,
                    jiaolian5InsertLeft:array[i].jiaolian5InsertLeft,
                    jiaolian5SelectRight: array[i].jiaolian5SelectRight,
                    jiaolian5InsertRight: array[i].jiaolian5InsertRight,
                    jiaolian6SelectLeft: array[i].jiaolian6SelectLeft,
                    jiaolian6InsertLeft: array[i].jiaolian6InsertLeft,
                    jiaolian6SelectRight: array[i].jiaolian6SelectRight,
                    jiaolian6InsertRight: array[i].jiaolian6InsertRight,
                    fujianSelect1: array[i].fujianSelect1,
                    fujianSelect2:array[i].fujianSelect2,
                    fujianSelect3: array[i].fujianSelect3,
                    fujianSelect4: array[i].fujianSelect4,
                    pinpaiSelect1: array[i].pinpaiSelect1,
                    pinpaiSelect2: array[i].pinpaiSelect2,
                    pinpaiSelect3: array[i].pinpaiSelect3,
                    pinpaiSelect4: array[i].pinpaiSelect4,
                    fujianShuliang1:array[i].fujianShuliang1,
                    fujianShuliang2: array[i].fujianShuliang2,
                    fujianShuliang3: array[i].fujianShuliang3,
                    fujianShuliang4: array[i].fujianShuliang4,
                    sumShuliang1: array[i].sumShuliang1,
                    danjia1: array[i].danjia1,
                    sumJine1: array[i].sumJine1,
                    sumShuliang2: array[i].sumShuliang2,
                    danjia2: array[i].danjia2,
                    sumJine2: array[i].sumJine2,
                    wancheng:array[i].wancheng,
                    qita: array[i].qita,
                    customerNameRenyuan: array[i].customerNameRenyuan,
                }
                header.push(body)
            }
            console.log(header)
            title = ['客户名称','下单日期','单据编号', '简码', '送货地址', '联系电话', '送货方式', '安装地址','订单号','高','宽','铝型材','下单数量','铝材颜色','玻璃深加工','玻璃颜色','拉手型号','铰链孔方向左','铰链孔方向右','拉手数量左','拉手数量右','左拉手位从上向下','左拉手位从右向左','右拉手位从下向上','右拉手位从左向右','装锁数量(左)','装锁数量(右)','装锁方向(右)','装锁方位(左1)','装锁方位(左2)','装锁方位(右1)','装锁方位(右2)','开铰链孔','左铰链孔从下向上','左铰链孔从右向左','右铰链孔从下向上','右铰链孔从左向右','左铰链孔2从下向上','左铰链孔2从右向左','右铰链孔2从下向上','右铰链孔2从左向右','左铰链孔3从下向上','左铰链孔3从右向左','右铰链孔3从下向上','右铰链孔3从左向右','左铰链孔4从下向上','左铰链孔4从右向左','右铰链孔4从下向上','右铰链孔4从左向右','左铰链孔5从下向上','左铰链孔5从右向左','右铰链孔5从下向上','右铰链孔5从左向右','左铰链孔6从下向上','左铰链孔6从右向左','右铰链孔6从下向上','右铰链孔6从左向右','附件1','附件2','附件3','附件4','品牌1','品牌2','品牌3','品牌4','附件数量1','附件数量2','附件数量3','附件数量4','数量(平方)','单价(平方)','金额(平方)','数量(周长)','单价(周长)','金额(周长)','完成','其他项目(说明)','录入员']
            JSONToExcelConvertor(header, "铝框下单", title)

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

    }
    else {
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
            }
            else {
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