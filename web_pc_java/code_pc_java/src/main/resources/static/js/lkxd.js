var idd;

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

$(document).ready(function () {
    $('#add-customerName').on('change', function () {
        var customerName = document.getElementById("add-customerName").value;
        $ajax({
            type: 'post',
            url: '/lkxd/queryPinYin',
            data: {
                customerName: customerName,
            }
        }, false, '', function (res) {
            if (res.code == 200) {
                document.getElementById("add-pinyin").value = res.data[0].pinyin
            }
        })
    })
});

$(document).ready(function () {
    $('#update-customer_name').on('change', function () {
        var customerName = document.getElementById("update-customer_name").value;
        $ajax({
            type: 'post',
            url: '/lkxd/queryPinYin',
            data: {
                customerName: customerName,
            }
        }, false, '', function (res) {
            if (res.code == 200) {
                document.getElementById("update-pinyin").value = res.data[0].pinyin
            }
        })
    })
});

function getShfs() {
    $ajax({
        type: 'post',
        url: '/xlpz/hqxlShfs',
    }, false, '', function (res) {
        if (res.code == 200) {
            for (var i = 0; i < res.data.length; i++) {
                $("#add-shippingType").append("<option>" + res.data[i].shfs + "</option>");
                $("#update-shippingType").append("<option>" + res.data[i].shfs + "</option>");
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
                $("#update-lvcaiYanse").append("<option>" + res.data[i].lcysLk + "</option>");
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
                $("#update-boliShenjiagong").append("<option>" + res.data[i].blsjg + "</option>");
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
                $("#update-boliYanse").append("<option>" + res.data[i].blys + "</option>");
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
                $("#update-lashouXinghao").append("<option>" + res.data[i].lsxh + "</option>");
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

                $("#update-jiaolian1SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
                $("#update-jiaolian2SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
                $("#update-jiaolian3SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
                $("#update-jiaolian4SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
                $("#update-jiaolian5SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
                $("#update-jiaolian6SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
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

                $("#update-fujianSelect1").append("<option>" + res.data[i].fjpz + "</option>");
                $("#update-fujianSelect2").append("<option>" + res.data[i].fjpz + "</option>");
                $("#update-fujianSelect3").append("<option>" + res.data[i].fjpz + "</option>");
                $("#update-fujianSelect4").append("<option>" + res.data[i].fjpz + "</option>");
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

                $("#update-pinpaiSelect1").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect2").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect3").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect4").append("<option>" + res.data[i].jlpp + "</option>");
            }
        }
    })
}

$(document).ready(function () {
    $('#add-kaijiaolian').on('change', function () {
        // var kjlk = document.getElementById('add-kaijiaolian').value;
        var selectedValue = $(this).val();
        if (selectedValue == '开二孔') {
            $("#add-jiaolian3SelectLeft").remove();
            $("#add-jiaolian3InsertLeft").remove();
            $("#add-jiaolian3SelectRight").remove();
            $("#add-jiaolian3InsertRight").remove();

            $("#add-jiaolian4SelectLeft").remove();
            $("#add-jiaolian4InsertLeft").remove();
            $("#add-jiaolian4SelectRight").remove();
            $("#add-jiaolian4InsertRight").remove();

            $("#add-jiaolian5SelectLeft").remove();
            $("#add-jiaolian5InsertLeft").remove();
            $("#add-jiaolian5SelectRight").remove();
            $("#add-jiaolian5InsertRight").remove();

            $("#add-jiaolian6SelectLeft").remove();
            $("#add-jiaolian6InsertLeft").remove();
            $("#add-jiaolian6SelectRight").remove();
            $("#add-jiaolian6InsertRight").remove();

            $("#l3sl").remove();
            $("#l3il").remove();
            $("#l3sr").remove();
            $("#l3ir").remove();

            $("#l4sl").remove();
            $("#l4il").remove();
            $("#l4sr").remove();
            $("#l4ir").remove();

            $("#l5sl").remove();
            $("#l5il").remove();
            $("#l5sr").remove();
            $("#l5ir").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
        if (selectedValue == '开三孔') {
            $("#add-jiaolian4SelectLeft").remove();
            $("#add-jiaolian4InsertLeft").remove();
            $("#add-jiaolian4SelectRight").remove();
            $("#add-jiaolian4InsertRight").remove();

            $("#add-jiaolian5SelectLeft").remove();
            $("#add-jiaolian5InsertLeft").remove();
            $("#add-jiaolian5SelectRight").remove();
            $("#add-jiaolian5InsertRight").remove();

            $("#add-jiaolian6SelectLeft").remove();
            $("#add-jiaolian6InsertLeft").remove();
            $("#add-jiaolian6SelectRight").remove();
            $("#add-jiaolian6InsertRight").remove();

            $("#l4sl").remove();
            $("#l4il").remove();
            $("#l4sr").remove();
            $("#l4ir").delete();

            $("#l5sl").remove();
            $("#l5il").remove();
            $("#l5sr").remove();
            $("#l5ir").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
        if (selectedValue == '开四孔') {
            $("#add-jiaolian5SelectLeft").remove();
            $("#add-jiaolian5InsertLeft").remove();
            $("#add-jiaolian5SelectRight").remove();
            $("#add-jiaolian5InsertRight").remove();

            $("#add-jiaolian6SelectLeft").remove();
            $("#add-jiaolian6InsertLeft").remove();
            $("#add-jiaolian6SelectRight").remove();
            $("#add-jiaolian6InsertRight").remove();

            $("#l5sl").remove();
            $("#l5il").remove();
            $("#l5sr").remove();
            $("#l5ir").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
        if (selectedValue == '开五孔') {
            $("#add-jiaolian6SelectLeft").remove();
            $("#add-jiaolian6InsertLeft").remove();
            $("#add-jiaolian6SelectRight").remove();
            $("#add-jiaolian6InsertRight").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
    })
})

$(document).ready(function () {
    $('#update-kaijiaolian').on('change', function () {
        // var kjlk = document.getElementById('add-kaijiaolian').value;
        var selectedValue = $(this).val();
        if (selectedValue == '开二孔') {
            $("#update-jiaolian3SelectLeft").remove();
            $("#update-jiaolian3InsertLeft").remove();
            $("#update-jiaolian3SelectRight").remove();
            $("#update-jiaolian3InsertRight").remove();

            $("#update-jiaolian4SelectLeft").remove();
            $("#update-jiaolian4InsertLeft").remove();
            $("#update-jiaolian4SelectRight").remove();
            $("#update-jiaolian4InsertRight").remove();

            $("#update-jiaolian5SelectLeft").remove();
            $("#update-jiaolian5InsertLeft").remove();
            $("#update-jiaolian5SelectRight").remove();
            $("#update-jiaolian5InsertRight").remove();

            $("#update-jiaolian6SelectLeft").remove();
            $("#update-jiaolian6InsertLeft").remove();
            $("#update-jiaolian6SelectRight").remove();
            $("#update-jiaolian6InsertRight").remove();

            $("#l3sl").remove();
            $("#l3il").remove();
            $("#l3sr").remove();
            $("#l3ir").remove();

            $("#l4sl").remove();
            $("#l4il").remove();
            $("#l4sr").remove();
            $("#l4ir").remove();

            $("#l5sl").remove();
            $("#l5il").remove();
            $("#l5sr").remove();
            $("#l5ir").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
        if (selectedValue == '开三孔') {
            $("#update-jiaolian4SelectLeft").remove();
            $("#update-jiaolian4InsertLeft").remove();
            $("#update-jiaolian4SelectRight").remove();
            $("#update-jiaolian4InsertRight").remove();

            $("#update-jiaolian5SelectLeft").remove();
            $("#update-jiaolian5InsertLeft").remove();
            $("#update-jiaolian5SelectRight").remove();
            $("#update-jiaolian5InsertRight").remove();

            $("#update-jiaolian6SelectLeft").remove();
            $("#update-jiaolian6InsertLeft").remove();
            $("#update-jiaolian6SelectRight").remove();
            $("#update-jiaolian6InsertRight").remove();

            $("#ul4sl").remove();
            $("#ul4il").remove();
            $("#ul4sr").remove();
            $("#ul4ir").delete();

            $("#ul5sl").remove();
            $("#ul5il").remove();
            $("#ul5sr").remove();
            $("#ul5ir").remove();

            $("#ul6sl").remove();
            $("#ul6il").remove();
            $("#ul6sr").remove();
            $("#ul6ir").remove();
        }
        if (selectedValue == '开四孔') {
            $("#update-jiaolian5SelectLeft").remove();
            $("#update-jiaolian5InsertLeft").remove();
            $("#update-jiaolian5SelectRight").remove();
            $("#update-jiaolian5InsertRight").remove();

            $("#update-jiaolian6SelectLeft").remove();
            $("#update-jiaolian6InsertLeft").remove();
            $("#update-jiaolian6SelectRight").remove();
            $("#update-jiaolian6InsertRight").remove();

            $("#ul5sl").remove();
            $("#ul5il").remove();
            $("#ul5sr").remove();
            $("#ul5ir").remove();

            $("#ul6sl").remove();
            $("#ul6il").remove();
            $("#ul6sr").remove();
            $("#ul6ir").remove();
        }
        if (selectedValue == '开五孔') {
            $("#update-jiaolian6SelectLeft").remove();
            $("#update-jiaolian6InsertLeft").remove();
            $("#update-jiaolian6SelectRight").remove();
            $("#update-jiaolian6InsertRight").remove();

            $("#ul6sl").remove();
            $("#ul6il").remove();
            $("#ul6sr").remove();
            $("#ul6ir").remove();
        }
    })
})

function getJe() {
    var jl1 = document.getElementById('add-jiaolian1SelectLeft').value;
    var jl2 = document.getElementById('add-jiaolian2SelectLeft').value;
    if ($("#add-jiaolian3SelectLeft").jiaolian3SelectLeft != "" && $("#add-jiaolian3SelectLeft").jiaolian3SelectLeft != undefined) {
        var jl3 = $("#add-jiaolian3SelectLeft").jiaolian3SelectLeft;
    }
    if ($("#add-jiaolian4SelectLeft").jiaolian4SelectLeft != "" && $("#add-jiaolian4SelectLeft").jiaolian4SelectLeft != undefined) {
        var jl4 = $("#add-jiaolian4SelectLeft").jiaolian4SelectLeft;
    }
    if ($("#add-jiaolian5SelectLeft").jiaolian5SelectLeft != "" && $("#add-jiaolian5SelectLeft").jiaolian5SelectLeft != undefined) {
        var jl5 = $("#add-jiaolian5SelectLeft").jiaolian5SelectLeft;
    }
    if ($("#add-jiaolian6SelectLeft").jiaolian6SelectLeft != "" && $("#add-jiaolian6SelectLeft").jiaolian6SelectLeft != undefined) {
        var jl6 = $("#add-jiaolian6SelectLeft").jiaolian6SelectLeft;
    }
    var height = parseFloat(document.getElementById('add-height').value);
    if (jl1 == '距中') {
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
    var jl1 = document.getElementById('update-jiaolian1SelectLeft').value;
    var jl2 = document.getElementById('update-jiaolian2SelectLeft').value;
    var jl3 = document.getElementById('update-jiaolian3SelectLeft').value;
    var jl4 = document.getElementById('update-jiaolian4SelectLeft').value;
    var jl5 = document.getElementById('update-jiaolian5SelectLeft').value;
    var jl6 = document.getElementById('update-jiaolian6SelectLeft').value;
    var height = parseFloat(document.getElementById('add-height').value);
    if (jl1 == '距中') {
        var jiaolian1Insert = height / 2;
        document.getElementById("update-jiaolian1SelectRight").value = jl1
        document.getElementById("update-jiaolian1InsertLeft").value = jiaolian1Insert;
        document.getElementById("update-jiaolian1InsertRight").value = jiaolian1Insert;
    }
    if (jl2 == '距中') {
        var jiaolian2Insert = height / 2;
        document.getElementById("update-jiaolian2SelectRight").value = jl2
        document.getElementById("update-jiaolian2InsertLeft").value = jiaolian2Insert;
        document.getElementById("update-jiaolian2InsertRight").value = jiaolian2Insert;
    }
    if (jl3 == '距中') {
        var jiaolian3Insert = height / 2;
        document.getElementById("update-jiaolian3_select_right").value = jl3
        document.getElementById("update-jiaolian3_insert_left").value = jiaolian3Insert;
        document.getElementById("update-jiaolian3_insert_right").value = jiaolian3Insert;
    }
    if (jl4 == '距中') {
        var jiaolian4Insert = height / 2;
        document.getElementById("update-jiaolian4SelectRight").value = jl4
        document.getElementById("update-jiaolian4InsertLeft").value = jiaolian4Insert;
        document.getElementById("update-jiaolian4InsertRight").value = jiaolian4Insert;
    }
    if (jl5 == '距中') {
        var jiaolian5Insert = height / 2;
        document.getElementById("update-jiaolian5SelectRight").value = jl5
        document.getElementById("update-jiaolian5InsertLeft").value = jiaolian5Insert;
        document.getElementById("update-jiaolian5InsertRight").value = jiaolian5Insert;
    }
    if (jl6 == '距中') {
        var jiaolian6Insert = height / 2;
        document.getElementById("update-jiaolian6SelectRight").value = jl6
        document.getElementById("update-jiaolian6InsertLeft").value = jiaolian6Insert;
        document.getElementById("update-jiaolian6InsertRight").value = jiaolian6Insert;
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
    document.getElementById("update-sumShuliang1").value = sum_sl
}

function getPfje() {
    var sum_sl = parseFloat(document.getElementById('add-sumShuliang1').value);
    var pfdj = parseFloat(document.getElementById('add-danjia1').value);
    var sum_je = Math.round(sum_sl * pfdj * 100) / 100
    document.getElementById("add-sumJine1").value = sum_je
}

function getUpdPfje() {
    var sum_sl = parseFloat(document.getElementById('update-sumShuliang1').value);
    var pfdj = parseFloat(document.getElementById('update-danjia1').value);
    var sum_je = Math.round(sum_sl * pfdj * 100) / 100
    document.getElementById("update-sumJine1").value = sum_je
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
    document.getElementById("update-sumShuliang2").value = sum_sl2
}

function getZcje() {
    var sum_sl2 = parseFloat(document.getElementById('add-sumShuliang2').value);
    var zcdj2 = parseFloat(document.getElementById('add-danjia2').value);
    var sum_je2 = Math.round(sum_sl2 * zcdj2 * 100) / 100
    document.getElementById("add-sumJine2").value = sum_je2
}

function getUpdZcje() {
    var sum_sl2 = parseFloat(document.getElementById('update-sumShuliang2').value);
    var zcdj2 = parseFloat(document.getElementById('update-danjia1').value);
    var sum_je2 = Math.round(sum_sl2 * zcdj2 * 100) / 100
    document.getElementById("update-sumJine2").value = sum_je2
}

function getList() {
    $('#ksinsertDate').val("");
    $('#jsinsertDate').val("");
    $('#customerNumber').val("");
    $('#customerName').val("");
    $('#installAddress').val("");
    $('#wancheng').val("");

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
    getLvxingcai();
    getLvcaiYanse();
    getBlsjg();
    getBlys();
    getLsxh();
    getKjlk();
    getJlkw();
    getFjpz();
    getJlpp();
    // document.getElementById("dlm").innerText = ($.session.get('username'));

    $ajax({
        type: 'post',
        url: '/user/getUserName',
    }, false, '', function (res) {
        var this_username = res.data
        document.getElementById("dlm").innerText = this_username;
    })

    $('#select-btn').click(function () {
        var customerNumber = $('#customerNumber').val();
        var customerName = $('#customerName').val();
        var installAddress = $('#installAddress').val();
        var ksinsertDate = $('#ksinsertDate').val();
        var jsinsertDate = $('#jsinsertDate').val();
        var wancheng = $('#wancheng').val();
        if (ksinsertDate === "") {
            ksinsertDate = "1999-01-01";
        }
        if (jsinsertDate === "") {
            jsinsertDate = "2030-12-31";
        }
        $ajax({
                type: 'post',
                url: '/lkxd/queryList',
                data: {
                    customerNumber: customerNumber,
                    customerName: customerName,
                    installAddress: installAddress,
                    ksinsertDate: ksinsertDate,
                    jsinsertDate: jsinsertDate,
                    wancheng: wancheng,
                }
            },
            true, '', function (res) {
                if (res.code == 200) {
                    setTable(res.data);
                }
            }
        )
    });

    //刷新
    $("#refresh-btn").click(function () {
        getList();
    });

    //点击新增按钮显示弹窗
    $("#add-btn").click(function () {
        $('#add-modal').modal('show');
        getToken();
    });

    //新增弹窗里点击关闭按钮
    $('#add-close-btn').click(function () {
        $('#add-modal').modal('hide');
    });

    //新增弹窗里点击提交按钮
    $("#add-submit-btn").click(function () {
        // getAddKk();
        getJe();
        getPfsl();
        getPfje();
        getZcsl();
        getZcje();
        getUpdJe()
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
        $('#update-customerName').val(rows[0].data.customerName);
        $('#update-insertDate').val(rows[0].data.insertDate);
        $('#update-orderNumber').val(rows[0].data.orderNumber);
        $('#update-pinyin').val(rows[0].data.pinyin);
        $('#update-shippingAddress').val(rows[0].data.shippingAddress);
        $('#update-phone').val(rows[0].data.phone);
        $('#update-shippingType').val(rows[0].data.shippingType);
        $('#update-installAddress').val(rows[0].data.installAddress);
        $('#update-customerNameRenyuan').val(rows[0].data.customerNameRenyuan);
        $('#update-customerNumber').val(rows[0].data.customerNumber);
        $('#update-height').val(rows[0].data.height);
        $('#update-width').val(rows[0].data.width);
        $('#update-num').val(rows[0].data.num);
        $('#update-lvxingcai').val(rows[0].data.lvxingcai);
        $('#update-lvcaiYanse').val(rows[0].data.lvcaiYanse);
        $('#update-boliShenjiagong').val(rows[0].data.boliShenjiagong);
        $('#update-boliYanse').val(rows[0].data.boliYanse);
        $('#update-lashouXinghao').val(rows[0].data.lashouXinghao);
        $('#update-jiaoliankongFangxiangLeft').val(rows[0].data.jiaoliankongFangxiangLeft);
        $('#update-jiaoliankongFangxiangRight').val(rows[0].data.jiaoliankongFangxiangRight);
        $('#update-lashouShuliangLeft').val(rows[0].data.lashouShuliangLeft);
        $('#update-lashouShuliangRight').val(rows[0].data.lashouShuliangRight);
        $('#update-lashouweiSelectLeft').val(rows[0].data.lashouweiSelectLeft);
        $('#update-lashouweiInsertLeft').val(rows[0].data.lashouweiInsertLeft);
        $('#update-lashouweiSelectRight').val(rows[0].data.lashouweiSelectRight);
        $('#update-lashouweiInsertRight').val(rows[0].data.lashouweiInsertRight);
        $('#update-zhuangsuoshuliangInsertLeft1').val(rows[0].data.zhuangsuoshuliangInsertLeft1);
        $('#update-zhuangsuoshuliangInsertRight1').val(rows[0].data.zhuangsuoshuliangInsertRight1);
        $('#update-zhuangsuofangweiInsertLeft1').val(rows[0].data.zhuangsuofangweiInsertLeft1);
        $('#update-zhuangsuofangweiInsertLeft2').val(rows[0].data.zhuangsuofangweiInsertLeft2);
        $('#update-zhuangsuofangweiInsertRight1').val(rows[0].data.zhuangsuofangweiInsertRight1);
        $('#update-zhuangsuofangweiInsertRight2').val(rows[0].data.zhuangsuofangweiInsertRight2);
        $('#update-kaijiaolian').val(rows[0].data.kaijiaolian);
        $('#update-jiaolian1SelectLeft').val(rows[0].data.jiaolian1SelectLeft);
        $('#update-jiaolian1InsertLeft').val(rows[0].data.jiaolian1InsertLeft);
        $('#update-jiaolian1SelectRight').val(rows[0].data.jiaolian1SelectRight);
        $('#update-jiaolian1InsertRight').val(rows[0].data.jiaolian1InsertRight);
        $('#update-jiaolian2SelectLeft').val(rows[0].data.jiaolian2SelectLeft);
        $('#update-jiaolian2InsertLeft').val(rows[0].data.jiaolian2InsertLeft);
        $('#update-jiaolian2SelectRight').val(rows[0].data.jiaolian2SelectRight);
        $('#update-jiaolian2InsertRight').val(rows[0].data.jiaolian2InsertRight);
        $('#update-jiaolian3SelectLeft').val(rows[0].data.jiaolian3SelectLeft);
        $('#update-jiaolian3InsertLeft').val(rows[0].data.jiaolian3InsertLeft);
        $('#update-jiaolian3SelectRight').val(rows[0].data.jiaolian3SelectRight);
        $('#update-jiaolian3InsertRight').val(rows[0].data.jiaolian3InsertRight);
        $('#update-jiaolian4SelectLeft').val(rows[0].data.jiaolian4SelectLeft);
        $('#update-jiaolian4InsertLeft').val(rows[0].data.jiaolian4InsertLeft);
        $('#update-jiaolian4SelectRight').val(rows[0].data.jiaolian4SelectRight);
        $('#update-jiaolian4InsertRight').val(rows[0].data.jiaolian4InsertRight);
        $('#update-jiaolian5SelectLeft').val(rows[0].data.jiaolian5SelectLeft);
        $('#update-jiaolian5InsertLeft').val(rows[0].data.jiaolian5InsertLeft);
        $('#update-jiaolian5SelectRight').val(rows[0].data.jiaolian5SelectRight);
        $('#update-jiaolian5InsertRight').val(rows[0].data.jiaolian5InsertRight);
        $('#update-jiaolian6SelectLeft').val(rows[0].data.jiaolian6SelectLeft);
        $('#update-jiaolian6InsertLeft').val(rows[0].data.jiaolian6InsertLeft);
        $('#update-jiaolian6SelectRight').val(rows[0].data.jiaolian6SelectRight);
        $('#update-jiaolian6InsertRight').val(rows[0].data.jiaolian6InsertRight);
        $('#update-fujianSelect1').val(rows[0].data.fujianSelect1);
        $('#update-fujianSelect2').val(rows[0].data.fujianSelect2);
        $('#update-fujianSelect3').val(rows[0].data.fujianSelect3);
        $('#update-fujianSelect4').val(rows[0].data.fujianSelect4);
        $('#update-pinpaiSelect1').val(rows[0].data.pinpaiSelect1);
        $('#update-pinpaiSelect2').val(rows[0].data.pinpaiSelect2);
        $('#update-pinpaiSelect3').val(rows[0].data.pinpaiSelect3);
        $('#update-pinpaiSelect4').val(rows[0].data.pinpaiSelect4);
        $('#update-fujianShuliang1').val(rows[0].data.fujianShuliang1);
        $('#update-fujianShuliang2').val(rows[0].data.fujianShuliang2);
        $('#update-fujianShuliang3').val(rows[0].data.fujianShuliang3);
        $('#update-fujianShuliang4').val(rows[0].data.fujianShuliang4);
        $('#update-sumShuliang1').val(rows[0].data.sumShuliang1);
        $('#update-danjia1').val(rows[0].data.danjia1);
        $('#update-sumJine1').val(rows[0].data.sumJine1);
        $('#update-sumShuliang2').val(rows[0].data.sumShuliang2);
        $('#update-danjia2').val(rows[0].data.danjia2);
        $('#update-sumJine2').val(rows[0].data.sumJine2);
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
        // getUpdKk();
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
                field: 'insertDate',
                title: '下单日期',
                align: 'center',
                sortable: true,
                width: 100,
            },{
                field: 'customerName',
                title: '客户名称',
                align: 'center',
                sortable: true,
                width: 100,
            },  {
                field: 'wanCheng',
                title: '订单状态',
                align: 'center',
                sortable: true,
                width: 100,
            },{
                field: 'orderNumber',
                title: '单据编号',
                align: 'center',
                sortable: true,
                width: 100,
            },{
                field: '',
                title: '开孔',
                align: 'center',
                sortable: true,
                width: 100,
            },{
                field: '',
                title: '铣孔',
                align: 'center',
                sortable: true,
                width: 100,
            },{
                field: '',
                title: '组装',
                align: 'center',
                sortable: true,
                width: 100,
            },{
                field: 'baozhuang',
                title: '包装',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'installAddress',
                title: '安装地址',
                align: 'center',
                sortable: true,
                width: 100,
            },{
                field: '',
                title: '订单编号',
                align: 'center',
                sortable: true,
                width: 100,
            },{
                field: '',
                title: '操作员',
                align: 'center',
                sortable: true,
                width: 100,
            },{
                field: '',
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
            console.log("所有数据"+res.data)
            var array = res.data
            var header = []
            for (var i = 0; i < array.length; i++) {
                var body = {
                    customerName: array[i].customerName,
                    insertDate: array[i].insertDate,
                    packinglist:array[i].packinglist,
                    orderNumber: array[i].orderNumber,
                    pinyin: array[i].pinyin,
                    shippingAddress: array[i].shippingAddress,
                    phone: array[i].phone,
                    shippingType: array[i].shippingType,
                    installAddress: array[i].installAddress,
                    customerNumber: array[i].customerNumber,
                    height: array[i].height,
                    width: array[i].width,
                    lvxingcai: array[i].lvxingcai,
                    num: array[i].num,
                    lvcaiYanse: array[i].lvcaiYanse,
                    boliShenjiagong: array[i].boliShenjiagong,
                    boliYanse: array[i].boliYanse,
                    lashouXinghao: array[i].lashouXinghao,
                    jiaoliankongFangxiangLeft: array[i].jiaoliankongFangxiangLeft,
                    jiaoliankongFangxiangRight: array[i].jiaoliankongFangxiangRight,
                    lashouShuliangLeft: array[i].lashouShuliangLeft,
                    lashouShuliangRight: array[i].lashouShuliangRight,
                    lashouweiSelectLeft: array[i].lashouweiSelectLeft,
                    lashouweiInsertLeft: array[i].lashouweiInsertLeft,
                    lashouweiSelectRight: array[i].lashouweiSelectRight,
                    lashouweiInsertRight: array[i].lashouweiInsertRight,
                    zhuangsuoshuliangInsertLeft1: array[i].zhuangsuoshuliangInsertLeft1,
                    zhuangsuoshuliangInsertRight1: array[i].zhuangsuoshuliangInsertRight1,
                    zhuangsuofangwiangSelectRight: array[i].zhuangsuofangwiangSelectRight,
                    zhuangsuofangweiInsertLeft1: array[i].zhuangsuofangweiInsertLeft1,
                    zhuangsuofangweiInsertLeft2: array[i].zhuangsuofangweiInsertLeft2,
                    zhuangsuofangweiInsertRight1: array[i].zhuangsuofangweiInsertRight1,
                    zhuangsuofangweiInsertRight2: array[i].zhuangsuofangweiInsertRight2,
                    kaijiaolian: array[i].kaijiaolian,
                    jiaolian1SelectLeft: array[i].jiaolian1SelectLeft,
                    jiaolian1InsertLeft: array[i].jiaolian1InsertLeft,
                    jiaolian1SelectRight: array[i].jiaolian1SelectRight,
                    jiaolian1InsertRight: array[i].jiaolian1InsertRight,
                    jiaolian2SelectLeft: array[i].jiaolian2SelectLeft,
                    jiaolian2InsertLeft: array[i].jiaolian2InsertLeft,
                    jiaolian2SelectRight: array[i].jiaolian2SelectRight,
                    jiaolian2InsertRight: array[i].jiaolian2InsertRight,
                    jiaolian3SelectLeft: array[i].jiaolian3SelectLeft,
                    jiaolian3InsertLeft: array[i].jiaolian3InsertLeft,
                    jiaolian3SelectRight: array[i].jiaolian3SelectRight,
                    jiaolian3InsertRight: array[i].jiaolian3InsertRight,
                    jiaolian4SelectLeft: array[i].jiaolian4SelectLeft,
                    jiaolian4InsertLeft: array[i].jiaolian4InsertLeft,
                    jiaolian4SelectRight: array[i].jiaolian4SelectRight,
                    jiaolian4InsertRight: array[i].jiaolian4InsertRight,
                    jiaolian5SelectLeft: array[i].jiaolian5SelectLeft,
                    jiaolian5InsertLeft: array[i].jiaolian5InsertLeft,
                    jiaolian5SelectRight: array[i].jiaolian5SelectRight,
                    jiaolian5InsertRight: array[i].jiaolian5InsertRight,
                    jiaolian6SelectLeft: array[i].jiaolian6SelectLeft,
                    jiaolian6InsertLeft: array[i].jiaolian6InsertLeft,
                    jiaolian6SelectRight: array[i].jiaolian6SelectRight,
                    jiaolian6InsertRight: array[i].jiaolian6InsertRight,
                    fujianSelect1: array[i].fujianSelect1,
                    fujianSelect2: array[i].fujianSelect2,
                    fujianSelect3: array[i].fujianSelect3,
                    fujianSelect4: array[i].fujianSelect4,
                    pinpaiSelect1: array[i].pinpaiSelect1,
                    pinpaiSelect2: array[i].pinpaiSelect2,
                    pinpaiSelect3: array[i].pinpaiSelect3,
                    pinpaiSelect4: array[i].pinpaiSelect4,
                    fujianShuliang1: array[i].fujianShuliang1,
                    fujianShuliang2: array[i].fujianShuliang2,
                    fujianShuliang3: array[i].fujianShuliang3,
                    fujianShuliang4: array[i].fujianShuliang4,
                    sumShuliang1: array[i].sumShuliang1,
                    danjia1: array[i].danjia1,
                    sumJine1: array[i].sumJine1,
                    sumShuliang2: array[i].sumShuliang2,
                    danjia2: array[i].danjia2,
                    sumJine2: array[i].sumJine2,
                    wancheng: array[i].wancheng,
                    qita: array[i].qita,
                    customerNameRenyuan: array[i].customerNameRenyuan,
                }
                header.push(body)
            }
            console.log(header)
            title = ['下单日期', '客户名称', '单据编号', '简码', '送货地址', '联系电话', '送货方式', '安装地址', '订单号', '高', '宽', '铝型材', '下单数量', '铝材颜色', '玻璃深加工', '玻璃颜色', '拉手型号', '铰链孔方向左', '铰链孔方向右', '拉手数量左', '拉手数量右', '左拉手位从上向下', '左拉手位从右向左', '右拉手位从下向上', '右拉手位从左向右', '装锁数量(左)', '装锁数量(右)', '装锁方向(右)', '装锁方位(左1)', '装锁方位(左2)', '装锁方位(右1)', '装锁方位(右2)', '开铰链孔', '左铰链孔从下向上', '左铰链孔从右向左', '右铰链孔从下向上', '右铰链孔从左向右', '左铰链孔2从下向上', '左铰链孔2从右向左', '右铰链孔2从下向上', '右铰链孔2从左向右', '左铰链孔3从下向上', '左铰链孔3从右向左', '右铰链孔3从下向上', '右铰链孔3从左向右', '左铰链孔4从下向上', '左铰链孔4从右向左', '右铰链孔4从下向上', '右铰链孔4从左向右', '左铰链孔5从下向上', '左铰链孔5从右向左', '右铰链孔5从下向上', '右铰链孔5从左向右', '左铰链孔6从下向上', '左铰链孔6从右向左', '右铰链孔6从下向上', '右铰链孔6从左向右', '附件1', '附件2', '附件3', '附件4', '品牌1', '品牌2', '品牌3', '品牌4', '附件数量1', '附件数量2', '附件数量3', '附件数量4', '数量(平方)', '单价(平方)', '金额(平方)', '数量(周长)', '单价(周长)', '金额(周长)', '完成', '其他项目(说明)', '录入员']
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
        console.log(res.data.token)
        if (res.code == 200) {

            //默认当前日期
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            //拼接成yyyy-MM-dd的形式
            var xdrq = date.getFullYear() + "-" + (month) + "-" + (day);
            var djbh = "";
            var ksinsertDate = date.getFullYear() + "-" + (month) + "-" + (day);
            var jsinsertDate = date.getFullYear() + "-" + (month) + "-" + ("0" + (date.getDate() + 1)).slice(-2);
            var customerNumber = "";
            var ddh = "";
            var customerName = "";
            var installAddress = "";
            var wancheng = "";
            $ajax({
                type: 'post',
                url: '/lkxd/queryList',
                data: {
                    customerNumber: customerNumber,
                    customerName: customerName,
                    installAddress: installAddress,
                    ksinsertDate: ksinsertDate,
                    jsinsertDate: jsinsertDate,
                    wancheng: wancheng,
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
            setForm(res.data, '#add-form');
            $('#add-customerNameRenyuan').val(res.data.name);
            $('#add-insertDate').val(xdrq);
            $('#add-orderNumber').val(djbh);

        }
    })
}