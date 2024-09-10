var idd;
var num = "";
var b = "";
var a1 = "";
var a2 = "";
var a3 = "";
var a4 = "";
var a5 = "";
var a6 = "";
var a7 = "";
var select_sx = [];
var select_zz = [];
var select_kl = [];
var select_baoz = [];
var t = "";
var y = "";
var u = "";
var l = "";
var power1;
function getKhmc() {
    $ajax({
        type: 'post',
        url: '/user/hqxlKhmc',
    }, false, '', function (res) {
        if (res.code == 200) {
            for (var i = 0; i < res.data.length; i++) {
                $("#add-customerName").append("<option>" + res.data[i].company + "</option>");
                $("#update-customerName").append("<option>" + res.data[i].company + "</option>");
                $("#customerName").append("<option>" + res.data[i].company + "</option>");
            }
        }
    })
}

function getgzry() {
    $ajax({
        type: 'post',
        url: '/user/gzry',
    }, false, '', function (res) {
        if (res.code == 200) {
            var item = "";
            select_sx = res.data;
            select_zz = res.data;
            select_kl = res.data;
            select_baoz = res.data;
            for (var i = 0; i < res.data.length; i++) {
                item = "<option value=\"" + res.data[i].name + "\">" + res.data[i].name + "</option>"
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
            if (res.data[i] !== null) {
                for (var i = 0; i < res.data.length; i++) {
                    $("#add-shippingType").append("<option>" + res.data[i].shfs + "</option>");
                    $("#update-shippingType").append("<option>" + res.data[i].shfs + "</option>");
                }
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
                if (res.data[i] !== null) {
                    $("#add-lvxingcai").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#add-lvxingcai1").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#add-lvxingcai2").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#add-lvxingcai3").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#add-lvxingcai4").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#add-lvxingcai5").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#add-lvxingcai6").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#add-lvxingcai7").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#add-lvxingcai8").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#add-lvxingcai9").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#add-lvxingcai10").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#add-lvxingcai11").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#add-lvxingcai12").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#add-lvxingcai13").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#add-lvxingcai14").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#add-lvxingcai15").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#add-lvxingcai16").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#add-lvxingcai17").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#add-lvxingcai18").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#add-lvxingcai19").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#update-lvxingcai").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#update-lvxingcai1").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#update-lvxingcai2").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#update-lvxingcai3").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#update-lvxingcai4").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#update-lvxingcai5").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#update-lvxingcai6").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#update-lvxingcai7").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#update-lvxingcai8").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#update-lvxingcai9").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#update-lvxingcai10").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#update-lvxingcai11").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#update-lvxingcai12").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#update-lvxingcai13").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#update-lvxingcai14").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#update-lvxingcai15").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#update-lvxingcai16").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#update-lvxingcai17").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#update-lvxingcai18").append("<option>" + res.data[i].lxcLk + "</option>");
                    $("#update-lvxingcai19").append("<option>" + res.data[i].lxcLk + "</option>");
                }
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
                if (res.data[i] !== null) {
                    $("#add-lvcaiYanse").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#add-lvcaiYanse1").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#add-lvcaiYanse2").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#add-lvcaiYanse3").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#add-lvcaiYanse4").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#add-lvcaiYanse5").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#add-lvcaiYanse6").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#add-lvcaiYanse7").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#add-lvcaiYanse8").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#add-lvcaiYanse9").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#add-lvcaiYanse10").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#add-lvcaiYanse11").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#add-lvcaiYanse12").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#add-lvcaiYanse13").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#add-lvcaiYanse14").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#add-lvcaiYanse15").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#add-lvcaiYanse16").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#add-lvcaiYanse17").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#add-lvcaiYanse18").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#add-lvcaiYanse19").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#update-lvcaiYanse").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#update-lvcaiYanse1").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#update-lvcaiYanse2").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#update-lvcaiYanse3").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#update-lvcaiYanse4").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#update-lvcaiYanse5").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#update-lvcaiYanse6").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#update-lvcaiYanse7").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#update-lvcaiYanse8").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#update-lvcaiYanse9").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#update-lvcaiYanse10").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#update-lvcaiYanse11").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#update-lvcaiYanse12").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#update-lvcaiYanse13").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#update-lvcaiYanse14").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#update-lvcaiYanse15").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#update-lvcaiYanse16").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#update-lvcaiYanse17").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#update-lvcaiYanse18").append("<option>" + res.data[i].lcysLk + "</option>");
                    $("#update-lvcaiYanse19").append("<option>" + res.data[i].lcysLk + "</option>");
                }
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
                if (res.data[i] !== null) {
                    $("#add-boliShenjiagong").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#add-boliShenjiagong1").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#add-boliShenjiagong2").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#add-boliShenjiagong3").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#add-boliShenjiagong4").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#add-boliShenjiagong5").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#add-boliShenjiagong6").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#add-boliShenjiagong7").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#add-boliShenjiagong8").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#add-boliShenjiagong9").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#add-boliShenjiagong10").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#add-boliShenjiagong11").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#add-boliShenjiagong12").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#add-boliShenjiagong13").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#add-boliShenjiagong14").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#add-boliShenjiagong15").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#add-boliShenjiagong16").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#add-boliShenjiagong17").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#add-boliShenjiagong18").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#add-boliShenjiagong19").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#update-boliShenjiagong").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#update-boliShenjiagong1").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#update-boliShenjiagong2").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#update-boliShenjiagong3").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#update-boliShenjiagong4").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#update-boliShenjiagong5").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#update-boliShenjiagong6").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#update-boliShenjiagong7").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#update-boliShenjiagong8").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#update-boliShenjiagong9").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#update-boliShenjiagong10").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#update-boliShenjiagong11").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#update-boliShenjiagong12").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#update-boliShenjiagong13").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#update-boliShenjiagong14").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#update-boliShenjiagong15").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#update-boliShenjiagong16").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#update-boliShenjiagong17").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#update-boliShenjiagong18").append("<option>" + res.data[i].blsjg + "</option>");
                    $("#update-boliShenjiagong19").append("<option>" + res.data[i].blsjg + "</option>");
                }
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
                if (res.data[i] !== null) {
                    $("#add-boliYanse").append("<option>" + res.data[i].blys + "</option>");
                    $("#add-boliYanse1").append("<option>" + res.data[i].blys + "</option>");
                    $("#add-boliYanse2").append("<option>" + res.data[i].blys + "</option>");
                    $("#add-boliYanse3").append("<option>" + res.data[i].blys + "</option>");
                    $("#add-boliYanse4").append("<option>" + res.data[i].blys + "</option>");
                    $("#add-boliYanse5").append("<option>" + res.data[i].blys + "</option>");
                    $("#add-boliYanse6").append("<option>" + res.data[i].blys + "</option>");
                    $("#add-boliYanse7").append("<option>" + res.data[i].blys + "</option>");
                    $("#add-boliYanse8").append("<option>" + res.data[i].blys + "</option>");
                    $("#add-boliYanse9").append("<option>" + res.data[i].blys + "</option>");
                    $("#add-boliYanse10").append("<option>" + res.data[i].blys + "</option>");
                    $("#add-boliYanse11").append("<option>" + res.data[i].blys + "</option>");
                    $("#add-boliYanse12").append("<option>" + res.data[i].blys + "</option>");
                    $("#add-boliYanse13").append("<option>" + res.data[i].blys + "</option>");
                    $("#add-boliYanse14").append("<option>" + res.data[i].blys + "</option>");
                    $("#add-boliYanse15").append("<option>" + res.data[i].blys + "</option>");
                    $("#add-boliYanse16").append("<option>" + res.data[i].blys + "</option>");
                    $("#add-boliYanse17").append("<option>" + res.data[i].blys + "</option>");
                    $("#add-boliYanse18").append("<option>" + res.data[i].blys + "</option>");
                    $("#add-boliYanse19").append("<option>" + res.data[i].blys + "</option>");
                    $("#update-boliYanse").append("<option>" + res.data[i].blys + "</option>");
                    $("#update-boliYanse1").append("<option>" + res.data[i].blys + "</option>");
                    $("#update-boliYanse2").append("<option>" + res.data[i].blys + "</option>");
                    $("#update-boliYanse3").append("<option>" + res.data[i].blys + "</option>");
                    $("#update-boliYanse4").append("<option>" + res.data[i].blys + "</option>");
                    $("#update-boliYanse5").append("<option>" + res.data[i].blys + "</option>");
                    $("#update-boliYanse6").append("<option>" + res.data[i].blys + "</option>");
                    $("#update-boliYanse7").append("<option>" + res.data[i].blys + "</option>");
                    $("#update-boliYanse8").append("<option>" + res.data[i].blys + "</option>");
                    $("#update-boliYanse9").append("<option>" + res.data[i].blys + "</option>");
                    $("#update-boliYanse10").append("<option>" + res.data[i].blys + "</option>");
                    $("#update-boliYanse11").append("<option>" + res.data[i].blys + "</option>");
                    $("#update-boliYanse12").append("<option>" + res.data[i].blys + "</option>");
                    $("#update-boliYanse13").append("<option>" + res.data[i].blys + "</option>");
                    $("#update-boliYanse14").append("<option>" + res.data[i].blys + "</option>");
                    $("#update-boliYanse15").append("<option>" + res.data[i].blys + "</option>");
                    $("#update-boliYanse16").append("<option>" + res.data[i].blys + "</option>");
                    $("#update-boliYanse17").append("<option>" + res.data[i].blys + "</option>");
                    $("#update-boliYanse18").append("<option>" + res.data[i].blys + "</option>");
                    $("#update-boliYanse19").append("<option>" + res.data[i].blys + "</option>");
                }
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
                if (res.data[i] !== null) {
                    $("#add-lashouXinghao").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#add-lashouXinghao1").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#add-lashouXinghao2").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#add-lashouXinghao3").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#add-lashouXinghao4").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#add-lashouXinghao5").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#add-lashouXinghao6").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#add-lashouXinghao7").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#add-lashouXinghao8").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#add-lashouXinghao9").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#add-lashouXinghao10").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#add-lashouXinghao11").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#add-lashouXinghao12").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#add-lashouXinghao13").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#add-lashouXinghao14").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#add-lashouXinghao15").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#add-lashouXinghao16").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#add-lashouXinghao17").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#add-lashouXinghao18").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#add-lashouXinghao19").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#update-lashouXinghao").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#update-lashouXinghao1").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#update-lashouXinghao2").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#update-lashouXinghao3").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#update-lashouXinghao4").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#update-lashouXinghao5").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#update-lashouXinghao6").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#update-lashouXinghao7").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#update-lashouXinghao8").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#update-lashouXinghao9").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#update-lashouXinghao10").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#update-lashouXinghao11").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#update-lashouXinghao12").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#update-lashouXinghao13").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#update-lashouXinghao14").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#update-lashouXinghao15").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#update-lashouXinghao16").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#update-lashouXinghao17").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#update-lashouXinghao18").append("<option>" + res.data[i].lsxh + "</option>");
                    $("#update-lashouXinghao19").append("<option>" + res.data[i].lsxh + "</option>");
                }
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
                if (res.data[i] !== null) {
                    $("#add-kaijiaolian").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#add-kaijiaolian1").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#add-kaijiaolian2").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#add-kaijiaolian3").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#add-kaijiaolian4").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#add-kaijiaolian5").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#add-kaijiaolian6").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#add-kaijiaolian7").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#add-kaijiaolian8").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#add-kaijiaolian9").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#add-kaijiaolian10").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#add-kaijiaolian11").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#add-kaijiaolian12").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#add-kaijiaolian13").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#add-kaijiaolian14").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#add-kaijiaolian15").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#add-kaijiaolian16").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#add-kaijiaolian17").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#add-kaijiaolian18").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#add-kaijiaolian19").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#update-kaijiaolian").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#update-kaijiaolian1").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#update-kaijiaolian2").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#update-kaijiaolian3").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#update-kaijiaolian4").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#update-kaijiaolian5").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#update-kaijiaolian6").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#update-kaijiaolian7").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#update-kaijiaolian8").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#update-kaijiaolian9").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#update-kaijiaolian10").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#update-kaijiaolian11").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#update-kaijiaolian12").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#update-kaijiaolian13").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#update-kaijiaolian14").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#update-kaijiaolian15").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#update-kaijiaolian16").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#update-kaijiaolian17").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#update-kaijiaolian18").append("<option>" + res.data[i].kjlk + "</option>");
                    $("#update-kaijiaolian19").append("<option>" + res.data[i].kjlk + "</option>");
                }
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
                if (res.data[i] !== null) {
                    $("#add-jiaolian1SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectLeft1").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectLeft1").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectLeft1").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectLeft1").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectLeft1").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectLeft1").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectLeft2").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectLeft2").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectLeft2").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectLeft2").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectLeft2").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectLeft2").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectLeft3").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectLeft3").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectLeft3").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectLeft3").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectLeft3").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectLeft3").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectLeft4").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectLeft4").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectLeft4").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectLeft4").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectLeft4").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectLeft4").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectLeft5").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectLeft5").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectLeft5").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectLeft5").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectLeft5").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectLeft5").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectLeft6").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectLeft6").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectLeft6").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectLeft6").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectLeft6").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectLeft6").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectLeft7").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectLeft7").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectLeft7").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectLeft7").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectLeft7").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectLeft7").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectLeft8").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectLeft8").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectLeft8").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectLeft8").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectLeft8").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectLeft8").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectLeft9").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectLeft9").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectLeft9").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectLeft9").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectLeft9").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectLeft9").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectLeft10").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectLeft10").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectLeft10").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectLeft10").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectLeft10").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectLeft10").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectLeft11").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectLeft11").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectLeft11").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectLeft11").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectLeft11").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectLeft11").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectLeft12").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectLeft12").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectLeft12").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectLeft12").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectLeft12").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectLeft12").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectLeft13").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectLeft13").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectLeft13").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectLeft13").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectLeft13").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectLeft13").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectLeft14").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectLeft14").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectLeft14").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectLeft14").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectLeft14").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectLeft14").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectLeft15").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectLeft15").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectLeft15").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectLeft15").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectLeft15").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectLeft15").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectLeft16").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectLeft16").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectLeft16").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectLeft16").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectLeft16").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectLeft16").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectLeft17").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectLeft17").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectLeft17").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectLeft17").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectLeft17").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectLeft17").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectLeft18").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectLeft18").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectLeft18").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectLeft18").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectLeft18").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectLeft18").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectLeft19").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectLeft19").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectLeft19").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectLeft19").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectLeft19").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectLeft19").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectRight").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectRight").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectRight").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectRight").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectRight").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectRight").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectRight1").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectRight1").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectRight1").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectRight1").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectRight1").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectRight1").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectRight2").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectRight2").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectRight2").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectRight2").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectRight2").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectRight2").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectRight3").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectRight3").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectRight3").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectRight3").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectRight3").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectRight3").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectRight4").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectRight4").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectRight4").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectRight4").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectRight4").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectRight4").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectRight5").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectRight5").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectRight5").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectRight5").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectRight5").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectRight5").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectRight6").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectRight6").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectRight6").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectRight6").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectRight6").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectRight6").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectRight7").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectRight7").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectRight7").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectRight7").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectRight7").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectRight7").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectRight8").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectRight8").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectRight8").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectRight8").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectRight8").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectRight8").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectRight9").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectRight9").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectRight9").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectRight9").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectRight9").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectRight9").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectRight10").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectRight10").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectRight10").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectRight10").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectRight10").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectRight10").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectRight11").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectRight11").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectRight11").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectRight11").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectRight11").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectRight11").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectRight12").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectRight12").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectRight12").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectRight12").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectRight12").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectRight12").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectRight13").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectRight13").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectRight13").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectRight13").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectRight13").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectRight13").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectRight14").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectRight14").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectRight14").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectRight14").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectRight14").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectRight14").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectRight15").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectRight15").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectRight15").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectRight15").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectRight15").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectRight15").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectRight16").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectRight16").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectRight16").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectRight16").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectRight16").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectRight16").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectRight17").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectRight17").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectRight17").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectRight17").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectRight17").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectRight17").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectRight18").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectRight18").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectRight18").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectRight18").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectRight18").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectRight18").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#add-jiaolian1SelectRight19").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian2SelectRight19").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian3SelectRight19").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian4SelectRight19").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian5SelectRight19").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#add-jiaolian6SelectRight19").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectLeft1").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectLeft1").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectLeft1").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectLeft1").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectLeft1").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectLeft1").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectLeft2").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectLeft2").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectLeft2").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectLeft2").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectLeft2").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectLeft2").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectLeft3").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectLeft3").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectLeft3").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectLeft3").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectLeft3").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectLeft3").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectLeft4").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectLeft4").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectLeft4").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectLeft4").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectLeft4").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectLeft4").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectLeft5").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectLeft5").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectLeft5").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectLeft5").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectLeft5").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectLeft5").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectLeft6").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectLeft6").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectLeft6").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectLeft6").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectLeft6").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectLeft6").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectLeft7").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectLeft7").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectLeft7").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectLeft7").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectLeft7").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectLeft7").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectLeft8").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectLeft8").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectLeft8").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectLeft8").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectLeft8").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectLeft8").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectLeft9").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectLeft9").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectLeft9").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectLeft9").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectLeft9").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectLeft9").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectLeft10").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectLeft10").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectLeft10").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectLeft10").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectLeft10").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectLeft10").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectLeft11").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectLeft11").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectLeft11").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectLeft11").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectLeft11").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectLeft11").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectLeft12").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectLeft12").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectLeft12").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectLeft12").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectLeft12").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectLeft12").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectLeft13").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectLeft13").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectLeft13").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectLeft13").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectLeft13").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectLeft13").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectLeft14").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectLeft14").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectLeft14").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectLeft14").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectLeft14").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectLeft14").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectLeft15").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectLeft15").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectLeft15").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectLeft15").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectLeft15").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectLeft15").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectLeft16").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectLeft16").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectLeft16").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectLeft16").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectLeft16").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectLeft16").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectLeft17").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectLeft17").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectLeft17").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectLeft17").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectLeft17").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectLeft17").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectLeft18").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectLeft18").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectLeft18").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectLeft18").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectLeft18").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectLeft18").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectLeft19").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectLeft19").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectLeft19").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectLeft19").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectLeft19").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectLeft19").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectRight").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectRight").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectRight").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectRight").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectRight").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectRight").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectRight1").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectRight1").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectRight1").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectRight1").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectRight1").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectRight1").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectRight2").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectRight2").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectRight2").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectRight2").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectRight2").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectRight2").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectRight3").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectRight3").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectRight3").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectRight3").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectRight3").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectRight3").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectRight4").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectRight4").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectRight4").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectRight4").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectRight4").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectRight4").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectRight5").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectRight5").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectRight5").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectRight5").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectRight5").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectRight5").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectRight6").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectRight6").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectRight6").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectRight6").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectRight6").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectRight6").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectRight7").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectRight7").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectRight7").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectRight7").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectRight7").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectRight7").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectRight8").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectRight8").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectRight8").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectRight8").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectRight8").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectRight8").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectRight9").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectRight9").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectRight9").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectRight9").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectRight9").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectRight9").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectRight10").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectRight10").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectRight10").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectRight10").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectRight10").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectRight10").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectRight11").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectRight11").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectRight11").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectRight11").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectRight11").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectRight11").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectRight12").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectRight12").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectRight12").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectRight12").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectRight12").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectRight12").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectRight13").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectRight13").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectRight13").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectRight13").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectRight13").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectRight13").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectRight14").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectRight14").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectRight14").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectRight14").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectRight14").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectRight14").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectRight15").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectRight15").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectRight15").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectRight15").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectRight15").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectRight15").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectRight16").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectRight16").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectRight16").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectRight16").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectRight16").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectRight16").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectRight17").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectRight17").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectRight17").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectRight17").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectRight17").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectRight17").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectRight18").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectRight18").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectRight18").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectRight18").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectRight18").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectRight18").append("<option>" + res.data[i].jlkw + "</option>");

                    $("#update-jiaolian1SelectRight19").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectRight19").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectRight19").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectRight19").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectRight19").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectRight19").append("<option>" + res.data[i].jlkw + "</option>");

                }
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
                if (res.data[i] !== null) {
                    $("#add-fujianSelect1").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect2").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect3").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect4").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#add-fujianSelect11").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect21").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect31").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect41").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#add-fujianSelect12").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect22").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect32").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect42").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#add-fujianSelect13").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect23").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect33").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect43").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#add-fujianSelect14").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect24").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect34").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect44").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#add-fujianSelect15").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect25").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect35").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect45").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#add-fujianSelect16").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect26").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect36").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect46").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#add-fujianSelect17").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect27").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect37").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect47").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#add-fujianSelect18").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect28").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect38").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect48").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#add-fujianSelect19").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect29").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect39").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect49").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#add-fujianSelect110").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect210").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect310").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect410").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#add-fujianSelect111").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect211").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect311").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect411").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#add-fujianSelect112").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect212").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect312").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect412").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#add-fujianSelect113").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect213").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect313").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect413").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#add-fujianSelect114").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect214").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect314").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect414").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#add-fujianSelect115").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect215").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect315").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect415").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#add-fujianSelect116").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect216").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect316").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect416").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#add-fujianSelect117").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect217").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect317").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect417").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#add-fujianSelect118").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect218").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect318").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect418").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#add-fujianSelect119").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect219").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect319").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#add-fujianSelect419").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#update-fujianSelect1").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect2").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect3").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect4").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#update-fujianSelect11").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect21").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect31").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect41").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#update-fujianSelect12").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect22").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect32").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect42").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#update-fujianSelect13").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect23").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect33").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect43").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#update-fujianSelect14").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect24").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect34").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect44").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#update-fujianSelect15").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect25").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect35").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect45").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#update-fujianSelect16").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect26").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect36").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect46").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#update-fujianSelect17").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect27").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect37").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect47").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#update-fujianSelect18").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect28").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect38").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect48").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#update-fujianSelect19").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect29").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect39").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect49").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#update-fujianSelect110").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect210").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect310").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect410").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#update-fujianSelect111").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect211").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect311").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect411").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#update-fujianSelect112").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect212").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect312").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect412").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#update-fujianSelect113").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect213").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect313").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect413").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#update-fujianSelect114").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect214").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect314").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect414").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#update-fujianSelect115").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect215").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect315").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect415").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#update-fujianSelect116").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect216").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect316").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect416").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#update-fujianSelect117").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect217").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect317").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect417").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#update-fujianSelect118").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect218").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect318").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect418").append("<option>" + res.data[i].fjpz + "</option>");

                    $("#update-fujianSelect119").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect219").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect319").append("<option>" + res.data[i].fjpz + "</option>");
                    $("#update-fujianSelect419").append("<option>" + res.data[i].fjpz + "</option>");
                }
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

                $("#add-pinpaiSelect11").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect21").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect31").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect41").append("<option>" + res.data[i].jlpp + "</option>");

                $("#add-pinpaiSelect12").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect22").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect32").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect42").append("<option>" + res.data[i].jlpp + "</option>");

                $("#add-pinpaiSelect13").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect23").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect33").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect43").append("<option>" + res.data[i].jlpp + "</option>");

                $("#add-pinpaiSelect14").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect24").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect34").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect44").append("<option>" + res.data[i].jlpp + "</option>");

                $("#add-pinpaiSelect15").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect25").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect35").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect45").append("<option>" + res.data[i].jlpp + "</option>");

                $("#add-pinpaiSelect16").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect26").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect36").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect46").append("<option>" + res.data[i].jlpp + "</option>");

                $("#add-pinpaiSelect17").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect27").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect37").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect47").append("<option>" + res.data[i].jlpp + "</option>");

                $("#add-pinpaiSelect18").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect28").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect38").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect48").append("<option>" + res.data[i].jlpp + "</option>");

                $("#add-pinpaiSelect19").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect29").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect39").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect49").append("<option>" + res.data[i].jlpp + "</option>");

                $("#add-pinpaiSelect110").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect210").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect310").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect410").append("<option>" + res.data[i].jlpp + "</option>");

                $("#add-pinpaiSelect111").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect211").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect311").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect411").append("<option>" + res.data[i].jlpp + "</option>");

                $("#add-pinpaiSelect112").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect212").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect312").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect412").append("<option>" + res.data[i].jlpp + "</option>");

                $("#add-pinpaiSelect113").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect213").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect313").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect413").append("<option>" + res.data[i].jlpp + "</option>");

                $("#add-pinpaiSelect114").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect214").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect314").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect414").append("<option>" + res.data[i].jlpp + "</option>");

                $("#add-pinpaiSelect115").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect215").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect315").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect415").append("<option>" + res.data[i].jlpp + "</option>");

                $("#add-pinpaiSelect116").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect216").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect316").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect416").append("<option>" + res.data[i].jlpp + "</option>");

                $("#add-pinpaiSelect117").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect217").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect317").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect417").append("<option>" + res.data[i].jlpp + "</option>");

                $("#add-pinpaiSelect118").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect218").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect318").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect418").append("<option>" + res.data[i].jlpp + "</option>");

                $("#add-pinpaiSelect119").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect219").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect319").append("<option>" + res.data[i].jlpp + "</option>");
                $("#add-pinpaiSelect419").append("<option>" + res.data[i].jlpp + "</option>");

                $("#update-pinpaiSelect1").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect2").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect3").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect4").append("<option>" + res.data[i].jlpp + "</option>");

                $("#update-pinpaiSelect11").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect21").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect31").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect41").append("<option>" + res.data[i].jlpp + "</option>");

                $("#update-pinpaiSelect12").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect22").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect32").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect42").append("<option>" + res.data[i].jlpp + "</option>");

                $("#update-pinpaiSelect13").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect23").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect33").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect43").append("<option>" + res.data[i].jlpp + "</option>");

                $("#update-pinpaiSelect14").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect24").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect34").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect44").append("<option>" + res.data[i].jlpp + "</option>");

                $("#update-pinpaiSelect15").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect25").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect35").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect45").append("<option>" + res.data[i].jlpp + "</option>");

                $("#update-pinpaiSelect16").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect26").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect36").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect46").append("<option>" + res.data[i].jlpp + "</option>");

                $("#update-pinpaiSelect17").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect27").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect37").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect47").append("<option>" + res.data[i].jlpp + "</option>");

                $("#update-pinpaiSelect18").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect28").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect38").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect48").append("<option>" + res.data[i].jlpp + "</option>");

                $("#update-pinpaiSelect19").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect29").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect39").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect49").append("<option>" + res.data[i].jlpp + "</option>");

                $("#update-pinpaiSelect110").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect210").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect310").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect410").append("<option>" + res.data[i].jlpp + "</option>");

                $("#update-pinpaiSelect111").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect211").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect311").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect411").append("<option>" + res.data[i].jlpp + "</option>");

                $("#update-pinpaiSelect112").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect212").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect312").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect412").append("<option>" + res.data[i].jlpp + "</option>");

                $("#update-pinpaiSelect113").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect213").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect313").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect413").append("<option>" + res.data[i].jlpp + "</option>");

                $("#update-pinpaiSelect114").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect214").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect314").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect414").append("<option>" + res.data[i].jlpp + "</option>");

                $("#update-pinpaiSelect115").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect215").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect315").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect415").append("<option>" + res.data[i].jlpp + "</option>");

                $("#update-pinpaiSelect116").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect216").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect316").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect416").append("<option>" + res.data[i].jlpp + "</option>");

                $("#update-pinpaiSelect117").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect217").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect317").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect417").append("<option>" + res.data[i].jlpp + "</option>");

                $("#update-pinpaiSelect118").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect218").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect318").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect418").append("<option>" + res.data[i].jlpp + "</option>");

                $("#update-pinpaiSelect119").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect219").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect319").append("<option>" + res.data[i].jlpp + "</option>");
                $("#update-pinpaiSelect419").append("<option>" + res.data[i].jlpp + "</option>");
            }
        }
    })
}

$(document).ready(function () {
    $('#add-kaijiaolian').on('change', function () {
        var selectedValue = $(this).val();



        if (selectedValue == '开二孔') {
            $("#add-jiaolian3SelectLeft").hide();
            $("#add-jiaolian3InsertLeft").hide();
            $("#add-jiaolian3SelectRight").hide();
            $("#add-jiaolian3InsertRight").hide();

            $("#add-jiaolian4SelectLeft").hide();
            $("#add-jiaolian4InsertLeft").hide();
            $("#add-jiaolian4SelectRight").hide();
            $("#add-jiaolian4InsertRight").hide();

            $("#add-jiaolian5SelectLeft").hide();
            $("#add-jiaolian5InsertLeft").hide();
            $("#add-jiaolian5SelectRight").hide();
            $("#add-jiaolian5InsertRight").hide();

            $("#add-jiaolian6SelectLeft").hide();
            $("#add-jiaolian6InsertLeft").hide();
            $("#add-jiaolian6SelectRight").hide();
            $("#add-jiaolian6InsertRight").hide();

        }
        if (selectedValue == '开三孔') {
            $("#add-jiaolian3SelectLeft").show();
            $("#add-jiaolian3InsertLeft").show();
            $("#add-jiaolian3SelectRight").show();
            $("#add-jiaolian3InsertRight").show();

            $("#add-jiaolian4SelectLeft").hide();
            $("#add-jiaolian4InsertLeft").hide();
            $("#add-jiaolian4SelectRight").hide();
            $("#add-jiaolian4InsertRight").hide();

            $("#add-jiaolian5SelectLeft").hide();
            $("#add-jiaolian5InsertLeft").hide();
            $("#add-jiaolian5SelectRight").hide();
            $("#add-jiaolian5InsertRight").hide();

            $("#add-jiaolian6SelectLeft").hide();
            $("#add-jiaolian6InsertLeft").hide();
            $("#add-jiaolian6SelectRight").hide();
            $("#add-jiaolian6InsertRight").hide();


        }
        if (selectedValue == '开四孔') {
            $("#add-jiaolian3SelectLeft").show();
            $("#add-jiaolian3InsertLeft").show();
            $("#add-jiaolian3SelectRight").show();
            $("#add-jiaolian3InsertRight").show();

            $("#add-jiaolian4SelectLeft").show();
            $("#add-jiaolian4InsertLeft").show();
            $("#add-jiaolian4SelectRight").show();
            $("#add-jiaolian4InsertRight").show();

            $("#add-jiaolian5SelectLeft").hide();
            $("#add-jiaolian5InsertLeft").hide();
            $("#add-jiaolian5SelectRight").hide();
            $("#add-jiaolian5InsertRight").hide();

            $("#add-jiaolian6SelectLeft").hide();
            $("#add-jiaolian6InsertLeft").hide();
            $("#add-jiaolian6SelectRight").hide();
            $("#add-jiaolian6InsertRight").hide();
        }
        if (selectedValue == '开五孔') {
            $("#add-jiaolian3SelectLeft").show();
            $("#add-jiaolian3InsertLeft").show();
            $("#add-jiaolian3SelectRight").show();
            $("#add-jiaolian3InsertRight").show();

            $("#add-jiaolian4SelectLeft").show();
            $("#add-jiaolian4InsertLeft").show();
            $("#add-jiaolian4SelectRight").show();
            $("#add-jiaolian4InsertRight").show();

            $("#add-jiaolian5SelectLeft").show();
            $("#add-jiaolian5InsertLeft").show();
            $("#add-jiaolian5SelectRight").show();
            $("#add-jiaolian5InsertRight").show();

            $("#add-jiaolian6SelectLeft").hide();
            $("#add-jiaolian6InsertLeft").hide();
            $("#add-jiaolian6SelectRight").hide();
            $("#add-jiaolian6InsertRight").hide();
        }
        if (selectedValue == '开六孔') {
            $("#add-jiaolian3SelectLeft").show();
            $("#add-jiaolian3InsertLeft").show();
            $("#add-jiaolian3SelectRight").show();
            $("#add-jiaolian3InsertRight").show();

            $("#add-jiaolian4SelectLeft").show();
            $("#add-jiaolian4InsertLeft").show();
            $("#add-jiaolian4SelectRight").show();
            $("#add-jiaolian4InsertRight").show();

            $("#add-jiaolian5SelectLeft").show();
            $("#add-jiaolian5InsertLeft").show();
            $("#add-jiaolian5SelectRight").show();
            $("#add-jiaolian5InsertRight").show();

            $("#add-jiaolian6SelectLeft").show();
            $("#add-jiaolian6InsertLeft").show();
            $("#add-jiaolian6SelectRight").show();
            $("#add-jiaolian6InsertRight").show();
        }
    })

    $('#add-kaijiaolian1').on('change', function () {
        var selectedValue1 = $(this).val();
        if (selectedValue1 == '开二孔') {
            $("#add-jiaolian3SelectLeft1").hide();
            $("#add-jiaolian3InsertLeft1").hide();
            $("#add-jiaolian3SelectRight1").hide();
            $("#add-jiaolian3InsertRight1").hide();

            $("#add-jiaolian4SelectLeft1").hide();
            $("#add-jiaolian4InsertLeft1").hide();
            $("#add-jiaolian4SelectRight1").hide();
            $("#add-jiaolian4InsertRight1").hide();

            $("#add-jiaolian5SelectLeft1").hide();
            $("#add-jiaolian5InsertLeft1").hide();
            $("#add-jiaolian5SelectRight1").hide();
            $("#add-jiaolian5InsertRight1").hide();

            $("#add-jiaolian6SelectLeft1").hide();
            $("#add-jiaolian6InsertLeft1").hide();
            $("#add-jiaolian6SelectRight1").hide();
            $("#add-jiaolian6InsertRight1").hide();
           
        }
        if (selectedValue1 == '开三孔') {
            $("#add-jiaolian3SelectLeft1").show();
            $("#add-jiaolian3InsertLeft1").show();
            $("#add-jiaolian3SelectRight1").show();
            $("#add-jiaolian3InsertRight1").show();

            $("#add-jiaolian4SelectLeft1").hide();
            $("#add-jiaolian4InsertLeft1").hide();
            $("#add-jiaolian4SelectRight1").hide();
            $("#add-jiaolian4InsertRight1").hide();

            $("#add-jiaolian5SelectLeft1").hide();
            $("#add-jiaolian5InsertLeft1").hide();
            $("#add-jiaolian5SelectRight1").hide();
            $("#add-jiaolian5InsertRight1").hide();

            $("#add-jiaolian6SelectLeft1").hide();
            $("#add-jiaolian6InsertLeft1").hide();
            $("#add-jiaolian6SelectRight1").hide();
            $("#add-jiaolian6InsertRight1").hide();
        }
        if (selectedValue1 == '开四孔') {
            $("#add-jiaolian3SelectLeft1").show();
            $("#add-jiaolian3InsertLeft1").show();
            $("#add-jiaolian3SelectRight1").show();
            $("#add-jiaolian3InsertRight1").show();

            $("#add-jiaolian4SelectLeft1").show();
            $("#add-jiaolian4InsertLeft1").show();
            $("#add-jiaolian4SelectRight1").show();
            $("#add-jiaolian4InsertRight1").show();

            $("#add-jiaolian5SelectLeft1").hide();
            $("#add-jiaolian5InsertLeft1").hide();
            $("#add-jiaolian5SelectRight1").hide();
            $("#add-jiaolian5InsertRight1").hide();

            $("#add-jiaolian6SelectLeft1").hide();
            $("#add-jiaolian6InsertLeft1").hide();
            $("#add-jiaolian6SelectRight1").hide();
            $("#add-jiaolian6InsertRight1").hide();
        }
        if (selectedValue1 == '开五孔') {
            $("#add-jiaolian3SelectLeft1").show();
            $("#add-jiaolian3InsertLeft1").show();
            $("#add-jiaolian3SelectRight1").show();
            $("#add-jiaolian3InsertRight1").show();

            $("#add-jiaolian4SelectLeft1").show();
            $("#add-jiaolian4InsertLeft1").show();
            $("#add-jiaolian4SelectRight1").show();
            $("#add-jiaolian4InsertRight1").show();

            $("#add-jiaolian5SelectLeft1").show();
            $("#add-jiaolian5InsertLeft1").show();
            $("#add-jiaolian5SelectRight1").show();
            $("#add-jiaolian5InsertRight1").show();

            $("#add-jiaolian6SelectLeft1").hide();
            $("#add-jiaolian6InsertLeft1").hide();
            $("#add-jiaolian6SelectRight1").hide();
            $("#add-jiaolian6InsertRight1").hide();
        }
        if (selectedValue1 == '开六孔') {
            $("#add-jiaolian3SelectLeft1").show();
            $("#add-jiaolian3InsertLeft1").show();
            $("#add-jiaolian3SelectRight1").show();
            $("#add-jiaolian3InsertRight1").show();

            $("#add-jiaolian4SelectLeft1").show();
            $("#add-jiaolian4InsertLeft1").show();
            $("#add-jiaolian4SelectRight1").show();
            $("#add-jiaolian4InsertRight1").show();

            $("#add-jiaolian5SelectLeft1").show();
            $("#add-jiaolian5InsertLeft1").show();
            $("#add-jiaolian5SelectRight1").show();
            $("#add-jiaolian5InsertRight1").show();

            $("#add-jiaolian6SelectLeft1").show();
            $("#add-jiaolian6InsertLeft1").show();
            $("#add-jiaolian6SelectRight1").show();
            $("#add-jiaolian6InsertRight1").show();
        }
    })

    $('#add-kaijiaolian2').on('change', function () {
        var selectedValue2 = $(this).val();
        if (selectedValue2 == '开二孔') {
            $("#add-jiaolian3SelectLeft2").hide();
            $("#add-jiaolian3InsertLeft2").hide();
            $("#add-jiaolian3SelectRight2").hide();
            $("#add-jiaolian3InsertRight2").hide();

            $("#add-jiaolian4SelectLeft2").hide();
            $("#add-jiaolian4InsertLeft2").hide();
            $("#add-jiaolian4SelectRight2").hide();
            $("#add-jiaolian4InsertRight2").hide();

            $("#add-jiaolian5SelectLeft2").hide();
            $("#add-jiaolian5InsertLeft2").hide();
            $("#add-jiaolian5SelectRight2").hide();
            $("#add-jiaolian5InsertRight2").hide();

            $("#add-jiaolian6SelectLeft2").hide();
            $("#add-jiaolian6InsertLeft2").hide();
            $("#add-jiaolian6SelectRight2").hide();
            $("#add-jiaolian6InsertRight2").hide();

        }
        if (selectedValue2 == '开三孔') {
            $("#add-jiaolian3SelectLeft2").show();
            $("#add-jiaolian3InsertLeft2").show();
            $("#add-jiaolian3SelectRight2").show();
            $("#add-jiaolian3InsertRight2").show();

            $("#add-jiaolian4SelectLeft2").hide();
            $("#add-jiaolian4InsertLeft2").hide();
            $("#add-jiaolian4SelectRight2").hide();
            $("#add-jiaolian4InsertRight2").hide();

            $("#add-jiaolian5SelectLeft2").hide();
            $("#add-jiaolian5InsertLeft2").hide();
            $("#add-jiaolian5SelectRight2").hide();
            $("#add-jiaolian5InsertRight2").hide();

            $("#add-jiaolian6SelectLeft2").hide();
            $("#add-jiaolian6InsertLeft2").hide();
            $("#add-jiaolian6SelectRight2").hide();
            $("#add-jiaolian6InsertRight2").hide();
        }
        if (selectedValue2 == '开四孔') {
            $("#add-jiaolian3SelectLeft2").show();
            $("#add-jiaolian3InsertLeft2").show();
            $("#add-jiaolian3SelectRight2").show();
            $("#add-jiaolian3InsertRight2").show();

            $("#add-jiaolian4SelectLeft2").show();
            $("#add-jiaolian4InsertLeft2").show();
            $("#add-jiaolian4SelectRight2").show();
            $("#add-jiaolian4InsertRight2").show();

            $("#add-jiaolian5SelectLeft2").hide();
            $("#add-jiaolian5InsertLeft2").hide();
            $("#add-jiaolian5SelectRight2").hide();
            $("#add-jiaolian5InsertRight2").hide();

            $("#add-jiaolian6SelectLeft2").hide();
            $("#add-jiaolian6InsertLeft2").hide();
            $("#add-jiaolian6SelectRight2").hide();
            $("#add-jiaolian6InsertRight2").hide();
        }
        if (selectedValue2 == '开五孔') {
            $("#add-jiaolian3SelectLeft2").show();
            $("#add-jiaolian3InsertLeft2").show();
            $("#add-jiaolian3SelectRight2").show();
            $("#add-jiaolian3InsertRight2").show();

            $("#add-jiaolian4SelectLeft2").show();
            $("#add-jiaolian4InsertLeft2").show();
            $("#add-jiaolian4SelectRight2").show();
            $("#add-jiaolian4InsertRight2").show();

            $("#add-jiaolian5SelectLeft2").show();
            $("#add-jiaolian5InsertLeft2").show();
            $("#add-jiaolian5SelectRight2").show();
            $("#add-jiaolian5InsertRight2").show();

            $("#add-jiaolian6SelectLeft2").hide();
            $("#add-jiaolian6InsertLeft2").hide();
            $("#add-jiaolian6SelectRight2").hide();
            $("#add-jiaolian6InsertRight2").hide();
        }
        if (selectedValue2 == '开六孔') {
            $("#add-jiaolian3SelectLeft2").show();
            $("#add-jiaolian3InsertLeft2").show();
            $("#add-jiaolian3SelectRight2").show();
            $("#add-jiaolian3InsertRight2").show();

            $("#add-jiaolian4SelectLeft2").show();
            $("#add-jiaolian4InsertLeft2").show();
            $("#add-jiaolian4SelectRight2").show();
            $("#add-jiaolian4InsertRight2").show();

            $("#add-jiaolian5SelectLeft2").show();
            $("#add-jiaolian5InsertLeft2").show();
            $("#add-jiaolian5SelectRight2").show();
            $("#add-jiaolian5InsertRight2").show();

            $("#add-jiaolian6SelectLeft2").show();
            $("#add-jiaolian6InsertLeft2").show();
            $("#add-jiaolian6SelectRight2").show();
            $("#add-jiaolian6InsertRight2").show();
        }
    })

    $('#add-kaijiaolian3').on('change', function () {
        var selectedValue3 = $(this).val();
        if (selectedValue3 == '开二孔') {
            $("#add-jiaolian3SelectLeft3").hide();
            $("#add-jiaolian3InsertLeft3").hide();
            $("#add-jiaolian3SelectRight3").hide();
            $("#add-jiaolian3InsertRight3").hide();

            $("#add-jiaolian4SelectLeft3").hide();
            $("#add-jiaolian4InsertLeft3").hide();
            $("#add-jiaolian4SelectRight3").hide();
            $("#add-jiaolian4InsertRight3").hide();

            $("#add-jiaolian5SelectLeft3").hide();
            $("#add-jiaolian5InsertLeft3").hide();
            $("#add-jiaolian5SelectRight3").hide();
            $("#add-jiaolian5InsertRight3").hide();

            $("#add-jiaolian6SelectLeft3").hide();
            $("#add-jiaolian6InsertLeft3").hide();
            $("#add-jiaolian6SelectRight3").hide();
            $("#add-jiaolian6InsertRight3").hide();

        }
        if (selectedValue3 == '开三孔') {
            $("#add-jiaolian3SelectLeft3").show();
            $("#add-jiaolian3InsertLeft3").show();
            $("#add-jiaolian3SelectRight3").show();
            $("#add-jiaolian3InsertRight3").show();

            $("#add-jiaolian4SelectLeft3").hide();
            $("#add-jiaolian4InsertLeft3").hide();
            $("#add-jiaolian4SelectRight3").hide();
            $("#add-jiaolian4InsertRight3").hide();

            $("#add-jiaolian5SelectLeft3").hide();
            $("#add-jiaolian5InsertLeft3").hide();
            $("#add-jiaolian5SelectRight3").hide();
            $("#add-jiaolian5InsertRight3").hide();

            $("#add-jiaolian6SelectLeft3").hide();
            $("#add-jiaolian6InsertLeft3").hide();
            $("#add-jiaolian6SelectRight3").hide();
            $("#add-jiaolian6InsertRight3").hide();
        }
        if (selectedValue3 == '开四孔') {
            $("#add-jiaolian3SelectLeft3").show();
            $("#add-jiaolian3InsertLeft3").show();
            $("#add-jiaolian3SelectRight3").show();
            $("#add-jiaolian3InsertRight3").show();

            $("#add-jiaolian4SelectLeft3").show();
            $("#add-jiaolian4InsertLeft3").show();
            $("#add-jiaolian4SelectRight3").show();
            $("#add-jiaolian4InsertRight3").show();

            $("#add-jiaolian5SelectLeft3").hide();
            $("#add-jiaolian5InsertLeft3").hide();
            $("#add-jiaolian5SelectRight3").hide();
            $("#add-jiaolian5InsertRight3").hide();

            $("#add-jiaolian6SelectLeft3").hide();
            $("#add-jiaolian6InsertLeft3").hide();
            $("#add-jiaolian6SelectRight3").hide();
            $("#add-jiaolian6InsertRight3").hide();
        }
        if (selectedValue3 == '开五孔') {
            $("#add-jiaolian3SelectLeft3").show();
            $("#add-jiaolian3InsertLeft3").show();
            $("#add-jiaolian3SelectRight3").show();
            $("#add-jiaolian3InsertRight3").show();

            $("#add-jiaolian4SelectLeft3").show();
            $("#add-jiaolian4InsertLeft3").show();
            $("#add-jiaolian4SelectRight3").show();
            $("#add-jiaolian4InsertRight3").show();

            $("#add-jiaolian5SelectLeft3").show();
            $("#add-jiaolian5InsertLeft3").show();
            $("#add-jiaolian5SelectRight3").show();
            $("#add-jiaolian5InsertRight3").show();

            $("#add-jiaolian6SelectLeft3").hide();
            $("#add-jiaolian6InsertLeft3").hide();
            $("#add-jiaolian6SelectRight3").hide();
            $("#add-jiaolian6InsertRight3").hide();
        }
        if (selectedValue3 == '开六孔') {
            $("#add-jiaolian3SelectLeft3").show();
            $("#add-jiaolian3InsertLeft3").show();
            $("#add-jiaolian3SelectRight3").show();
            $("#add-jiaolian3InsertRight3").show();

            $("#add-jiaolian4SelectLeft3").show();
            $("#add-jiaolian4InsertLeft3").show();
            $("#add-jiaolian4SelectRight3").show();
            $("#add-jiaolian4InsertRight3").show();

            $("#add-jiaolian5SelectLeft3").show();
            $("#add-jiaolian5InsertLeft3").show();
            $("#add-jiaolian5SelectRight3").show();
            $("#add-jiaolian5InsertRight3").show();

            $("#add-jiaolian6SelectLeft3").show();
            $("#add-jiaolian6InsertLeft3").show();
            $("#add-jiaolian6SelectRight3").show();
            $("#add-jiaolian6InsertRight3").show();
        }
    })

    $('#add-kaijiaolian4').on('change', function () {
        var selectedValue4 = $(this).val();
        if (selectedValue4 == '开二孔') {
            $("#add-jiaolian3SelectLeft4").hide();
            $("#add-jiaolian3InsertLeft4").hide();
            $("#add-jiaolian3SelectRight4").hide();
            $("#add-jiaolian3InsertRight4").hide();

            $("#add-jiaolian4SelectLeft4").hide();
            $("#add-jiaolian4InsertLeft4").hide();
            $("#add-jiaolian4SelectRight4").hide();
            $("#add-jiaolian4InsertRight4").hide();

            $("#add-jiaolian5SelectLeft4").hide();
            $("#add-jiaolian5InsertLeft4").hide();
            $("#add-jiaolian5SelectRight4").hide();
            $("#add-jiaolian5InsertRight4").hide();

            $("#add-jiaolian6SelectLeft4").hide();
            $("#add-jiaolian6InsertLeft4").hide();
            $("#add-jiaolian6SelectRight4").hide();
            $("#add-jiaolian6InsertRight4").hide();

        }
        if (selectedValue4 == '开三孔') {
            $("#add-jiaolian3SelectLeft4").show();
            $("#add-jiaolian3InsertLeft4").show();
            $("#add-jiaolian3SelectRight4").show();
            $("#add-jiaolian3InsertRight4").show();

            $("#add-jiaolian4SelectLeft4").hide();
            $("#add-jiaolian4InsertLeft4").hide();
            $("#add-jiaolian4SelectRight4").hide();
            $("#add-jiaolian4InsertRight4").hide();

            $("#add-jiaolian5SelectLeft4").hide();
            $("#add-jiaolian5InsertLeft4").hide();
            $("#add-jiaolian5SelectRight4").hide();
            $("#add-jiaolian5InsertRight4").hide();

            $("#add-jiaolian6SelectLeft4").hide();
            $("#add-jiaolian6InsertLeft4").hide();
            $("#add-jiaolian6SelectRight4").hide();
            $("#add-jiaolian6InsertRight4").hide();
        }
        if (selectedValue4 == '开四孔') {
            $("#add-jiaolian3SelectLeft4").show();
            $("#add-jiaolian3InsertLeft4").show();
            $("#add-jiaolian3SelectRight4").show();
            $("#add-jiaolian3InsertRight4").show();

            $("#add-jiaolian4SelectLeft4").show();
            $("#add-jiaolian4InsertLeft4").show();
            $("#add-jiaolian4SelectRight4").show();
            $("#add-jiaolian4InsertRight4").show();

            $("#add-jiaolian5SelectLeft4").hide();
            $("#add-jiaolian5InsertLeft4").hide();
            $("#add-jiaolian5SelectRight4").hide();
            $("#add-jiaolian5InsertRight4").hide();

            $("#add-jiaolian6SelectLeft4").hide();
            $("#add-jiaolian6InsertLeft4").hide();
            $("#add-jiaolian6SelectRight4").hide();
            $("#add-jiaolian6InsertRight4").hide();
        }
        if (selectedValue4 == '开五孔') {
            $("#add-jiaolian3SelectLeft4").show();
            $("#add-jiaolian3InsertLeft4").show();
            $("#add-jiaolian3SelectRight4").show();
            $("#add-jiaolian3InsertRight4").show();

            $("#add-jiaolian4SelectLeft4").show();
            $("#add-jiaolian4InsertLeft4").show();
            $("#add-jiaolian4SelectRight4").show();
            $("#add-jiaolian4InsertRight4").show();

            $("#add-jiaolian5SelectLeft4").show();
            $("#add-jiaolian5InsertLeft4").show();
            $("#add-jiaolian5SelectRight4").show();
            $("#add-jiaolian5InsertRight4").show();

            $("#add-jiaolian6SelectLeft4").hide();
            $("#add-jiaolian6InsertLeft4").hide();
            $("#add-jiaolian6SelectRight4").hide();
            $("#add-jiaolian6InsertRight4").hide();
        }
        if (selectedValue4 == '开六孔') {
            $("#add-jiaolian3SelectLeft4").show();
            $("#add-jiaolian3InsertLeft4").show();
            $("#add-jiaolian3SelectRight4").show();
            $("#add-jiaolian3InsertRight4").show();

            $("#add-jiaolian4SelectLeft4").show();
            $("#add-jiaolian4InsertLeft4").show();
            $("#add-jiaolian4SelectRight4").show();
            $("#add-jiaolian4InsertRight4").show();

            $("#add-jiaolian5SelectLeft4").show();
            $("#add-jiaolian5InsertLeft4").show();
            $("#add-jiaolian5SelectRight4").show();
            $("#add-jiaolian5InsertRight4").show();

            $("#add-jiaolian6SelectLeft4").show();
            $("#add-jiaolian6InsertLeft4").show();
            $("#add-jiaolian6SelectRight4").show();
            $("#add-jiaolian6InsertRight4").show();
        }
    })

    $('#add-kaijiaolian5').on('change', function () {
        var selectedValue5 = $(this).val();
        if (selectedValue5 == '开二孔') {
            $("#add-jiaolian3SelectLeft5").hide();
            $("#add-jiaolian3InsertLeft5").hide();
            $("#add-jiaolian3SelectRight5").hide();
            $("#add-jiaolian3InsertRight5").hide();

            $("#add-jiaolian4SelectLeft5").hide();
            $("#add-jiaolian4InsertLeft5").hide();
            $("#add-jiaolian4SelectRight5").hide();
            $("#add-jiaolian4InsertRight5").hide();

            $("#add-jiaolian5SelectLeft5").hide();
            $("#add-jiaolian5InsertLeft5").hide();
            $("#add-jiaolian5SelectRight5").hide();
            $("#add-jiaolian5InsertRight5").hide();

            $("#add-jiaolian6SelectLeft5").hide();
            $("#add-jiaolian6InsertLeft5").hide();
            $("#add-jiaolian6SelectRight5").hide();
            $("#add-jiaolian6InsertRight5").hide();

        }
        if (selectedValue5 == '开三孔') {
            $("#add-jiaolian3SelectLeft5").show();
            $("#add-jiaolian3InsertLeft5").show();
            $("#add-jiaolian3SelectRight5").show();
            $("#add-jiaolian3InsertRight5").show();

            $("#add-jiaolian4SelectLeft5").hide();
            $("#add-jiaolian4InsertLeft5").hide();
            $("#add-jiaolian4SelectRight5").hide();
            $("#add-jiaolian4InsertRight5").hide();

            $("#add-jiaolian5SelectLeft5").hide();
            $("#add-jiaolian5InsertLeft5").hide();
            $("#add-jiaolian5SelectRight5").hide();
            $("#add-jiaolian5InsertRight5").hide();

            $("#add-jiaolian6SelectLeft5").hide();
            $("#add-jiaolian6InsertLeft5").hide();
            $("#add-jiaolian6SelectRight5").hide();
            $("#add-jiaolian6InsertRight5").hide();
        }
        if (selectedValue5 == '开四孔') {
            $("#add-jiaolian3SelectLeft5").show();
            $("#add-jiaolian3InsertLeft5").show();
            $("#add-jiaolian3SelectRight5").show();
            $("#add-jiaolian3InsertRight5").show();

            $("#add-jiaolian4SelectLeft5").show();
            $("#add-jiaolian4InsertLeft5").show();
            $("#add-jiaolian4SelectRight5").show();
            $("#add-jiaolian4InsertRight5").show();

            $("#add-jiaolian5SelectLeft5").hide();
            $("#add-jiaolian5InsertLeft5").hide();
            $("#add-jiaolian5SelectRight5").hide();
            $("#add-jiaolian5InsertRight5").hide();

            $("#add-jiaolian6SelectLeft5").hide();
            $("#add-jiaolian6InsertLeft5").hide();
            $("#add-jiaolian6SelectRight5").hide();
            $("#add-jiaolian6InsertRight5").hide();
        }
        if (selectedValue5 == '开五孔') {
            $("#add-jiaolian3SelectLeft5").show();
            $("#add-jiaolian3InsertLeft5").show();
            $("#add-jiaolian3SelectRight5").show();
            $("#add-jiaolian3InsertRight5").show();

            $("#add-jiaolian4SelectLeft5").show();
            $("#add-jiaolian4InsertLeft5").show();
            $("#add-jiaolian4SelectRight5").show();
            $("#add-jiaolian4InsertRight5").show();

            $("#add-jiaolian5SelectLeft5").show();
            $("#add-jiaolian5InsertLeft5").show();
            $("#add-jiaolian5SelectRight5").show();
            $("#add-jiaolian5InsertRight5").show();

            $("#add-jiaolian6SelectLeft5").hide();
            $("#add-jiaolian6InsertLeft5").hide();
            $("#add-jiaolian6SelectRight5").hide();
            $("#add-jiaolian6InsertRight5").hide();
        }
        if (selectedValue5 == '开六孔') {
            $("#add-jiaolian3SelectLeft5").show();
            $("#add-jiaolian3InsertLeft5").show();
            $("#add-jiaolian3SelectRight5").show();
            $("#add-jiaolian3InsertRight5").show();

            $("#add-jiaolian4SelectLeft5").show();
            $("#add-jiaolian4InsertLeft5").show();
            $("#add-jiaolian4SelectRight5").show();
            $("#add-jiaolian4InsertRight5").show();

            $("#add-jiaolian5SelectLeft5").show();
            $("#add-jiaolian5InsertLeft5").show();
            $("#add-jiaolian5SelectRight5").show();
            $("#add-jiaolian5InsertRight5").show();

            $("#add-jiaolian6SelectLeft5").show();
            $("#add-jiaolian6InsertLeft5").show();
            $("#add-jiaolian6SelectRight5").show();
            $("#add-jiaolian6InsertRight5").show();
        }
    })

    $('#add-kaijiaolian6').on('change', function () {
        var selectedValue6 = $(this).val();
        if (selectedValue6 == '开二孔') {
            $("#add-jiaolian3SelectLeft6").hide();
            $("#add-jiaolian3InsertLeft6").hide();
            $("#add-jiaolian3SelectRight6").hide();
            $("#add-jiaolian3InsertRight6").hide();

            $("#add-jiaolian4SelectLeft6").hide();
            $("#add-jiaolian4InsertLeft6").hide();
            $("#add-jiaolian4SelectRight6").hide();
            $("#add-jiaolian4InsertRight6").hide();

            $("#add-jiaolian5SelectLeft6").hide();
            $("#add-jiaolian5InsertLeft6").hide();
            $("#add-jiaolian5SelectRight6").hide();
            $("#add-jiaolian5InsertRight6").hide();

            $("#add-jiaolian6SelectLeft6").hide();
            $("#add-jiaolian6InsertLeft6").hide();
            $("#add-jiaolian6SelectRight6").hide();
            $("#add-jiaolian6InsertRight6").hide();

        }
        if (selectedValue6 == '开三孔') {
            $("#add-jiaolian3SelectLeft6").show();
            $("#add-jiaolian3InsertLeft6").show();
            $("#add-jiaolian3SelectRight6").show();
            $("#add-jiaolian3InsertRight6").show();

            $("#add-jiaolian4SelectLeft6").hide();
            $("#add-jiaolian4InsertLeft6").hide();
            $("#add-jiaolian4SelectRight6").hide();
            $("#add-jiaolian4InsertRight6").hide();

            $("#add-jiaolian5SelectLeft6").hide();
            $("#add-jiaolian5InsertLeft6").hide();
            $("#add-jiaolian5SelectRight6").hide();
            $("#add-jiaolian5InsertRight6").hide();

            $("#add-jiaolian6SelectLeft6").hide();
            $("#add-jiaolian6InsertLeft6").hide();
            $("#add-jiaolian6SelectRight6").hide();
            $("#add-jiaolian6InsertRight6").hide();
        }
        if (selectedValue6 == '开四孔') {
            $("#add-jiaolian3SelectLeft6").show();
            $("#add-jiaolian3InsertLeft6").show();
            $("#add-jiaolian3SelectRight6").show();
            $("#add-jiaolian3InsertRight6").show();

            $("#add-jiaolian4SelectLeft6").show();
            $("#add-jiaolian4InsertLeft6").show();
            $("#add-jiaolian4SelectRight6").show();
            $("#add-jiaolian4InsertRight6").show();

            $("#add-jiaolian5SelectLeft6").hide();
            $("#add-jiaolian5InsertLeft6").hide();
            $("#add-jiaolian5SelectRight6").hide();
            $("#add-jiaolian5InsertRight6").hide();

            $("#add-jiaolian6SelectLeft6").hide();
            $("#add-jiaolian6InsertLeft6").hide();
            $("#add-jiaolian6SelectRight6").hide();
            $("#add-jiaolian6InsertRight6").hide();
        }
        if (selectedValue6 == '开五孔') {
            $("#add-jiaolian3SelectLeft6").show();
            $("#add-jiaolian3InsertLeft6").show();
            $("#add-jiaolian3SelectRight6").show();
            $("#add-jiaolian3InsertRight6").show();

            $("#add-jiaolian4SelectLeft6").show();
            $("#add-jiaolian4InsertLeft6").show();
            $("#add-jiaolian4SelectRight6").show();
            $("#add-jiaolian4InsertRight6").show();

            $("#add-jiaolian5SelectLeft6").show();
            $("#add-jiaolian5InsertLeft6").show();
            $("#add-jiaolian5SelectRight6").show();
            $("#add-jiaolian5InsertRight6").show();

            $("#add-jiaolian6SelectLeft6").hide();
            $("#add-jiaolian6InsertLeft6").hide();
            $("#add-jiaolian6SelectRight6").hide();
            $("#add-jiaolian6InsertRight6").hide();
        }
        if (selectedValue6 == '开六孔') {
            $("#add-jiaolian3SelectLeft6").show();
            $("#add-jiaolian3InsertLeft6").show();
            $("#add-jiaolian3SelectRight6").show();
            $("#add-jiaolian3InsertRight6").show();

            $("#add-jiaolian4SelectLeft6").show();
            $("#add-jiaolian4InsertLeft6").show();
            $("#add-jiaolian4SelectRight6").show();
            $("#add-jiaolian4InsertRight6").show();

            $("#add-jiaolian5SelectLeft6").show();
            $("#add-jiaolian5InsertLeft6").show();
            $("#add-jiaolian5SelectRight6").show();
            $("#add-jiaolian5InsertRight6").show();

            $("#add-jiaolian6SelectLeft6").show();
            $("#add-jiaolian6InsertLeft6").show();
            $("#add-jiaolian6SelectRight6").show();
            $("#add-jiaolian6InsertRight6").show();
        }
    })

    $('#add-kaijiaolian7').on('change', function () {
        var selectedValue7 = $(this).val();
        if (selectedValue7 == '开二孔') {
            $("#add-jiaolian3SelectLeft7").hide();
            $("#add-jiaolian3InsertLeft7").hide();
            $("#add-jiaolian3SelectRight7").hide();
            $("#add-jiaolian3InsertRight7").hide();

            $("#add-jiaolian4SelectLeft7").hide();
            $("#add-jiaolian4InsertLeft7").hide();
            $("#add-jiaolian4SelectRight7").hide();
            $("#add-jiaolian4InsertRight7").hide();

            $("#add-jiaolian5SelectLeft7").hide();
            $("#add-jiaolian5InsertLeft7").hide();
            $("#add-jiaolian5SelectRight7").hide();
            $("#add-jiaolian5InsertRight7").hide();

            $("#add-jiaolian6SelectLeft7").hide();
            $("#add-jiaolian6InsertLeft7").hide();
            $("#add-jiaolian6SelectRight7").hide();
            $("#add-jiaolian6InsertRight7").hide();

        }
        if (selectedValue7 == '开三孔') {
            $("#add-jiaolian3SelectLeft7").show();
            $("#add-jiaolian3InsertLeft7").show();
            $("#add-jiaolian3SelectRight7").show();
            $("#add-jiaolian3InsertRight7").show();

            $("#add-jiaolian4SelectLeft7").hide();
            $("#add-jiaolian4InsertLeft7").hide();
            $("#add-jiaolian4SelectRight7").hide();
            $("#add-jiaolian4InsertRight7").hide();

            $("#add-jiaolian5SelectLeft7").hide();
            $("#add-jiaolian5InsertLeft7").hide();
            $("#add-jiaolian5SelectRight7").hide();
            $("#add-jiaolian5InsertRight7").hide();

            $("#add-jiaolian6SelectLeft7").hide();
            $("#add-jiaolian6InsertLeft7").hide();
            $("#add-jiaolian6SelectRight7").hide();
            $("#add-jiaolian6InsertRight7").hide();
        }
        if (selectedValue7 == '开四孔') {
            $("#add-jiaolian3SelectLeft7").show();
            $("#add-jiaolian3InsertLeft7").show();
            $("#add-jiaolian3SelectRight7").show();
            $("#add-jiaolian3InsertRight7").show();

            $("#add-jiaolian4SelectLeft7").show();
            $("#add-jiaolian4InsertLeft7").show();
            $("#add-jiaolian4SelectRight7").show();
            $("#add-jiaolian4InsertRight7").show();

            $("#add-jiaolian5SelectLeft7").hide();
            $("#add-jiaolian5InsertLeft7").hide();
            $("#add-jiaolian5SelectRight7").hide();
            $("#add-jiaolian5InsertRight7").hide();

            $("#add-jiaolian6SelectLeft7").hide();
            $("#add-jiaolian6InsertLeft7").hide();
            $("#add-jiaolian6SelectRight7").hide();
            $("#add-jiaolian6InsertRight7").hide();
        }
        if (selectedValue7 == '开五孔') {
            $("#add-jiaolian3SelectLeft7").show();
            $("#add-jiaolian3InsertLeft7").show();
            $("#add-jiaolian3SelectRight7").show();
            $("#add-jiaolian3InsertRight7").show();

            $("#add-jiaolian4SelectLeft7").show();
            $("#add-jiaolian4InsertLeft7").show();
            $("#add-jiaolian4SelectRight7").show();
            $("#add-jiaolian4InsertRight7").show();

            $("#add-jiaolian5SelectLeft7").show();
            $("#add-jiaolian5InsertLeft7").show();
            $("#add-jiaolian5SelectRight7").show();
            $("#add-jiaolian5InsertRight7").show();

            $("#add-jiaolian6SelectLeft7").hide();
            $("#add-jiaolian6InsertLeft7").hide();
            $("#add-jiaolian6SelectRight7").hide();
            $("#add-jiaolian6InsertRight7").hide();
        }
        if (selectedValue7 == '开六孔') {
            $("#add-jiaolian3SelectLeft7").show();
            $("#add-jiaolian3InsertLeft7").show();
            $("#add-jiaolian3SelectRight7").show();
            $("#add-jiaolian3InsertRight7").show();

            $("#add-jiaolian4SelectLeft7").show();
            $("#add-jiaolian4InsertLeft7").show();
            $("#add-jiaolian4SelectRight7").show();
            $("#add-jiaolian4InsertRight7").show();

            $("#add-jiaolian5SelectLeft7").show();
            $("#add-jiaolian5InsertLeft7").show();
            $("#add-jiaolian5SelectRight7").show();
            $("#add-jiaolian5InsertRight7").show();

            $("#add-jiaolian6SelectLeft7").show();
            $("#add-jiaolian6InsertLeft7").show();
            $("#add-jiaolian6SelectRight7").show();
            $("#add-jiaolian6InsertRight7").show();
        }
    })

    $('#add-kaijiaolian8').on('change', function () {
        var selectedValue8 = $(this).val();
        if (selectedValue8 == '开二孔') {
            $("#add-jiaolian3SelectLeft8").hide();
            $("#add-jiaolian3InsertLeft8").hide();
            $("#add-jiaolian3SelectRight8").hide();
            $("#add-jiaolian3InsertRight8").hide();

            $("#add-jiaolian4SelectLeft8").hide();
            $("#add-jiaolian4InsertLeft8").hide();
            $("#add-jiaolian4SelectRight8").hide();
            $("#add-jiaolian4InsertRight8").hide();

            $("#add-jiaolian5SelectLeft8").hide();
            $("#add-jiaolian5InsertLeft8").hide();
            $("#add-jiaolian5SelectRight8").hide();
            $("#add-jiaolian5InsertRight8").hide();

            $("#add-jiaolian6SelectLeft8").hide();
            $("#add-jiaolian6InsertLeft8").hide();
            $("#add-jiaolian6SelectRight8").hide();
            $("#add-jiaolian6InsertRight8").hide();

        }
        if (selectedValue8 == '开三孔') {
            $("#add-jiaolian3SelectLeft8").show();
            $("#add-jiaolian3InsertLeft8").show();
            $("#add-jiaolian3SelectRight8").show();
            $("#add-jiaolian3InsertRight8").show();

            $("#add-jiaolian4SelectLeft8").hide();
            $("#add-jiaolian4InsertLeft8").hide();
            $("#add-jiaolian4SelectRight8").hide();
            $("#add-jiaolian4InsertRight8").hide();

            $("#add-jiaolian5SelectLeft8").hide();
            $("#add-jiaolian5InsertLeft8").hide();
            $("#add-jiaolian5SelectRight8").hide();
            $("#add-jiaolian5InsertRight8").hide();

            $("#add-jiaolian6SelectLeft8").hide();
            $("#add-jiaolian6InsertLeft8").hide();
            $("#add-jiaolian6SelectRight8").hide();
            $("#add-jiaolian6InsertRight8").hide();
        }
        if (selectedValue8 == '开四孔') {
            $("#add-jiaolian3SelectLeft8").show();
            $("#add-jiaolian3InsertLeft8").show();
            $("#add-jiaolian3SelectRight8").show();
            $("#add-jiaolian3InsertRight8").show();

            $("#add-jiaolian4SelectLeft8").show();
            $("#add-jiaolian4InsertLeft8").show();
            $("#add-jiaolian4SelectRight8").show();
            $("#add-jiaolian4InsertRight8").show();

            $("#add-jiaolian5SelectLeft8").hide();
            $("#add-jiaolian5InsertLeft8").hide();
            $("#add-jiaolian5SelectRight8").hide();
            $("#add-jiaolian5InsertRight8").hide();

            $("#add-jiaolian6SelectLeft8").hide();
            $("#add-jiaolian6InsertLeft8").hide();
            $("#add-jiaolian6SelectRight8").hide();
            $("#add-jiaolian6InsertRight8").hide();
        }
        if (selectedValue8 == '开五孔') {
            $("#add-jiaolian3SelectLeft8").show();
            $("#add-jiaolian3InsertLeft8").show();
            $("#add-jiaolian3SelectRight8").show();
            $("#add-jiaolian3InsertRight8").show();

            $("#add-jiaolian4SelectLeft8").show();
            $("#add-jiaolian4InsertLeft8").show();
            $("#add-jiaolian4SelectRight8").show();
            $("#add-jiaolian4InsertRight8").show();

            $("#add-jiaolian5SelectLeft8").show();
            $("#add-jiaolian5InsertLeft8").show();
            $("#add-jiaolian5SelectRight8").show();
            $("#add-jiaolian5InsertRight8").show();

            $("#add-jiaolian6SelectLeft8").hide();
            $("#add-jiaolian6InsertLeft8").hide();
            $("#add-jiaolian6SelectRight8").hide();
            $("#add-jiaolian6InsertRight8").hide();
        }
        if (selectedValue8 == '开六孔') {
            $("#add-jiaolian3SelectLeft8").show();
            $("#add-jiaolian3InsertLeft8").show();
            $("#add-jiaolian3SelectRight8").show();
            $("#add-jiaolian3InsertRight8").show();

            $("#add-jiaolian4SelectLeft8").show();
            $("#add-jiaolian4InsertLeft8").show();
            $("#add-jiaolian4SelectRight8").show();
            $("#add-jiaolian4InsertRight8").show();

            $("#add-jiaolian5SelectLeft8").show();
            $("#add-jiaolian5InsertLeft8").show();
            $("#add-jiaolian5SelectRight8").show();
            $("#add-jiaolian5InsertRight8").show();

            $("#add-jiaolian6SelectLeft8").show();
            $("#add-jiaolian6InsertLeft8").show();
            $("#add-jiaolian6SelectRight8").show();
            $("#add-jiaolian6InsertRight8").show();
        }
    })

    $('#add-kaijiaolian9').on('change', function () {
        var selectedValue9 = $(this).val();
        if (selectedValue9 == '开二孔') {
            $("#add-jiaolian3SelectLeft9").hide();
            $("#add-jiaolian3InsertLeft9").hide();
            $("#add-jiaolian3SelectRight9").hide();
            $("#add-jiaolian3InsertRight9").hide();

            $("#add-jiaolian4SelectLeft9").hide();
            $("#add-jiaolian4InsertLeft9").hide();
            $("#add-jiaolian4SelectRight9").hide();
            $("#add-jiaolian4InsertRight9").hide();

            $("#add-jiaolian5SelectLeft9").hide();
            $("#add-jiaolian5InsertLeft9").hide();
            $("#add-jiaolian5SelectRight9").hide();
            $("#add-jiaolian5InsertRight9").hide();

            $("#add-jiaolian6SelectLeft9").hide();
            $("#add-jiaolian6InsertLeft9").hide();
            $("#add-jiaolian6SelectRight9").hide();
            $("#add-jiaolian6InsertRight9").hide();

        }
        if (selectedValue9 == '开三孔') {
            $("#add-jiaolian3SelectLeft9").show();
            $("#add-jiaolian3InsertLeft9").show();
            $("#add-jiaolian3SelectRight9").show();
            $("#add-jiaolian3InsertRight9").show();

            $("#add-jiaolian4SelectLeft9").hide();
            $("#add-jiaolian4InsertLeft9").hide();
            $("#add-jiaolian4SelectRight9").hide();
            $("#add-jiaolian4InsertRight9").hide();

            $("#add-jiaolian5SelectLeft9").hide();
            $("#add-jiaolian5InsertLeft9").hide();
            $("#add-jiaolian5SelectRight9").hide();
            $("#add-jiaolian5InsertRight9").hide();

            $("#add-jiaolian6SelectLeft9").hide();
            $("#add-jiaolian6InsertLeft9").hide();
            $("#add-jiaolian6SelectRight9").hide();
            $("#add-jiaolian6InsertRight9").hide();
        }
        if (selectedValue9 == '开四孔') {
            $("#add-jiaolian3SelectLeft9").show();
            $("#add-jiaolian3InsertLeft9").show();
            $("#add-jiaolian3SelectRight9").show();
            $("#add-jiaolian3InsertRight9").show();

            $("#add-jiaolian4SelectLeft9").show();
            $("#add-jiaolian4InsertLeft9").show();
            $("#add-jiaolian4SelectRight9").show();
            $("#add-jiaolian4InsertRight9").show();

            $("#add-jiaolian5SelectLeft9").hide();
            $("#add-jiaolian5InsertLeft9").hide();
            $("#add-jiaolian5SelectRight9").hide();
            $("#add-jiaolian5InsertRight9").hide();

            $("#add-jiaolian6SelectLeft9").hide();
            $("#add-jiaolian6InsertLeft9").hide();
            $("#add-jiaolian6SelectRight9").hide();
            $("#add-jiaolian6InsertRight9").hide();
        }
        if (selectedValue9 == '开五孔') {
            $("#add-jiaolian3SelectLeft9").show();
            $("#add-jiaolian3InsertLeft9").show();
            $("#add-jiaolian3SelectRight9").show();
            $("#add-jiaolian3InsertRight9").show();

            $("#add-jiaolian4SelectLeft9").show();
            $("#add-jiaolian4InsertLeft9").show();
            $("#add-jiaolian4SelectRight9").show();
            $("#add-jiaolian4InsertRight9").show();

            $("#add-jiaolian5SelectLeft9").show();
            $("#add-jiaolian5InsertLeft9").show();
            $("#add-jiaolian5SelectRight9").show();
            $("#add-jiaolian5InsertRight9").show();

            $("#add-jiaolian6SelectLeft9").hide();
            $("#add-jiaolian6InsertLeft9").hide();
            $("#add-jiaolian6SelectRight9").hide();
            $("#add-jiaolian6InsertRight9").hide();
        }
        if (selectedValue9 == '开六孔') {
            $("#add-jiaolian3SelectLeft9").show();
            $("#add-jiaolian3InsertLeft9").show();
            $("#add-jiaolian3SelectRight9").show();
            $("#add-jiaolian3InsertRight9").show();

            $("#add-jiaolian4SelectLeft9").show();
            $("#add-jiaolian4InsertLeft9").show();
            $("#add-jiaolian4SelectRight9").show();
            $("#add-jiaolian4InsertRight9").show();

            $("#add-jiaolian5SelectLeft9").show();
            $("#add-jiaolian5InsertLeft9").show();
            $("#add-jiaolian5SelectRight9").show();
            $("#add-jiaolian5InsertRight9").show();

            $("#add-jiaolian6SelectLeft9").show();
            $("#add-jiaolian6InsertLeft9").show();
            $("#add-jiaolian6SelectRight9").show();
            $("#add-jiaolian6InsertRight9").show();
        }
    })

    $('#add-kaijiaolian10').on('change', function () {
        var selectedValue10 = $(this).val();
        if (selectedValue10 == '开二孔') {
            $("#add-jiaolian3SelectLeft10").hide();
            $("#add-jiaolian3InsertLeft10").hide();
            $("#add-jiaolian3SelectRight10").hide();
            $("#add-jiaolian3InsertRight10").hide();

            $("#add-jiaolian4SelectLeft10").hide();
            $("#add-jiaolian4InsertLeft10").hide();
            $("#add-jiaolian4SelectRight10").hide();
            $("#add-jiaolian4InsertRight10").hide();

            $("#add-jiaolian5SelectLeft10").hide();
            $("#add-jiaolian5InsertLeft10").hide();
            $("#add-jiaolian5SelectRight10").hide();
            $("#add-jiaolian5InsertRight10").hide();

            $("#add-jiaolian6SelectLeft10").hide();
            $("#add-jiaolian6InsertLeft10").hide();
            $("#add-jiaolian6SelectRight10").hide();
            $("#add-jiaolian6InsertRight10").hide();

        }
        if (selectedValue10 == '开三孔') {
            $("#add-jiaolian3SelectLeft10").show();
            $("#add-jiaolian3InsertLeft10").show();
            $("#add-jiaolian3SelectRight10").show();
            $("#add-jiaolian3InsertRight10").show();

            $("#add-jiaolian4SelectLeft10").hide();
            $("#add-jiaolian4InsertLeft10").hide();
            $("#add-jiaolian4SelectRight10").hide();
            $("#add-jiaolian4InsertRight10").hide();

            $("#add-jiaolian5SelectLeft10").hide();
            $("#add-jiaolian5InsertLeft10").hide();
            $("#add-jiaolian5SelectRight10").hide();
            $("#add-jiaolian5InsertRight10").hide();

            $("#add-jiaolian6SelectLeft10").hide();
            $("#add-jiaolian6InsertLeft10").hide();
            $("#add-jiaolian6SelectRight10").hide();
            $("#add-jiaolian6InsertRight10").hide();
        }
        if (selectedValue10 == '开四孔') {
            $("#add-jiaolian3SelectLeft10").show();
            $("#add-jiaolian3InsertLeft10").show();
            $("#add-jiaolian3SelectRight10").show();
            $("#add-jiaolian3InsertRight10").show();

            $("#add-jiaolian4SelectLeft10").show();
            $("#add-jiaolian4InsertLeft10").show();
            $("#add-jiaolian4SelectRight10").show();
            $("#add-jiaolian4InsertRight10").show();

            $("#add-jiaolian5SelectLeft10").hide();
            $("#add-jiaolian5InsertLeft10").hide();
            $("#add-jiaolian5SelectRight10").hide();
            $("#add-jiaolian5InsertRight10").hide();

            $("#add-jiaolian6SelectLeft10").hide();
            $("#add-jiaolian6InsertLeft10").hide();
            $("#add-jiaolian6SelectRight10").hide();
            $("#add-jiaolian6InsertRight10").hide();
        }
        if (selectedValue10 == '开五孔') {
            $("#add-jiaolian3SelectLeft10").show();
            $("#add-jiaolian3InsertLeft10").show();
            $("#add-jiaolian3SelectRight10").show();
            $("#add-jiaolian3InsertRight10").show();

            $("#add-jiaolian4SelectLeft10").show();
            $("#add-jiaolian4InsertLeft10").show();
            $("#add-jiaolian4SelectRight10").show();
            $("#add-jiaolian4InsertRight10").show();

            $("#add-jiaolian5SelectLeft10").show();
            $("#add-jiaolian5InsertLeft10").show();
            $("#add-jiaolian5SelectRight10").show();
            $("#add-jiaolian5InsertRight10").show();

            $("#add-jiaolian6SelectLeft10").hide();
            $("#add-jiaolian6InsertLeft10").hide();
            $("#add-jiaolian6SelectRight10").hide();
            $("#add-jiaolian6InsertRight10").hide();
        }
        if (selectedValue10 == '开六孔') {
            $("#add-jiaolian3SelectLeft10").show();
            $("#add-jiaolian3InsertLeft10").show();
            $("#add-jiaolian3SelectRight10").show();
            $("#add-jiaolian3InsertRight10").show();

            $("#add-jiaolian4SelectLeft10").show();
            $("#add-jiaolian4InsertLeft10").show();
            $("#add-jiaolian4SelectRight10").show();
            $("#add-jiaolian4InsertRight10").show();

            $("#add-jiaolian5SelectLeft10").show();
            $("#add-jiaolian5InsertLeft10").show();
            $("#add-jiaolian5SelectRight10").show();
            $("#add-jiaolian5InsertRight10").show();

            $("#add-jiaolian6SelectLeft10").show();
            $("#add-jiaolian6InsertLeft10").show();
            $("#add-jiaolian6SelectRight10").show();
            $("#add-jiaolian6InsertRight10").show();
        }
    })

    $('#add-kaijiaolian11').on('change', function () {
        var selectedValue11 = $(this).val();
        if (selectedValue11 == '开二孔') {
            $("#add-jiaolian3SelectLeft11").hide();
            $("#add-jiaolian3InsertLeft11").hide();
            $("#add-jiaolian3SelectRight11").hide();
            $("#add-jiaolian3InsertRight11").hide();

            $("#add-jiaolian4SelectLeft11").hide();
            $("#add-jiaolian4InsertLeft11").hide();
            $("#add-jiaolian4SelectRight11").hide();
            $("#add-jiaolian4InsertRight11").hide();

            $("#add-jiaolian5SelectLeft11").hide();
            $("#add-jiaolian5InsertLeft11").hide();
            $("#add-jiaolian5SelectRight11").hide();
            $("#add-jiaolian5InsertRight11").hide();

            $("#add-jiaolian6SelectLeft11").hide();
            $("#add-jiaolian6InsertLeft11").hide();
            $("#add-jiaolian6SelectRight11").hide();
            $("#add-jiaolian6InsertRight11").hide();

        }
        if (selectedValue11 == '开三孔') {
            $("#add-jiaolian3SelectLeft11").show();
            $("#add-jiaolian3InsertLeft11").show();
            $("#add-jiaolian3SelectRight11").show();
            $("#add-jiaolian3InsertRight11").show();

            $("#add-jiaolian4SelectLeft11").hide();
            $("#add-jiaolian4InsertLeft11").hide();
            $("#add-jiaolian4SelectRight11").hide();
            $("#add-jiaolian4InsertRight11").hide();

            $("#add-jiaolian5SelectLeft11").hide();
            $("#add-jiaolian5InsertLeft11").hide();
            $("#add-jiaolian5SelectRight11").hide();
            $("#add-jiaolian5InsertRight11").hide();

            $("#add-jiaolian6SelectLeft11").hide();
            $("#add-jiaolian6InsertLeft11").hide();
            $("#add-jiaolian6SelectRight11").hide();
            $("#add-jiaolian6InsertRight11").hide();
        }
        if (selectedValue11 == '开四孔') {
            $("#add-jiaolian3SelectLeft11").show();
            $("#add-jiaolian3InsertLeft11").show();
            $("#add-jiaolian3SelectRight11").show();
            $("#add-jiaolian3InsertRight11").show();

            $("#add-jiaolian4SelectLeft11").show();
            $("#add-jiaolian4InsertLeft11").show();
            $("#add-jiaolian4SelectRight11").show();
            $("#add-jiaolian4InsertRight11").show();

            $("#add-jiaolian5SelectLeft11").hide();
            $("#add-jiaolian5InsertLeft11").hide();
            $("#add-jiaolian5SelectRight11").hide();
            $("#add-jiaolian5InsertRight11").hide();

            $("#add-jiaolian6SelectLeft11").hide();
            $("#add-jiaolian6InsertLeft11").hide();
            $("#add-jiaolian6SelectRight11").hide();
            $("#add-jiaolian6InsertRight11").hide();
        }
        if (selectedValue11 == '开五孔') {
            $("#add-jiaolian3SelectLeft11").show();
            $("#add-jiaolian3InsertLeft11").show();
            $("#add-jiaolian3SelectRight11").show();
            $("#add-jiaolian3InsertRight11").show();

            $("#add-jiaolian4SelectLeft11").show();
            $("#add-jiaolian4InsertLeft11").show();
            $("#add-jiaolian4SelectRight11").show();
            $("#add-jiaolian4InsertRight11").show();

            $("#add-jiaolian5SelectLeft11").show();
            $("#add-jiaolian5InsertLeft11").show();
            $("#add-jiaolian5SelectRight11").show();
            $("#add-jiaolian5InsertRight11").show();

            $("#add-jiaolian6SelectLeft11").hide();
            $("#add-jiaolian6InsertLeft11").hide();
            $("#add-jiaolian6SelectRight11").hide();
            $("#add-jiaolian6InsertRight11").hide();
        }
        if (selectedValue11 == '开六孔') {
            $("#add-jiaolian3SelectLeft11").show();
            $("#add-jiaolian3InsertLeft11").show();
            $("#add-jiaolian3SelectRight11").show();
            $("#add-jiaolian3InsertRight11").show();

            $("#add-jiaolian4SelectLeft11").show();
            $("#add-jiaolian4InsertLeft11").show();
            $("#add-jiaolian4SelectRight11").show();
            $("#add-jiaolian4InsertRight11").show();

            $("#add-jiaolian5SelectLeft11").show();
            $("#add-jiaolian5InsertLeft11").show();
            $("#add-jiaolian5SelectRight11").show();
            $("#add-jiaolian5InsertRight11").show();

            $("#add-jiaolian6SelectLeft11").show();
            $("#add-jiaolian6InsertLeft11").show();
            $("#add-jiaolian6SelectRight11").show();
            $("#add-jiaolian6InsertRight11").show();
        }
    })

    $('#add-kaijiaolian12').on('change', function () {
        var selectedValue12 = $(this).val();
        if (selectedValue12 == '开二孔') {
            $("#add-jiaolian3SelectLeft12").hide();
            $("#add-jiaolian3InsertLeft12").hide();
            $("#add-jiaolian3SelectRight12").hide();
            $("#add-jiaolian3InsertRight12").hide();

            $("#add-jiaolian4SelectLeft12").hide();
            $("#add-jiaolian4InsertLeft12").hide();
            $("#add-jiaolian4SelectRight12").hide();
            $("#add-jiaolian4InsertRight12").hide();

            $("#add-jiaolian5SelectLeft12").hide();
            $("#add-jiaolian5InsertLeft12").hide();
            $("#add-jiaolian5SelectRight12").hide();
            $("#add-jiaolian5InsertRight12").hide();

            $("#add-jiaolian6SelectLeft12").hide();
            $("#add-jiaolian6InsertLeft12").hide();
            $("#add-jiaolian6SelectRight12").hide();
            $("#add-jiaolian6InsertRight12").hide();

        }
        if (selectedValue12 == '开三孔') {
            $("#add-jiaolian3SelectLeft12").show();
            $("#add-jiaolian3InsertLeft12").show();
            $("#add-jiaolian3SelectRight12").show();
            $("#add-jiaolian3InsertRight12").show();

            $("#add-jiaolian4SelectLeft12").hide();
            $("#add-jiaolian4InsertLeft12").hide();
            $("#add-jiaolian4SelectRight12").hide();
            $("#add-jiaolian4InsertRight12").hide();

            $("#add-jiaolian5SelectLeft12").hide();
            $("#add-jiaolian5InsertLeft12").hide();
            $("#add-jiaolian5SelectRight12").hide();
            $("#add-jiaolian5InsertRight12").hide();

            $("#add-jiaolian6SelectLeft12").hide();
            $("#add-jiaolian6InsertLeft12").hide();
            $("#add-jiaolian6SelectRight12").hide();
            $("#add-jiaolian6InsertRight12").hide();
        }
        if (selectedValue12 == '开四孔') {
            $("#add-jiaolian3SelectLeft12").show();
            $("#add-jiaolian3InsertLeft12").show();
            $("#add-jiaolian3SelectRight12").show();
            $("#add-jiaolian3InsertRight12").show();

            $("#add-jiaolian4SelectLeft12").show();
            $("#add-jiaolian4InsertLeft12").show();
            $("#add-jiaolian4SelectRight12").show();
            $("#add-jiaolian4InsertRight12").show();

            $("#add-jiaolian5SelectLeft12").hide();
            $("#add-jiaolian5InsertLeft12").hide();
            $("#add-jiaolian5SelectRight12").hide();
            $("#add-jiaolian5InsertRight12").hide();

            $("#add-jiaolian6SelectLeft12").hide();
            $("#add-jiaolian6InsertLeft12").hide();
            $("#add-jiaolian6SelectRight12").hide();
            $("#add-jiaolian6InsertRight12").hide();
        }
        if (selectedValue12 == '开五孔') {
            $("#add-jiaolian3SelectLeft12").show();
            $("#add-jiaolian3InsertLeft12").show();
            $("#add-jiaolian3SelectRight12").show();
            $("#add-jiaolian3InsertRight12").show();

            $("#add-jiaolian4SelectLeft12").show();
            $("#add-jiaolian4InsertLeft12").show();
            $("#add-jiaolian4SelectRight12").show();
            $("#add-jiaolian4InsertRight12").show();

            $("#add-jiaolian5SelectLeft12").show();
            $("#add-jiaolian5InsertLeft12").show();
            $("#add-jiaolian5SelectRight12").show();
            $("#add-jiaolian5InsertRight12").show();

            $("#add-jiaolian6SelectLeft12").hide();
            $("#add-jiaolian6InsertLeft12").hide();
            $("#add-jiaolian6SelectRight12").hide();
            $("#add-jiaolian6InsertRight12").hide();
        }
        if (selectedValue12 == '开六孔') {
            $("#add-jiaolian3SelectLeft12").show();
            $("#add-jiaolian3InsertLeft12").show();
            $("#add-jiaolian3SelectRight12").show();
            $("#add-jiaolian3InsertRight12").show();

            $("#add-jiaolian4SelectLeft12").show();
            $("#add-jiaolian4InsertLeft12").show();
            $("#add-jiaolian4SelectRight12").show();
            $("#add-jiaolian4InsertRight12").show();

            $("#add-jiaolian5SelectLeft12").show();
            $("#add-jiaolian5InsertLeft12").show();
            $("#add-jiaolian5SelectRight12").show();
            $("#add-jiaolian5InsertRight12").show();

            $("#add-jiaolian6SelectLeft12").show();
            $("#add-jiaolian6InsertLeft12").show();
            $("#add-jiaolian6SelectRight12").show();
            $("#add-jiaolian6InsertRight12").show();
        }
    })

    $('#add-kaijiaolian13').on('change', function () {
        var selectedValue13 = $(this).val();
        if (selectedValue13 == '开二孔') {
            $("#add-jiaolian3SelectLeft13").hide();
            $("#add-jiaolian3InsertLeft13").hide();
            $("#add-jiaolian3SelectRight13").hide();
            $("#add-jiaolian3InsertRight13").hide();

            $("#add-jiaolian4SelectLeft13").hide();
            $("#add-jiaolian4InsertLeft13").hide();
            $("#add-jiaolian4SelectRight13").hide();
            $("#add-jiaolian4InsertRight13").hide();

            $("#add-jiaolian5SelectLeft13").hide();
            $("#add-jiaolian5InsertLeft13").hide();
            $("#add-jiaolian5SelectRight13").hide();
            $("#add-jiaolian5InsertRight13").hide();

            $("#add-jiaolian6SelectLeft13").hide();
            $("#add-jiaolian6InsertLeft13").hide();
            $("#add-jiaolian6SelectRight13").hide();
            $("#add-jiaolian6InsertRight13").hide();

        }
        if (selectedValue13 == '开三孔') {
            $("#add-jiaolian3SelectLeft13").show();
            $("#add-jiaolian3InsertLeft13").show();
            $("#add-jiaolian3SelectRight13").show();
            $("#add-jiaolian3InsertRight13").show();

            $("#add-jiaolian4SelectLeft13").hide();
            $("#add-jiaolian4InsertLeft13").hide();
            $("#add-jiaolian4SelectRight13").hide();
            $("#add-jiaolian4InsertRight13").hide();

            $("#add-jiaolian5SelectLeft13").hide();
            $("#add-jiaolian5InsertLeft13").hide();
            $("#add-jiaolian5SelectRight13").hide();
            $("#add-jiaolian5InsertRight13").hide();

            $("#add-jiaolian6SelectLeft13").hide();
            $("#add-jiaolian6InsertLeft13").hide();
            $("#add-jiaolian6SelectRight13").hide();
            $("#add-jiaolian6InsertRight13").hide();
        }
        if (selectedValue13 == '开四孔') {
            $("#add-jiaolian3SelectLeft13").show();
            $("#add-jiaolian3InsertLeft13").show();
            $("#add-jiaolian3SelectRight13").show();
            $("#add-jiaolian3InsertRight13").show();

            $("#add-jiaolian4SelectLeft13").show();
            $("#add-jiaolian4InsertLeft13").show();
            $("#add-jiaolian4SelectRight13").show();
            $("#add-jiaolian4InsertRight13").show();

            $("#add-jiaolian5SelectLeft13").hide();
            $("#add-jiaolian5InsertLeft13").hide();
            $("#add-jiaolian5SelectRight13").hide();
            $("#add-jiaolian5InsertRight13").hide();

            $("#add-jiaolian6SelectLeft13").hide();
            $("#add-jiaolian6InsertLeft13").hide();
            $("#add-jiaolian6SelectRight13").hide();
            $("#add-jiaolian6InsertRight13").hide();
        }
        if (selectedValue13 == '开五孔') {
            $("#add-jiaolian3SelectLeft13").show();
            $("#add-jiaolian3InsertLeft13").show();
            $("#add-jiaolian3SelectRight13").show();
            $("#add-jiaolian3InsertRight13").show();

            $("#add-jiaolian4SelectLeft13").show();
            $("#add-jiaolian4InsertLeft13").show();
            $("#add-jiaolian4SelectRight13").show();
            $("#add-jiaolian4InsertRight13").show();

            $("#add-jiaolian5SelectLeft13").show();
            $("#add-jiaolian5InsertLeft13").show();
            $("#add-jiaolian5SelectRight13").show();
            $("#add-jiaolian5InsertRight13").show();

            $("#add-jiaolian6SelectLeft13").hide();
            $("#add-jiaolian6InsertLeft13").hide();
            $("#add-jiaolian6SelectRight13").hide();
            $("#add-jiaolian6InsertRight13").hide();
        }
        if (selectedValue13 == '开六孔') {
            $("#add-jiaolian3SelectLeft13").show();
            $("#add-jiaolian3InsertLeft13").show();
            $("#add-jiaolian3SelectRight13").show();
            $("#add-jiaolian3InsertRight13").show();

            $("#add-jiaolian4SelectLeft13").show();
            $("#add-jiaolian4InsertLeft13").show();
            $("#add-jiaolian4SelectRight13").show();
            $("#add-jiaolian4InsertRight13").show();

            $("#add-jiaolian5SelectLeft13").show();
            $("#add-jiaolian5InsertLeft13").show();
            $("#add-jiaolian5SelectRight13").show();
            $("#add-jiaolian5InsertRight13").show();

            $("#add-jiaolian6SelectLeft13").show();
            $("#add-jiaolian6InsertLeft13").show();
            $("#add-jiaolian6SelectRight13").show();
            $("#add-jiaolian6InsertRight13").show();
        }
    })

    $('#add-kaijiaolian14').on('change', function () {
        var selectedValue14 = $(this).val();
        if (selectedValue14 == '开二孔') {
            $("#add-jiaolian3SelectLeft14").hide();
            $("#add-jiaolian3InsertLeft14").hide();
            $("#add-jiaolian3SelectRight14").hide();
            $("#add-jiaolian3InsertRight14").hide();

            $("#add-jiaolian4SelectLeft14").hide();
            $("#add-jiaolian4InsertLeft14").hide();
            $("#add-jiaolian4SelectRight14").hide();
            $("#add-jiaolian4InsertRight14").hide();

            $("#add-jiaolian5SelectLeft14").hide();
            $("#add-jiaolian5InsertLeft14").hide();
            $("#add-jiaolian5SelectRight14").hide();
            $("#add-jiaolian5InsertRight14").hide();

            $("#add-jiaolian6SelectLeft14").hide();
            $("#add-jiaolian6InsertLeft14").hide();
            $("#add-jiaolian6SelectRight14").hide();
            $("#add-jiaolian6InsertRight14").hide();

        }
        if (selectedValue14 == '开三孔') {
            $("#add-jiaolian3SelectLeft14").show();
            $("#add-jiaolian3InsertLeft14").show();
            $("#add-jiaolian3SelectRight14").show();
            $("#add-jiaolian3InsertRight14").show();

            $("#add-jiaolian4SelectLeft14").hide();
            $("#add-jiaolian4InsertLeft14").hide();
            $("#add-jiaolian4SelectRight14").hide();
            $("#add-jiaolian4InsertRight14").hide();

            $("#add-jiaolian5SelectLeft14").hide();
            $("#add-jiaolian5InsertLeft14").hide();
            $("#add-jiaolian5SelectRight14").hide();
            $("#add-jiaolian5InsertRight14").hide();

            $("#add-jiaolian6SelectLeft14").hide();
            $("#add-jiaolian6InsertLeft14").hide();
            $("#add-jiaolian6SelectRight14").hide();
            $("#add-jiaolian6InsertRight14").hide();
        }
        if (selectedValue14 == '开四孔') {
            $("#add-jiaolian3SelectLeft14").show();
            $("#add-jiaolian3InsertLeft14").show();
            $("#add-jiaolian3SelectRight14").show();
            $("#add-jiaolian3InsertRight14").show();

            $("#add-jiaolian4SelectLeft14").show();
            $("#add-jiaolian4InsertLeft14").show();
            $("#add-jiaolian4SelectRight14").show();
            $("#add-jiaolian4InsertRight14").show();

            $("#add-jiaolian5SelectLeft14").hide();
            $("#add-jiaolian5InsertLeft14").hide();
            $("#add-jiaolian5SelectRight14").hide();
            $("#add-jiaolian5InsertRight14").hide();

            $("#add-jiaolian6SelectLeft14").hide();
            $("#add-jiaolian6InsertLeft14").hide();
            $("#add-jiaolian6SelectRight14").hide();
            $("#add-jiaolian6InsertRight14").hide();
        }
        if (selectedValue14 == '开五孔') {
            $("#add-jiaolian3SelectLeft14").show();
            $("#add-jiaolian3InsertLeft14").show();
            $("#add-jiaolian3SelectRight14").show();
            $("#add-jiaolian3InsertRight14").show();

            $("#add-jiaolian4SelectLeft14").show();
            $("#add-jiaolian4InsertLeft14").show();
            $("#add-jiaolian4SelectRight14").show();
            $("#add-jiaolian4InsertRight14").show();

            $("#add-jiaolian5SelectLeft14").show();
            $("#add-jiaolian5InsertLeft14").show();
            $("#add-jiaolian5SelectRight14").show();
            $("#add-jiaolian5InsertRight14").show();

            $("#add-jiaolian6SelectLeft14").hide();
            $("#add-jiaolian6InsertLeft14").hide();
            $("#add-jiaolian6SelectRight14").hide();
            $("#add-jiaolian6InsertRight14").hide();
        }
        if (selectedValue14 == '开六孔') {
            $("#add-jiaolian3SelectLeft14").show();
            $("#add-jiaolian3InsertLeft14").show();
            $("#add-jiaolian3SelectRight14").show();
            $("#add-jiaolian3InsertRight14").show();

            $("#add-jiaolian4SelectLeft14").show();
            $("#add-jiaolian4InsertLeft14").show();
            $("#add-jiaolian4SelectRight14").show();
            $("#add-jiaolian4InsertRight14").show();

            $("#add-jiaolian5SelectLeft14").show();
            $("#add-jiaolian5InsertLeft14").show();
            $("#add-jiaolian5SelectRight14").show();
            $("#add-jiaolian5InsertRight14").show();

            $("#add-jiaolian6SelectLeft14").show();
            $("#add-jiaolian6InsertLeft14").show();
            $("#add-jiaolian6SelectRight14").show();
            $("#add-jiaolian6InsertRight14").show();
        }
    })

    $('#add-kaijiaolian15').on('change', function () {
        var selectedValue15 = $(this).val();
        if (selectedValue15 == '开二孔') {
            $("#add-jiaolian3SelectLeft15").hide();
            $("#add-jiaolian3InsertLeft15").hide();
            $("#add-jiaolian3SelectRight15").hide();
            $("#add-jiaolian3InsertRight15").hide();

            $("#add-jiaolian4SelectLeft15").hide();
            $("#add-jiaolian4InsertLeft15").hide();
            $("#add-jiaolian4SelectRight15").hide();
            $("#add-jiaolian4InsertRight15").hide();

            $("#add-jiaolian5SelectLeft15").hide();
            $("#add-jiaolian5InsertLeft15").hide();
            $("#add-jiaolian5SelectRight15").hide();
            $("#add-jiaolian5InsertRight15").hide();

            $("#add-jiaolian6SelectLeft15").hide();
            $("#add-jiaolian6InsertLeft15").hide();
            $("#add-jiaolian6SelectRight15").hide();
            $("#add-jiaolian6InsertRight15").hide();

        }
        if (selectedValue15 == '开三孔') {
            $("#add-jiaolian3SelectLeft15").show();
            $("#add-jiaolian3InsertLeft15").show();
            $("#add-jiaolian3SelectRight15").show();
            $("#add-jiaolian3InsertRight15").show();

            $("#add-jiaolian4SelectLeft15").hide();
            $("#add-jiaolian4InsertLeft15").hide();
            $("#add-jiaolian4SelectRight15").hide();
            $("#add-jiaolian4InsertRight15").hide();

            $("#add-jiaolian5SelectLeft15").hide();
            $("#add-jiaolian5InsertLeft15").hide();
            $("#add-jiaolian5SelectRight15").hide();
            $("#add-jiaolian5InsertRight15").hide();

            $("#add-jiaolian6SelectLeft15").hide();
            $("#add-jiaolian6InsertLeft15").hide();
            $("#add-jiaolian6SelectRight15").hide();
            $("#add-jiaolian6InsertRight15").hide();
        }
        if (selectedValue15 == '开四孔') {
            $("#add-jiaolian3SelectLeft15").show();
            $("#add-jiaolian3InsertLeft15").show();
            $("#add-jiaolian3SelectRight15").show();
            $("#add-jiaolian3InsertRight15").show();

            $("#add-jiaolian4SelectLeft15").show();
            $("#add-jiaolian4InsertLeft15").show();
            $("#add-jiaolian4SelectRight15").show();
            $("#add-jiaolian4InsertRight15").show();

            $("#add-jiaolian5SelectLeft15").hide();
            $("#add-jiaolian5InsertLeft15").hide();
            $("#add-jiaolian5SelectRight15").hide();
            $("#add-jiaolian5InsertRight15").hide();

            $("#add-jiaolian6SelectLeft15").hide();
            $("#add-jiaolian6InsertLeft15").hide();
            $("#add-jiaolian6SelectRight15").hide();
            $("#add-jiaolian6InsertRight15").hide();
        }
        if (selectedValue15 == '开五孔') {
            $("#add-jiaolian3SelectLeft15").show();
            $("#add-jiaolian3InsertLeft15").show();
            $("#add-jiaolian3SelectRight15").show();
            $("#add-jiaolian3InsertRight15").show();

            $("#add-jiaolian4SelectLeft15").show();
            $("#add-jiaolian4InsertLeft15").show();
            $("#add-jiaolian4SelectRight15").show();
            $("#add-jiaolian4InsertRight15").show();

            $("#add-jiaolian5SelectLeft15").show();
            $("#add-jiaolian5InsertLeft15").show();
            $("#add-jiaolian5SelectRight15").show();
            $("#add-jiaolian5InsertRight15").show();

            $("#add-jiaolian6SelectLeft15").hide();
            $("#add-jiaolian6InsertLeft15").hide();
            $("#add-jiaolian6SelectRight15").hide();
            $("#add-jiaolian6InsertRight15").hide();
        }
        if (selectedValue15 == '开六孔') {
            $("#add-jiaolian3SelectLeft15").show();
            $("#add-jiaolian3InsertLeft15").show();
            $("#add-jiaolian3SelectRight15").show();
            $("#add-jiaolian3InsertRight15").show();

            $("#add-jiaolian4SelectLeft15").show();
            $("#add-jiaolian4InsertLeft15").show();
            $("#add-jiaolian4SelectRight15").show();
            $("#add-jiaolian4InsertRight15").show();

            $("#add-jiaolian5SelectLeft15").show();
            $("#add-jiaolian5InsertLeft15").show();
            $("#add-jiaolian5SelectRight15").show();
            $("#add-jiaolian5InsertRight15").show();

            $("#add-jiaolian6SelectLeft15").show();
            $("#add-jiaolian6InsertLeft15").show();
            $("#add-jiaolian6SelectRight15").show();
            $("#add-jiaolian6InsertRight15").show();
        }
    })

    $('#add-kaijiaolian16').on('change', function () {
        var selectedValue16 = $(this).val();
        if (selectedValue16 == '开二孔') {
            $("#add-jiaolian3SelectLeft16").hide();
            $("#add-jiaolian3InsertLeft16").hide();
            $("#add-jiaolian3SelectRight16").hide();
            $("#add-jiaolian3InsertRight16").hide();

            $("#add-jiaolian4SelectLeft16").hide();
            $("#add-jiaolian4InsertLeft16").hide();
            $("#add-jiaolian4SelectRight16").hide();
            $("#add-jiaolian4InsertRight16").hide();

            $("#add-jiaolian5SelectLeft16").hide();
            $("#add-jiaolian5InsertLeft16").hide();
            $("#add-jiaolian5SelectRight16").hide();
            $("#add-jiaolian5InsertRight16").hide();

            $("#add-jiaolian6SelectLeft16").hide();
            $("#add-jiaolian6InsertLeft16").hide();
            $("#add-jiaolian6SelectRight16").hide();
            $("#add-jiaolian6InsertRight16").hide();

        }
        if (selectedValue16 == '开三孔') {
            $("#add-jiaolian3SelectLeft16").show();
            $("#add-jiaolian3InsertLeft16").show();
            $("#add-jiaolian3SelectRight16").show();
            $("#add-jiaolian3InsertRight16").show();

            $("#add-jiaolian4SelectLeft16").hide();
            $("#add-jiaolian4InsertLeft16").hide();
            $("#add-jiaolian4SelectRight16").hide();
            $("#add-jiaolian4InsertRight16").hide();

            $("#add-jiaolian5SelectLeft16").hide();
            $("#add-jiaolian5InsertLeft16").hide();
            $("#add-jiaolian5SelectRight16").hide();
            $("#add-jiaolian5InsertRight16").hide();

            $("#add-jiaolian6SelectLeft16").hide();
            $("#add-jiaolian6InsertLeft16").hide();
            $("#add-jiaolian6SelectRight16").hide();
            $("#add-jiaolian6InsertRight16").hide();
        }
        if (selectedValue16 == '开四孔') {
            $("#add-jiaolian3SelectLeft16").show();
            $("#add-jiaolian3InsertLeft16").show();
            $("#add-jiaolian3SelectRight16").show();
            $("#add-jiaolian3InsertRight16").show();

            $("#add-jiaolian4SelectLeft16").show();
            $("#add-jiaolian4InsertLeft16").show();
            $("#add-jiaolian4SelectRight16").show();
            $("#add-jiaolian4InsertRight16").show();

            $("#add-jiaolian5SelectLeft16").hide();
            $("#add-jiaolian5InsertLeft16").hide();
            $("#add-jiaolian5SelectRight16").hide();
            $("#add-jiaolian5InsertRight16").hide();

            $("#add-jiaolian6SelectLeft16").hide();
            $("#add-jiaolian6InsertLeft16").hide();
            $("#add-jiaolian6SelectRight16").hide();
            $("#add-jiaolian6InsertRight16").hide();
        }
        if (selectedValue16 == '开五孔') {
            $("#add-jiaolian3SelectLeft16").show();
            $("#add-jiaolian3InsertLeft16").show();
            $("#add-jiaolian3SelectRight16").show();
            $("#add-jiaolian3InsertRight16").show();

            $("#add-jiaolian4SelectLeft16").show();
            $("#add-jiaolian4InsertLeft16").show();
            $("#add-jiaolian4SelectRight16").show();
            $("#add-jiaolian4InsertRight16").show();

            $("#add-jiaolian5SelectLeft16").show();
            $("#add-jiaolian5InsertLeft16").show();
            $("#add-jiaolian5SelectRight16").show();
            $("#add-jiaolian5InsertRight16").show();

            $("#add-jiaolian6SelectLeft16").hide();
            $("#add-jiaolian6InsertLeft16").hide();
            $("#add-jiaolian6SelectRight16").hide();
            $("#add-jiaolian6InsertRight16").hide();
        }
        if (selectedValue16 == '开六孔') {
            $("#add-jiaolian3SelectLeft16").show();
            $("#add-jiaolian3InsertLeft16").show();
            $("#add-jiaolian3SelectRight16").show();
            $("#add-jiaolian3InsertRight16").show();

            $("#add-jiaolian4SelectLeft16").show();
            $("#add-jiaolian4InsertLeft16").show();
            $("#add-jiaolian4SelectRight16").show();
            $("#add-jiaolian4InsertRight16").show();

            $("#add-jiaolian5SelectLeft16").show();
            $("#add-jiaolian5InsertLeft16").show();
            $("#add-jiaolian5SelectRight16").show();
            $("#add-jiaolian5InsertRight16").show();

            $("#add-jiaolian6SelectLeft16").show();
            $("#add-jiaolian6InsertLeft16").show();
            $("#add-jiaolian6SelectRight16").show();
            $("#add-jiaolian6InsertRight16").show();
        }
    })

    $('#add-kaijiaolian17').on('change', function () {
        var selectedValue17 = $(this).val();
        if (selectedValue17 == '开二孔') {
            $("#add-jiaolian3SelectLeft17").hide();
            $("#add-jiaolian3InsertLeft17").hide();
            $("#add-jiaolian3SelectRight17").hide();
            $("#add-jiaolian3InsertRight17").hide();

            $("#add-jiaolian4SelectLeft17").hide();
            $("#add-jiaolian4InsertLeft17").hide();
            $("#add-jiaolian4SelectRight17").hide();
            $("#add-jiaolian4InsertRight17").hide();

            $("#add-jiaolian5SelectLeft17").hide();
            $("#add-jiaolian5InsertLeft17").hide();
            $("#add-jiaolian5SelectRight17").hide();
            $("#add-jiaolian5InsertRight17").hide();

            $("#add-jiaolian6SelectLeft17").hide();
            $("#add-jiaolian6InsertLeft17").hide();
            $("#add-jiaolian6SelectRight17").hide();
            $("#add-jiaolian6InsertRight17").hide();

        }
        if (selectedValue17 == '开三孔') {
            $("#add-jiaolian3SelectLeft17").show();
            $("#add-jiaolian3InsertLeft17").show();
            $("#add-jiaolian3SelectRight17").show();
            $("#add-jiaolian3InsertRight17").show();

            $("#add-jiaolian4SelectLeft17").hide();
            $("#add-jiaolian4InsertLeft17").hide();
            $("#add-jiaolian4SelectRight17").hide();
            $("#add-jiaolian4InsertRight17").hide();

            $("#add-jiaolian5SelectLeft17").hide();
            $("#add-jiaolian5InsertLeft17").hide();
            $("#add-jiaolian5SelectRight17").hide();
            $("#add-jiaolian5InsertRight17").hide();

            $("#add-jiaolian6SelectLeft17").hide();
            $("#add-jiaolian6InsertLeft17").hide();
            $("#add-jiaolian6SelectRight17").hide();
            $("#add-jiaolian6InsertRight17").hide();
        }
        if (selectedValue17 == '开四孔') {
            $("#add-jiaolian3SelectLeft17").show();
            $("#add-jiaolian3InsertLeft17").show();
            $("#add-jiaolian3SelectRight17").show();
            $("#add-jiaolian3InsertRight17").show();

            $("#add-jiaolian4SelectLeft17").show();
            $("#add-jiaolian4InsertLeft17").show();
            $("#add-jiaolian4SelectRight17").show();
            $("#add-jiaolian4InsertRight17").show();

            $("#add-jiaolian5SelectLeft17").hide();
            $("#add-jiaolian5InsertLeft17").hide();
            $("#add-jiaolian5SelectRight17").hide();
            $("#add-jiaolian5InsertRight17").hide();

            $("#add-jiaolian6SelectLeft17").hide();
            $("#add-jiaolian6InsertLeft17").hide();
            $("#add-jiaolian6SelectRight17").hide();
            $("#add-jiaolian6InsertRight17").hide();
        }
        if (selectedValue17 == '开五孔') {
            $("#add-jiaolian3SelectLeft17").show();
            $("#add-jiaolian3InsertLeft17").show();
            $("#add-jiaolian3SelectRight17").show();
            $("#add-jiaolian3InsertRight17").show();

            $("#add-jiaolian4SelectLeft17").show();
            $("#add-jiaolian4InsertLeft17").show();
            $("#add-jiaolian4SelectRight17").show();
            $("#add-jiaolian4InsertRight17").show();

            $("#add-jiaolian5SelectLeft17").show();
            $("#add-jiaolian5InsertLeft17").show();
            $("#add-jiaolian5SelectRight17").show();
            $("#add-jiaolian5InsertRight17").show();

            $("#add-jiaolian6SelectLeft17").hide();
            $("#add-jiaolian6InsertLeft17").hide();
            $("#add-jiaolian6SelectRight17").hide();
            $("#add-jiaolian6InsertRight17").hide();
        }
        if (selectedValue17 == '开六孔') {
            $("#add-jiaolian3SelectLeft17").show();
            $("#add-jiaolian3InsertLeft17").show();
            $("#add-jiaolian3SelectRight17").show();
            $("#add-jiaolian3InsertRight17").show();

            $("#add-jiaolian4SelectLeft17").show();
            $("#add-jiaolian4InsertLeft17").show();
            $("#add-jiaolian4SelectRight17").show();
            $("#add-jiaolian4InsertRight17").show();

            $("#add-jiaolian5SelectLeft17").show();
            $("#add-jiaolian5InsertLeft17").show();
            $("#add-jiaolian5SelectRight17").show();
            $("#add-jiaolian5InsertRight17").show();

            $("#add-jiaolian6SelectLeft17").show();
            $("#add-jiaolian6InsertLeft17").show();
            $("#add-jiaolian6SelectRight17").show();
            $("#add-jiaolian6InsertRight17").show();
        }
    })

    $('#add-kaijiaolian18').on('change', function () {
        var selectedValue18 = $(this).val();
        if (selectedValue18 == '开二孔') {
            $("#add-jiaolian3SelectLeft18").hide();
            $("#add-jiaolian3InsertLeft18").hide();
            $("#add-jiaolian3SelectRight18").hide();
            $("#add-jiaolian3InsertRight18").hide();

            $("#add-jiaolian4SelectLeft18").hide();
            $("#add-jiaolian4InsertLeft18").hide();
            $("#add-jiaolian4SelectRight18").hide();
            $("#add-jiaolian4InsertRight18").hide();

            $("#add-jiaolian5SelectLeft18").hide();
            $("#add-jiaolian5InsertLeft18").hide();
            $("#add-jiaolian5SelectRight18").hide();
            $("#add-jiaolian5InsertRight18").hide();

            $("#add-jiaolian6SelectLeft18").hide();
            $("#add-jiaolian6InsertLeft18").hide();
            $("#add-jiaolian6SelectRight18").hide();
            $("#add-jiaolian6InsertRight18").hide();

        }
        if (selectedValue18 == '开三孔') {
            $("#add-jiaolian3SelectLeft18").show();
            $("#add-jiaolian3InsertLeft18").show();
            $("#add-jiaolian3SelectRight18").show();
            $("#add-jiaolian3InsertRight18").show();

            $("#add-jiaolian4SelectLeft18").hide();
            $("#add-jiaolian4InsertLeft18").hide();
            $("#add-jiaolian4SelectRight18").hide();
            $("#add-jiaolian4InsertRight18").hide();

            $("#add-jiaolian5SelectLeft18").hide();
            $("#add-jiaolian5InsertLeft18").hide();
            $("#add-jiaolian5SelectRight18").hide();
            $("#add-jiaolian5InsertRight18").hide();

            $("#add-jiaolian6SelectLeft18").hide();
            $("#add-jiaolian6InsertLeft18").hide();
            $("#add-jiaolian6SelectRight18").hide();
            $("#add-jiaolian6InsertRight18").hide();
        }
        if (selectedValue18 == '开四孔') {
            $("#add-jiaolian3SelectLeft18").show();
            $("#add-jiaolian3InsertLeft18").show();
            $("#add-jiaolian3SelectRight18").show();
            $("#add-jiaolian3InsertRight18").show();

            $("#add-jiaolian4SelectLeft18").show();
            $("#add-jiaolian4InsertLeft18").show();
            $("#add-jiaolian4SelectRight18").show();
            $("#add-jiaolian4InsertRight18").show();

            $("#add-jiaolian5SelectLeft18").hide();
            $("#add-jiaolian5InsertLeft18").hide();
            $("#add-jiaolian5SelectRight18").hide();
            $("#add-jiaolian5InsertRight18").hide();

            $("#add-jiaolian6SelectLeft18").hide();
            $("#add-jiaolian6InsertLeft18").hide();
            $("#add-jiaolian6SelectRight18").hide();
            $("#add-jiaolian6InsertRight18").hide();
        }
        if (selectedValue18 == '开五孔') {
            $("#add-jiaolian3SelectLeft18").show();
            $("#add-jiaolian3InsertLeft18").show();
            $("#add-jiaolian3SelectRight18").show();
            $("#add-jiaolian3InsertRight18").show();

            $("#add-jiaolian4SelectLeft18").show();
            $("#add-jiaolian4InsertLeft18").show();
            $("#add-jiaolian4SelectRight18").show();
            $("#add-jiaolian4InsertRight18").show();

            $("#add-jiaolian5SelectLeft18").show();
            $("#add-jiaolian5InsertLeft18").show();
            $("#add-jiaolian5SelectRight18").show();
            $("#add-jiaolian5InsertRight18").show();

            $("#add-jiaolian6SelectLeft18").hide();
            $("#add-jiaolian6InsertLeft18").hide();
            $("#add-jiaolian6SelectRight18").hide();
            $("#add-jiaolian6InsertRight18").hide();
        }
        if (selectedValue18 == '开六孔') {
            $("#add-jiaolian3SelectLeft18").show();
            $("#add-jiaolian3InsertLeft18").show();
            $("#add-jiaolian3SelectRight18").show();
            $("#add-jiaolian3InsertRight18").show();

            $("#add-jiaolian4SelectLeft18").show();
            $("#add-jiaolian4InsertLeft18").show();
            $("#add-jiaolian4SelectRight18").show();
            $("#add-jiaolian4InsertRight18").show();

            $("#add-jiaolian5SelectLeft18").show();
            $("#add-jiaolian5InsertLeft18").show();
            $("#add-jiaolian5SelectRight18").show();
            $("#add-jiaolian5InsertRight18").show();

            $("#add-jiaolian6SelectLeft18").show();
            $("#add-jiaolian6InsertLeft18").show();
            $("#add-jiaolian6SelectRight18").show();
            $("#add-jiaolian6InsertRight18").show();
        }
    })

    $('#add-kaijiaolian19').on('change', function () {
        var selectedValue19 = $(this).val();
        if (selectedValue19 == '开二孔') {
            $("#add-jiaolian3SelectLeft19").hide();
            $("#add-jiaolian3InsertLeft19").hide();
            $("#add-jiaolian3SelectRight19").hide();
            $("#add-jiaolian3InsertRight19").hide();

            $("#add-jiaolian4SelectLeft19").hide();
            $("#add-jiaolian4InsertLeft19").hide();
            $("#add-jiaolian4SelectRight19").hide();
            $("#add-jiaolian4InsertRight19").hide();

            $("#add-jiaolian5SelectLeft19").hide();
            $("#add-jiaolian5InsertLeft19").hide();
            $("#add-jiaolian5SelectRight19").hide();
            $("#add-jiaolian5InsertRight19").hide();

            $("#add-jiaolian6SelectLeft19").hide();
            $("#add-jiaolian6InsertLeft19").hide();
            $("#add-jiaolian6SelectRight19").hide();
            $("#add-jiaolian6InsertRight19").hide();
           
        }
        if (selectedValue19 == '开三孔') {
            $("#add-jiaolian3SelectLeft19").show();
            $("#add-jiaolian3InsertLeft19").show();
            $("#add-jiaolian3SelectRight19").show();
            $("#add-jiaolian3InsertRight19").show();

            $("#add-jiaolian4SelectLeft19").hide();
            $("#add-jiaolian4InsertLeft19").hide();
            $("#add-jiaolian4SelectRight19").hide();
            $("#add-jiaolian4InsertRight19").hide();

            $("#add-jiaolian5SelectLeft19").hide();
            $("#add-jiaolian5InsertLeft19").hide();
            $("#add-jiaolian5SelectRight19").hide();
            $("#add-jiaolian5InsertRight19").hide();

            $("#add-jiaolian6SelectLeft19").hide();
            $("#add-jiaolian6InsertLeft19").hide();
            $("#add-jiaolian6SelectRight19").hide();
            $("#add-jiaolian6InsertRight19").hide();
        }
        if (selectedValue19 == '开四孔') {
            $("#add-jiaolian3SelectLeft19").show();
            $("#add-jiaolian3InsertLeft19").show();
            $("#add-jiaolian3SelectRight19").show();
            $("#add-jiaolian3InsertRight19").show();

            $("#add-jiaolian4SelectLeft19").show();
            $("#add-jiaolian4InsertLeft19").show();
            $("#add-jiaolian4SelectRight19").show();
            $("#add-jiaolian4InsertRight19").show();

            $("#add-jiaolian5SelectLeft19").hide();
            $("#add-jiaolian5InsertLeft19").hide();
            $("#add-jiaolian5SelectRight19").hide();
            $("#add-jiaolian5InsertRight19").hide();

            $("#add-jiaolian6SelectLeft19").hide();
            $("#add-jiaolian6InsertLeft19").hide();
            $("#add-jiaolian6SelectRight19").hide();
            $("#add-jiaolian6InsertRight19").hide();
        }
        if (selectedValue19 == '开五孔') {
            $("#add-jiaolian3SelectLeft19").show();
            $("#add-jiaolian3InsertLeft19").show();
            $("#add-jiaolian3SelectRight19").show();
            $("#add-jiaolian3InsertRight19").show();

            $("#add-jiaolian4SelectLeft19").show();
            $("#add-jiaolian4InsertLeft19").show();
            $("#add-jiaolian4SelectRight19").show();
            $("#add-jiaolian4InsertRight19").show();

            $("#add-jiaolian5SelectLeft19").show();
            $("#add-jiaolian5InsertLeft19").show();
            $("#add-jiaolian5SelectRight19").show();
            $("#add-jiaolian5InsertRight19").show();

            $("#add-jiaolian6SelectLeft19").hide();
            $("#add-jiaolian6InsertLeft19").hide();
            $("#add-jiaolian6SelectRight19").hide();
            $("#add-jiaolian6InsertRight19").hide();
        }
        if (selectedValue19 == '开六孔') {
            $("#add-jiaolian3SelectLeft19").show();
            $("#add-jiaolian3InsertLeft19").show();
            $("#add-jiaolian3SelectRight19").show();
            $("#add-jiaolian3InsertRight19").show();

            $("#add-jiaolian4SelectLeft19").show();
            $("#add-jiaolian4InsertLeft19").show();
            $("#add-jiaolian4SelectRight19").show();
            $("#add-jiaolian4InsertRight19").show();

            $("#add-jiaolian5SelectLeft19").show();
            $("#add-jiaolian5InsertLeft19").show();
            $("#add-jiaolian5SelectRight19").show();
            $("#add-jiaolian5InsertRight19").show();

            $("#add-jiaolian6SelectLeft19").show();
            $("#add-jiaolian6InsertLeft19").show();
            $("#add-jiaolian6SelectRight19").show();
            $("#add-jiaolian6InsertRight19").show();
        }
    })

})
$(document).ready(function () {
    $('#update-kaijiaolian').on('change', function () {
        var selectedValue = $(this).val();



        if (selectedValue == '开二孔') {
            $("#update-jiaolian3SelectLeft").hide();
            $("#update-jiaolian3InsertLeft").hide();
            $("#update-jiaolian3SelectRight").hide();
            $("#update-jiaolian3InsertRight").hide();

            $("#update-jiaolian4SelectLeft").hide();
            $("#update-jiaolian4InsertLeft").hide();
            $("#update-jiaolian4SelectRight").hide();
            $("#update-jiaolian4InsertRight").hide();

            $("#update-jiaolian5SelectLeft").hide();
            $("#update-jiaolian5InsertLeft").hide();
            $("#update-jiaolian5SelectRight").hide();
            $("#update-jiaolian5InsertRight").hide();

            $("#update-jiaolian6SelectLeft").hide();
            $("#update-jiaolian6InsertLeft").hide();
            $("#update-jiaolian6SelectRight").hide();
            $("#update-jiaolian6InsertRight").hide();

        }
        if (selectedValue == '开三孔') {
            $("#update-jiaolian3SelectLeft").show();
            $("#update-jiaolian3InsertLeft").show();
            $("#update-jiaolian3SelectRight").show();
            $("#update-jiaolian3InsertRight").show();

            $("#update-jiaolian4SelectLeft").hide();
            $("#update-jiaolian4InsertLeft").hide();
            $("#update-jiaolian4SelectRight").hide();
            $("#update-jiaolian4InsertRight").hide();

            $("#update-jiaolian5SelectLeft").hide();
            $("#update-jiaolian5InsertLeft").hide();
            $("#update-jiaolian5SelectRight").hide();
            $("#update-jiaolian5InsertRight").hide();

            $("#update-jiaolian6SelectLeft").hide();
            $("#update-jiaolian6InsertLeft").hide();
            $("#update-jiaolian6SelectRight").hide();
            $("#update-jiaolian6InsertRight").hide();


        }
        if (selectedValue == '开四孔') {
            $("#update-jiaolian3SelectLeft").show();
            $("#update-jiaolian3InsertLeft").show();
            $("#update-jiaolian3SelectRight").show();
            $("#update-jiaolian3InsertRight").show();

            $("#update-jiaolian4SelectLeft").show();
            $("#update-jiaolian4InsertLeft").show();
            $("#update-jiaolian4SelectRight").show();
            $("#update-jiaolian4InsertRight").show();

            $("#update-jiaolian5SelectLeft").hide();
            $("#update-jiaolian5InsertLeft").hide();
            $("#update-jiaolian5SelectRight").hide();
            $("#update-jiaolian5InsertRight").hide();

            $("#update-jiaolian6SelectLeft").hide();
            $("#update-jiaolian6InsertLeft").hide();
            $("#update-jiaolian6SelectRight").hide();
            $("#update-jiaolian6InsertRight").hide();
        }
        if (selectedValue == '开五孔') {
            $("#update-jiaolian3SelectLeft").show();
            $("#update-jiaolian3InsertLeft").show();
            $("#update-jiaolian3SelectRight").show();
            $("#update-jiaolian3InsertRight").show();

            $("#update-jiaolian4SelectLeft").show();
            $("#update-jiaolian4InsertLeft").show();
            $("#update-jiaolian4SelectRight").show();
            $("#update-jiaolian4InsertRight").show();

            $("#update-jiaolian5SelectLeft").show();
            $("#update-jiaolian5InsertLeft").show();
            $("#update-jiaolian5SelectRight").show();
            $("#update-jiaolian5InsertRight").show();

            $("#update-jiaolian6SelectLeft").hide();
            $("#update-jiaolian6InsertLeft").hide();
            $("#update-jiaolian6SelectRight").hide();
            $("#update-jiaolian6InsertRight").hide();
        }
        if (selectedValue == '开六孔') {
            $("#update-jiaolian3SelectLeft").show();
            $("#update-jiaolian3InsertLeft").show();
            $("#update-jiaolian3SelectRight").show();
            $("#update-jiaolian3InsertRight").show();

            $("#update-jiaolian4SelectLeft").show();
            $("#update-jiaolian4InsertLeft").show();
            $("#update-jiaolian4SelectRight").show();
            $("#update-jiaolian4InsertRight").show();

            $("#update-jiaolian5SelectLeft").show();
            $("#update-jiaolian5InsertLeft").show();
            $("#update-jiaolian5SelectRight").show();
            $("#update-jiaolian5InsertRight").show();

            $("#update-jiaolian6SelectLeft").show();
            $("#update-jiaolian6InsertLeft").show();
            $("#update-jiaolian6SelectRight").show();
            $("#update-jiaolian6InsertRight").show();
        }
    })

    $('#update-kaijiaolian1').on('change', function () {
        var selectedValue1 = $(this).val();
        if (selectedValue1 == '开二孔') {
            $("#update-jiaolian3SelectLeft1").hide();
            $("#update-jiaolian3InsertLeft1").hide();
            $("#update-jiaolian3SelectRight1").hide();
            $("#update-jiaolian3InsertRight1").hide();

            $("#update-jiaolian4SelectLeft1").hide();
            $("#update-jiaolian4InsertLeft1").hide();
            $("#update-jiaolian4SelectRight1").hide();
            $("#update-jiaolian4InsertRight1").hide();

            $("#update-jiaolian5SelectLeft1").hide();
            $("#update-jiaolian5InsertLeft1").hide();
            $("#update-jiaolian5SelectRight1").hide();
            $("#update-jiaolian5InsertRight1").hide();

            $("#update-jiaolian6SelectLeft1").hide();
            $("#update-jiaolian6InsertLeft1").hide();
            $("#update-jiaolian6SelectRight1").hide();
            $("#update-jiaolian6InsertRight1").hide();

        }
        if (selectedValue1 == '开三孔') {
            $("#update-jiaolian3SelectLeft1").show();
            $("#update-jiaolian3InsertLeft1").show();
            $("#update-jiaolian3SelectRight1").show();
            $("#update-jiaolian3InsertRight1").show();

            $("#update-jiaolian4SelectLeft1").hide();
            $("#update-jiaolian4InsertLeft1").hide();
            $("#update-jiaolian4SelectRight1").hide();
            $("#update-jiaolian4InsertRight1").hide();

            $("#update-jiaolian5SelectLeft1").hide();
            $("#update-jiaolian5InsertLeft1").hide();
            $("#update-jiaolian5SelectRight1").hide();
            $("#update-jiaolian5InsertRight1").hide();

            $("#update-jiaolian6SelectLeft1").hide();
            $("#update-jiaolian6InsertLeft1").hide();
            $("#update-jiaolian6SelectRight1").hide();
            $("#update-jiaolian6InsertRight1").hide();
        }
        if (selectedValue1 == '开四孔') {
            $("#update-jiaolian3SelectLeft1").show();
            $("#update-jiaolian3InsertLeft1").show();
            $("#update-jiaolian3SelectRight1").show();
            $("#update-jiaolian3InsertRight1").show();

            $("#update-jiaolian4SelectLeft1").show();
            $("#update-jiaolian4InsertLeft1").show();
            $("#update-jiaolian4SelectRight1").show();
            $("#update-jiaolian4InsertRight1").show();

            $("#update-jiaolian5SelectLeft1").hide();
            $("#update-jiaolian5InsertLeft1").hide();
            $("#update-jiaolian5SelectRight1").hide();
            $("#update-jiaolian5InsertRight1").hide();

            $("#update-jiaolian6SelectLeft1").hide();
            $("#update-jiaolian6InsertLeft1").hide();
            $("#update-jiaolian6SelectRight1").hide();
            $("#update-jiaolian6InsertRight1").hide();
        }
        if (selectedValue1 == '开五孔') {
            $("#update-jiaolian3SelectLeft1").show();
            $("#update-jiaolian3InsertLeft1").show();
            $("#update-jiaolian3SelectRight1").show();
            $("#update-jiaolian3InsertRight1").show();

            $("#update-jiaolian4SelectLeft1").show();
            $("#update-jiaolian4InsertLeft1").show();
            $("#update-jiaolian4SelectRight1").show();
            $("#update-jiaolian4InsertRight1").show();

            $("#update-jiaolian5SelectLeft1").show();
            $("#update-jiaolian5InsertLeft1").show();
            $("#update-jiaolian5SelectRight1").show();
            $("#update-jiaolian5InsertRight1").show();

            $("#update-jiaolian6SelectLeft1").hide();
            $("#update-jiaolian6InsertLeft1").hide();
            $("#update-jiaolian6SelectRight1").hide();
            $("#update-jiaolian6InsertRight1").hide();
        }
        if (selectedValue1 == '开六孔') {
            $("#update-jiaolian3SelectLeft1").show();
            $("#update-jiaolian3InsertLeft1").show();
            $("#update-jiaolian3SelectRight1").show();
            $("#update-jiaolian3InsertRight1").show();

            $("#update-jiaolian4SelectLeft1").show();
            $("#update-jiaolian4InsertLeft1").show();
            $("#update-jiaolian4SelectRight1").show();
            $("#update-jiaolian4InsertRight1").show();

            $("#update-jiaolian5SelectLeft1").show();
            $("#update-jiaolian5InsertLeft1").show();
            $("#update-jiaolian5SelectRight1").show();
            $("#update-jiaolian5InsertRight1").show();

            $("#update-jiaolian6SelectLeft1").show();
            $("#update-jiaolian6InsertLeft1").show();
            $("#update-jiaolian6SelectRight1").show();
            $("#update-jiaolian6InsertRight1").show();
        }
    })

    $('#update-kaijiaolian2').on('change', function () {
        var selectedValue2 = $(this).val();
        if (selectedValue2 == '开二孔') {
            $("#update-jiaolian3SelectLeft2").hide();
            $("#update-jiaolian3InsertLeft2").hide();
            $("#update-jiaolian3SelectRight2").hide();
            $("#update-jiaolian3InsertRight2").hide();

            $("#update-jiaolian4SelectLeft2").hide();
            $("#update-jiaolian4InsertLeft2").hide();
            $("#update-jiaolian4SelectRight2").hide();
            $("#update-jiaolian4InsertRight2").hide();

            $("#update-jiaolian5SelectLeft2").hide();
            $("#update-jiaolian5InsertLeft2").hide();
            $("#update-jiaolian5SelectRight2").hide();
            $("#update-jiaolian5InsertRight2").hide();

            $("#update-jiaolian6SelectLeft2").hide();
            $("#update-jiaolian6InsertLeft2").hide();
            $("#update-jiaolian6SelectRight2").hide();
            $("#update-jiaolian6InsertRight2").hide();

        }
        if (selectedValue2 == '开三孔') {
            $("#update-jiaolian3SelectLeft2").show();
            $("#update-jiaolian3InsertLeft2").show();
            $("#update-jiaolian3SelectRight2").show();
            $("#update-jiaolian3InsertRight2").show();

            $("#update-jiaolian4SelectLeft2").hide();
            $("#update-jiaolian4InsertLeft2").hide();
            $("#update-jiaolian4SelectRight2").hide();
            $("#update-jiaolian4InsertRight2").hide();

            $("#update-jiaolian5SelectLeft2").hide();
            $("#update-jiaolian5InsertLeft2").hide();
            $("#update-jiaolian5SelectRight2").hide();
            $("#update-jiaolian5InsertRight2").hide();

            $("#update-jiaolian6SelectLeft2").hide();
            $("#update-jiaolian6InsertLeft2").hide();
            $("#update-jiaolian6SelectRight2").hide();
            $("#update-jiaolian6InsertRight2").hide();
        }
        if (selectedValue2 == '开四孔') {
            $("#update-jiaolian3SelectLeft2").show();
            $("#update-jiaolian3InsertLeft2").show();
            $("#update-jiaolian3SelectRight2").show();
            $("#update-jiaolian3InsertRight2").show();

            $("#update-jiaolian4SelectLeft2").show();
            $("#update-jiaolian4InsertLeft2").show();
            $("#update-jiaolian4SelectRight2").show();
            $("#update-jiaolian4InsertRight2").show();

            $("#update-jiaolian5SelectLeft2").hide();
            $("#update-jiaolian5InsertLeft2").hide();
            $("#update-jiaolian5SelectRight2").hide();
            $("#update-jiaolian5InsertRight2").hide();

            $("#update-jiaolian6SelectLeft2").hide();
            $("#update-jiaolian6InsertLeft2").hide();
            $("#update-jiaolian6SelectRight2").hide();
            $("#update-jiaolian6InsertRight2").hide();
        }
        if (selectedValue2 == '开五孔') {
            $("#update-jiaolian3SelectLeft2").show();
            $("#update-jiaolian3InsertLeft2").show();
            $("#update-jiaolian3SelectRight2").show();
            $("#update-jiaolian3InsertRight2").show();

            $("#update-jiaolian4SelectLeft2").show();
            $("#update-jiaolian4InsertLeft2").show();
            $("#update-jiaolian4SelectRight2").show();
            $("#update-jiaolian4InsertRight2").show();

            $("#update-jiaolian5SelectLeft2").show();
            $("#update-jiaolian5InsertLeft2").show();
            $("#update-jiaolian5SelectRight2").show();
            $("#update-jiaolian5InsertRight2").show();

            $("#update-jiaolian6SelectLeft2").hide();
            $("#update-jiaolian6InsertLeft2").hide();
            $("#update-jiaolian6SelectRight2").hide();
            $("#update-jiaolian6InsertRight2").hide();
        }
        if (selectedValue2 == '开六孔') {
            $("#update-jiaolian3SelectLeft2").show();
            $("#update-jiaolian3InsertLeft2").show();
            $("#update-jiaolian3SelectRight2").show();
            $("#update-jiaolian3InsertRight2").show();

            $("#update-jiaolian4SelectLeft2").show();
            $("#update-jiaolian4InsertLeft2").show();
            $("#update-jiaolian4SelectRight2").show();
            $("#update-jiaolian4InsertRight2").show();

            $("#update-jiaolian5SelectLeft2").show();
            $("#update-jiaolian5InsertLeft2").show();
            $("#update-jiaolian5SelectRight2").show();
            $("#update-jiaolian5InsertRight2").show();

            $("#update-jiaolian6SelectLeft2").show();
            $("#update-jiaolian6InsertLeft2").show();
            $("#update-jiaolian6SelectRight2").show();
            $("#update-jiaolian6InsertRight2").show();
        }
    })

    $('#update-kaijiaolian3').on('change', function () {
        var selectedValue3 = $(this).val();
        if (selectedValue3 == '开二孔') {
            $("#update-jiaolian3SelectLeft3").hide();
            $("#update-jiaolian3InsertLeft3").hide();
            $("#update-jiaolian3SelectRight3").hide();
            $("#update-jiaolian3InsertRight3").hide();

            $("#update-jiaolian4SelectLeft3").hide();
            $("#update-jiaolian4InsertLeft3").hide();
            $("#update-jiaolian4SelectRight3").hide();
            $("#update-jiaolian4InsertRight3").hide();

            $("#update-jiaolian5SelectLeft3").hide();
            $("#update-jiaolian5InsertLeft3").hide();
            $("#update-jiaolian5SelectRight3").hide();
            $("#update-jiaolian5InsertRight3").hide();

            $("#update-jiaolian6SelectLeft3").hide();
            $("#update-jiaolian6InsertLeft3").hide();
            $("#update-jiaolian6SelectRight3").hide();
            $("#update-jiaolian6InsertRight3").hide();

        }
        if (selectedValue3 == '开三孔') {
            $("#update-jiaolian3SelectLeft3").show();
            $("#update-jiaolian3InsertLeft3").show();
            $("#update-jiaolian3SelectRight3").show();
            $("#update-jiaolian3InsertRight3").show();

            $("#update-jiaolian4SelectLeft3").hide();
            $("#update-jiaolian4InsertLeft3").hide();
            $("#update-jiaolian4SelectRight3").hide();
            $("#update-jiaolian4InsertRight3").hide();

            $("#update-jiaolian5SelectLeft3").hide();
            $("#update-jiaolian5InsertLeft3").hide();
            $("#update-jiaolian5SelectRight3").hide();
            $("#update-jiaolian5InsertRight3").hide();

            $("#update-jiaolian6SelectLeft3").hide();
            $("#update-jiaolian6InsertLeft3").hide();
            $("#update-jiaolian6SelectRight3").hide();
            $("#update-jiaolian6InsertRight3").hide();
        }
        if (selectedValue3 == '开四孔') {
            $("#update-jiaolian3SelectLeft3").show();
            $("#update-jiaolian3InsertLeft3").show();
            $("#update-jiaolian3SelectRight3").show();
            $("#update-jiaolian3InsertRight3").show();

            $("#update-jiaolian4SelectLeft3").show();
            $("#update-jiaolian4InsertLeft3").show();
            $("#update-jiaolian4SelectRight3").show();
            $("#update-jiaolian4InsertRight3").show();

            $("#update-jiaolian5SelectLeft3").hide();
            $("#update-jiaolian5InsertLeft3").hide();
            $("#update-jiaolian5SelectRight3").hide();
            $("#update-jiaolian5InsertRight3").hide();

            $("#update-jiaolian6SelectLeft3").hide();
            $("#update-jiaolian6InsertLeft3").hide();
            $("#update-jiaolian6SelectRight3").hide();
            $("#update-jiaolian6InsertRight3").hide();
        }
        if (selectedValue3 == '开五孔') {
            $("#update-jiaolian3SelectLeft3").show();
            $("#update-jiaolian3InsertLeft3").show();
            $("#update-jiaolian3SelectRight3").show();
            $("#update-jiaolian3InsertRight3").show();

            $("#update-jiaolian4SelectLeft3").show();
            $("#update-jiaolian4InsertLeft3").show();
            $("#update-jiaolian4SelectRight3").show();
            $("#update-jiaolian4InsertRight3").show();

            $("#update-jiaolian5SelectLeft3").show();
            $("#update-jiaolian5InsertLeft3").show();
            $("#update-jiaolian5SelectRight3").show();
            $("#update-jiaolian5InsertRight3").show();

            $("#update-jiaolian6SelectLeft3").hide();
            $("#update-jiaolian6InsertLeft3").hide();
            $("#update-jiaolian6SelectRight3").hide();
            $("#update-jiaolian6InsertRight3").hide();
        }
        if (selectedValue3 == '开六孔') {
            $("#update-jiaolian3SelectLeft3").show();
            $("#update-jiaolian3InsertLeft3").show();
            $("#update-jiaolian3SelectRight3").show();
            $("#update-jiaolian3InsertRight3").show();

            $("#update-jiaolian4SelectLeft3").show();
            $("#update-jiaolian4InsertLeft3").show();
            $("#update-jiaolian4SelectRight3").show();
            $("#update-jiaolian4InsertRight3").show();

            $("#update-jiaolian5SelectLeft3").show();
            $("#update-jiaolian5InsertLeft3").show();
            $("#update-jiaolian5SelectRight3").show();
            $("#update-jiaolian5InsertRight3").show();

            $("#update-jiaolian6SelectLeft3").show();
            $("#update-jiaolian6InsertLeft3").show();
            $("#update-jiaolian6SelectRight3").show();
            $("#update-jiaolian6InsertRight3").show();
        }
    })

    $('#update-kaijiaolian4').on('change', function () {
        var selectedValue4 = $(this).val();
        if (selectedValue4 == '开二孔') {
            $("#update-jiaolian3SelectLeft4").hide();
            $("#update-jiaolian3InsertLeft4").hide();
            $("#update-jiaolian3SelectRight4").hide();
            $("#update-jiaolian3InsertRight4").hide();

            $("#update-jiaolian4SelectLeft4").hide();
            $("#update-jiaolian4InsertLeft4").hide();
            $("#update-jiaolian4SelectRight4").hide();
            $("#update-jiaolian4InsertRight4").hide();

            $("#update-jiaolian5SelectLeft4").hide();
            $("#update-jiaolian5InsertLeft4").hide();
            $("#update-jiaolian5SelectRight4").hide();
            $("#update-jiaolian5InsertRight4").hide();

            $("#update-jiaolian6SelectLeft4").hide();
            $("#update-jiaolian6InsertLeft4").hide();
            $("#update-jiaolian6SelectRight4").hide();
            $("#update-jiaolian6InsertRight4").hide();

        }
        if (selectedValue4 == '开三孔') {
            $("#update-jiaolian3SelectLeft4").show();
            $("#update-jiaolian3InsertLeft4").show();
            $("#update-jiaolian3SelectRight4").show();
            $("#update-jiaolian3InsertRight4").show();

            $("#update-jiaolian4SelectLeft4").hide();
            $("#update-jiaolian4InsertLeft4").hide();
            $("#update-jiaolian4SelectRight4").hide();
            $("#update-jiaolian4InsertRight4").hide();

            $("#update-jiaolian5SelectLeft4").hide();
            $("#update-jiaolian5InsertLeft4").hide();
            $("#update-jiaolian5SelectRight4").hide();
            $("#update-jiaolian5InsertRight4").hide();

            $("#update-jiaolian6SelectLeft4").hide();
            $("#update-jiaolian6InsertLeft4").hide();
            $("#update-jiaolian6SelectRight4").hide();
            $("#update-jiaolian6InsertRight4").hide();
        }
        if (selectedValue4 == '开四孔') {
            $("#update-jiaolian3SelectLeft4").show();
            $("#update-jiaolian3InsertLeft4").show();
            $("#update-jiaolian3SelectRight4").show();
            $("#update-jiaolian3InsertRight4").show();

            $("#update-jiaolian4SelectLeft4").show();
            $("#update-jiaolian4InsertLeft4").show();
            $("#update-jiaolian4SelectRight4").show();
            $("#update-jiaolian4InsertRight4").show();

            $("#update-jiaolian5SelectLeft4").hide();
            $("#update-jiaolian5InsertLeft4").hide();
            $("#update-jiaolian5SelectRight4").hide();
            $("#update-jiaolian5InsertRight4").hide();

            $("#update-jiaolian6SelectLeft4").hide();
            $("#update-jiaolian6InsertLeft4").hide();
            $("#update-jiaolian6SelectRight4").hide();
            $("#update-jiaolian6InsertRight4").hide();
        }
        if (selectedValue4 == '开五孔') {
            $("#update-jiaolian3SelectLeft4").show();
            $("#update-jiaolian3InsertLeft4").show();
            $("#update-jiaolian3SelectRight4").show();
            $("#update-jiaolian3InsertRight4").show();

            $("#update-jiaolian4SelectLeft4").show();
            $("#update-jiaolian4InsertLeft4").show();
            $("#update-jiaolian4SelectRight4").show();
            $("#update-jiaolian4InsertRight4").show();

            $("#update-jiaolian5SelectLeft4").show();
            $("#update-jiaolian5InsertLeft4").show();
            $("#update-jiaolian5SelectRight4").show();
            $("#update-jiaolian5InsertRight4").show();

            $("#update-jiaolian6SelectLeft4").hide();
            $("#update-jiaolian6InsertLeft4").hide();
            $("#update-jiaolian6SelectRight4").hide();
            $("#update-jiaolian6InsertRight4").hide();
        }
        if (selectedValue4 == '开六孔') {
            $("#update-jiaolian3SelectLeft4").show();
            $("#update-jiaolian3InsertLeft4").show();
            $("#update-jiaolian3SelectRight4").show();
            $("#update-jiaolian3InsertRight4").show();

            $("#update-jiaolian4SelectLeft4").show();
            $("#update-jiaolian4InsertLeft4").show();
            $("#update-jiaolian4SelectRight4").show();
            $("#update-jiaolian4InsertRight4").show();

            $("#update-jiaolian5SelectLeft4").show();
            $("#update-jiaolian5InsertLeft4").show();
            $("#update-jiaolian5SelectRight4").show();
            $("#update-jiaolian5InsertRight4").show();

            $("#update-jiaolian6SelectLeft4").show();
            $("#update-jiaolian6InsertLeft4").show();
            $("#update-jiaolian6SelectRight4").show();
            $("#update-jiaolian6InsertRight4").show();
        }
    })

    $('#update-kaijiaolian5').on('change', function () {
        var selectedValue5 = $(this).val();
        if (selectedValue5 == '开二孔') {
            $("#update-jiaolian3SelectLeft5").hide();
            $("#update-jiaolian3InsertLeft5").hide();
            $("#update-jiaolian3SelectRight5").hide();
            $("#update-jiaolian3InsertRight5").hide();

            $("#update-jiaolian4SelectLeft5").hide();
            $("#update-jiaolian4InsertLeft5").hide();
            $("#update-jiaolian4SelectRight5").hide();
            $("#update-jiaolian4InsertRight5").hide();

            $("#update-jiaolian5SelectLeft5").hide();
            $("#update-jiaolian5InsertLeft5").hide();
            $("#update-jiaolian5SelectRight5").hide();
            $("#update-jiaolian5InsertRight5").hide();

            $("#update-jiaolian6SelectLeft5").hide();
            $("#update-jiaolian6InsertLeft5").hide();
            $("#update-jiaolian6SelectRight5").hide();
            $("#update-jiaolian6InsertRight5").hide();

        }
        if (selectedValue5 == '开三孔') {
            $("#update-jiaolian3SelectLeft5").show();
            $("#update-jiaolian3InsertLeft5").show();
            $("#update-jiaolian3SelectRight5").show();
            $("#update-jiaolian3InsertRight5").show();

            $("#update-jiaolian4SelectLeft5").hide();
            $("#update-jiaolian4InsertLeft5").hide();
            $("#update-jiaolian4SelectRight5").hide();
            $("#update-jiaolian4InsertRight5").hide();

            $("#update-jiaolian5SelectLeft5").hide();
            $("#update-jiaolian5InsertLeft5").hide();
            $("#update-jiaolian5SelectRight5").hide();
            $("#update-jiaolian5InsertRight5").hide();

            $("#update-jiaolian6SelectLeft5").hide();
            $("#update-jiaolian6InsertLeft5").hide();
            $("#update-jiaolian6SelectRight5").hide();
            $("#update-jiaolian6InsertRight5").hide();
        }
        if (selectedValue5 == '开四孔') {
            $("#update-jiaolian3SelectLeft5").show();
            $("#update-jiaolian3InsertLeft5").show();
            $("#update-jiaolian3SelectRight5").show();
            $("#update-jiaolian3InsertRight5").show();

            $("#update-jiaolian4SelectLeft5").show();
            $("#update-jiaolian4InsertLeft5").show();
            $("#update-jiaolian4SelectRight5").show();
            $("#update-jiaolian4InsertRight5").show();

            $("#update-jiaolian5SelectLeft5").hide();
            $("#update-jiaolian5InsertLeft5").hide();
            $("#update-jiaolian5SelectRight5").hide();
            $("#update-jiaolian5InsertRight5").hide();

            $("#update-jiaolian6SelectLeft5").hide();
            $("#update-jiaolian6InsertLeft5").hide();
            $("#update-jiaolian6SelectRight5").hide();
            $("#update-jiaolian6InsertRight5").hide();
        }
        if (selectedValue5 == '开五孔') {
            $("#update-jiaolian3SelectLeft5").show();
            $("#update-jiaolian3InsertLeft5").show();
            $("#update-jiaolian3SelectRight5").show();
            $("#update-jiaolian3InsertRight5").show();

            $("#update-jiaolian4SelectLeft5").show();
            $("#update-jiaolian4InsertLeft5").show();
            $("#update-jiaolian4SelectRight5").show();
            $("#update-jiaolian4InsertRight5").show();

            $("#update-jiaolian5SelectLeft5").show();
            $("#update-jiaolian5InsertLeft5").show();
            $("#update-jiaolian5SelectRight5").show();
            $("#update-jiaolian5InsertRight5").show();

            $("#update-jiaolian6SelectLeft5").hide();
            $("#update-jiaolian6InsertLeft5").hide();
            $("#update-jiaolian6SelectRight5").hide();
            $("#update-jiaolian6InsertRight5").hide();
        }
        if (selectedValue5 == '开六孔') {
            $("#update-jiaolian3SelectLeft5").show();
            $("#update-jiaolian3InsertLeft5").show();
            $("#update-jiaolian3SelectRight5").show();
            $("#update-jiaolian3InsertRight5").show();

            $("#update-jiaolian4SelectLeft5").show();
            $("#update-jiaolian4InsertLeft5").show();
            $("#update-jiaolian4SelectRight5").show();
            $("#update-jiaolian4InsertRight5").show();

            $("#update-jiaolian5SelectLeft5").show();
            $("#update-jiaolian5InsertLeft5").show();
            $("#update-jiaolian5SelectRight5").show();
            $("#update-jiaolian5InsertRight5").show();

            $("#update-jiaolian6SelectLeft5").show();
            $("#update-jiaolian6InsertLeft5").show();
            $("#update-jiaolian6SelectRight5").show();
            $("#update-jiaolian6InsertRight5").show();
        }
    })

    $('#update-kaijiaolian6').on('change', function () {
        var selectedValue6 = $(this).val();
        if (selectedValue6 == '开二孔') {
            $("#update-jiaolian3SelectLeft6").hide();
            $("#update-jiaolian3InsertLeft6").hide();
            $("#update-jiaolian3SelectRight6").hide();
            $("#update-jiaolian3InsertRight6").hide();

            $("#update-jiaolian4SelectLeft6").hide();
            $("#update-jiaolian4InsertLeft6").hide();
            $("#update-jiaolian4SelectRight6").hide();
            $("#update-jiaolian4InsertRight6").hide();

            $("#update-jiaolian5SelectLeft6").hide();
            $("#update-jiaolian5InsertLeft6").hide();
            $("#update-jiaolian5SelectRight6").hide();
            $("#update-jiaolian5InsertRight6").hide();

            $("#update-jiaolian6SelectLeft6").hide();
            $("#update-jiaolian6InsertLeft6").hide();
            $("#update-jiaolian6SelectRight6").hide();
            $("#update-jiaolian6InsertRight6").hide();

        }
        if (selectedValue6 == '开三孔') {
            $("#update-jiaolian3SelectLeft6").show();
            $("#update-jiaolian3InsertLeft6").show();
            $("#update-jiaolian3SelectRight6").show();
            $("#update-jiaolian3InsertRight6").show();

            $("#update-jiaolian4SelectLeft6").hide();
            $("#update-jiaolian4InsertLeft6").hide();
            $("#update-jiaolian4SelectRight6").hide();
            $("#update-jiaolian4InsertRight6").hide();

            $("#update-jiaolian5SelectLeft6").hide();
            $("#update-jiaolian5InsertLeft6").hide();
            $("#update-jiaolian5SelectRight6").hide();
            $("#update-jiaolian5InsertRight6").hide();

            $("#update-jiaolian6SelectLeft6").hide();
            $("#update-jiaolian6InsertLeft6").hide();
            $("#update-jiaolian6SelectRight6").hide();
            $("#update-jiaolian6InsertRight6").hide();
        }
        if (selectedValue6 == '开四孔') {
            $("#update-jiaolian3SelectLeft6").show();
            $("#update-jiaolian3InsertLeft6").show();
            $("#update-jiaolian3SelectRight6").show();
            $("#update-jiaolian3InsertRight6").show();

            $("#update-jiaolian4SelectLeft6").show();
            $("#update-jiaolian4InsertLeft6").show();
            $("#update-jiaolian4SelectRight6").show();
            $("#update-jiaolian4InsertRight6").show();

            $("#update-jiaolian5SelectLeft6").hide();
            $("#update-jiaolian5InsertLeft6").hide();
            $("#update-jiaolian5SelectRight6").hide();
            $("#update-jiaolian5InsertRight6").hide();

            $("#update-jiaolian6SelectLeft6").hide();
            $("#update-jiaolian6InsertLeft6").hide();
            $("#update-jiaolian6SelectRight6").hide();
            $("#update-jiaolian6InsertRight6").hide();
        }
        if (selectedValue6 == '开五孔') {
            $("#update-jiaolian3SelectLeft6").show();
            $("#update-jiaolian3InsertLeft6").show();
            $("#update-jiaolian3SelectRight6").show();
            $("#update-jiaolian3InsertRight6").show();

            $("#update-jiaolian4SelectLeft6").show();
            $("#update-jiaolian4InsertLeft6").show();
            $("#update-jiaolian4SelectRight6").show();
            $("#update-jiaolian4InsertRight6").show();

            $("#update-jiaolian5SelectLeft6").show();
            $("#update-jiaolian5InsertLeft6").show();
            $("#update-jiaolian5SelectRight6").show();
            $("#update-jiaolian5InsertRight6").show();

            $("#update-jiaolian6SelectLeft6").hide();
            $("#update-jiaolian6InsertLeft6").hide();
            $("#update-jiaolian6SelectRight6").hide();
            $("#update-jiaolian6InsertRight6").hide();
        }
        if (selectedValue6 == '开六孔') {
            $("#update-jiaolian3SelectLeft6").show();
            $("#update-jiaolian3InsertLeft6").show();
            $("#update-jiaolian3SelectRight6").show();
            $("#update-jiaolian3InsertRight6").show();

            $("#update-jiaolian4SelectLeft6").show();
            $("#update-jiaolian4InsertLeft6").show();
            $("#update-jiaolian4SelectRight6").show();
            $("#update-jiaolian4InsertRight6").show();

            $("#update-jiaolian5SelectLeft6").show();
            $("#update-jiaolian5InsertLeft6").show();
            $("#update-jiaolian5SelectRight6").show();
            $("#update-jiaolian5InsertRight6").show();

            $("#update-jiaolian6SelectLeft6").show();
            $("#update-jiaolian6InsertLeft6").show();
            $("#update-jiaolian6SelectRight6").show();
            $("#update-jiaolian6InsertRight6").show();
        }
    })

    $('#update-kaijiaolian7').on('change', function () {
        var selectedValue7 = $(this).val();
        if (selectedValue7 == '开二孔') {
            $("#update-jiaolian3SelectLeft7").hide();
            $("#update-jiaolian3InsertLeft7").hide();
            $("#update-jiaolian3SelectRight7").hide();
            $("#update-jiaolian3InsertRight7").hide();

            $("#update-jiaolian4SelectLeft7").hide();
            $("#update-jiaolian4InsertLeft7").hide();
            $("#update-jiaolian4SelectRight7").hide();
            $("#update-jiaolian4InsertRight7").hide();

            $("#update-jiaolian5SelectLeft7").hide();
            $("#update-jiaolian5InsertLeft7").hide();
            $("#update-jiaolian5SelectRight7").hide();
            $("#update-jiaolian5InsertRight7").hide();

            $("#update-jiaolian6SelectLeft7").hide();
            $("#update-jiaolian6InsertLeft7").hide();
            $("#update-jiaolian6SelectRight7").hide();
            $("#update-jiaolian6InsertRight7").hide();

        }
        if (selectedValue7 == '开三孔') {
            $("#update-jiaolian3SelectLeft7").show();
            $("#update-jiaolian3InsertLeft7").show();
            $("#update-jiaolian3SelectRight7").show();
            $("#update-jiaolian3InsertRight7").show();

            $("#update-jiaolian4SelectLeft7").hide();
            $("#update-jiaolian4InsertLeft7").hide();
            $("#update-jiaolian4SelectRight7").hide();
            $("#update-jiaolian4InsertRight7").hide();

            $("#update-jiaolian5SelectLeft7").hide();
            $("#update-jiaolian5InsertLeft7").hide();
            $("#update-jiaolian5SelectRight7").hide();
            $("#update-jiaolian5InsertRight7").hide();

            $("#update-jiaolian6SelectLeft7").hide();
            $("#update-jiaolian6InsertLeft7").hide();
            $("#update-jiaolian6SelectRight7").hide();
            $("#update-jiaolian6InsertRight7").hide();
        }
        if (selectedValue7 == '开四孔') {
            $("#update-jiaolian3SelectLeft7").show();
            $("#update-jiaolian3InsertLeft7").show();
            $("#update-jiaolian3SelectRight7").show();
            $("#update-jiaolian3InsertRight7").show();

            $("#update-jiaolian4SelectLeft7").show();
            $("#update-jiaolian4InsertLeft7").show();
            $("#update-jiaolian4SelectRight7").show();
            $("#update-jiaolian4InsertRight7").show();

            $("#update-jiaolian5SelectLeft7").hide();
            $("#update-jiaolian5InsertLeft7").hide();
            $("#update-jiaolian5SelectRight7").hide();
            $("#update-jiaolian5InsertRight7").hide();

            $("#update-jiaolian6SelectLeft7").hide();
            $("#update-jiaolian6InsertLeft7").hide();
            $("#update-jiaolian6SelectRight7").hide();
            $("#update-jiaolian6InsertRight7").hide();
        }
        if (selectedValue7 == '开五孔') {
            $("#update-jiaolian3SelectLeft7").show();
            $("#update-jiaolian3InsertLeft7").show();
            $("#update-jiaolian3SelectRight7").show();
            $("#update-jiaolian3InsertRight7").show();

            $("#update-jiaolian4SelectLeft7").show();
            $("#update-jiaolian4InsertLeft7").show();
            $("#update-jiaolian4SelectRight7").show();
            $("#update-jiaolian4InsertRight7").show();

            $("#update-jiaolian5SelectLeft7").show();
            $("#update-jiaolian5InsertLeft7").show();
            $("#update-jiaolian5SelectRight7").show();
            $("#update-jiaolian5InsertRight7").show();

            $("#update-jiaolian6SelectLeft7").hide();
            $("#update-jiaolian6InsertLeft7").hide();
            $("#update-jiaolian6SelectRight7").hide();
            $("#update-jiaolian6InsertRight7").hide();
        }
        if (selectedValue7 == '开六孔') {
            $("#update-jiaolian3SelectLeft7").show();
            $("#update-jiaolian3InsertLeft7").show();
            $("#update-jiaolian3SelectRight7").show();
            $("#update-jiaolian3InsertRight7").show();

            $("#update-jiaolian4SelectLeft7").show();
            $("#update-jiaolian4InsertLeft7").show();
            $("#update-jiaolian4SelectRight7").show();
            $("#update-jiaolian4InsertRight7").show();

            $("#update-jiaolian5SelectLeft7").show();
            $("#update-jiaolian5InsertLeft7").show();
            $("#update-jiaolian5SelectRight7").show();
            $("#update-jiaolian5InsertRight7").show();

            $("#update-jiaolian6SelectLeft7").show();
            $("#update-jiaolian6InsertLeft7").show();
            $("#update-jiaolian6SelectRight7").show();
            $("#update-jiaolian6InsertRight7").show();
        }
    })

    $('#update-kaijiaolian8').on('change', function () {
        var selectedValue8 = $(this).val();
        if (selectedValue8 == '开二孔') {
            $("#update-jiaolian3SelectLeft8").hide();
            $("#update-jiaolian3InsertLeft8").hide();
            $("#update-jiaolian3SelectRight8").hide();
            $("#update-jiaolian3InsertRight8").hide();

            $("#update-jiaolian4SelectLeft8").hide();
            $("#update-jiaolian4InsertLeft8").hide();
            $("#update-jiaolian4SelectRight8").hide();
            $("#update-jiaolian4InsertRight8").hide();

            $("#update-jiaolian5SelectLeft8").hide();
            $("#update-jiaolian5InsertLeft8").hide();
            $("#update-jiaolian5SelectRight8").hide();
            $("#update-jiaolian5InsertRight8").hide();

            $("#update-jiaolian6SelectLeft8").hide();
            $("#update-jiaolian6InsertLeft8").hide();
            $("#update-jiaolian6SelectRight8").hide();
            $("#update-jiaolian6InsertRight8").hide();

        }
        if (selectedValue8 == '开三孔') {
            $("#update-jiaolian3SelectLeft8").show();
            $("#update-jiaolian3InsertLeft8").show();
            $("#update-jiaolian3SelectRight8").show();
            $("#update-jiaolian3InsertRight8").show();

            $("#update-jiaolian4SelectLeft8").hide();
            $("#update-jiaolian4InsertLeft8").hide();
            $("#update-jiaolian4SelectRight8").hide();
            $("#update-jiaolian4InsertRight8").hide();

            $("#update-jiaolian5SelectLeft8").hide();
            $("#update-jiaolian5InsertLeft8").hide();
            $("#update-jiaolian5SelectRight8").hide();
            $("#update-jiaolian5InsertRight8").hide();

            $("#update-jiaolian6SelectLeft8").hide();
            $("#update-jiaolian6InsertLeft8").hide();
            $("#update-jiaolian6SelectRight8").hide();
            $("#update-jiaolian6InsertRight8").hide();
        }
        if (selectedValue8 == '开四孔') {
            $("#update-jiaolian3SelectLeft8").show();
            $("#update-jiaolian3InsertLeft8").show();
            $("#update-jiaolian3SelectRight8").show();
            $("#update-jiaolian3InsertRight8").show();

            $("#update-jiaolian4SelectLeft8").show();
            $("#update-jiaolian4InsertLeft8").show();
            $("#update-jiaolian4SelectRight8").show();
            $("#update-jiaolian4InsertRight8").show();

            $("#update-jiaolian5SelectLeft8").hide();
            $("#update-jiaolian5InsertLeft8").hide();
            $("#update-jiaolian5SelectRight8").hide();
            $("#update-jiaolian5InsertRight8").hide();

            $("#update-jiaolian6SelectLeft8").hide();
            $("#update-jiaolian6InsertLeft8").hide();
            $("#update-jiaolian6SelectRight8").hide();
            $("#update-jiaolian6InsertRight8").hide();
        }
        if (selectedValue8 == '开五孔') {
            $("#update-jiaolian3SelectLeft8").show();
            $("#update-jiaolian3InsertLeft8").show();
            $("#update-jiaolian3SelectRight8").show();
            $("#update-jiaolian3InsertRight8").show();

            $("#update-jiaolian4SelectLeft8").show();
            $("#update-jiaolian4InsertLeft8").show();
            $("#update-jiaolian4SelectRight8").show();
            $("#update-jiaolian4InsertRight8").show();

            $("#update-jiaolian5SelectLeft8").show();
            $("#update-jiaolian5InsertLeft8").show();
            $("#update-jiaolian5SelectRight8").show();
            $("#update-jiaolian5InsertRight8").show();

            $("#update-jiaolian6SelectLeft8").hide();
            $("#update-jiaolian6InsertLeft8").hide();
            $("#update-jiaolian6SelectRight8").hide();
            $("#update-jiaolian6InsertRight8").hide();
        }
        if (selectedValue8 == '开六孔') {
            $("#update-jiaolian3SelectLeft8").show();
            $("#update-jiaolian3InsertLeft8").show();
            $("#update-jiaolian3SelectRight8").show();
            $("#update-jiaolian3InsertRight8").show();

            $("#update-jiaolian4SelectLeft8").show();
            $("#update-jiaolian4InsertLeft8").show();
            $("#update-jiaolian4SelectRight8").show();
            $("#update-jiaolian4InsertRight8").show();

            $("#update-jiaolian5SelectLeft8").show();
            $("#update-jiaolian5InsertLeft8").show();
            $("#update-jiaolian5SelectRight8").show();
            $("#update-jiaolian5InsertRight8").show();

            $("#update-jiaolian6SelectLeft8").show();
            $("#update-jiaolian6InsertLeft8").show();
            $("#update-jiaolian6SelectRight8").show();
            $("#update-jiaolian6InsertRight8").show();
        }
    })

    $('#update-kaijiaolian9').on('change', function () {
        var selectedValue9 = $(this).val();
        if (selectedValue9 == '开二孔') {
            $("#update-jiaolian3SelectLeft9").hide();
            $("#update-jiaolian3InsertLeft9").hide();
            $("#update-jiaolian3SelectRight9").hide();
            $("#update-jiaolian3InsertRight9").hide();

            $("#update-jiaolian4SelectLeft9").hide();
            $("#update-jiaolian4InsertLeft9").hide();
            $("#update-jiaolian4SelectRight9").hide();
            $("#update-jiaolian4InsertRight9").hide();

            $("#update-jiaolian5SelectLeft9").hide();
            $("#update-jiaolian5InsertLeft9").hide();
            $("#update-jiaolian5SelectRight9").hide();
            $("#update-jiaolian5InsertRight9").hide();

            $("#update-jiaolian6SelectLeft9").hide();
            $("#update-jiaolian6InsertLeft9").hide();
            $("#update-jiaolian6SelectRight9").hide();
            $("#update-jiaolian6InsertRight9").hide();

        }
        if (selectedValue9 == '开三孔') {
            $("#update-jiaolian3SelectLeft9").show();
            $("#update-jiaolian3InsertLeft9").show();
            $("#update-jiaolian3SelectRight9").show();
            $("#update-jiaolian3InsertRight9").show();

            $("#update-jiaolian4SelectLeft9").hide();
            $("#update-jiaolian4InsertLeft9").hide();
            $("#update-jiaolian4SelectRight9").hide();
            $("#update-jiaolian4InsertRight9").hide();

            $("#update-jiaolian5SelectLeft9").hide();
            $("#update-jiaolian5InsertLeft9").hide();
            $("#update-jiaolian5SelectRight9").hide();
            $("#update-jiaolian5InsertRight9").hide();

            $("#update-jiaolian6SelectLeft9").hide();
            $("#update-jiaolian6InsertLeft9").hide();
            $("#update-jiaolian6SelectRight9").hide();
            $("#update-jiaolian6InsertRight9").hide();
        }
        if (selectedValue9 == '开四孔') {
            $("#update-jiaolian3SelectLeft9").show();
            $("#update-jiaolian3InsertLeft9").show();
            $("#update-jiaolian3SelectRight9").show();
            $("#update-jiaolian3InsertRight9").show();

            $("#update-jiaolian4SelectLeft9").show();
            $("#update-jiaolian4InsertLeft9").show();
            $("#update-jiaolian4SelectRight9").show();
            $("#update-jiaolian4InsertRight9").show();

            $("#update-jiaolian5SelectLeft9").hide();
            $("#update-jiaolian5InsertLeft9").hide();
            $("#update-jiaolian5SelectRight9").hide();
            $("#update-jiaolian5InsertRight9").hide();

            $("#update-jiaolian6SelectLeft9").hide();
            $("#update-jiaolian6InsertLeft9").hide();
            $("#update-jiaolian6SelectRight9").hide();
            $("#update-jiaolian6InsertRight9").hide();
        }
        if (selectedValue9 == '开五孔') {
            $("#update-jiaolian3SelectLeft9").show();
            $("#update-jiaolian3InsertLeft9").show();
            $("#update-jiaolian3SelectRight9").show();
            $("#update-jiaolian3InsertRight9").show();

            $("#update-jiaolian4SelectLeft9").show();
            $("#update-jiaolian4InsertLeft9").show();
            $("#update-jiaolian4SelectRight9").show();
            $("#update-jiaolian4InsertRight9").show();

            $("#update-jiaolian5SelectLeft9").show();
            $("#update-jiaolian5InsertLeft9").show();
            $("#update-jiaolian5SelectRight9").show();
            $("#update-jiaolian5InsertRight9").show();

            $("#update-jiaolian6SelectLeft9").hide();
            $("#update-jiaolian6InsertLeft9").hide();
            $("#update-jiaolian6SelectRight9").hide();
            $("#update-jiaolian6InsertRight9").hide();
        }
        if (selectedValue9 == '开六孔') {
            $("#update-jiaolian3SelectLeft9").show();
            $("#update-jiaolian3InsertLeft9").show();
            $("#update-jiaolian3SelectRight9").show();
            $("#update-jiaolian3InsertRight9").show();

            $("#update-jiaolian4SelectLeft9").show();
            $("#update-jiaolian4InsertLeft9").show();
            $("#update-jiaolian4SelectRight9").show();
            $("#update-jiaolian4InsertRight9").show();

            $("#update-jiaolian5SelectLeft9").show();
            $("#update-jiaolian5InsertLeft9").show();
            $("#update-jiaolian5SelectRight9").show();
            $("#update-jiaolian5InsertRight9").show();

            $("#update-jiaolian6SelectLeft9").show();
            $("#update-jiaolian6InsertLeft9").show();
            $("#update-jiaolian6SelectRight9").show();
            $("#update-jiaolian6InsertRight9").show();
        }
    })

    $('#update-kaijiaolian10').on('change', function () {
        var selectedValue10 = $(this).val();
        if (selectedValue10 == '开二孔') {
            $("#update-jiaolian3SelectLeft10").hide();
            $("#update-jiaolian3InsertLeft10").hide();
            $("#update-jiaolian3SelectRight10").hide();
            $("#update-jiaolian3InsertRight10").hide();

            $("#update-jiaolian4SelectLeft10").hide();
            $("#update-jiaolian4InsertLeft10").hide();
            $("#update-jiaolian4SelectRight10").hide();
            $("#update-jiaolian4InsertRight10").hide();

            $("#update-jiaolian5SelectLeft10").hide();
            $("#update-jiaolian5InsertLeft10").hide();
            $("#update-jiaolian5SelectRight10").hide();
            $("#update-jiaolian5InsertRight10").hide();

            $("#update-jiaolian6SelectLeft10").hide();
            $("#update-jiaolian6InsertLeft10").hide();
            $("#update-jiaolian6SelectRight10").hide();
            $("#update-jiaolian6InsertRight10").hide();

        }
        if (selectedValue10 == '开三孔') {
            $("#update-jiaolian3SelectLeft10").show();
            $("#update-jiaolian3InsertLeft10").show();
            $("#update-jiaolian3SelectRight10").show();
            $("#update-jiaolian3InsertRight10").show();

            $("#update-jiaolian4SelectLeft10").hide();
            $("#update-jiaolian4InsertLeft10").hide();
            $("#update-jiaolian4SelectRight10").hide();
            $("#update-jiaolian4InsertRight10").hide();

            $("#update-jiaolian5SelectLeft10").hide();
            $("#update-jiaolian5InsertLeft10").hide();
            $("#update-jiaolian5SelectRight10").hide();
            $("#update-jiaolian5InsertRight10").hide();

            $("#update-jiaolian6SelectLeft10").hide();
            $("#update-jiaolian6InsertLeft10").hide();
            $("#update-jiaolian6SelectRight10").hide();
            $("#update-jiaolian6InsertRight10").hide();
        }
        if (selectedValue10 == '开四孔') {
            $("#update-jiaolian3SelectLeft10").show();
            $("#update-jiaolian3InsertLeft10").show();
            $("#update-jiaolian3SelectRight10").show();
            $("#update-jiaolian3InsertRight10").show();

            $("#update-jiaolian4SelectLeft10").show();
            $("#update-jiaolian4InsertLeft10").show();
            $("#update-jiaolian4SelectRight10").show();
            $("#update-jiaolian4InsertRight10").show();

            $("#update-jiaolian5SelectLeft10").hide();
            $("#update-jiaolian5InsertLeft10").hide();
            $("#update-jiaolian5SelectRight10").hide();
            $("#update-jiaolian5InsertRight10").hide();

            $("#update-jiaolian6SelectLeft10").hide();
            $("#update-jiaolian6InsertLeft10").hide();
            $("#update-jiaolian6SelectRight10").hide();
            $("#update-jiaolian6InsertRight10").hide();
        }
        if (selectedValue10 == '开五孔') {
            $("#update-jiaolian3SelectLeft10").show();
            $("#update-jiaolian3InsertLeft10").show();
            $("#update-jiaolian3SelectRight10").show();
            $("#update-jiaolian3InsertRight10").show();

            $("#update-jiaolian4SelectLeft10").show();
            $("#update-jiaolian4InsertLeft10").show();
            $("#update-jiaolian4SelectRight10").show();
            $("#update-jiaolian4InsertRight10").show();

            $("#update-jiaolian5SelectLeft10").show();
            $("#update-jiaolian5InsertLeft10").show();
            $("#update-jiaolian5SelectRight10").show();
            $("#update-jiaolian5InsertRight10").show();

            $("#update-jiaolian6SelectLeft10").hide();
            $("#update-jiaolian6InsertLeft10").hide();
            $("#update-jiaolian6SelectRight10").hide();
            $("#update-jiaolian6InsertRight10").hide();
        }
        if (selectedValue10 == '开六孔') {
            $("#update-jiaolian3SelectLeft10").show();
            $("#update-jiaolian3InsertLeft10").show();
            $("#update-jiaolian3SelectRight10").show();
            $("#update-jiaolian3InsertRight10").show();

            $("#update-jiaolian4SelectLeft10").show();
            $("#update-jiaolian4InsertLeft10").show();
            $("#update-jiaolian4SelectRight10").show();
            $("#update-jiaolian4InsertRight10").show();

            $("#update-jiaolian5SelectLeft10").show();
            $("#update-jiaolian5InsertLeft10").show();
            $("#update-jiaolian5SelectRight10").show();
            $("#update-jiaolian5InsertRight10").show();

            $("#update-jiaolian6SelectLeft10").show();
            $("#update-jiaolian6InsertLeft10").show();
            $("#update-jiaolian6SelectRight10").show();
            $("#update-jiaolian6InsertRight10").show();
        }
    })

    $('#update-kaijiaolian11').on('change', function () {
        var selectedValue11 = $(this).val();
        if (selectedValue11 == '开二孔') {
            $("#update-jiaolian3SelectLeft11").hide();
            $("#update-jiaolian3InsertLeft11").hide();
            $("#update-jiaolian3SelectRight11").hide();
            $("#update-jiaolian3InsertRight11").hide();

            $("#update-jiaolian4SelectLeft11").hide();
            $("#update-jiaolian4InsertLeft11").hide();
            $("#update-jiaolian4SelectRight11").hide();
            $("#update-jiaolian4InsertRight11").hide();

            $("#update-jiaolian5SelectLeft11").hide();
            $("#update-jiaolian5InsertLeft11").hide();
            $("#update-jiaolian5SelectRight11").hide();
            $("#update-jiaolian5InsertRight11").hide();

            $("#update-jiaolian6SelectLeft11").hide();
            $("#update-jiaolian6InsertLeft11").hide();
            $("#update-jiaolian6SelectRight11").hide();
            $("#update-jiaolian6InsertRight11").hide();

        }
        if (selectedValue11 == '开三孔') {
            $("#update-jiaolian3SelectLeft11").show();
            $("#update-jiaolian3InsertLeft11").show();
            $("#update-jiaolian3SelectRight11").show();
            $("#update-jiaolian3InsertRight11").show();

            $("#update-jiaolian4SelectLeft11").hide();
            $("#update-jiaolian4InsertLeft11").hide();
            $("#update-jiaolian4SelectRight11").hide();
            $("#update-jiaolian4InsertRight11").hide();

            $("#update-jiaolian5SelectLeft11").hide();
            $("#update-jiaolian5InsertLeft11").hide();
            $("#update-jiaolian5SelectRight11").hide();
            $("#update-jiaolian5InsertRight11").hide();

            $("#update-jiaolian6SelectLeft11").hide();
            $("#update-jiaolian6InsertLeft11").hide();
            $("#update-jiaolian6SelectRight11").hide();
            $("#update-jiaolian6InsertRight11").hide();
        }
        if (selectedValue11 == '开四孔') {
            $("#update-jiaolian3SelectLeft11").show();
            $("#update-jiaolian3InsertLeft11").show();
            $("#update-jiaolian3SelectRight11").show();
            $("#update-jiaolian3InsertRight11").show();

            $("#update-jiaolian4SelectLeft11").show();
            $("#update-jiaolian4InsertLeft11").show();
            $("#update-jiaolian4SelectRight11").show();
            $("#update-jiaolian4InsertRight11").show();

            $("#update-jiaolian5SelectLeft11").hide();
            $("#update-jiaolian5InsertLeft11").hide();
            $("#update-jiaolian5SelectRight11").hide();
            $("#update-jiaolian5InsertRight11").hide();

            $("#update-jiaolian6SelectLeft11").hide();
            $("#update-jiaolian6InsertLeft11").hide();
            $("#update-jiaolian6SelectRight11").hide();
            $("#update-jiaolian6InsertRight11").hide();
        }
        if (selectedValue11 == '开五孔') {
            $("#update-jiaolian3SelectLeft11").show();
            $("#update-jiaolian3InsertLeft11").show();
            $("#update-jiaolian3SelectRight11").show();
            $("#update-jiaolian3InsertRight11").show();

            $("#update-jiaolian4SelectLeft11").show();
            $("#update-jiaolian4InsertLeft11").show();
            $("#update-jiaolian4SelectRight11").show();
            $("#update-jiaolian4InsertRight11").show();

            $("#update-jiaolian5SelectLeft11").show();
            $("#update-jiaolian5InsertLeft11").show();
            $("#update-jiaolian5SelectRight11").show();
            $("#update-jiaolian5InsertRight11").show();

            $("#update-jiaolian6SelectLeft11").hide();
            $("#update-jiaolian6InsertLeft11").hide();
            $("#update-jiaolian6SelectRight11").hide();
            $("#update-jiaolian6InsertRight11").hide();
        }
        if (selectedValue11 == '开六孔') {
            $("#update-jiaolian3SelectLeft11").show();
            $("#update-jiaolian3InsertLeft11").show();
            $("#update-jiaolian3SelectRight11").show();
            $("#update-jiaolian3InsertRight11").show();

            $("#update-jiaolian4SelectLeft11").show();
            $("#update-jiaolian4InsertLeft11").show();
            $("#update-jiaolian4SelectRight11").show();
            $("#update-jiaolian4InsertRight11").show();

            $("#update-jiaolian5SelectLeft11").show();
            $("#update-jiaolian5InsertLeft11").show();
            $("#update-jiaolian5SelectRight11").show();
            $("#update-jiaolian5InsertRight11").show();

            $("#update-jiaolian6SelectLeft11").show();
            $("#update-jiaolian6InsertLeft11").show();
            $("#update-jiaolian6SelectRight11").show();
            $("#update-jiaolian6InsertRight11").show();
        }
    })

    $('#update-kaijiaolian12').on('change', function () {
        var selectedValue12 = $(this).val();
        if (selectedValue12 == '开二孔') {
            $("#update-jiaolian3SelectLeft12").hide();
            $("#update-jiaolian3InsertLeft12").hide();
            $("#update-jiaolian3SelectRight12").hide();
            $("#update-jiaolian3InsertRight12").hide();

            $("#update-jiaolian4SelectLeft12").hide();
            $("#update-jiaolian4InsertLeft12").hide();
            $("#update-jiaolian4SelectRight12").hide();
            $("#update-jiaolian4InsertRight12").hide();

            $("#update-jiaolian5SelectLeft12").hide();
            $("#update-jiaolian5InsertLeft12").hide();
            $("#update-jiaolian5SelectRight12").hide();
            $("#update-jiaolian5InsertRight12").hide();

            $("#update-jiaolian6SelectLeft12").hide();
            $("#update-jiaolian6InsertLeft12").hide();
            $("#update-jiaolian6SelectRight12").hide();
            $("#update-jiaolian6InsertRight12").hide();

        }
        if (selectedValue12 == '开三孔') {
            $("#update-jiaolian3SelectLeft12").show();
            $("#update-jiaolian3InsertLeft12").show();
            $("#update-jiaolian3SelectRight12").show();
            $("#update-jiaolian3InsertRight12").show();

            $("#update-jiaolian4SelectLeft12").hide();
            $("#update-jiaolian4InsertLeft12").hide();
            $("#update-jiaolian4SelectRight12").hide();
            $("#update-jiaolian4InsertRight12").hide();

            $("#update-jiaolian5SelectLeft12").hide();
            $("#update-jiaolian5InsertLeft12").hide();
            $("#update-jiaolian5SelectRight12").hide();
            $("#update-jiaolian5InsertRight12").hide();

            $("#update-jiaolian6SelectLeft12").hide();
            $("#update-jiaolian6InsertLeft12").hide();
            $("#update-jiaolian6SelectRight12").hide();
            $("#update-jiaolian6InsertRight12").hide();
        }
        if (selectedValue12 == '开四孔') {
            $("#update-jiaolian3SelectLeft12").show();
            $("#update-jiaolian3InsertLeft12").show();
            $("#update-jiaolian3SelectRight12").show();
            $("#update-jiaolian3InsertRight12").show();

            $("#update-jiaolian4SelectLeft12").show();
            $("#update-jiaolian4InsertLeft12").show();
            $("#update-jiaolian4SelectRight12").show();
            $("#update-jiaolian4InsertRight12").show();

            $("#update-jiaolian5SelectLeft12").hide();
            $("#update-jiaolian5InsertLeft12").hide();
            $("#update-jiaolian5SelectRight12").hide();
            $("#update-jiaolian5InsertRight12").hide();

            $("#update-jiaolian6SelectLeft12").hide();
            $("#update-jiaolian6InsertLeft12").hide();
            $("#update-jiaolian6SelectRight12").hide();
            $("#update-jiaolian6InsertRight12").hide();
        }
        if (selectedValue12 == '开五孔') {
            $("#update-jiaolian3SelectLeft12").show();
            $("#update-jiaolian3InsertLeft12").show();
            $("#update-jiaolian3SelectRight12").show();
            $("#update-jiaolian3InsertRight12").show();

            $("#update-jiaolian4SelectLeft12").show();
            $("#update-jiaolian4InsertLeft12").show();
            $("#update-jiaolian4SelectRight12").show();
            $("#update-jiaolian4InsertRight12").show();

            $("#update-jiaolian5SelectLeft12").show();
            $("#update-jiaolian5InsertLeft12").show();
            $("#update-jiaolian5SelectRight12").show();
            $("#update-jiaolian5InsertRight12").show();

            $("#update-jiaolian6SelectLeft12").hide();
            $("#update-jiaolian6InsertLeft12").hide();
            $("#update-jiaolian6SelectRight12").hide();
            $("#update-jiaolian6InsertRight12").hide();
        }
        if (selectedValue12 == '开六孔') {
            $("#update-jiaolian3SelectLeft12").show();
            $("#update-jiaolian3InsertLeft12").show();
            $("#update-jiaolian3SelectRight12").show();
            $("#update-jiaolian3InsertRight12").show();

            $("#update-jiaolian4SelectLeft12").show();
            $("#update-jiaolian4InsertLeft12").show();
            $("#update-jiaolian4SelectRight12").show();
            $("#update-jiaolian4InsertRight12").show();

            $("#update-jiaolian5SelectLeft12").show();
            $("#update-jiaolian5InsertLeft12").show();
            $("#update-jiaolian5SelectRight12").show();
            $("#update-jiaolian5InsertRight12").show();

            $("#update-jiaolian6SelectLeft12").show();
            $("#update-jiaolian6InsertLeft12").show();
            $("#update-jiaolian6SelectRight12").show();
            $("#update-jiaolian6InsertRight12").show();
        }
    })

    $('#update-kaijiaolian13').on('change', function () {
        var selectedValue13 = $(this).val();
        if (selectedValue13 == '开二孔') {
            $("#update-jiaolian3SelectLeft13").hide();
            $("#update-jiaolian3InsertLeft13").hide();
            $("#update-jiaolian3SelectRight13").hide();
            $("#update-jiaolian3InsertRight13").hide();

            $("#update-jiaolian4SelectLeft13").hide();
            $("#update-jiaolian4InsertLeft13").hide();
            $("#update-jiaolian4SelectRight13").hide();
            $("#update-jiaolian4InsertRight13").hide();

            $("#update-jiaolian5SelectLeft13").hide();
            $("#update-jiaolian5InsertLeft13").hide();
            $("#update-jiaolian5SelectRight13").hide();
            $("#update-jiaolian5InsertRight13").hide();

            $("#update-jiaolian6SelectLeft13").hide();
            $("#update-jiaolian6InsertLeft13").hide();
            $("#update-jiaolian6SelectRight13").hide();
            $("#update-jiaolian6InsertRight13").hide();

        }
        if (selectedValue13 == '开三孔') {
            $("#update-jiaolian3SelectLeft13").show();
            $("#update-jiaolian3InsertLeft13").show();
            $("#update-jiaolian3SelectRight13").show();
            $("#update-jiaolian3InsertRight13").show();

            $("#update-jiaolian4SelectLeft13").hide();
            $("#update-jiaolian4InsertLeft13").hide();
            $("#update-jiaolian4SelectRight13").hide();
            $("#update-jiaolian4InsertRight13").hide();

            $("#update-jiaolian5SelectLeft13").hide();
            $("#update-jiaolian5InsertLeft13").hide();
            $("#update-jiaolian5SelectRight13").hide();
            $("#update-jiaolian5InsertRight13").hide();

            $("#update-jiaolian6SelectLeft13").hide();
            $("#update-jiaolian6InsertLeft13").hide();
            $("#update-jiaolian6SelectRight13").hide();
            $("#update-jiaolian6InsertRight13").hide();
        }
        if (selectedValue13 == '开四孔') {
            $("#update-jiaolian3SelectLeft13").show();
            $("#update-jiaolian3InsertLeft13").show();
            $("#update-jiaolian3SelectRight13").show();
            $("#update-jiaolian3InsertRight13").show();

            $("#update-jiaolian4SelectLeft13").show();
            $("#update-jiaolian4InsertLeft13").show();
            $("#update-jiaolian4SelectRight13").show();
            $("#update-jiaolian4InsertRight13").show();

            $("#update-jiaolian5SelectLeft13").hide();
            $("#update-jiaolian5InsertLeft13").hide();
            $("#update-jiaolian5SelectRight13").hide();
            $("#update-jiaolian5InsertRight13").hide();

            $("#update-jiaolian6SelectLeft13").hide();
            $("#update-jiaolian6InsertLeft13").hide();
            $("#update-jiaolian6SelectRight13").hide();
            $("#update-jiaolian6InsertRight13").hide();
        }
        if (selectedValue13 == '开五孔') {
            $("#update-jiaolian3SelectLeft13").show();
            $("#update-jiaolian3InsertLeft13").show();
            $("#update-jiaolian3SelectRight13").show();
            $("#update-jiaolian3InsertRight13").show();

            $("#update-jiaolian4SelectLeft13").show();
            $("#update-jiaolian4InsertLeft13").show();
            $("#update-jiaolian4SelectRight13").show();
            $("#update-jiaolian4InsertRight13").show();

            $("#update-jiaolian5SelectLeft13").show();
            $("#update-jiaolian5InsertLeft13").show();
            $("#update-jiaolian5SelectRight13").show();
            $("#update-jiaolian5InsertRight13").show();

            $("#update-jiaolian6SelectLeft13").hide();
            $("#update-jiaolian6InsertLeft13").hide();
            $("#update-jiaolian6SelectRight13").hide();
            $("#update-jiaolian6InsertRight13").hide();
        }
        if (selectedValue13 == '开六孔') {
            $("#update-jiaolian3SelectLeft13").show();
            $("#update-jiaolian3InsertLeft13").show();
            $("#update-jiaolian3SelectRight13").show();
            $("#update-jiaolian3InsertRight13").show();

            $("#update-jiaolian4SelectLeft13").show();
            $("#update-jiaolian4InsertLeft13").show();
            $("#update-jiaolian4SelectRight13").show();
            $("#update-jiaolian4InsertRight13").show();

            $("#update-jiaolian5SelectLeft13").show();
            $("#update-jiaolian5InsertLeft13").show();
            $("#update-jiaolian5SelectRight13").show();
            $("#update-jiaolian5InsertRight13").show();

            $("#update-jiaolian6SelectLeft13").show();
            $("#update-jiaolian6InsertLeft13").show();
            $("#update-jiaolian6SelectRight13").show();
            $("#update-jiaolian6InsertRight13").show();
        }
    })

    $('#update-kaijiaolian14').on('change', function () {
        var selectedValue14 = $(this).val();
        if (selectedValue14 == '开二孔') {
            $("#update-jiaolian3SelectLeft14").hide();
            $("#update-jiaolian3InsertLeft14").hide();
            $("#update-jiaolian3SelectRight14").hide();
            $("#update-jiaolian3InsertRight14").hide();

            $("#update-jiaolian4SelectLeft14").hide();
            $("#update-jiaolian4InsertLeft14").hide();
            $("#update-jiaolian4SelectRight14").hide();
            $("#update-jiaolian4InsertRight14").hide();

            $("#update-jiaolian5SelectLeft14").hide();
            $("#update-jiaolian5InsertLeft14").hide();
            $("#update-jiaolian5SelectRight14").hide();
            $("#update-jiaolian5InsertRight14").hide();

            $("#update-jiaolian6SelectLeft14").hide();
            $("#update-jiaolian6InsertLeft14").hide();
            $("#update-jiaolian6SelectRight14").hide();
            $("#update-jiaolian6InsertRight14").hide();

        }
        if (selectedValue14 == '开三孔') {
            $("#update-jiaolian3SelectLeft14").show();
            $("#update-jiaolian3InsertLeft14").show();
            $("#update-jiaolian3SelectRight14").show();
            $("#update-jiaolian3InsertRight14").show();

            $("#update-jiaolian4SelectLeft14").hide();
            $("#update-jiaolian4InsertLeft14").hide();
            $("#update-jiaolian4SelectRight14").hide();
            $("#update-jiaolian4InsertRight14").hide();

            $("#update-jiaolian5SelectLeft14").hide();
            $("#update-jiaolian5InsertLeft14").hide();
            $("#update-jiaolian5SelectRight14").hide();
            $("#update-jiaolian5InsertRight14").hide();

            $("#update-jiaolian6SelectLeft14").hide();
            $("#update-jiaolian6InsertLeft14").hide();
            $("#update-jiaolian6SelectRight14").hide();
            $("#update-jiaolian6InsertRight14").hide();
        }
        if (selectedValue14 == '开四孔') {
            $("#update-jiaolian3SelectLeft14").show();
            $("#update-jiaolian3InsertLeft14").show();
            $("#update-jiaolian3SelectRight14").show();
            $("#update-jiaolian3InsertRight14").show();

            $("#update-jiaolian4SelectLeft14").show();
            $("#update-jiaolian4InsertLeft14").show();
            $("#update-jiaolian4SelectRight14").show();
            $("#update-jiaolian4InsertRight14").show();

            $("#update-jiaolian5SelectLeft14").hide();
            $("#update-jiaolian5InsertLeft14").hide();
            $("#update-jiaolian5SelectRight14").hide();
            $("#update-jiaolian5InsertRight14").hide();

            $("#update-jiaolian6SelectLeft14").hide();
            $("#update-jiaolian6InsertLeft14").hide();
            $("#update-jiaolian6SelectRight14").hide();
            $("#update-jiaolian6InsertRight14").hide();
        }
        if (selectedValue14 == '开五孔') {
            $("#update-jiaolian3SelectLeft14").show();
            $("#update-jiaolian3InsertLeft14").show();
            $("#update-jiaolian3SelectRight14").show();
            $("#update-jiaolian3InsertRight14").show();

            $("#update-jiaolian4SelectLeft14").show();
            $("#update-jiaolian4InsertLeft14").show();
            $("#update-jiaolian4SelectRight14").show();
            $("#update-jiaolian4InsertRight14").show();

            $("#update-jiaolian5SelectLeft14").show();
            $("#update-jiaolian5InsertLeft14").show();
            $("#update-jiaolian5SelectRight14").show();
            $("#update-jiaolian5InsertRight14").show();

            $("#update-jiaolian6SelectLeft14").hide();
            $("#update-jiaolian6InsertLeft14").hide();
            $("#update-jiaolian6SelectRight14").hide();
            $("#update-jiaolian6InsertRight14").hide();
        }
        if (selectedValue14 == '开六孔') {
            $("#update-jiaolian3SelectLeft14").show();
            $("#update-jiaolian3InsertLeft14").show();
            $("#update-jiaolian3SelectRight14").show();
            $("#update-jiaolian3InsertRight14").show();

            $("#update-jiaolian4SelectLeft14").show();
            $("#update-jiaolian4InsertLeft14").show();
            $("#update-jiaolian4SelectRight14").show();
            $("#update-jiaolian4InsertRight14").show();

            $("#update-jiaolian5SelectLeft14").show();
            $("#update-jiaolian5InsertLeft14").show();
            $("#update-jiaolian5SelectRight14").show();
            $("#update-jiaolian5InsertRight14").show();

            $("#update-jiaolian6SelectLeft14").show();
            $("#update-jiaolian6InsertLeft14").show();
            $("#update-jiaolian6SelectRight14").show();
            $("#update-jiaolian6InsertRight14").show();
        }
    })

    $('#update-kaijiaolian15').on('change', function () {
        var selectedValue15 = $(this).val();
        if (selectedValue15 == '开二孔') {
            $("#update-jiaolian3SelectLeft15").hide();
            $("#update-jiaolian3InsertLeft15").hide();
            $("#update-jiaolian3SelectRight15").hide();
            $("#update-jiaolian3InsertRight15").hide();

            $("#update-jiaolian4SelectLeft15").hide();
            $("#update-jiaolian4InsertLeft15").hide();
            $("#update-jiaolian4SelectRight15").hide();
            $("#update-jiaolian4InsertRight15").hide();

            $("#update-jiaolian5SelectLeft15").hide();
            $("#update-jiaolian5InsertLeft15").hide();
            $("#update-jiaolian5SelectRight15").hide();
            $("#update-jiaolian5InsertRight15").hide();

            $("#update-jiaolian6SelectLeft15").hide();
            $("#update-jiaolian6InsertLeft15").hide();
            $("#update-jiaolian6SelectRight15").hide();
            $("#update-jiaolian6InsertRight15").hide();

        }
        if (selectedValue15 == '开三孔') {
            $("#update-jiaolian3SelectLeft15").show();
            $("#update-jiaolian3InsertLeft15").show();
            $("#update-jiaolian3SelectRight15").show();
            $("#update-jiaolian3InsertRight15").show();

            $("#update-jiaolian4SelectLeft15").hide();
            $("#update-jiaolian4InsertLeft15").hide();
            $("#update-jiaolian4SelectRight15").hide();
            $("#update-jiaolian4InsertRight15").hide();

            $("#update-jiaolian5SelectLeft15").hide();
            $("#update-jiaolian5InsertLeft15").hide();
            $("#update-jiaolian5SelectRight15").hide();
            $("#update-jiaolian5InsertRight15").hide();

            $("#update-jiaolian6SelectLeft15").hide();
            $("#update-jiaolian6InsertLeft15").hide();
            $("#update-jiaolian6SelectRight15").hide();
            $("#update-jiaolian6InsertRight15").hide();
        }
        if (selectedValue15 == '开四孔') {
            $("#update-jiaolian3SelectLeft15").show();
            $("#update-jiaolian3InsertLeft15").show();
            $("#update-jiaolian3SelectRight15").show();
            $("#update-jiaolian3InsertRight15").show();

            $("#update-jiaolian4SelectLeft15").show();
            $("#update-jiaolian4InsertLeft15").show();
            $("#update-jiaolian4SelectRight15").show();
            $("#update-jiaolian4InsertRight15").show();

            $("#update-jiaolian5SelectLeft15").hide();
            $("#update-jiaolian5InsertLeft15").hide();
            $("#update-jiaolian5SelectRight15").hide();
            $("#update-jiaolian5InsertRight15").hide();

            $("#update-jiaolian6SelectLeft15").hide();
            $("#update-jiaolian6InsertLeft15").hide();
            $("#update-jiaolian6SelectRight15").hide();
            $("#update-jiaolian6InsertRight15").hide();
        }
        if (selectedValue15 == '开五孔') {
            $("#update-jiaolian3SelectLeft15").show();
            $("#update-jiaolian3InsertLeft15").show();
            $("#update-jiaolian3SelectRight15").show();
            $("#update-jiaolian3InsertRight15").show();

            $("#update-jiaolian4SelectLeft15").show();
            $("#update-jiaolian4InsertLeft15").show();
            $("#update-jiaolian4SelectRight15").show();
            $("#update-jiaolian4InsertRight15").show();

            $("#update-jiaolian5SelectLeft15").show();
            $("#update-jiaolian5InsertLeft15").show();
            $("#update-jiaolian5SelectRight15").show();
            $("#update-jiaolian5InsertRight15").show();

            $("#update-jiaolian6SelectLeft15").hide();
            $("#update-jiaolian6InsertLeft15").hide();
            $("#update-jiaolian6SelectRight15").hide();
            $("#update-jiaolian6InsertRight15").hide();
        }
        if (selectedValue15 == '开六孔') {
            $("#update-jiaolian3SelectLeft15").show();
            $("#update-jiaolian3InsertLeft15").show();
            $("#update-jiaolian3SelectRight15").show();
            $("#update-jiaolian3InsertRight15").show();

            $("#update-jiaolian4SelectLeft15").show();
            $("#update-jiaolian4InsertLeft15").show();
            $("#update-jiaolian4SelectRight15").show();
            $("#update-jiaolian4InsertRight15").show();

            $("#update-jiaolian5SelectLeft15").show();
            $("#update-jiaolian5InsertLeft15").show();
            $("#update-jiaolian5SelectRight15").show();
            $("#update-jiaolian5InsertRight15").show();

            $("#update-jiaolian6SelectLeft15").show();
            $("#update-jiaolian6InsertLeft15").show();
            $("#update-jiaolian6SelectRight15").show();
            $("#update-jiaolian6InsertRight15").show();
        }
    })

    $('#update-kaijiaolian16').on('change', function () {
        var selectedValue16 = $(this).val();
        if (selectedValue16 == '开二孔') {
            $("#update-jiaolian3SelectLeft16").hide();
            $("#update-jiaolian3InsertLeft16").hide();
            $("#update-jiaolian3SelectRight16").hide();
            $("#update-jiaolian3InsertRight16").hide();

            $("#update-jiaolian4SelectLeft16").hide();
            $("#update-jiaolian4InsertLeft16").hide();
            $("#update-jiaolian4SelectRight16").hide();
            $("#update-jiaolian4InsertRight16").hide();

            $("#update-jiaolian5SelectLeft16").hide();
            $("#update-jiaolian5InsertLeft16").hide();
            $("#update-jiaolian5SelectRight16").hide();
            $("#update-jiaolian5InsertRight16").hide();

            $("#update-jiaolian6SelectLeft16").hide();
            $("#update-jiaolian6InsertLeft16").hide();
            $("#update-jiaolian6SelectRight16").hide();
            $("#update-jiaolian6InsertRight16").hide();

        }
        if (selectedValue16 == '开三孔') {
            $("#update-jiaolian3SelectLeft16").show();
            $("#update-jiaolian3InsertLeft16").show();
            $("#update-jiaolian3SelectRight16").show();
            $("#update-jiaolian3InsertRight16").show();

            $("#update-jiaolian4SelectLeft16").hide();
            $("#update-jiaolian4InsertLeft16").hide();
            $("#update-jiaolian4SelectRight16").hide();
            $("#update-jiaolian4InsertRight16").hide();

            $("#update-jiaolian5SelectLeft16").hide();
            $("#update-jiaolian5InsertLeft16").hide();
            $("#update-jiaolian5SelectRight16").hide();
            $("#update-jiaolian5InsertRight16").hide();

            $("#update-jiaolian6SelectLeft16").hide();
            $("#update-jiaolian6InsertLeft16").hide();
            $("#update-jiaolian6SelectRight16").hide();
            $("#update-jiaolian6InsertRight16").hide();
        }
        if (selectedValue16 == '开四孔') {
            $("#update-jiaolian3SelectLeft16").show();
            $("#update-jiaolian3InsertLeft16").show();
            $("#update-jiaolian3SelectRight16").show();
            $("#update-jiaolian3InsertRight16").show();

            $("#update-jiaolian4SelectLeft16").show();
            $("#update-jiaolian4InsertLeft16").show();
            $("#update-jiaolian4SelectRight16").show();
            $("#update-jiaolian4InsertRight16").show();

            $("#update-jiaolian5SelectLeft16").hide();
            $("#update-jiaolian5InsertLeft16").hide();
            $("#update-jiaolian5SelectRight16").hide();
            $("#update-jiaolian5InsertRight16").hide();

            $("#update-jiaolian6SelectLeft16").hide();
            $("#update-jiaolian6InsertLeft16").hide();
            $("#update-jiaolian6SelectRight16").hide();
            $("#update-jiaolian6InsertRight16").hide();
        }
        if (selectedValue16 == '开五孔') {
            $("#update-jiaolian3SelectLeft16").show();
            $("#update-jiaolian3InsertLeft16").show();
            $("#update-jiaolian3SelectRight16").show();
            $("#update-jiaolian3InsertRight16").show();

            $("#update-jiaolian4SelectLeft16").show();
            $("#update-jiaolian4InsertLeft16").show();
            $("#update-jiaolian4SelectRight16").show();
            $("#update-jiaolian4InsertRight16").show();

            $("#update-jiaolian5SelectLeft16").show();
            $("#update-jiaolian5InsertLeft16").show();
            $("#update-jiaolian5SelectRight16").show();
            $("#update-jiaolian5InsertRight16").show();

            $("#update-jiaolian6SelectLeft16").hide();
            $("#update-jiaolian6InsertLeft16").hide();
            $("#update-jiaolian6SelectRight16").hide();
            $("#update-jiaolian6InsertRight16").hide();
        }
        if (selectedValue16 == '开六孔') {
            $("#update-jiaolian3SelectLeft16").show();
            $("#update-jiaolian3InsertLeft16").show();
            $("#update-jiaolian3SelectRight16").show();
            $("#update-jiaolian3InsertRight16").show();

            $("#update-jiaolian4SelectLeft16").show();
            $("#update-jiaolian4InsertLeft16").show();
            $("#update-jiaolian4SelectRight16").show();
            $("#update-jiaolian4InsertRight16").show();

            $("#update-jiaolian5SelectLeft16").show();
            $("#update-jiaolian5InsertLeft16").show();
            $("#update-jiaolian5SelectRight16").show();
            $("#update-jiaolian5InsertRight16").show();

            $("#update-jiaolian6SelectLeft16").show();
            $("#update-jiaolian6InsertLeft16").show();
            $("#update-jiaolian6SelectRight16").show();
            $("#update-jiaolian6InsertRight16").show();
        }
    })

    $('#update-kaijiaolian17').on('change', function () {
        var selectedValue17 = $(this).val();
        if (selectedValue17 == '开二孔') {
            $("#update-jiaolian3SelectLeft17").hide();
            $("#update-jiaolian3InsertLeft17").hide();
            $("#update-jiaolian3SelectRight17").hide();
            $("#update-jiaolian3InsertRight17").hide();

            $("#update-jiaolian4SelectLeft17").hide();
            $("#update-jiaolian4InsertLeft17").hide();
            $("#update-jiaolian4SelectRight17").hide();
            $("#update-jiaolian4InsertRight17").hide();

            $("#update-jiaolian5SelectLeft17").hide();
            $("#update-jiaolian5InsertLeft17").hide();
            $("#update-jiaolian5SelectRight17").hide();
            $("#update-jiaolian5InsertRight17").hide();

            $("#update-jiaolian6SelectLeft17").hide();
            $("#update-jiaolian6InsertLeft17").hide();
            $("#update-jiaolian6SelectRight17").hide();
            $("#update-jiaolian6InsertRight17").hide();

        }
        if (selectedValue17 == '开三孔') {
            $("#update-jiaolian3SelectLeft17").show();
            $("#update-jiaolian3InsertLeft17").show();
            $("#update-jiaolian3SelectRight17").show();
            $("#update-jiaolian3InsertRight17").show();

            $("#update-jiaolian4SelectLeft17").hide();
            $("#update-jiaolian4InsertLeft17").hide();
            $("#update-jiaolian4SelectRight17").hide();
            $("#update-jiaolian4InsertRight17").hide();

            $("#update-jiaolian5SelectLeft17").hide();
            $("#update-jiaolian5InsertLeft17").hide();
            $("#update-jiaolian5SelectRight17").hide();
            $("#update-jiaolian5InsertRight17").hide();

            $("#update-jiaolian6SelectLeft17").hide();
            $("#update-jiaolian6InsertLeft17").hide();
            $("#update-jiaolian6SelectRight17").hide();
            $("#update-jiaolian6InsertRight17").hide();
        }
        if (selectedValue17 == '开四孔') {
            $("#update-jiaolian3SelectLeft17").show();
            $("#update-jiaolian3InsertLeft17").show();
            $("#update-jiaolian3SelectRight17").show();
            $("#update-jiaolian3InsertRight17").show();

            $("#update-jiaolian4SelectLeft17").show();
            $("#update-jiaolian4InsertLeft17").show();
            $("#update-jiaolian4SelectRight17").show();
            $("#update-jiaolian4InsertRight17").show();

            $("#update-jiaolian5SelectLeft17").hide();
            $("#update-jiaolian5InsertLeft17").hide();
            $("#update-jiaolian5SelectRight17").hide();
            $("#update-jiaolian5InsertRight17").hide();

            $("#update-jiaolian6SelectLeft17").hide();
            $("#update-jiaolian6InsertLeft17").hide();
            $("#update-jiaolian6SelectRight17").hide();
            $("#update-jiaolian6InsertRight17").hide();
        }
        if (selectedValue17 == '开五孔') {
            $("#update-jiaolian3SelectLeft17").show();
            $("#update-jiaolian3InsertLeft17").show();
            $("#update-jiaolian3SelectRight17").show();
            $("#update-jiaolian3InsertRight17").show();

            $("#update-jiaolian4SelectLeft17").show();
            $("#update-jiaolian4InsertLeft17").show();
            $("#update-jiaolian4SelectRight17").show();
            $("#update-jiaolian4InsertRight17").show();

            $("#update-jiaolian5SelectLeft17").show();
            $("#update-jiaolian5InsertLeft17").show();
            $("#update-jiaolian5SelectRight17").show();
            $("#update-jiaolian5InsertRight17").show();

            $("#update-jiaolian6SelectLeft17").hide();
            $("#update-jiaolian6InsertLeft17").hide();
            $("#update-jiaolian6SelectRight17").hide();
            $("#update-jiaolian6InsertRight17").hide();
        }
        if (selectedValue17 == '开六孔') {
            $("#update-jiaolian3SelectLeft17").show();
            $("#update-jiaolian3InsertLeft17").show();
            $("#update-jiaolian3SelectRight17").show();
            $("#update-jiaolian3InsertRight17").show();

            $("#update-jiaolian4SelectLeft17").show();
            $("#update-jiaolian4InsertLeft17").show();
            $("#update-jiaolian4SelectRight17").show();
            $("#update-jiaolian4InsertRight17").show();

            $("#update-jiaolian5SelectLeft17").show();
            $("#update-jiaolian5InsertLeft17").show();
            $("#update-jiaolian5SelectRight17").show();
            $("#update-jiaolian5InsertRight17").show();

            $("#update-jiaolian6SelectLeft17").show();
            $("#update-jiaolian6InsertLeft17").show();
            $("#update-jiaolian6SelectRight17").show();
            $("#update-jiaolian6InsertRight17").show();
        }
    })

    $('#update-kaijiaolian18').on('change', function () {
        var selectedValue18 = $(this).val();
        if (selectedValue18 == '开二孔') {
            $("#update-jiaolian3SelectLeft18").hide();
            $("#update-jiaolian3InsertLeft18").hide();
            $("#update-jiaolian3SelectRight18").hide();
            $("#update-jiaolian3InsertRight18").hide();

            $("#update-jiaolian4SelectLeft18").hide();
            $("#update-jiaolian4InsertLeft18").hide();
            $("#update-jiaolian4SelectRight18").hide();
            $("#update-jiaolian4InsertRight18").hide();

            $("#update-jiaolian5SelectLeft18").hide();
            $("#update-jiaolian5InsertLeft18").hide();
            $("#update-jiaolian5SelectRight18").hide();
            $("#update-jiaolian5InsertRight18").hide();

            $("#update-jiaolian6SelectLeft18").hide();
            $("#update-jiaolian6InsertLeft18").hide();
            $("#update-jiaolian6SelectRight18").hide();
            $("#update-jiaolian6InsertRight18").hide();

        }
        if (selectedValue18 == '开三孔') {
            $("#update-jiaolian3SelectLeft18").show();
            $("#update-jiaolian3InsertLeft18").show();
            $("#update-jiaolian3SelectRight18").show();
            $("#update-jiaolian3InsertRight18").show();

            $("#update-jiaolian4SelectLeft18").hide();
            $("#update-jiaolian4InsertLeft18").hide();
            $("#update-jiaolian4SelectRight18").hide();
            $("#update-jiaolian4InsertRight18").hide();

            $("#update-jiaolian5SelectLeft18").hide();
            $("#update-jiaolian5InsertLeft18").hide();
            $("#update-jiaolian5SelectRight18").hide();
            $("#update-jiaolian5InsertRight18").hide();

            $("#update-jiaolian6SelectLeft18").hide();
            $("#update-jiaolian6InsertLeft18").hide();
            $("#update-jiaolian6SelectRight18").hide();
            $("#update-jiaolian6InsertRight18").hide();
        }
        if (selectedValue18 == '开四孔') {
            $("#update-jiaolian3SelectLeft18").show();
            $("#update-jiaolian3InsertLeft18").show();
            $("#update-jiaolian3SelectRight18").show();
            $("#update-jiaolian3InsertRight18").show();

            $("#update-jiaolian4SelectLeft18").show();
            $("#update-jiaolian4InsertLeft18").show();
            $("#update-jiaolian4SelectRight18").show();
            $("#update-jiaolian4InsertRight18").show();

            $("#update-jiaolian5SelectLeft18").hide();
            $("#update-jiaolian5InsertLeft18").hide();
            $("#update-jiaolian5SelectRight18").hide();
            $("#update-jiaolian5InsertRight18").hide();

            $("#update-jiaolian6SelectLeft18").hide();
            $("#update-jiaolian6InsertLeft18").hide();
            $("#update-jiaolian6SelectRight18").hide();
            $("#update-jiaolian6InsertRight18").hide();
        }
        if (selectedValue18 == '开五孔') {
            $("#update-jiaolian3SelectLeft18").show();
            $("#update-jiaolian3InsertLeft18").show();
            $("#update-jiaolian3SelectRight18").show();
            $("#update-jiaolian3InsertRight18").show();

            $("#update-jiaolian4SelectLeft18").show();
            $("#update-jiaolian4InsertLeft18").show();
            $("#update-jiaolian4SelectRight18").show();
            $("#update-jiaolian4InsertRight18").show();

            $("#update-jiaolian5SelectLeft18").show();
            $("#update-jiaolian5InsertLeft18").show();
            $("#update-jiaolian5SelectRight18").show();
            $("#update-jiaolian5InsertRight18").show();

            $("#update-jiaolian6SelectLeft18").hide();
            $("#update-jiaolian6InsertLeft18").hide();
            $("#update-jiaolian6SelectRight18").hide();
            $("#update-jiaolian6InsertRight18").hide();
        }
        if (selectedValue18 == '开六孔') {
            $("#update-jiaolian3SelectLeft18").show();
            $("#update-jiaolian3InsertLeft18").show();
            $("#update-jiaolian3SelectRight18").show();
            $("#update-jiaolian3InsertRight18").show();

            $("#update-jiaolian4SelectLeft18").show();
            $("#update-jiaolian4InsertLeft18").show();
            $("#update-jiaolian4SelectRight18").show();
            $("#update-jiaolian4InsertRight18").show();

            $("#update-jiaolian5SelectLeft18").show();
            $("#update-jiaolian5InsertLeft18").show();
            $("#update-jiaolian5SelectRight18").show();
            $("#update-jiaolian5InsertRight18").show();

            $("#update-jiaolian6SelectLeft18").show();
            $("#update-jiaolian6InsertLeft18").show();
            $("#update-jiaolian6SelectRight18").show();
            $("#update-jiaolian6InsertRight18").show();
        }
    })

    $('#update-kaijiaolian19').on('change', function () {
        var selectedValue19 = $(this).val();
        if (selectedValue19 == '开二孔') {
            $("#update-jiaolian3SelectLeft19").hide();
            $("#update-jiaolian3InsertLeft19").hide();
            $("#update-jiaolian3SelectRight19").hide();
            $("#update-jiaolian3InsertRight19").hide();

            $("#update-jiaolian4SelectLeft19").hide();
            $("#update-jiaolian4InsertLeft19").hide();
            $("#update-jiaolian4SelectRight19").hide();
            $("#update-jiaolian4InsertRight19").hide();

            $("#update-jiaolian5SelectLeft19").hide();
            $("#update-jiaolian5InsertLeft19").hide();
            $("#update-jiaolian5SelectRight19").hide();
            $("#update-jiaolian5InsertRight19").hide();

            $("#update-jiaolian6SelectLeft19").hide();
            $("#update-jiaolian6InsertLeft19").hide();
            $("#update-jiaolian6SelectRight19").hide();
            $("#update-jiaolian6InsertRight19").hide();

        }
        if (selectedValue19 == '开三孔') {
            $("#update-jiaolian3SelectLeft19").show();
            $("#update-jiaolian3InsertLeft19").show();
            $("#update-jiaolian3SelectRight19").show();
            $("#update-jiaolian3InsertRight19").show();

            $("#update-jiaolian4SelectLeft19").hide();
            $("#update-jiaolian4InsertLeft19").hide();
            $("#update-jiaolian4SelectRight19").hide();
            $("#update-jiaolian4InsertRight19").hide();

            $("#update-jiaolian5SelectLeft19").hide();
            $("#update-jiaolian5InsertLeft19").hide();
            $("#update-jiaolian5SelectRight19").hide();
            $("#update-jiaolian5InsertRight19").hide();

            $("#update-jiaolian6SelectLeft19").hide();
            $("#update-jiaolian6InsertLeft19").hide();
            $("#update-jiaolian6SelectRight19").hide();
            $("#update-jiaolian6InsertRight19").hide();
        }
        if (selectedValue19 == '开四孔') {
            $("#update-jiaolian3SelectLeft19").show();
            $("#update-jiaolian3InsertLeft19").show();
            $("#update-jiaolian3SelectRight19").show();
            $("#update-jiaolian3InsertRight19").show();

            $("#update-jiaolian4SelectLeft19").show();
            $("#update-jiaolian4InsertLeft19").show();
            $("#update-jiaolian4SelectRight19").show();
            $("#update-jiaolian4InsertRight19").show();

            $("#update-jiaolian5SelectLeft19").hide();
            $("#update-jiaolian5InsertLeft19").hide();
            $("#update-jiaolian5SelectRight19").hide();
            $("#update-jiaolian5InsertRight19").hide();

            $("#update-jiaolian6SelectLeft19").hide();
            $("#update-jiaolian6InsertLeft19").hide();
            $("#update-jiaolian6SelectRight19").hide();
            $("#update-jiaolian6InsertRight19").hide();
        }
        if (selectedValue19 == '开五孔') {
            $("#update-jiaolian3SelectLeft19").show();
            $("#update-jiaolian3InsertLeft19").show();
            $("#update-jiaolian3SelectRight19").show();
            $("#update-jiaolian3InsertRight19").show();

            $("#update-jiaolian4SelectLeft19").show();
            $("#update-jiaolian4InsertLeft19").show();
            $("#update-jiaolian4SelectRight19").show();
            $("#update-jiaolian4InsertRight19").show();

            $("#update-jiaolian5SelectLeft19").show();
            $("#update-jiaolian5InsertLeft19").show();
            $("#update-jiaolian5SelectRight19").show();
            $("#update-jiaolian5InsertRight19").show();

            $("#update-jiaolian6SelectLeft19").hide();
            $("#update-jiaolian6InsertLeft19").hide();
            $("#update-jiaolian6SelectRight19").hide();
            $("#update-jiaolian6InsertRight19").hide();
        }
        if (selectedValue19 == '开六孔') {
            $("#update-jiaolian3SelectLeft19").show();
            $("#update-jiaolian3InsertLeft19").show();
            $("#update-jiaolian3SelectRight19").show();
            $("#update-jiaolian3InsertRight19").show();

            $("#update-jiaolian4SelectLeft19").show();
            $("#update-jiaolian4InsertLeft19").show();
            $("#update-jiaolian4SelectRight19").show();
            $("#update-jiaolian4InsertRight19").show();

            $("#update-jiaolian5SelectLeft19").show();
            $("#update-jiaolian5InsertLeft19").show();
            $("#update-jiaolian5SelectRight19").show();
            $("#update-jiaolian5InsertRight19").show();

            $("#update-jiaolian6SelectLeft19").show();
            $("#update-jiaolian6InsertLeft19").show();
            $("#update-jiaolian6SelectRight19").show();
            $("#update-jiaolian6InsertRight19").show();
        }
    })

})

// $(document).ready(function () {
//     $('#update-kaijiaolian').on('change', function () {
//         // var kjlk = document.getElementById('add-kaijiaolian').value;
//         var selectedValue = $(this).val();
//         if (selectedValue == '开二孔') {
//             $("#update-jiaolian3SelectLeft").hide();
//             $("#update-jiaolian3InsertLeft").hide();
//             $("#update-jiaolian3SelectRight").hide();
//             $("#update-jiaolian3InsertRight").hide();
//
//             $("#update-jiaolian4SelectLeft").hide();
//             $("#update-jiaolian4InsertLeft").hide();
//             $("#update-jiaolian4SelectRight").hide();
//             $("#update-jiaolian4InsertRight").hide();
//
//             $("#update-jiaolian5SelectLeft").hide();
//             $("#update-jiaolian5InsertLeft").hide();
//             $("#update-jiaolian5SelectRight").hide();
//             $("#update-jiaolian5InsertRight").hide();
//
//             $("#update-jiaolian6SelectLeft").hide();
//             $("#update-jiaolian6InsertLeft").hide();
//             $("#update-jiaolian6SelectRight").hide();
//             $("#update-jiaolian6InsertRight").hide();
//
//             $("#l3sl").hide();
//             $("#l3il").hide();
//             $("#l3sr").hide();
//             $("#l3ir").hide();
//
//             $("#l4sl").hide();
//             $("#l4il").hide();
//             $("#l4sr").hide();
//             $("#l4ir").hide();
//
//             $("#l5sl").hide();
//             $("#l5il").hide();
//             $("#l5sr").hide();
//             $("#l5ir").hide();
//
//             $("#l6sl").hide();
//             $("#l6il").hide();
//             $("#l6sr").hide();
//             $("#l6ir").hide();
//         }
//         if (selectedValue == '开三孔') {
//             $("#update-jiaolian4SelectLeft").hide();
//             $("#update-jiaolian4InsertLeft").hide();
//             $("#update-jiaolian4SelectRight").hide();
//             $("#update-jiaolian4InsertRight").hide();
//
//             $("#update-jiaolian5SelectLeft").hide();
//             $("#update-jiaolian5InsertLeft").hide();
//             $("#update-jiaolian5SelectRight").hide();
//             $("#update-jiaolian5InsertRight").hide();
//
//             $("#update-jiaolian6SelectLeft").hide();
//             $("#update-jiaolian6InsertLeft").hide();
//             $("#update-jiaolian6SelectRight").hide();
//             $("#update-jiaolian6InsertRight").hide();
//
//             $("#ul4sl").hide();
//             $("#ul4il").hide();
//             $("#ul4sr").hide();
//             $("#ul4ir").hide();
//
//             $("#ul5sl").hide();
//             $("#ul5il").hide();
//             $("#ul5sr").hide();
//             $("#ul5ir").hide();
//
//             $("#ul6sl").hide();
//             $("#ul6il").hide();
//             $("#ul6sr").hide();
//             $("#ul6ir").hide();
//         }
//         if (selectedValue == '开四孔') {
//             $("#update-jiaolian5SelectLeft").hide();
//             $("#update-jiaolian5InsertLeft").hide();
//             $("#update-jiaolian5SelectRight").hide();
//             $("#update-jiaolian5InsertRight").hide();
//
//             $("#update-jiaolian6SelectLeft").hide();
//             $("#update-jiaolian6InsertLeft").hide();
//             $("#update-jiaolian6SelectRight").hide();
//             $("#update-jiaolian6InsertRight").hide();
//
//             $("#ul5sl").hide();
//             $("#ul5il").hide();
//             $("#ul5sr").hide();
//             $("#ul5ir").hide();
//
//             $("#ul6sl").hide();
//             $("#ul6il").hide();
//             $("#ul6sr").hide();
//             $("#ul6ir").hide();
//         }
//         if (selectedValue == '开五孔') {
//             $("#update-jiaolian6SelectLeft").hide();
//             $("#update-jiaolian6InsertLeft").hide();
//             $("#update-jiaolian6SelectRight").hide();
//             $("#update-jiaolian6InsertRight").hide();
//
//             $("#ul6sl").hide();
//             $("#ul6il").hide();
//             $("#ul6sr").hide();
//             $("#ul6ir").hide();
//         }
//     })
// })



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
    $(document).ready(function () {
        $('#add-danjia1').on('change', function () {
            var height = parseFloat(document.getElementById('add-height').value);
            var width = parseFloat(document.getElementById('add-width').value);
            var num = parseFloat(document.getElementById('add-num').value);
            var sum_sl = Math.round(height * width * num);
            var ssl = sum_sl.toFixed(3);
            var s = ssl / 1000000;
            document.getElementById("add-sumShuliang1").value = s
        })
        $('#add-danjia11').on('change', function () {
            var height1 = parseFloat(document.getElementById('add-height1').value);
            var width1 = parseFloat(document.getElementById('add-width1').value);
            var num1 = parseFloat(document.getElementById('add-num1').value);
            var sum_sl1 = Math.round(height1 * width1 * num1);
            var ssl1 = sum_sl1.toFixed(3);
            var s1 = ssl1 / 1000000;
            document.getElementById("add-sumShuliang11").value = s1
        })
        $('#add-danjia12').on('change', function () {
            var height2 = parseFloat(document.getElementById('add-height2').value);
            var width2 = parseFloat(document.getElementById('add-width2').value);
            var num2 = parseFloat(document.getElementById('add-num2').value);
            var sum_sl2 = Math.round(height2 * width2 * num2);
            var ssl2 = sum_sl2.toFixed(3);
            var s2 = ssl2 / 1000000;
            document.getElementById("add-sumShuliang12").value = s2
        })
        $('#add-danjia13').on('change', function () {
            var height3 = parseFloat(document.getElementById('add-height3').value);
            var width3 = parseFloat(document.getElementById('add-width3').value);
            var num3 = parseFloat(document.getElementById('add-num3').value);
            var sum_sl3 = Math.round(height3 * width3 * num3);
            var ssl3 = sum_sl3.toFixed(3);
            var s3 = ssl3 / 1000000;
            document.getElementById("add-sumShuliang13").value = s3
        })
        $('#add-danjia14').on('change', function () {
            var height4 = parseFloat(document.getElementById('add-height4').value);
            var width4 = parseFloat(document.getElementById('add-width4').value);
            var num4 = parseFloat(document.getElementById('add-num4').value);
            var sum_sl4 = Math.round(height4 * width4 * num4);
            var ssl4 = sum_sl4.toFixed(3);
            var s4 = ssl4 / 1000000;
            document.getElementById("add-sumShuliang14").value = s4
        })
        $('#add-danjia15').on('change', function () {
            var height5 = parseFloat(document.getElementById('add-height5').value);
            var width5 = parseFloat(document.getElementById('add-width5').value);
            var num5 = parseFloat(document.getElementById('add-num5').value);
            var sum_sl5 = Math.round(height5 * width5 * num5);
            var ssl5 = sum_sl5.toFixed(3);
            var s5 = ssl5 / 1000000;
            document.getElementById("add-sumShuliang15").value = s5
        })
        $('#add-danjia16').on('change', function () {
            var height6 = parseFloat(document.getElementById('add-height6').value);
            var width6 = parseFloat(document.getElementById('add-width6').value);
            var num6 = parseFloat(document.getElementById('add-num6').value);
            var sum_sl6 = Math.round(height6 * width6 * num6);
            var ssl6 = sum_sl6.toFixed(3);
            var s6 = ssl6 / 1000000;
            document.getElementById("add-sumShuliang16").value = s6
        })
        $('#add-danjia17').on('change', function () {
            var height7 = parseFloat(document.getElementById('add-height7').value);
            var width7 = parseFloat(document.getElementById('add-width7').value);
            var num7 = parseFloat(document.getElementById('add-num7').value);
            var sum_sl7 = Math.round(height7 * width7 * num7);
            var ssl7 = sum_sl7.toFixed(3);
            var s7 = ssl7 / 1000000;
            document.getElementById("add-sumShuliang17").value = s7
        })
        $('#add-danjia18').on('change', function () {
            var height8 = parseFloat(document.getElementById('add-height8').value);
            var width8 = parseFloat(document.getElementById('add-width8').value);
            var num8 = parseFloat(document.getElementById('add-num8').value);
            var sum_sl8 = Math.round(height8 * width8 * num8);
            var ssl8 = sum_sl8.toFixed(3);
            var s8 = ssl8 / 1000000;
            document.getElementById("add-sumShuliang18").value = s8
        })
        $('#add-danjia19').on('change', function () {
            var height9 = parseFloat(document.getElementById('add-height9').value);
            var width9 = parseFloat(document.getElementById('add-width9').value);
            var num9 = parseFloat(document.getElementById('add-num9').value);
            var sum_sl9 = Math.round(height9 * width9 * num9);
            var ssl9 = sum_sl9.toFixed(3);
            var s9 = ssl9 / 1000000;
            document.getElementById("add-sumShuliang19").value = s9
        })
        $('#add-danjia110').on('change', function () {
            var height10 = parseFloat(document.getElementById('add-height10').value);
            var width10 = parseFloat(document.getElementById('add-width10').value);
            var num10 = parseFloat(document.getElementById('add-num10').value);
            var sum_sl10 = Math.round(height10 * width10 * num10);
            var ssl10 = sum_sl10.toFixed(3);
            var s10 = ssl10 / 1000000;
            document.getElementById("add-sumShuliang110").value = s10
        })
        $('#add-danjia111').on('change', function () {
            var height11 = parseFloat(document.getElementById('add-height11').value);
            var width11 = parseFloat(document.getElementById('add-width11').value);
            var num11 = parseFloat(document.getElementById('add-num11').value);
            var sum_sl11 = Math.round(height11 * width11 * num11);
            var ssl11 = sum_sl11.toFixed(3);
            var s11 = ssl11 / 1000000;
            document.getElementById("add-sumShuliang111").value = s11
        })
        $('#add-danjia112').on('change', function () {
            var height12 = parseFloat(document.getElementById('add-height12').value);
            var width12 = parseFloat(document.getElementById('add-width12').value);
            var num12 = parseFloat(document.getElementById('add-num12').value);
            var sum_sl12 = Math.round(height12 * width12 * num12);
            var ssl12 = sum_sl12.toFixed(3);
            var s12 = ssl12 / 1000000;
            document.getElementById("add-sumShuliang112").value = s12
        })
        $('#add-danjia113').on('change', function () {
            var height13 = parseFloat(document.getElementById('add-height13').value);
            var width13 = parseFloat(document.getElementById('add-width13').value);
            var num13 = parseFloat(document.getElementById('add-num13').value);
            var sum_sl13 = Math.round(height13 * width13 * num13);
            var ssl13 = sum_sl13.toFixed(3);
            var s13 = ssl13 / 1000000;
            document.getElementById("add-sumShuliang113").value = s13
        })
        $('#add-danjia114').on('change', function () {
            var height14 = parseFloat(document.getElementById('add-height14').value);
            var width14 = parseFloat(document.getElementById('add-width14').value);
            var num14 = parseFloat(document.getElementById('add-num14').value);
            var sum_sl14 = Math.round(height14 * width14 * num14);
            var ssl14 = sum_sl14.toFixed(3);
            var s14 = ssl14 / 1000000;
            document.getElementById("add-sumShuliang114").value = s14
        })
        $('#add-danjia115').on('change', function () {
            var height15 = parseFloat(document.getElementById('add-height15').value);
            var width15 = parseFloat(document.getElementById('add-width15').value);
            var num15 = parseFloat(document.getElementById('add-num15').value);
            var sum_sl15 = Math.round(height15 * width15 * num15);
            var ssl15 = sum_sl15.toFixed(3);
            var s15 = ssl15 / 1000000;
            document.getElementById("add-sumShuliang115").value = s15
        })
        $('#add-danjia116').on('change', function () {
            var height16 = parseFloat(document.getElementById('add-height16').value);
            var width16 = parseFloat(document.getElementById('add-width16').value);
            var num16 = parseFloat(document.getElementById('add-num16').value);
            var sum_sl16 = Math.round(height16 * width16 * num16);
            var ssl16 = sum_sl16.toFixed(3);
            var s16 = ssl16 / 1000000;
            document.getElementById("add-sumShuliang116").value = s16
        })
        $('#add-danjia117').on('change', function () {
            var height17 = parseFloat(document.getElementById('add-height17').value);
            var width17 = parseFloat(document.getElementById('add-width17').value);
            var num17 = parseFloat(document.getElementById('add-num17').value);
            var sum_sl17 = Math.round(height17 * width17 * num17);
            var ssl17 = sum_sl17.toFixed(3);
            var s17 = ssl17 / 1000000;
            document.getElementById("add-sumShuliang117").value = s17
        })
        $('#add-danjia118').on('change', function () {
            var height18 = parseFloat(document.getElementById('add-height18').value);
            var width18 = parseFloat(document.getElementById('add-width18').value);
            var num18 = parseFloat(document.getElementById('add-num18').value);
            var sum_sl18 = Math.round(height18 * width18 * num18);
            var ssl18 = sum_sl18.toFixed(3);
            var s18 = ssl18 / 1000000;
            document.getElementById("add-sumShuliang118").value = s18
        })
        $('#add-danjia119').on('change', function () {
            var height19 = parseFloat(document.getElementById('add-height19').value);
            var width19 = parseFloat(document.getElementById('add-width19').value);
            var num19 = parseFloat(document.getElementById('add-num19').value);
            var sum_sl19 = Math.round(height19 * width19 * num19);
            var ssl19 = sum_sl19.toFixed(3);
            var s19 = ssl19 / 1000000;
            document.getElementById("add-sumShuliang119").value = s19
        })
    })
    $(document).ready(function () {
        $('#update-danjia1').on('change', function () {
            var height = parseFloat(document.getElementById('update-height').value);
            var width = parseFloat(document.getElementById('update-width').value);
            var num = parseFloat(document.getElementById('update-num').value);
            var sum_sl = Math.round(height * width * num);
            var ssl = sum_sl.toFixed(3);
            var s = ssl / 1000000;
            document.getElementById("update-sumShuliang1").value = s
        })
        $('#update-danjia11').on('change', function () {
            var height1 = parseFloat(document.getElementById('update-height1').value);
            var width1 = parseFloat(document.getElementById('update-width1').value);
            var num1 = parseFloat(document.getElementById('update-num1').value);
            var sum_sl1 = Math.round(height1 * width1 * num1);
            var ssl1 = sum_sl1.toFixed(3);
            var s1 = ssl1 / 1000000;
            document.getElementById("update-sumShuliang11").value = s1
        })
        $('#update-danjia12').on('change', function () {
            var height2 = parseFloat(document.getElementById('update-height2').value);
            var width2 = parseFloat(document.getElementById('update-width2').value);
            var num2 = parseFloat(document.getElementById('update-num2').value);
            var sum_sl2 = Math.round(height2 * width2 * num2);
            var ssl2 = sum_sl2.toFixed(3);
            var s2 = ssl2 / 1000000;
            document.getElementById("update-sumShuliang12").value = s2
        })
        $('#update-danjia13').on('change', function () {
            var height3 = parseFloat(document.getElementById('update-height3').value);
            var width3 = parseFloat(document.getElementById('update-width3').value);
            var num3 = parseFloat(document.getElementById('update-num3').value);
            var sum_sl3 = Math.round(height3 * width3 * num3);
            var ssl3 = sum_sl3.toFixed(3);
            var s3 = ssl3 / 1000000;
            document.getElementById("update-sumShuliang13").value = s3
        })
        $('#update-danjia14').on('change', function () {
            var height4 = parseFloat(document.getElementById('update-height4').value);
            var width4 = parseFloat(document.getElementById('update-width4').value);
            var num4 = parseFloat(document.getElementById('update-num4').value);
            var sum_sl4 = Math.round(height4 * width4 * num4);
            var ssl4 = sum_sl4.toFixed(3);
            var s4 = ssl4 / 1000000;
            document.getElementById("update-sumShuliang14").value = s4
        })
        $('#update-danjia15').on('change', function () {
            var height5 = parseFloat(document.getElementById('update-height5').value);
            var width5 = parseFloat(document.getElementById('update-width5').value);
            var num5 = parseFloat(document.getElementById('update-num5').value);
            var sum_sl5 = Math.round(height5 * width5 * num5);
            var ssl5 = sum_sl5.toFixed(3);
            var s5 = ssl5 / 1000000;
            document.getElementById("update-sumShuliang15").value = s5
        })
        $('#update-danjia16').on('change', function () {
            var height6 = parseFloat(document.getElementById('update-height6').value);
            var width6 = parseFloat(document.getElementById('update-width6').value);
            var num6 = parseFloat(document.getElementById('update-num6').value);
            var sum_sl6 = Math.round(height6 * width6 * num6);
            var ssl6 = sum_sl6.toFixed(3);
            var s6 = ssl6 / 1000000;
            document.getElementById("update-sumShuliang16").value = s6
        })
        $('#update-danjia17').on('change', function () {
            var height7 = parseFloat(document.getElementById('update-height7').value);
            var width7 = parseFloat(document.getElementById('update-width7').value);
            var num7 = parseFloat(document.getElementById('update-num7').value);
            var sum_sl7 = Math.round(height7 * width7 * num7);
            var ssl7 = sum_sl7.toFixed(3);
            var s7 = ssl7 / 1000000;
            document.getElementById("update-sumShuliang17").value = s7
        })
        $('#update-danjia18').on('change', function () {
            var height8 = parseFloat(document.getElementById('update-height8').value);
            var width8 = parseFloat(document.getElementById('update-width8').value);
            var num8 = parseFloat(document.getElementById('update-num8').value);
            var sum_sl8 = Math.round(height8 * width8 * num8);
            var ssl8 = sum_sl8.toFixed(3);
            var s8 = ssl8 / 1000000;
            document.getElementById("update-sumShuliang18").value = s8
        })
        $('#update-danjia19').on('change', function () {
            var height9 = parseFloat(document.getElementById('update-height9').value);
            var width9 = parseFloat(document.getElementById('update-width9').value);
            var num9 = parseFloat(document.getElementById('update-num9').value);
            var sum_sl9 = Math.round(height9 * width9 * num9);
            var ssl9 = sum_sl9.toFixed(3);
            var s9 = ssl9 / 1000000;
            document.getElementById("update-sumShuliang19").value = s9
        })
        $('#update-danjia110').on('change', function () {
            var height10 = parseFloat(document.getElementById('update-height10').value);
            var width10 = parseFloat(document.getElementById('update-width10').value);
            var num10 = parseFloat(document.getElementById('update-num10').value);
            var sum_sl10 = Math.round(height10 * width10 * num10);
            var ssl10 = sum_sl10.toFixed(3);
            var s10 = ssl10 / 1000000;
            document.getElementById("update-sumShuliang110").value = s10
        })
        $('#update-danjia111').on('change', function () {
            var height11 = parseFloat(document.getElementById('update-height11').value);
            var width11 = parseFloat(document.getElementById('update-width11').value);
            var num11 = parseFloat(document.getElementById('update-num11').value);
            var sum_sl11 = Math.round(height11 * width11 * num11);
            var ssl11 = sum_sl11.toFixed(3);
            var s11 = ssl11 / 1000000;
            document.getElementById("update-sumShuliang111").value = s11
        })
        $('#update-danjia112').on('change', function () {
            var height12 = parseFloat(document.getElementById('update-height12').value);
            var width12 = parseFloat(document.getElementById('update-width12').value);
            var num12 = parseFloat(document.getElementById('update-num12').value);
            var sum_sl12 = Math.round(height12 * width12 * num12);
            var ssl12 = sum_sl12.toFixed(3);
            var s12 = ssl12 / 1000000;
            document.getElementById("update-sumShuliang112").value = s12
        })
        $('#update-danjia113').on('change', function () {
            var height13 = parseFloat(document.getElementById('update-height13').value);
            var width13 = parseFloat(document.getElementById('update-width13').value);
            var num13 = parseFloat(document.getElementById('update-num13').value);
            var sum_sl13 = Math.round(height13 * width13 * num13);
            var ssl13 = sum_sl13.toFixed(3);
            var s13 = ssl13 / 1000000;
            document.getElementById("update-sumShuliang113").value = s13
        })
        $('#update-danjia114').on('change', function () {
            var height14 = parseFloat(document.getElementById('update-height14').value);
            var width14 = parseFloat(document.getElementById('update-width14').value);
            var num14 = parseFloat(document.getElementById('update-num14').value);
            var sum_sl14 = Math.round(height14 * width14 * num14);
            var ssl14 = sum_sl14.toFixed(3);
            var s14 = ssl14 / 1000000;
            document.getElementById("update-sumShuliang114").value = s14
        })
        $('#update-danjia115').on('change', function () {
            var height15 = parseFloat(document.getElementById('update-height15').value);
            var width15 = parseFloat(document.getElementById('update-width15').value);
            var num15 = parseFloat(document.getElementById('update-num15').value);
            var sum_sl15 = Math.round(height15 * width15 * num15);
            var ssl15 = sum_sl15.toFixed(3);
            var s15 = ssl15 / 1000000;
            document.getElementById("update-sumShuliang115").value = s15
        })
        $('#update-danjia116').on('change', function () {
            var height16 = parseFloat(document.getElementById('update-height16').value);
            var width16 = parseFloat(document.getElementById('update-width16').value);
            var num16 = parseFloat(document.getElementById('update-num16').value);
            var sum_sl16 = Math.round(height16 * width16 * num16);
            var ssl16 = sum_sl16.toFixed(3);
            var s16 = ssl16 / 1000000;
            document.getElementById("update-sumShuliang116").value = s16
        })
        $('#update-danjia117').on('change', function () {
            var height17 = parseFloat(document.getElementById('update-height17').value);
            var width17 = parseFloat(document.getElementById('update-width17').value);
            var num17 = parseFloat(document.getElementById('update-num17').value);
            var sum_sl17 = Math.round(height17 * width17 * num17);
            var ssl17 = sum_sl17.toFixed(3);
            var s17 = ssl17 / 1000000;
            document.getElementById("update-sumShuliang117").value = s17
        })
        $('#update-danjia118').on('change', function () {
            var height18 = parseFloat(document.getElementById('update-height18').value);
            var width18 = parseFloat(document.getElementById('update-width18').value);
            var num18 = parseFloat(document.getElementById('update-num18').value);
            var sum_sl18 = Math.round(height18 * width18 * num18);
            var ssl18 = sum_sl18.toFixed(3);
            var s18 = ssl18 / 1000000;
            document.getElementById("update-sumShuliang118").value = s18
        })
        $('#update-danjia119').on('change', function () {
            var height19 = parseFloat(document.getElementById('update-height19').value);
            var width19 = parseFloat(document.getElementById('update-width19').value);
            var num19 = parseFloat(document.getElementById('update-num19').value);
            var sum_sl19 = Math.round(height19 * width19 * num19);
            var ssl19 = sum_sl19.toFixed(3);
            var s19 = ssl19 / 1000000;
            document.getElementById("update-sumShuliang119").value = s19
        })
    })
}

function getUpdPfsl() {
    var height = parseFloat(document.getElementById('update-height').value);
    var width = parseFloat(document.getElementById('update-width').value);
    var num = parseFloat(document.getElementById('update-num').value);
    var sum_sl = Math.round(height * width / 1000000 * num * 1000) / 1000
    document.getElementById("update-sumShuliang1").value = sum_sl
}

function getPfje() {
    $(document).ready(function () {
        $('#add-danjia1').on('change', function () {
            var sum_sl = parseFloat(document.getElementById('add-sumShuliang1').value);
            var pfdj = parseFloat(document.getElementById('add-danjia1').value);
            var sum_je = Math.round(sum_sl * pfdj * 100) / 100
            document.getElementById("add-sumJine1").value = sum_je
        })
        $('#add-danjia11').on('change', function () {
            var sum_sl1 = parseFloat(document.getElementById('add-sumShuliang11').value);
            var pfdj1 = parseFloat(document.getElementById('add-danjia11').value);
            var sum_je1 = Math.round(sum_sl1 * pfdj1 * 100) / 100
            document.getElementById("add-sumJine11").value = sum_je1
        })
        $('#add-danjia12').on('change', function () {
            var sum_sl2 = parseFloat(document.getElementById('add-sumShuliang12').value);
            var pfdj2 = parseFloat(document.getElementById('add-danjia12').value);
            var sum_je2 = Math.round(sum_sl2 * pfdj2 * 100) / 100
            document.getElementById("add-sumJine12").value = sum_je2
        })
        $('#add-danjia13').on('change', function () {
            var sum_sl3 = parseFloat(document.getElementById('add-sumShuliang13').value);
            var pfdj3 = parseFloat(document.getElementById('add-danjia13').value);
            var sum_je3 = Math.round(sum_sl3 * pfdj3 * 100) / 100
            document.getElementById("add-sumJine13").value = sum_je3
        })
        $('#add-danjia14').on('change', function () {
            var sum_sl4 = parseFloat(document.getElementById('add-sumShuliang14').value);
            var pfdj4 = parseFloat(document.getElementById('add-danjia14').value);
            var sum_je4 = Math.round(sum_sl4 * pfdj4 * 100) / 100
            document.getElementById("add-sumJine14").value = sum_je4
        })
        $('#add-danjia15').on('change', function () {
            var sum_sl5 = parseFloat(document.getElementById('add-sumShuliang15').value);
            var pfdj5 = parseFloat(document.getElementById('add-danjia15').value);
            var sum_je5 = Math.round(sum_sl5 * pfdj5 * 100) / 100
            document.getElementById("add-sumJine15").value = sum_je5
        })
        $('#add-danjia16').on('change', function () {
            var sum_sl6 = parseFloat(document.getElementById('add-sumShuliang16').value);
            var pfdj6 = parseFloat(document.getElementById('add-danjia16').value);
            var sum_je6 = Math.round(sum_sl6 * pfdj6 * 100) / 100
            document.getElementById("add-sumJine16").value = sum_je6
        })
        $('#add-danjia17').on('change', function () {
            var sum_sl7 = parseFloat(document.getElementById('add-sumShuliang17').value);
            var pfdj7 = parseFloat(document.getElementById('add-danjia17').value);
            var sum_je7 = Math.round(sum_sl7 * pfdj7 * 100) / 100
            document.getElementById("add-sumJine17").value = sum_je7
        })
        $('#add-danjia18').on('change', function () {
            var sum_sl8 = parseFloat(document.getElementById('add-sumShuliang18').value);
            var pfdj8 = parseFloat(document.getElementById('add-danjia18').value);
            var sum_je8 = Math.round(sum_sl8 * pfdj8 * 100) / 100
            document.getElementById("add-sumJine18").value = sum_je8
        })
        $('#add-danjia19').on('change', function () {
            var sum_sl9 = parseFloat(document.getElementById('add-sumShuliang19').value);
            var pfdj9 = parseFloat(document.getElementById('add-danjia19').value);
            var sum_je9 = Math.round(sum_sl9 * pfdj9 * 100) / 100
            document.getElementById("add-sumJine19").value = sum_je9
        })
        $('#add-danjia110').on('change', function () {
            var sum_sl10 = parseFloat(document.getElementById('add-sumShuliang110').value);
            var pfdj10 = parseFloat(document.getElementById('add-danjia110').value);
            var sum_je10 = Math.round(sum_sl10 * pfdj10 * 100) / 100
            document.getElementById("add-sumJine110").value = sum_je10
        })
        $('#add-danjia111').on('change', function () {
            var sum_sl11 = parseFloat(document.getElementById('add-sumShuliang111').value);
            var pfdj11 = parseFloat(document.getElementById('add-danjia111').value);
            var sum_je11 = Math.round(sum_sl11 * pfdj11 * 100) / 100
            document.getElementById("add-sumJine111").value = sum_je11
        })
        $('#add-danjia112').on('change', function () {
            var sum_sl12 = parseFloat(document.getElementById('add-sumShuliang112').value);
            var pfdj12 = parseFloat(document.getElementById('add-danjia112').value);
            var sum_je12 = Math.round(sum_sl12 * pfdj12 * 100) / 100
            document.getElementById("add-sumJine112").value = sum_je12
        })
        $('#add-danjia113').on('change', function () {
            var sum_sl13 = parseFloat(document.getElementById('add-sumShuliang113').value);
            var pfdj13 = parseFloat(document.getElementById('add-danjia113').value);
            var sum_je13 = Math.round(sum_sl13 * pfdj13 * 100) / 100
            document.getElementById("add-sumJine113").value = sum_je13
        })
        $('#add-danjia114').on('change', function () {
            var sum_sl14 = parseFloat(document.getElementById('add-sumShuliang114').value);
            var pfdj14 = parseFloat(document.getElementById('add-danjia114').value);
            var sum_je14 = Math.round(sum_sl14 * pfdj14 * 100) / 100
            document.getElementById("add-sumJine114").value = sum_je14
        })
        $('#add-danjia115').on('change', function () {
            var sum_sl15 = parseFloat(document.getElementById('add-sumShuliang115').value);
            var pfdj15 = parseFloat(document.getElementById('add-danjia115').value);
            var sum_je15 = Math.round(sum_sl15 * pfdj15 * 100) / 100
            document.getElementById("add-sumJine115").value = sum_je15
        })
        $('#add-danjia116').on('change', function () {
            var sum_sl16 = parseFloat(document.getElementById('add-sumShuliang116').value);
            var pfdj16 = parseFloat(document.getElementById('add-danjia116').value);
            var sum_je16 = Math.round(sum_sl16 * pfdj16 * 100) / 100
            document.getElementById("add-sumJine116").value = sum_je16
        })
        $('#add-danjia117').on('change', function () {
            var sum_sl17 = parseFloat(document.getElementById('add-sumShuliang117').value);
            var pfdj17 = parseFloat(document.getElementById('add-danjia117').value);
            var sum_je17 = Math.round(sum_sl17 * pfdj17 * 100) / 100
            document.getElementById("add-sumJine117").value = sum_je17
        })
        $('#add-danjia118').on('change', function () {
            var sum_sl18 = parseFloat(document.getElementById('add-sumShuliang118').value);
            var pfdj18 = parseFloat(document.getElementById('add-danjia118').value);
            var sum_je18 = Math.round(sum_sl18 * pfdj18 * 100) / 100
            document.getElementById("add-sumJine118").value = sum_je18
        })
        $('#add-danjia119').on('change', function () {
            var sum_sl19 = parseFloat(document.getElementById('add-sumShuliang119').value);
            var pfdj19 = parseFloat(document.getElementById('add-danjia119').value);
            var sum_je19 = Math.round(sum_sl19 * pfdj19 * 100) / 100
            document.getElementById("add-sumJine119").value = sum_je19
        })

    })
    $(document).ready(function () {
        $('#update-danjia1').on('change', function () {
            var sum_sl = parseFloat(document.getElementById('update-sumShuliang1').value);
            var pfdj = parseFloat(document.getElementById('update-danjia1').value);
            var sum_je = Math.round(sum_sl * pfdj * 100) / 100
            document.getElementById("update-sumJine1").value = sum_je
        })
        $('#update-danjia11').on('change', function () {
            var sum_sl1 = parseFloat(document.getElementById('update-sumShuliang11').value);
            var pfdj1 = parseFloat(document.getElementById('update-danjia11').value);
            var sum_je1 = Math.round(sum_sl1 * pfdj1 * 100) / 100
            document.getElementById("update-sumJine11").value = sum_je1
        })
        $('#update-danjia12').on('change', function () {
            var sum_sl2 = parseFloat(document.getElementById('update-sumShuliang12').value);
            var pfdj2 = parseFloat(document.getElementById('update-danjia12').value);
            var sum_je2 = Math.round(sum_sl1 * pfdj1 * 100) / 100
            document.getElementById("update-sumJine12").value = sum_je2
        })
        $('#update-danjia13').on('change', function () {
            var sum_sl3 = parseFloat(document.getElementById('update-sumShuliang13').value);
            var pfdj3 = parseFloat(document.getElementById('update-danjia13').value);
            var sum_je3 = Math.round(sum_sl3 * pfdj3 * 100) / 100
            document.getElementById("update-sumJine13").value = sum_je3
        })
        $('#update-danjia14').on('change', function () {
            var sum_sl4 = parseFloat(document.getElementById('update-sumShuliang14').value);
            var pfdj4 = parseFloat(document.getElementById('update-danjia14').value);
            var sum_je4 = Math.round(sum_sl4 * pfdj4 * 100) / 100
            document.getElementById("update-sumJine14").value = sum_je4
        })
        $('#update-danjia15').on('change', function () {
            var sum_sl5 = parseFloat(document.getElementById('update-sumShuliang15').value);
            var pfdj5 = parseFloat(document.getElementById('update-danjia15').value);
            var sum_je5 = Math.round(sum_sl5 * pfdj5 * 100) / 100
            document.getElementById("update-sumJine15").value = sum_je5
        })
        $('#update-danjia16').on('change', function () {
            var sum_sl6 = parseFloat(document.getElementById('update-sumShuliang16').value);
            var pfdj6 = parseFloat(document.getElementById('update-danjia16').value);
            var sum_je6 = Math.round(sum_sl6 * pfdj6 * 100) / 100
            document.getElementById("update-sumJine16").value = sum_je6
        })
        $('#update-danjia17').on('change', function () {
            var sum_sl7 = parseFloat(document.getElementById('update-sumShuliang17').value);
            var pfdj7 = parseFloat(document.getElementById('update-danjia17').value);
            var sum_je7 = Math.round(sum_sl7 * pfdj7 * 100) / 100
            document.getElementById("update-sumJine17").value = sum_je7
        })
        $('#update-danjia18').on('change', function () {
            var sum_sl8 = parseFloat(document.getElementById('update-sumShuliang18').value);
            var pfdj8 = parseFloat(document.getElementById('update-danjia18').value);
            var sum_je8 = Math.round(sum_sl8 * pfdj8 * 100) / 100
            document.getElementById("update-sumJine18").value = sum_je8
        })
        $('#update-danjia19').on('change', function () {
            var sum_sl9 = parseFloat(document.getElementById('update-sumShuliang19').value);
            var pfdj9 = parseFloat(document.getElementById('update-danjia19').value);
            var sum_je9 = Math.round(sum_sl9 * pfdj9 * 100) / 100
            document.getElementById("update-sumJine19").value = sum_je9
        })
        $('#update-danjia110').on('change', function () {
            var sum_sl10 = parseFloat(document.getElementById('update-sumShuliang110').value);
            var pfdj10 = parseFloat(document.getElementById('update-danjia110').value);
            var sum_je10 = Math.round(sum_sl10 * pfdj10 * 100) / 100
            document.getElementById("update-sumJine110").value = sum_je10
        })
        $('#update-danjia111').on('change', function () {
            var sum_sl11 = parseFloat(document.getElementById('update-sumShuliang111').value);
            var pfdj11 = parseFloat(document.getElementById('update-danjia111').value);
            var sum_je11 = Math.round(sum_sl11 * pfdj11 * 100) / 100
            document.getElementById("update-sumJine111").value = sum_je11
        })
        $('#update-danjia112').on('change', function () {
            var sum_sl12 = parseFloat(document.getElementById('update-sumShuliang112').value);
            var pfdj12 = parseFloat(document.getElementById('update-danjia112').value);
            var sum_je12 = Math.round(sum_sl12 * pfdj12 * 100) / 100
            document.getElementById("update-sumJine112").value = sum_je12
        })
        $('#update-danjia113').on('change', function () {
            var sum_sl13 = parseFloat(document.getElementById('update-sumShuliang113').value);
            var pfdj13 = parseFloat(document.getElementById('update-danjia113').value);
            var sum_je13 = Math.round(sum_sl13 * pfdj13 * 100) / 100
            document.getElementById("update-sumJine113").value = sum_je13
        })
        $('#update-danjia114').on('change', function () {
            var sum_sl14 = parseFloat(document.getElementById('update-sumShuliang114').value);
            var pfdj14 = parseFloat(document.getElementById('update-danjia114').value);
            var sum_je14 = Math.round(sum_sl14 * pfdj14 * 100) / 100
            document.getElementById("update-sumJine114").value = sum_je14
        })
        $('#update-danjia115').on('change', function () {
            var sum_sl15 = parseFloat(document.getElementById('update-sumShuliang115').value);
            var pfdj15 = parseFloat(document.getElementById('update-danjia115').value);
            var sum_je15 = Math.round(sum_sl15 * pfdj15 * 100) / 100
            document.getElementById("update-sumJine115").value = sum_je15
        })
        $('#update-danjia116').on('change', function () {
            var sum_sl16 = parseFloat(document.getElementById('update-sumShuliang116').value);
            var pfdj16 = parseFloat(document.getElementById('update-danjia116').value);
            var sum_je16 = Math.round(sum_sl16 * pfdj16 * 100) / 100
            document.getElementById("update-sumJine116").value = sum_je16
        })
        $('#update-danjia117').on('change', function () {
            var sum_sl17 = parseFloat(document.getElementById('update-sumShuliang117').value);
            var pfdj17 = parseFloat(document.getElementById('update-danjia117').value);
            var sum_je17 = Math.round(sum_sl17 * pfdj17 * 100) / 100
            document.getElementById("update-sumJine117").value = sum_je17
        })
        $('#update-danjia118').on('change', function () {
            var sum_sl18 = parseFloat(document.getElementById('update-sumShuliang118').value);
            var pfdj18 = parseFloat(document.getElementById('update-danjia118').value);
            var sum_je18 = Math.round(sum_sl18 * pfdj18 * 100) / 100
            document.getElementById("update-sumJine118").value = sum_je18
        })
        $('#update-danjia119').on('change', function () {
            var sum_sl19 = parseFloat(document.getElementById('update-sumShuliang119').value);
            var pfdj19 = parseFloat(document.getElementById('update-danjia119').value);
            var sum_je19 = Math.round(sum_sl19 * pfdj19 * 100) / 100
            document.getElementById("update-sumJine119").value = sum_je19
        })

    })

}

function getUpdPfje() {
    var sum_sl = parseFloat(document.getElementById('update-sumShuliang1').value);
    var pfdj = parseFloat(document.getElementById('update-danjia1').value);
    var sum_je = Math.round(sum_sl * pfdj * 100) / 100
    document.getElementById("update-sumJine1").value = sum_je
}

function getZcsl() {
    $(document).ready(function () {
        $('#add-danjia2').on('change', function () {
            var height = parseFloat(document.getElementById('add-height').value);
            var width = parseFloat(document.getElementById('add-width').value);
            var num = parseFloat(document.getElementById('add-num').value);
            var sum_sl2 = Math.round((height * 1 + width * 1) * 2 * num);
            var zcsl = sum_sl2.toFixed(3);
            var zc = zcsl / 1000;
            document.getElementById("add-sumShuliang2").value = zc
        })
        $('#add-danjia21').on('change', function () {
            var height1 = parseFloat(document.getElementById('add-height1').value);
            var width1 = parseFloat(document.getElementById('add-width1').value);
            var num1 = parseFloat(document.getElementById('add-num1').value);
            var sum_sl21 = Math.round((height1 * 1 + width1 * 1) * 2 * num1);
            var zcsl1 = sum_sl21.toFixed(3);
            var zc1 = zcsl1 / 1000;
            document.getElementById("add-sumShuliang21").value = zc1
        })
        $('#add-danjia22').on('change', function () {
            var height2 = parseFloat(document.getElementById('add-height2').value);
            var width2 = parseFloat(document.getElementById('add-width2').value);
            var num2 = parseFloat(document.getElementById('add-num2').value);
            var sum_sl22 = Math.round((height2 * 1 + width2 * 1) * 2 * num2);
            var zcsl2 = sum_sl22.toFixed(3);
            var zc2 = zcsl2 / 1000;
            document.getElementById("add-sumShuliang22").value = zc2
        })
        $('#add-danjia23').on('change', function () {
            var height3 = parseFloat(document.getElementById('add-height3').value);
            var width3 = parseFloat(document.getElementById('add-width3').value);
            var num3 = parseFloat(document.getElementById('add-num3').value);
            var sum_sl23 = Math.round((height3 * 1 + width3 * 1) * 2 * num3);
            var zcsl3 = sum_sl23.toFixed(3);
            var zc3 = zcsl3 / 1000;
            document.getElementById("add-sumShuliang23").value = zc3
        })
        $('#add-danjia24').on('change', function () {
            var height4 = parseFloat(document.getElementById('add-height4').value);
            var width4 = parseFloat(document.getElementById('add-width4').value);
            var num4 = parseFloat(document.getElementById('add-num4').value);
            var sum_sl24 = Math.round((height4 * 1 + width4 * 1) * 2 * num4);
            var zcsl4 = sum_sl24.toFixed(3);
            var zc4 = zcsl4 / 1000;
            document.getElementById("add-sumShuliang24").value = zc4
        })
        $('#add-danjia25').on('change', function () {
            var height5 = parseFloat(document.getElementById('add-height5').value);
            var width5 = parseFloat(document.getElementById('add-width5').value);
            var num5 = parseFloat(document.getElementById('add-num5').value);
            var sum_sl25 = Math.round((height5 * 1 + width5 * 1) * 2 * num5);
            var zcsl5 = sum_sl25.toFixed(3);
            var zc5 = zcsl5 / 1000;
            document.getElementById("add-sumShuliang25").value = zc5
        })
        $('#add-danjia26').on('change', function () {
            var height6 = parseFloat(document.getElementById('add-height6').value);
            var width6 = parseFloat(document.getElementById('add-width6').value);
            var num6 = parseFloat(document.getElementById('add-num6').value);
            var sum_sl26 = Math.round((height6 * 1 + width6 * 1) * 2 * num6);
            var zcsl6 = sum_sl26.toFixed(3);
            var zc6 = zcsl6 / 1000;
            document.getElementById("add-sumShuliang26").value = zc6
        })
        $('#add-danjia27').on('change', function () {
            var height7 = parseFloat(document.getElementById('add-height7').value);
            var width7 = parseFloat(document.getElementById('add-width7').value);
            var num7 = parseFloat(document.getElementById('add-num7').value);
            var sum_sl27 = Math.round((height7 * 1 + width7 * 1) * 2 * num7);
            var zcsl7 = sum_sl27.toFixed(3);
            var zc7 = zcsl7 / 1000;
            document.getElementById("add-sumShuliang27").value = zc7
        })
        $('#add-danjia28').on('change', function () {
            var height8 = parseFloat(document.getElementById('add-height8').value);
            var width8 = parseFloat(document.getElementById('add-width8').value);
            var num8 = parseFloat(document.getElementById('add-num8').value);
            var sum_sl28 = Math.round((height8 * 1 + width8 * 1) * 2 * num8);
            var zcsl8 = sum_sl28.toFixed(3);
            var zc8 = zcsl8 / 1000;
            document.getElementById("add-sumShuliang28").value = zc8
        })
        $('#add-danjia29').on('change', function () {
            var height9 = parseFloat(document.getElementById('add-height9').value);
            var width9 = parseFloat(document.getElementById('add-width9').value);
            var num9 = parseFloat(document.getElementById('add-num9').value);
            var sum_sl29 = Math.round((height9 * 1 + width9 * 1) * 2 * num9);
            var zcsl9 = sum_sl29.toFixed(3);
            var zc9 = zcsl9 / 1000;
            document.getElementById("add-sumShuliang29").value = zc9
        })
        $('#add-danjia210').on('change', function () {
            var height10 = parseFloat(document.getElementById('add-height10').value);
            var width10 = parseFloat(document.getElementById('add-width10').value);
            var num10 = parseFloat(document.getElementById('add-num10').value);
            var sum_sl210 = Math.round((height10 * 1 + width10 * 1) * 2 * num10);
            var zcsl10 = sum_sl210.toFixed(3);
            var zc10 = zcsl10 / 1000;
            document.getElementById("add-sumShuliang210").value = zc10
        })
        $('#add-danjia211').on('change', function () {
            var height11 = parseFloat(document.getElementById('add-height11').value);
            var width11 = parseFloat(document.getElementById('add-width11').value);
            var num11 = parseFloat(document.getElementById('add-num11').value);
            var sum_sl211 = Math.round((height11 * 1 + width11 * 1) * 2 * num11);
            var zcsl11 = sum_sl211.toFixed(3);
            var zc11 = zcsl11 / 1000;
            document.getElementById("add-sumShuliang211").value = zc11
        })
        $('#add-danjia212').on('change', function () {
            var height12 = parseFloat(document.getElementById('add-height12').value);
            var width12 = parseFloat(document.getElementById('add-width12').value);
            var num12 = parseFloat(document.getElementById('add-num12').value);
            var sum_sl212 = Math.round((height12 * 1 + width12 * 1) * 2 * num12);
            var zcsl12 = sum_sl212.toFixed(3);
            var zc12 = zcsl12 / 1000;
            document.getElementById("add-sumShuliang212").value = zc12
        })
        $('#add-danjia213').on('change', function () {
            var height13 = parseFloat(document.getElementById('add-height13').value);
            var width13 = parseFloat(document.getElementById('add-width13').value);
            var num13 = parseFloat(document.getElementById('add-num13').value);
            var sum_sl213 = Math.round((height13 * 1 + width13 * 1) * 2 * num13);
            var zcsl13 = sum_sl213.toFixed(3);
            var zc13 = zcsl13 / 1000;
            document.getElementById("add-sumShuliang213").value = zc13
        })
        $('#add-danjia214').on('change', function () {
            var height14 = parseFloat(document.getElementById('add-height14').value);
            var width14 = parseFloat(document.getElementById('add-width14').value);
            var num14 = parseFloat(document.getElementById('add-num14').value);
            var sum_sl214 = Math.round((height14 * 1 + width14 * 1) * 2 * num14);
            var zcsl14 = sum_sl214.toFixed(3);
            var zc14 = zcsl14 / 1000;
            document.getElementById("add-sumShuliang214").value = zc14
        })
        $('#add-danjia215').on('change', function () {
            var height15 = parseFloat(document.getElementById('add-height15').value);
            var width15 = parseFloat(document.getElementById('add-width15').value);
            var num15 = parseFloat(document.getElementById('add-num15').value);
            var sum_sl215 = Math.round((height15 * 1 + width15 * 1) * 2 * num15);
            var zcsl15 = sum_sl215.toFixed(3);
            var zc15 = zcsl15 / 1000;
            document.getElementById("add-sumShuliang215").value = zc15
        })
        $('#add-danjia216').on('change', function () {
            var height16 = parseFloat(document.getElementById('add-height16').value);
            var width16 = parseFloat(document.getElementById('add-width16').value);
            var num16 = parseFloat(document.getElementById('add-num16').value);
            var sum_sl216 = Math.round((height16 * 1 + width16 * 1) * 2 * num16);
            var zcsl16 = sum_sl216.toFixed(3);
            var zc16 = zcsl16 / 1000;
            document.getElementById("add-sumShuliang216").value = zc16
        })
        $('#add-danjia217').on('change', function () {
            var height17 = parseFloat(document.getElementById('add-height17').value);
            var width17 = parseFloat(document.getElementById('add-width17').value);
            var num17 = parseFloat(document.getElementById('add-num17').value);
            var sum_sl217 = Math.round((height17 * 1 + width17 * 1) * 2 * num17);
            var zcsl17 = sum_sl217.toFixed(3);
            var zc17 = zcsl17 / 1000;
            document.getElementById("add-sumShuliang217").value = zc17
        })
        $('#add-danjia218').on('change', function () {
            var height18 = parseFloat(document.getElementById('add-height18').value);
            var width18 = parseFloat(document.getElementById('add-width18').value);
            var num18 = parseFloat(document.getElementById('add-num18').value);
            var sum_sl218 = Math.round((height18 * 1 + width18 * 1) * 2 * num18);
            var zcsl18 = sum_sl218.toFixed(3);
            var zc18 = zcsl18 / 1000;
            document.getElementById("add-sumShuliang218").value = zc18
        })
        $('#add-danjia219').on('change', function () {
            var height19 = parseFloat(document.getElementById('add-height19').value);
            var width19 = parseFloat(document.getElementById('add-width19').value);
            var num19 = parseFloat(document.getElementById('add-num19').value);
            var sum_sl219 = Math.round((height19 * 1 + width19 * 1) * 2 * num19);
            var zcsl19 = sum_sl219.toFixed(3);
            var zc19 = zcsl19 / 1000;
            document.getElementById("add-sumShuliang219").value = zc19
        })
    })
    $(document).ready(function () {
        $('#update-danjia2').on('change', function () {
            var height = parseFloat(document.getElementById('update-height').value);
            var width = parseFloat(document.getElementById('update-width').value);
            var num = parseFloat(document.getElementById('update-num').value);
            var sum_sl2 = Math.round((height * 1 + width * 1) * 2 * num);
            var zcsl = sum_sl2.toFixed(3);
            var zc = zcsl / 1000;
            document.getElementById("update-sumShuliang2").value = zc
        })
        $('#update-danjia21').on('change', function () {
            var height1 = parseFloat(document.getElementById('update-height1').value);
            var width1 = parseFloat(document.getElementById('update-width1').value);
            var num1 = parseFloat(document.getElementById('update-num1').value);
            var sum_sl21 = Math.round((height1 * 1 + width1 * 1) * 2 * num1);
            var zcsl1 = sum_sl21.toFixed(3);
            var zc1 = zcsl1 / 1000;
            document.getElementById("update-sumShuliang21").value = zc1
        })
        $('#update-danjia22').on('change', function () {
            var height2 = parseFloat(document.getElementById('update-height2').value);
            var width2 = parseFloat(document.getElementById('update-width2').value);
            var num2 = parseFloat(document.getElementById('update-num2').value);
            var sum_sl22 = Math.round((height2 * 1 + width2 * 1) * 2 * num2);
            var zcsl2 = sum_sl22.toFixed(3);
            var zc2 = zcsl2 / 1000;
            document.getElementById("update-sumShuliang22").value = zc2
        })
        $('#update-danjia23').on('change', function () {
            var height3 = parseFloat(document.getElementById('update-height3').value);
            var width3 = parseFloat(document.getElementById('update-width3').value);
            var num3 = parseFloat(document.getElementById('update-num3').value);
            var sum_sl23 = Math.round((height3 * 1 + width3 * 1) * 2 * num3);
            var zcsl3 = sum_sl23.toFixed(3);
            var zc3 = zcsl3 / 1000;
            document.getElementById("update-sumShuliang23").value = zc3
        })
        $('#update-danjia24').on('change', function () {
            var height4 = parseFloat(document.getElementById('update-height4').value);
            var width4 = parseFloat(document.getElementById('update-width4').value);
            var num4 = parseFloat(document.getElementById('update-num4').value);
            var sum_sl24 = Math.round((height4 * 1 + width4 * 1) * 2 * num4);
            var zcsl4 = sum_sl24.toFixed(3);
            var zc4 = zcsl4 / 1000;
            document.getElementById("update-sumShuliang24").value = zc4
        })
        $('#update-danjia25').on('change', function () {
            var height5 = parseFloat(document.getElementById('update-height5').value);
            var width5 = parseFloat(document.getElementById('update-width5').value);
            var num5 = parseFloat(document.getElementById('update-num5').value);
            var sum_sl25 = Math.round((height5 * 1 + width5 * 1) * 2 * num5);
            var zcsl5 = sum_sl25.toFixed(3);
            var zc5 = zcsl5 / 1000;
            document.getElementById("update-sumShuliang25").value = zc5
        })
        $('#update-danjia26').on('change', function () {
            var height6 = parseFloat(document.getElementById('update-height6').value);
            var width6 = parseFloat(document.getElementById('update-width6').value);
            var num6 = parseFloat(document.getElementById('update-num6').value);
            var sum_sl26 = Math.round((height6 * 1 + width6 * 1) * 2 * num6);
            var zcsl6 = sum_sl26.toFixed(3);
            var zc6 = zcsl6 / 1000;
            document.getElementById("update-sumShuliang26").value = zc6
        })
        $('#update-danjia27').on('change', function () {
            var height7 = parseFloat(document.getElementById('update-height7').value);
            var width7 = parseFloat(document.getElementById('update-width7').value);
            var num7 = parseFloat(document.getElementById('update-num7').value);
            var sum_sl27 = Math.round((height7 * 1 + width7 * 1) * 2 * num7);
            var zcsl7 = sum_sl27.toFixed(3);
            var zc7 = zcsl7 / 1000;
            document.getElementById("update-sumShuliang27").value = zc7
        })
        $('#update-danjia28').on('change', function () {
            var height8 = parseFloat(document.getElementById('update-height8').value);
            var width8 = parseFloat(document.getElementById('update-width8').value);
            var num8 = parseFloat(document.getElementById('update-num8').value);
            var sum_sl28 = Math.round((height8 * 1 + width8 * 1) * 2 * num8);
            var zcsl8 = sum_sl28.toFixed(3);
            var zc8 = zcsl8 / 1000;
            document.getElementById("update-sumShuliang28").value = zc8
        })
        $('#update-danjia29').on('change', function () {
            var height9 = parseFloat(document.getElementById('update-height9').value);
            var width9 = parseFloat(document.getElementById('update-width9').value);
            var num9 = parseFloat(document.getElementById('update-num9').value);
            var sum_sl29 = Math.round((height9 * 1 + width9 * 1) * 2 * num9);
            var zcsl9 = sum_sl29.toFixed(3);
            var zc9 = zcsl9 / 1000;
            document.getElementById("update-sumShuliang29").value = zc9
        })
        $('#update-danjia210').on('change', function () {
            var height10 = parseFloat(document.getElementById('update-height10').value);
            var width10 = parseFloat(document.getElementById('update-width10').value);
            var num10 = parseFloat(document.getElementById('update-num10').value);
            var sum_sl210 = Math.round((height10 * 1 + width10 * 1) * 2 * num10);
            var zcsl10 = sum_sl210.toFixed(3);
            var zc10 = zcsl10 / 1000;
            document.getElementById("update-sumShuliang210").value = zc10
        })
        $('#update-danjia211').on('change', function () {
            var height11 = parseFloat(document.getElementById('update-height11').value);
            var width11 = parseFloat(document.getElementById('update-width11').value);
            var num11 = parseFloat(document.getElementById('update-num11').value);
            var sum_sl211 = Math.round((height11 * 1 + width11 * 1) * 2 * num11);
            var zcsl11 = sum_sl211.toFixed(3);
            var zc11 = zcsl11 / 1000;
            document.getElementById("update-sumShuliang211").value = zc11
        })
        $('#update-danjia212').on('change', function () {
            var height12 = parseFloat(document.getElementById('update-height12').value);
            var width12 = parseFloat(document.getElementById('update-width12').value);
            var num12 = parseFloat(document.getElementById('update-num12').value);
            var sum_sl212 = Math.round((height12 * 1 + width12 * 1) * 2 * num12);
            var zcsl12 = sum_sl212.toFixed(3);
            var zc12 = zcsl12 / 1000;
            document.getElementById("update-sumShuliang212").value = zc12
        })
        $('#update-danjia213').on('change', function () {
            var height13 = parseFloat(document.getElementById('update-height13').value);
            var width13 = parseFloat(document.getElementById('update-width13').value);
            var num13 = parseFloat(document.getElementById('update-num13').value);
            var sum_sl213 = Math.round((height13 * 1 + width13 * 1) * 2 * num13);
            var zcsl13 = sum_sl213.toFixed(3);
            var zc13 = zcsl13 / 1000;
            document.getElementById("update-sumShuliang213").value = zc13
        })
        $('#update-danjia214').on('change', function () {
            var height14 = parseFloat(document.getElementById('update-height14').value);
            var width14 = parseFloat(document.getElementById('update-width14').value);
            var num14 = parseFloat(document.getElementById('update-num14').value);
            var sum_sl214 = Math.round((height14 * 1 + width14 * 1) * 2 * num14);
            var zcsl14 = sum_sl214.toFixed(3);
            var zc14 = zcsl14 / 1000;
            document.getElementById("update-sumShuliang214").value = zc14
        })
        $('#update-danjia215').on('change', function () {
            var height15 = parseFloat(document.getElementById('update-height15').value);
            var width15 = parseFloat(document.getElementById('update-width15').value);
            var num15 = parseFloat(document.getElementById('update-num15').value);
            var sum_sl215 = Math.round((height15 * 1 + width15 * 1) * 2 * num15);
            var zcsl15 = sum_sl215.toFixed(3);
            var zc15 = zcsl15 / 1000;
            document.getElementById("update-sumShuliang215").value = zc15
        })
        $('#update-danjia216').on('change', function () {
            var height16 = parseFloat(document.getElementById('update-height16').value);
            var width16 = parseFloat(document.getElementById('update-width16').value);
            var num16 = parseFloat(document.getElementById('update-num16').value);
            var sum_sl216 = Math.round((height16 * 1 + width16 * 1) * 2 * num16);
            var zcsl16 = sum_sl216.toFixed(3);
            var zc16 = zcsl16 / 1000;
            document.getElementById("update-sumShuliang216").value = zc16
        })
        $('#update-danjia217').on('change', function () {
            var height17 = parseFloat(document.getElementById('update-height17').value);
            var width17 = parseFloat(document.getElementById('update-width17').value);
            var num17 = parseFloat(document.getElementById('update-num17').value);
            var sum_sl217 = Math.round((height17 * 1 + width17 * 1) * 2 * num17);
            var zcsl17 = sum_sl217.toFixed(3);
            var zc17 = zcsl17 / 1000;
            document.getElementById("update-sumShuliang217").value = zc17
        })
        $('#update-danjia218').on('change', function () {
            var height18 = parseFloat(document.getElementById('update-height18').value);
            var width18 = parseFloat(document.getElementById('update-width18').value);
            var num18 = parseFloat(document.getElementById('update-num18').value);
            var sum_sl218 = Math.round((height18 * 1 + width18 * 1) * 2 * num18);
            var zcsl18 = sum_sl218.toFixed(3);
            var zc18 = zcsl18 / 1000;
            document.getElementById("update-sumShuliang218").value = zc18
        })
        $('#update-danjia219').on('change', function () {
            var height19 = parseFloat(document.getElementById('update-height19').value);
            var width19 = parseFloat(document.getElementById('update-width19').value);
            var num19 = parseFloat(document.getElementById('update-num19').value);
            var sum_sl219 = Math.round((height19 * 1 + width19 * 1) * 2 * num19);
            var zcsl19 = sum_sl219.toFixed(3);
            var zc19 = zcsl19 / 1000;
            document.getElementById("update-sumShuliang219").value = zc19
        })
    })
}

function getUpdZcsl() {
    var height = parseFloat(document.getElementById('update-height').value);
    var width = parseFloat(document.getElementById('update-width').value);
    var num = parseFloat(document.getElementById('update-num').value);
    var sum_sl2 = Math.round((height * 1 + width * 1) / 1000 * 2 * num * 1000) / 1000
    document.getElementById("update-sumShuliang2").value = sum_sl2
}

function getZcje() {
    $(document).ready(function () {
        $('#add-danjia2').on('change', function () {
            var sum_sl2 = parseFloat(document.getElementById('add-sumShuliang2').value);
            var zcdj2 = parseFloat(document.getElementById('add-danjia2').value);
            var sum_je2 = Math.round(sum_sl2 * zcdj2 * 100) / 100
            document.getElementById("add-sumJine2").value = sum_je2
        })
        $('#add-danjia21').on('change', function () {
            var sum_sl21 = parseFloat(document.getElementById('add-sumShuliang21').value);
            var zcdj21 = parseFloat(document.getElementById('add-danjia21').value);
            var sum_je21 = Math.round(sum_sl21 * zcdj21 * 100) / 100
            document.getElementById("add-sumJine21").value = sum_je21
        })
        $('#add-danjia22').on('change', function () {
            var sum_sl22 = parseFloat(document.getElementById('add-sumShuliang22').value);
            var zcdj22 = parseFloat(document.getElementById('add-danjia22').value);
            var sum_je22 = Math.round(sum_sl22 * zcdj22 * 100) / 100
            document.getElementById("add-sumJine22").value = sum_je22
        })
        $('#add-danjia23').on('change', function () {
            var sum_sl23 = parseFloat(document.getElementById('add-sumShuliang23').value);
            var zcdj23 = parseFloat(document.getElementById('add-danjia23').value);
            var sum_je23 = Math.round(sum_sl23 * zcdj23 * 100) / 100
            document.getElementById("add-sumJine23").value = sum_je23
        })
        $('#add-danjia24').on('change', function () {
            var sum_sl24 = parseFloat(document.getElementById('add-sumShuliang24').value);
            var zcdj24 = parseFloat(document.getElementById('add-danjia24').value);
            var sum_je24 = Math.round(sum_sl24 * zcdj24 * 100) / 100
            document.getElementById("add-sumJine24").value = sum_je24
        })
        $('#add-danjia25').on('change', function () {
            var sum_sl25 = parseFloat(document.getElementById('add-sumShuliang25').value);
            var zcdj25 = parseFloat(document.getElementById('add-danjia25').value);
            var sum_je25 = Math.round(sum_sl25 * zcdj25 * 100) / 100
            document.getElementById("add-sumJine25").value = sum_je25
        })
        $('#add-danjia26').on('change', function () {
            var sum_sl26 = parseFloat(document.getElementById('add-sumShuliang26').value);
            var zcdj26 = parseFloat(document.getElementById('add-danjia26').value);
            var sum_je26 = Math.round(sum_sl26 * zcdj26 * 100) / 100
            document.getElementById("add-sumJine26").value = sum_je26
        })
        $('#add-danjia27').on('change', function () {
            var sum_sl27 = parseFloat(document.getElementById('add-sumShuliang27').value);
            var zcdj27 = parseFloat(document.getElementById('add-danjia27').value);
            var sum_je27 = Math.round(sum_sl27 * zcdj27 * 100) / 100
            document.getElementById("add-sumJine27").value = sum_je27
        })
        $('#add-danjia28').on('change', function () {
            var sum_sl28 = parseFloat(document.getElementById('add-sumShuliang28').value);
            var zcdj28 = parseFloat(document.getElementById('add-danjia28').value);
            var sum_je28 = Math.round(sum_sl28 * zcdj28 * 100) / 100
            document.getElementById("add-sumJine28").value = sum_je28
        })
        $('#add-danjia29').on('change', function () {
            var sum_sl29 = parseFloat(document.getElementById('add-sumShuliang29').value);
            var zcdj29 = parseFloat(document.getElementById('add-danjia29').value);
            var sum_je29 = Math.round(sum_sl29 * zcdj29 * 100) / 100
            document.getElementById("add-sumJine29").value = sum_je29
        })
        $('#add-danjia210').on('change', function () {
            var sum_sl210 = parseFloat(document.getElementById('add-sumShuliang210').value);
            var zcdj210 = parseFloat(document.getElementById('add-danjia210').value);
            var sum_je210 = Math.round(sum_sl210 * zcdj210 * 100) / 100
            document.getElementById("add-sumJine210").value = sum_je210
        })
        $('#add-danjia211').on('change', function () {
            var sum_sl211 = parseFloat(document.getElementById('add-sumShuliang211').value);
            var zcdj211 = parseFloat(document.getElementById('add-danjia211').value);
            var sum_je211 = Math.round(sum_sl211 * zcdj211 * 100) / 100
            document.getElementById("add-sumJine211").value = sum_je211
        })
        $('#add-danjia212').on('change', function () {
            var sum_sl212 = parseFloat(document.getElementById('add-sumShuliang212').value);
            var zcdj212 = parseFloat(document.getElementById('add-danjia212').value);
            var sum_je212 = Math.round(sum_sl212 * zcdj212 * 100) / 100
            document.getElementById("add-sumJine212").value = sum_je212
        })
        $('#add-danjia213').on('change', function () {
            var sum_sl213 = parseFloat(document.getElementById('add-sumShuliang213').value);
            var zcdj213 = parseFloat(document.getElementById('add-danjia213').value);
            var sum_je213 = Math.round(sum_sl213 * zcdj213 * 100) / 100
            document.getElementById("add-sumJine213").value = sum_je213
        })
        $('#add-danjia214').on('change', function () {
            var sum_sl214 = parseFloat(document.getElementById('add-sumShuliang214').value);
            var zcdj214 = parseFloat(document.getElementById('add-danjia214').value);
            var sum_je214 = Math.round(sum_sl214 * zcdj214 * 100) / 100
            document.getElementById("add-sumJine214").value = sum_je214
        })
        $('#add-danjia215').on('change', function () {
            var sum_sl215 = parseFloat(document.getElementById('add-sumShuliang215').value);
            var zcdj215 = parseFloat(document.getElementById('add-danjia215').value);
            var sum_je215 = Math.round(sum_sl215 * zcdj215 * 100) / 100
            document.getElementById("add-sumJine215").value = sum_je215
        })
        $('#add-danjia216').on('change', function () {
            var sum_sl216 = parseFloat(document.getElementById('add-sumShuliang216').value);
            var zcdj216 = parseFloat(document.getElementById('add-danjia216').value);
            var sum_je216 = Math.round(sum_sl216 * zcdj216 * 100) / 100
            document.getElementById("add-sumJine216").value = sum_je216
        })
        $('#add-danjia217').on('change', function () {
            var sum_sl217 = parseFloat(document.getElementById('add-sumShuliang217').value);
            var zcdj217 = parseFloat(document.getElementById('add-danjia217').value);
            var sum_je217 = Math.round(sum_sl217 * zcdj217 * 100) / 100
            document.getElementById("add-sumJine217").value = sum_je217
        })
        $('#add-danjia218').on('change', function () {
            var sum_sl218 = parseFloat(document.getElementById('add-sumShuliang218').value);
            var zcdj218 = parseFloat(document.getElementById('add-danjia218').value);
            var sum_je218 = Math.round(sum_sl218 * zcdj218 * 100) / 100
            document.getElementById("add-sumJine218").value = sum_je218
        })
        $('#add-danjia219').on('change', function () {
            var sum_sl219 = parseFloat(document.getElementById('add-sumShuliang219').value);
            var zcdj219 = parseFloat(document.getElementById('add-danjia219').value);
            var sum_je219 = Math.round(sum_sl219 * zcdj219 * 100) / 100
            document.getElementById("add-sumJine219").value = sum_je219
        })
    })
}
function getZcje1() {
    $(document).ready(function () {
        $('#update-danjia2').on('change', function () {
            var sum_sl2 = parseFloat(document.getElementById('update-sumShuliang2').value);
            var zcdj2 = parseFloat(document.getElementById('update-danjia2').value);
            var sum_je2 = Math.round(sum_sl2 * zcdj2 * 100) / 100
            document.getElementById("update-sumJine2").value = sum_je2
        })
        $('#update-danjia21').on('change', function () {
            var sum_sl21 = parseFloat(document.getElementById('update-sumShuliang21').value);
            var zcdj21 = parseFloat(document.getElementById('update-danjia21').value);
            var sum_je21 = Math.round(sum_sl21 * zcdj21 * 100) / 100
            document.getElementById("update-sumJine21").value = sum_je21
        })
        $('#update-danjia22').on('change', function () {
            var sum_sl22 = parseFloat(document.getElementById('update-sumShuliang22').value);
            var zcdj22 = parseFloat(document.getElementById('update-danjia22').value);
            var sum_je22 = Math.round(sum_sl22 * zcdj22 * 100) / 100
            document.getElementById("update-sumJine22").value = sum_je22
        })
        $('#update-danjia23').on('change', function () {
            var sum_sl23 = parseFloat(document.getElementById('update-sumShuliang23').value);
            var zcdj23 = parseFloat(document.getElementById('update-danjia23').value);
            var sum_je23 = Math.round(sum_sl23 * zcdj23 * 100) / 100
            document.getElementById("update-sumJine23").value = sum_je23
        })
        $('#update-danjia24').on('change', function () {
            var sum_sl24 = parseFloat(document.getElementById('update-sumShuliang24').value);
            var zcdj24 = parseFloat(document.getElementById('update-danjia24').value);
            var sum_je24 = Math.round(sum_sl24 * zcdj24 * 100) / 100
            document.getElementById("update-sumJine24").value = sum_je24
        })
        $('#update-danjia25').on('change', function () {
            var sum_sl25 = parseFloat(document.getElementById('update-sumShuliang25').value);
            var zcdj25 = parseFloat(document.getElementById('update-danjia25').value);
            var sum_je25 = Math.round(sum_sl25 * zcdj25 * 100) / 100
            document.getElementById("update-sumJine25").value = sum_je25
        })
        $('#update-danjia26').on('change', function () {
            var sum_sl26 = parseFloat(document.getElementById('update-sumShuliang26').value);
            var zcdj26 = parseFloat(document.getElementById('update-danjia26').value);
            var sum_je26 = Math.round(sum_sl26 * zcdj26 * 100) / 100
            document.getElementById("update-sumJine26").value = sum_je26
        })
        $('#update-danjia27').on('change', function () {
            var sum_sl27 = parseFloat(document.getElementById('update-sumShuliang27').value);
            var zcdj27 = parseFloat(document.getElementById('update-danjia27').value);
            var sum_je27 = Math.round(sum_sl27 * zcdj27 * 100) / 100
            document.getElementById("update-sumJine27").value = sum_je27
        })
        $('#update-danjia28').on('change', function () {
            var sum_sl28 = parseFloat(document.getElementById('update-sumShuliang28').value);
            var zcdj28 = parseFloat(document.getElementById('update-danjia28').value);
            var sum_je28 = Math.round(sum_sl28 * zcdj28 * 100) / 100
            document.getElementById("update-sumJine28").value = sum_je28
        })
        $('#update-danjia29').on('change', function () {
            var sum_sl29 = parseFloat(document.getElementById('update-sumShuliang29').value);
            var zcdj29 = parseFloat(document.getElementById('update-danjia29').value);
            var sum_je29 = Math.round(sum_sl29 * zcdj29 * 100) / 100
            document.getElementById("update-sumJine29").value = sum_je29
        })
        $('#update-danjia210').on('change', function () {
            var sum_sl210 = parseFloat(document.getElementById('update-sumShuliang210').value);
            var zcdj210 = parseFloat(document.getElementById('update-danjia210').value);
            var sum_je210 = Math.round(sum_sl210 * zcdj210 * 100) / 100
            document.getElementById("update-sumJine210").value = sum_je210
        })
        $('#update-danjia211').on('change', function () {
            var sum_sl211 = parseFloat(document.getElementById('update-sumShuliang211').value);
            var zcdj211 = parseFloat(document.getElementById('update-danjia211').value);
            var sum_je211 = Math.round(sum_sl211 * zcdj211 * 100) / 100
            document.getElementById("update-sumJine211").value = sum_je211
        })
        $('#update-danjia212').on('change', function () {
            var sum_sl212 = parseFloat(document.getElementById('update-sumShuliang212').value);
            var zcdj212 = parseFloat(document.getElementById('update-danjia212').value);
            var sum_je212 = Math.round(sum_sl212 * zcdj212 * 100) / 100
            document.getElementById("update-sumJine212").value = sum_je212
        })
        $('#update-danjia213').on('change', function () {
            var sum_sl213 = parseFloat(document.getElementById('update-sumShuliang213').value);
            var zcdj213 = parseFloat(document.getElementById('update-danjia213').value);
            var sum_je213 = Math.round(sum_sl213 * zcdj213 * 100) / 100
            document.getElementById("update-sumJine213").value = sum_je213
        })
        $('#update-danjia214').on('change', function () {
            var sum_sl214 = parseFloat(document.getElementById('update-sumShuliang214').value);
            var zcdj214 = parseFloat(document.getElementById('update-danjia214').value);
            var sum_je214 = Math.round(sum_sl214 * zcdj214 * 100) / 100
            document.getElementById("update-sumJine214").value = sum_je214
        })
        $('#update-danjia215').on('change', function () {
            var sum_sl215 = parseFloat(document.getElementById('update-sumShuliang215').value);
            var zcdj215 = parseFloat(document.getElementById('update-danjia215').value);
            var sum_je215 = Math.round(sum_sl215 * zcdj215 * 100) / 100
            document.getElementById("update-sumJine215").value = sum_je215
        })
        $('#update-danjia216').on('change', function () {
            var sum_sl216 = parseFloat(document.getElementById('update-sumShuliang216').value);
            var zcdj216 = parseFloat(document.getElementById('update-danjia216').value);
            var sum_je216 = Math.round(sum_sl216 * zcdj216 * 100) / 100
            document.getElementById("update-sumJine216").value = sum_je216
        })
        $('#update-danjia217').on('change', function () {
            var sum_sl217 = parseFloat(document.getElementById('update-sumShuliang217').value);
            var zcdj217 = parseFloat(document.getElementById('update-danjia217').value);
            var sum_je217 = Math.round(sum_sl217 * zcdj217 * 100) / 100
            document.getElementById("update-sumJine217").value = sum_je217
        })
        $('#update-danjia218').on('change', function () {
            var sum_sl218 = parseFloat(document.getElementById('update-sumShuliang218').value);
            var zcdj218 = parseFloat(document.getElementById('update-danjia218').value);
            var sum_je218 = Math.round(sum_sl218 * zcdj218 * 100) / 100
            document.getElementById("update-sumJine218").value = sum_je218
        })
        $('#update-danjia219').on('change', function () {
            var sum_sl219 = parseFloat(document.getElementById('update-sumShuliang219').value);
            var zcdj219 = parseFloat(document.getElementById('update-danjia219').value);
            var sum_je219 = Math.round(sum_sl219 * zcdj219 * 100) / 100
            document.getElementById("update-sumJine219").value = sum_je219
        })
    })
}
// function getUpdZcje() {
//     var sum_sl2 = parseFloat(document.getElementById('update-sumShuliang2').value);
//     var zcdj2 = parseFloat(document.getElementById('update-danjia1').value);
//     var sum_je2 = Math.round(sum_sl2 * zcdj2 * 100) / 100
//     document.getElementById("update-sumJine2").value = sum_je2
// }
function getUpdZcje() {
    var sum_sl2 = parseFloat(document.getElementById('update-sumShuliang2').value);
    var zcdj2 = parseFloat(document.getElementById('update-danjia2').value);
    var sum_je2 = Math.round(sum_sl2 * zcdj2 * 100) / 100
    document.getElementById("update-sumJine2").value = sum_je2
}
function getList() {
    var tdElements = document.getElementsByTagName("td");
    for (var i = 0; i < tdElements.length; i++) {
        tdElements[i].style.padding = "15px";
    }
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
            b = res.data.length;
            for (n = 0; n < res.data.length; n++) {
                document.getElementById("wancheng" + n).value = res.data[n].wancheng;
                t = res.data[n].kailiao;
                y = res.data[n].zuzhuang;
                u = res.data[n].shunxu;
                l = res.data[n].baozhuang;
                if (t == null || t == undefined) {
                    document.getElementById("kailiao" + n).value = "请选择";
                } else {
                    document.getElementById("kailiao" + n).value = t;
                }
                if (y == null || y == undefined) {
                    document.getElementById("zuzhuang" + n).value = "请选择";
                } else {
                    document.getElementById("zuzhuang" + n).value = y;
                }
                if (u == null || u == undefined) {
                    document.getElementById("shunxu" + n).value = "请选择";
                } else {
                    document.getElementById("shunxu" + n).value = u;
                }
                if (l == null || l == undefined) {
                    document.getElementById("baozhuang" + n).value = "请选择";
                } else {
                    document.getElementById("baozhuang" + n).value = l;
                }

            }

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

    $ajax({
        type: 'post',
        url: '/user/getPower'
    }, false, '', function (res) {
        if (res.code == 200) {
            var power = res.data;
            power1 = res.data;
            if (power == "客户") {

                document.getElementById("customerName").disabled = true;
                document.getElementById("update-wancheng").disabled = true;
                document.getElementById("add-customerName").remove();
                var div = document.getElementById('d-customerName');
                var textBox = document.createElement('input');
                textBox.id = 'add-customerName';
                textBox.type = 'text';
                textBox.name = 'customerName';
                textBox.class = 'form-control';
                textBox.autocomplete = 'off';
                div.appendChild(textBox);
                document.getElementById("add-customerName").disabled=true
                document.getElementById("update-customerName").disabled=true
                $ajax({
                    type: 'post',
                    url: '/psd/getloginname1',
                }, false, '', function (res) {
                    if (res.code == 200) {
                        var this_name = res.data;

                        document.getElementById("add-customerName").value = this_name;
                        document.getElementById("customerName").value = this_name;
                    }
                })


            }
        }
    })

}

$(function () {

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
    getgzry();
    getList();

    var upd = document.getElementById('update-jiaoliankongFangxiangLeft');
    upd.addEventListener('blur', function () {
        var updxdsl = document.getElementById('update-num').value;
        var updjlkfxl = document.getElementById('update-jiaoliankongFangxiangLeft').value;
        var updjlkfxr = updxdsl - updjlkfxl;
        document.getElementById('update-jiaoliankongFangxiangRight').value = updjlkfxr;
    })

    var upd = document.getElementById('update-lashouShuliangLeft');
    upd.addEventListener('blur', function () {
        var updxdsl = document.getElementById('update-num').value;
        var updlssll = document.getElementById('update-lashouShuliangLeft').value;
        var updlsslr = updxdsl - updlssll;
        document.getElementById('update-lashouShuliangRight').value = updlsslr;
    })

    var upd = document.getElementById('update-jiaolian1SelectLeft');
    upd.addEventListener('blur', function () {
        var updjl1sl = document.getElementById('update-jiaolian1SelectLeft').value;
        document.getElementById('update-jiaolian1SelectRight').value = updjl1sl;
    })

    var upd = document.getElementById('update-jiaolian2SelectLeft');
    upd.addEventListener('blur', function () {
        var updjl2sl = document.getElementById('update-jiaolian2SelectLeft').value;
        document.getElementById('update-jiaolian2SelectRight').value = updjl2sl;
    })

    var upd = document.getElementById('update-jiaolian3SelectLeft');
    upd.addEventListener('blur', function () {
        var updjl3sl = document.getElementById('update-jiaolian3SelectLeft').value;
        document.getElementById('update-jiaolian3SelectRight').value = updjl3sl;
    })

    var upd = document.getElementById('update-jiaolian4SelectLeft');
    upd.addEventListener('blur', function () {
        var updjl4sl = document.getElementById('update-jiaolian4SelectLeft').value;
        document.getElementById('update-jiaolian4SelectRight').value = updjl4sl;
    })

    var upd = document.getElementById('update-jiaolian5SelectLeft');
    upd.addEventListener('blur', function () {
        var updjl5sl = document.getElementById('update-jiaolian5SelectLeft').value;
        document.getElementById('update-jiaolian5SelectRight').value = updjl5sl;
    })

    var upd = document.getElementById('update-jiaolian6SelectLeft');
    upd.addEventListener('blur', function () {
        var updjl6sl = document.getElementById('update-jiaolian6SelectLeft').value;
        document.getElementById('update-jiaolian6SelectRight').value = updjl6sl;
    })

    var updjl1inp = document.getElementById('update-jiaolian1InsertLeft');
    updjl1inp.addEventListener('blur', function () {

        var a = document.getElementById("update-jiaolian1InsertLeft").value;

        document.getElementById("update-jiaolian1InsertRight").value = a;
    })

    var updjl1inp = document.getElementById('update-jiaolian2InsertLeft');
    updjl1inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian2InsertLeft").value;

        document.getElementById("update-jiaolian2InsertRight").value = a;
    })

    var updjl1inp = document.getElementById('update-jiaolian3InsertLeft');
    updjl1inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian3InsertLeft").value;

        document.getElementById("update-jiaolian3InsertRight").value = a;
    })

    var updjl1inp = document.getElementById('update-jiaolian4InsertLeft');
    updjl1inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian4InsertLeft").value;

        document.getElementById("update-jiaolian4InsertRight").value = a;
    })

    var updjl1inp = document.getElementById('update-jiaolian5InsertLeft');
    updjl1inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian5InsertLeft").value;

        document.getElementById("update-jiaolian5InsertRight").value = a;
    })

    var updjl1inp = document.getElementById('update-jiaolian6InsertLeft');
    updjl1inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian6InsertLeft").value;

        document.getElementById("update-jiaolian6InsertRight").value = a;
    })

    var inp1 = document.getElementById('add-jiaoliankongFangxiangLeft');
    inp1.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num').value;
        var jlkfxl = document.getElementById('add-jiaoliankongFangxiangLeft').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('add-jiaoliankongFangxiangRight').value = jlkfxr;
    })

    var inp2 = document.getElementById('add-lashouShuliangLeft');
    inp2.addEventListener('blur', function () {
        var xdsl1 = document.getElementById('add-num').value;
        var lssll = document.getElementById('add-lashouShuliangLeft').value;
        var lsslr = xdsl1 - lssll;
        document.getElementById('add-lashouShuliangRight').value = lsslr;
    })
    // ------------------1
    var inp3 = document.getElementById('add-jiaolian1SelectLeft');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('add-jiaolian1SelectLeft').value;
        document.getElementById('add-jiaolian1SelectRight').value = jl1sl;
    })

    var inp4 = document.getElementById('add-jiaolian2SelectLeft');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('add-jiaolian2SelectLeft').value;
        document.getElementById('add-jiaolian2SelectRight').value = jl2sl;
    })

    var inp5 = document.getElementById('add-jiaolian3SelectLeft');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('add-jiaolian3SelectLeft').value;
        document.getElementById('add-jiaolian3SelectRight').value = jl3sl;
    })

    var inp6 = document.getElementById('add-jiaolian4SelectLeft');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('add-jiaolian4SelectLeft').value;
        document.getElementById('add-jiaolian4SelectRight').value = jl4sl;
    })

    var inp7 = document.getElementById('add-jiaolian5SelectLeft');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('add-jiaolian5SelectLeft').value;
        document.getElementById('add-jiaolian5SelectRight').value = jl5sl;
    })

    var inp8 = document.getElementById('add-jiaolian6SelectLeft');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('add-jiaolian6SelectLeft').value;
        document.getElementById('add-jiaolian6SelectRight').value = jl6sl;
    })

    var jl1inp = document.getElementById('add-jiaolian1SelectLeft');
    jl1inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft').value;
        var height = parseFloat(document.getElementById('add-height').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("add-jiaolian1SelectRight").value = jl1

            document.getElementById("add-jiaolian1InsertLeft").value = jiaolian1Insert;

            document.getElementById("add-jiaolian1InsertRight").value = jiaolian1Insert;

        }
    })

    var jl1inp = document.getElementById('add-jiaolian1InsertLeft');
    jl1inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian1InsertLeft").value;

        document.getElementById("add-jiaolian1InsertRight").value = a;
    })

    var jl1inp = document.getElementById('add-jiaolian2SelectLeft');
    jl1inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft').value;
        var height = parseFloat(document.getElementById('add-height').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("add-jiaolian2SelectRight").value = jl2

            document.getElementById("add-jiaolian2InsertLeft").value = jiaolian2Insert;

            document.getElementById("add-jiaolian2InsertRight").value = jiaolian2Insert;

        }
    })

    var jl1inp = document.getElementById('add-jiaolian2InsertLeft');
    jl1inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian2InsertLeft").value;

        document.getElementById("add-jiaolian2InsertRight").value = a;
    })

    var jl1inp = document.getElementById('add-jiaolian3SelectLeft');
    jl1inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft').value;
        var height = parseFloat(document.getElementById('add-height').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("add-jiaolian3SelectRight").value = jl3

            document.getElementById("add-jiaolian3InsertLeft").value = jiaolian3Insert;

            document.getElementById("add-jiaolian3InsertRight").value = jiaolian3Insert;

        }
    })

    var jl1inp = document.getElementById('add-jiaolian3InsertLeft');
    jl1inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian3InsertLeft").value;

        document.getElementById("add-jiaolian3InsertRight").value = a;
    })

    var jl1inp = document.getElementById('add-jiaolian4SelectLeft');
    jl1inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft').value;
        var height = parseFloat(document.getElementById('add-height').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("add-jiaolian4SelectRight").value = jl4

            document.getElementById("add-jiaolian4InsertLeft").value = jiaolian4Insert;

            document.getElementById("add-jiaolian4InsertRight").value = jiaolian4Insert;

        }
    })

    var jl1inp = document.getElementById('add-jiaolian4InsertLeft');
    jl1inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian4InsertLeft").value;

        document.getElementById("add-jiaolian4InsertRight").value = a;
    })

    var jl5inp = document.getElementById('add-jiaolian5SelectLeft');
    jl5inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft').value;
        var height = parseFloat(document.getElementById('add-height').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("add-jiaolian5SelectRight").value = jl5

            document.getElementById("add-jiaolian5InsertLeft").value = jiaolian5Insert;

            document.getElementById("add-jiaolian5InsertRight").value = jiaolian5Insert;

        }
    })

    var jl5inp = document.getElementById('add-jiaolian5InsertLeft');
    jl5inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian5InsertLeft").value;

        document.getElementById("add-jiaolian5InsertRight").value = a;
    })

    var jl6inp = document.getElementById('add-jiaolian6SelectLeft');
    jl6inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft').value;
        var height = parseFloat(document.getElementById('add-height').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("add-jiaolian6SelectRight").value = jl6

            document.getElementById("add-jiaolian6InsertLeft").value = jiaolian6Insert;

            document.getElementById("add-jiaolian6InsertRight").value = jiaolian6Insert;

        }
    })

    var jl6inp = document.getElementById('add-jiaolian6InsertLeft');
    jl6inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian6InsertLeft").value;

        document.getElementById("add-jiaolian6InsertRight").value = a;
    })

    // ----------2
    var inp11 = document.getElementById('add-jiaoliankongFangxiangLeft1');
    inp11.addEventListener('blur', function () {
        var xdsl1 = document.getElementById('add-num1').value;
        var jlkfxl1 = document.getElementById('add-jiaoliankongFangxiangLeft1').value;
        var jlkfxr1 = xdsl1 - jlkfxl1;
        document.getElementById('add-jiaoliankongFangxiangRight1').value = jlkfxr1;
    })

    var inp22 = document.getElementById('add-lashouShuliangLeft1');
    inp22.addEventListener('blur', function () {
        var xdsl1 = document.getElementById('add-num1').value;
        var lssll1 = document.getElementById('add-lashouShuliangLeft1').value;
        var lsslr1 = xdsl1 - lssll1;
        document.getElementById('add-lashouShuliangRight1').value = lsslr1;
    })

    var inp3 = document.getElementById('add-jiaolian1SelectLeft1');
    inp3.addEventListener('blur', function () {
        var jl1sl1 = document.getElementById('add-jiaolian1SelectLeft1').value;
        document.getElementById('add-jiaolian1SelectRight1').value = jl1sl1;
    })

    var inp4 = document.getElementById('add-jiaolian2SelectLeft1');
    inp4.addEventListener('blur', function () {
        var jl2sl1 = document.getElementById('add-jiaolian2SelectLeft1').value;
        document.getElementById('add-jiaolian2SelectRight1').value = jl2sl1;
    })

    var inp5 = document.getElementById('add-jiaolian3SelectLeft1');
    inp5.addEventListener('blur', function () {
        var jl3sl1 = document.getElementById('add-jiaolian3SelectLeft1').value;
        document.getElementById('add-jiaolian3SelectRight1').value = jl3sl1;
    })

    var inp6 = document.getElementById('add-jiaolian4SelectLeft1');
    inp6.addEventListener('blur', function () {
        var jl4sl1 = document.getElementById('add-jiaolian4SelectLeft1').value;
        document.getElementById('add-jiaolian4SelectRight1').value = jl4sl1;
    })

    var inp7 = document.getElementById('add-jiaolian5SelectLeft1');
    inp7.addEventListener('blur', function () {
        var jl5sl1 = document.getElementById('add-jiaolian5SelectLeft1').value;
        document.getElementById('add-jiaolian5SelectRight1').value = jl5sl1;
    })

    var inp8 = document.getElementById('add-jiaolian6SelectLeft1');
    inp8.addEventListener('blur', function () {
        var jl6sl1 = document.getElementById('add-jiaolian6SelectLeft1').value;
        document.getElementById('add-jiaolian6SelectRight1').value = jl6sl1;
    })

    var jl1inp = document.getElementById('add-jiaolian1SelectLeft1');
    jl1inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft1').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft1').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft1').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft1').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft1').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft1').value;
        var height = parseFloat(document.getElementById('add-height1').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("add-jiaolian1SelectRight1").value = jl1

            document.getElementById("add-jiaolian1InsertLeft1").value = jiaolian1Insert;

            document.getElementById("add-jiaolian1InsertRight1").value = jiaolian1Insert;

        }
    })

    var jl1inp = document.getElementById('add-jiaolian1InsertLeft1');
    jl1inp.addEventListener('blur', function () {

        var a = document.getElementById("add-jiaolian1InsertLeft1").value;

        document.getElementById("add-jiaolian1InsertRight1").value = a;
    })

    var jl1inp = document.getElementById('add-jiaolian2SelectLeft1');
    jl1inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft1').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft1').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft1').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft1').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft1').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft1').value;
        var height = parseFloat(document.getElementById('add-height1').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("add-jiaolian2SelectRight1").value = jl2

            document.getElementById("add-jiaolian2InsertLeft1").value = jiaolian2Insert;

            document.getElementById("add-jiaolian2InsertRight1").value = jiaolian2Insert;

        }
    })

    var jl1inp = document.getElementById('add-jiaolian2InsertLeft1');
    jl1inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian2InsertLeft1").value;

        document.getElementById("add-jiaolian2InsertRight1").value = a;
    })

    var jl2inp = document.getElementById('add-jiaolian3SelectLeft1');
    jl2inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft1').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft1').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft1').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft1').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft1').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft1').value;
        var height = parseFloat(document.getElementById('add-height1').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("add-jiaolian3SelectRight1").value = jl3

            document.getElementById("add-jiaolian3InsertLeft1").value = jiaolian3Insert;

            document.getElementById("add-jiaolian3InsertRight1").value = jiaolian3Insert;

        }
    })

    var jl2inp = document.getElementById('add-jiaolian3InsertLeft1');
    jl2inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian3InsertLeft1").value;

        document.getElementById("add-jiaolian3InsertRight1").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian4SelectLeft1');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft1').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft1').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft1').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft1').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft1').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft1').value;
        var height = parseFloat(document.getElementById('add-height1').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("add-jiaolian4SelectRight1").value = jl4

            document.getElementById("add-jiaolian4InsertLeft1").value = jiaolian4Insert;

            document.getElementById("add-jiaolian4InsertRight1").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian4InsertLeft1');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian4InsertLeft1").value;

        document.getElementById("add-jiaolian4InsertRight1").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian5SelectLeft1');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft1').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft1').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft1').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft1').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft1').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft1').value;
        var height = parseFloat(document.getElementById('add-height1').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("add-jiaolian5SelectRight1").value = jl5

            document.getElementById("add-jiaolian5InsertLeft1").value = jiaolian5Insert;

            document.getElementById("add-jiaolian5InsertRight1").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian5InsertLeft1');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian5InsertLeft1").value;

        document.getElementById("add-jiaolian5InsertRight1").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian6SelectLeft1');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft1').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft1').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft1').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft1').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft1').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft1').value;
        var height = parseFloat(document.getElementById('add-height1').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("add-jiaolian6SelectRight1").value = jl6

            document.getElementById("add-jiaolian6InsertLeft1").value = jiaolian6Insert;

            document.getElementById("add-jiaolian6InsertRight1").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian6InsertLeft1');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian6InsertLeft1").value;

        document.getElementById("add-jiaolian6InsertRight1").value = a;
    })

    // --------------------3
    var inp12 = document.getElementById('add-jiaoliankongFangxiangLeft2');
    inp12.addEventListener('blur', function () {
        var xdsl2 = document.getElementById('add-num2').value;
        var jlkfxl2 = document.getElementById('add-jiaoliankongFangxiangLeft2').value;
        var jlkfxr2 = xdsl2 - jlkfxl2;
        document.getElementById('add-jiaoliankongFangxiangRight2').value = jlkfxr2;
    })

    var inp2 = document.getElementById('add-lashouShuliangLeft2');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num2').value;
        var lssll = document.getElementById('add-lashouShuliangLeft2').value;
        var lsslr = xdsl - lssll;
        document.getElementById('add-lashouShuliangRight2').value = lsslr;
    })

    var inp3 = document.getElementById('add-jiaolian1SelectLeft2');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('add-jiaolian1SelectLeft2').value;
        document.getElementById('add-jiaolian1SelectRight2').value = jl1sl;
    })

    var inp4 = document.getElementById('add-jiaolian2SelectLeft2');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('add-jiaolian2SelectLeft2').value;
        document.getElementById('add-jiaolian2SelectRight2').value = jl2sl;
    })

    var inp5 = document.getElementById('add-jiaolian3SelectLeft2');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('add-jiaolian3SelectLeft2').value;
        document.getElementById('add-jiaolian3SelectRight2').value = jl3sl;
    })

    var inp6 = document.getElementById('add-jiaolian4SelectLeft2');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('add-jiaolian4SelectLeft2').value;
        document.getElementById('add-jiaolian4SelectRight2').value = jl4sl;
    })

    var inp7 = document.getElementById('add-jiaolian5SelectLeft2');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('add-jiaolian5SelectLeft2').value;
        document.getElementById('add-jiaolian5SelectRight2').value = jl5sl;
    })

    var inp8 = document.getElementById('add-jiaolian6SelectLeft2');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('add-jiaolian6SelectLeft2').value;
        document.getElementById('add-jiaolian6SelectRight2').value = jl6sl;
    })

    var jl3inp = document.getElementById('add-jiaolian1SelectLeft2');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft2').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft2').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft2').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft2').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft2').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft2').value;
        var height = parseFloat(document.getElementById('add-height2').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("add-jiaolian1SelectRight2").value = jl1

            document.getElementById("add-jiaolian1InsertLeft2").value = jiaolian1Insert;

            document.getElementById("add-jiaolian1InsertRight2").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian1InsertLeft2');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian1InsertLeft2").value;

        document.getElementById("add-jiaolian1InsertRight2").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian2SelectLeft2');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft2').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft2').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft2').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft2').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft2').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft2').value;
        var height = parseFloat(document.getElementById('add-height2').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("add-jiaolian2SelectRight2").value = jl2

            document.getElementById("add-jiaolian2InsertLeft2").value = jiaolian2Insert;

            document.getElementById("add-jiaolian2InsertRight2").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian2InsertLeft2');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian2InsertLeft2").value;

        document.getElementById("add-jiaolian2InsertRight2").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian3SelectLeft2');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft2').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft2').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft2').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft2').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft2').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft2').value;
        var height = parseFloat(document.getElementById('add-height2').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("add-jiaolian3SelectRight2").value = jl3

            document.getElementById("add-jiaolian3InsertLeft2").value = jiaolian3Insert;

            document.getElementById("add-jiaolian3InsertRight2").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian3InsertLeft2');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian3InsertLeft2").value;

        document.getElementById("add-jiaolian3InsertRight2").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian4SelectLeft2');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft2').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft2').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft2').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft2').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft2').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft2').value;
        var height = parseFloat(document.getElementById('add-height2').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("add-jiaolian4SelectRight2").value = jl4

            document.getElementById("add-jiaolian4InsertLeft2").value = jiaolian4Insert;

            document.getElementById("add-jiaolian4InsertRight2").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian4InsertLeft2');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian4InsertLeft2").value;

        document.getElementById("add-jiaolian4InsertRight2").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian5SelectLeft2');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft2').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft2').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft2').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft2').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft2').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft2').value;
        var height = parseFloat(document.getElementById('add-height2').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("add-jiaolian5SelectRight2").value = jl5

            document.getElementById("add-jiaolian5InsertLeft2").value = jiaolian5Insert;

            document.getElementById("add-jiaolian5InsertRight2").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian5InsertLeft2');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian5InsertLeft2").value;

        document.getElementById("add-jiaolian5InsertRight2").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian6SelectLeft2');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft2').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft2').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft2').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft2').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft2').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft2').value;
        var height = parseFloat(document.getElementById('add-height2').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("add-jiaolian6SelectRight2").value = jl6

            document.getElementById("add-jiaolian6InsertLeft2").value = jiaolian6Insert;

            document.getElementById("add-jiaolian6InsertRight2").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian6InsertLeft2');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian6InsertLeft2").value;

        document.getElementById("add-jiaolian6InsertRight2").value = a;
    })

    // -------4
    var inp2 = document.getElementById('add-jiaoliankongFangxiangLeft3');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num3').value;
        var jlkfxl = document.getElementById('add-jiaoliankongFangxiangLeft3').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('add-jiaoliankongFangxiangRight3').value = jlkfxr;
    })

    var inp2 = document.getElementById('add-lashouShuliangLeft3');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num3').value;
        var lssll = document.getElementById('add-lashouShuliangLeft3').value;
        var lsslr = xdsl - lssll;
        document.getElementById('add-lashouShuliangRight3').value = lsslr;
    })

    var inp3 = document.getElementById('add-jiaolian1SelectLeft3');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('add-jiaolian1SelectLeft3').value;
        document.getElementById('add-jiaolian1SelectRight3').value = jl1sl;
    })

    var inp4 = document.getElementById('add-jiaolian2SelectLeft3');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('add-jiaolian2SelectLeft3').value;
        document.getElementById('add-jiaolian2SelectRight3').value = jl2sl;
    })

    var inp5 = document.getElementById('add-jiaolian3SelectLeft3');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('add-jiaolian3SelectLeft3').value;
        document.getElementById('add-jiaolian3SelectRight3').value = jl3sl;
    })

    var inp6 = document.getElementById('add-jiaolian4SelectLeft3');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('add-jiaolian4SelectLeft3').value;
        document.getElementById('add-jiaolian4SelectRight3').value = jl4sl;
    })

    var inp7 = document.getElementById('add-jiaolian5SelectLeft3');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('add-jiaolian5SelectLeft3').value;
        document.getElementById('add-jiaolian5SelectRight3').value = jl5sl;
    })

    var inp8 = document.getElementById('add-jiaolian6SelectLeft3');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('add-jiaolian6SelectLeft3').value;
        document.getElementById('add-jiaolian6SelectRight3').value = jl6sl;
    })

    var jl3inp = document.getElementById('add-jiaolian1SelectLeft3');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft3').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft3').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft3').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft3').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft3').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft3').value;
        var height = parseFloat(document.getElementById('add-height3').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("add-jiaolian1SelectRight3").value = jl1
            document.getElementById("add-jiaolian1SelectRight3").value = jl1

            document.getElementById("add-jiaolian1InsertLeft3").value = jiaolian1Insert;

            document.getElementById("add-jiaolian1InsertRight3").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian1InsertLeft3');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian1InsertLeft3").value;

        document.getElementById("add-jiaolian1InsertRight3").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian2SelectLeft3');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft3').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft3').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft3').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft3').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft3').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft3').value;
        var height = parseFloat(document.getElementById('add-height3').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("add-jiaolian2SelectRight3").value = jl2

            document.getElementById("add-jiaolian2InsertLeft3").value = jiaolian2Insert;

            document.getElementById("add-jiaolian2InsertRight3").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian2InsertLeft3');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian2InsertLeft3").value;

        document.getElementById("add-jiaolian2InsertRight3").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian3SelectLeft3');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft3').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft3').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft3').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft3').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft3').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft3').value;
        var height = parseFloat(document.getElementById('add-height3').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("add-jiaolian3SelectRight3").value = jl3

            document.getElementById("add-jiaolian3InsertLeft3").value = jiaolian3Insert;

            document.getElementById("add-jiaolian3InsertRight3").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian3InsertLeft3');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian3InsertLeft3").value;

        document.getElementById("add-jiaolian3InsertRight3").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian4SelectLeft3');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft3').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft3').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft3').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft3').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft3').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft3').value;
        var height = parseFloat(document.getElementById('add-height3').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("add-jiaolian4SelectRight3").value = jl4

            document.getElementById("add-jiaolian4InsertLeft3").value = jiaolian4Insert;

            document.getElementById("add-jiaolian4InsertRight3").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian4InsertLeft3');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian4InsertLeft3").value;

        document.getElementById("add-jiaolian4InsertRight3").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian5SelectLeft3');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft3').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft3').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft3').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft3').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft3').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft3').value;
        var height = parseFloat(document.getElementById('add-height3').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("add-jiaolian5SelectRight3").value = jl5

            document.getElementById("add-jiaolian5InsertLeft3").value = jiaolian5Insert;

            document.getElementById("add-jiaolian5InsertRight3").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian5InsertLeft3');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian5InsertLeft3").value;

        document.getElementById("add-jiaolian5InsertRight3").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian6SelectLeft3');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft3').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft3').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft3').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft3').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft3').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft3').value;
        var height = parseFloat(document.getElementById('add-height3').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("add-jiaolian6SelectRight3").value = jl6

            document.getElementById("add-jiaolian6InsertLeft3").value = jiaolian6Insert;

            document.getElementById("add-jiaolian6InsertRight3").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian6InsertLeft3');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian6InsertLeft3").value;

        document.getElementById("add-jiaolian6InsertRight3").value = a;
    })

    // ----------------5
    var inp2 = document.getElementById('add-jiaoliankongFangxiangLeft4');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num4').value;
        var jlkfxl = document.getElementById('add-jiaoliankongFangxiangLeft4').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('add-jiaoliankongFangxiangRight4').value = jlkfxr;
    })

    var inp2 = document.getElementById('add-lashouShuliangLeft4');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num4').value;
        var lssll = document.getElementById('add-lashouShuliangLeft4').value;
        var lsslr = xdsl - lssll;
        document.getElementById('add-lashouShuliangRight4').value = lsslr;
    })

    var inp3 = document.getElementById('add-jiaolian1SelectLeft4');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('add-jiaolian1SelectLeft4').value;
        document.getElementById('add-jiaolian1SelectRight4').value = jl1sl;
    })

    var inp4 = document.getElementById('add-jiaolian2SelectLeft4');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('add-jiaolian2SelectLeft4').value;
        document.getElementById('add-jiaolian2SelectRight4').value = jl2sl;
    })

    var inp5 = document.getElementById('add-jiaolian3SelectLeft4');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('add-jiaolian3SelectLeft4').value;
        document.getElementById('add-jiaolian3SelectRight4').value = jl3sl;
    })

    var inp6 = document.getElementById('add-jiaolian4SelectLeft4');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('add-jiaolian4SelectLeft4').value;
        document.getElementById('add-jiaolian4SelectRight4').value = jl4sl;
    })

    var inp7 = document.getElementById('add-jiaolian5SelectLeft4');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('add-jiaolian5SelectLeft4').value;
        document.getElementById('add-jiaolian5SelectRight4').value = jl5sl;
    })

    var inp8 = document.getElementById('add-jiaolian6SelectLeft4');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('add-jiaolian6SelectLeft4').value;
        document.getElementById('add-jiaolian6SelectRight4').value = jl6sl;
    })

    var jl3inp = document.getElementById('add-jiaolian1SelectLeft4');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft4').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft4').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft4').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft4').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft4').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft4').value;
        var height = parseFloat(document.getElementById('add-height4').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("add-jiaolian1SelectRight4").value = jl1

            document.getElementById("add-jiaolian1InsertLeft4").value = jiaolian1Insert;

            document.getElementById("add-jiaolian1InsertRight4").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian1InsertLeft4');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian1InsertLeft4").value;

        document.getElementById("add-jiaolian1InsertRight4").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian2SelectLeft4');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft4').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft4').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft4').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft4').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft4').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft4').value;
        var height = parseFloat(document.getElementById('add-height4').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("add-jiaolian2SelectRight4").value = jl2

            document.getElementById("add-jiaolian2InsertLeft4").value = jiaolian2Insert;

            document.getElementById("add-jiaolian2InsertRight4").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian2InsertLeft4');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian2InsertLeft4").value;

        document.getElementById("add-jiaolian2InsertRight4").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian3SelectLeft4');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft4').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft4').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft4').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft4').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft4').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft4').value;
        var height = parseFloat(document.getElementById('add-height4').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("add-jiaolian3SelectRight4").value = jl3

            document.getElementById("add-jiaolian3InsertLeft4").value = jiaolian3Insert;

            document.getElementById("add-jiaolian3InsertRight4").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian3InsertLeft4');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian3InsertLeft4").value;

        document.getElementById("add-jiaolian3InsertRight4").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian4SelectLeft4');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft4').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft4').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft4').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft4').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft4').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft4').value;
        var height = parseFloat(document.getElementById('add-height4').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("add-jiaolian4SelectRight4").value = jl4

            document.getElementById("add-jiaolian4InsertLeft4").value = jiaolian4Insert;

            document.getElementById("add-jiaolian4InsertRight4").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian4InsertLeft4');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian4InsertLeft4").value;

        document.getElementById("add-jiaolian4InsertRight4").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian5SelectLeft4');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft4').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft4').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft4').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft4').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft4').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft4').value;
        var height = parseFloat(document.getElementById('add-height4').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("add-jiaolian5SelectRight4").value = jl5

            document.getElementById("add-jiaolian5InsertLeft4").value = jiaolian5Insert;

            document.getElementById("add-jiaolian5InsertRight4").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian5InsertLeft4');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian5InsertLeft4").value;

        document.getElementById("add-jiaolian5InsertRight4").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian6SelectLeft4');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft4').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft4').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft4').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft4').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft4').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft4').value;
        var height = parseFloat(document.getElementById('add-height4').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("add-jiaolian6SelectRight4").value = jl6

            document.getElementById("add-jiaolian6InsertLeft4").value = jiaolian6Insert;

            document.getElementById("add-jiaolian6InsertRight4").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian6InsertLeft4');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian6InsertLeft4").value;

        document.getElementById("add-jiaolian6InsertRight4").value = a;
    })

    // -----------6
    var inp2 = document.getElementById('add-jiaoliankongFangxiangLeft5');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num5').value;
        var jlkfxl = document.getElementById('add-jiaoliankongFangxiangLeft5').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('add-jiaoliankongFangxiangRight5').value = jlkfxr;
    })

    var inp2 = document.getElementById('add-lashouShuliangLeft5');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num5').value;
        var lssll = document.getElementById('add-lashouShuliangLeft5').value;
        var lsslr = xdsl - lssll;
        document.getElementById('add-lashouShuliangRight5').value = lsslr;
    })

    var inp3 = document.getElementById('add-jiaolian1SelectLeft5');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('add-jiaolian1SelectLeft5').value;
        document.getElementById('add-jiaolian1SelectRight5').value = jl1sl;
    })

    var inp4 = document.getElementById('add-jiaolian2SelectLeft5');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('add-jiaolian2SelectLeft5').value;
        document.getElementById('add-jiaolian2SelectRight5').value = jl2sl;
    })

    var inp5 = document.getElementById('add-jiaolian3SelectLeft5');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('add-jiaolian3SelectLeft5').value;
        document.getElementById('add-jiaolian3SelectRight5').value = jl3sl;
    })

    var inp6 = document.getElementById('add-jiaolian4SelectLeft5');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('add-jiaolian4SelectLeft5').value;
        document.getElementById('add-jiaolian4SelectRight5').value = jl4sl;
    })

    var inp7 = document.getElementById('add-jiaolian5SelectLeft5');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('add-jiaolian5SelectLeft5').value;
        document.getElementById('add-jiaolian5SelectRight5').value = jl5sl;
    })

    var inp8 = document.getElementById('add-jiaolian6SelectLeft5');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('add-jiaolian6SelectLeft5').value;
        document.getElementById('add-jiaolian6SelectRight5').value = jl6sl;
    })

    var jl3inp = document.getElementById('add-jiaolian1SelectLeft5');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft5').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft5').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft5').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft5').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft5').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft5').value;
        var height = parseFloat(document.getElementById('add-height5').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("add-jiaolian1SelectRight5").value = jl1

            document.getElementById("add-jiaolian1InsertLeft5").value = jiaolian1Insert;

            document.getElementById("add-jiaolian1InsertRight5").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian1InsertLeft5');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian1InsertLeft5").value;

        document.getElementById("add-jiaolian1InsertRight5").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian2SelectLeft5');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft5').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft5').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft5').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft5').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft5').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft5').value;
        var height = parseFloat(document.getElementById('add-height5').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("add-jiaolian2SelectRight5").value = jl2

            document.getElementById("add-jiaolian2InsertLeft5").value = jiaolian2Insert;

            document.getElementById("add-jiaolian2InsertRight5").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian2InsertLeft5');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian2InsertLeft5").value;

        document.getElementById("add-jiaolian2InsertRight5").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian3SelectLeft5');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft5').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft5').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft5').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft5').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft5').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft5').value;
        var height = parseFloat(document.getElementById('add-height5').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("add-jiaolian3SelectRight5").value = jl3

            document.getElementById("add-jiaolian3InsertLeft5").value = jiaolian3Insert;

            document.getElementById("add-jiaolian3InsertRight5").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian3InsertLeft5');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian3InsertLeft5").value;

        document.getElementById("add-jiaolian3InsertRight5").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian4SelectLeft5');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft5').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft5').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft5').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft5').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft5').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft5').value;
        var height = parseFloat(document.getElementById('add-height5').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("add-jiaolian4SelectRight5").value = jl4

            document.getElementById("add-jiaolian4InsertLeft5").value = jiaolian4Insert;

            document.getElementById("add-jiaolian4InsertRight5").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian4InsertLeft5');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian4InsertLeft5").value;

        document.getElementById("add-jiaolian4InsertRight5").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian5SelectLeft5');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft5').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft5').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft5').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft5').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft5').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft5').value;
        var height = parseFloat(document.getElementById('add-height5').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("add-jiaolian5SelectRight5").value = jl5

            document.getElementById("add-jiaolian5InsertLeft5").value = jiaolian5Insert;

            document.getElementById("add-jiaolian5InsertRight5").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian5InsertLeft5');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian5InsertLeft5").value;

        document.getElementById("add-jiaolian5InsertRight5").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian6SelectLeft5');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft5').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft5').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft5').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft5').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft5').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft5').value;
        var height = parseFloat(document.getElementById('add-height5').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("add-jiaolian6SelectRight5").value = jl6

            document.getElementById("add-jiaolian6InsertLeft5").value = jiaolian6Insert;

            document.getElementById("add-jiaolian6InsertRight5").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian6InsertLeft5');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian6InsertLeft5").value;

        document.getElementById("add-jiaolian6InsertRight5").value = a;
    })

    // -------7
    var inp2 = document.getElementById('add-jiaoliankongFangxiangLeft6');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num6').value;
        var jlkfxl = document.getElementById('add-jiaoliankongFangxiangLeft6').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('add-jiaoliankongFangxiangRight6').value = jlkfxr;
    })

    var inp2 = document.getElementById('add-lashouShuliangLeft6');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num6').value;
        var lssll = document.getElementById('add-lashouShuliangLeft6').value;
        var lsslr = xdsl - lssll;
        document.getElementById('add-lashouShuliangRight6').value = lsslr;
    })

    var inp3 = document.getElementById('add-jiaolian1SelectLeft6');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('add-jiaolian1SelectLeft6').value;
        document.getElementById('add-jiaolian1SelectRight6').value = jl1sl;
    })

    var inp4 = document.getElementById('add-jiaolian2SelectLeft6');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('add-jiaolian2SelectLeft6').value;
        document.getElementById('add-jiaolian2SelectRight6').value = jl2sl;
    })

    var inp5 = document.getElementById('add-jiaolian3SelectLeft6');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('add-jiaolian3SelectLeft6').value;
        document.getElementById('add-jiaolian3SelectRight6').value = jl3sl;
    })

    var inp6 = document.getElementById('add-jiaolian4SelectLeft6');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('add-jiaolian4SelectLeft6').value;
        document.getElementById('add-jiaolian4SelectRight6').value = jl4sl;
    })

    var inp7 = document.getElementById('add-jiaolian5SelectLeft6');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('add-jiaolian5SelectLeft6').value;
        document.getElementById('add-jiaolian5SelectRight6').value = jl5sl;
    })

    var inp8 = document.getElementById('add-jiaolian6SelectLeft6');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('add-jiaolian6SelectLeft6').value;
        document.getElementById('add-jiaolian6SelectRight6').value = jl6sl;
    })

    var jl3inp = document.getElementById('add-jiaolian1SelectLeft6');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft6').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft6').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft6').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft6').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft6').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft6').value;
        var height = parseFloat(document.getElementById('add-height6').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("add-jiaolian1SelectRight6").value = jl1

            document.getElementById("add-jiaolian1InsertLeft6").value = jiaolian1Insert;

            document.getElementById("add-jiaolian1InsertRight6").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian1InsertLeft6');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian1InsertLeft6").value;

        document.getElementById("add-jiaolian1InsertRight6").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian2SelectLeft6');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft6').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft6').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft6').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft6').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft6').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft6').value;
        var height = parseFloat(document.getElementById('add-height6').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("add-jiaolian2SelectRight6").value = jl2

            document.getElementById("add-jiaolian2InsertLeft6").value = jiaolian2Insert;

            document.getElementById("add-jiaolian2InsertRight6").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian2InsertLeft6');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian2InsertLeft6").value;

        document.getElementById("add-jiaolian2InsertRight6").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian3SelectLeft6');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft6').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft6').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft6').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft6').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft6').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft6').value;
        var height = parseFloat(document.getElementById('add-height6').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("add-jiaolian3SelectRight6").value = jl3

            document.getElementById("add-jiaolian3InsertLeft6").value = jiaolian3Insert;

            document.getElementById("add-jiaolian3InsertRight6").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian3InsertLeft6');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian3InsertLeft6").value;

        document.getElementById("add-jiaolian3InsertRight6").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian4SelectLeft6');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft6').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft6').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft6').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft6').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft6').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft6').value;
        var height = parseFloat(document.getElementById('add-height6').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("add-jiaolian4SelectRight6").value = jl4

            document.getElementById("add-jiaolian4InsertLeft6").value = jiaolian4Insert;

            document.getElementById("add-jiaolian4InsertRight6").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian4InsertLeft6');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian4InsertLeft6").value;

        document.getElementById("add-jiaolian4InsertRight6").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian5SelectLeft6');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft6').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft6').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft6').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft6').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft6').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft6').value;
        var height = parseFloat(document.getElementById('add-height6').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("add-jiaolian5SelectRight6").value = jl5

            document.getElementById("add-jiaolian5InsertLeft6").value = jiaolian5Insert;

            document.getElementById("add-jiaolian5InsertRight6").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian5InsertLeft6');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian5InsertLeft6").value;

        document.getElementById("add-jiaolian5InsertRight6").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian6SelectLeft6');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft6').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft6').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft6').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft6').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft6').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft6').value;
        var height = parseFloat(document.getElementById('add-height6').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("add-jiaolian6SelectRight6").value = jl6

            document.getElementById("add-jiaolian6InsertLeft6").value = jiaolian6Insert;

            document.getElementById("add-jiaolian6InsertRight6").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian6InsertLeft6');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian6InsertLeft6").value;

        document.getElementById("add-jiaolian6InsertRight6").value = a;
    })

    // ------8
    var inp2 = document.getElementById('add-jiaoliankongFangxiangLeft7');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num7').value;
        var jlkfxl = document.getElementById('add-jiaoliankongFangxiangLeft7').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('add-jiaoliankongFangxiangRight7').value = jlkfxr;
    })

    var inp2 = document.getElementById('add-lashouShuliangLeft7');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num7').value;
        var lssll = document.getElementById('add-lashouShuliangLeft7').value;
        var lsslr = xdsl - lssll;
        document.getElementById('add-lashouShuliangRight7').value = lsslr;
    })

    var inp3 = document.getElementById('add-jiaolian1SelectLeft7');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('add-jiaolian1SelectLeft7').value;
        document.getElementById('add-jiaolian1SelectRight7').value = jl1sl;
    })

    var inp4 = document.getElementById('add-jiaolian2SelectLeft7');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('add-jiaolian2SelectLeft7').value;
        document.getElementById('add-jiaolian2SelectRight7').value = jl2sl;
    })

    var inp5 = document.getElementById('add-jiaolian3SelectLeft6');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('add-jiaolian3SelectLeft6').value;
        document.getElementById('add-jiaolian3SelectRight6').value = jl3sl;
    })

    var inp6 = document.getElementById('add-jiaolian4SelectLeft7');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('add-jiaolian4SelectLeft7').value;
        document.getElementById('add-jiaolian4SelectRight7').value = jl4sl;
    })

    var inp7 = document.getElementById('add-jiaolian5SelectLeft7');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('add-jiaolian5SelectLeft7').value;
        document.getElementById('add-jiaolian5SelectRight7').value = jl5sl;
    })

    var inp8 = document.getElementById('add-jiaolian6SelectLeft7');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('add-jiaolian6SelectLeft7').value;
        document.getElementById('add-jiaolian6SelectRight7').value = jl6sl;
    })

    var jl3inp = document.getElementById('add-jiaolian1SelectLeft7');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft7').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft7').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft7').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft7').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft7').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft7').value;
        var height = parseFloat(document.getElementById('add-height7').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("add-jiaolian1SelectRight7").value = jl1

            document.getElementById("add-jiaolian1InsertLeft7").value = jiaolian1Insert;

            document.getElementById("add-jiaolian1InsertRight7").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian1InsertLeft7');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian1InsertLeft7").value;

        document.getElementById("add-jiaolian1InsertRight7").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian2SelectLeft7');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft7').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft7').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft7').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft7').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft7').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft7').value;
        var height = parseFloat(document.getElementById('add-height7').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("add-jiaolian2SelectRight7").value = jl2

            document.getElementById("add-jiaolian2InsertLeft7").value = jiaolian2Insert;

            document.getElementById("add-jiaolian2InsertRight7").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian2InsertLeft7');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian2InsertLeft7").value;

        document.getElementById("add-jiaolian2InsertRight7").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian3SelectLeft7');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft7').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft7').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft7').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft7').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft7').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft7').value;
        var height = parseFloat(document.getElementById('add-height7').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("add-jiaolian3SelectRight7").value = jl3

            document.getElementById("add-jiaolian3InsertLeft7").value = jiaolian3Insert;

            document.getElementById("add-jiaolian3InsertRight7").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian3InsertLeft7');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian3InsertLeft7").value;

        document.getElementById("add-jiaolian3InsertRight7").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian4SelectLeft7');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft7').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft7').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft7').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft7').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft7').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft7').value;
        var height = parseFloat(document.getElementById('add-height7').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("add-jiaolian4SelectRight7").value = jl4

            document.getElementById("add-jiaolian4InsertLeft7").value = jiaolian4Insert;

            document.getElementById("add-jiaolian4InsertRight7").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian4InsertLeft7');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian4InsertLeft7").value;

        document.getElementById("add-jiaolian4InsertRight7").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian5SelectLeft7');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft7').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft7').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft7').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft7').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft7').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft7').value;
        var height = parseFloat(document.getElementById('add-height7').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("add-jiaolian5SelectRight7").value = jl5

            document.getElementById("add-jiaolian5InsertLeft7").value = jiaolian5Insert;

            document.getElementById("add-jiaolian5InsertRight7").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian5InsertLeft7');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian5InsertLeft7").value;

        document.getElementById("add-jiaolian5InsertRight7").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian6SelectLeft7');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft7').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft7').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft7').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft7').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft7').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft7').value;
        var height = parseFloat(document.getElementById('add-height7').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("add-jiaolian6SelectRight7").value = jl6

            document.getElementById("add-jiaolian6InsertLeft7").value = jiaolian6Insert;

            document.getElementById("add-jiaolian6InsertRight7").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian6InsertLeft7');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian6InsertLeft7").value;

        document.getElementById("add-jiaolian6InsertRight7").value = a;
    })

    // ------9
    var inp2 = document.getElementById('add-jiaoliankongFangxiangLeft8');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num8').value;
        var jlkfxl = document.getElementById('add-jiaoliankongFangxiangLeft8').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('add-jiaoliankongFangxiangRight8').value = jlkfxr;
    })

    var inp2 = document.getElementById('add-lashouShuliangLeft8');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num8').value;
        var lssll = document.getElementById('add-lashouShuliangLeft8').value;
        var lsslr = xdsl - lssll;
        document.getElementById('add-lashouShuliangRight8').value = lsslr;
    })

    var inp3 = document.getElementById('add-jiaolian1SelectLeft8');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('add-jiaolian1SelectLeft8').value;
        document.getElementById('add-jiaolian1SelectRight8').value = jl1sl;
    })

    var inp4 = document.getElementById('add-jiaolian2SelectLeft8');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('add-jiaolian2SelectLeft8').value;
        document.getElementById('add-jiaolian2SelectRight8').value = jl2sl;
    })

    var inp5 = document.getElementById('add-jiaolian3SelectLeft8');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('add-jiaolian3SelectLeft8').value;
        document.getElementById('add-jiaolian3SelectRight8').value = jl3sl;
    })

    var inp6 = document.getElementById('add-jiaolian4SelectLeft8');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('add-jiaolian4SelectLeft8').value;
        document.getElementById('add-jiaolian4SelectRight8').value = jl4sl;
    })

    var inp7 = document.getElementById('add-jiaolian5SelectLeft8');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('add-jiaolian5SelectLeft8').value;
        document.getElementById('add-jiaolian5SelectRight8').value = jl5sl;
    })

    var inp8 = document.getElementById('add-jiaolian6SelectLeft8');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('add-jiaolian6SelectLeft8').value;
        document.getElementById('add-jiaolian6SelectRight8').value = jl6sl;
    })

    var jl3inp = document.getElementById('add-jiaolian1SelectLeft8');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft8').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft8').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft8').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft8').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft8').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft8').value;
        var height = parseFloat(document.getElementById('add-height8').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("add-jiaolian1SelectRight8").value = jl1

            document.getElementById("add-jiaolian1InsertLeft8").value = jiaolian1Insert;

            document.getElementById("add-jiaolian1InsertRight8").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian1InsertLeft8');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian1InsertLeft8").value;

        document.getElementById("add-jiaolian1InsertRight8").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian2SelectLeft8');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft8').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft8').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft8').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft8').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft8').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft8').value;
        var height = parseFloat(document.getElementById('add-height8').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("add-jiaolian2SelectRight8").value = jl2

            document.getElementById("add-jiaolian2InsertLeft8").value = jiaolian2Insert;

            document.getElementById("add-jiaolian2InsertRight8").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian2InsertLeft8');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian2InsertLeft8").value;

        document.getElementById("add-jiaolian2InsertRight8").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian3SelectLeft8');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft8').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft8').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft8').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft8').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft8').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft8').value;
        var height = parseFloat(document.getElementById('add-height8').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("add-jiaolian3SelectRight8").value = jl3

            document.getElementById("add-jiaolian3InsertLeft8").value = jiaolian3Insert;

            document.getElementById("add-jiaolian3InsertRight8").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian3InsertLeft8');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian3InsertLeft8").value;

        document.getElementById("add-jiaolian3InsertRight8").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian4SelectLeft8');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft8').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft8').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft8').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft8').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft8').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft8').value;
        var height = parseFloat(document.getElementById('add-height8').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("add-jiaolian4SelectRight8").value = jl4

            document.getElementById("add-jiaolian4InsertLeft8").value = jiaolian4Insert;

            document.getElementById("add-jiaolian4InsertRight8").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian4InsertLeft8');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian4InsertLeft8").value;

        document.getElementById("add-jiaolian4InsertRight8").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian5SelectLeft8');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft8').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft8').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft8').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft8').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft8').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft8').value;
        var height = parseFloat(document.getElementById('add-height8').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("add-jiaolian5SelectRight8").value = jl5

            document.getElementById("add-jiaolian5InsertLeft8").value = jiaolian5Insert;

            document.getElementById("add-jiaolian5InsertRight8").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian5InsertLeft8');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian5InsertLeft8").value;

        document.getElementById("add-jiaolian5InsertRight8").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian6SelectLeft8');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft8').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft8').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft8').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft8').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft8').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft8').value;
        var height = parseFloat(document.getElementById('add-height8').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("add-jiaolian6SelectRight8").value = jl6

            document.getElementById("add-jiaolian6InsertLeft8").value = jiaolian6Insert;

            document.getElementById("add-jiaolian6InsertRight8").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian6InsertLeft8');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian6InsertLeft8").value;

        document.getElementById("add-jiaolian6InsertRight8").value = jiaolian6Insert;
    })

    // ----------10
    var inp2 = document.getElementById('add-jiaoliankongFangxiangLeft9');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num9').value;
        var jlkfxl = document.getElementById('add-jiaoliankongFangxiangLeft9').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('add-jiaoliankongFangxiangRight9').value = jlkfxr;
    })

    var inp2 = document.getElementById('add-lashouShuliangLeft9');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num9').value;
        var lssll = document.getElementById('add-lashouShuliangLeft9').value;
        var lsslr = xdsl - lssll;
        document.getElementById('add-lashouShuliangRight9').value = lsslr;
    })

    var inp3 = document.getElementById('add-jiaolian1SelectLeft9');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('add-jiaolian1SelectLeft9').value;
        document.getElementById('add-jiaolian1SelectRight9').value = jl1sl;
    })

    var inp4 = document.getElementById('add-jiaolian2SelectLeft9');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('add-jiaolian2SelectLeft9').value;
        document.getElementById('add-jiaolian2SelectRight9').value = jl2sl;
    })

    var inp5 = document.getElementById('add-jiaolian3SelectLeft9');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('add-jiaolian3SelectLeft9').value;
        document.getElementById('add-jiaolian3SelectRight9').value = jl3sl;
    })

    var inp6 = document.getElementById('add-jiaolian4SelectLeft9');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('add-jiaolian4SelectLeft9').value;
        document.getElementById('add-jiaolian4SelectRight9').value = jl4sl;
    })

    var inp7 = document.getElementById('add-jiaolian5SelectLeft9');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('add-jiaolian5SelectLeft9').value;
        document.getElementById('add-jiaolian5SelectRight9').value = jl5sl;
    })

    var inp8 = document.getElementById('add-jiaolian6SelectLeft9');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('add-jiaolian6SelectLeft9').value;
        document.getElementById('add-jiaolian6SelectRight9').value = jl6sl;
    })

    var jl3inp = document.getElementById('add-jiaolian1SelectLeft9');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft9').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft9').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft9').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft9').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft9').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft9').value;
        var height = parseFloat(document.getElementById('add-height9').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("add-jiaolian1SelectRight9").value = jl1

            document.getElementById("add-jiaolian1InsertLeft9").value = jiaolian1Insert;

            document.getElementById("add-jiaolian1InsertRight9").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian1InsertLeft9');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian1InsertLeft9").value;

        document.getElementById("add-jiaolian1InsertRight9").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian2SelectLeft9');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft9').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft9').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft9').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft9').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft9').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft9').value;
        var height = parseFloat(document.getElementById('add-height9').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("add-jiaolian2SelectRight9").value = jl2

            document.getElementById("add-jiaolian2InsertLeft9").value = jiaolian2Insert;

            document.getElementById("add-jiaolian2InsertRight9").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian2InsertLeft9');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian2InsertLeft9").value;

        document.getElementById("add-jiaolian2InsertRight9").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian3SelectLeft9');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft9').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft9').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft9').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft9').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft9').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft9').value;
        var height = parseFloat(document.getElementById('add-height9').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("add-jiaolian3SelectRight9").value = jl3

            document.getElementById("add-jiaolian3InsertLeft9").value = jiaolian3Insert;

            document.getElementById("add-jiaolian3InsertRight9").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian3InsertLeft9');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian3InsertLeft9").value;

        document.getElementById("add-jiaolian3InsertRight9").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian4SelectLeft9');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft9').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft9').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft9').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft9').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft9').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft9').value;
        var height = parseFloat(document.getElementById('add-height9').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("add-jiaolian4SelectRight9").value = jl4

            document.getElementById("add-jiaolian4InsertLeft9").value = jiaolian4Insert;

            document.getElementById("add-jiaolian4InsertRight9").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian4InsertLeft9');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian4InsertLeft9").value;

        document.getElementById("add-jiaolian4InsertRight9").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian5SelectLeft9');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft9').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft9').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft9').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft9').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft9').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft9').value;
        var height = parseFloat(document.getElementById('add-height9').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("add-jiaolian5SelectRight9").value = jl5

            document.getElementById("add-jiaolian5InsertLeft9").value = jiaolian5Insert;

            document.getElementById("add-jiaolian5InsertRight9").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian5InsertLeft9');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian5InsertLeft9").value;

        document.getElementById("add-jiaolian5InsertRight9").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian6SelectLeft9');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft9').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft9').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft9').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft9').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft9').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft9').value;
        var height = parseFloat(document.getElementById('add-height9').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("add-jiaolian6SelectRight9").value = jl6

            document.getElementById("add-jiaolian6InsertLeft9").value = jiaolian6Insert;

            document.getElementById("add-jiaolian6InsertRight9").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian6InsertLeft9');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian6InsertLeft9").value;

        document.getElementById("add-jiaolian6InsertRight9").value = a;
    })

    // -----------11
    var inp2 = document.getElementById('add-jiaoliankongFangxiangLeft10');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num10').value;
        var jlkfxl = document.getElementById('add-jiaoliankongFangxiangLeft10').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('add-jiaoliankongFangxiangRight10').value = jlkfxr;
    })

    var inp2 = document.getElementById('add-lashouShuliangLeft10');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num10').value;
        var lssll = document.getElementById('add-lashouShuliangLeft10').value;
        var lsslr = xdsl - lssll;
        document.getElementById('add-lashouShuliangRight10').value = lsslr;
    })

    var inp3 = document.getElementById('add-jiaolian1SelectLeft10');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('add-jiaolian1SelectLeft10').value;
        document.getElementById('add-jiaolian1SelectRight10').value = jl1sl;
    })

    var inp4 = document.getElementById('add-jiaolian2SelectLeft10');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('add-jiaolian2SelectLeft10').value;
        document.getElementById('add-jiaolian2SelectRight10').value = jl2sl;
    })

    var inp5 = document.getElementById('add-jiaolian3SelectLeft10');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('add-jiaolian3SelectLeft10').value;
        document.getElementById('add-jiaolian3SelectRight10').value = jl3sl;
    })

    var inp6 = document.getElementById('add-jiaolian4SelectLeft10');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('add-jiaolian4SelectLeft10').value;
        document.getElementById('add-jiaolian4SelectRight10').value = jl4sl;
    })

    var inp7 = document.getElementById('add-jiaolian5SelectLeft10');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('add-jiaolian5SelectLeft10').value;
        document.getElementById('add-jiaolian5SelectRight10').value = jl5sl;
    })

    var inp8 = document.getElementById('add-jiaolian6SelectLeft10');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('add-jiaolian6SelectLeft10').value;
        document.getElementById('add-jiaolian6SelectRight10').value = jl6sl;
    })

    var jl3inp = document.getElementById('add-jiaolian1SelectLeft10');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft10').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft10').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft10').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft10').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft10').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft10').value;
        var height = parseFloat(document.getElementById('add-height10').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("add-jiaolian1SelectRight10").value = jl1

            document.getElementById("add-jiaolian1InsertLeft10").value = jiaolian1Insert;

            document.getElementById("add-jiaolian1InsertRight10").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian1InsertLeft10');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian1InsertLeft10").value;

        document.getElementById("add-jiaolian1InsertRight10").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian2SelectLeft10');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft10').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft10').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft10').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft10').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft10').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft10').value;
        var height = parseFloat(document.getElementById('add-height10').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("add-jiaolian2SelectRight10").value = jl2

            document.getElementById("add-jiaolian2InsertLeft10").value = jiaolian2Insert;

            document.getElementById("add-jiaolian2InsertRight10").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian2InsertLeft10');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian2InsertLeft10").value;

        document.getElementById("add-jiaolian2InsertRight10").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian3SelectLeft10');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft10').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft10').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft10').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft10').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft10').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft10').value;
        var height = parseFloat(document.getElementById('add-height10').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("add-jiaolian3SelectRight10").value = jl3

            document.getElementById("add-jiaolian3InsertLeft10").value = jiaolian3Insert;

            document.getElementById("add-jiaolian3InsertRight10").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian3InsertLeft10');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian3InsertLeft10").value;

        document.getElementById("add-jiaolian3InsertRight10").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian4SelectLeft10');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft10').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft10').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft10').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft10').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft10').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft10').value;
        var height = parseFloat(document.getElementById('add-height10').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("add-jiaolian4SelectRight10").value = jl4

            document.getElementById("add-jiaolian4InsertLeft10").value = jiaolian4Insert;

            document.getElementById("add-jiaolian4InsertRight10").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian4InsertLeft10');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian4InsertLeft10").value;

        document.getElementById("add-jiaolian4InsertRight10").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian5SelectLeft10');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft10').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft10').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft10').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft10').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft10').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft10').value;
        var height = parseFloat(document.getElementById('add-height10').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("add-jiaolian5SelectRight10").value = jl5

            document.getElementById("add-jiaolian5InsertLeft10").value = jiaolian5Insert;

            document.getElementById("add-jiaolian5InsertRight10").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian5InsertLeft10');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian5InsertLeft10").value;

        document.getElementById("add-jiaolian5InsertRight10").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian6SelectLeft10');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft10').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft10').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft10').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft10').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft10').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft10').value;
        var height = parseFloat(document.getElementById('add-height10').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("add-jiaolian6SelectRight10").value = jl6

            document.getElementById("add-jiaolian6InsertLeft10").value = jiaolian6Insert;

            document.getElementById("add-jiaolian6InsertRight10").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian6InsertLeft10');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian6InsertLeft10").value;

        document.getElementById("add-jiaolian6InsertRight10").value = a;
    })

    // --------------12
    var inp2 = document.getElementById('add-jiaoliankongFangxiangLeft11');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num11').value;
        var jlkfxl = document.getElementById('add-jiaoliankongFangxiangLeft11').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('add-jiaoliankongFangxiangRight11').value = jlkfxr;
    })

    var inp2 = document.getElementById('add-lashouShuliangLeft11');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num11').value;
        var lssll = document.getElementById('add-lashouShuliangLeft11').value;
        var lsslr = xdsl - lssll;
        document.getElementById('add-lashouShuliangRight11').value = lsslr;
    })

    var inp3 = document.getElementById('add-jiaolian1SelectLeft11');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('add-jiaolian1SelectLeft11').value;
        document.getElementById('add-jiaolian1SelectRight11').value = jl1sl;
    })

    var inp4 = document.getElementById('add-jiaolian2SelectLeft11');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('add-jiaolian2SelectLeft11').value;
        document.getElementById('add-jiaolian2SelectRight11').value = jl2sl;
    })

    var inp5 = document.getElementById('add-jiaolian3SelectLeft11');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('add-jiaolian3SelectLeft11').value;
        document.getElementById('add-jiaolian3SelectRight11').value = jl3sl;
    })

    var inp6 = document.getElementById('add-jiaolian4SelectLeft11');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('add-jiaolian4SelectLeft11').value;
        document.getElementById('add-jiaolian4SelectRight11').value = jl4sl;
    })

    var inp7 = document.getElementById('add-jiaolian5SelectLeft11');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('add-jiaolian5SelectLeft11').value;
        document.getElementById('add-jiaolian5SelectRight11').value = jl5sl;
    })

    var inp8 = document.getElementById('add-jiaolian6SelectLeft11');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('add-jiaolian6SelectLeft11').value;
        document.getElementById('add-jiaolian6SelectRight11').value = jl6sl;
    })

    var jl3inp = document.getElementById('add-jiaolian1SelectLeft11');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft11').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft11').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft11').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft11').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft11').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft11').value;
        var height = parseFloat(document.getElementById('add-height11').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("add-jiaolian1SelectRight11").value = jl1

            document.getElementById("add-jiaolian1InsertLeft11").value = jiaolian1Insert;

            document.getElementById("add-jiaolian1InsertRight11").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian1InsertLeft11');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian1InsertLeft11").value;

        document.getElementById("add-jiaolian1InsertRight11").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian2SelectLeft11');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft11').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft11').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft11').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft11').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft11').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft11').value;
        var height = parseFloat(document.getElementById('add-height11').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("add-jiaolian2SelectRight11").value = jl2

            document.getElementById("add-jiaolian2InsertLeft11").value = jiaolian2Insert;

            document.getElementById("add-jiaolian2InsertRight11").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian2InsertLeft11');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian2InsertLeft11").value;

        document.getElementById("add-jiaolian2InsertRight11").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian3SelectLeft11');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft11').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft11').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft11').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft11').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft11').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft11').value;
        var height = parseFloat(document.getElementById('add-height11').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("add-jiaolian3SelectRight11").value = jl3

            document.getElementById("add-jiaolian3InsertLeft11").value = jiaolian3Insert;

            document.getElementById("add-jiaolian3InsertRight11").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian3InsertLeft11');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian3InsertLeft11").value;

        document.getElementById("add-jiaolian3InsertRight11").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian4SelectLeft11');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft11').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft11').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft11').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft11').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft11').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft11').value;
        var height = parseFloat(document.getElementById('add-height11').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("add-jiaolian4SelectRight11").value = jl4

            document.getElementById("add-jiaolian4InsertLeft11").value = jiaolian4Insert;

            document.getElementById("add-jiaolian4InsertRight11").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian4InsertLeft11');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian4InsertLeft11").value;

        document.getElementById("add-jiaolian4InsertRight11").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian5SelectLeft11');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft11').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft11').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft11').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft11').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft11').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft11').value;
        var height = parseFloat(document.getElementById('add-height11').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("add-jiaolian5SelectRight11").value = jl5

            document.getElementById("add-jiaolian5InsertLeft11").value = jiaolian5Insert;

            document.getElementById("add-jiaolian5InsertRight11").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian5InsertLeft11');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian5InsertLeft11").value;

        document.getElementById("add-jiaolian5InsertRight11").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian6SelectLeft11');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft11').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft11').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft11').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft11').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft11').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft11').value;
        var height = parseFloat(document.getElementById('add-height11').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("add-jiaolian6SelectRight11").value = jl6

            document.getElementById("add-jiaolian6InsertLeft11").value = jiaolian6Insert;

            document.getElementById("add-jiaolian6InsertRight11").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian6InsertLeft11');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian6InsertLeft11").value;

        document.getElementById("add-jiaolian6InsertRight11").value = a;
    })

    // --------------13
    var inp2 = document.getElementById('add-jiaoliankongFangxiangLeft12');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num12').value;
        var jlkfxl = document.getElementById('add-jiaoliankongFangxiangLeft12').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('add-jiaoliankongFangxiangRight12').value = jlkfxr;
    })

    var inp2 = document.getElementById('add-lashouShuliangLeft12');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num12').value;
        var lssll = document.getElementById('add-lashouShuliangLeft12').value;
        var lsslr = xdsl - lssll;
        document.getElementById('add-lashouShuliangRight12').value = lsslr;
    })

    var inp3 = document.getElementById('add-jiaolian1SelectLeft12');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('add-jiaolian1SelectLeft12').value;
        document.getElementById('add-jiaolian1SelectRight12').value = jl1sl;
    })

    var inp4 = document.getElementById('add-jiaolian2SelectLeft12');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('add-jiaolian2SelectLeft12').value;
        document.getElementById('add-jiaolian2SelectRight12').value = jl2sl;
    })

    var inp5 = document.getElementById('add-jiaolian3SelectLeft12');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('add-jiaolian3SelectLeft12').value;
        document.getElementById('add-jiaolian3SelectRight12').value = jl3sl;
    })

    var inp6 = document.getElementById('add-jiaolian4SelectLeft12');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('add-jiaolian4SelectLeft12').value;
        document.getElementById('add-jiaolian4SelectRight12').value = jl4sl;
    })

    var inp7 = document.getElementById('add-jiaolian5SelectLeft12');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('add-jiaolian5SelectLeft12').value;
        document.getElementById('add-jiaolian5SelectRight12').value = jl5sl;
    })

    var inp8 = document.getElementById('add-jiaolian6SelectLeft12');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('add-jiaolian6SelectLeft12').value;
        document.getElementById('add-jiaolian6SelectRight12').value = jl6sl;
    })

    var jl3inp = document.getElementById('add-jiaolian1SelectLeft12');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft12').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft12').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft12').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft12').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft12').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft12').value;
        var height = parseFloat(document.getElementById('add-height12').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("add-jiaolian1SelectRight12").value = jl1

            document.getElementById("add-jiaolian1InsertLeft12").value = jiaolian1Insert;

            document.getElementById("add-jiaolian1InsertRight12").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian1InsertLeft12');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian1InsertLeft12").value;

        document.getElementById("add-jiaolian1InsertRight12").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian2SelectLeft12');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft12').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft12').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft12').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft12').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft12').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft12').value;
        var height = parseFloat(document.getElementById('add-height12').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("add-jiaolian2SelectRight12").value = jl2

            document.getElementById("add-jiaolian2InsertLeft12").value = jiaolian2Insert;

            document.getElementById("add-jiaolian2InsertRight12").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian2InsertLeft12');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian2InsertLeft12").value;

        document.getElementById("add-jiaolian2InsertRight12").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian3SelectLeft12');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft12').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft12').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft12').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft12').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft12').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft12').value;
        var height = parseFloat(document.getElementById('add-height12').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("add-jiaolian3SelectRight12").value = jl3

            document.getElementById("add-jiaolian3InsertLeft12").value = jiaolian3Insert;

            document.getElementById("add-jiaolian3InsertRight12").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian3InsertLeft12');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian3InsertLeft12").value;

        document.getElementById("add-jiaolian3InsertRight12").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian4SelectLeft12');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft12').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft12').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft12').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft12').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft12').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft12').value;
        var height = parseFloat(document.getElementById('add-height12').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("add-jiaolian4SelectRight12").value = jl4

            document.getElementById("add-jiaolian4InsertLeft12").value = jiaolian4Insert;

            document.getElementById("add-jiaolian4InsertRight12").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian4InsertLeft12');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian4InsertLeft12").value;

        document.getElementById("add-jiaolian4InsertRight12").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian5SelectLeft12');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft12').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft12').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft12').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft12').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft12').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft12').value;
        var height = parseFloat(document.getElementById('add-height12').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("add-jiaolian5SelectRight12").value = jl5

            document.getElementById("add-jiaolian5InsertLeft12").value = jiaolian5Insert;

            document.getElementById("add-jiaolian5InsertRight12").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian5InsertLeft12');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian5InsertLeft12").value;

        document.getElementById("add-jiaolian5InsertRight12").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian6SelectLeft12');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft12').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft12').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft12').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft12').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft12').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft12').value;
        var height = parseFloat(document.getElementById('add-height12').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("add-jiaolian6SelectRight12").value = jl6

            document.getElementById("add-jiaolian6InsertLeft12").value = jiaolian6Insert;

            document.getElementById("add-jiaolian6InsertRight12").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian6InsertLeft12');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian6InsertLeft12").value;

        document.getElementById("add-jiaolian6InsertRight12").value = a;
    })

    // -------14
    var inp2 = document.getElementById('add-jiaoliankongFangxiangLeft13');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num13').value;
        var jlkfxl = document.getElementById('add-jiaoliankongFangxiangLeft13').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('add-jiaoliankongFangxiangRight13').value = jlkfxr;
    })

    var inp2 = document.getElementById('add-lashouShuliangLeft13');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num13').value;
        var lssll = document.getElementById('add-lashouShuliangLeft13').value;
        var lsslr = xdsl - lssll;
        document.getElementById('add-lashouShuliangRight13').value = lsslr;
    })

    var inp3 = document.getElementById('add-jiaolian1SelectLeft13');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('add-jiaolian1SelectLeft13').value;
        document.getElementById('add-jiaolian1SelectRight13').value = jl1sl;
    })

    var inp4 = document.getElementById('add-jiaolian2SelectLeft13');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('add-jiaolian2SelectLeft13').value;
        document.getElementById('add-jiaolian2SelectRight13').value = jl2sl;
    })

    var inp5 = document.getElementById('add-jiaolian3SelectLeft13');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('add-jiaolian3SelectLeft13').value;
        document.getElementById('add-jiaolian3SelectRight13').value = jl3sl;
    })

    var inp6 = document.getElementById('add-jiaolian4SelectLeft13');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('add-jiaolian4SelectLeft13').value;
        document.getElementById('add-jiaolian4SelectRight13').value = jl4sl;
    })

    var inp7 = document.getElementById('add-jiaolian5SelectLeft13');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('add-jiaolian5SelectLeft13').value;
        document.getElementById('add-jiaolian5SelectRight13').value = jl5sl;
    })

    var inp8 = document.getElementById('add-jiaolian6SelectLeft13');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('add-jiaolian6SelectLeft13').value;
        document.getElementById('add-jiaolian6SelectRight13').value = jl6sl;
    })

    var jl3inp = document.getElementById('add-jiaolian1SelectLeft13');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft13').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft13').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft13').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft13').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft13').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft13').value;
        var height = parseFloat(document.getElementById('add-height13').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("add-jiaolian1SelectRight13").value = jl1

            document.getElementById("add-jiaolian1InsertLeft13").value = jiaolian1Insert;

            document.getElementById("add-jiaolian1InsertRight13").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian1InsertLeft13');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian1InsertLeft13").value;

        document.getElementById("add-jiaolian1InsertRight13").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian2SelectLeft13');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft13').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft13').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft13').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft13').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft13').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft13').value;
        var height = parseFloat(document.getElementById('add-height13').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("add-jiaolian2SelectRight13").value = jl2

            document.getElementById("add-jiaolian2InsertLeft13").value = jiaolian2Insert;

            document.getElementById("add-jiaolian2InsertRight13").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian2InsertLeft13');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian2InsertLeft13").value;

        document.getElementById("add-jiaolian2InsertRight13").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian3SelectLeft13');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft13').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft13').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft13').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft13').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft13').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft13').value;
        var height = parseFloat(document.getElementById('add-height13').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("add-jiaolian3SelectRight13").value = jl3

            document.getElementById("add-jiaolian3InsertLeft13").value = jiaolian3Insert;

            document.getElementById("add-jiaolian3InsertRight13").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian3InsertLeft13');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian3InsertLeft13").value;

        document.getElementById("add-jiaolian3InsertRight13").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian4SelectLeft13');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft13').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft13').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft13').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft13').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft13').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft13').value;
        var height = parseFloat(document.getElementById('add-height13').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("add-jiaolian4SelectRight13").value = jl4

            document.getElementById("add-jiaolian4InsertLeft13").value = jiaolian4Insert;

            document.getElementById("add-jiaolian4InsertRight13").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian4InsertLeft13');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian4InsertLeft13").value;

        document.getElementById("add-jiaolian4InsertRight13").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian5SelectLeft13');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft13').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft13').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft13').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft13').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft13').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft13').value;
        var height = parseFloat(document.getElementById('add-height13').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("add-jiaolian5SelectRight13").value = jl5

            document.getElementById("add-jiaolian5InsertLeft13").value = jiaolian5Insert;

            document.getElementById("add-jiaolian5InsertRight13").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian5InsertLeft13');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian5InsertLeft13").value;

        document.getElementById("add-jiaolian5InsertRight13").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian6SelectLeft13');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft13').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft13').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft13').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft13').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft13').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft13').value;
        var height = parseFloat(document.getElementById('add-height13').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("add-jiaolian6SelectRight13").value = jl6

            document.getElementById("add-jiaolian6InsertLeft13").value = jiaolian6Insert;

            document.getElementById("add-jiaolian6InsertRight13").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian6InsertLeft13');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian6InsertLeft13").value;

        document.getElementById("add-jiaolian6InsertRight13").value = a;
    })

    // -------15
    var inp2 = document.getElementById('add-jiaoliankongFangxiangLeft14');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num14').value;
        var jlkfxl = document.getElementById('add-jiaoliankongFangxiangLeft14').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('add-jiaoliankongFangxiangRight14').value = jlkfxr;
    })

    var inp2 = document.getElementById('add-lashouShuliangLeft14');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num14').value;
        var lssll = document.getElementById('add-lashouShuliangLeft14').value;
        var lsslr = xdsl - lssll;
        document.getElementById('add-lashouShuliangRight14').value = lsslr;
    })

    var inp3 = document.getElementById('add-jiaolian1SelectLeft14');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('add-jiaolian1SelectLeft14').value;
        document.getElementById('add-jiaolian1SelectRight14').value = jl1sl;
    })

    var inp4 = document.getElementById('add-jiaolian2SelectLeft14');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('add-jiaolian2SelectLeft14').value;
        document.getElementById('add-jiaolian2SelectRight14').value = jl2sl;
    })

    var inp5 = document.getElementById('add-jiaolian3SelectLeft14');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('add-jiaolian3SelectLeft14').value;
        document.getElementById('add-jiaolian3SelectRight14').value = jl3sl;
    })

    var inp6 = document.getElementById('add-jiaolian4SelectLeft14');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('add-jiaolian4SelectLeft14').value;
        document.getElementById('add-jiaolian4SelectRight14').value = jl4sl;
    })

    var inp7 = document.getElementById('add-jiaolian5SelectLeft14');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('add-jiaolian5SelectLeft14').value;
        document.getElementById('add-jiaolian5SelectRight14').value = jl5sl;
    })

    var inp8 = document.getElementById('add-jiaolian6SelectLeft14');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('add-jiaolian6SelectLeft14').value;
        document.getElementById('add-jiaolian6SelectRight14').value = jl6sl;
    })

    var jl3inp = document.getElementById('add-jiaolian1SelectLeft14');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft14').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft14').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft14').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft14').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft14').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft14').value;
        var height = parseFloat(document.getElementById('add-height14').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("add-jiaolian1SelectRight14").value = jl1

            document.getElementById("add-jiaolian1InsertLeft14").value = jiaolian1Insert;

            document.getElementById("add-jiaolian1InsertRight14").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian1InsertLeft14');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian1InsertLeft14").value;

        document.getElementById("add-jiaolian1InsertRight14").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian2SelectLeft14');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft14').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft14').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft14').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft14').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft14').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft14').value;
        var height = parseFloat(document.getElementById('add-height14').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("add-jiaolian2SelectRight14").value = jl2

            document.getElementById("add-jiaolian2InsertLeft14").value = jiaolian2Insert;

            document.getElementById("add-jiaolian2InsertRight14").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian2InsertLeft14');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian2InsertLeft14").value;

        document.getElementById("add-jiaolian2InsertRight14").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian3SelectLeft14');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft14').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft14').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft14').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft14').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft14').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft14').value;
        var height = parseFloat(document.getElementById('add-height14').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("add-jiaolian3SelectRight14").value = jl3

            document.getElementById("add-jiaolian3InsertLeft14").value = jiaolian3Insert;

            document.getElementById("add-jiaolian3InsertRight14").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian3InsertLeft14');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian3InsertLeft14").value;

        document.getElementById("add-jiaolian3InsertRight14").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian4SelectLeft14');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft14').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft14').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft14').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft14').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft14').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft14').value;
        var height = parseFloat(document.getElementById('add-height14').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("add-jiaolian4SelectRight14").value = jl4

            document.getElementById("add-jiaolian4InsertLeft14").value = jiaolian4Insert;

            document.getElementById("add-jiaolian4InsertRight14").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian4InsertLeft14');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian4InsertLeft14").value;

        document.getElementById("add-jiaolian4InsertRight14").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian5SelectLeft14');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft14').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft14').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft14').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft14').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft14').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft14').value;
        var height = parseFloat(document.getElementById('add-height14').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("add-jiaolian5SelectRight14").value = jl5

            document.getElementById("add-jiaolian5InsertLeft14").value = jiaolian5Insert;

            document.getElementById("add-jiaolian5InsertRight14").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian5InsertLeft14');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian5InsertLeft14").value;

        document.getElementById("add-jiaolian5InsertRight14").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian6SelectLeft14');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft14').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft14').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft14').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft14').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft14').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft14').value;
        var height = parseFloat(document.getElementById('add-height14').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("add-jiaolian6SelectRight14").value = jl6

            document.getElementById("add-jiaolian6InsertLeft14").value = jiaolian6Insert;

            document.getElementById("add-jiaolian6InsertRight14").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian6InsertLeft14');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian6InsertLeft14").value;

        document.getElementById("add-jiaolian6InsertRight14").value = a;
    })

    // ---------16
    var inp2 = document.getElementById('add-jiaoliankongFangxiangLeft15');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num15').value;
        var jlkfxl = document.getElementById('add-jiaoliankongFangxiangLeft15').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('add-jiaoliankongFangxiangRight15').value = jlkfxr;
    })

    var inp2 = document.getElementById('add-lashouShuliangLeft15');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num15').value;
        var lssll = document.getElementById('add-lashouShuliangLeft15').value;
        var lsslr = xdsl - lssll;
        document.getElementById('add-lashouShuliangRight15').value = lsslr;
    })

    var inp3 = document.getElementById('add-jiaolian1SelectLeft15');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('add-jiaolian1SelectLeft15').value;
        document.getElementById('add-jiaolian1SelectRight15').value = jl1sl;
    })

    var inp4 = document.getElementById('add-jiaolian2SelectLeft15');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('add-jiaolian2SelectLeft15').value;
        document.getElementById('add-jiaolian2SelectRight15').value = jl2sl;
    })

    var inp5 = document.getElementById('add-jiaolian3SelectLeft15');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('add-jiaolian3SelectLeft15').value;
        document.getElementById('add-jiaolian3SelectRight15').value = jl3sl;
    })

    var inp6 = document.getElementById('add-jiaolian4SelectLeft15');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('add-jiaolian4SelectLeft15').value;
        document.getElementById('add-jiaolian4SelectRight15').value = jl4sl;
    })

    var inp7 = document.getElementById('add-jiaolian5SelectLeft15');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('add-jiaolian5SelectLeft15').value;
        document.getElementById('add-jiaolian5SelectRight15').value = jl5sl;
    })

    var inp8 = document.getElementById('add-jiaolian6SelectLeft15');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('add-jiaolian6SelectLeft15').value;
        document.getElementById('add-jiaolian6SelectRight15').value = jl6sl;
    })

    var jl3inp = document.getElementById('add-jiaolian1SelectLeft15');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft15').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft15').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft15').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft15').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft15').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft15').value;
        var height = parseFloat(document.getElementById('add-height15').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("add-jiaolian1SelectRight15").value = jl1

            document.getElementById("add-jiaolian1InsertLeft15").value = jiaolian1Insert;

            document.getElementById("add-jiaolian1InsertRight15").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian1InsertLeft15');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian1InsertLeft15").value;

        document.getElementById("add-jiaolian1InsertRight15").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian2SelectLeft15');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft15').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft15').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft15').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft15').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft15').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft15').value;
        var height = parseFloat(document.getElementById('add-height15').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("add-jiaolian2SelectRight15").value = jl2

            document.getElementById("add-jiaolian2InsertLeft15").value = jiaolian2Insert;

            document.getElementById("add-jiaolian2InsertRight15").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian2InsertLeft15');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian2InsertLeft15").value;

        document.getElementById("add-jiaolian2InsertRight15").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian3SelectLeft15');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft15').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft15').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft15').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft15').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft15').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft15').value;
        var height = parseFloat(document.getElementById('add-height15').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("add-jiaolian3SelectRight15").value = jl3

            document.getElementById("add-jiaolian3InsertLeft15").value = jiaolian3Insert;

            document.getElementById("add-jiaolian3InsertRight15").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian3InsertLeft15');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian3InsertLeft15").value;

        document.getElementById("add-jiaolian3InsertRight15").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian4SelectLeft15');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft15').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft15').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft15').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft15').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft15').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft15').value;
        var height = parseFloat(document.getElementById('add-height15').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("add-jiaolian4SelectRight15").value = jl4

            document.getElementById("add-jiaolian4InsertLeft15").value = jiaolian4Insert;

            document.getElementById("add-jiaolian4InsertRight15").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian4InsertLeft15');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian4InsertLeft15").value;

        document.getElementById("add-jiaolian4InsertRight15").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian5SelectLeft15');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft15').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft15').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft15').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft15').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft15').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft15').value;
        var height = parseFloat(document.getElementById('add-height15').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("add-jiaolian5SelectRight15").value = jl5

            document.getElementById("add-jiaolian5InsertLeft15").value = jiaolian5Insert;

            document.getElementById("add-jiaolian5InsertRight15").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian5InsertLeft15');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian5InsertLeft15").value;

        document.getElementById("add-jiaolian5InsertRight15").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian6SelectLeft15');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft15').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft15').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft15').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft15').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft15').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft15').value;
        var height = parseFloat(document.getElementById('add-height15').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("add-jiaolian6SelectRight15").value = jl6

            document.getElementById("add-jiaolian6InsertLeft15").value = jiaolian6Insert;

            document.getElementById("add-jiaolian6InsertRight15").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian6InsertLeft15');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian6InsertLeft15").value;

        document.getElementById("add-jiaolian6InsertRight15").value = a;
    })

    // ---------17
    var inp2 = document.getElementById('add-jiaoliankongFangxiangLeft16');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num16').value;
        var jlkfxl = document.getElementById('add-jiaoliankongFangxiangLeft16').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('add-jiaoliankongFangxiangRight16').value = jlkfxr;
    })

    var inp2 = document.getElementById('add-lashouShuliangLeft16');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num16').value;
        var lssll = document.getElementById('add-lashouShuliangLeft16').value;
        var lsslr = xdsl - lssll;
        document.getElementById('add-lashouShuliangRight16').value = lsslr;
    })

    var inp3 = document.getElementById('add-jiaolian1SelectLeft16');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('add-jiaolian1SelectLeft16').value;
        document.getElementById('add-jiaolian1SelectRight16').value = jl1sl;
    })

    var inp4 = document.getElementById('add-jiaolian2SelectLeft16');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('add-jiaolian2SelectLeft16').value;
        document.getElementById('add-jiaolian2SelectRight16').value = jl2sl;
    })

    var inp5 = document.getElementById('add-jiaolian3SelectLeft16');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('add-jiaolian3SelectLeft16').value;
        document.getElementById('add-jiaolian3SelectRight16').value = jl3sl;
    })

    var inp6 = document.getElementById('add-jiaolian4SelectLeft16');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('add-jiaolian4SelectLeft16').value;
        document.getElementById('add-jiaolian4SelectRight16').value = jl4sl;
    })

    var inp7 = document.getElementById('add-jiaolian5SelectLeft16');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('add-jiaolian5SelectLeft16').value;
        document.getElementById('add-jiaolian5SelectRight16').value = jl5sl;
    })

    var inp8 = document.getElementById('add-jiaolian6SelectLeft16');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('add-jiaolian6SelectLeft16').value;
        document.getElementById('add-jiaolian6SelectRight16').value = jl6sl;
    })

    var jl3inp = document.getElementById('add-jiaolian1SelectLeft16');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft16').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft16').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft16').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft16').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft16').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft16').value;
        var height = parseFloat(document.getElementById('add-height16').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("add-jiaolian1SelectRight16").value = jl1

            document.getElementById("add-jiaolian1InsertLeft16").value = jiaolian1Insert;

            document.getElementById("add-jiaolian1InsertRight16").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian1InsertLeft16');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian1InsertLeft16").value;

        document.getElementById("add-jiaolian1InsertRight16").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian2SelectLeft16');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft16').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft16').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft16').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft16').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft16').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft16').value;
        var height = parseFloat(document.getElementById('add-height16').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("add-jiaolian2SelectRight16").value = jl2

            document.getElementById("add-jiaolian2InsertLeft16").value = jiaolian2Insert;

            document.getElementById("add-jiaolian2InsertRight16").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian2InsertLeft16');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian2InsertLeft16").value;

        document.getElementById("add-jiaolian2InsertRight16").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian3SelectLeft16');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft16').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft16').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft16').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft16').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft16').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft16').value;
        var height = parseFloat(document.getElementById('add-height16').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("add-jiaolian3SelectRight16").value = jl3

            document.getElementById("add-jiaolian3InsertLeft16").value = jiaolian3Insert;

            document.getElementById("add-jiaolian3InsertRight16").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian3InsertLeft16');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian3InsertLeft16").value;

        document.getElementById("add-jiaolian3InsertRight16").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian4SelectLeft16');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft16').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft16').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft16').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft16').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft16').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft16').value;
        var height = parseFloat(document.getElementById('add-height16').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("add-jiaolian4SelectRight16").value = jl4

            document.getElementById("add-jiaolian4InsertLeft16").value = jiaolian4Insert;

            document.getElementById("add-jiaolian4InsertRight16").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian4InsertLeft16');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian4InsertLeft16").value;

        document.getElementById("add-jiaolian4InsertRight16").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian5SelectLeft16');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft16').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft16').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft16').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft16').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft16').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft16').value;
        var height = parseFloat(document.getElementById('add-height16').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("add-jiaolian5SelectRight16").value = jl5

            document.getElementById("add-jiaolian5InsertLeft16").value = jiaolian5Insert;

            document.getElementById("add-jiaolian5InsertRight16").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian5InsertLeft16');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian5InsertLeft16").value;

        document.getElementById("add-jiaolian5InsertRight16").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian6SelectLeft16');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft16').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft16').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft16').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft16').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft16').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft16').value;
        var height = parseFloat(document.getElementById('add-height16').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("add-jiaolian6SelectRight16").value = jl6

            document.getElementById("add-jiaolian6InsertLeft16").value = jiaolian6Insert;

            document.getElementById("add-jiaolian6InsertRight16").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian6InsertLeft16');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian6InsertLeft16").value;

        document.getElementById("add-jiaolian6InsertRight16").value = a;
    })

    // ---------18
    var inp2 = document.getElementById('add-jiaoliankongFangxiangLeft17');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num17').value;
        var jlkfxl = document.getElementById('add-jiaoliankongFangxiangLeft17').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('add-jiaoliankongFangxiangRight17').value = jlkfxr;
    })

    var inp2 = document.getElementById('add-lashouShuliangLeft17');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num17').value;
        var lssll = document.getElementById('add-lashouShuliangLeft17').value;
        var lsslr = xdsl - lssll;
        document.getElementById('add-lashouShuliangRight17').value = lsslr;
    })

    var inp3 = document.getElementById('add-jiaolian1SelectLeft17');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('add-jiaolian1SelectLeft17').value;
        document.getElementById('add-jiaolian1SelectRight17').value = jl1sl;
    })

    var inp4 = document.getElementById('add-jiaolian2SelectLeft17');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('add-jiaolian2SelectLeft17').value;
        document.getElementById('add-jiaolian2SelectRight17').value = jl2sl;
    })

    var inp5 = document.getElementById('add-jiaolian3SelectLeft17');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('add-jiaolian3SelectLeft17').value;
        document.getElementById('add-jiaolian3SelectRight17').value = jl3sl;
    })

    var inp6 = document.getElementById('add-jiaolian4SelectLeft17');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('add-jiaolian4SelectLeft17').value;
        document.getElementById('add-jiaolian4SelectRight17').value = jl4sl;
    })

    var inp7 = document.getElementById('add-jiaolian5SelectLeft17');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('add-jiaolian5SelectLeft17').value;
        document.getElementById('add-jiaolian5SelectRight17').value = jl5sl;
    })

    var inp8 = document.getElementById('add-jiaolian6SelectLeft17');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('add-jiaolian6SelectLeft17').value;
        document.getElementById('add-jiaolian6SelectRight17').value = jl6sl;
    })

    var jl3inp = document.getElementById('add-jiaolian1SelectLeft17');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft17').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft17').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft17').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft17').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft17').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft17').value;
        var height = parseFloat(document.getElementById('add-height17').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("add-jiaolian1SelectRight17").value = jl1

            document.getElementById("add-jiaolian1InsertLeft17").value = jiaolian1Insert;

            document.getElementById("add-jiaolian1InsertRight17").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian1InsertLeft17');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian1InsertLeft17").value;

        document.getElementById("add-jiaolian1InsertRight17").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian2SelectLeft17');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft17').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft17').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft17').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft17').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft17').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft17').value;
        var height = parseFloat(document.getElementById('add-height17').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("add-jiaolian2SelectRight17").value = jl2

            document.getElementById("add-jiaolian2InsertLeft17").value = jiaolian2Insert;

            document.getElementById("add-jiaolian2InsertRight17").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian2InsertLeft17');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian2InsertLeft17").value;

        document.getElementById("add-jiaolian2InsertRight17").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian3SelectLeft17');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft17').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft17').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft17').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft17').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft17').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft17').value;
        var height = parseFloat(document.getElementById('add-height17').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("add-jiaolian3SelectRight17").value = jl3

            document.getElementById("add-jiaolian3InsertLeft17").value = jiaolian3Insert;

            document.getElementById("add-jiaolian3InsertRight17").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian3InsertLeft17');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian3InsertLeft17").value;

        document.getElementById("add-jiaolian3InsertRight17").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian4SelectLeft17');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft17').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft17').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft17').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft17').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft17').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft17').value;
        var height = parseFloat(document.getElementById('add-height17').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("add-jiaolian4SelectRight17").value = jl4

            document.getElementById("add-jiaolian4InsertLeft17").value = jiaolian4Insert;

            document.getElementById("add-jiaolian4InsertRight17").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian4InsertLeft17');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian4InsertLeft17").value;

        document.getElementById("add-jiaolian4InsertRight17").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian5SelectLeft17');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft17').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft17').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft17').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft17').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft17').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft17').value;
        var height = parseFloat(document.getElementById('add-height17').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("add-jiaolian5SelectRight17").value = jl5

            document.getElementById("add-jiaolian5InsertLeft17").value = jiaolian5Insert;

            document.getElementById("add-jiaolian5InsertRight17").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian5InsertLeft17');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian5InsertLeft17").value;

        document.getElementById("add-jiaolian5InsertRight17").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian6SelectLeft17');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft17').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft17').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft17').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft17').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft17').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft17').value;
        var height = parseFloat(document.getElementById('add-height17').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("add-jiaolian6SelectRight17").value = jl6

            document.getElementById("add-jiaolian6InsertLeft17").value = jiaolian6Insert;

            document.getElementById("add-jiaolian6InsertRight17").value = jiaolian6Insert;

        }
    })
    var jl3inp = document.getElementById('add-jiaolian6InsertLeft17');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian6InsertLeft17").value;

        document.getElementById("add-jiaolian6InsertRight17").value = a;
    })

    // ------------19
    var inp2 = document.getElementById('add-jiaoliankongFangxiangLeft18');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num18').value;
        var jlkfxl = document.getElementById('add-jiaoliankongFangxiangLeft18').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('add-jiaoliankongFangxiangRight18').value = jlkfxr;
    })

    var inp2 = document.getElementById('add-lashouShuliangLeft18');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num18').value;
        var lssll = document.getElementById('add-lashouShuliangLeft18').value;
        var lsslr = xdsl - lssll;
        document.getElementById('add-lashouShuliangRight18').value = lsslr;
    })

    var inp3 = document.getElementById('add-jiaolian1SelectLeft18');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('add-jiaolian1SelectLeft18').value;
        document.getElementById('add-jiaolian1SelectRight18').value = jl1sl;
    })

    var inp4 = document.getElementById('add-jiaolian2SelectLeft18');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('add-jiaolian2SelectLeft18').value;
        document.getElementById('add-jiaolian2SelectRight18').value = jl2sl;
    })

    var inp5 = document.getElementById('add-jiaolian3SelectLeft18');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('add-jiaolian3SelectLeft18').value;
        document.getElementById('add-jiaolian3SelectRight18').value = jl3sl;
    })

    var inp6 = document.getElementById('add-jiaolian4SelectLeft18');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('add-jiaolian4SelectLeft18').value;
        document.getElementById('add-jiaolian4SelectRight18').value = jl4sl;
    })

    var inp7 = document.getElementById('add-jiaolian5SelectLeft18');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('add-jiaolian5SelectLeft18').value;
        document.getElementById('add-jiaolian5SelectRight18').value = jl5sl;
    })

    var inp8 = document.getElementById('add-jiaolian6SelectLeft18');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('add-jiaolian6SelectLeft18').value;
        document.getElementById('add-jiaolian6SelectRight18').value = jl6sl;
    })

    var jl3inp = document.getElementById('add-jiaolian1SelectLeft18');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft18').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft18').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft18').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft18').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft18').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft18').value;
        var height = parseFloat(document.getElementById('add-height18').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("add-jiaolian1SelectRight18").value = jl1

            document.getElementById("add-jiaolian1InsertLeft18").value = jiaolian1Insert;

            document.getElementById("add-jiaolian1InsertRight18").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian1InsertLeft18');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian1InsertLeft18").value;

        document.getElementById("add-jiaolian1InsertRight18").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian2SelectLeft18');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft18').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft18').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft18').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft18').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft18').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft18').value;
        var height = parseFloat(document.getElementById('add-height18').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("add-jiaolian2SelectRight18").value = jl2

            document.getElementById("add-jiaolian2InsertLeft18").value = jiaolian2Insert;

            document.getElementById("add-jiaolian2InsertRight18").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian2InsertLeft18');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian2InsertLeft18").value;

        document.getElementById("add-jiaolian2InsertRight18").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian3SelectLeft18');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft18').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft18').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft18').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft18').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft18').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft18').value;
        var height = parseFloat(document.getElementById('add-height18').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("add-jiaolian3SelectRight18").value = jl3

            document.getElementById("add-jiaolian3InsertLeft18").value = jiaolian3Insert;

            document.getElementById("add-jiaolian3InsertRight18").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian3InsertLeft18');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian3InsertLeft18").value;

        document.getElementById("add-jiaolian3InsertRight18").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian4SelectLeft18');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft18').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft18').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft18').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft18').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft18').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft18').value;
        var height = parseFloat(document.getElementById('add-height18').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("add-jiaolian4SelectRight18").value = jl4

            document.getElementById("add-jiaolian4InsertLeft18").value = jiaolian4Insert;

            document.getElementById("add-jiaolian4InsertRight18").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian4InsertLeft18');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian4InsertLeft18").value;

        document.getElementById("add-jiaolian4InsertRight18").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian5SelectLeft18');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft18').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft18').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft18').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft18').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft18').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft18').value;
        var height = parseFloat(document.getElementById('add-height18').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("add-jiaolian5SelectRight18").value = jl5

            document.getElementById("add-jiaolian5InsertLeft18").value = jiaolian5Insert;

            document.getElementById("add-jiaolian5InsertRight18").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian5InsertLeft18');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian5InsertLeft18").value;

        document.getElementById("add-jiaolian5InsertRight18").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian6SelectLeft18');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft18').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft18').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft18').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft18').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft18').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft18').value;
        var height = parseFloat(document.getElementById('add-height18').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("add-jiaolian6SelectRight18").value = jl6

            document.getElementById("add-jiaolian6InsertLeft18").value = jiaolian6Insert;

            document.getElementById("add-jiaolian6InsertRight18").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian6InsertLeft18');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian6InsertLeft18").value;

        document.getElementById("add-jiaolian6InsertRight18").value = a;
    })

    // --------20
    var inp2 = document.getElementById('add-jiaoliankongFangxiangLeft19');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num19').value;
        var jlkfxl = document.getElementById('add-jiaoliankongFangxiangLeft19').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('add-jiaoliankongFangxiangRight19').value = jlkfxr;
    })

    var inp2 = document.getElementById('add-lashouShuliangLeft19');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('add-num19').value;
        var lssll = document.getElementById('add-lashouShuliangLeft19').value;
        var lsslr = xdsl - lssll;
        document.getElementById('add-lashouShuliangRight19').value = lsslr;
    })

    var inp3 = document.getElementById('add-jiaolian1SelectLeft19');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('add-jiaolian1SelectLeft19').value;
        document.getElementById('add-jiaolian1SelectRight19').value = jl1sl;
    })

    var inp4 = document.getElementById('add-jiaolian2SelectLeft19');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('add-jiaolian2SelectLeft19').value;
        document.getElementById('add-jiaolian2SelectRight19').value = jl2sl;
    })

    var inp5 = document.getElementById('add-jiaolian3SelectLeft19');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('add-jiaolian3SelectLeft19').value;
        document.getElementById('add-jiaolian3SelectRight19').value = jl3sl;
    })

    var inp6 = document.getElementById('add-jiaolian4SelectLeft19');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('add-jiaolian4SelectLeft19').value;
        document.getElementById('add-jiaolian4SelectRight19').value = jl4sl;
    })

    var inp7 = document.getElementById('add-jiaolian5SelectLeft19');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('add-jiaolian5SelectLeft19').value;
        document.getElementById('add-jiaolian5SelectRight19').value = jl5sl;
    })

    var inp8 = document.getElementById('add-jiaolian6SelectLeft19');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('add-jiaolian6SelectLeft19').value;
        document.getElementById('add-jiaolian6SelectRight19').value = jl6sl;
    })

    var jl3inp = document.getElementById('add-jiaolian1SelectLeft19');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft19').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft19').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft19').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft19').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft19').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft19').value;
        var height = parseFloat(document.getElementById('add-height19').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("add-jiaolian1SelectRight19").value = jl1

            document.getElementById("add-jiaolian1InsertLeft19").value = jiaolian1Insert;

            document.getElementById("add-jiaolian1InsertRight19").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian1InsertLeft19');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian1InsertLeft19").value;

        document.getElementById("add-jiaolian1InsertRight19").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian2SelectLeft19');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft19').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft19').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft19').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft19').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft19').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft19').value;
        var height = parseFloat(document.getElementById('add-height19').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("add-jiaolian2SelectRight19").value = jl2

            document.getElementById("add-jiaolian2InsertLeft19").value = jiaolian2Insert;

            document.getElementById("add-jiaolian2InsertRight19").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian2InsertLeft19');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian2InsertLeft19").value;

        document.getElementById("add-jiaolian2InsertRight19").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian3SelectLeft19');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft19').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft19').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft19').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft19').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft19').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft19').value;
        var height = parseFloat(document.getElementById('add-height19').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("add-jiaolian3SelectRight19").value = jl3

            document.getElementById("add-jiaolian3InsertLeft19").value = jiaolian3Insert;

            document.getElementById("add-jiaolian3InsertRight19").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian3InsertLeft19');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian3InsertLeft19").value;

        document.getElementById("add-jiaolian3InsertRight19").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian4SelectLeft19');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft19').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft19').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft19').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft19').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft19').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft19').value;
        var height = parseFloat(document.getElementById('add-height19').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("add-jiaolian4SelectRight19").value = jl4

            document.getElementById("add-jiaolian4InsertLeft19").value = jiaolian4Insert;

            document.getElementById("add-jiaolian4InsertRight19").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian4InsertLeft19');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian4InsertLeft19").value;

        document.getElementById("add-jiaolian4InsertRight19").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian5SelectLeft19');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft19').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft19').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft19').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft19').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft19').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft19').value;
        var height = parseFloat(document.getElementById('add-height19').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("add-jiaolian5SelectRight19").value = jl5

            document.getElementById("add-jiaolian5InsertLeft19").value = jiaolian5Insert;

            document.getElementById("add-jiaolian5InsertRight19").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian5InsertLeft19');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian5InsertLeft19").value;

        document.getElementById("add-jiaolian5InsertRight19").value = a;
    })

    var jl3inp = document.getElementById('add-jiaolian6SelectLeft19');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('add-jiaolian1SelectLeft19').value;
        var jl2 = document.getElementById('add-jiaolian2SelectLeft19').value;
        var jl3 = document.getElementById('add-jiaolian3SelectLeft19').value;
        var jl4 = document.getElementById('add-jiaolian4SelectLeft19').value;
        var jl5 = document.getElementById('add-jiaolian5SelectLeft19').value;
        var jl6 = document.getElementById('add-jiaolian6SelectLeft19').value;
        var height = parseFloat(document.getElementById('add-height19').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("add-jiaolian6SelectRight19").value = jl6

            document.getElementById("add-jiaolian6InsertLeft19").value = jiaolian6Insert;

            document.getElementById("add-jiaolian6InsertRight19").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('add-jiaolian6InsertLeft19');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("add-jiaolian6InsertLeft19").value;

        document.getElementById("add-jiaolian6InsertRight19").value = a;
    })

    // -------拉手位
    var inp1 = document.getElementById('add-lashouweiSelectLeft');
    inp1.addEventListener('blur', function () {
        var lswsl = document.getElementById('add-lashouweiSelectLeft').value;
        document.getElementById('add-lashouweiSelectRight').value = lswsl;
    })

    var inp1 = document.getElementById('add-lashouweiInsertLeft');
    inp1.addEventListener('blur', function () {
        var lswsr = document.getElementById('add-lashouweiInsertLeft').value;
        document.getElementById('add-lashouweiInsertRight').value = lswsr;
    })


    var inp1q = document.getElementById('update-jiaoliankongFangxiangLeft');
    inp1q.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num').value;
        var jlkfxl = document.getElementById('update-jiaoliankongFangxiangLeft').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('update-jiaoliankongFangxiangRight').value = jlkfxr;
    })

    var inp2 = document.getElementById('update-lashouShuliangLeft');
    inp2.addEventListener('blur', function () {
        var xdsl1 = document.getElementById('update-num').value;
        var lssll = document.getElementById('update-lashouShuliangLeft').value;
        var lsslr = xdsl1 - lssll;
        document.getElementById('update-lashouShuliangRight').value = lsslr;
    })
    // ------------------1
    var inp3 = document.getElementById('update-jiaolian1SelectLeft');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('update-jiaolian1SelectLeft').value;
        document.getElementById('update-jiaolian1SelectRight').value = jl1sl;
    })

    var inp4 = document.getElementById('update-jiaolian2SelectLeft');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('update-jiaolian2SelectLeft').value;
        document.getElementById('update-jiaolian2SelectRight').value = jl2sl;
    })

    var inp5 = document.getElementById('update-jiaolian3SelectLeft');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('update-jiaolian3SelectLeft').value;
        document.getElementById('update-jiaolian3SelectRight').value = jl3sl;
    })

    var inp6 = document.getElementById('update-jiaolian4SelectLeft');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('update-jiaolian4SelectLeft').value;
        document.getElementById('update-jiaolian4SelectRight').value = jl4sl;
    })

    var inp7 = document.getElementById('update-jiaolian5SelectLeft');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('update-jiaolian5SelectLeft').value;
        document.getElementById('update-jiaolian5SelectRight').value = jl5sl;
    })

    var inp8 = document.getElementById('update-jiaolian6SelectLeft');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('update-jiaolian6SelectLeft').value;
        document.getElementById('update-jiaolian6SelectRight').value = jl6sl;
    })

    var jl1inp = document.getElementById('update-jiaolian1SelectLeft');
    jl1inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft').value;
        var height = parseFloat(document.getElementById('update-height').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("update-jiaolian1SelectRight").value = jl1

            document.getElementById("update-jiaolian1InsertLeft").value = jiaolian1Insert;

            document.getElementById("update-jiaolian1InsertRight").value = jiaolian1Insert;

        }
    })

    var jl1inp = document.getElementById('update-jiaolian1InsertLeft');
    jl1inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian1InsertLeft").value;

        document.getElementById("update-jiaolian1InsertRight").value = a;
    })

    var jl1inp = document.getElementById('update-jiaolian2SelectLeft');
    jl1inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft').value;
        var height = parseFloat(document.getElementById('update-height').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("update-jiaolian2SelectRight").value = jl2

            document.getElementById("update-jiaolian2InsertLeft").value = jiaolian2Insert;

            document.getElementById("update-jiaolian2InsertRight").value = jiaolian2Insert;

        }
    })

    var jl1inp = document.getElementById('update-jiaolian2InsertLeft');
    jl1inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian2InsertLeft").value;

        document.getElementById("update-jiaolian2InsertRight").value = a;
    })

    var jl1inp = document.getElementById('update-jiaolian3SelectLeft');
    jl1inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft').value;
        var height = parseFloat(document.getElementById('update-height').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("update-jiaolian3SelectRight").value = jl3

            document.getElementById("update-jiaolian3InsertLeft").value = jiaolian3Insert;

            document.getElementById("update-jiaolian3InsertRight").value = jiaolian3Insert;

        }
    })

    var jl1inp = document.getElementById('update-jiaolian3InsertLeft');
    jl1inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian3InsertLeft").value;

        document.getElementById("update-jiaolian3InsertRight").value = a;
    })

    var jl1inp = document.getElementById('update-jiaolian4SelectLeft');
    jl1inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft').value;
        var height = parseFloat(document.getElementById('update-height').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("update-jiaolian4SelectRight").value = jl4

            document.getElementById("update-jiaolian4InsertLeft").value = jiaolian4Insert;

            document.getElementById("update-jiaolian4InsertRight").value = jiaolian4Insert;

        }
    })

    var jl1inp = document.getElementById('update-jiaolian4InsertLeft');
    jl1inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian4InsertLeft").value;

        document.getElementById("update-jiaolian4InsertRight").value = a;
    })

    var jl5inp = document.getElementById('update-jiaolian5SelectLeft');
    jl5inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft').value;
        var height = parseFloat(document.getElementById('update-height').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("update-jiaolian5SelectRight").value = jl5

            document.getElementById("update-jiaolian5InsertLeft").value = jiaolian5Insert;

            document.getElementById("update-jiaolian5InsertRight").value = jiaolian5Insert;

        }
    })

    var jl5inp = document.getElementById('update-jiaolian5InsertLeft');
    jl5inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian5InsertLeft").value;

        document.getElementById("update-jiaolian5InsertRight").value = a;
    })

    var jl6inp = document.getElementById('update-jiaolian6SelectLeft');
    jl6inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft').value;
        var height = parseFloat(document.getElementById('update-height').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("update-jiaolian6SelectRight").value = jl6

            document.getElementById("update-jiaolian6InsertLeft").value = jiaolian6Insert;

            document.getElementById("update-jiaolian6InsertRight").value = jiaolian6Insert;

        }
    })

    var jl6inp = document.getElementById('update-jiaolian6InsertLeft');
    jl6inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian6InsertLeft").value;

        document.getElementById("update-jiaolian6InsertRight").value = a;
    })

    // ----------2
    var inp11 = document.getElementById('update-jiaoliankongFangxiangLeft1');
    inp11.addEventListener('blur', function () {
        var xdsl1 = document.getElementById('update-num1').value;
        var jlkfxl1 = document.getElementById('update-jiaoliankongFangxiangLeft1').value;
        var jlkfxr1 = xdsl1 - jlkfxl1;
        document.getElementById('update-jiaoliankongFangxiangRight1').value = jlkfxr1;
    })

    var inp22 = document.getElementById('update-lashouShuliangLeft1');
    inp22.addEventListener('blur', function () {
        var xdsl1 = document.getElementById('update-num1').value;
        var lssll1 = document.getElementById('update-lashouShuliangLeft1').value;
        var lsslr1 = xdsl1 - lssll1;
        document.getElementById('update-lashouShuliangRight1').value = lsslr1;
    })

    var inp3 = document.getElementById('update-jiaolian1SelectLeft1');
    inp3.addEventListener('blur', function () {
        var jl1sl1 = document.getElementById('update-jiaolian1SelectLeft1').value;
        document.getElementById('update-jiaolian1SelectRight1').value = jl1sl1;
    })

    var inp4 = document.getElementById('update-jiaolian2SelectLeft1');
    inp4.addEventListener('blur', function () {
        var jl2sl1 = document.getElementById('update-jiaolian2SelectLeft1').value;
        document.getElementById('update-jiaolian2SelectRight1').value = jl2sl1;
    })

    var inp5 = document.getElementById('update-jiaolian3SelectLeft1');
    inp5.addEventListener('blur', function () {
        var jl3sl1 = document.getElementById('update-jiaolian3SelectLeft1').value;
        document.getElementById('update-jiaolian3SelectRight1').value = jl3sl1;
    })

    var inp6 = document.getElementById('update-jiaolian4SelectLeft1');
    inp6.addEventListener('blur', function () {
        var jl4sl1 = document.getElementById('update-jiaolian4SelectLeft1').value;
        document.getElementById('update-jiaolian4SelectRight1').value = jl4sl1;
    })

    var inp7 = document.getElementById('update-jiaolian5SelectLeft1');
    inp7.addEventListener('blur', function () {
        var jl5sl1 = document.getElementById('update-jiaolian5SelectLeft1').value;
        document.getElementById('update-jiaolian5SelectRight1').value = jl5sl1;
    })

    var inp8 = document.getElementById('update-jiaolian6SelectLeft1');
    inp8.addEventListener('blur', function () {
        var jl6sl1 = document.getElementById('update-jiaolian6SelectLeft1').value;
        document.getElementById('update-jiaolian6SelectRight1').value = jl6sl1;
    })

    var jl1inp = document.getElementById('update-jiaolian1SelectLeft1');
    jl1inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft1').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft1').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft1').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft1').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft1').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft1').value;
        var height = parseFloat(document.getElementById('update-height1').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("update-jiaolian1SelectRight1").value = jl1

            document.getElementById("update-jiaolian1InsertLeft1").value = jiaolian1Insert;

            document.getElementById("update-jiaolian1InsertRight1").value = jiaolian1Insert;

        }
    })

    var jl1inp = document.getElementById('update-jiaolian1InsertLeft1');
    jl1inp.addEventListener('blur', function () {

        var a = document.getElementById("update-jiaolian1InsertLeft1").value;

        document.getElementById("update-jiaolian1InsertRight1").value = a;
    })

    var jl1inp = document.getElementById('update-jiaolian2SelectLeft1');
    jl1inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft1').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft1').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft1').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft1').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft1').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft1').value;
        var height = parseFloat(document.getElementById('update-height1').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("update-jiaolian2SelectRight1").value = jl2

            document.getElementById("update-jiaolian2InsertLeft1").value = jiaolian2Insert;

            document.getElementById("update-jiaolian2InsertRight1").value = jiaolian2Insert;

        }
    })

    var jl1inp = document.getElementById('update-jiaolian2InsertLeft1');
    jl1inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian2InsertLeft1").value;

        document.getElementById("update-jiaolian2InsertRight1").value = a;
    })

    var jl2inp = document.getElementById('update-jiaolian3SelectLeft1');
    jl2inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft1').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft1').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft1').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft1').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft1').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft1').value;
        var height = parseFloat(document.getElementById('update-height1').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("update-jiaolian3SelectRight1").value = jl3

            document.getElementById("update-jiaolian3InsertLeft1").value = jiaolian3Insert;

            document.getElementById("update-jiaolian3InsertRight1").value = jiaolian3Insert;

        }
    })

    var jl2inp = document.getElementById('update-jiaolian3InsertLeft1');
    jl2inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian3InsertLeft1").value;

        document.getElementById("update-jiaolian3InsertRight1").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian4SelectLeft1');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft1').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft1').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft1').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft1').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft1').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft1').value;
        var height = parseFloat(document.getElementById('update-height1').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("update-jiaolian4SelectRight1").value = jl4

            document.getElementById("update-jiaolian4InsertLeft1").value = jiaolian4Insert;

            document.getElementById("update-jiaolian4InsertRight1").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian4InsertLeft1');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian4InsertLeft1").value;

        document.getElementById("update-jiaolian4InsertRight1").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian5SelectLeft1');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft1').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft1').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft1').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft1').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft1').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft1').value;
        var height = parseFloat(document.getElementById('update-height1').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("update-jiaolian5SelectRight1").value = jl5

            document.getElementById("update-jiaolian5InsertLeft1").value = jiaolian5Insert;

            document.getElementById("update-jiaolian5InsertRight1").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian5InsertLeft1');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian5InsertLeft1").value;

        document.getElementById("update-jiaolian5InsertRight1").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian6SelectLeft1');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft1').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft1').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft1').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft1').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft1').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft1').value;
        var height = parseFloat(document.getElementById('update-height1').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("update-jiaolian6SelectRight1").value = jl6

            document.getElementById("update-jiaolian6InsertLeft1").value = jiaolian6Insert;

            document.getElementById("update-jiaolian6InsertRight1").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian6InsertLeft1');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian6InsertLeft1").value;

        document.getElementById("update-jiaolian6InsertRight1").value = a;
    })

    // --------------------3
    var inp12 = document.getElementById('update-jiaoliankongFangxiangLeft2');
    inp12.addEventListener('blur', function () {
        var xdsl2 = document.getElementById('update-num2').value;
        var jlkfxl2 = document.getElementById('update-jiaoliankongFangxiangLeft2').value;
        var jlkfxr2 = xdsl2 - jlkfxl2;
        document.getElementById('update-jiaoliankongFangxiangRight2').value = jlkfxr2;
    })

    var inp2 = document.getElementById('update-lashouShuliangLeft2');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num2').value;
        var lssll = document.getElementById('update-lashouShuliangLeft2').value;
        var lsslr = xdsl - lssll;
        document.getElementById('update-lashouShuliangRight2').value = lsslr;
    })

    var inp3 = document.getElementById('update-jiaolian1SelectLeft2');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('update-jiaolian1SelectLeft2').value;
        document.getElementById('update-jiaolian1SelectRight2').value = jl1sl;
    })

    var inp4 = document.getElementById('update-jiaolian2SelectLeft2');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('update-jiaolian2SelectLeft2').value;
        document.getElementById('update-jiaolian2SelectRight2').value = jl2sl;
    })

    var inp5 = document.getElementById('update-jiaolian3SelectLeft2');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('update-jiaolian3SelectLeft2').value;
        document.getElementById('update-jiaolian3SelectRight2').value = jl3sl;
    })

    var inp6 = document.getElementById('update-jiaolian4SelectLeft2');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('update-jiaolian4SelectLeft2').value;
        document.getElementById('update-jiaolian4SelectRight2').value = jl4sl;
    })

    var inp7 = document.getElementById('update-jiaolian5SelectLeft2');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('update-jiaolian5SelectLeft2').value;
        document.getElementById('update-jiaolian5SelectRight2').value = jl5sl;
    })

    var inp8 = document.getElementById('update-jiaolian6SelectLeft2');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('update-jiaolian6SelectLeft2').value;
        document.getElementById('update-jiaolian6SelectRight2').value = jl6sl;
    })

    var jl3inp = document.getElementById('update-jiaolian1SelectLeft2');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft2').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft2').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft2').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft2').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft2').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft2').value;
        var height = parseFloat(document.getElementById('update-height2').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("update-jiaolian1SelectRight2").value = jl1

            document.getElementById("update-jiaolian1InsertLeft2").value = jiaolian1Insert;

            document.getElementById("update-jiaolian1InsertRight2").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian1InsertLeft2');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian1InsertLeft2").value;

        document.getElementById("update-jiaolian1InsertRight2").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian2SelectLeft2');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft2').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft2').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft2').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft2').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft2').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft2').value;
        var height = parseFloat(document.getElementById('update-height2').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("update-jiaolian2SelectRight2").value = jl2

            document.getElementById("update-jiaolian2InsertLeft2").value = jiaolian2Insert;

            document.getElementById("update-jiaolian2InsertRight2").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian2InsertLeft2');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian2InsertLeft2").value;

        document.getElementById("update-jiaolian2InsertRight2").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian3SelectLeft2');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft2').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft2').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft2').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft2').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft2').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft2').value;
        var height = parseFloat(document.getElementById('update-height2').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("update-jiaolian3SelectRight2").value = jl3

            document.getElementById("update-jiaolian3InsertLeft2").value = jiaolian3Insert;

            document.getElementById("update-jiaolian3InsertRight2").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian3InsertLeft2');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian3InsertLeft2").value;

        document.getElementById("update-jiaolian3InsertRight2").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian4SelectLeft2');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft2').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft2').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft2').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft2').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft2').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft2').value;
        var height = parseFloat(document.getElementById('update-height2').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("update-jiaolian4SelectRight2").value = jl4

            document.getElementById("update-jiaolian4InsertLeft2").value = jiaolian4Insert;

            document.getElementById("update-jiaolian4InsertRight2").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian4InsertLeft2');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian4InsertLeft2").value;

        document.getElementById("update-jiaolian4InsertRight2").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian5SelectLeft2');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft2').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft2').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft2').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft2').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft2').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft2').value;
        var height = parseFloat(document.getElementById('update-height2').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("update-jiaolian5SelectRight2").value = jl5

            document.getElementById("update-jiaolian5InsertLeft2").value = jiaolian5Insert;

            document.getElementById("update-jiaolian5InsertRight2").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian5InsertLeft2');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian5InsertLeft2").value;

        document.getElementById("update-jiaolian5InsertRight2").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian6SelectLeft2');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft2').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft2').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft2').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft2').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft2').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft2').value;
        var height = parseFloat(document.getElementById('update-height2').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("update-jiaolian6SelectRight2").value = jl6

            document.getElementById("update-jiaolian6InsertLeft2").value = jiaolian6Insert;

            document.getElementById("update-jiaolian6InsertRight2").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian6InsertLeft2');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian6InsertLeft2").value;

        document.getElementById("update-jiaolian6InsertRight2").value = a;
    })

    // -------4
    var inp2 = document.getElementById('update-jiaoliankongFangxiangLeft3');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num3').value;
        var jlkfxl = document.getElementById('update-jiaoliankongFangxiangLeft3').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('update-jiaoliankongFangxiangRight3').value = jlkfxr;
    })

    var inp2 = document.getElementById('update-lashouShuliangLeft3');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num3').value;
        var lssll = document.getElementById('update-lashouShuliangLeft3').value;
        var lsslr = xdsl - lssll;
        document.getElementById('update-lashouShuliangRight3').value = lsslr;
    })

    var inp3 = document.getElementById('update-jiaolian1SelectLeft3');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('update-jiaolian1SelectLeft3').value;
        document.getElementById('update-jiaolian1SelectRight3').value = jl1sl;
    })

    var inp4 = document.getElementById('update-jiaolian2SelectLeft3');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('update-jiaolian2SelectLeft3').value;
        document.getElementById('update-jiaolian2SelectRight3').value = jl2sl;
    })

    var inp5 = document.getElementById('update-jiaolian3SelectLeft3');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('update-jiaolian3SelectLeft3').value;
        document.getElementById('update-jiaolian3SelectRight3').value = jl3sl;
    })

    var inp6 = document.getElementById('update-jiaolian4SelectLeft3');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('update-jiaolian4SelectLeft3').value;
        document.getElementById('update-jiaolian4SelectRight3').value = jl4sl;
    })

    var inp7 = document.getElementById('update-jiaolian5SelectLeft3');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('update-jiaolian5SelectLeft3').value;
        document.getElementById('update-jiaolian5SelectRight3').value = jl5sl;
    })

    var inp8 = document.getElementById('update-jiaolian6SelectLeft3');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('update-jiaolian6SelectLeft3').value;
        document.getElementById('update-jiaolian6SelectRight3').value = jl6sl;
    })

    var jl3inp = document.getElementById('update-jiaolian1SelectLeft3');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft3').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft3').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft3').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft3').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft3').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft3').value;
        var height = parseFloat(document.getElementById('update-height3').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("update-jiaolian1SelectRight3").value = jl1
            document.getElementById("update-jiaolian1SelectRight3").value = jl1

            document.getElementById("update-jiaolian1InsertLeft3").value = jiaolian1Insert;

            document.getElementById("update-jiaolian1InsertRight3").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian1InsertLeft3');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian1InsertLeft3").value;

        document.getElementById("update-jiaolian1InsertRight3").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian2SelectLeft3');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft3').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft3').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft3').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft3').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft3').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft3').value;
        var height = parseFloat(document.getElementById('update-height3').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("update-jiaolian2SelectRight3").value = jl2

            document.getElementById("update-jiaolian2InsertLeft3").value = jiaolian2Insert;

            document.getElementById("update-jiaolian2InsertRight3").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian2InsertLeft3');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian2InsertLeft3").value;

        document.getElementById("update-jiaolian2InsertRight3").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian3SelectLeft3');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft3').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft3').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft3').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft3').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft3').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft3').value;
        var height = parseFloat(document.getElementById('update-height3').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("update-jiaolian3SelectRight3").value = jl3

            document.getElementById("update-jiaolian3InsertLeft3").value = jiaolian3Insert;

            document.getElementById("update-jiaolian3InsertRight3").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian3InsertLeft3');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian3InsertLeft3").value;

        document.getElementById("update-jiaolian3InsertRight3").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian4SelectLeft3');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft3').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft3').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft3').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft3').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft3').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft3').value;
        var height = parseFloat(document.getElementById('update-height3').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("update-jiaolian4SelectRight3").value = jl4

            document.getElementById("update-jiaolian4InsertLeft3").value = jiaolian4Insert;

            document.getElementById("update-jiaolian4InsertRight3").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian4InsertLeft3');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian4InsertLeft3").value;

        document.getElementById("update-jiaolian4InsertRight3").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian5SelectLeft3');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft3').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft3').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft3').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft3').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft3').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft3').value;
        var height = parseFloat(document.getElementById('update-height3').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("update-jiaolian5SelectRight3").value = jl5

            document.getElementById("update-jiaolian5InsertLeft3").value = jiaolian5Insert;

            document.getElementById("update-jiaolian5InsertRight3").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian5InsertLeft3');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian5InsertLeft3").value;

        document.getElementById("update-jiaolian5InsertRight3").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian6SelectLeft3');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft3').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft3').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft3').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft3').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft3').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft3').value;
        var height = parseFloat(document.getElementById('update-height3').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("update-jiaolian6SelectRight3").value = jl6

            document.getElementById("update-jiaolian6InsertLeft3").value = jiaolian6Insert;

            document.getElementById("update-jiaolian6InsertRight3").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian6InsertLeft3');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian6InsertLeft3").value;

        document.getElementById("update-jiaolian6InsertRight3").value = a;
    })

    // ----------------5
    var inp2 = document.getElementById('update-jiaoliankongFangxiangLeft4');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num4').value;
        var jlkfxl = document.getElementById('update-jiaoliankongFangxiangLeft4').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('update-jiaoliankongFangxiangRight4').value = jlkfxr;
    })

    var inp2 = document.getElementById('update-lashouShuliangLeft4');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num4').value;
        var lssll = document.getElementById('update-lashouShuliangLeft4').value;
        var lsslr = xdsl - lssll;
        document.getElementById('update-lashouShuliangRight4').value = lsslr;
    })

    var inp3 = document.getElementById('update-jiaolian1SelectLeft4');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('update-jiaolian1SelectLeft4').value;
        document.getElementById('update-jiaolian1SelectRight4').value = jl1sl;
    })

    var inp4 = document.getElementById('update-jiaolian2SelectLeft4');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('update-jiaolian2SelectLeft4').value;
        document.getElementById('update-jiaolian2SelectRight4').value = jl2sl;
    })

    var inp5 = document.getElementById('update-jiaolian3SelectLeft4');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('update-jiaolian3SelectLeft4').value;
        document.getElementById('update-jiaolian3SelectRight4').value = jl3sl;
    })

    var inp6 = document.getElementById('update-jiaolian4SelectLeft4');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('update-jiaolian4SelectLeft4').value;
        document.getElementById('update-jiaolian4SelectRight4').value = jl4sl;
    })

    var inp7 = document.getElementById('update-jiaolian5SelectLeft4');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('update-jiaolian5SelectLeft4').value;
        document.getElementById('update-jiaolian5SelectRight4').value = jl5sl;
    })

    var inp8 = document.getElementById('update-jiaolian6SelectLeft4');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('update-jiaolian6SelectLeft4').value;
        document.getElementById('update-jiaolian6SelectRight4').value = jl6sl;
    })

    var jl3inp = document.getElementById('update-jiaolian1SelectLeft4');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft4').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft4').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft4').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft4').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft4').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft4').value;
        var height = parseFloat(document.getElementById('update-height4').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("update-jiaolian1SelectRight4").value = jl1

            document.getElementById("update-jiaolian1InsertLeft4").value = jiaolian1Insert;

            document.getElementById("update-jiaolian1InsertRight4").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian1InsertLeft4');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian1InsertLeft4").value;

        document.getElementById("update-jiaolian1InsertRight4").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian2SelectLeft4');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft4').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft4').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft4').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft4').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft4').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft4').value;
        var height = parseFloat(document.getElementById('update-height4').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("update-jiaolian2SelectRight4").value = jl2

            document.getElementById("update-jiaolian2InsertLeft4").value = jiaolian2Insert;

            document.getElementById("update-jiaolian2InsertRight4").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian2InsertLeft4');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian2InsertLeft4").value;

        document.getElementById("update-jiaolian2InsertRight4").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian3SelectLeft4');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft4').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft4').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft4').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft4').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft4').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft4').value;
        var height = parseFloat(document.getElementById('update-height4').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("update-jiaolian3SelectRight4").value = jl3

            document.getElementById("update-jiaolian3InsertLeft4").value = jiaolian3Insert;

            document.getElementById("update-jiaolian3InsertRight4").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian3InsertLeft4');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian3InsertLeft4").value;

        document.getElementById("update-jiaolian3InsertRight4").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian4SelectLeft4');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft4').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft4').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft4').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft4').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft4').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft4').value;
        var height = parseFloat(document.getElementById('update-height4').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("update-jiaolian4SelectRight4").value = jl4

            document.getElementById("update-jiaolian4InsertLeft4").value = jiaolian4Insert;

            document.getElementById("update-jiaolian4InsertRight4").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian4InsertLeft4');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian4InsertLeft4").value;

        document.getElementById("update-jiaolian4InsertRight4").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian5SelectLeft4');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft4').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft4').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft4').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft4').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft4').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft4').value;
        var height = parseFloat(document.getElementById('update-height4').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("update-jiaolian5SelectRight4").value = jl5

            document.getElementById("update-jiaolian5InsertLeft4").value = jiaolian5Insert;

            document.getElementById("update-jiaolian5InsertRight4").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian5InsertLeft4');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian5InsertLeft4").value;

        document.getElementById("update-jiaolian5InsertRight4").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian6SelectLeft4');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft4').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft4').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft4').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft4').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft4').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft4').value;
        var height = parseFloat(document.getElementById('update-height4').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("update-jiaolian6SelectRight4").value = jl6

            document.getElementById("update-jiaolian6InsertLeft4").value = jiaolian6Insert;

            document.getElementById("update-jiaolian6InsertRight4").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian6InsertLeft4');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian6InsertLeft4").value;

        document.getElementById("update-jiaolian6InsertRight4").value = a;
    })

    // -----------6
    var inp2 = document.getElementById('update-jiaoliankongFangxiangLeft5');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num5').value;
        var jlkfxl = document.getElementById('update-jiaoliankongFangxiangLeft5').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('update-jiaoliankongFangxiangRight5').value = jlkfxr;
    })

    var inp2 = document.getElementById('update-lashouShuliangLeft5');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num5').value;
        var lssll = document.getElementById('update-lashouShuliangLeft5').value;
        var lsslr = xdsl - lssll;
        document.getElementById('update-lashouShuliangRight5').value = lsslr;
    })

    var inp3 = document.getElementById('update-jiaolian1SelectLeft5');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('update-jiaolian1SelectLeft5').value;
        document.getElementById('update-jiaolian1SelectRight5').value = jl1sl;
    })

    var inp4 = document.getElementById('update-jiaolian2SelectLeft5');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('update-jiaolian2SelectLeft5').value;
        document.getElementById('update-jiaolian2SelectRight5').value = jl2sl;
    })

    var inp5 = document.getElementById('update-jiaolian3SelectLeft5');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('update-jiaolian3SelectLeft5').value;
        document.getElementById('update-jiaolian3SelectRight5').value = jl3sl;
    })

    var inp6 = document.getElementById('update-jiaolian4SelectLeft5');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('update-jiaolian4SelectLeft5').value;
        document.getElementById('update-jiaolian4SelectRight5').value = jl4sl;
    })

    var inp7 = document.getElementById('update-jiaolian5SelectLeft5');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('update-jiaolian5SelectLeft5').value;
        document.getElementById('update-jiaolian5SelectRight5').value = jl5sl;
    })

    var inp8 = document.getElementById('update-jiaolian6SelectLeft5');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('update-jiaolian6SelectLeft5').value;
        document.getElementById('update-jiaolian6SelectRight5').value = jl6sl;
    })

    var jl3inp = document.getElementById('update-jiaolian1SelectLeft5');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft5').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft5').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft5').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft5').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft5').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft5').value;
        var height = parseFloat(document.getElementById('update-height5').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("update-jiaolian1SelectRight5").value = jl1

            document.getElementById("update-jiaolian1InsertLeft5").value = jiaolian1Insert;

            document.getElementById("update-jiaolian1InsertRight5").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian1InsertLeft5');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian1InsertLeft5").value;

        document.getElementById("update-jiaolian1InsertRight5").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian2SelectLeft5');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft5').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft5').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft5').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft5').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft5').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft5').value;
        var height = parseFloat(document.getElementById('update-height5').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("update-jiaolian2SelectRight5").value = jl2

            document.getElementById("update-jiaolian2InsertLeft5").value = jiaolian2Insert;

            document.getElementById("update-jiaolian2InsertRight5").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian2InsertLeft5');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian2InsertLeft5").value;

        document.getElementById("update-jiaolian2InsertRight5").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian3SelectLeft5');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft5').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft5').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft5').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft5').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft5').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft5').value;
        var height = parseFloat(document.getElementById('update-height5').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("update-jiaolian3SelectRight5").value = jl3

            document.getElementById("update-jiaolian3InsertLeft5").value = jiaolian3Insert;

            document.getElementById("update-jiaolian3InsertRight5").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian3InsertLeft5');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian3InsertLeft5").value;

        document.getElementById("update-jiaolian3InsertRight5").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian4SelectLeft5');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft5').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft5').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft5').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft5').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft5').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft5').value;
        var height = parseFloat(document.getElementById('update-height5').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("update-jiaolian4SelectRight5").value = jl4

            document.getElementById("update-jiaolian4InsertLeft5").value = jiaolian4Insert;

            document.getElementById("update-jiaolian4InsertRight5").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian4InsertLeft5');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian4InsertLeft5").value;

        document.getElementById("update-jiaolian4InsertRight5").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian5SelectLeft5');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft5').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft5').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft5').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft5').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft5').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft5').value;
        var height = parseFloat(document.getElementById('update-height5').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("update-jiaolian5SelectRight5").value = jl5

            document.getElementById("update-jiaolian5InsertLeft5").value = jiaolian5Insert;

            document.getElementById("update-jiaolian5InsertRight5").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian5InsertLeft5');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian5InsertLeft5").value;

        document.getElementById("update-jiaolian5InsertRight5").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian6SelectLeft5');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft5').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft5').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft5').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft5').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft5').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft5').value;
        var height = parseFloat(document.getElementById('update-height5').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("update-jiaolian6SelectRight5").value = jl6

            document.getElementById("update-jiaolian6InsertLeft5").value = jiaolian6Insert;

            document.getElementById("update-jiaolian6InsertRight5").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian6InsertLeft5');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian6InsertLeft5").value;

        document.getElementById("update-jiaolian6InsertRight5").value = a;
    })

    // -------7
    var inp2 = document.getElementById('update-jiaoliankongFangxiangLeft6');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num6').value;
        var jlkfxl = document.getElementById('update-jiaoliankongFangxiangLeft6').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('update-jiaoliankongFangxiangRight6').value = jlkfxr;
    })

    var inp2 = document.getElementById('update-lashouShuliangLeft6');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num6').value;
        var lssll = document.getElementById('update-lashouShuliangLeft6').value;
        var lsslr = xdsl - lssll;
        document.getElementById('update-lashouShuliangRight6').value = lsslr;
    })

    var inp3 = document.getElementById('update-jiaolian1SelectLeft6');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('update-jiaolian1SelectLeft6').value;
        document.getElementById('update-jiaolian1SelectRight6').value = jl1sl;
    })

    var inp4 = document.getElementById('update-jiaolian2SelectLeft6');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('update-jiaolian2SelectLeft6').value;
        document.getElementById('update-jiaolian2SelectRight6').value = jl2sl;
    })

    var inp5 = document.getElementById('update-jiaolian3SelectLeft6');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('update-jiaolian3SelectLeft6').value;
        document.getElementById('update-jiaolian3SelectRight6').value = jl3sl;
    })

    var inp6 = document.getElementById('update-jiaolian4SelectLeft6');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('update-jiaolian4SelectLeft6').value;
        document.getElementById('update-jiaolian4SelectRight6').value = jl4sl;
    })

    var inp7 = document.getElementById('update-jiaolian5SelectLeft6');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('update-jiaolian5SelectLeft6').value;
        document.getElementById('update-jiaolian5SelectRight6').value = jl5sl;
    })

    var inp8 = document.getElementById('update-jiaolian6SelectLeft6');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('update-jiaolian6SelectLeft6').value;
        document.getElementById('update-jiaolian6SelectRight6').value = jl6sl;
    })

    var jl3inp = document.getElementById('update-jiaolian1SelectLeft6');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft6').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft6').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft6').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft6').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft6').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft6').value;
        var height = parseFloat(document.getElementById('update-height6').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("update-jiaolian1SelectRight6").value = jl1

            document.getElementById("update-jiaolian1InsertLeft6").value = jiaolian1Insert;

            document.getElementById("update-jiaolian1InsertRight6").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian1InsertLeft6');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian1InsertLeft6").value;

        document.getElementById("update-jiaolian1InsertRight6").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian2SelectLeft6');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft6').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft6').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft6').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft6').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft6').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft6').value;
        var height = parseFloat(document.getElementById('update-height6').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("update-jiaolian2SelectRight6").value = jl2

            document.getElementById("update-jiaolian2InsertLeft6").value = jiaolian2Insert;

            document.getElementById("update-jiaolian2InsertRight6").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian2InsertLeft6');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian2InsertLeft6").value;

        document.getElementById("update-jiaolian2InsertRight6").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian3SelectLeft6');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft6').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft6').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft6').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft6').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft6').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft6').value;
        var height = parseFloat(document.getElementById('update-height6').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("update-jiaolian3SelectRight6").value = jl3

            document.getElementById("update-jiaolian3InsertLeft6").value = jiaolian3Insert;

            document.getElementById("update-jiaolian3InsertRight6").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian3InsertLeft6');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian3InsertLeft6").value;

        document.getElementById("update-jiaolian3InsertRight6").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian4SelectLeft6');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft6').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft6').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft6').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft6').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft6').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft6').value;
        var height = parseFloat(document.getElementById('update-height6').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("update-jiaolian4SelectRight6").value = jl4

            document.getElementById("update-jiaolian4InsertLeft6").value = jiaolian4Insert;

            document.getElementById("update-jiaolian4InsertRight6").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian4InsertLeft6');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian4InsertLeft6").value;

        document.getElementById("update-jiaolian4InsertRight6").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian5SelectLeft6');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft6').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft6').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft6').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft6').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft6').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft6').value;
        var height = parseFloat(document.getElementById('update-height6').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("update-jiaolian5SelectRight6").value = jl5

            document.getElementById("update-jiaolian5InsertLeft6").value = jiaolian5Insert;

            document.getElementById("update-jiaolian5InsertRight6").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian5InsertLeft6');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian5InsertLeft6").value;

        document.getElementById("update-jiaolian5InsertRight6").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian6SelectLeft6');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft6').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft6').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft6').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft6').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft6').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft6').value;
        var height = parseFloat(document.getElementById('update-height6').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("update-jiaolian6SelectRight6").value = jl6

            document.getElementById("update-jiaolian6InsertLeft6").value = jiaolian6Insert;

            document.getElementById("update-jiaolian6InsertRight6").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian6InsertLeft6');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian6InsertLeft6").value;

        document.getElementById("update-jiaolian6InsertRight6").value = a;
    })

    // ------8
    var inp2 = document.getElementById('update-jiaoliankongFangxiangLeft7');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num7').value;
        var jlkfxl = document.getElementById('update-jiaoliankongFangxiangLeft7').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('update-jiaoliankongFangxiangRight7').value = jlkfxr;
    })

    var inp2 = document.getElementById('update-lashouShuliangLeft7');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num7').value;
        var lssll = document.getElementById('update-lashouShuliangLeft7').value;
        var lsslr = xdsl - lssll;
        document.getElementById('update-lashouShuliangRight7').value = lsslr;
    })

    var inp3 = document.getElementById('update-jiaolian1SelectLeft7');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('update-jiaolian1SelectLeft7').value;
        document.getElementById('update-jiaolian1SelectRight7').value = jl1sl;
    })

    var inp4 = document.getElementById('update-jiaolian2SelectLeft7');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('update-jiaolian2SelectLeft7').value;
        document.getElementById('update-jiaolian2SelectRight7').value = jl2sl;
    })

    var inp5 = document.getElementById('update-jiaolian3SelectLeft6');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('update-jiaolian3SelectLeft6').value;
        document.getElementById('update-jiaolian3SelectRight6').value = jl3sl;
    })

    var inp6 = document.getElementById('update-jiaolian4SelectLeft7');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('update-jiaolian4SelectLeft7').value;
        document.getElementById('update-jiaolian4SelectRight7').value = jl4sl;
    })

    var inp7 = document.getElementById('update-jiaolian5SelectLeft7');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('update-jiaolian5SelectLeft7').value;
        document.getElementById('update-jiaolian5SelectRight7').value = jl5sl;
    })

    var inp8 = document.getElementById('update-jiaolian6SelectLeft7');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('update-jiaolian6SelectLeft7').value;
        document.getElementById('update-jiaolian6SelectRight7').value = jl6sl;
    })

    var jl3inp = document.getElementById('update-jiaolian1SelectLeft7');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft7').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft7').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft7').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft7').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft7').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft7').value;
        var height = parseFloat(document.getElementById('update-height7').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("update-jiaolian1SelectRight7").value = jl1

            document.getElementById("update-jiaolian1InsertLeft7").value = jiaolian1Insert;

            document.getElementById("update-jiaolian1InsertRight7").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian1InsertLeft7');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian1InsertLeft7").value;

        document.getElementById("update-jiaolian1InsertRight7").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian2SelectLeft7');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft7').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft7').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft7').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft7').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft7').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft7').value;
        var height = parseFloat(document.getElementById('update-height7').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("update-jiaolian2SelectRight7").value = jl2

            document.getElementById("update-jiaolian2InsertLeft7").value = jiaolian2Insert;

            document.getElementById("update-jiaolian2InsertRight7").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian2InsertLeft7');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian2InsertLeft7").value;

        document.getElementById("update-jiaolian2InsertRight7").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian3SelectLeft7');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft7').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft7').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft7').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft7').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft7').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft7').value;
        var height = parseFloat(document.getElementById('update-height7').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("update-jiaolian3SelectRight7").value = jl3

            document.getElementById("update-jiaolian3InsertLeft7").value = jiaolian3Insert;

            document.getElementById("update-jiaolian3InsertRight7").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian3InsertLeft7');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian3InsertLeft7").value;

        document.getElementById("update-jiaolian3InsertRight7").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian4SelectLeft7');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft7').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft7').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft7').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft7').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft7').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft7').value;
        var height = parseFloat(document.getElementById('update-height7').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("update-jiaolian4SelectRight7").value = jl4

            document.getElementById("update-jiaolian4InsertLeft7").value = jiaolian4Insert;

            document.getElementById("update-jiaolian4InsertRight7").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian4InsertLeft7');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian4InsertLeft7").value;

        document.getElementById("update-jiaolian4InsertRight7").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian5SelectLeft7');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft7').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft7').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft7').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft7').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft7').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft7').value;
        var height = parseFloat(document.getElementById('update-height7').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("update-jiaolian5SelectRight7").value = jl5

            document.getElementById("update-jiaolian5InsertLeft7").value = jiaolian5Insert;

            document.getElementById("update-jiaolian5InsertRight7").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian5InsertLeft7');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian5InsertLeft7").value;

        document.getElementById("update-jiaolian5InsertRight7").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian6SelectLeft7');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft7').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft7').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft7').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft7').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft7').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft7').value;
        var height = parseFloat(document.getElementById('update-height7').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("update-jiaolian6SelectRight7").value = jl6

            document.getElementById("update-jiaolian6InsertLeft7").value = jiaolian6Insert;

            document.getElementById("update-jiaolian6InsertRight7").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian6InsertLeft7');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian6InsertLeft7").value;

        document.getElementById("update-jiaolian6InsertRight7").value = a;
    })

    // ------9
    var inp2 = document.getElementById('update-jiaoliankongFangxiangLeft8');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num8').value;
        var jlkfxl = document.getElementById('update-jiaoliankongFangxiangLeft8').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('update-jiaoliankongFangxiangRight8').value = jlkfxr;
    })

    var inp2 = document.getElementById('update-lashouShuliangLeft8');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num8').value;
        var lssll = document.getElementById('update-lashouShuliangLeft8').value;
        var lsslr = xdsl - lssll;
        document.getElementById('update-lashouShuliangRight8').value = lsslr;
    })

    var inp3 = document.getElementById('update-jiaolian1SelectLeft8');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('update-jiaolian1SelectLeft8').value;
        document.getElementById('update-jiaolian1SelectRight8').value = jl1sl;
    })

    var inp4 = document.getElementById('update-jiaolian2SelectLeft8');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('update-jiaolian2SelectLeft8').value;
        document.getElementById('update-jiaolian2SelectRight8').value = jl2sl;
    })

    var inp5 = document.getElementById('update-jiaolian3SelectLeft8');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('update-jiaolian3SelectLeft8').value;
        document.getElementById('update-jiaolian3SelectRight8').value = jl3sl;
    })

    var inp6 = document.getElementById('update-jiaolian4SelectLeft8');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('update-jiaolian4SelectLeft8').value;
        document.getElementById('update-jiaolian4SelectRight8').value = jl4sl;
    })

    var inp7 = document.getElementById('update-jiaolian5SelectLeft8');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('update-jiaolian5SelectLeft8').value;
        document.getElementById('update-jiaolian5SelectRight8').value = jl5sl;
    })

    var inp8 = document.getElementById('update-jiaolian6SelectLeft8');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('update-jiaolian6SelectLeft8').value;
        document.getElementById('update-jiaolian6SelectRight8').value = jl6sl;
    })

    var jl3inp = document.getElementById('update-jiaolian1SelectLeft8');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft8').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft8').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft8').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft8').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft8').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft8').value;
        var height = parseFloat(document.getElementById('update-height8').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("update-jiaolian1SelectRight8").value = jl1

            document.getElementById("update-jiaolian1InsertLeft8").value = jiaolian1Insert;

            document.getElementById("update-jiaolian1InsertRight8").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian1InsertLeft8');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian1InsertLeft8").value;

        document.getElementById("update-jiaolian1InsertRight8").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian2SelectLeft8');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft8').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft8').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft8').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft8').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft8').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft8').value;
        var height = parseFloat(document.getElementById('update-height8').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("update-jiaolian2SelectRight8").value = jl2

            document.getElementById("update-jiaolian2InsertLeft8").value = jiaolian2Insert;

            document.getElementById("update-jiaolian2InsertRight8").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian2InsertLeft8');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian2InsertLeft8").value;

        document.getElementById("update-jiaolian2InsertRight8").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian3SelectLeft8');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft8').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft8').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft8').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft8').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft8').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft8').value;
        var height = parseFloat(document.getElementById('update-height8').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("update-jiaolian3SelectRight8").value = jl3

            document.getElementById("update-jiaolian3InsertLeft8").value = jiaolian3Insert;

            document.getElementById("update-jiaolian3InsertRight8").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian3InsertLeft8');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian3InsertLeft8").value;

        document.getElementById("update-jiaolian3InsertRight8").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian4SelectLeft8');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft8').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft8').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft8').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft8').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft8').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft8').value;
        var height = parseFloat(document.getElementById('update-height8').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("update-jiaolian4SelectRight8").value = jl4

            document.getElementById("update-jiaolian4InsertLeft8").value = jiaolian4Insert;

            document.getElementById("update-jiaolian4InsertRight8").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian4InsertLeft8');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian4InsertLeft8").value;

        document.getElementById("update-jiaolian4InsertRight8").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian5SelectLeft8');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft8').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft8').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft8').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft8').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft8').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft8').value;
        var height = parseFloat(document.getElementById('update-height8').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("update-jiaolian5SelectRight8").value = jl5

            document.getElementById("update-jiaolian5InsertLeft8").value = jiaolian5Insert;

            document.getElementById("update-jiaolian5InsertRight8").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian5InsertLeft8');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian5InsertLeft8").value;

        document.getElementById("update-jiaolian5InsertRight8").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian6SelectLeft8');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft8').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft8').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft8').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft8').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft8').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft8').value;
        var height = parseFloat(document.getElementById('update-height8').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("update-jiaolian6SelectRight8").value = jl6

            document.getElementById("update-jiaolian6InsertLeft8").value = jiaolian6Insert;

            document.getElementById("update-jiaolian6InsertRight8").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian6InsertLeft8');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian6InsertLeft8").value;

        document.getElementById("update-jiaolian6InsertRight8").value = jiaolian6Insert;
    })

    // ----------10
    var inp2 = document.getElementById('update-jiaoliankongFangxiangLeft9');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num9').value;
        var jlkfxl = document.getElementById('update-jiaoliankongFangxiangLeft9').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('update-jiaoliankongFangxiangRight9').value = jlkfxr;
    })

    var inp2 = document.getElementById('update-lashouShuliangLeft9');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num9').value;
        var lssll = document.getElementById('update-lashouShuliangLeft9').value;
        var lsslr = xdsl - lssll;
        document.getElementById('update-lashouShuliangRight9').value = lsslr;
    })

    var inp3 = document.getElementById('update-jiaolian1SelectLeft9');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('update-jiaolian1SelectLeft9').value;
        document.getElementById('update-jiaolian1SelectRight9').value = jl1sl;
    })

    var inp4 = document.getElementById('update-jiaolian2SelectLeft9');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('update-jiaolian2SelectLeft9').value;
        document.getElementById('update-jiaolian2SelectRight9').value = jl2sl;
    })

    var inp5 = document.getElementById('update-jiaolian3SelectLeft9');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('update-jiaolian3SelectLeft9').value;
        document.getElementById('update-jiaolian3SelectRight9').value = jl3sl;
    })

    var inp6 = document.getElementById('update-jiaolian4SelectLeft9');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('update-jiaolian4SelectLeft9').value;
        document.getElementById('update-jiaolian4SelectRight9').value = jl4sl;
    })

    var inp7 = document.getElementById('update-jiaolian5SelectLeft9');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('update-jiaolian5SelectLeft9').value;
        document.getElementById('update-jiaolian5SelectRight9').value = jl5sl;
    })

    var inp8 = document.getElementById('update-jiaolian6SelectLeft9');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('update-jiaolian6SelectLeft9').value;
        document.getElementById('update-jiaolian6SelectRight9').value = jl6sl;
    })

    var jl3inp = document.getElementById('update-jiaolian1SelectLeft9');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft9').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft9').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft9').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft9').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft9').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft9').value;
        var height = parseFloat(document.getElementById('update-height9').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("update-jiaolian1SelectRight9").value = jl1

            document.getElementById("update-jiaolian1InsertLeft9").value = jiaolian1Insert;

            document.getElementById("update-jiaolian1InsertRight9").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian1InsertLeft9');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian1InsertLeft9").value;

        document.getElementById("update-jiaolian1InsertRight9").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian2SelectLeft9');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft9').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft9').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft9').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft9').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft9').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft9').value;
        var height = parseFloat(document.getElementById('update-height9').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("update-jiaolian2SelectRight9").value = jl2

            document.getElementById("update-jiaolian2InsertLeft9").value = jiaolian2Insert;

            document.getElementById("update-jiaolian2InsertRight9").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian2InsertLeft9');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian2InsertLeft9").value;

        document.getElementById("update-jiaolian2InsertRight9").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian3SelectLeft9');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft9').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft9').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft9').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft9').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft9').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft9').value;
        var height = parseFloat(document.getElementById('update-height9').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("update-jiaolian3SelectRight9").value = jl3

            document.getElementById("update-jiaolian3InsertLeft9").value = jiaolian3Insert;

            document.getElementById("update-jiaolian3InsertRight9").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian3InsertLeft9');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian3InsertLeft9").value;

        document.getElementById("update-jiaolian3InsertRight9").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian4SelectLeft9');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft9').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft9').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft9').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft9').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft9').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft9').value;
        var height = parseFloat(document.getElementById('update-height9').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("update-jiaolian4SelectRight9").value = jl4

            document.getElementById("update-jiaolian4InsertLeft9").value = jiaolian4Insert;

            document.getElementById("update-jiaolian4InsertRight9").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian4InsertLeft9');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian4InsertLeft9").value;

        document.getElementById("update-jiaolian4InsertRight9").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian5SelectLeft9');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft9').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft9').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft9').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft9').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft9').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft9').value;
        var height = parseFloat(document.getElementById('update-height9').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("update-jiaolian5SelectRight9").value = jl5

            document.getElementById("update-jiaolian5InsertLeft9").value = jiaolian5Insert;

            document.getElementById("update-jiaolian5InsertRight9").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian5InsertLeft9');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian5InsertLeft9").value;

        document.getElementById("update-jiaolian5InsertRight9").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian6SelectLeft9');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft9').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft9').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft9').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft9').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft9').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft9').value;
        var height = parseFloat(document.getElementById('update-height9').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("update-jiaolian6SelectRight9").value = jl6

            document.getElementById("update-jiaolian6InsertLeft9").value = jiaolian6Insert;

            document.getElementById("update-jiaolian6InsertRight9").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian6InsertLeft9');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian6InsertLeft9").value;

        document.getElementById("update-jiaolian6InsertRight9").value = a;
    })

    // -----------11
    var inp2 = document.getElementById('update-jiaoliankongFangxiangLeft10');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num10').value;
        var jlkfxl = document.getElementById('update-jiaoliankongFangxiangLeft10').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('update-jiaoliankongFangxiangRight10').value = jlkfxr;
    })

    var inp2 = document.getElementById('update-lashouShuliangLeft10');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num10').value;
        var lssll = document.getElementById('update-lashouShuliangLeft10').value;
        var lsslr = xdsl - lssll;
        document.getElementById('update-lashouShuliangRight10').value = lsslr;
    })

    var inp3 = document.getElementById('update-jiaolian1SelectLeft10');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('update-jiaolian1SelectLeft10').value;
        document.getElementById('update-jiaolian1SelectRight10').value = jl1sl;
    })

    var inp4 = document.getElementById('update-jiaolian2SelectLeft10');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('update-jiaolian2SelectLeft10').value;
        document.getElementById('update-jiaolian2SelectRight10').value = jl2sl;
    })

    var inp5 = document.getElementById('update-jiaolian3SelectLeft10');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('update-jiaolian3SelectLeft10').value;
        document.getElementById('update-jiaolian3SelectRight10').value = jl3sl;
    })

    var inp6 = document.getElementById('update-jiaolian4SelectLeft10');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('update-jiaolian4SelectLeft10').value;
        document.getElementById('update-jiaolian4SelectRight10').value = jl4sl;
    })

    var inp7 = document.getElementById('update-jiaolian5SelectLeft10');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('update-jiaolian5SelectLeft10').value;
        document.getElementById('update-jiaolian5SelectRight10').value = jl5sl;
    })

    var inp8 = document.getElementById('update-jiaolian6SelectLeft10');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('update-jiaolian6SelectLeft10').value;
        document.getElementById('update-jiaolian6SelectRight10').value = jl6sl;
    })

    var jl3inp = document.getElementById('update-jiaolian1SelectLeft10');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft10').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft10').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft10').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft10').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft10').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft10').value;
        var height = parseFloat(document.getElementById('update-height10').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("update-jiaolian1SelectRight10").value = jl1

            document.getElementById("update-jiaolian1InsertLeft10").value = jiaolian1Insert;

            document.getElementById("update-jiaolian1InsertRight10").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian1InsertLeft10');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian1InsertLeft10").value;

        document.getElementById("update-jiaolian1InsertRight10").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian2SelectLeft10');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft10').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft10').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft10').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft10').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft10').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft10').value;
        var height = parseFloat(document.getElementById('update-height10').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("update-jiaolian2SelectRight10").value = jl2

            document.getElementById("update-jiaolian2InsertLeft10").value = jiaolian2Insert;

            document.getElementById("update-jiaolian2InsertRight10").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian2InsertLeft10');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian2InsertLeft10").value;

        document.getElementById("update-jiaolian2InsertRight10").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian3SelectLeft10');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft10').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft10').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft10').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft10').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft10').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft10').value;
        var height = parseFloat(document.getElementById('update-height10').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("update-jiaolian3SelectRight10").value = jl3

            document.getElementById("update-jiaolian3InsertLeft10").value = jiaolian3Insert;

            document.getElementById("update-jiaolian3InsertRight10").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian3InsertLeft10');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian3InsertLeft10").value;

        document.getElementById("update-jiaolian3InsertRight10").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian4SelectLeft10');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft10').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft10').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft10').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft10').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft10').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft10').value;
        var height = parseFloat(document.getElementById('update-height10').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("update-jiaolian4SelectRight10").value = jl4

            document.getElementById("update-jiaolian4InsertLeft10").value = jiaolian4Insert;

            document.getElementById("update-jiaolian4InsertRight10").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian4InsertLeft10');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian4InsertLeft10").value;

        document.getElementById("update-jiaolian4InsertRight10").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian5SelectLeft10');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft10').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft10').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft10').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft10').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft10').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft10').value;
        var height = parseFloat(document.getElementById('update-height10').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("update-jiaolian5SelectRight10").value = jl5

            document.getElementById("update-jiaolian5InsertLeft10").value = jiaolian5Insert;

            document.getElementById("update-jiaolian5InsertRight10").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian5InsertLeft10');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian5InsertLeft10").value;

        document.getElementById("update-jiaolian5InsertRight10").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian6SelectLeft10');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft10').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft10').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft10').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft10').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft10').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft10').value;
        var height = parseFloat(document.getElementById('update-height10').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("update-jiaolian6SelectRight10").value = jl6

            document.getElementById("update-jiaolian6InsertLeft10").value = jiaolian6Insert;

            document.getElementById("update-jiaolian6InsertRight10").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian6InsertLeft10');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian6InsertLeft10").value;

        document.getElementById("update-jiaolian6InsertRight10").value = a;
    })

    // --------------12
    var inp2 = document.getElementById('update-jiaoliankongFangxiangLeft11');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num11').value;
        var jlkfxl = document.getElementById('update-jiaoliankongFangxiangLeft11').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('update-jiaoliankongFangxiangRight11').value = jlkfxr;
    })

    var inp2 = document.getElementById('update-lashouShuliangLeft11');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num11').value;
        var lssll = document.getElementById('update-lashouShuliangLeft11').value;
        var lsslr = xdsl - lssll;
        document.getElementById('update-lashouShuliangRight11').value = lsslr;
    })

    var inp3 = document.getElementById('update-jiaolian1SelectLeft11');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('update-jiaolian1SelectLeft11').value;
        document.getElementById('update-jiaolian1SelectRight11').value = jl1sl;
    })

    var inp4 = document.getElementById('update-jiaolian2SelectLeft11');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('update-jiaolian2SelectLeft11').value;
        document.getElementById('update-jiaolian2SelectRight11').value = jl2sl;
    })

    var inp5 = document.getElementById('update-jiaolian3SelectLeft11');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('update-jiaolian3SelectLeft11').value;
        document.getElementById('update-jiaolian3SelectRight11').value = jl3sl;
    })

    var inp6 = document.getElementById('update-jiaolian4SelectLeft11');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('update-jiaolian4SelectLeft11').value;
        document.getElementById('update-jiaolian4SelectRight11').value = jl4sl;
    })

    var inp7 = document.getElementById('update-jiaolian5SelectLeft11');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('update-jiaolian5SelectLeft11').value;
        document.getElementById('update-jiaolian5SelectRight11').value = jl5sl;
    })

    var inp8 = document.getElementById('update-jiaolian6SelectLeft11');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('update-jiaolian6SelectLeft11').value;
        document.getElementById('update-jiaolian6SelectRight11').value = jl6sl;
    })

    var jl3inp = document.getElementById('update-jiaolian1SelectLeft11');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft11').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft11').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft11').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft11').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft11').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft11').value;
        var height = parseFloat(document.getElementById('update-height11').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("update-jiaolian1SelectRight11").value = jl1

            document.getElementById("update-jiaolian1InsertLeft11").value = jiaolian1Insert;

            document.getElementById("update-jiaolian1InsertRight11").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian1InsertLeft11');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian1InsertLeft11").value;

        document.getElementById("update-jiaolian1InsertRight11").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian2SelectLeft11');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft11').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft11').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft11').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft11').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft11').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft11').value;
        var height = parseFloat(document.getElementById('update-height11').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("update-jiaolian2SelectRight11").value = jl2

            document.getElementById("update-jiaolian2InsertLeft11").value = jiaolian2Insert;

            document.getElementById("update-jiaolian2InsertRight11").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian2InsertLeft11');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian2InsertLeft11").value;

        document.getElementById("update-jiaolian2InsertRight11").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian3SelectLeft11');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft11').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft11').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft11').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft11').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft11').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft11').value;
        var height = parseFloat(document.getElementById('update-height11').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("update-jiaolian3SelectRight11").value = jl3

            document.getElementById("update-jiaolian3InsertLeft11").value = jiaolian3Insert;

            document.getElementById("update-jiaolian3InsertRight11").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian3InsertLeft11');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian3InsertLeft11").value;

        document.getElementById("update-jiaolian3InsertRight11").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian4SelectLeft11');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft11').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft11').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft11').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft11').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft11').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft11').value;
        var height = parseFloat(document.getElementById('update-height11').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("update-jiaolian4SelectRight11").value = jl4

            document.getElementById("update-jiaolian4InsertLeft11").value = jiaolian4Insert;

            document.getElementById("update-jiaolian4InsertRight11").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian4InsertLeft11');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian4InsertLeft11").value;

        document.getElementById("update-jiaolian4InsertRight11").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian5SelectLeft11');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft11').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft11').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft11').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft11').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft11').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft11').value;
        var height = parseFloat(document.getElementById('update-height11').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("update-jiaolian5SelectRight11").value = jl5

            document.getElementById("update-jiaolian5InsertLeft11").value = jiaolian5Insert;

            document.getElementById("update-jiaolian5InsertRight11").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian5InsertLeft11');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian5InsertLeft11").value;

        document.getElementById("update-jiaolian5InsertRight11").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian6SelectLeft11');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft11').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft11').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft11').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft11').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft11').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft11').value;
        var height = parseFloat(document.getElementById('update-height11').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("update-jiaolian6SelectRight11").value = jl6

            document.getElementById("update-jiaolian6InsertLeft11").value = jiaolian6Insert;

            document.getElementById("update-jiaolian6InsertRight11").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian6InsertLeft11');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian6InsertLeft11").value;

        document.getElementById("update-jiaolian6InsertRight11").value = a;
    })

    // --------------13
    var inp2 = document.getElementById('update-jiaoliankongFangxiangLeft12');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num12').value;
        var jlkfxl = document.getElementById('update-jiaoliankongFangxiangLeft12').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('update-jiaoliankongFangxiangRight12').value = jlkfxr;
    })

    var inp2 = document.getElementById('update-lashouShuliangLeft12');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num12').value;
        var lssll = document.getElementById('update-lashouShuliangLeft12').value;
        var lsslr = xdsl - lssll;
        document.getElementById('update-lashouShuliangRight12').value = lsslr;
    })

    var inp3 = document.getElementById('update-jiaolian1SelectLeft12');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('update-jiaolian1SelectLeft12').value;
        document.getElementById('update-jiaolian1SelectRight12').value = jl1sl;
    })

    var inp4 = document.getElementById('update-jiaolian2SelectLeft12');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('update-jiaolian2SelectLeft12').value;
        document.getElementById('update-jiaolian2SelectRight12').value = jl2sl;
    })

    var inp5 = document.getElementById('update-jiaolian3SelectLeft12');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('update-jiaolian3SelectLeft12').value;
        document.getElementById('update-jiaolian3SelectRight12').value = jl3sl;
    })

    var inp6 = document.getElementById('update-jiaolian4SelectLeft12');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('update-jiaolian4SelectLeft12').value;
        document.getElementById('update-jiaolian4SelectRight12').value = jl4sl;
    })

    var inp7 = document.getElementById('update-jiaolian5SelectLeft12');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('update-jiaolian5SelectLeft12').value;
        document.getElementById('update-jiaolian5SelectRight12').value = jl5sl;
    })

    var inp8 = document.getElementById('update-jiaolian6SelectLeft12');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('update-jiaolian6SelectLeft12').value;
        document.getElementById('update-jiaolian6SelectRight12').value = jl6sl;
    })

    var jl3inp = document.getElementById('update-jiaolian1SelectLeft12');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft12').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft12').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft12').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft12').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft12').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft12').value;
        var height = parseFloat(document.getElementById('update-height12').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("update-jiaolian1SelectRight12").value = jl1

            document.getElementById("update-jiaolian1InsertLeft12").value = jiaolian1Insert;

            document.getElementById("update-jiaolian1InsertRight12").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian1InsertLeft12');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian1InsertLeft12").value;

        document.getElementById("update-jiaolian1InsertRight12").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian2SelectLeft12');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft12').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft12').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft12').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft12').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft12').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft12').value;
        var height = parseFloat(document.getElementById('update-height12').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("update-jiaolian2SelectRight12").value = jl2

            document.getElementById("update-jiaolian2InsertLeft12").value = jiaolian2Insert;

            document.getElementById("update-jiaolian2InsertRight12").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian2InsertLeft12');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian2InsertLeft12").value;

        document.getElementById("update-jiaolian2InsertRight12").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian3SelectLeft12');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft12').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft12').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft12').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft12').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft12').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft12').value;
        var height = parseFloat(document.getElementById('update-height12').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("update-jiaolian3SelectRight12").value = jl3

            document.getElementById("update-jiaolian3InsertLeft12").value = jiaolian3Insert;

            document.getElementById("update-jiaolian3InsertRight12").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian3InsertLeft12');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian3InsertLeft12").value;

        document.getElementById("update-jiaolian3InsertRight12").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian4SelectLeft12');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft12').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft12').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft12').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft12').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft12').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft12').value;
        var height = parseFloat(document.getElementById('update-height12').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("update-jiaolian4SelectRight12").value = jl4

            document.getElementById("update-jiaolian4InsertLeft12").value = jiaolian4Insert;

            document.getElementById("update-jiaolian4InsertRight12").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian4InsertLeft12');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian4InsertLeft12").value;

        document.getElementById("update-jiaolian4InsertRight12").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian5SelectLeft12');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft12').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft12').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft12').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft12').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft12').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft12').value;
        var height = parseFloat(document.getElementById('update-height12').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("update-jiaolian5SelectRight12").value = jl5

            document.getElementById("update-jiaolian5InsertLeft12").value = jiaolian5Insert;

            document.getElementById("update-jiaolian5InsertRight12").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian5InsertLeft12');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian5InsertLeft12").value;

        document.getElementById("update-jiaolian5InsertRight12").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian6SelectLeft12');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft12').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft12').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft12').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft12').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft12').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft12').value;
        var height = parseFloat(document.getElementById('update-height12').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("update-jiaolian6SelectRight12").value = jl6

            document.getElementById("update-jiaolian6InsertLeft12").value = jiaolian6Insert;

            document.getElementById("update-jiaolian6InsertRight12").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian6InsertLeft12');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian6InsertLeft12").value;

        document.getElementById("update-jiaolian6InsertRight12").value = a;
    })

    // -------14
    var inp2 = document.getElementById('update-jiaoliankongFangxiangLeft13');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num13').value;
        var jlkfxl = document.getElementById('update-jiaoliankongFangxiangLeft13').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('update-jiaoliankongFangxiangRight13').value = jlkfxr;
    })

    var inp2 = document.getElementById('update-lashouShuliangLeft13');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num13').value;
        var lssll = document.getElementById('update-lashouShuliangLeft13').value;
        var lsslr = xdsl - lssll;
        document.getElementById('update-lashouShuliangRight13').value = lsslr;
    })

    var inp3 = document.getElementById('update-jiaolian1SelectLeft13');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('update-jiaolian1SelectLeft13').value;
        document.getElementById('update-jiaolian1SelectRight13').value = jl1sl;
    })

    var inp4 = document.getElementById('update-jiaolian2SelectLeft13');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('update-jiaolian2SelectLeft13').value;
        document.getElementById('update-jiaolian2SelectRight13').value = jl2sl;
    })

    var inp5 = document.getElementById('update-jiaolian3SelectLeft13');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('update-jiaolian3SelectLeft13').value;
        document.getElementById('update-jiaolian3SelectRight13').value = jl3sl;
    })

    var inp6 = document.getElementById('update-jiaolian4SelectLeft13');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('update-jiaolian4SelectLeft13').value;
        document.getElementById('update-jiaolian4SelectRight13').value = jl4sl;
    })

    var inp7 = document.getElementById('update-jiaolian5SelectLeft13');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('update-jiaolian5SelectLeft13').value;
        document.getElementById('update-jiaolian5SelectRight13').value = jl5sl;
    })

    var inp8 = document.getElementById('update-jiaolian6SelectLeft13');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('update-jiaolian6SelectLeft13').value;
        document.getElementById('update-jiaolian6SelectRight13').value = jl6sl;
    })

    var jl3inp = document.getElementById('update-jiaolian1SelectLeft13');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft13').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft13').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft13').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft13').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft13').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft13').value;
        var height = parseFloat(document.getElementById('update-height13').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("update-jiaolian1SelectRight13").value = jl1

            document.getElementById("update-jiaolian1InsertLeft13").value = jiaolian1Insert;

            document.getElementById("update-jiaolian1InsertRight13").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian1InsertLeft13');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian1InsertLeft13").value;

        document.getElementById("update-jiaolian1InsertRight13").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian2SelectLeft13');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft13').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft13').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft13').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft13').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft13').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft13').value;
        var height = parseFloat(document.getElementById('update-height13').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("update-jiaolian2SelectRight13").value = jl2

            document.getElementById("update-jiaolian2InsertLeft13").value = jiaolian2Insert;

            document.getElementById("update-jiaolian2InsertRight13").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian2InsertLeft13');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian2InsertLeft13").value;

        document.getElementById("update-jiaolian2InsertRight13").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian3SelectLeft13');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft13').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft13').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft13').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft13').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft13').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft13').value;
        var height = parseFloat(document.getElementById('update-height13').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("update-jiaolian3SelectRight13").value = jl3

            document.getElementById("update-jiaolian3InsertLeft13").value = jiaolian3Insert;

            document.getElementById("update-jiaolian3InsertRight13").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian3InsertLeft13');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian3InsertLeft13").value;

        document.getElementById("update-jiaolian3InsertRight13").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian4SelectLeft13');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft13').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft13').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft13').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft13').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft13').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft13').value;
        var height = parseFloat(document.getElementById('update-height13').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("update-jiaolian4SelectRight13").value = jl4

            document.getElementById("update-jiaolian4InsertLeft13").value = jiaolian4Insert;

            document.getElementById("update-jiaolian4InsertRight13").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian4InsertLeft13');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian4InsertLeft13").value;

        document.getElementById("update-jiaolian4InsertRight13").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian5SelectLeft13');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft13').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft13').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft13').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft13').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft13').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft13').value;
        var height = parseFloat(document.getElementById('update-height13').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("update-jiaolian5SelectRight13").value = jl5

            document.getElementById("update-jiaolian5InsertLeft13").value = jiaolian5Insert;

            document.getElementById("update-jiaolian5InsertRight13").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian5InsertLeft13');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian5InsertLeft13").value;

        document.getElementById("update-jiaolian5InsertRight13").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian6SelectLeft13');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft13').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft13').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft13').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft13').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft13').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft13').value;
        var height = parseFloat(document.getElementById('update-height13').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("update-jiaolian6SelectRight13").value = jl6

            document.getElementById("update-jiaolian6InsertLeft13").value = jiaolian6Insert;

            document.getElementById("update-jiaolian6InsertRight13").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian6InsertLeft13');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian6InsertLeft13").value;

        document.getElementById("update-jiaolian6InsertRight13").value = a;
    })

    // -------15
    var inp2 = document.getElementById('update-jiaoliankongFangxiangLeft14');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num14').value;
        var jlkfxl = document.getElementById('update-jiaoliankongFangxiangLeft14').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('update-jiaoliankongFangxiangRight14').value = jlkfxr;
    })

    var inp2 = document.getElementById('update-lashouShuliangLeft14');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num14').value;
        var lssll = document.getElementById('update-lashouShuliangLeft14').value;
        var lsslr = xdsl - lssll;
        document.getElementById('update-lashouShuliangRight14').value = lsslr;
    })

    var inp3 = document.getElementById('update-jiaolian1SelectLeft14');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('update-jiaolian1SelectLeft14').value;
        document.getElementById('update-jiaolian1SelectRight14').value = jl1sl;
    })

    var inp4 = document.getElementById('update-jiaolian2SelectLeft14');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('update-jiaolian2SelectLeft14').value;
        document.getElementById('update-jiaolian2SelectRight14').value = jl2sl;
    })

    var inp5 = document.getElementById('update-jiaolian3SelectLeft14');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('update-jiaolian3SelectLeft14').value;
        document.getElementById('update-jiaolian3SelectRight14').value = jl3sl;
    })

    var inp6 = document.getElementById('update-jiaolian4SelectLeft14');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('update-jiaolian4SelectLeft14').value;
        document.getElementById('update-jiaolian4SelectRight14').value = jl4sl;
    })

    var inp7 = document.getElementById('update-jiaolian5SelectLeft14');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('update-jiaolian5SelectLeft14').value;
        document.getElementById('update-jiaolian5SelectRight14').value = jl5sl;
    })

    var inp8 = document.getElementById('update-jiaolian6SelectLeft14');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('update-jiaolian6SelectLeft14').value;
        document.getElementById('update-jiaolian6SelectRight14').value = jl6sl;
    })

    var jl3inp = document.getElementById('update-jiaolian1SelectLeft14');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft14').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft14').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft14').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft14').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft14').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft14').value;
        var height = parseFloat(document.getElementById('update-height14').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("update-jiaolian1SelectRight14").value = jl1

            document.getElementById("update-jiaolian1InsertLeft14").value = jiaolian1Insert;

            document.getElementById("update-jiaolian1InsertRight14").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian1InsertLeft14');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian1InsertLeft14").value;

        document.getElementById("update-jiaolian1InsertRight14").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian2SelectLeft14');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft14').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft14').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft14').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft14').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft14').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft14').value;
        var height = parseFloat(document.getElementById('update-height14').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("update-jiaolian2SelectRight14").value = jl2

            document.getElementById("update-jiaolian2InsertLeft14").value = jiaolian2Insert;

            document.getElementById("update-jiaolian2InsertRight14").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian2InsertLeft14');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian2InsertLeft14").value;

        document.getElementById("update-jiaolian2InsertRight14").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian3SelectLeft14');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft14').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft14').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft14').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft14').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft14').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft14').value;
        var height = parseFloat(document.getElementById('update-height14').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("update-jiaolian3SelectRight14").value = jl3

            document.getElementById("update-jiaolian3InsertLeft14").value = jiaolian3Insert;

            document.getElementById("update-jiaolian3InsertRight14").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian3InsertLeft14');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian3InsertLeft14").value;

        document.getElementById("update-jiaolian3InsertRight14").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian4SelectLeft14');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft14').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft14').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft14').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft14').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft14').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft14').value;
        var height = parseFloat(document.getElementById('update-height14').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("update-jiaolian4SelectRight14").value = jl4

            document.getElementById("update-jiaolian4InsertLeft14").value = jiaolian4Insert;

            document.getElementById("update-jiaolian4InsertRight14").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian4InsertLeft14');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian4InsertLeft14").value;

        document.getElementById("update-jiaolian4InsertRight14").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian5SelectLeft14');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft14').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft14').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft14').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft14').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft14').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft14').value;
        var height = parseFloat(document.getElementById('update-height14').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("update-jiaolian5SelectRight14").value = jl5

            document.getElementById("update-jiaolian5InsertLeft14").value = jiaolian5Insert;

            document.getElementById("update-jiaolian5InsertRight14").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian5InsertLeft14');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian5InsertLeft14").value;

        document.getElementById("update-jiaolian5InsertRight14").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian6SelectLeft14');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft14').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft14').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft14').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft14').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft14').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft14').value;
        var height = parseFloat(document.getElementById('update-height14').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("update-jiaolian6SelectRight14").value = jl6

            document.getElementById("update-jiaolian6InsertLeft14").value = jiaolian6Insert;

            document.getElementById("update-jiaolian6InsertRight14").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian6InsertLeft14');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian6InsertLeft14").value;

        document.getElementById("update-jiaolian6InsertRight14").value = a;
    })

    // ---------16
    var inp2 = document.getElementById('update-jiaoliankongFangxiangLeft15');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num15').value;
        var jlkfxl = document.getElementById('update-jiaoliankongFangxiangLeft15').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('update-jiaoliankongFangxiangRight15').value = jlkfxr;
    })

    var inp2 = document.getElementById('update-lashouShuliangLeft15');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num15').value;
        var lssll = document.getElementById('update-lashouShuliangLeft15').value;
        var lsslr = xdsl - lssll;
        document.getElementById('update-lashouShuliangRight15').value = lsslr;
    })

    var inp3 = document.getElementById('update-jiaolian1SelectLeft15');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('update-jiaolian1SelectLeft15').value;
        document.getElementById('update-jiaolian1SelectRight15').value = jl1sl;
    })

    var inp4 = document.getElementById('update-jiaolian2SelectLeft15');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('update-jiaolian2SelectLeft15').value;
        document.getElementById('update-jiaolian2SelectRight15').value = jl2sl;
    })

    var inp5 = document.getElementById('update-jiaolian3SelectLeft15');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('update-jiaolian3SelectLeft15').value;
        document.getElementById('update-jiaolian3SelectRight15').value = jl3sl;
    })

    var inp6 = document.getElementById('update-jiaolian4SelectLeft15');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('update-jiaolian4SelectLeft15').value;
        document.getElementById('update-jiaolian4SelectRight15').value = jl4sl;
    })

    var inp7 = document.getElementById('update-jiaolian5SelectLeft15');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('update-jiaolian5SelectLeft15').value;
        document.getElementById('update-jiaolian5SelectRight15').value = jl5sl;
    })

    var inp8 = document.getElementById('update-jiaolian6SelectLeft15');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('update-jiaolian6SelectLeft15').value;
        document.getElementById('update-jiaolian6SelectRight15').value = jl6sl;
    })

    var jl3inp = document.getElementById('update-jiaolian1SelectLeft15');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft15').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft15').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft15').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft15').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft15').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft15').value;
        var height = parseFloat(document.getElementById('update-height15').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("update-jiaolian1SelectRight15").value = jl1

            document.getElementById("update-jiaolian1InsertLeft15").value = jiaolian1Insert;

            document.getElementById("update-jiaolian1InsertRight15").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian1InsertLeft15');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian1InsertLeft15").value;

        document.getElementById("update-jiaolian1InsertRight15").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian2SelectLeft15');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft15').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft15').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft15').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft15').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft15').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft15').value;
        var height = parseFloat(document.getElementById('update-height15').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("update-jiaolian2SelectRight15").value = jl2

            document.getElementById("update-jiaolian2InsertLeft15").value = jiaolian2Insert;

            document.getElementById("update-jiaolian2InsertRight15").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian2InsertLeft15');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian2InsertLeft15").value;

        document.getElementById("update-jiaolian2InsertRight15").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian3SelectLeft15');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft15').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft15').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft15').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft15').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft15').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft15').value;
        var height = parseFloat(document.getElementById('update-height15').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("update-jiaolian3SelectRight15").value = jl3

            document.getElementById("update-jiaolian3InsertLeft15").value = jiaolian3Insert;

            document.getElementById("update-jiaolian3InsertRight15").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian3InsertLeft15');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian3InsertLeft15").value;

        document.getElementById("update-jiaolian3InsertRight15").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian4SelectLeft15');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft15').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft15').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft15').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft15').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft15').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft15').value;
        var height = parseFloat(document.getElementById('update-height15').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("update-jiaolian4SelectRight15").value = jl4

            document.getElementById("update-jiaolian4InsertLeft15").value = jiaolian4Insert;

            document.getElementById("update-jiaolian4InsertRight15").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian4InsertLeft15');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian4InsertLeft15").value;

        document.getElementById("update-jiaolian4InsertRight15").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian5SelectLeft15');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft15').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft15').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft15').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft15').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft15').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft15').value;
        var height = parseFloat(document.getElementById('update-height15').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("update-jiaolian5SelectRight15").value = jl5

            document.getElementById("update-jiaolian5InsertLeft15").value = jiaolian5Insert;

            document.getElementById("update-jiaolian5InsertRight15").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian5InsertLeft15');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian5InsertLeft15").value;

        document.getElementById("update-jiaolian5InsertRight15").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian6SelectLeft15');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft15').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft15').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft15').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft15').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft15').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft15').value;
        var height = parseFloat(document.getElementById('update-height15').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("update-jiaolian6SelectRight15").value = jl6

            document.getElementById("update-jiaolian6InsertLeft15").value = jiaolian6Insert;

            document.getElementById("update-jiaolian6InsertRight15").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian6InsertLeft15');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian6InsertLeft15").value;

        document.getElementById("update-jiaolian6InsertRight15").value = a;
    })

    // ---------17
    var inp2 = document.getElementById('update-jiaoliankongFangxiangLeft16');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num16').value;
        var jlkfxl = document.getElementById('update-jiaoliankongFangxiangLeft16').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('update-jiaoliankongFangxiangRight16').value = jlkfxr;
    })

    var inp2 = document.getElementById('update-lashouShuliangLeft16');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num16').value;
        var lssll = document.getElementById('update-lashouShuliangLeft16').value;
        var lsslr = xdsl - lssll;
        document.getElementById('update-lashouShuliangRight16').value = lsslr;
    })

    var inp3 = document.getElementById('update-jiaolian1SelectLeft16');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('update-jiaolian1SelectLeft16').value;
        document.getElementById('update-jiaolian1SelectRight16').value = jl1sl;
    })

    var inp4 = document.getElementById('update-jiaolian2SelectLeft16');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('update-jiaolian2SelectLeft16').value;
        document.getElementById('update-jiaolian2SelectRight16').value = jl2sl;
    })

    var inp5 = document.getElementById('update-jiaolian3SelectLeft16');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('update-jiaolian3SelectLeft16').value;
        document.getElementById('update-jiaolian3SelectRight16').value = jl3sl;
    })

    var inp6 = document.getElementById('update-jiaolian4SelectLeft16');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('update-jiaolian4SelectLeft16').value;
        document.getElementById('update-jiaolian4SelectRight16').value = jl4sl;
    })

    var inp7 = document.getElementById('update-jiaolian5SelectLeft16');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('update-jiaolian5SelectLeft16').value;
        document.getElementById('update-jiaolian5SelectRight16').value = jl5sl;
    })

    var inp8 = document.getElementById('update-jiaolian6SelectLeft16');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('update-jiaolian6SelectLeft16').value;
        document.getElementById('update-jiaolian6SelectRight16').value = jl6sl;
    })

    var jl3inp = document.getElementById('update-jiaolian1SelectLeft16');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft16').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft16').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft16').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft16').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft16').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft16').value;
        var height = parseFloat(document.getElementById('update-height16').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("update-jiaolian1SelectRight16").value = jl1

            document.getElementById("update-jiaolian1InsertLeft16").value = jiaolian1Insert;

            document.getElementById("update-jiaolian1InsertRight16").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian1InsertLeft16');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian1InsertLeft16").value;

        document.getElementById("update-jiaolian1InsertRight16").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian2SelectLeft16');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft16').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft16').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft16').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft16').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft16').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft16').value;
        var height = parseFloat(document.getElementById('update-height16').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("update-jiaolian2SelectRight16").value = jl2

            document.getElementById("update-jiaolian2InsertLeft16").value = jiaolian2Insert;

            document.getElementById("update-jiaolian2InsertRight16").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian2InsertLeft16');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian2InsertLeft16").value;

        document.getElementById("update-jiaolian2InsertRight16").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian3SelectLeft16');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft16').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft16').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft16').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft16').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft16').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft16').value;
        var height = parseFloat(document.getElementById('update-height16').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("update-jiaolian3SelectRight16").value = jl3

            document.getElementById("update-jiaolian3InsertLeft16").value = jiaolian3Insert;

            document.getElementById("update-jiaolian3InsertRight16").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian3InsertLeft16');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian3InsertLeft16").value;

        document.getElementById("update-jiaolian3InsertRight16").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian4SelectLeft16');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft16').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft16').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft16').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft16').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft16').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft16').value;
        var height = parseFloat(document.getElementById('update-height16').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("update-jiaolian4SelectRight16").value = jl4

            document.getElementById("update-jiaolian4InsertLeft16").value = jiaolian4Insert;

            document.getElementById("update-jiaolian4InsertRight16").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian4InsertLeft16');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian4InsertLeft16").value;

        document.getElementById("update-jiaolian4InsertRight16").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian5SelectLeft16');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft16').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft16').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft16').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft16').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft16').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft16').value;
        var height = parseFloat(document.getElementById('update-height16').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("update-jiaolian5SelectRight16").value = jl5

            document.getElementById("update-jiaolian5InsertLeft16").value = jiaolian5Insert;

            document.getElementById("update-jiaolian5InsertRight16").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian5InsertLeft16');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian5InsertLeft16").value;

        document.getElementById("update-jiaolian5InsertRight16").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian6SelectLeft16');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft16').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft16').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft16').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft16').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft16').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft16').value;
        var height = parseFloat(document.getElementById('update-height16').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("update-jiaolian6SelectRight16").value = jl6

            document.getElementById("update-jiaolian6InsertLeft16").value = jiaolian6Insert;

            document.getElementById("update-jiaolian6InsertRight16").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian6InsertLeft16');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian6InsertLeft16").value;

        document.getElementById("update-jiaolian6InsertRight16").value = a;
    })

    // ---------18
    var inp2 = document.getElementById('update-jiaoliankongFangxiangLeft17');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num17').value;
        var jlkfxl = document.getElementById('update-jiaoliankongFangxiangLeft17').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('update-jiaoliankongFangxiangRight17').value = jlkfxr;
    })

    var inp2 = document.getElementById('update-lashouShuliangLeft17');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num17').value;
        var lssll = document.getElementById('update-lashouShuliangLeft17').value;
        var lsslr = xdsl - lssll;
        document.getElementById('update-lashouShuliangRight17').value = lsslr;
    })

    var inp3 = document.getElementById('update-jiaolian1SelectLeft17');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('update-jiaolian1SelectLeft17').value;
        document.getElementById('update-jiaolian1SelectRight17').value = jl1sl;
    })

    var inp4 = document.getElementById('update-jiaolian2SelectLeft17');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('update-jiaolian2SelectLeft17').value;
        document.getElementById('update-jiaolian2SelectRight17').value = jl2sl;
    })

    var inp5 = document.getElementById('update-jiaolian3SelectLeft17');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('update-jiaolian3SelectLeft17').value;
        document.getElementById('update-jiaolian3SelectRight17').value = jl3sl;
    })

    var inp6 = document.getElementById('update-jiaolian4SelectLeft17');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('update-jiaolian4SelectLeft17').value;
        document.getElementById('update-jiaolian4SelectRight17').value = jl4sl;
    })

    var inp7 = document.getElementById('update-jiaolian5SelectLeft17');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('update-jiaolian5SelectLeft17').value;
        document.getElementById('update-jiaolian5SelectRight17').value = jl5sl;
    })

    var inp8 = document.getElementById('update-jiaolian6SelectLeft17');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('update-jiaolian6SelectLeft17').value;
        document.getElementById('update-jiaolian6SelectRight17').value = jl6sl;
    })

    var jl3inp = document.getElementById('update-jiaolian1SelectLeft17');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft17').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft17').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft17').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft17').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft17').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft17').value;
        var height = parseFloat(document.getElementById('update-height17').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("update-jiaolian1SelectRight17").value = jl1

            document.getElementById("update-jiaolian1InsertLeft17").value = jiaolian1Insert;

            document.getElementById("update-jiaolian1InsertRight17").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian1InsertLeft17');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian1InsertLeft17").value;

        document.getElementById("update-jiaolian1InsertRight17").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian2SelectLeft17');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft17').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft17').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft17').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft17').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft17').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft17').value;
        var height = parseFloat(document.getElementById('update-height17').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("update-jiaolian2SelectRight17").value = jl2

            document.getElementById("update-jiaolian2InsertLeft17").value = jiaolian2Insert;

            document.getElementById("update-jiaolian2InsertRight17").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian2InsertLeft17');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian2InsertLeft17").value;

        document.getElementById("update-jiaolian2InsertRight17").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian3SelectLeft17');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft17').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft17').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft17').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft17').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft17').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft17').value;
        var height = parseFloat(document.getElementById('update-height17').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("update-jiaolian3SelectRight17").value = jl3

            document.getElementById("update-jiaolian3InsertLeft17").value = jiaolian3Insert;

            document.getElementById("update-jiaolian3InsertRight17").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian3InsertLeft17');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian3InsertLeft17").value;

        document.getElementById("update-jiaolian3InsertRight17").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian4SelectLeft17');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft17').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft17').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft17').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft17').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft17').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft17').value;
        var height = parseFloat(document.getElementById('update-height17').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("update-jiaolian4SelectRight17").value = jl4

            document.getElementById("update-jiaolian4InsertLeft17").value = jiaolian4Insert;

            document.getElementById("update-jiaolian4InsertRight17").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian4InsertLeft17');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian4InsertLeft17").value;

        document.getElementById("update-jiaolian4InsertRight17").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian5SelectLeft17');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft17').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft17').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft17').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft17').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft17').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft17').value;
        var height = parseFloat(document.getElementById('update-height17').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("update-jiaolian5SelectRight17").value = jl5

            document.getElementById("update-jiaolian5InsertLeft17").value = jiaolian5Insert;

            document.getElementById("update-jiaolian5InsertRight17").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian5InsertLeft17');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian5InsertLeft17").value;

        document.getElementById("update-jiaolian5InsertRight17").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian6SelectLeft17');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft17').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft17').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft17').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft17').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft17').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft17').value;
        var height = parseFloat(document.getElementById('update-height17').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("update-jiaolian6SelectRight17").value = jl6

            document.getElementById("update-jiaolian6InsertLeft17").value = jiaolian6Insert;

            document.getElementById("update-jiaolian6InsertRight17").value = jiaolian6Insert;

        }
    })
    var jl3inp = document.getElementById('update-jiaolian6InsertLeft17');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian6InsertLeft17").value;

        document.getElementById("update-jiaolian6InsertRight17").value = a;
    })

    // ------------19
    var inp2 = document.getElementById('update-jiaoliankongFangxiangLeft18');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num18').value;
        var jlkfxl = document.getElementById('update-jiaoliankongFangxiangLeft18').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('update-jiaoliankongFangxiangRight18').value = jlkfxr;
    })

    var inp2 = document.getElementById('update-lashouShuliangLeft18');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num18').value;
        var lssll = document.getElementById('update-lashouShuliangLeft18').value;
        var lsslr = xdsl - lssll;
        document.getElementById('update-lashouShuliangRight18').value = lsslr;
    })

    var inp3 = document.getElementById('update-jiaolian1SelectLeft18');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('update-jiaolian1SelectLeft18').value;
        document.getElementById('update-jiaolian1SelectRight18').value = jl1sl;
    })

    var inp4 = document.getElementById('update-jiaolian2SelectLeft18');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('update-jiaolian2SelectLeft18').value;
        document.getElementById('update-jiaolian2SelectRight18').value = jl2sl;
    })

    var inp5 = document.getElementById('update-jiaolian3SelectLeft18');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('update-jiaolian3SelectLeft18').value;
        document.getElementById('update-jiaolian3SelectRight18').value = jl3sl;
    })

    var inp6 = document.getElementById('update-jiaolian4SelectLeft18');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('update-jiaolian4SelectLeft18').value;
        document.getElementById('update-jiaolian4SelectRight18').value = jl4sl;
    })

    var inp7 = document.getElementById('update-jiaolian5SelectLeft18');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('update-jiaolian5SelectLeft18').value;
        document.getElementById('update-jiaolian5SelectRight18').value = jl5sl;
    })

    var inp8 = document.getElementById('update-jiaolian6SelectLeft18');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('update-jiaolian6SelectLeft18').value;
        document.getElementById('update-jiaolian6SelectRight18').value = jl6sl;
    })

    var jl3inp = document.getElementById('update-jiaolian1SelectLeft18');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft18').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft18').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft18').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft18').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft18').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft18').value;
        var height = parseFloat(document.getElementById('update-height18').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("update-jiaolian1SelectRight18").value = jl1

            document.getElementById("update-jiaolian1InsertLeft18").value = jiaolian1Insert;

            document.getElementById("update-jiaolian1InsertRight18").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian1InsertLeft18');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian1InsertLeft18").value;

        document.getElementById("update-jiaolian1InsertRight18").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian2SelectLeft18');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft18').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft18').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft18').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft18').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft18').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft18').value;
        var height = parseFloat(document.getElementById('update-height18').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("update-jiaolian2SelectRight18").value = jl2

            document.getElementById("update-jiaolian2InsertLeft18").value = jiaolian2Insert;

            document.getElementById("update-jiaolian2InsertRight18").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian2InsertLeft18');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian2InsertLeft18").value;

        document.getElementById("update-jiaolian2InsertRight18").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian3SelectLeft18');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft18').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft18').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft18').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft18').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft18').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft18').value;
        var height = parseFloat(document.getElementById('update-height18').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("update-jiaolian3SelectRight18").value = jl3

            document.getElementById("update-jiaolian3InsertLeft18").value = jiaolian3Insert;

            document.getElementById("update-jiaolian3InsertRight18").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian3InsertLeft18');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian3InsertLeft18").value;

        document.getElementById("update-jiaolian3InsertRight18").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian4SelectLeft18');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft18').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft18').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft18').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft18').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft18').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft18').value;
        var height = parseFloat(document.getElementById('update-height18').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("update-jiaolian4SelectRight18").value = jl4

            document.getElementById("update-jiaolian4InsertLeft18").value = jiaolian4Insert;

            document.getElementById("update-jiaolian4InsertRight18").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian4InsertLeft18');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian4InsertLeft18").value;

        document.getElementById("update-jiaolian4InsertRight18").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian5SelectLeft18');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft18').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft18').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft18').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft18').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft18').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft18').value;
        var height = parseFloat(document.getElementById('update-height18').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("update-jiaolian5SelectRight18").value = jl5

            document.getElementById("update-jiaolian5InsertLeft18").value = jiaolian5Insert;

            document.getElementById("update-jiaolian5InsertRight18").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian5InsertLeft18');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian5InsertLeft18").value;

        document.getElementById("update-jiaolian5InsertRight18").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian6SelectLeft18');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft18').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft18').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft18').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft18').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft18').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft18').value;
        var height = parseFloat(document.getElementById('update-height18').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("update-jiaolian6SelectRight18").value = jl6

            document.getElementById("update-jiaolian6InsertLeft18").value = jiaolian6Insert;

            document.getElementById("update-jiaolian6InsertRight18").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian6InsertLeft18');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian6InsertLeft18").value;

        document.getElementById("update-jiaolian6InsertRight18").value = a;
    })

    // --------20
    var inp2 = document.getElementById('update-jiaoliankongFangxiangLeft19');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num19').value;
        var jlkfxl = document.getElementById('update-jiaoliankongFangxiangLeft19').value;
        var jlkfxr = xdsl - jlkfxl;
        document.getElementById('update-jiaoliankongFangxiangRight19').value = jlkfxr;
    })

    var inp2 = document.getElementById('update-lashouShuliangLeft19');
    inp2.addEventListener('blur', function () {
        var xdsl = document.getElementById('update-num19').value;
        var lssll = document.getElementById('update-lashouShuliangLeft19').value;
        var lsslr = xdsl - lssll;
        document.getElementById('update-lashouShuliangRight19').value = lsslr;
    })

    var inp3 = document.getElementById('update-jiaolian1SelectLeft19');
    inp3.addEventListener('blur', function () {
        var jl1sl = document.getElementById('update-jiaolian1SelectLeft19').value;
        document.getElementById('update-jiaolian1SelectRight19').value = jl1sl;
    })

    var inp4 = document.getElementById('update-jiaolian2SelectLeft19');
    inp4.addEventListener('blur', function () {
        var jl2sl = document.getElementById('update-jiaolian2SelectLeft19').value;
        document.getElementById('update-jiaolian2SelectRight19').value = jl2sl;
    })

    var inp5 = document.getElementById('update-jiaolian3SelectLeft19');
    inp5.addEventListener('blur', function () {
        var jl3sl = document.getElementById('update-jiaolian3SelectLeft19').value;
        document.getElementById('update-jiaolian3SelectRight19').value = jl3sl;
    })

    var inp6 = document.getElementById('update-jiaolian4SelectLeft19');
    inp6.addEventListener('blur', function () {
        var jl4sl = document.getElementById('update-jiaolian4SelectLeft19').value;
        document.getElementById('update-jiaolian4SelectRight19').value = jl4sl;
    })

    var inp7 = document.getElementById('update-jiaolian5SelectLeft19');
    inp7.addEventListener('blur', function () {
        var jl5sl = document.getElementById('update-jiaolian5SelectLeft19').value;
        document.getElementById('update-jiaolian5SelectRight19').value = jl5sl;
    })

    var inp8 = document.getElementById('update-jiaolian6SelectLeft19');
    inp8.addEventListener('blur', function () {
        var jl6sl = document.getElementById('update-jiaolian6SelectLeft19').value;
        document.getElementById('update-jiaolian6SelectRight19').value = jl6sl;
    })

    var jl3inp = document.getElementById('update-jiaolian1SelectLeft19');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft19').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft19').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft19').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft19').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft19').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft19').value;
        var height = parseFloat(document.getElementById('update-height19').value);
        if (jl1 == '距中') {
            var jiaolian1Insert = height / 2;
            document.getElementById("update-jiaolian1SelectRight19").value = jl1

            document.getElementById("update-jiaolian1InsertLeft19").value = jiaolian1Insert;

            document.getElementById("update-jiaolian1InsertRight19").value = jiaolian1Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian1InsertLeft19');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian1InsertLeft19").value;

        document.getElementById("update-jiaolian1InsertRight19").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian2SelectLeft19');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft19').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft19').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft19').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft19').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft19').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft19').value;
        var height = parseFloat(document.getElementById('update-height19').value);
        if (jl2 == '距中') {
            var jiaolian2Insert = height / 2;
            document.getElementById("update-jiaolian2SelectRight19").value = jl2

            document.getElementById("update-jiaolian2InsertLeft19").value = jiaolian2Insert;

            document.getElementById("update-jiaolian2InsertRight19").value = jiaolian2Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian2InsertLeft19');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian2InsertLeft19").value;

        document.getElementById("update-jiaolian2InsertRight19").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian3SelectLeft19');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft19').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft19').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft19').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft19').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft19').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft19').value;
        var height = parseFloat(document.getElementById('update-height19').value);
        if (jl3 == '距中') {
            var jiaolian3Insert = height / 2;
            document.getElementById("update-jiaolian3SelectRight19").value = jl3

            document.getElementById("update-jiaolian3InsertLeft19").value = jiaolian3Insert;

            document.getElementById("update-jiaolian3InsertRight19").value = jiaolian3Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian3InsertLeft19');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian3InsertLeft19").value;

        document.getElementById("update-jiaolian3InsertRight19").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian4SelectLeft19');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft19').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft19').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft19').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft19').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft19').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft19').value;
        var height = parseFloat(document.getElementById('update-height19').value);
        if (jl4 == '距中') {
            var jiaolian4Insert = height / 2;
            document.getElementById("update-jiaolian4SelectRight19").value = jl4

            document.getElementById("update-jiaolian4InsertLeft19").value = jiaolian4Insert;

            document.getElementById("update-jiaolian4InsertRight19").value = jiaolian4Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian4InsertLeft19');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian4InsertLeft19").value;

        document.getElementById("update-jiaolian4InsertRight19").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian5SelectLeft19');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft19').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft19').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft19').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft19').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft19').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft19').value;
        var height = parseFloat(document.getElementById('update-height19').value);
        if (jl5 == '距中') {
            var jiaolian5Insert = height / 2;
            document.getElementById("update-jiaolian5SelectRight19").value = jl5

            document.getElementById("update-jiaolian5InsertLeft19").value = jiaolian5Insert;

            document.getElementById("update-jiaolian5InsertRight19").value = jiaolian5Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian5InsertLeft19');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian5InsertLeft19").value;

        document.getElementById("update-jiaolian5InsertRight19").value = a;
    })

    var jl3inp = document.getElementById('update-jiaolian6SelectLeft19');
    jl3inp.addEventListener('blur', function () {
        var jl1 = document.getElementById('update-jiaolian1SelectLeft19').value;
        var jl2 = document.getElementById('update-jiaolian2SelectLeft19').value;
        var jl3 = document.getElementById('update-jiaolian3SelectLeft19').value;
        var jl4 = document.getElementById('update-jiaolian4SelectLeft19').value;
        var jl5 = document.getElementById('update-jiaolian5SelectLeft19').value;
        var jl6 = document.getElementById('update-jiaolian6SelectLeft19').value;
        var height = parseFloat(document.getElementById('update-height19').value);
        if (jl6 == '距中') {
            var jiaolian6Insert = height / 2;
            document.getElementById("update-jiaolian6SelectRight19").value = jl6

            document.getElementById("update-jiaolian6InsertLeft19").value = jiaolian6Insert;

            document.getElementById("update-jiaolian6InsertRight19").value = jiaolian6Insert;

        }
    })

    var jl3inp = document.getElementById('update-jiaolian6InsertLeft19');
    jl3inp.addEventListener('blur', function () {
        var a = document.getElementById("update-jiaolian6InsertLeft19").value;

        document.getElementById("update-jiaolian6InsertRight19").value = a;
    })

    // -------拉手位
    var inp1 = document.getElementById('update-lashouweiSelectLeft');
    inp1.addEventListener('blur', function () {
        var lswsl = document.getElementById('update-lashouweiSelectLeft').value;
        document.getElementById('update-lashouweiSelectRight').value = lswsl;
    })

    var inp1 = document.getElementById('update-lashouweiInsertLeft');
    inp1.addEventListener('blur', function () {
        var lswsr = document.getElementById('update-lashouweiInsertLeft').value;
        document.getElementById('update-lashouweiInsertRight').value = lswsr;
    })


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
                    for (n = 0; n < res.data.length; n++) {
                        document.getElementById("wancheng" + n).value = res.data[n].wancheng;
                        t = res.data[n].kailiao;
                        y = res.data[n].zuzhuang;
                        u = res.data[n].shunxu;
                        l = res.data[n].baozhuang;
                        if (t == null || t == undefined) {
                            document.getElementById("kailiao" + n).value = "请选择";
                        } else {
                            document.getElementById("kailiao" + n).value = t;
                        }
                        if (y == null || y == undefined) {
                            document.getElementById("zuzhuang" + n).value = "请选择";
                        } else {
                            document.getElementById("zuzhuang" + n).value = y;
                        }
                        if (u == null || u == undefined) {
                            document.getElementById("shunxu" + n).value = "请选择";
                        } else {
                            document.getElementById("shunxu" + n).value = u;
                        }
                        if (l == null || l == undefined) {
                            document.getElementById("baozhuang" + n).value = "请选择";
                        } else {
                            document.getElementById("baozhuang" + n).value = l;
                        }
                    }

                }
            })
    });

    //刷新
    $("#refresh-btn").click(function () {
        getList();
    });

    //点击新增按钮显示弹窗
    $("#add-btn").click(function () {
        var tdElements = document.getElementsByTagName("td");
        for (var i = 0; i < tdElements.length; i++) {
            tdElements[i].style.padding = "0";
        }
        $('#add-modal').modal('show');

        getPfsl();
        getPfje();
        getZcsl();
        getZcje();
        getUpdJe();
        getToken();
    });

    //新增弹窗里点击关闭按钮
    $('#add-close-btn').click(function () {
        $('#add-modal').modal('hide');
    });

    //新增弹窗里点击提交按钮
    $("#add-submit-btn").click(function () {
        // getAddKk();
        // getJe();
        getPfsl();
        getPfje();
        getZcsl();
        getZcje();
        getUpdJe()


        // if (checkForm('#add-form')) {
        //     for (i = 0; i < 20; i++) {
        //         if (i == 0) {
        //             customerName = $("#add-customerName").val();
        //             insertDate = $("#add-insertDate").val();
        //             orderNumber = $("#add-orderNumber").val();
        //             shippingAddress = $("#add-shippingAddress").val();
        //             phone = $("#add-phone").val();
        //             shippingType = $("#add-shippingType").val();
        //             installAddress = $("#add-installAddress").val();
        //             customerNumber = $("#add-customerNumber").val();
        //             pinyin = $("#add-pinyin").val();
        //             customerNameRenyuan = $("#add-customerNameRenyuan").val();
        //             height = $("#add-height").val();
        //             width = $("#add-width").val();
        //             num = $("#add-num").val();
        //             lvxingcai = $("#add-lvxingcai").val();
        //             lvcaiYanse = $("#add-lvcaiYanse").val();
        //             boliShenjiagong = $("#add-boliShenjiagong").val();
        //             boliYanse = $("#add-boliYanse").val();
        //             lashouXinghao = $("#add-lashouXinghao").val();
        //             jiaoliankongFangxiangLeft = $("#add-jiaoliankongFangxiangLeft").val();
        //             jiaoliankongFangxiangRight = $("#add-jiaoliankongFangxiangRight").val();
        //             lashouShuliangLeft = $("#add-lashouShuliangLeft").val();
        //             lashouShuliangRight = $("#add-lashouShuliangRight").val();
        //             lashouweiSelectLeft = $("#add-lashouweiSelectLeft").val();
        //             lashouweiInsertLeft = $("#add-lashouweiInsertLeft").val();
        //             lashouweiSelectRight = $("#add-lashouweiSelectRight").val();
        //             lashouweiInsertRight = $("#add-lashouweiInsertRight").val();
        //             zhuangsuoshuliangInsertLeft1 = $("#add-zhuangsuoshuliangInsertLeft1").val();
        //             zhuangsuoshuliangInsertRight1 = $("#add-zhuangsuoshuliangInsertRight1").val();
        //             zhuangsuofangweiInsertLeft1 = $("#add-zhuangsuofangweiInsertLeft1").val();
        //             zhuangsuofangweiInsertLeft2 = $("#add-zhuangsuofangweiInsertLeft2").val();
        //             zhuangsuofangweiInsertRight1 = $("#add-zhuangsuofangweiInsertRight1").val();
        //             zhuangsuofangweiInsertRight2 = $("#add-zhuangsuofangweiInsertRight2").val();
        //             kaijiaolian = $("#add-kaijiaolian").val();
        //             jiaolian1SelectLeft = $("#add-jiaolian1SelectLeft").val();
        //             jiaolian1InsertLeft = $("#add-jiaolian1InsertLeft").val();
        //             iaolian1SelectRight = $("#add-iaolian1SelectRight").val();
        //             jiaolian1InsertRight = $("#add-jiaolian1InsertRight").val();
        //             jiaolian2SelectLeft = $("#add-jiaolian2SelectLeft").val();
        //             jiaolian2InsertLeft = $("#add-jiaolian2InsertLeft").val();
        //             jiaolian2SelectRight = $("#add-jiaolian2SelectRight").val();
        //             jiaolian2InsertRight = $("#add-jiaolian2InsertRight").val();
        //             jiaolian3SelectLeft = $("#add-jiaolian3SelectLeft").val();
        //             jiaolian3InsertLeft = $("#add-jiaolian3InsertLeft").val();
        //             jiaolian3SelectRight = $("#add-jiaolian3SelectRight").val();
        //             jiaolian3InsertRight = $("#add-jiaolian3InsertRight").val();
        //             jiaolian4SelectLeft = $("#add-jiaolian4SelectLeft").val();
        //             jiaolian4InsertLeft = $("#add-jiaolian4InsertLeft").val();
        //             jiaolian4SelectRight = $("#add-jiaolian4SelectRight").val();
        //             jiaolian4InsertRight = $("#add-jiaolian4InsertRight").val();
        //             jiaolian5SelectLeft = $("#add-jiaolian5SelectLeft").val();
        //             jiaolian5InsertLeft = $("#add-jiaolian5InsertLeft").val();
        //             jiaolian5SelectRight = $("#add-jiaolian5SelectRight").val();
        //             jiaolian6SelectLeft = $("#add-jiaolian6SelectLeft").val();
        //             jiaolian6InsertLeft = $("#add-jiaolian6InsertLeft").val();
        //             jiaolian6SelectRight = $("#add-jiaolian6SelectRight").val();
        //             jiaolian6InsertRight = $("#add-jiaolian6InsertRight").val();
        //             fujianSelect1 = $("#add-fujianSelect1").val();
        //             fujianSelect2 = $("#add-fujianSelect2").val();
        //             fujianSelect3 = $("#add-fujianSelect3").val();
        //             fujianSelect4 = $("#add-fujianSelect4").val();
        //             pinpaiSelect1 = $("#add-pinpaiSelect1").val();
        //             pinpaiSelect2 = $("#add-pinpaiSelect2").val();
        //             pinpaiSelect3 = $("#add-pinpaiSelect3").val();
        //             pinpaiSelect4 = $("#add-pinpaiSelect4").val();
        //             fujianShuliang1 = $("#add-fujianShuliang1").val();
        //             fujianShuliang2 = $("#add-fujianShuliang2").val();
        //             fujianShuliang3 = $("#add-fujianShuliang3").val();
        //             fujianShuliang4 = $("#add-fujianShuliang4").val();
        //             qita = $("#add-qita").val();
        //             sumShuliang1 = $("#add-sumShuliang1").val();
        //             danjia1 = $("#add-danjia1").val();
        //             sumJine1 = $("#add-sumJine1").val();
        //             sumShuliang2 = $("#add-sumShuliang2").val();
        //             danjia2 = $("#add-danjia2").val();
        //             sumJine2 = $("#add-sumJine2").val();
        //             wancheng = $("#add-wancheng").val();
        //             var arr = {
        //                 customerName: customerName,
        //                 insertDate: insertDate,
        //                 orderNumber: orderNumber,
        //                 shippingAddress: shippingAddress,
        //                 phone: phone,
        //                 shippingType: shippingType,
        //                 installAddress: installAddress,
        //                 customerNumber: customerNumber,
        //                 pinyin: pinyin,
        //                 customerNameRenyuan: customerNameRenyuan,
        //                 height: height,
        //                 width: width,
        //                 num: num,
        //                 lvxingcai: lvxingcai,
        //                 lvcaiYanse: lvcaiYanse,
        //                 boliShenjiagong: boliShenjiagong,
        //                 boliYanse: boliYanse,
        //                 lashouXinghao: lashouXinghao,
        //                 jiaoliankongFangxiangLeft: jiaoliankongFangxiangLeft,
        //                 jiaoliankongFangxiangRight: jiaoliankongFangxiangRight,
        //                 lashouShuliangLeft: lashouShuliangLeft,
        //                 lashouShuliangRight: lashouShuliangRight,
        //                 lashouweiSelectLeft: lashouweiSelectLeft,
        //                 lashouweiInsertLeft: lashouweiInsertLeft,
        //                 lashouweiSelectRight: lashouweiSelectRight,
        //                 lashouweiInsertRight: lashouweiInsertRight,
        //                 zhuangsuoshuliangInsertLeft1: zhuangsuoshuliangInsertLeft1,
        //                 zhuangsuoshuliangInsertRight1: zhuangsuoshuliangInsertRight1,
        //                 zhuangsuofangweiInsertLeft1: zhuangsuofangweiInsertLeft1,
        //                 zhuangsuofangweiInsertLeft2: zhuangsuofangweiInsertLeft2,
        //                 zhuangsuofangweiInsertRight1: zhuangsuofangweiInsertRight1,
        //                 zhuangsuofangweiInsertRight2: zhuangsuofangweiInsertRight2,
        //                 kaijiaolian: kaijiaolian,
        //                 jiaolian1SelectLeft: jiaolian1SelectLeft,
        //                 jiaolian1InsertLeft: jiaolian1InsertLeft,
        //                 iaolian1SelectRight: iaolian1SelectRight,
        //                 jiaolian1InsertRight: jiaolian1InsertRight,
        //                 jiaolian2SelectLeft: jiaolian2SelectLeft,
        //                 jiaolian2InsertLeft: jiaolian2InsertLeft,
        //                 jiaolian2SelectRight: jiaolian2SelectRight,
        //                 jiaolian2InsertRight: jiaolian2InsertRight,
        //                 jiaolian3SelectLeft: jiaolian3SelectLeft,
        //                 jiaolian3InsertLeft: jiaolian3InsertLeft,
        //                 jiaolian3SelectRight: jiaolian3SelectRight,
        //                 jiaolian3InsertRight: jiaolian3InsertRight,
        //                 jiaolian4SelectLeft: jiaolian4SelectLeft,
        //                 jiaolian4InsertLeft: jiaolian4InsertLeft,
        //                 jiaolian4SelectRight: jiaolian4SelectRight,
        //                 jiaolian4InsertRight: jiaolian4InsertRight,
        //                 jiaolian5SelectLeft: jiaolian5SelectLeft,
        //                 jiaolian5InsertLeft: jiaolian5InsertLeft,
        //                 jiaolian5SelectRight: jiaolian5SelectRight,
        //                 jiaolian6SelectLeft: jiaolian6SelectLeft,
        //                 jiaolian6InsertLeft: jiaolian6InsertLeft,
        //                 jiaolian6SelectRight: jiaolian6SelectRight,
        //                 jiaolian6InsertRight: jiaolian6InsertRight,
        //                 fujianSelect1: fujianSelect1,
        //                 fujianSelect2: fujianSelect2,
        //                 fujianSelect3: fujianSelect3,
        //                 fujianSelect4: fujianSelect4,
        //                 pinpaiSelect1: pinpaiSelect1,
        //                 pinpaiSelect2: pinpaiSelect2,
        //                 pinpaiSelect3: pinpaiSelect3,
        //                 pinpaiSelect4: pinpaiSelect4,
        //                 fujianShuliang1: fujianShuliang1,
        //                 fujianShuliang2: fujianShuliang2,
        //                 fujianShuliang3: fujianShuliang3,
        //                 fujianShuliang4: fujianShuliang4,
        //                 qita: qita,
        //                 sumShuliang1: sumShuliang1,
        //                 danjia1: danjia1,
        //                 sumJine1: sumJine1,
        //                 sumShuliang2: sumShuliang2,
        //                 danjia2: danjia2,
        //                 sumJine2: sumJine2,
        //                 wancheng: wancheng
        //             }
        //             $ajax({
        //                 type: 'post',
        //                 url: '/lkxd/add',
        //                 data: JSON.stringify({
        //                     addInfo: arr
        //                 }),
        //                 dataType: 'json',
        //                 contentType: 'application/json;charset=utf-8'
        //             }, false, '', function (res) {
        //                 if (res.code == 200) {
        //                     swal("", res.msg, "success");
        //                     $('#add-form')[0].reset();
        //                     getList();
        //                     $('#add-close-btn').click();
        //                 }
        //             })
        //         } else {
        //             customerName = $("#add-customerName").val();
        //             insertDate = $("#add-insertDate").val();
        //             orderNumber = $("#add-orderNumber").val();
        //             shippingAddress = $("#add-shippingAddress").val();
        //             phone = $("#add-phone").val();
        //             shippingType = $("#add-shippingType").val();
        //             installAddress = $("#add-installAddress").val();
        //             customerNumber = $("#add-customerNumber").val();
        //             pinyin = $("#add-pinyin").val();
        //             customerNameRenyuan = $("#add-customerNameRenyuan").val();
        //             height = $("#add-height" + i).val();
        //             if (height == "" || height == null) {
        //                 break;
        //             }
        //             width = $("#add-width" + i).val();
        //             num = $("#add-num" + i).val();
        //             lvxingcai = $("#add-lvxingcai" + i).val();
        //             lvcaiYanse = $("#add-lvcaiYanse" + i).val();
        //             boliShenjiagong = $("#add-boliShenjiagong" + i).val();
        //             boliYanse = $("#add-boliYanse" + i).val();
        //             lashouXinghao = $("#add-lashouXinghao" + i).val();
        //             jiaoliankongFangxiangLeft = $("#add-jiaoliankongFangxiangLeft" + i).val();
        //             jiaoliankongFangxiangRight = $("#add-jiaoliankongFangxiangRight" + i).val();
        //             lashouShuliangLeft = $("#add-lashouShuliangLeft" + i).val();
        //             lashouShuliangRight = $("#add-lashouShuliangRight" + i).val();
        //             lashouweiSelectLeft = $("#add-lashouweiSelectLeft" + i).val();
        //             lashouweiInsertLeft = $("#add-lashouweiInsertLeft" + i).val();
        //             lashouweiSelectRight = $("#add-lashouweiSelectRight" + i).val();
        //             lashouweiInsertRight = $("#add-lashouweiInsertRight" + i).val();
        //             zhuangsuoshuliangInsertLeft1 = $("#add-zhuangsuoshuliangInsertLeft1" + i).val();
        //             zhuangsuoshuliangInsertRight1 = $("#add-zhuangsuoshuliangInsertRight1" + i).val();
        //             zhuangsuofangweiInsertLeft1 = $("#add-zhuangsuofangweiInsertLeft1" + i).val();
        //             zhuangsuofangweiInsertLeft2 = $("#add-zhuangsuofangweiInsertLeft2" + i).val();
        //             zhuangsuofangweiInsertRight1 = $("#add-zhuangsuofangweiInsertRight1" + i).val();
        //             zhuangsuofangweiInsertRight2 = $("#add-zhuangsuofangweiInsertRight2" + i).val();
        //             kaijiaolian = $("#add-kaijiaolian" + i).val();
        //             jiaolian1SelectLeft = $("#add-jiaolian1SelectLeft" + i).val();
        //             jiaolian1InsertLeft = $("#add-jiaolian1InsertLeft" + i).val();
        //             iaolian1SelectRight = $("#add-iaolian1SelectRight" + i).val();
        //             jiaolian1InsertRight = $("#add-jiaolian1InsertRight" + i).val();
        //             jiaolian2SelectLeft = $("#add-jiaolian2SelectLeft" + i).val();
        //             jiaolian2InsertLeft = $("#add-jiaolian2InsertLeft" + i).val();
        //             jiaolian2SelectRight = $("#add-jiaolian2SelectRight" + i).val();
        //             jiaolian2InsertRight = $("#add-jiaolian2InsertRight" + i).val();
        //             jiaolian3SelectLeft = $("#add-jiaolian3SelectLeft" + i).val();
        //             jiaolian3InsertLeft = $("#add-jiaolian3InsertLeft" + i).val();
        //             jiaolian3SelectRight = $("#add-jiaolian3SelectRight" + i).val();
        //             jiaolian3InsertRight = $("#add-jiaolian3InsertRight" + i).val();
        //             jiaolian4SelectLeft = $("#add-jiaolian4SelectLeft" + i).val();
        //             jiaolian4InsertLeft = $("#add-jiaolian4InsertLeft" + i).val();
        //             jiaolian4SelectRight = $("#add-jiaolian4SelectRight" + i).val();
        //             jiaolian4InsertRight = $("#add-jiaolian4InsertRight" + i).val();
        //             jiaolian5SelectLeft = $("#add-jiaolian5SelectLeft" + i).val();
        //             jiaolian5InsertLeft = $("#add-jiaolian5InsertLeft" + i).val();
        //             jiaolian5SelectRight = $("#add-jiaolian5SelectRight" + i).val();
        //             jiaolian6SelectLeft = $("#add-jiaolian6SelectLeft" + i).val();
        //             jiaolian6InsertLeft = $("#add-jiaolian6InsertLeft" + i).val();
        //             jiaolian6SelectRight = $("#add-jiaolian6SelectRight" + i).val();
        //             jiaolian6InsertRight = $("#add-jiaolian6InsertRight" + i).val();
        //             fujianSelect1 = $("#add-fujianSelect1" + i).val();
        //             fujianSelect2 = $("#add-fujianSelect2" + i).val();
        //             fujianSelect3 = $("#add-fujianSelect3" + i).val();
        //             fujianSelect4 = $("#add-fujianSelect4" + i).val();
        //             pinpaiSelect1 = $("#add-pinpaiSelect1" + i).val();
        //             pinpaiSelect2 = $("#add-pinpaiSelect2" + i).val();
        //             pinpaiSelect3 = $("#add-pinpaiSelect3" + i).val();
        //             pinpaiSelect4 = $("#add-pinpaiSelect4" + i).val();
        //             fujianShuliang1 = $("#add-fujianShuliang1" + i).val();
        //             fujianShuliang2 = $("#add-fujianShuliang2" + i).val();
        //             fujianShuliang3 = $("#add-fujianShuliang3" + i).val();
        //             fujianShuliang4 = $("#add-fujianShuliang4" + i).val();
        //             qita = $("#add-qita" + i).val();
        //             sumShuliang1 = $("#add-sumShuliang1" + i).val();
        //             danjia1 = $("#add-danjia1" + i).val();
        //             sumJine1 = $("#add-sumJine1" + i).val();
        //             sumShuliang2 = $("#add-sumShuliang2" + i).val();
        //             danjia2 = $("#add-danjia2" + i).val();
        //             sumJine2 = $("#add-sumJine2" + i).val();
        //             var arr = {
        //                 customerName: customerName,
        //                 insertDate: insertDate,
        //                 orderNumber: orderNumber,
        //                 shippingAddress: shippingAddress,
        //                 phone: phone,
        //                 shippingType: shippingType,
        //                 installAddress: installAddress,
        //                 customerNumber: customerNumber,
        //                 pinyin: pinyin,
        //                 customerNameRenyuan: customerNameRenyuan,
        //                 height: height,
        //                 width: width,
        //                 num: num,
        //                 lvxingcai: lvxingcai,
        //                 lvcaiYanse: lvcaiYanse,
        //                 boliShenjiagong: boliShenjiagong,
        //                 boliYanse: boliYanse,
        //                 lashouXinghao: lashouXinghao,
        //                 jiaoliankongFangxiangLeft: jiaoliankongFangxiangLeft,
        //                 jiaoliankongFangxiangRight: jiaoliankongFangxiangRight,
        //                 lashouShuliangLeft: lashouShuliangLeft,
        //                 lashouShuliangRight: lashouShuliangRight,
        //                 lashouweiSelectLeft: lashouweiSelectLeft,
        //                 lashouweiInsertLeft: lashouweiInsertLeft,
        //                 lashouweiSelectRight: lashouweiSelectRight,
        //                 lashouweiInsertRight: lashouweiInsertRight,
        //                 zhuangsuoshuliangInsertLeft1: zhuangsuoshuliangInsertLeft1,
        //                 zhuangsuoshuliangInsertRight1: zhuangsuoshuliangInsertRight1,
        //                 zhuangsuofangweiInsertLeft1: zhuangsuofangweiInsertLeft1,
        //                 zhuangsuofangweiInsertLeft2: zhuangsuofangweiInsertLeft2,
        //                 zhuangsuofangweiInsertRight1: zhuangsuofangweiInsertRight1,
        //                 zhuangsuofangweiInsertRight2: zhuangsuofangweiInsertRight2,
        //                 kaijiaolian: kaijiaolian,
        //                 jiaolian1SelectLeft: jiaolian1SelectLeft,
        //                 jiaolian1InsertLeft: jiaolian1InsertLeft,
        //                 iaolian1SelectRight: iaolian1SelectRight,
        //                 jiaolian1InsertRight: jiaolian1InsertRight,
        //                 jiaolian2SelectLeft: jiaolian2SelectLeft,
        //                 jiaolian2InsertLeft: jiaolian2InsertLeft,
        //                 jiaolian2SelectRight: jiaolian2SelectRight,
        //                 jiaolian2InsertRight: jiaolian2InsertRight,
        //                 jiaolian3SelectLeft: jiaolian3SelectLeft,
        //                 jiaolian3InsertLeft: jiaolian3InsertLeft,
        //                 jiaolian3SelectRight: jiaolian3SelectRight,
        //                 jiaolian3InsertRight: jiaolian3InsertRight,
        //                 jiaolian4SelectLeft: jiaolian4SelectLeft,
        //                 jiaolian4InsertLeft: jiaolian4InsertLeft,
        //                 jiaolian4SelectRight: jiaolian4SelectRight,
        //                 jiaolian4InsertRight: jiaolian4InsertRight,
        //                 jiaolian5SelectLeft: jiaolian5SelectLeft,
        //                 jiaolian5InsertLeft: jiaolian5InsertLeft,
        //                 jiaolian5SelectRight: jiaolian5SelectRight,
        //                 jiaolian6SelectLeft: jiaolian6SelectLeft,
        //                 jiaolian6InsertLeft: jiaolian6InsertLeft,
        //                 jiaolian6SelectRight: jiaolian6SelectRight,
        //                 jiaolian6InsertRight: jiaolian6InsertRight,
        //                 fujianSelect1: fujianSelect1,
        //                 fujianSelect2: fujianSelect2,
        //                 fujianSelect3: fujianSelect3,
        //                 fujianSelect4: fujianSelect4,
        //                 pinpaiSelect1: pinpaiSelect1,
        //                 pinpaiSelect2: pinpaiSelect2,
        //                 pinpaiSelect3: pinpaiSelect3,
        //                 pinpaiSelect4: pinpaiSelect4,
        //                 fujianShuliang1: fujianShuliang1,
        //                 fujianShuliang2: fujianShuliang2,
        //                 fujianShuliang3: fujianShuliang3,
        //                 fujianShuliang4: fujianShuliang4,
        //                 qita: qita,
        //                 sumShuliang1: sumShuliang1,
        //                 danjia1: danjia1,
        //                 sumJine1: sumJine1,
        //                 sumShuliang2: sumShuliang2,
        //                 danjia2: danjia2,
        //                 sumJine2: sumJine2
        //             }
        //             $ajax({
        //                 type: 'post',
        //                 url: '/lkxd/add',
        //                 data: JSON.stringify({
        //                     addInfo: arr
        //                 }),
        //                 dataType: 'json',
        //                 contentType: 'application/json;charset=utf-8'
        //             }, false, '', function (res) {
        //                 if (res.code == 200) {
        //                     swal("", res.msg, "success");
        //                     $('#add-form')[0].reset();
        //                     getList();
        //                     $('#add-close-btn').click();
        //                 }
        //             })
        //         }
        //     }
        //     // }
        // });
        for (i = 0; i < 20; i++) {
                    if (i == 0) {
                        customerName = $("#add-customerName").val();
                        insertDate = $("#add-insertDate").val();
                        orderNumber = $("#add-orderNumber").val();
                        shippingAddress = $("#add-shippingAddress").val();
                        phone = $("#add-phone").val();
                        shippingType = $("#add-shippingType").val();
                        installAddress = $("#add-installAddress").val();
                        customerNumber = $("#add-customerNumber").val();
                        pinyin = $("#add-pinyin").val();
                        customerNameRenyuan = $("#add-customerNameRenyuan").val();
                        height = $("#add-height").val();
                        width = $("#add-width").val();
                        num = $("#add-num").val();
                        lvxingcai = $("#add-lvxingcai").val();
                        lvcaiYanse = $("#add-lvcaiYanse").val();
                        boliShenjiagong = $("#add-boliShenjiagong").val();
                        boliYanse = $("#add-boliYanse").val();
                        lashouXinghao = $("#add-lashouXinghao").val();
                        jiaoliankongFangxiangLeft = $("#add-jiaoliankongFangxiangLeft").val();
                        jiaoliankongFangxiangRight = $("#add-jiaoliankongFangxiangRight").val();
                        lashouShuliangLeft = $("#add-lashouShuliangLeft").val();
                        lashouShuliangRight = $("#add-lashouShuliangRight").val();
                        lashouweiSelectLeft = $("#add-lashouweiSelectLeft").val();
                        lashouweiInsertLeft = $("#add-lashouweiInsertLeft").val();
                        lashouweiSelectRight = $("#add-lashouweiSelectRight").val();
                        lashouweiInsertRight = $("#add-lashouweiInsertRight").val();
                        zhuangsuoshuliangInsertLeft1 = $("#add-zhuangsuoshuliangInsertLeft1").val();
                        zhuangsuoshuliangInsertRight1 = $("#add-zhuangsuoshuliangInsertRight1").val();
                        zhuangsuofangweiInsertLeft1 = $("#add-zhuangsuofangweiInsertLeft1").val();
                        zhuangsuofangweiInsertLeft2 = $("#add-zhuangsuofangweiInsertLeft2").val();
                        zhuangsuofangweiInsertRight1 = $("#add-zhuangsuofangweiInsertRight1").val();
                        zhuangsuofangweiInsertRight2 = $("#add-zhuangsuofangweiInsertRight2").val();
                        kaijiaolian = $("#add-kaijiaolian").val();
                        jiaolian1SelectLeft = $("#add-jiaolian1SelectLeft").val();
                        jiaolian1InsertLeft = $("#add-jiaolian1InsertLeft").val();
                        iaolian1SelectRight = $("#add-iaolian1SelectRight").val();
                        jiaolian1InsertRight = $("#add-jiaolian1InsertRight").val();
                        jiaolian2SelectLeft = $("#add-jiaolian2SelectLeft").val();
                        jiaolian2InsertLeft = $("#add-jiaolian2InsertLeft").val();
                        jiaolian2SelectRight = $("#add-jiaolian2SelectRight").val();
                        jiaolian2InsertRight = $("#add-jiaolian2InsertRight").val();
                        jiaolian3SelectLeft = $("#add-jiaolian3SelectLeft").val();
                        jiaolian3InsertLeft = $("#add-jiaolian3InsertLeft").val();
                        jiaolian3SelectRight = $("#add-jiaolian3SelectRight").val();
                        jiaolian3InsertRight = $("#add-jiaolian3InsertRight").val();
                        jiaolian4SelectLeft = $("#add-jiaolian4SelectLeft").val();
                        jiaolian4InsertLeft = $("#add-jiaolian4InsertLeft").val();
                        jiaolian4SelectRight = $("#add-jiaolian4SelectRight").val();
                        jiaolian4InsertRight = $("#add-jiaolian4InsertRight").val();
                        jiaolian5SelectLeft = $("#add-jiaolian5SelectLeft").val();
                        jiaolian5InsertLeft = $("#add-jiaolian5InsertLeft").val();
                        jiaolian5SelectRight = $("#add-jiaolian5SelectRight").val();
                        jiaolian6SelectLeft = $("#add-jiaolian6SelectLeft").val();
                        jiaolian6InsertLeft = $("#add-jiaolian6InsertLeft").val();
                        jiaolian6SelectRight = $("#add-jiaolian6SelectRight").val();
                        jiaolian6InsertRight = $("#add-jiaolian6InsertRight").val();
                        fujianSelect1 = $("#add-fujianSelect1").val();
                        fujianSelect2 = $("#add-fujianSelect2").val();
                        fujianSelect3 = $("#add-fujianSelect3").val();
                        fujianSelect4 = $("#add-fujianSelect4").val();
                        pinpaiSelect1 = $("#add-pinpaiSelect1").val();
                        pinpaiSelect2 = $("#add-pinpaiSelect2").val();
                        pinpaiSelect3 = $("#add-pinpaiSelect3").val();
                        pinpaiSelect4 = $("#add-pinpaiSelect4").val();
                        fujianShuliang1 = $("#add-fujianShuliang1").val();
                        fujianShuliang2 = $("#add-fujianShuliang2").val();
                        fujianShuliang3 = $("#add-fujianShuliang3").val();
                        fujianShuliang4 = $("#add-fujianShuliang4").val();
                        qita = $("#add-qita").val();
                        sumShuliang1 = $("#add-sumShuliang1").val();
                        danjia1 = $("#add-danjia1").val();
                        sumJine1 = $("#add-sumJine1").val();
                        sumShuliang2 = $("#add-sumShuliang2").val();
                        danjia2 = $("#add-danjia2").val();
                        sumJine2 = $("#add-sumJine2").val();
                        wancheng = $("#add-wancheng").val();
                        guanlian = i;
                        var arr = {
                            customerName: customerName,
                            insertDate: insertDate,
                            orderNumber: orderNumber,
                            shippingAddress: shippingAddress,
                            phone: phone,
                            shippingType: shippingType,
                            installAddress: installAddress,
                            customerNumber: customerNumber,
                            pinyin: pinyin,
                            customerNameRenyuan: customerNameRenyuan,
                            height: height,
                            width: width,
                            num: num,
                            lvxingcai: lvxingcai,
                            lvcaiYanse: lvcaiYanse,
                            boliShenjiagong: boliShenjiagong,
                            boliYanse: boliYanse,
                            lashouXinghao: lashouXinghao,
                            jiaoliankongFangxiangLeft: jiaoliankongFangxiangLeft,
                            jiaoliankongFangxiangRight: jiaoliankongFangxiangRight,
                            lashouShuliangLeft: lashouShuliangLeft,
                            lashouShuliangRight: lashouShuliangRight,
                            lashouweiSelectLeft: lashouweiSelectLeft,
                            lashouweiInsertLeft: lashouweiInsertLeft,
                            lashouweiSelectRight: lashouweiSelectRight,
                            lashouweiInsertRight: lashouweiInsertRight,
                            zhuangsuoshuliangInsertLeft1: zhuangsuoshuliangInsertLeft1,
                            zhuangsuoshuliangInsertRight1: zhuangsuoshuliangInsertRight1,
                            zhuangsuofangweiInsertLeft1: zhuangsuofangweiInsertLeft1,
                            zhuangsuofangweiInsertLeft2: zhuangsuofangweiInsertLeft2,
                            zhuangsuofangweiInsertRight1: zhuangsuofangweiInsertRight1,
                            zhuangsuofangweiInsertRight2: zhuangsuofangweiInsertRight2,
                            kaijiaolian: kaijiaolian,
                            jiaolian1SelectLeft: jiaolian1SelectLeft,
                            jiaolian1InsertLeft: jiaolian1InsertLeft,
                            iaolian1SelectRight: iaolian1SelectRight,
                            jiaolian1InsertRight: jiaolian1InsertRight,
                            jiaolian2SelectLeft: jiaolian2SelectLeft,
                            jiaolian2InsertLeft: jiaolian2InsertLeft,
                            jiaolian2SelectRight: jiaolian2SelectRight,
                            jiaolian2InsertRight: jiaolian2InsertRight,
                            jiaolian3SelectLeft: jiaolian3SelectLeft,
                            jiaolian3InsertLeft: jiaolian3InsertLeft,
                            jiaolian3SelectRight: jiaolian3SelectRight,
                            jiaolian3InsertRight: jiaolian3InsertRight,
                            jiaolian4SelectLeft: jiaolian4SelectLeft,
                            jiaolian4InsertLeft: jiaolian4InsertLeft,
                            jiaolian4SelectRight: jiaolian4SelectRight,
                            jiaolian4InsertRight: jiaolian4InsertRight,
                            jiaolian5SelectLeft: jiaolian5SelectLeft,
                            jiaolian5InsertLeft: jiaolian5InsertLeft,
                            jiaolian5SelectRight: jiaolian5SelectRight,
                            jiaolian6SelectLeft: jiaolian6SelectLeft,
                            jiaolian6InsertLeft: jiaolian6InsertLeft,
                            jiaolian6SelectRight: jiaolian6SelectRight,
                            jiaolian6InsertRight: jiaolian6InsertRight,
                            fujianSelect1: fujianSelect1,
                            fujianSelect2: fujianSelect2,
                            fujianSelect3: fujianSelect3,
                            fujianSelect4: fujianSelect4,
                            pinpaiSelect1: pinpaiSelect1,
                            pinpaiSelect2: pinpaiSelect2,
                            pinpaiSelect3: pinpaiSelect3,
                            pinpaiSelect4: pinpaiSelect4,
                            fujianShuliang1: fujianShuliang1,
                            fujianShuliang2: fujianShuliang2,
                            fujianShuliang3: fujianShuliang3,
                            fujianShuliang4: fujianShuliang4,
                            qita: qita,
                            sumShuliang1: sumShuliang1,
                            danjia1: danjia1,
                            sumJine1: sumJine1,
                            sumShuliang2: sumShuliang2,
                            danjia2: danjia2,
                            sumJine2: sumJine2,
                            wancheng: wancheng,
                            guanlian: guanlian,
                        }
                        $ajax({
                            type: 'post',
                            url: '/lkxd/add',
                            // url: '/blxd/add',
                            data: JSON.stringify({
                                addInfo: arr
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
                if ($("add-wancheng").val("已审验")) {
                    orderNumber = $("#add-orderNumber").val();
                    pinyin = $("#add-pinyin").val();
                    boliYanse = $("#add-boliYanse").val();
                    boliShenjiagong = $("#add-boliShenjiagong").val();
                    num = $("#add-num").val();
                    height = $("#add-height").val();
                    width = $("#add-width").val();
                    gl = $("#add-orderNumber").val();
                    guanlian = gl + i
                    var arrbl = {
                        orderNumber: orderNumber,
                        pinyin: pinyin,
                        boliYanse: boliYanse,
                        boliShenjiagong: boliShenjiagong,
                        num: num,
                        height: height,
                        width: width,
                        guanlian: guanlian,
                    }
                    $ajax({
                        type: 'post',
                        url: '/blxd/add',
                        data: JSON.stringify({
                            addInfo: arrbl
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
            } else {
                customerName = $("#add-customerName").val();
                insertDate = $("#add-insertDate").val();
                orderNumber = $("#add-orderNumber").val();
                shippingAddress = $("#add-shippingAddress").val();
                phone = $("#add-phone").val();
                shippingType = $("#add-shippingType").val();
                installAddress = $("#add-installAddress").val();
                customerNumber = $("#add-customerNumber").val();
                pinyin = $("#add-pinyin").val();
                customerNameRenyuan = $("#add-customerNameRenyuan").val();
                height = $("#add-height" + i).val();
                if (height == "" || height == null) {
                    break;
                }
                width = $("#add-width" + i).val();
                num = $("#add-num" + i).val();
                lvxingcai = $("#add-lvxingcai" + i).val();
                lvcaiYanse = $("#add-lvcaiYanse" + i).val();
                boliShenjiagong = $("#add-boliShenjiagong" + i).val();
                boliYanse = $("#add-boliYanse" + i).val();
                lashouXinghao = $("#add-lashouXinghao" + i).val();
                jiaoliankongFangxiangLeft = $("#add-jiaoliankongFangxiangLeft" + i).val();
                jiaoliankongFangxiangRight = $("#add-jiaoliankongFangxiangRight" + i).val();
                lashouShuliangLeft = $("#add-lashouShuliangLeft" + i).val();
                lashouShuliangRight = $("#add-lashouShuliangRight" + i).val();
                lashouweiSelectLeft = $("#add-lashouweiSelectLeft" + i).val();
                lashouweiInsertLeft = $("#add-lashouweiInsertLeft" + i).val();
                lashouweiSelectRight = $("#add-lashouweiSelectRight" + i).val();
                lashouweiInsertRight = $("#add-lashouweiInsertRight" + i).val();
                zhuangsuoshuliangInsertLeft1 = $("#add-zhuangsuoshuliangInsertLeft1" + i).val();
                zhuangsuoshuliangInsertRight1 = $("#add-zhuangsuoshuliangInsertRight1" + i).val();
                zhuangsuofangweiInsertLeft1 = $("#add-zhuangsuofangweiInsertLeft1" + i).val();
                zhuangsuofangweiInsertLeft2 = $("#add-zhuangsuofangweiInsertLeft2" + i).val();
                zhuangsuofangweiInsertRight1 = $("#add-zhuangsuofangweiInsertRight1" + i).val();
                zhuangsuofangweiInsertRight2 = $("#add-zhuangsuofangweiInsertRight2" + i).val();
                kaijiaolian = $("#add-kaijiaolian" + i).val();
                jiaolian1SelectLeft = $("#add-jiaolian1SelectLeft" + i).val();
                jiaolian1InsertLeft = $("#add-jiaolian1InsertLeft" + i).val();
                iaolian1SelectRight = $("#add-iaolian1SelectRight" + i).val();
                jiaolian1InsertRight = $("#add-jiaolian1InsertRight" + i).val();
                jiaolian2SelectLeft = $("#add-jiaolian2SelectLeft" + i).val();
                jiaolian2InsertLeft = $("#add-jiaolian2InsertLeft" + i).val();
                jiaolian2SelectRight = $("#add-jiaolian2SelectRight" + i).val();
                jiaolian2InsertRight = $("#add-jiaolian2InsertRight" + i).val();
                jiaolian3SelectLeft = $("#add-jiaolian3SelectLeft" + i).val();
                jiaolian3InsertLeft = $("#add-jiaolian3InsertLeft" + i).val();
                jiaolian3SelectRight = $("#add-jiaolian3SelectRight" + i).val();
                jiaolian3InsertRight = $("#add-jiaolian3InsertRight" + i).val();
                jiaolian4SelectLeft = $("#add-jiaolian4SelectLeft" + i).val();
                jiaolian4InsertLeft = $("#add-jiaolian4InsertLeft" + i).val();
                jiaolian4SelectRight = $("#add-jiaolian4SelectRight" + i).val();
                jiaolian4InsertRight = $("#add-jiaolian4InsertRight" + i).val();
                jiaolian5SelectLeft = $("#add-jiaolian5SelectLeft" + i).val();
                jiaolian5InsertLeft = $("#add-jiaolian5InsertLeft" + i).val();
                jiaolian5SelectRight = $("#add-jiaolian5SelectRight" + i).val();
                jiaolian6SelectLeft = $("#add-jiaolian6SelectLeft" + i).val();
                jiaolian6InsertLeft = $("#add-jiaolian6InsertLeft" + i).val();
                jiaolian6SelectRight = $("#add-jiaolian6SelectRight" + i).val();
                jiaolian6InsertRight = $("#add-jiaolian6InsertRight" + i).val();
                fujianSelect1 = $("#add-fujianSelect1" + i).val();
                fujianSelect2 = $("#add-fujianSelect2" + i).val();
                fujianSelect3 = $("#add-fujianSelect3" + i).val();
                fujianSelect4 = $("#add-fujianSelect4" + i).val();
                pinpaiSelect1 = $("#add-pinpaiSelect1" + i).val();
                pinpaiSelect2 = $("#add-pinpaiSelect2" + i).val();
                pinpaiSelect3 = $("#add-pinpaiSelect3" + i).val();
                pinpaiSelect4 = $("#add-pinpaiSelect4" + i).val();
                fujianShuliang1 = $("#add-fujianShuliang1" + i).val();
                fujianShuliang2 = $("#add-fujianShuliang2" + i).val();
                fujianShuliang3 = $("#add-fujianShuliang3" + i).val();
                fujianShuliang4 = $("#add-fujianShuliang4" + i).val();
                qita = $("#add-qita" + i).val();
                sumShuliang1 = $("#add-sumShuliang1" + i).val();
                danjia1 = $("#add-danjia1" + i).val();
                sumJine1 = $("#add-sumJine1" + i).val();
                sumShuliang2 = $("#add-sumShuliang2" + i).val();
                danjia2 = $("#add-danjia2" + i).val();
                sumJine2 = $("#add-sumJine2" + i).val();
                gl = $("#add-orderNumber" + i).val();
                guanlian = gl + i
                var arr = {
                    customerName: customerName,
                    insertDate: insertDate,
                    orderNumber: orderNumber,
                    shippingAddress: shippingAddress,
                    phone: phone,
                    shippingType: shippingType,
                    installAddress: installAddress,
                    customerNumber: customerNumber,
                    pinyin: pinyin,
                    customerNameRenyuan: customerNameRenyuan,
                    height: height,
                    width: width,
                    num: num,
                    lvxingcai: lvxingcai,
                    lvcaiYanse: lvcaiYanse,
                    boliShenjiagong: boliShenjiagong,
                    boliYanse: boliYanse,
                    lashouXinghao: lashouXinghao,
                    jiaoliankongFangxiangLeft: jiaoliankongFangxiangLeft,
                    jiaoliankongFangxiangRight: jiaoliankongFangxiangRight,
                    lashouShuliangLeft: lashouShuliangLeft,
                    lashouShuliangRight: lashouShuliangRight,
                    lashouweiSelectLeft: lashouweiSelectLeft,
                    lashouweiInsertLeft: lashouweiInsertLeft,
                    lashouweiSelectRight: lashouweiSelectRight,
                    lashouweiInsertRight: lashouweiInsertRight,
                    zhuangsuoshuliangInsertLeft1: zhuangsuoshuliangInsertLeft1,
                    zhuangsuoshuliangInsertRight1: zhuangsuoshuliangInsertRight1,
                    zhuangsuofangweiInsertLeft1: zhuangsuofangweiInsertLeft1,
                    zhuangsuofangweiInsertLeft2: zhuangsuofangweiInsertLeft2,
                    zhuangsuofangweiInsertRight1: zhuangsuofangweiInsertRight1,
                    zhuangsuofangweiInsertRight2: zhuangsuofangweiInsertRight2,
                    kaijiaolian: kaijiaolian,
                    jiaolian1SelectLeft: jiaolian1SelectLeft,
                    jiaolian1InsertLeft: jiaolian1InsertLeft,
                    iaolian1SelectRight: iaolian1SelectRight,
                    jiaolian1InsertRight: jiaolian1InsertRight,
                    jiaolian2SelectLeft: jiaolian2SelectLeft,
                    jiaolian2InsertLeft: jiaolian2InsertLeft,
                    jiaolian2SelectRight: jiaolian2SelectRight,
                    jiaolian2InsertRight: jiaolian2InsertRight,
                    jiaolian3SelectLeft: jiaolian3SelectLeft,
                    jiaolian3InsertLeft: jiaolian3InsertLeft,
                    jiaolian3SelectRight: jiaolian3SelectRight,
                    jiaolian3InsertRight: jiaolian3InsertRight,
                    jiaolian4SelectLeft: jiaolian4SelectLeft,
                    jiaolian4InsertLeft: jiaolian4InsertLeft,
                    jiaolian4SelectRight: jiaolian4SelectRight,
                    jiaolian4InsertRight: jiaolian4InsertRight,
                    jiaolian5SelectLeft: jiaolian5SelectLeft,
                    jiaolian5InsertLeft: jiaolian5InsertLeft,
                    jiaolian5SelectRight: jiaolian5SelectRight,
                    jiaolian6SelectLeft: jiaolian6SelectLeft,
                    jiaolian6InsertLeft: jiaolian6InsertLeft,
                    jiaolian6SelectRight: jiaolian6SelectRight,
                    jiaolian6InsertRight: jiaolian6InsertRight,
                    fujianSelect1: fujianSelect1,
                    fujianSelect2: fujianSelect2,
                    fujianSelect3: fujianSelect3,
                    fujianSelect4: fujianSelect4,
                    pinpaiSelect1: pinpaiSelect1,
                    pinpaiSelect2: pinpaiSelect2,
                    pinpaiSelect3: pinpaiSelect3,
                    pinpaiSelect4: pinpaiSelect4,
                    fujianShuliang1: fujianShuliang1,
                    fujianShuliang2: fujianShuliang2,
                    fujianShuliang3: fujianShuliang3,
                    fujianShuliang4: fujianShuliang4,
                    qita: qita,
                    sumShuliang1: sumShuliang1,
                    danjia1: danjia1,
                    sumJine1: sumJine1,
                    sumShuliang2: sumShuliang2,
                    danjia2: danjia2,
                    sumJine2: sumJine2,
                    guanlian: guanlian,
                }
                $ajax({
                    type: 'post',
                    url: '/lkxd/add',
                    // url: '/blxd/add',
                    data: JSON.stringify({
                        addInfo: arr
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
        }
        // }
    });

    //点击修改按钮显示弹窗
    $('#update-btn').click(function () {
        var tdElements = document.getElementsByTagName("td");
        for (var i = 0; i < tdElements.length; i++) {
            tdElements[i].style.padding = "0";
        }
        getPfsl();
        getPfje();
        getZcsl();
        getZcje();
        getUpdJe();
        getToken();
        let rows = getTableSelection('#lkxdTable');
        if (rows.length > 1 || rows.length == 0) {
            swal('请选择一条数据修改!');
            return;
        }
        $('#loading-overlay').show();
        var orderNumber = rows[0].data.orderNumber

        $ajax({
            type: 'post',
            url: '/lkxd/geton',
            data: {
                orderNumber: orderNumber
            }
        }, false, '', function (res) {
            $("#update-customerName").val(res.data[0].customerName);
            $("#update-insertDate").val(res.data[0].insertDate);
            $("#update-orderNumber").val(res.data[0].orderNumber);
            $("#update-shippingAddress").val(res.data[0].shippingAddress);
            $("#update-phone").val(res.data[0].phone);
            $("#update-shippingType").val(res.data[0].shippingType);
            $("#update-installAddress").val(res.data[0].installAddress);
            $("#update-customerNumber").val(res.data[0].customerNumber);
            // $("#update-pinyin").val(res, data.pinyin);
            $("#update-customerNameRenyuan").val(res.data[0].customerNameRenyuan);
            $("#update-wancheng").val(res.data[0].wancheng);
            for (i = 0; i < res.data.length; i++) {
                if (i == 0) {
                    $('#update-height').val(res.data[0].height);
                    $('#update-width').val(res.data[0].width);
                    $('#update-num').val(res.data[0].num);
                    $('#update-lvxingcai').val(res.data[0].lvxingcai);
                    $('#update-lvcaiYanse').val(res.data[0].lvcaiYanse);
                    $('#update-boliShenjiagong').val(res.data[0].boliShenjiagong);
                    $('#update-boliYanse').val(res.data[0].boliYanse);
                    $('#update-lashouXinghao').val(res.data[0].lashouXinghao);
                    $('#update-jiaoliankongFangxiangLeft').val(res.data[0].jiaoliankongFangxiangLeft);
                    $('#update-jiaoliankongFangxiangRight').val(res.data[0].jiaoliankongFangxiangRight);
                    $('#update-lashouShuliangLeft').val(res.data[0].lashouShuliangLeft);
                    $('#update-lashouShuliangRight').val(res.data[0].lashouShuliangRight);
                    $('#update-lashouweiSelectLeft').val(res.data[0].lashouweiSelectLeft);
                    $('#update-lashouweiInsertLeft').val(res.data[0].lashouweiInsertLeft);
                    $('#update-lashouweiSelectRight').val(res.data[0].lashouweiSelectRight);
                    $('#update-lashouweiInsertRight').val(res.data[0].lashouweiInsertRight);
                    $('#update-zhuangsuoshuliangInsertLeft1').val(res.data[0].zhuangsuoshuliangInsertLeft1);
                    $('#update-zhuangsuoshuliangInsertRight1').val(res.data[0].zhuangsuoshuliangInsertRight1);
                    $('#update-zhuangsuofangweiInsertLeft1').val(res.data[0].zhuangsuofangweiInsertLeft1);
                    $('#update-zhuangsuofangweiInsertLeft2').val(res.data[0].zhuangsuofangweiInsertLeft2);
                    $('#update-zhuangsuofangweiInsertRight1').val(res.data[0].zhuangsuofangweiInsertRight1);
                    $('#update-zhuangsuofangweiInsertRight2').val(res.data[0].zhuangsuofangweiInsertRight2);
                    $('#update-kaijiaolian').val(res.data[0].kaijiaolian);
                    $('#update-jiaolian1SelectLeft').val(res.data[0].jiaolian1SelectLeft);
                    $('#update-jiaolian1InsertLeft').val(res.data[0].jiaolian1InsertLeft);
                    $('#update-jiaolian1SelectRight').val(res.data[0].jiaolian1SelectRight);
                    $('#update-jiaolian1InsertRight').val(res.data[0].jiaolian1InsertRight);
                    $('#update-jiaolian2SelectLeft').val(res.data[0].jiaolian2SelectLeft);
                    $('#update-jiaolian2InsertLeft').val(res.data[0].jiaolian2InsertLeft);
                    $('#update-jiaolian2SelectRight').val(res.data[0].jiaolian2SelectRight);
                    $('#update-jiaolian2InsertRight').val(res.data[0].jiaolian2InsertRight);
                    $('#update-jiaolian3SelectLeft').val(res.data[0].jiaolian3SelectLeft);
                    $('#update-jiaolian3InsertLeft').val(res.data[0].jiaolian3InsertLeft);
                    $('#update-jiaolian3SelectRight').val(res.data[0].jiaolian3SelectRight);
                    $('#update-jiaolian3InsertRight').val(res.data[0].jiaolian3InsertRight);
                    $('#update-jiaolian4SelectLeft').val(res.data[0].jiaolian4SelectLeft);
                    $('#update-jiaolian4InsertLeft').val(res.data[0].jiaolian4InsertLeft);
                    $('#update-jiaolian4SelectRight').val(res.data[0].jiaolian4SelectRight);
                    $('#update-jiaolian4InsertRight').val(res.data[0].jiaolian4InsertRight);
                    $('#update-jiaolian5SelectLeft').val(res.data[0].jiaolian5SelectLeft);
                    $('#update-jiaolian5InsertLeft').val(res.data[0].jiaolian5InsertLeft);
                    $('#update-jiaolian5SelectRight').val(res.data[0].jiaolian5SelectRight);
                    $('#update-jiaolian5InsertRight').val(res.data[0].jiaolian5InsertRight);
                    $('#update-jiaolian6SelectLeft').val(res.data[0].jiaolian6SelectLeft);
                    $('#update-jiaolian6InsertLeft').val(res.data[0].jiaolian6InsertLeft);
                    $('#update-jiaolian6SelectRight').val(res.data[0].jiaolian6SelectRight);
                    $('#update-jiaolian6InsertRight').val(res.data[0].jiaolian6InsertRight);
                    $('#update-fujianSelect1').val(res.data[0].fujianSelect1);
                    $('#update-fujianSelect2').val(res.data[0].fujianSelect2);
                    $('#update-fujianSelect3').val(res.data[0].fujianSelect3);
                    $('#update-fujianSelect4').val(res.data[0].fujianSelect4);
                    $('#update-pinpaiSelect1').val(res.data[0].pinpaiSelect1);
                    $('#update-pinpaiSelect2').val(res.data[0].pinpaiSelect2);
                    $('#update-pinpaiSelect3').val(res.data[0].pinpaiSelect3);
                    $('#update-pinpaiSelect4').val(res.data[0].pinpaiSelect4);
                    $('#update-fujianShuliang1').val(res.data[0].fujianShuliang1);
                    $('#update-fujianShuliang2').val(res.data[0].fujianShuliang2);
                    $('#update-fujianShuliang3').val(res.data[0].fujianShuliang3);
                    $('#update-fujianShuliang4').val(res.data[0].fujianShuliang4);
                    $('#update-sumShuliang1').val(res.data[0].sumShuliang1);
                    $('#update-danjia1').val(res.data[0].danjia1);
                    $('#update-sumJine1').val(res.data[0].sumJine1);
                    $('#update-sumShuliang2').val(res.data[0].sumShuliang2);
                    $('#update-danjia2').val(res.data[0].danjia2);
                    $('#update-sumJine2').val(res.data[0].sumJine2);
                    $('#update-wancheng').val(res.data[0].wancheng);
                        $('#id6').val(res.data[0].id);
                }else{
                    $('#update-height'+i).val(res.data[i].height);
                    $('#update-width'+i).val(res.data[i].width);
                    $('#update-num'+i).val(res.data[i].num);
                    $('#update-lvxingcai'+i).val(res.data[i].lvxingcai);
                    $('#update-lvcaiYanse'+i).val(res.data[i].lvcaiYanse);
                    $('#update-boliShenjiagong'+i).val(res.data[i].boliShenjiagong);
                    $('#update-boliYanse'+i).val(res.data[i].boliYanse);
                    $('#update-lashouXinghao'+i).val(res.data[i].lashouXinghao);
                    $('#update-jiaoliankongFangxiangLeft'+i).val(res.data[i].jiaoliankongFangxiangLeft);
                    $('#update-jiaoliankongFangxiangRight'+i).val(res.data[i].jiaoliankongFangxiangRight);
                    $('#update-lashouShuliangLeft'+i).val(res.data[i].lashouShuliangLeft);
                    $('#update-lashouShuliangRight'+i).val(res.data[i].lashouShuliangRight);
                    $('#update-lashouweiSelectLeft'+i).val(res.data[i].lashouweiSelectLeft);
                    $('#update-lashouweiInsertLeft'+i).val(res.data[i].lashouweiInsertLeft);
                    $('#update-lashouweiSelectRight'+i).val(res.data[i].lashouweiSelectRight);
                    $('#update-lashouweiInsertRight'+i).val(res.data[i].lashouweiInsertRight);
                    $('#update-zhuangsuoshuliangInsertLeft1'+i).val(res.data[i].zhuangsuoshuliangInsertLeft1);
                    $('#update-zhuangsuoshuliangInsertRight1'+i).val(res.data[i].zhuangsuoshuliangInsertRight1);
                    $('#update-zhuangsuofangweiInsertLeft1'+i).val(res.data[i].zhuangsuofangweiInsertLeft1);
                    $('#update-zhuangsuofangweiInsertLeft2'+i).val(res.data[i].zhuangsuofangweiInsertLeft2);
                    $('#update-zhuangsuofangweiInsertRight1'+i).val(res.data[i].zhuangsuofangweiInsertRight1);
                    $('#update-zhuangsuofangweiInsertRight2'+i).val(res.data[i].zhuangsuofangweiInsertRight2);
                    $('#update-kaijiaolian'+i).val(res.data[i].kaijiaolian);
                    $('#update-jiaolian1SelectLeft'+i).val(res.data[i].jiaolian1SelectLeft);
                    $('#update-jiaolian1InsertLeft'+i).val(res.data[i].jiaolian1InsertLeft);
                    $('#update-jiaolian1SelectRight'+i).val(res.data[i].jiaolian1SelectRight);
                    $('#update-jiaolian1InsertRight'+i).val(res.data[i].jiaolian1InsertRight);
                    $('#update-jiaolian2SelectLeft'+i).val(res.data[i].jiaolian2SelectLeft);
                    $('#update-jiaolian2InsertLeft'+i).val(res.data[i].jiaolian2InsertLeft);
                    $('#update-jiaolian2SelectRight'+i).val(res.data[i].jiaolian2SelectRight);
                    $('#update-jiaolian2InsertRight'+i).val(res.data[i].jiaolian2InsertRight);
                    $('#update-jiaolian3SelectLeft'+i).val(res.data[i].jiaolian3SelectLeft);
                    $('#update-jiaolian3InsertLeft'+i).val(res.data[i].jiaolian3InsertLeft);
                    $('#update-jiaolian3SelectRight'+i).val(res.data[i].jiaolian3SelectRight);
                    $('#update-jiaolian3InsertRight'+i).val(res.data[i].jiaolian3InsertRight);
                    $('#update-jiaolian4SelectLeft'+i).val(res.data[i].jiaolian4SelectLeft);
                    $('#update-jiaolian4InsertLeft'+i).val(res.data[i].jiaolian4InsertLeft);
                    $('#update-jiaolian4SelectRight'+i).val(res.data[i].jiaolian4SelectRight);
                    $('#update-jiaolian4InsertRight'+i).val(res.data[i].jiaolian4InsertRight);
                    $('#update-jiaolian5SelectLeft'+i).val(res.data[i].jiaolian5SelectLeft);
                    $('#update-jiaolian5InsertLeft'+i).val(res.data[i].jiaolian5InsertLeft);
                    $('#update-jiaolian5SelectRight'+i).val(res.data[i].jiaolian5SelectRight);
                    $('#update-jiaolian5InsertRight'+i).val(res.data[i].jiaolian5InsertRight);
                    $('#update-jiaolian6SelectLeft'+i).val(res.data[i].jiaolian6SelectLeft);
                    $('#update-jiaolian6InsertLeft'+i).val(res.data[i].jiaolian6InsertLeft);
                    $('#update-jiaolian6SelectRight'+i).val(res.data[i].jiaolian6SelectRight);
                    $('#update-jiaolian6InsertRight'+i).val(res.data[i].jiaolian6InsertRight);
                    $('#update-fujianSelect1'+i).val(res.data[i].fujianSelect1);
                    $('#update-fujianSelect2'+i).val(res.data[i].fujianSelect2);
                    $('#update-fujianSelect3'+i).val(res.data[i].fujianSelect3);
                    $('#update-fujianSelect4'+i).val(res.data[i].fujianSelect4);
                    $('#update-pinpaiSelect1'+i).val(res.data[i].pinpaiSelect1);
                    $('#update-pinpaiSelect2'+i).val(res.data[i].pinpaiSelect2);
                    $('#update-pinpaiSelect3'+i).val(res.data[i].pinpaiSelect3);
                    $('#update-pinpaiSelect4'+i).val(res.data[i].pinpaiSelect4);
                    $('#update-fujianShuliang1'+i).val(res.data[i].fujianShuliang1);
                    $('#update-fujianShuliang2'+i).val(res.data[i].fujianShuliang2);
                    $('#update-fujianShuliang3'+i).val(res.data[i].fujianShuliang3);
                    $('#update-fujianShuliang4'+i).val(res.data[i].fujianShuliang4);
                    $('#update-sumShuliang1'+i).val(res.data[i].sumShuliang1);
                    $('#update-danjia1'+i).val(res.data[i].danjia1);
                    $('#update-sumJine1'+i).val(res.data[i].sumJine1);
                    $('#update-sumShuliang2'+i).val(res.data[i].sumShuliang2);
                    $('#update-danjia2'+i).val(res.data[i].danjia2);
                    $('#update-sumJine2'+i).val(res.data[i].sumJine2);
                    $('#id6'+i).val(res.data[0].id);
                }
            }
            $('#update-modal').modal('show');
            $('#loading-overlay').hide();

        })


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
        for (i = 0; i < 20; i++) {
            if (i == 0) {
                customerName = $("#update-customerName").val();
                insertDate = $("#update-insertDate").val();
                orderNumber = $("#update-orderNumber").val();
                shippingAddress = $("#update-shippingAddress").val();
                phone = $("#update-phone").val();
                shippingType = $("#update-shippingType").val();
                installAddress = $("#update-installAddress").val();
                customerNumber = $("#update-customerNumber").val();
                pinyin = $("#update-pinyin").val();
                customerNameRenyuan = $("#update-customerNameRenyuan").val();
                height = $("#update-height").val();
                width = $("#update-width").val();
                num = $("#update-num").val();
                lvxingcai = $("#update-lvxingcai").val();
                lvcaiYanse = $("#update-lvcaiYanse").val();
                boliShenjiagong = $("#update-boliShenjiagong").val();
                boliYanse = $("#update-boliYanse").val();
                lashouXinghao = $("#update-lashouXinghao").val();
                jiaoliankongFangxiangLeft = $("#update-jiaoliankongFangxiangLeft").val();
                jiaoliankongFangxiangRight = $("#update-jiaoliankongFangxiangRight").val();
                lashouShuliangLeft = $("#update-lashouShuliangLeft").val();
                lashouShuliangRight = $("#update-lashouShuliangRight").val();
                lashouweiSelectLeft = $("#update-lashouweiSelectLeft").val();
                lashouweiInsertLeft = $("#update-lashouweiInsertLeft").val();
                lashouweiSelectRight = $("#update-lashouweiSelectRight").val();
                lashouweiInsertRight = $("#update-lashouweiInsertRight").val();
                zhuangsuoshuliangInsertLeft1 = $("#update-zhuangsuoshuliangInsertLeft1").val();
                zhuangsuoshuliangInsertRight1 = $("#update-zhuangsuoshuliangInsertRight1").val();
                zhuangsuofangweiInsertLeft1 = $("#update-zhuangsuofangweiInsertLeft1").val();
                zhuangsuofangweiInsertLeft2 = $("#update-zhuangsuofangweiInsertLeft2").val();
                zhuangsuofangweiInsertRight1 = $("#update-zhuangsuofangweiInsertRight1").val();
                zhuangsuofangweiInsertRight2 = $("#update-zhuangsuofangweiInsertRight2").val();
                kaijiaolian = $("#update-kaijiaolian").val();
                jiaolian1SelectLeft = $("#update-jiaolian1SelectLeft").val();
                jiaolian1InsertLeft = $("#update-jiaolian1InsertLeft").val();
                iaolian1SelectRight = $("#update-iaolian1SelectRight").val();
                jiaolian1InsertRight = $("#update-jiaolian1InsertRight").val();
                jiaolian2SelectLeft = $("#update-jiaolian2SelectLeft").val();
                jiaolian2InsertLeft = $("#update-jiaolian2InsertLeft").val();
                jiaolian2SelectRight = $("#update-jiaolian2SelectRight").val();
                jiaolian2InsertRight = $("#update-jiaolian2InsertRight").val();
                jiaolian3SelectLeft = $("#update-jiaolian3SelectLeft").val();
                jiaolian3InsertLeft = $("#update-jiaolian3InsertLeft").val();
                jiaolian3SelectRight = $("#update-jiaolian3SelectRight").val();
                jiaolian3InsertRight = $("#update-jiaolian3InsertRight").val();
                jiaolian4SelectLeft = $("#update-jiaolian4SelectLeft").val();
                jiaolian4InsertLeft = $("#update-jiaolian4InsertLeft").val();
                jiaolian4SelectRight = $("#update-jiaolian4SelectRight").val();
                jiaolian4InsertRight = $("#update-jiaolian4InsertRight").val();
                jiaolian5SelectLeft = $("#update-jiaolian5SelectLeft").val();
                jiaolian5InsertLeft = $("#update-jiaolian5InsertLeft").val();
                jiaolian5SelectRight = $("#update-jiaolian5SelectRight").val();
                jiaolian6SelectLeft = $("#update-jiaolian6SelectLeft").val();
                jiaolian6InsertLeft = $("#update-jiaolian6InsertLeft").val();
                jiaolian6SelectRight = $("#update-jiaolian6SelectRight").val();
                jiaolian6InsertRight = $("#update-jiaolian6InsertRight").val();
                fujianSelect1 = $("#update-fujianSelect1").val();
                fujianSelect2 = $("#update-fujianSelect2").val();
                fujianSelect3 = $("#update-fujianSelect3").val();
                fujianSelect4 = $("#update-fujianSelect4").val();
                pinpaiSelect1 = $("#update-pinpaiSelect1").val();
                pinpaiSelect2 = $("#update-pinpaiSelect2").val();
                pinpaiSelect3 = $("#update-pinpaiSelect3").val();
                pinpaiSelect4 = $("#update-pinpaiSelect4").val();
                fujianShuliang1 = $("#update-fujianShuliang1").val();
                fujianShuliang2 = $("#update-fujianShuliang2").val();
                fujianShuliang3 = $("#update-fujianShuliang3").val();
                fujianShuliang4 = $("#update-fujianShuliang4").val();
                qita = $("#update-qita").val();
                sumShuliang1 = $("#update-sumShuliang1").val();
                danjia1 = $("#update-danjia1").val();
                sumJine1 = $("#update-sumJine1").val();
                sumShuliang2 = $("#update-sumShuliang2").val();
                danjia2 = $("#update-danjia2").val();
                sumJine2 = $("#update-sumJine2").val();
                wancheng=$("#update-wancheng").val();
                id=$("#id6").val();
            } else{
                    customerName = $("#update-customerName").val();
                    insertDate = $("#update-insertDate").val();
                    orderNumber = $("#update-orderNumber").val();
                    shippingAddress = $("#update-shippingAddress").val();
                    phone = $("#update-phone").val();
                    shippingType = $("#update-shippingType").val();
                    installAddress = $("#update-installAddress").val();
                    customerNumber = $("#update-customerNumber").val();
                    pinyin = $("#update-pinyin").val();
                    customerNameRenyuan = $("#update-customerNameRenyuan").val();
                    height = $("#update-height" + i).val();
                    if (height == "" || height == null) {
                        break;
                    }
                    width = $("#update-width" + i).val();
                    num = $("#update-num" + i).val();
                    lvxingcai = $("#update-lvxingcai" + i).val();
                    lvcaiYanse = $("#update-lvcaiYanse" + i).val();
                    boliShenjiagong = $("#update-boliShenjiagong" + i).val();
                    boliYanse = $("#update-boliYanse" + i).val();
                    lashouXinghao = $("#update-lashouXinghao" + i).val();
                    jiaoliankongFangxiangLeft = $("#update-jiaoliankongFangxiangLeft" + i).val();
                    jiaoliankongFangxiangRight = $("#update-jiaoliankongFangxiangRight" + i).val();
                    lashouShuliangLeft = $("#update-lashouShuliangLeft" + i).val();
                    lashouShuliangRight = $("#update-lashouShuliangRight" + i).val();
                    lashouweiSelectLeft = $("#update-lashouweiSelectLeft" + i).val();
                    lashouweiInsertLeft = $("#update-lashouweiInsertLeft" + i).val();
                    lashouweiSelectRight = $("#update-lashouweiSelectRight" + i).val();
                    lashouweiInsertRight = $("#update-lashouweiInsertRight" + i).val();
                    zhuangsuoshuliangInsertLeft1 = $("#update-zhuangsuoshuliangInsertLeft1" + i).val();
                    zhuangsuoshuliangInsertRight1 = $("#update-zhuangsuoshuliangInsertRight1" + i).val();
                    zhuangsuofangweiInsertLeft1 = $("#update-zhuangsuofangweiInsertLeft1" + i).val();
                    zhuangsuofangweiInsertLeft2 = $("#update-zhuangsuofangweiInsertLeft2" + i).val();
                    zhuangsuofangweiInsertRight1 = $("#update-zhuangsuofangweiInsertRight1" + i).val();
                    zhuangsuofangweiInsertRight2 = $("#update-zhuangsuofangweiInsertRight2" + i).val();
                    kaijiaolian = $("#update-kaijiaolian" + i).val();
                    jiaolian1SelectLeft = $("#update-jiaolian1SelectLeft" + i).val();
                    jiaolian1InsertLeft = $("#update-jiaolian1InsertLeft" + i).val();
                    iaolian1SelectRight = $("#update-iaolian1SelectRight" + i).val();
                    jiaolian1InsertRight = $("#update-jiaolian1InsertRight" + i).val();
                    jiaolian2SelectLeft = $("#update-jiaolian2SelectLeft" + i).val();
                    jiaolian2InsertLeft = $("#update-jiaolian2InsertLeft" + i).val();
                    jiaolian2SelectRight = $("#update-jiaolian2SelectRight" + i).val();
                    jiaolian2InsertRight = $("#update-jiaolian2InsertRight" + i).val();
                    jiaolian3SelectLeft = $("#update-jiaolian3SelectLeft" + i).val();
                    jiaolian3InsertLeft = $("#update-jiaolian3InsertLeft" + i).val();
                    jiaolian3SelectRight = $("#update-jiaolian3SelectRight" + i).val();
                    jiaolian3InsertRight = $("#update-jiaolian3InsertRight" + i).val();
                    jiaolian4SelectLeft = $("#update-jiaolian4SelectLeft" + i).val();
                    jiaolian4InsertLeft = $("#update-jiaolian4InsertLeft" + i).val();
                    jiaolian4SelectRight = $("#update-jiaolian4SelectRight" + i).val();
                    jiaolian4InsertRight = $("#update-jiaolian4InsertRight" + i).val();
                    jiaolian5SelectLeft = $("#update-jiaolian5SelectLeft" + i).val();
                    jiaolian5InsertLeft = $("#update-jiaolian5InsertLeft" + i).val();
                    jiaolian5SelectRight = $("#update-jiaolian5SelectRight" + i).val();
                    jiaolian6SelectLeft = $("#update-jiaolian6SelectLeft" + i).val();
                    jiaolian6InsertLeft = $("#update-jiaolian6InsertLeft" + i).val();
                    jiaolian6SelectRight = $("#update-jiaolian6SelectRight" + i).val();
                    jiaolian6InsertRight = $("#update-jiaolian6InsertRight" + i).val();
                    fujianSelect1 = $("#update-fujianSelect1" + i).val();
                    fujianSelect2 = $("#update-fujianSelect2" + i).val();
                    fujianSelect3 = $("#update-fujianSelect3" + i).val();
                    fujianSelect4 = $("#update-fujianSelect4" + i).val();
                    pinpaiSelect1 = $("#update-pinpaiSelect1" + i).val();
                    pinpaiSelect2 = $("#update-pinpaiSelect2" + i).val();
                    pinpaiSelect3 = $("#update-pinpaiSelect3" + i).val();
                    pinpaiSelect4 = $("#update-pinpaiSelect4" + i).val();
                    fujianShuliang1 = $("#update-fujianShuliang1" + i).val();
                    fujianShuliang2 = $("#update-fujianShuliang2" + i).val();
                    fujianShuliang3 = $("#update-fujianShuliang3" + i).val();
                    fujianShuliang4 = $("#update-fujianShuliang4" + i).val();
                    qita = $("#update-qita" + i).val();
                    sumShuliang1 = $("#update-sumShuliang1" + i).val();
                    danjia1 = $("#update-danjia1" + i).val();
                    sumJine1 = $("#update-sumJine1" + i).val();
                    sumShuliang2 = $("#update-sumShuliang2" + i).val();
                    danjia2 = $("#update-danjia2" + i).val();
                    sumJine2 = $("#update-sumJine2" + i).val();
                    gl = $("#update-orderNumber" + i).val();
                id=$("#id6"+i).val();

                }
arr={
    customerName: customerName,
    insertDate: insertDate,
    orderNumber: orderNumber,
    shippingAddress: shippingAddress,
    phone: phone,
    shippingType: shippingType,
    installAddress: installAddress,
    customerNumber: customerNumber,
    pinyin: pinyin,
    customerNameRenyuan: customerNameRenyuan,
    height: height,
    width: width,
    num: num,
    lvxingcai: lvxingcai,
    lvcaiYanse: lvcaiYanse,
    boliShenjiagong: boliShenjiagong,
    boliYanse: boliYanse,
    lashouXinghao: lashouXinghao,
    jiaoliankongFangxiangLeft: jiaoliankongFangxiangLeft,
    jiaoliankongFangxiangRight: jiaoliankongFangxiangRight,
    lashouShuliangLeft: lashouShuliangLeft,
    lashouShuliangRight: lashouShuliangRight,
    lashouweiSelectLeft: lashouweiSelectLeft,
    lashouweiInsertLeft: lashouweiInsertLeft,
    lashouweiSelectRight: lashouweiSelectRight,
    lashouweiInsertRight: lashouweiInsertRight,
    zhuangsuoshuliangInsertLeft1: zhuangsuoshuliangInsertLeft1,
    zhuangsuoshuliangInsertRight1: zhuangsuoshuliangInsertRight1,
    zhuangsuofangweiInsertLeft1: zhuangsuofangweiInsertLeft1,
    zhuangsuofangweiInsertLeft2: zhuangsuofangweiInsertLeft2,
    zhuangsuofangweiInsertRight1: zhuangsuofangweiInsertRight1,
    zhuangsuofangweiInsertRight2: zhuangsuofangweiInsertRight2,
    kaijiaolian: kaijiaolian,
    jiaolian1SelectLeft: jiaolian1SelectLeft,
    jiaolian1InsertLeft: jiaolian1InsertLeft,
    iaolian1SelectRight: iaolian1SelectRight,
    jiaolian1InsertRight: jiaolian1InsertRight,
    jiaolian2SelectLeft: jiaolian2SelectLeft,
    jiaolian2InsertLeft: jiaolian2InsertLeft,
    jiaolian2SelectRight: jiaolian2SelectRight,
    jiaolian2InsertRight: jiaolian2InsertRight,
    jiaolian3SelectLeft: jiaolian3SelectLeft,
    jiaolian3InsertLeft: jiaolian3InsertLeft,
    jiaolian3SelectRight: jiaolian3SelectRight,
    jiaolian3InsertRight: jiaolian3InsertRight,
    jiaolian4SelectLeft: jiaolian4SelectLeft,
    jiaolian4InsertLeft: jiaolian4InsertLeft,
    jiaolian4SelectRight: jiaolian4SelectRight,
    jiaolian4InsertRight: jiaolian4InsertRight,
    jiaolian5SelectLeft: jiaolian5SelectLeft,
    jiaolian5InsertLeft: jiaolian5InsertLeft,
    jiaolian5SelectRight: jiaolian5SelectRight,
    jiaolian6SelectLeft: jiaolian6SelectLeft,
    jiaolian6InsertLeft: jiaolian6InsertLeft,
    jiaolian6SelectRight: jiaolian6SelectRight,
    jiaolian6InsertRight: jiaolian6InsertRight,
    fujianSelect1: fujianSelect1,
    fujianSelect2: fujianSelect2,
    fujianSelect3: fujianSelect3,
    fujianSelect4: fujianSelect4,
    pinpaiSelect1: pinpaiSelect1,
    pinpaiSelect2: pinpaiSelect2,
    pinpaiSelect3: pinpaiSelect3,
    pinpaiSelect4: pinpaiSelect4,
    fujianShuliang1: fujianShuliang1,
    fujianShuliang2: fujianShuliang2,
    fujianShuliang3: fujianShuliang3,
    fujianShuliang4: fujianShuliang4,
    qita: qita,
    sumShuliang1: sumShuliang1,
    danjia1: danjia1,
    sumJine1: sumJine1,
    sumShuliang2: sumShuliang2,
    danjia2: danjia2,
    sumJine2: sumJine2,
    wancheng:wancheng,
    id:id
}



        var msg = confirm("确认要修改吗？");
        if (msg) {


                $ajax({
                    type: 'post',
                    url: '/lkxd/update',
                    data:{
                        updateJson:JSON.stringify(arr)
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
            var orderNumber = rows[0].data.orderNumber
            $ajax({
                type: 'post',
                url: '/lkxd/deletedh',
                data: {
                    orderNumber: orderNumber
                },

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
        pagination: false,
        // pageSize: 20,//单页记录数
        clickToSelect: true,
        locale: 'zh-CN',
        toolbar: '#table-toolbar',
        toolbarAlign: 'left',
        theadClasses: "thead-light",//这里设置表头样式
        style: 'table-layout:fixed',
        height: document.body.clientHeight * 0.60,
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
            }, {
                field: 'customerName',
                title: '客户名称',
                align: 'center',
                sortable: true,
                width: 100,
            }
            , {
                field: 'wancheng',
                title: '完成状态',
                align: 'center',
                sortable: true,
                width: 180,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }

                    $(document).ready(function () {
                        $('#wancheng' + index).change(function () {
                            var selectedValue = $(this).val();
                            let rows = getTableSelection("#lkxdTable");

                            $.each(rows, function (index, row) {
                                num = row.data.orderNumber;
                                a1 = row.data.pinyin;
                                a2 = row.data.boliYanse;
                                a3 = row.data.boliShenjiagong;
                                a4 = row.data.num;
                                a5 = row.data.height;
                                a6 = row.data.width;
                                a7 = row.data.guanlian;

                            })
                            var arrbl = {
                                orderNumber: num,
                                pinyin: a1,
                                boliYanse: a2,
                                boliShenjiagong: a3,
                                num: a4,
                                height: a5,
                                width: a6,
                                guanlian: a7,
                            }
                            if (selectedValue == "已审验") {
                                $ajax({
                                    type: 'post',
                                    url: '/blxd/add',
                                    data: JSON.stringify({
                                        addInfo: arrbl
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
                            $ajax({
                                type: 'post',
                                url: '/lkxd/updatewc',
                                data: {
                                    wancheng: selectedValue,
                                    orderNumber: num
                                }
                            })

                        })
                    })
                    return "<select id='wancheng" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"wancheng\"" + ")' placeholder='完成状态' type='text' class='form-control'  value='" + value + "'>" +
                        "<option value=''>--请选择完成状态--</option>" +
                        "<option value='已审验'>已审验</option>" +
                        "<option value='未审验'>未审验</option>" +
                        "<option value='优先处理'>优先处理</option>" +
                        "<option value='加工完成'>加工完成</option>" +
                        "<option value='正在加工'>正在加工</option>" +
                        "<option value='完成'>完成</option>" +
                        "</select>"
                    document.getElementById("wancheng" + index).value = res.data[0].wancheng
                }
            }
            , {
                field: 'orderNumber',
                title: '单据编号',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'kailiao',
                title: '开孔',
                align: 'center',
                sortable: true,
                width: 100,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }

                    $(document).ready(function () {
                        $('#kailiao' + index).change(function () {
                            var selectedValue = $(this).val();
                            let rows = getTableSelection("#lkxdTable");
                            $.each(rows, function (index, row) {
                                num = row.data.orderNumber;
                            })
                            $ajax({
                                type: 'post',
                                url: '/lkxd/kailiao',
                                data: {
                                    kailiao: selectedValue,
                                    orderNumber: num
                                }
                            })

                        })
                    })
                    var this_kl = ""
                    var select2 = ""
                    for (var i = 0; i < select_kl.length; i++) {
                        this_kl = this_kl + "<option value=\"" + select_kl[i].name + "\" selected=\"selected\">" + select_kl[i].name + "</option>"
                        select2 = "<select id='kailiao" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"index\"" + ")' placeholder='开料' type='text' class='form-control'  value='" + value + "'>"
                        select2 = select2 + this_kl;
                        select2 = select2 + "<select/>"


                    }
                    return select2;
                }
            }, {
                field: 'shunxu',
                title: '铣孔',
                align: 'center',
                sortable: true,
                width: 100,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }

                    $(document).ready(function () {
                        $('#shunxu' + index).change(function () {
                            var selectedValue = $(this).val();
                            let rows = getTableSelection("#lkxdTable");

                            $.each(rows, function (index, row) {
                                num = row.data.orderNumber;
                            })
                            $ajax({
                                type: 'post',
                                url: '/lkxd/shunxu',
                                data: {
                                    shunxu: selectedValue,
                                    orderNumber: num
                                }
                            })

                        })
                    })
                    var this_sx = ""
                    var select3 = ""
                    for (var i = 0; i < select_sx.length; i++) {
                        this_sx = this_sx + "<option value=\"" + select_sx[i].name + "\" selected=\"selected\">" + select_sx[i].name + "</option>"
                        select3 = "<select id='shunxu" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"shunxu\"" + ")' placeholder='铣孔' type='text' class='form-control'  value='" + value + "'>"
                        select3 = select3 + this_sx;
                        select3 = select3 + "<select/>"

                    }
                    return select3;
                }
            }, {
                field: 'zuzhuang',
                title: '组装',
                align: 'center',
                sortable: true,
                width: 100,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }

                    $(document).ready(function () {
                        $('#zuzhuang' + index).change(function () {
                            var selectedValue = $(this).val();
                            let rows = getTableSelection("#lkxdTable");

                            $.each(rows, function (index, row) {
                                num = row.data.orderNumber;
                            })
                            $ajax({
                                type: 'post',
                                url: '/lkxd/zuzhuang',
                                data: {
                                    zuzhuang: selectedValue,
                                    orderNumber: num
                                }
                            })

                        })
                    })
                    var this_zz = ""
                    var select4 = ""
                    for (var i = 0; i < select_zz.length; i++) {
                        this_zz = this_zz + "<option value=\"" + select_zz[i].name + "\" selected=\"selected\">" + select_zz[i].name + "</option>"
                        select4 = "<select id='zuzhuang" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"zuzhuang\"" + ")' placeholder='组装' type='text' class='form-control'  value='" + value + "'>"
                        select4 = select4 + this_zz;
                        select4 = select4 + "<select/>"



                    }
                    return select4;
                }

            }, {
                field: 'baozhuang',
                title: '包装',
                align: 'center',
                sortable: true,
                width: 100,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }

                    $(document).ready(function () {
                        $('#baozhuang' + index).change(function () {
                            var selectedValue = $(this).val();
                            let rows = getTableSelection("#lkxdTable");

                            $.each(rows, function (index, row) {
                                num = row.data.orderNumber;
                            })
                            $ajax({
                                type: 'post',
                                url: '/lkxd/baozhuang',
                                data: {
                                    baozhuang: selectedValue,
                                    orderNumber: num
                                }
                            })

                        })
                    })
                    var this_baoz = ""
                    var select5 = ""
                    for (var i = 0; i < select_baoz.length; i++) {
                        this_baoz = this_baoz + "<option value=\"" + select_baoz[i].name + "\" selected=\"selected\">" + select_baoz[i].name + "</option>"
                        select5 = "<select id='baozhuang" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"baozhuang\"" + ")' placeholder='包装' type='text' class='form-control'  value='" + value + "'>"
                        select5 = select5 + this_baoz;
                        select5 = select5 + "<select/>"

                    }
                    return select5;
                }
            }, {
                field: 'installAddress',
                title: '安装地址',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'guanlian',
                title: '订单编号',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'customerNameRenyuan',
                title: '操作员',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'insertDate',
                title: '完成时间',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'id',
                title: 'id',
                align: 'center',
                sortable: true,
                width: 1,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }
                    var c = row.id
                    return "<input id='id2' name='id' value='" + c + "' oninput='javascript:columnUpd(" + row.id + "," + "\"id\"" + ")' placeholder='id' type='text' class='form-control'  value='" + value + "'>"
                }
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
            console.log("所有数据" + res.data)
            var array = res.data
            var header = []
            for (var i = 0; i < array.length; i++) {
                var body = {
                    customerName: array[i].customerName,
                    insertDate: array[i].insertDate,
                    packinglist: array[i].packinglist,
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
                url: '/lkxd/queryList1',
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
            for (n = 0; n < res.data.length; n++) {
                document.getElementById("wancheng" + n).value = res.data[n].wancheng;
            }
            $('#add-customerNameRenyuan').val(res.data.name);
            $('#add-insertDate').val(xdrq);
            $('#add-orderNumber').val(djbh);

        }
    })
}