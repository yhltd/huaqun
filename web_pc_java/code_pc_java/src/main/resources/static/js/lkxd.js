// var idd;
//
// function getKhmc() {
//     $ajax({
//         type: 'post',
//         url: '/user/hqxlKhmc',
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             for (var i = 0; i < res.data.length; i++) {
//                 $("#add-customerName").append("<option>" + res.data[i].company + "</option>");
//                 $("#update-customerName").append("<option>" + res.data[i].company + "</option>");
//                 $("#customerName").append("<option>" + res.data[i].company + "</option>");
//             }
//         }
//     })
// }
//
// $(document).ready(function () {
//     $('#add-customerName').on('change', function () {
//         var customerName = document.getElementById("add-customerName").value;
//         $ajax({
//             type: 'post',
//             url: '/lkxd/queryPinYin',
//             data: {
//                 customerName: customerName,
//             }
//         }, false, '', function (res) {
//             if (res.code == 200) {
//                 document.getElementById("add-pinyin").value = res.data[0].pinyin
//             }
//         })
//     })
// });
//
// $(document).ready(function () {
//     $('#update-customer_name').on('change', function () {
//         var customerName = document.getElementById("update-customer_name").value;
//         $ajax({
//             type: 'post',
//             url: '/lkxd/queryPinYin',
//             data: {
//                 customerName: customerName,
//             }
//         }, false, '', function (res) {
//             if (res.code == 200) {
//                 document.getElementById("update-pinyin").value = res.data[0].pinyin
//             }
//         })
//     })
// });
//
// function getShfs() {
//     $ajax({
//         type: 'post',
//         url: '/xlpz/hqxlShfs',
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             if (res.data[i] !== null) {
//             for (var i = 0; i < res.data.length; i++) {
//                 $("#add-shippingType").append("<option>" + res.data[i].shfs + "</option>");
//                 $("#update-shippingType").append("<option>" + res.data[i].shfs + "</option>");
//             }
//             }
//         }
//     })
// }
//
// function getLvxingcai() {
//     $ajax({
//         type: 'post',
//         url: '/xlpz/hqxlLvxingcai',
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             for (var i = 0; i < res.data.length; i++) {
//                 if (res.data[i] !== null) {
//                     $("#add-lvxingcai").append("<option>" + res.data[i].lxcLk + "</option>");
//                     $("#update-lvxingcai").append("<option>" + res.data[i].lxcLk + "</option>");
//                 }
//             }
//         }
//     })
// }
//
// function getLvcaiYanse() {
//     $ajax({
//         type: 'post',
//         url: '/xlpz/hqxlLvcaiYanse',
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             for (var i = 0; i < res.data.length; i++) {
//                 if (res.data[i] !== null) {
//                     $("#add-lvcaiYanse").append("<option>" + res.data[i].lcysLk + "</option>");
//                     $("#update-lvcaiYanse").append("<option>" + res.data[i].lcysLk + "</option>");
//                 }
//             }
//         }
//     })
// }
//
// function getBlsjg() {
//     $ajax({
//         type: 'post',
//         url: '/xlpz/hqxlBlsjg',
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             for (var i = 0; i < res.data.length; i++) {
//                 if (res.data[i] !== null) {
//                     $("#add-boliShenjiagong").append("<option>" + res.data[i].blsjg + "</option>");
//                     $("#update-boliShenjiagong").append("<option>" + res.data[i].blsjg + "</option>");
//                 }
//             }
//         }
//     })
// }
//
// function getBlys() {
//     $ajax({
//         type: 'post',
//         url: '/xlpz/hqxlBlys',
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             for (var i = 0; i < res.data.length; i++) {
//                 if (res.data[i] !== null) {
//                     $("#add-boliYanse").append("<option>" + res.data[i].blys + "</option>");
//                     $("#update-boliYanse").append("<option>" + res.data[i].blys + "</option>");
//                 }
//             }
//         }
//     })
// }
//
// function getLsxh() {
//     $ajax({
//         type: 'post',
//         url: '/xlpz/hqxlLsxh',
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             for (var i = 0; i < res.data.length; i++) {
//                 if (res.data[i] !== null) {
//                     $("#add-lashouXinghao").append("<option>" + res.data[i].lsxh + "</option>");
//                     $("#update-lashouXinghao").append("<option>" + res.data[i].lsxh + "</option>");
//                 }
//             }
//         }
//     })
// }
//
// function getKjlk() {
//     $ajax({
//         type: 'post',
//         url: '/xlpz/hqxlKjlk',
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             for (var i = 0; i < res.data.length; i++) {
//                 if (res.data[i] !== null) {
//                     $("#add-kaijiaolian").append("<option>" + res.data[i].kjlk + "</option>");
//                     $("#update-kaijiaolian").append("<option>" + res.data[i].kjlk + "</option>");
//                 }
//             }
//         }
//     })
// }
//
// function getJlkw() {
//     $ajax({
//         type: 'post',
//         url: '/xlpz/hqxlJlkw',
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             for (var i = 0; i < res.data.length; i++) {
//                 if (res.data[i] !== null) {
//                     $("#add-jiaolian1SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
//                     $("#add-jiaolian2SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
//                     $("#add-jiaolian3SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
//                     $("#add-jiaolian4SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
//                     $("#add-jiaolian5SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
//                     $("#add-jiaolian6SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
//
//
//                     $("#add-jiaolian1SelectRight").append("<option>" + res.data[i].jlkw + "</option>");
//                     $("#add-jiaolian2SelectRight").append("<option>" + res.data[i].jlkw + "</option>");
//                     $("#add-jiaolian3SelectRight").append("<option>" + res.data[i].jlkw + "</option>");
//                     $("#add-jiaolian4SelectRight").append("<option>" + res.data[i].jlkw + "</option>");
//                     $("#add-jiaolian5SelectRight").append("<option>" + res.data[i].jlkw + "</option>");
//                     $("#add-jiaolian6SelectRight").append("<option>" + res.data[i].jlkw + "</option>");
//
//                     $("#update-jiaolian1SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
//                     $("#update-jiaolian2SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
//                     $("#update-jiaolian3SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
//                     $("#update-jiaolian4SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
//                     $("#update-jiaolian5SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
//                     $("#update-jiaolian6SelectLeft").append("<option>" + res.data[i].jlkw + "</option>");
//
//
//                     $("#update-jiaolian1SelectRight").append("<option>" + res.data[i].jlkw + "</option>");
//                     $("#update-jiaolian2SelectRight").append("<option>" + res.data[i].jlkw + "</option>");
//                     $("#update-jiaolian3SelectRight").append("<option>" + res.data[i].jlkw + "</option>");
//                     $("#update-jiaolian4SelectRight").append("<option>" + res.data[i].jlkw + "</option>");
//                     $("#update-jiaolian5SelectRight").append("<option>" + res.data[i].jlkw + "</option>");
//                     $("#update-jiaolian6SelectRight").append("<option>" + res.data[i].jlkw + "</option>");
//
//                 }
//             }
//         }
//     })
// }
//
// function getFjpz() {
//     $ajax({
//         type: 'post',
//         url: '/xlpz/hqxlFjpz',
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             for (var i = 0; i < res.data.length; i++) {
//                 if (res.data[i] !== null) {
//                     $("#add-fujianSelect1").append("<option>" + res.data[i].fjpz + "</option>");
//                     $("#add-fujianSelect2").append("<option>" + res.data[i].fjpz + "</option>");
//                     $("#add-fujianSelect3").append("<option>" + res.data[i].fjpz + "</option>");
//                     $("#add-fujianSelect4").append("<option>" + res.data[i].fjpz + "</option>");
//
//                     $("#update-fujianSelect1").append("<option>" + res.data[i].fjpz + "</option>");
//                     $("#update-fujianSelect2").append("<option>" + res.data[i].fjpz + "</option>");
//                     $("#update-fujianSelect3").append("<option>" + res.data[i].fjpz + "</option>");
//                     $("#update-fujianSelect4").append("<option>" + res.data[i].fjpz + "</option>");
//                 }
//             }
//         }
//     })
// }
//
// function getJlpp() {
//     $ajax({
//         type: 'post',
//         url: '/xlpz/hqxlJlpp',
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             for (var i = 0; i < res.data.length; i++) {
//                 $("#add-pinpaiSelect1").append("<option>" + res.data[i].jlpp + "</option>");
//                 $("#add-pinpaiSelect2").append("<option>" + res.data[i].jlpp + "</option>");
//                 $("#add-pinpaiSelect3").append("<option>" + res.data[i].jlpp + "</option>");
//                 $("#add-pinpaiSelect4").append("<option>" + res.data[i].jlpp + "</option>");
//
//                 $("#update-pinpaiSelect1").append("<option>" + res.data[i].jlpp + "</option>");
//                 $("#update-pinpaiSelect2").append("<option>" + res.data[i].jlpp + "</option>");
//                 $("#update-pinpaiSelect3").append("<option>" + res.data[i].jlpp + "</option>");
//                 $("#update-pinpaiSelect4").append("<option>" + res.data[i].jlpp + "</option>");
//             }
//         }
//     })
// }
//
// $(document).ready(function () {
//     $('#add-kaijiaolian').on('change', function () {
//         // var kjlk = document.getElementById('add-kaijiaolian').value;
//         var selectedValue = $(this).val();
//         if (selectedValue == '开二孔') {
//             $("#add-jiaolian3SelectLeft").remove();
//             $("#add-jiaolian3InsertLeft").remove();
//             $("#add-jiaolian3SelectRight").remove();
//             $("#add-jiaolian3InsertRight").remove();
//
//             $("#add-jiaolian4SelectLeft").remove();
//             $("#add-jiaolian4InsertLeft").remove();
//             $("#add-jiaolian4SelectRight").remove();
//             $("#add-jiaolian4InsertRight").remove();
//
//             $("#add-jiaolian5SelectLeft").remove();
//             $("#add-jiaolian5InsertLeft").remove();
//             $("#add-jiaolian5SelectRight").remove();
//             $("#add-jiaolian5InsertRight").remove();
//
//             $("#add-jiaolian6SelectLeft").remove();
//             $("#add-jiaolian6InsertLeft").remove();
//             $("#add-jiaolian6SelectRight").remove();
//             $("#add-jiaolian6InsertRight").remove();
//
//             $("#l3sl").remove();
//             $("#l3il").remove();
//             $("#l3sr").remove();
//             $("#l3ir").remove();
//
//             $("#l4sl").remove();
//             $("#l4il").remove();
//             $("#l4sr").remove();
//             $("#l4ir").remove();
//
//             $("#l5sl").remove();
//             $("#l5il").remove();
//             $("#l5sr").remove();
//             $("#l5ir").remove();
//
//             $("#l6sl").remove();
//             $("#l6il").remove();
//             $("#l6sr").remove();
//             $("#l6ir").remove();
//         }
//         if (selectedValue == '开三孔') {
//             $("#add-jiaolian4SelectLeft").remove();
//             $("#add-jiaolian4InsertLeft").remove();
//             $("#add-jiaolian4SelectRight").remove();
//             $("#add-jiaolian4InsertRight").remove();
//
//             $("#add-jiaolian5SelectLeft").remove();
//             $("#add-jiaolian5InsertLeft").remove();
//             $("#add-jiaolian5SelectRight").remove();
//             $("#add-jiaolian5InsertRight").remove();
//
//             $("#add-jiaolian6SelectLeft").remove();
//             $("#add-jiaolian6InsertLeft").remove();
//             $("#add-jiaolian6SelectRight").remove();
//             $("#add-jiaolian6InsertRight").remove();
//
//             $("#l4sl").remove();
//             $("#l4il").remove();
//             $("#l4sr").remove();
//             $("#l4ir").delete();
//
//             $("#l5sl").remove();
//             $("#l5il").remove();
//             $("#l5sr").remove();
//             $("#l5ir").remove();
//
//             $("#l6sl").remove();
//             $("#l6il").remove();
//             $("#l6sr").remove();
//             $("#l6ir").remove();
//         }
//         if (selectedValue == '开四孔') {
//             $("#add-jiaolian5SelectLeft").remove();
//             $("#add-jiaolian5InsertLeft").remove();
//             $("#add-jiaolian5SelectRight").remove();
//             $("#add-jiaolian5InsertRight").remove();
//
//             $("#add-jiaolian6SelectLeft").remove();
//             $("#add-jiaolian6InsertLeft").remove();
//             $("#add-jiaolian6SelectRight").remove();
//             $("#add-jiaolian6InsertRight").remove();
//
//             $("#l5sl").remove();
//             $("#l5il").remove();
//             $("#l5sr").remove();
//             $("#l5ir").remove();
//
//             $("#l6sl").remove();
//             $("#l6il").remove();
//             $("#l6sr").remove();
//             $("#l6ir").remove();
//         }
//         if (selectedValue == '开五孔') {
//             $("#add-jiaolian6SelectLeft").remove();
//             $("#add-jiaolian6InsertLeft").remove();
//             $("#add-jiaolian6SelectRight").remove();
//             $("#add-jiaolian6InsertRight").remove();
//
//             $("#l6sl").remove();
//             $("#l6il").remove();
//             $("#l6sr").remove();
//             $("#l6ir").remove();
//         }
//     })
// })
//
// $(document).ready(function () {
//     $('#update-kaijiaolian').on('change', function () {
//         // var kjlk = document.getElementById('add-kaijiaolian').value;
//         var selectedValue = $(this).val();
//         if (selectedValue == '开二孔') {
//             $("#update-jiaolian3SelectLeft").remove();
//             $("#update-jiaolian3InsertLeft").remove();
//             $("#update-jiaolian3SelectRight").remove();
//             $("#update-jiaolian3InsertRight").remove();
//
//             $("#update-jiaolian4SelectLeft").remove();
//             $("#update-jiaolian4InsertLeft").remove();
//             $("#update-jiaolian4SelectRight").remove();
//             $("#update-jiaolian4InsertRight").remove();
//
//             $("#update-jiaolian5SelectLeft").remove();
//             $("#update-jiaolian5InsertLeft").remove();
//             $("#update-jiaolian5SelectRight").remove();
//             $("#update-jiaolian5InsertRight").remove();
//
//             $("#update-jiaolian6SelectLeft").remove();
//             $("#update-jiaolian6InsertLeft").remove();
//             $("#update-jiaolian6SelectRight").remove();
//             $("#update-jiaolian6InsertRight").remove();
//
//             $("#l3sl").remove();
//             $("#l3il").remove();
//             $("#l3sr").remove();
//             $("#l3ir").remove();
//
//             $("#l4sl").remove();
//             $("#l4il").remove();
//             $("#l4sr").remove();
//             $("#l4ir").remove();
//
//             $("#l5sl").remove();
//             $("#l5il").remove();
//             $("#l5sr").remove();
//             $("#l5ir").remove();
//
//             $("#l6sl").remove();
//             $("#l6il").remove();
//             $("#l6sr").remove();
//             $("#l6ir").remove();
//         }
//         if (selectedValue == '开三孔') {
//             $("#update-jiaolian4SelectLeft").remove();
//             $("#update-jiaolian4InsertLeft").remove();
//             $("#update-jiaolian4SelectRight").remove();
//             $("#update-jiaolian4InsertRight").remove();
//
//             $("#update-jiaolian5SelectLeft").remove();
//             $("#update-jiaolian5InsertLeft").remove();
//             $("#update-jiaolian5SelectRight").remove();
//             $("#update-jiaolian5InsertRight").remove();
//
//             $("#update-jiaolian6SelectLeft").remove();
//             $("#update-jiaolian6InsertLeft").remove();
//             $("#update-jiaolian6SelectRight").remove();
//             $("#update-jiaolian6InsertRight").remove();
//
//             $("#ul4sl").remove();
//             $("#ul4il").remove();
//             $("#ul4sr").remove();
//             $("#ul4ir").delete();
//
//             $("#ul5sl").remove();
//             $("#ul5il").remove();
//             $("#ul5sr").remove();
//             $("#ul5ir").remove();
//
//             $("#ul6sl").remove();
//             $("#ul6il").remove();
//             $("#ul6sr").remove();
//             $("#ul6ir").remove();
//         }
//         if (selectedValue == '开四孔') {
//             $("#update-jiaolian5SelectLeft").remove();
//             $("#update-jiaolian5InsertLeft").remove();
//             $("#update-jiaolian5SelectRight").remove();
//             $("#update-jiaolian5InsertRight").remove();
//
//             $("#update-jiaolian6SelectLeft").remove();
//             $("#update-jiaolian6InsertLeft").remove();
//             $("#update-jiaolian6SelectRight").remove();
//             $("#update-jiaolian6InsertRight").remove();
//
//             $("#ul5sl").remove();
//             $("#ul5il").remove();
//             $("#ul5sr").remove();
//             $("#ul5ir").remove();
//
//             $("#ul6sl").remove();
//             $("#ul6il").remove();
//             $("#ul6sr").remove();
//             $("#ul6ir").remove();
//         }
//         if (selectedValue == '开五孔') {
//             $("#update-jiaolian6SelectLeft").remove();
//             $("#update-jiaolian6InsertLeft").remove();
//             $("#update-jiaolian6SelectRight").remove();
//             $("#update-jiaolian6InsertRight").remove();
//
//             $("#ul6sl").remove();
//             $("#ul6il").remove();
//             $("#ul6sr").remove();
//             $("#ul6ir").remove();
//         }
//     })
// })
//
// function getJe() {
//     var jl1 = document.getElementById('add-jiaolian1SelectLeft').value;
//     var jl2 = document.getElementById('add-jiaolian2SelectLeft').value;
//     if ($("#add-jiaolian3SelectLeft").jiaolian3SelectLeft != "" && $("#add-jiaolian3SelectLeft").jiaolian3SelectLeft != undefined) {
//         var jl3 = $("#add-jiaolian3SelectLeft").jiaolian3SelectLeft;
//     }
//     if ($("#add-jiaolian4SelectLeft").jiaolian4SelectLeft != "" && $("#add-jiaolian4SelectLeft").jiaolian4SelectLeft != undefined) {
//         var jl4 = $("#add-jiaolian4SelectLeft").jiaolian4SelectLeft;
//     }
//     if ($("#add-jiaolian5SelectLeft").jiaolian5SelectLeft != "" && $("#add-jiaolian5SelectLeft").jiaolian5SelectLeft != undefined) {
//         var jl5 = $("#add-jiaolian5SelectLeft").jiaolian5SelectLeft;
//     }
//     if ($("#add-jiaolian6SelectLeft").jiaolian6SelectLeft != "" && $("#add-jiaolian6SelectLeft").jiaolian6SelectLeft != undefined) {
//         var jl6 = $("#add-jiaolian6SelectLeft").jiaolian6SelectLeft;
//     }
//     var height = parseFloat(document.getElementById('add-height').value);
//     if (jl1 == '距中') {
//         var jiaolian1Insert = height / 2;
//         document.getElementById("add-jiaolian1SelectRight").value = jl1
//         document.getElementById("add-jiaolian1InsertLeft").value = jiaolian1Insert;
//         document.getElementById("add-jiaolian1InsertRight").value = jiaolian1Insert;
//     }
//     if (jl2 == '距中') {
//         var jiaolian2Insert = height / 2;
//         document.getElementById("add-jiaolian2SelectRight").value = jl2
//         document.getElementById("add-jiaolian2InsertLeft").value = jiaolian2Insert;
//         document.getElementById("add-jiaolian2InsertRight").value = jiaolian2Insert;
//     }
//     if (jl3 == '距中') {
//         var jiaolian3Insert = height / 2;
//         document.getElementById("add-jiaolian3SelectRight").value = jl3
//         document.getElementById("add-jiaolian3InsertLeft").value = jiaolian3Insert;
//         document.getElementById("add-jiaolian3InsertRight").value = jiaolian3Insert;
//     }
//     if (jl4 == '距中') {
//         var jiaolian4Insert = height / 2;
//         document.getElementById("add-jiaolian4SelectRight").value = jl4
//         document.getElementById("add-jiaolian4InsertLeft").value = jiaolian4Insert;
//         document.getElementById("add-jiaolian4InsertRight").value = jiaolian4Insert;
//     }
//     if (jl5 == '距中') {
//         var jiaolian5Insert = height / 2;
//         document.getElementById("add-jiaolian5SelectRight").value = jl5
//         document.getElementById("add-jiaolian5InsertLeft").value = jiaolian5Insert;
//         document.getElementById("add-jiaolian5InsertRight").value = jiaolian5Insert;
//     }
//     if (jl6 == '距中') {
//         var jiaolian6Insert = height / 2;
//         document.getElementById("add-jiaolian6SelectRight").value = jl6
//         document.getElementById("add-jiaolian6InsertLeft").value = jiaolian6Insert;
//         document.getElementById("add-jiaolian6InsertRight").value = jiaolian6Insert;
//     }
// }
//
// function getUpdJe() {
//     var jl1 = document.getElementById('update-jiaolian1SelectLeft').value;
//     var jl2 = document.getElementById('update-jiaolian2SelectLeft').value;
//     var jl3 = document.getElementById('update-jiaolian3SelectLeft').value;
//     var jl4 = document.getElementById('update-jiaolian4SelectLeft').value;
//     var jl5 = document.getElementById('update-jiaolian5SelectLeft').value;
//     var jl6 = document.getElementById('update-jiaolian6SelectLeft').value;
//     var height = parseFloat(document.getElementById('add-height').value);
//     if (jl1 == '距中') {
//         var jiaolian1Insert = height / 2;
//         document.getElementById("update-jiaolian1SelectRight").value = jl1
//         document.getElementById("update-jiaolian1InsertLeft").value = jiaolian1Insert;
//         document.getElementById("update-jiaolian1InsertRight").value = jiaolian1Insert;
//     }
//     if (jl2 == '距中') {
//         var jiaolian2Insert = height / 2;
//         document.getElementById("update-jiaolian2SelectRight").value = jl2
//         document.getElementById("update-jiaolian2InsertLeft").value = jiaolian2Insert;
//         document.getElementById("update-jiaolian2InsertRight").value = jiaolian2Insert;
//     }
//     if (jl3 == '距中') {
//         var jiaolian3Insert = height / 2;
//         document.getElementById("update-jiaolian3_select_right").value = jl3
//         document.getElementById("update-jiaolian3_insert_left").value = jiaolian3Insert;
//         document.getElementById("update-jiaolian3_insert_right").value = jiaolian3Insert;
//     }
//     if (jl4 == '距中') {
//         var jiaolian4Insert = height / 2;
//         document.getElementById("update-jiaolian4SelectRight").value = jl4
//         document.getElementById("update-jiaolian4InsertLeft").value = jiaolian4Insert;
//         document.getElementById("update-jiaolian4InsertRight").value = jiaolian4Insert;
//     }
//     if (jl5 == '距中') {
//         var jiaolian5Insert = height / 2;
//         document.getElementById("update-jiaolian5SelectRight").value = jl5
//         document.getElementById("update-jiaolian5InsertLeft").value = jiaolian5Insert;
//         document.getElementById("update-jiaolian5InsertRight").value = jiaolian5Insert;
//     }
//     if (jl6 == '距中') {
//         var jiaolian6Insert = height / 2;
//         document.getElementById("update-jiaolian6SelectRight").value = jl6
//         document.getElementById("update-jiaolian6InsertLeft").value = jiaolian6Insert;
//         document.getElementById("update-jiaolian6InsertRight").value = jiaolian6Insert;
//     }
// }
//
// function getPfsl() {
//     var height = parseFloat(document.getElementById('add-height').value);
//     var width = parseFloat(document.getElementById('add-width').value);
//     var num = parseFloat(document.getElementById('add-num').value);
//     var sum_sl = Math.round(height * width * num ) ;
//     document.getElementById("add-sumShuliang1").value = sum_sl
// }
//
// function getUpdPfsl() {
//     var height = parseFloat(document.getElementById('update-height').value);
//     var width = parseFloat(document.getElementById('update-width').value);
//     var num = parseFloat(document.getElementById('update-num').value);
//     var sum_sl = Math.round(height * width / 1000000 * num * 1000) / 1000
//     document.getElementById("update-sumShuliang1").value = sum_sl
// }
//
// function getPfje() {
//     var sum_sl = parseFloat(document.getElementById('add-sumShuliang1').value);
//     var pfdj = parseFloat(document.getElementById('add-danjia1').value);
//     var sum_je = Math.round(sum_sl * pfdj * 100) / 100
//     document.getElementById("add-sumJine1").value = sum_je
// }
//
// function getUpdPfje() {
//     var sum_sl = parseFloat(document.getElementById('update-sumShuliang1').value);
//     var pfdj = parseFloat(document.getElementById('update-danjia1').value);
//     var sum_je = Math.round(sum_sl * pfdj * 100) / 100
//     document.getElementById("update-sumJine1").value = sum_je
// }
//
// function getZcsl() {
//     var height = parseFloat(document.getElementById('add-height').value);
//     var width = parseFloat(document.getElementById('add-width').value);
//     var num = parseFloat(document.getElementById('add-num').value);
//     var sum_sl2 = Math.round((height * 1 + width * 1)  * 2 * num ) ;
//     document.getElementById("add-sumShuliang2").value = sum_sl2
// }
//
// function getUpdZcsl() {
//     var height = parseFloat(document.getElementById('update-height').value);
//     var width = parseFloat(document.getElementById('update-width').value);
//     var num = parseFloat(document.getElementById('update-num').value);
//     var sum_sl2 = Math.round((height * 1 + width * 1) / 1000 * 2 * num * 1000) / 1000
//     document.getElementById("update-sumShuliang2").value = sum_sl2
// }
//
// function getZcje() {
//     var sum_sl2 = parseFloat(document.getElementById('add-sumShuliang2').value);
//     var zcdj2 = parseFloat(document.getElementById('add-danjia2').value);
//     var sum_je2 = Math.round(sum_sl2 * zcdj2 * 100) / 100
//     document.getElementById("add-sumJine2").value = sum_je2
// }
//
// function getUpdZcje() {
//     var sum_sl2 = parseFloat(document.getElementById('update-sumShuliang2').value);
//     var zcdj2 = parseFloat(document.getElementById('update-danjia1').value);
//     var sum_je2 = Math.round(sum_sl2 * zcdj2 * 100) / 100
//     document.getElementById("update-sumJine2").value = sum_je2
// }
//
// function getList() {
//     $('#ksinsertDate').val("");
//     $('#jsinsertDate').val("");
//     $('#customerNumber').val("");
//     $('#customerName').val("");
//     $('#installAddress').val("");
//     $('#wancheng').val("");
//
//     $ajax({
//         type: 'post',
//         url: '/lkxd/getList',
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             setTable(res.data);
//             $("#lkxdTable").colResizable({
//                 liveDrag: true,
//                 gripInnerHtml: "<div class='grip'></div>",
//                 draggingClass: "dragging",
//                 resizeMode: 'fit'
//             });
//             for (i = 0; i <= res.data.id; i++) {
//                 idd = i;
//             }
//         }
//     })
// }
//
// $(function () {
//     getList();
//     getKhmc();
//     getShfs();
//     getLvxingcai();
//     getLvcaiYanse();
//     getBlsjg();
//     getBlys();
//     getLsxh();
//     getKjlk();
//     getJlkw();
//     getFjpz();
//     getJlpp();
//     // document.getElementById("dlm").innerText = ($.session.get('username'));
//
//     $ajax({
//         type: 'post',
//         url: '/user/getUserName',
//     }, false, '', function (res) {
//         var this_username = res.data
//         document.getElementById("dlm").innerText = this_username;
//     })
//
//     $('#select-btn').click(function () {
//         var customerNumber = $('#customerNumber').val();
//         var customerName = $('#customerName').val();
//         var installAddress = $('#installAddress').val();
//         var ksinsertDate = $('#ksinsertDate').val();
//         var jsinsertDate = $('#jsinsertDate').val();
//         var wancheng = $('#wancheng').val();
//         if (ksinsertDate === "") {
//             ksinsertDate = "1999-01-01";
//         }
//         if (jsinsertDate === "") {
//             jsinsertDate = "2030-12-31";
//         }
//         $ajax({
//                 type: 'post',
//                 url: '/lkxd/queryList',
//                 data: {
//                     customerNumber: customerNumber,
//                     customerName: customerName,
//                     installAddress: installAddress,
//                     ksinsertDate: ksinsertDate,
//                     jsinsertDate: jsinsertDate,
//                     wancheng: wancheng,
//                 }
//             },
//             true, '', function (res) {
//                 if (res.code == 200) {
//                     setTable(res.data);
//                 }
//             }
//         )
//     });
//
//     //刷新
//     $("#refresh-btn").click(function () {
//         getList();
//     });
//
//     //点击新增按钮显示弹窗
//     $("#add-btn").click(function () {
//         $('#add-modal').modal('show');
//         getToken();
//     });
//
//     //新增弹窗里点击关闭按钮
//     $('#add-close-btn').click(function () {
//         $('#add-modal').modal('hide');
//     });
//
//     //新增弹窗里点击提交按钮
//     $("#add-submit-btn").click(function () {
//         // getAddKk();
//         getJe();
//         getPfsl();
//         getPfje();
//         getZcsl();
//         getZcje();
//         getUpdJe()
//         let params = formToJson("#add-form");
//         if (checkForm('#add-form')) {
//             $ajax({
//                 type: 'post',
//                 url: '/lkxd/add',
//                 data: JSON.stringify({
//                     addInfo: params
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
//     });
//
//     //点击修改按钮显示弹窗
//     $('#update-btn').click(function () {
//         let rows = getTableSelection('#lkxdTable');
//         if (rows.length > 1 || rows.length == 0) {
//             swal('请选择一条数据修改!');
//             return;
//         }
//         $('#update-modal').modal('show');
//         setForm(rows[0].data, '#update-form');
//         $('#update-customerName').val(rows[0].data.customerName);
//         $('#update-insertDate').val(rows[0].data.insertDate);
//         $('#update-orderNumber').val(rows[0].data.orderNumber);
//         $('#update-pinyin').val(rows[0].data.pinyin);
//         $('#update-shippingAddress').val(rows[0].data.shippingAddress);
//         $('#update-phone').val(rows[0].data.phone);
//         $('#update-shippingType').val(rows[0].data.shippingType);
//         $('#update-installAddress').val(rows[0].data.installAddress);
//         $('#update-customerNameRenyuan').val(rows[0].data.customerNameRenyuan);
//         $('#update-customerNumber').val(rows[0].data.customerNumber);
//         $('#update-height').val(rows[0].data.height);
//         $('#update-width').val(rows[0].data.width);
//         $('#update-num').val(rows[0].data.num);
//         $('#update-lvxingcai').val(rows[0].data.lvxingcai);
//         $('#update-lvcaiYanse').val(rows[0].data.lvcaiYanse);
//         $('#update-boliShenjiagong').val(rows[0].data.boliShenjiagong);
//         $('#update-boliYanse').val(rows[0].data.boliYanse);
//         $('#update-lashouXinghao').val(rows[0].data.lashouXinghao);
//         $('#update-jiaoliankongFangxiangLeft').val(rows[0].data.jiaoliankongFangxiangLeft);
//         $('#update-jiaoliankongFangxiangRight').val(rows[0].data.jiaoliankongFangxiangRight);
//         $('#update-lashouShuliangLeft').val(rows[0].data.lashouShuliangLeft);
//         $('#update-lashouShuliangRight').val(rows[0].data.lashouShuliangRight);
//         $('#update-lashouweiSelectLeft').val(rows[0].data.lashouweiSelectLeft);
//         $('#update-lashouweiInsertLeft').val(rows[0].data.lashouweiInsertLeft);
//         $('#update-lashouweiSelectRight').val(rows[0].data.lashouweiSelectRight);
//         $('#update-lashouweiInsertRight').val(rows[0].data.lashouweiInsertRight);
//         $('#update-zhuangsuoshuliangInsertLeft1').val(rows[0].data.zhuangsuoshuliangInsertLeft1);
//         $('#update-zhuangsuoshuliangInsertRight1').val(rows[0].data.zhuangsuoshuliangInsertRight1);
//         $('#update-zhuangsuofangweiInsertLeft1').val(rows[0].data.zhuangsuofangweiInsertLeft1);
//         $('#update-zhuangsuofangweiInsertLeft2').val(rows[0].data.zhuangsuofangweiInsertLeft2);
//         $('#update-zhuangsuofangweiInsertRight1').val(rows[0].data.zhuangsuofangweiInsertRight1);
//         $('#update-zhuangsuofangweiInsertRight2').val(rows[0].data.zhuangsuofangweiInsertRight2);
//         $('#update-kaijiaolian').val(rows[0].data.kaijiaolian);
//         $('#update-jiaolian1SelectLeft').val(rows[0].data.jiaolian1SelectLeft);
//         $('#update-jiaolian1InsertLeft').val(rows[0].data.jiaolian1InsertLeft);
//         $('#update-jiaolian1SelectRight').val(rows[0].data.jiaolian1SelectRight);
//         $('#update-jiaolian1InsertRight').val(rows[0].data.jiaolian1InsertRight);
//         $('#update-jiaolian2SelectLeft').val(rows[0].data.jiaolian2SelectLeft);
//         $('#update-jiaolian2InsertLeft').val(rows[0].data.jiaolian2InsertLeft);
//         $('#update-jiaolian2SelectRight').val(rows[0].data.jiaolian2SelectRight);
//         $('#update-jiaolian2InsertRight').val(rows[0].data.jiaolian2InsertRight);
//         $('#update-jiaolian3SelectLeft').val(rows[0].data.jiaolian3SelectLeft);
//         $('#update-jiaolian3InsertLeft').val(rows[0].data.jiaolian3InsertLeft);
//         $('#update-jiaolian3SelectRight').val(rows[0].data.jiaolian3SelectRight);
//         $('#update-jiaolian3InsertRight').val(rows[0].data.jiaolian3InsertRight);
//         $('#update-jiaolian4SelectLeft').val(rows[0].data.jiaolian4SelectLeft);
//         $('#update-jiaolian4InsertLeft').val(rows[0].data.jiaolian4InsertLeft);
//         $('#update-jiaolian4SelectRight').val(rows[0].data.jiaolian4SelectRight);
//         $('#update-jiaolian4InsertRight').val(rows[0].data.jiaolian4InsertRight);
//         $('#update-jiaolian5SelectLeft').val(rows[0].data.jiaolian5SelectLeft);
//         $('#update-jiaolian5InsertLeft').val(rows[0].data.jiaolian5InsertLeft);
//         $('#update-jiaolian5SelectRight').val(rows[0].data.jiaolian5SelectRight);
//         $('#update-jiaolian5InsertRight').val(rows[0].data.jiaolian5InsertRight);
//         $('#update-jiaolian6SelectLeft').val(rows[0].data.jiaolian6SelectLeft);
//         $('#update-jiaolian6InsertLeft').val(rows[0].data.jiaolian6InsertLeft);
//         $('#update-jiaolian6SelectRight').val(rows[0].data.jiaolian6SelectRight);
//         $('#update-jiaolian6InsertRight').val(rows[0].data.jiaolian6InsertRight);
//         $('#update-fujianSelect1').val(rows[0].data.fujianSelect1);
//         $('#update-fujianSelect2').val(rows[0].data.fujianSelect2);
//         $('#update-fujianSelect3').val(rows[0].data.fujianSelect3);
//         $('#update-fujianSelect4').val(rows[0].data.fujianSelect4);
//         $('#update-pinpaiSelect1').val(rows[0].data.pinpaiSelect1);
//         $('#update-pinpaiSelect2').val(rows[0].data.pinpaiSelect2);
//         $('#update-pinpaiSelect3').val(rows[0].data.pinpaiSelect3);
//         $('#update-pinpaiSelect4').val(rows[0].data.pinpaiSelect4);
//         $('#update-fujianShuliang1').val(rows[0].data.fujianShuliang1);
//         $('#update-fujianShuliang2').val(rows[0].data.fujianShuliang2);
//         $('#update-fujianShuliang3').val(rows[0].data.fujianShuliang3);
//         $('#update-fujianShuliang4').val(rows[0].data.fujianShuliang4);
//         $('#update-sumShuliang1').val(rows[0].data.sumShuliang1);
//         $('#update-danjia1').val(rows[0].data.danjia1);
//         $('#update-sumJine1').val(rows[0].data.sumJine1);
//         $('#update-sumShuliang2').val(rows[0].data.sumShuliang2);
//         $('#update-danjia2').val(rows[0].data.danjia2);
//         $('#update-sumJine2').val(rows[0].data.sumJine2);
//         $('#update-wancheng').val(rows[0].data.wancheng);
//         $('#update-qita').val(rows[0].data.qita);
//     });
//
//     //修改弹窗点击关闭按钮
//     $('#update-close-btn').click(function () {
//         $('#update-form')[0].reset();
//         $('#update-modal').modal('hide');
//     });
//
//     //修改弹窗里点击提交按钮
//     $('#update-submit-btn').click(function () {
//         // getUpdKk();
//         // getUpdJe();
//         getUpdPfsl();
//         getUpdPfje();
//         getUpdZcsl();
//         getUpdZcje();
//         var msg = confirm("确认要修改吗？");
//         if (msg) {
//             if (checkForm('#update-form')) {
//                 let params = formToJson('#update-form');
//                 $ajax({
//                     type: 'post',
//                     url: '/lkxd/update',
//                     data: {
//                         updateJson: JSON.stringify(params)
//                     },
//                     dataType: 'json',
//                     contentType: 'application/json;charset=utf-8'
//                 }, false, '', function (res) {
//                     if (res.code == 200) {
//                         swal("", res.msg, "success");
//                         $('#update-close-btn').click();
//                         $('#update-modal').modal('hide');
//                         getList();
//                     } else {
//                         swal("", res.msg, "error");
//                     }
//                 })
//             }
//         }
//     });
//
//     //点击删除按钮
//     $('#delete-btn').click(function () {
//         var msg = confirm("确认要删除吗？");
//         if (msg) {
//             let rows = getTableSelection("#lkxdTable");
//             if (rows.length == 0) {
//                 swal('请选择要删除的数据！');
//                 return;
//             }
//             let idList = [];
//             $.each(rows, function (index, row) {
//                 idList.push(row.data.id)
//             });
//             $ajax({
//                 type: 'post',
//                 url: '/lkxd/delete',
//                 data: JSON.stringify({
//                     idList: idList
//                 }),
//                 dataType: 'json',
//                 contentType: 'application/json;charset=utf-8'
//             }, false, '', function (res) {
//                 if (res.code == 200) {
//                     swal("", res.msg, "success");
//                     getList();
//                 } else {
//                     swal("", res.msg, "error");
//                 }
//             })
//         }
//     })
// });
//
// function setTable(data) {
//     if ($('#lkxdTable').html != '') {
//         $('#lkxdTable').bootstrapTable('load', data);
//     }
//
//     $('#lkxdTable').bootstrapTable({
//         data: data,
//         sortStable: true,
//         classes: 'table table-hover text-nowrap table table-bordered',
//         idField: 'id',
//         pagination: true,
//         pageSize: 15,//单页记录数
//         clickToSelect: true,
//         locale: 'zh-CN',
//         toolbar: '#table-toolbar',
//         toolbarAlign: 'left',
//         theadClasses: "thead-light",//这里设置表头样式
//         style: 'table-layout:fixed',
//         columns: [
//             {
//                 field: '',
//                 title: '序号',
//                 align: 'center',
//                 width: 50,
//                 formatter: function (value, row, index) {
//                     return index + 1;
//                 }
//             }, {
//                 field: 'insertDate',
//                 title: '下单日期',
//                 align: 'center',
//                 sortable: true,
//                 width: 100,
//             },{
//                 field: 'customerName',
//                 title: '客户名称',
//                 align: 'center',
//                 sortable: true,
//                 width: 100,
//             },  {
//                 field: 'wancheng',
//                 title: '订单状态',
//                 align: 'center',
//                 sortable: true,
//                 width: 100,
//             },{
//                 field: 'orderNumber',
//                 title: '单据编号',
//                 align: 'center',
//                 sortable: true,
//                 width: 100,
//             },{
//                 field: '',
//                 title: '开孔',
//                 align: 'center',
//                 sortable: true,
//                 width: 100,
//             },{
//                 field: '',
//                 title: '铣孔',
//                 align: 'center',
//                 sortable: true,
//                 width: 100,
//             },{
//                 field: '',
//                 title: '组装',
//                 align: 'center',
//                 sortable: true,
//                 width: 100,
//             },{
//                 field: 'baozhuang',
//                 title: '包装',
//                 align: 'center',
//                 sortable: true,
//                 width: 100,
//             }, {
//                 field: 'installAddress',
//                 title: '安装地址',
//                 align: 'center',
//                 sortable: true,
//                 width: 100,
//             },{
//                 field: 'guanlian',
//                 title: '订单编号',
//                 align: 'center',
//                 sortable: true,
//                 width: 100,
//             },{
//                 field: 'customerNameRenyuan',
//                 title: '操作员',
//                 align: 'center',
//                 sortable: true,
//                 width: 100,
//             },{
//                 field: 'insertDate',
//                 title: '完成时间',
//                 align: 'center',
//                 sortable: true,
//                 width: 100,
//             }
//         ],
//         onClickRow: function (row, el) {
//             let isSelect = $(el).hasClass('selected')
//             if (isSelect) {
//                 $(el).removeClass('selected')
//             } else {
//                 $(el).addClass('selected')
//             }
//         }
//     })
// }
//
// function toExcel() {
//
//     var query = $('#query').val();
//     $ajax({
//         type: 'post',
//         url: '/lkxd/getList',
//         data: {
//             query: query,
//         }
//     }, true, '', function (res) {
//         if (res.code == 200) {
//             setTable(res.data);
//             console.log("所有数据"+res.data)
//             var array = res.data
//             var header = []
//             for (var i = 0; i < array.length; i++) {
//                 var body = {
//                     customerName: array[i].customerName,
//                     insertDate: array[i].insertDate,
//                     packinglist:array[i].packinglist,
//                     orderNumber: array[i].orderNumber,
//                     pinyin: array[i].pinyin,
//                     shippingAddress: array[i].shippingAddress,
//                     phone: array[i].phone,
//                     shippingType: array[i].shippingType,
//                     installAddress: array[i].installAddress,
//                     customerNumber: array[i].customerNumber,
//                     height: array[i].height,
//                     width: array[i].width,
//                     lvxingcai: array[i].lvxingcai,
//                     num: array[i].num,
//                     lvcaiYanse: array[i].lvcaiYanse,
//                     boliShenjiagong: array[i].boliShenjiagong,
//                     boliYanse: array[i].boliYanse,
//                     lashouXinghao: array[i].lashouXinghao,
//                     jiaoliankongFangxiangLeft: array[i].jiaoliankongFangxiangLeft,
//                     jiaoliankongFangxiangRight: array[i].jiaoliankongFangxiangRight,
//                     lashouShuliangLeft: array[i].lashouShuliangLeft,
//                     lashouShuliangRight: array[i].lashouShuliangRight,
//                     lashouweiSelectLeft: array[i].lashouweiSelectLeft,
//                     lashouweiInsertLeft: array[i].lashouweiInsertLeft,
//                     lashouweiSelectRight: array[i].lashouweiSelectRight,
//                     lashouweiInsertRight: array[i].lashouweiInsertRight,
//                     zhuangsuoshuliangInsertLeft1: array[i].zhuangsuoshuliangInsertLeft1,
//                     zhuangsuoshuliangInsertRight1: array[i].zhuangsuoshuliangInsertRight1,
//                     zhuangsuofangwiangSelectRight: array[i].zhuangsuofangwiangSelectRight,
//                     zhuangsuofangweiInsertLeft1: array[i].zhuangsuofangweiInsertLeft1,
//                     zhuangsuofangweiInsertLeft2: array[i].zhuangsuofangweiInsertLeft2,
//                     zhuangsuofangweiInsertRight1: array[i].zhuangsuofangweiInsertRight1,
//                     zhuangsuofangweiInsertRight2: array[i].zhuangsuofangweiInsertRight2,
//                     kaijiaolian: array[i].kaijiaolian,
//                     jiaolian1SelectLeft: array[i].jiaolian1SelectLeft,
//                     jiaolian1InsertLeft: array[i].jiaolian1InsertLeft,
//                     jiaolian1SelectRight: array[i].jiaolian1SelectRight,
//                     jiaolian1InsertRight: array[i].jiaolian1InsertRight,
//                     jiaolian2SelectLeft: array[i].jiaolian2SelectLeft,
//                     jiaolian2InsertLeft: array[i].jiaolian2InsertLeft,
//                     jiaolian2SelectRight: array[i].jiaolian2SelectRight,
//                     jiaolian2InsertRight: array[i].jiaolian2InsertRight,
//                     jiaolian3SelectLeft: array[i].jiaolian3SelectLeft,
//                     jiaolian3InsertLeft: array[i].jiaolian3InsertLeft,
//                     jiaolian3SelectRight: array[i].jiaolian3SelectRight,
//                     jiaolian3InsertRight: array[i].jiaolian3InsertRight,
//                     jiaolian4SelectLeft: array[i].jiaolian4SelectLeft,
//                     jiaolian4InsertLeft: array[i].jiaolian4InsertLeft,
//                     jiaolian4SelectRight: array[i].jiaolian4SelectRight,
//                     jiaolian4InsertRight: array[i].jiaolian4InsertRight,
//                     jiaolian5SelectLeft: array[i].jiaolian5SelectLeft,
//                     jiaolian5InsertLeft: array[i].jiaolian5InsertLeft,
//                     jiaolian5SelectRight: array[i].jiaolian5SelectRight,
//                     jiaolian5InsertRight: array[i].jiaolian5InsertRight,
//                     jiaolian6SelectLeft: array[i].jiaolian6SelectLeft,
//                     jiaolian6InsertLeft: array[i].jiaolian6InsertLeft,
//                     jiaolian6SelectRight: array[i].jiaolian6SelectRight,
//                     jiaolian6InsertRight: array[i].jiaolian6InsertRight,
//                     fujianSelect1: array[i].fujianSelect1,
//                     fujianSelect2: array[i].fujianSelect2,
//                     fujianSelect3: array[i].fujianSelect3,
//                     fujianSelect4: array[i].fujianSelect4,
//                     pinpaiSelect1: array[i].pinpaiSelect1,
//                     pinpaiSelect2: array[i].pinpaiSelect2,
//                     pinpaiSelect3: array[i].pinpaiSelect3,
//                     pinpaiSelect4: array[i].pinpaiSelect4,
//                     fujianShuliang1: array[i].fujianShuliang1,
//                     fujianShuliang2: array[i].fujianShuliang2,
//                     fujianShuliang3: array[i].fujianShuliang3,
//                     fujianShuliang4: array[i].fujianShuliang4,
//                     sumShuliang1: array[i].sumShuliang1,
//                     danjia1: array[i].danjia1,
//                     sumJine1: array[i].sumJine1,
//                     sumShuliang2: array[i].sumShuliang2,
//                     danjia2: array[i].danjia2,
//                     sumJine2: array[i].sumJine2,
//                     wancheng: array[i].wancheng,
//                     qita: array[i].qita,
//                     customerNameRenyuan: array[i].customerNameRenyuan,
//                 }
//                 header.push(body)
//             }
//             console.log(header)
//             title = ['下单日期', '客户名称', '单据编号', '简码', '送货地址', '联系电话', '送货方式', '安装地址', '订单号', '高', '宽', '铝型材', '下单数量', '铝材颜色', '玻璃深加工', '玻璃颜色', '拉手型号', '铰链孔方向左', '铰链孔方向右', '拉手数量左', '拉手数量右', '左拉手位从上向下', '左拉手位从右向左', '右拉手位从下向上', '右拉手位从左向右', '装锁数量(左)', '装锁数量(右)', '装锁方向(右)', '装锁方位(左1)', '装锁方位(左2)', '装锁方位(右1)', '装锁方位(右2)', '开铰链孔', '左铰链孔从下向上', '左铰链孔从右向左', '右铰链孔从下向上', '右铰链孔从左向右', '左铰链孔2从下向上', '左铰链孔2从右向左', '右铰链孔2从下向上', '右铰链孔2从左向右', '左铰链孔3从下向上', '左铰链孔3从右向左', '右铰链孔3从下向上', '右铰链孔3从左向右', '左铰链孔4从下向上', '左铰链孔4从右向左', '右铰链孔4从下向上', '右铰链孔4从左向右', '左铰链孔5从下向上', '左铰链孔5从右向左', '右铰链孔5从下向上', '右铰链孔5从左向右', '左铰链孔6从下向上', '左铰链孔6从右向左', '右铰链孔6从下向上', '右铰链孔6从左向右', '附件1', '附件2', '附件3', '附件4', '品牌1', '品牌2', '品牌3', '品牌4', '附件数量1', '附件数量2', '附件数量3', '附件数量4', '数量(平方)', '单价(平方)', '金额(平方)', '数量(周长)', '单价(周长)', '金额(周长)', '完成', '其他项目(说明)', '录入员']
//             JSONToExcelConvertor(header, "铝框下单", title)
//
//         }
//     })
//
// }
//
//
// function JSONToExcelConvertor(JSONData, FileName, title, filter) {
//     if (!JSONData)
//         return;
//     //转化json为object
//     var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
//
//     var excel = "<table>";
//
//     //设置表头
//     var row = "<tr>";
//
//     if (title) {
//         //使用标题项
//         for (var i in title) {
//             row += "<th align='center'>" + title[i] + '</th>';
//         }
//
//     } else {
//         //不使用标题项
//         for (var i in arrData[0]) {
//             row += "<th align='center'>" + i + '</th>';
//         }
//     }
//
//     excel += row + "</tr>";
//
//     //设置数据
//     for (var i = 0; i < arrData.length; i++) {
//         var row = "<tr>";
//
//         for (var index in arrData[i]) {
//             //判断是否有过滤行
//             if (filter) {
//                 if (filter.indexOf(index) == -1) {
//                     var value = arrData[i][index] == null ? "" : arrData[i][index];
//                     row += '<td>' + value + '</td>';
//                 }
//             } else {
//                 var value = arrData[i][index] == null ? "" : arrData[i][index];
//                 row += "<td align='center'>" + value + "</td>";
//             }
//         }
//
//         excel += row + "</tr>";
//     }
//
//     excel += "</table>";
//
//     var excelFile = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:x='urn:schemas-microsoft-com:office:excel' xmlns='http://www.w3.org/TR/REC-html40'>";
//     excelFile += '<meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8">';
//     excelFile += '<meta http-equiv="content-type" content="application/vnd.ms-excel';
//     excelFile += '; charset=UTF-8">';
//     excelFile += "<head>";
//     excelFile += "<!--[if gte mso 9]>";
//     excelFile += "<xml>";
//     excelFile += "<x:ExcelWorkbook>";
//     excelFile += "<x:ExcelWorksheets>";
//     excelFile += "<x:ExcelWorksheet>";
//     excelFile += "<x:Name>";
//     excelFile += "{worksheet}";
//     excelFile += "</x:Name>";
//     excelFile += "<x:WorksheetOptions>";
//     excelFile += "<x:DisplayGridlines/>";
//     excelFile += "</x:WorksheetOptions>";
//     excelFile += "</x:ExcelWorksheet>";
//     excelFile += "</x:ExcelWorksheets>";
//     excelFile += "</x:ExcelWorkbook>";
//     excelFile += "</xml>";
//     excelFile += "<![endif]-->";
//     excelFile += "</head>";
//     excelFile += "<body>";
//     excelFile += excel;
//     excelFile += "</body>";
//     excelFile += "</html>";
//
//
//     var uri = 'data:application/vnd.ms-excel;charset=utf-8,' + encodeURIComponent(excelFile);
//
//     var link = document.createElement("a");
//     link.href = uri;
//
//     link.style = "visibility:hidden";
//     link.download = FileName + ".xls";
//
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// }
//
// function getToken() {
//     $ajax({
//         type: 'post',
//         url: '/user/getToken',
//     }, false, '', function (res) {
//         console.log(res.data.token)
//         if (res.code == 200) {
//
//             //默认当前日期
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             //拼接成yyyy-MM-dd的形式
//             var xdrq = date.getFullYear() + "-" + (month) + "-" + (day);
//             var djbh = "";
//             var ksinsertDate = date.getFullYear() + "-" + (month) + "-" + (day);
//             var jsinsertDate = date.getFullYear() + "-" + (month) + "-" + ("0" + (date.getDate() + 1)).slice(-2);
//             var customerNumber = "";
//             var ddh = "";
//             var customerName = "";
//             var installAddress = "";
//             var wancheng = "";
//             $ajax({
//                 type: 'post',
//                 url: '/lkxd/queryList',
//                 data: {
//                     customerNumber: customerNumber,
//                     customerName: customerName,
//                     installAddress: installAddress,
//                     ksinsertDate: ksinsertDate,
//                     jsinsertDate: jsinsertDate,
//                     wancheng: wancheng,
//                 },
//                 async: false,
//             }, false, '', function (res) {
//                 var length;
//
//                 length = 0;
//                 if (res.data != undefined) {
//                     length = res.data.length
//                 }
//                 if (Math.floor((length + 1) / 10) === 0) {
//                     length = "000" + (length + 1);
//                 } else if (Math.floor((length + 1) / 100) === 0) {
//                     length = "00" + (length + 1);
//                 } else if (Math.floor((length + 1) / 1000) === 0) {
//                     length = "0" + (length + 1);
//                 } else if (Math.floor((length + 1) / 10000) === 0) {
//                     length = (length + 1);
//                 }
//                 console.log(length)
//                 djbh = "LK" + date.getFullYear() + (month) + (day) + length;
//                 console.log(djbh)
//             })
//             console.log(djbh)
//             setForm(res.data, '#add-form');
//             $('#add-customerNameRenyuan').val(res.data.name);
//             $('#add-insertDate').val(xdrq);
//             $('#add-orderNumber').val(djbh);
//
//         }
//     })
// }
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
                $("#customerName").append("<option>" + res.data[i].company + "</option>");
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


                    $("#update-jiaolian1SelectRight").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian2SelectRight").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian3SelectRight").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian4SelectRight").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian5SelectRight").append("<option>" + res.data[i].jlkw + "</option>");
                    $("#update-jiaolian6SelectRight").append("<option>" + res.data[i].jlkw + "</option>");

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
            }
        }
    })
}

$(document).ready(function () {
    $('#add-kaijiaolian').on('change', function () {
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

    $('#add-kaijiaolian1').on('change', function () {
        var selectedValue1 = $(this).val();
        if (selectedValue1 == '开二孔') {
            $("#add-jiaolian3SelectLeft1").remove();
            $("#add-jiaolian3InsertLeft1").remove();
            $("#add-jiaolian3SelectRight1").remove();
            $("#add-jiaolian3InsertRight1").remove();

            $("#add-jiaolian4SelectLeft1").remove();
            $("#add-jiaolian4InsertLeft1").remove();
            $("#add-jiaolian4SelectRight1").remove();
            $("#add-jiaolian4InsertRight1").remove();

            $("#add-jiaolian5SelectLeft1").remove();
            $("#add-jiaolian5InsertLeft1").remove();
            $("#add-jiaolian5SelectRight1").remove();
            $("#add-jiaolian5InsertRight1").remove();

            $("#add-jiaolian6SelectLeft1").remove();
            $("#add-jiaolian6InsertLeft1").remove();
            $("#add-jiaolian6SelectRight1").remove();
            $("#add-jiaolian6InsertRight1").remove();

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
        if (selectedValue1 == '开三孔') {
            $("#add-jiaolian4SelectLeft1").remove();
            $("#add-jiaolian4InsertLeft1").remove();
            $("#add-jiaolian4SelectRight1").remove();
            $("#add-jiaolian4InsertRight1").remove();

            $("#add-jiaolian5SelectLeft1").remove();
            $("#add-jiaolian5InsertLeft1").remove();
            $("#add-jiaolian5SelectRight1").remove();
            $("#add-jiaolian5InsertRight1").remove();

            $("#add-jiaolian6SelectLeft1").remove();
            $("#add-jiaolian6InsertLeft1").remove();
            $("#add-jiaolian6SelectRight1").remove();
            $("#add-jiaolian6InsertRight1").remove();

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
        if (selectedValue1 == '开四孔') {
            $("#add-jiaolian5SelectLeft1").remove();
            $("#add-jiaolian5InsertLeft1").remove();
            $("#add-jiaolian5SelectRight1").remove();
            $("#add-jiaolian5InsertRight1").remove();

            $("#add-jiaolian6SelectLeft1").remove();
            $("#add-jiaolian6InsertLeft1").remove();
            $("#add-jiaolian6SelectRight1").remove();
            $("#add-jiaolian6InsertRight1").remove();

            $("#l5sl").remove();
            $("#l5il").remove();
            $("#l5sr").remove();
            $("#l5ir").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
        if (selectedValue1 == '开五孔') {
            $("#add-jiaolian6SelectLeft1").remove();
            $("#add-jiaolian6InsertLeft1").remove();
            $("#add-jiaolian6SelectRight1").remove();
            $("#add-jiaolian6InsertRight1").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
    })

    $('#add-kaijiaolian2').on('change', function () {
        var selectedValue2 = $(this).val();
        if (selectedValue2 == '开二孔') {
            $("#add-jiaolian3SelectLeft2").remove();
            $("#add-jiaolian3InsertLeft2").remove();
            $("#add-jiaolian3SelectRight2").remove();
            $("#add-jiaolian3InsertRight2").remove();

            $("#add-jiaolian4SelectLeft2").remove();
            $("#add-jiaolian4InsertLeft2").remove();
            $("#add-jiaolian4SelectRight2").remove();
            $("#add-jiaolian4InsertRight2").remove();

            $("#add-jiaolian5SelectLeft2").remove();
            $("#add-jiaolian5InsertLeft2").remove();
            $("#add-jiaolian5SelectRight2").remove();
            $("#add-jiaolian5InsertRight2").remove();

            $("#add-jiaolian6SelectLeft2").remove();
            $("#add-jiaolian6InsertLeft2").remove();
            $("#add-jiaolian6SelectRight2").remove();
            $("#add-jiaolian6InsertRight2").remove();

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
        if (selectedValue2 == '开三孔') {
            $("#add-jiaolian4SelectLeft2").remove();
            $("#add-jiaolian4InsertLeft2").remove();
            $("#add-jiaolian4SelectRight2").remove();
            $("#add-jiaolian4InsertRight2").remove();

            $("#add-jiaolian5SelectLeft2").remove();
            $("#add-jiaolian5InsertLeft2").remove();
            $("#add-jiaolian5SelectRight2").remove();
            $("#add-jiaolian5InsertRight2").remove();

            $("#add-jiaolian6SelectLeft2").remove();
            $("#add-jiaolian6InsertLeft2").remove();
            $("#add-jiaolian6SelectRight2").remove();
            $("#add-jiaolian6InsertRight2").remove();

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
        if (selectedValue2 == '开四孔') {
            $("#add-jiaolian5SelectLeft2").remove();
            $("#add-jiaolian5InsertLeft2").remove();
            $("#add-jiaolian5SelectRight2").remove();
            $("#add-jiaolian5InsertRight2").remove();

            $("#add-jiaolian6SelectLeft2").remove();
            $("#add-jiaolian6InsertLeft2").remove();
            $("#add-jiaolian6SelectRight2").remove();
            $("#add-jiaolian6InsertRight2").remove();

            $("#l5sl").remove();
            $("#l5il").remove();
            $("#l5sr").remove();
            $("#l5ir").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
        if (selectedValue2 == '开五孔') {
            $("#add-jiaolian6SelectLeft2").remove();
            $("#add-jiaolian6InsertLeft2").remove();
            $("#add-jiaolian6SelectRight2").remove();
            $("#add-jiaolian6InsertRight2").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
    })

    $('#add-kaijiaolian3').on('change', function () {
        var selectedValue3 = $(this).val();
        if (selectedValue3 == '开二孔') {
            $("#add-jiaolian3SelectLeft3").remove();
            $("#add-jiaolian3InsertLeft3").remove();
            $("#add-jiaolian3SelectRight3").remove();
            $("#add-jiaolian3InsertRight3").remove();

            $("#add-jiaolian4SelectLeft3").remove();
            $("#add-jiaolian4InsertLeft3").remove();
            $("#add-jiaolian4SelectRight3").remove();
            $("#add-jiaolian4InsertRight3").remove();

            $("#add-jiaolian5SelectLeft3").remove();
            $("#add-jiaolian5InsertLeft3").remove();
            $("#add-jiaolian5SelectRight3").remove();
            $("#add-jiaolian5InsertRight3").remove();

            $("#add-jiaolian6SelectLeft3").remove();
            $("#add-jiaolian6InsertLeft3").remove();
            $("#add-jiaolian6SelectRight3").remove();
            $("#add-jiaolian6InsertRight3").remove();

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
        if (selectedValue3 == '开三孔') {
            $("#add-jiaolian4SelectLeft3").remove();
            $("#add-jiaolian4InsertLeft3").remove();
            $("#add-jiaolian4SelectRight3").remove();
            $("#add-jiaolian4InsertRight3").remove();

            $("#add-jiaolian5SelectLeft3").remove();
            $("#add-jiaolian5InsertLeft3").remove();
            $("#add-jiaolian5SelectRight3").remove();
            $("#add-jiaolian5InsertRight3").remove();

            $("#add-jiaolian6SelectLeft3").remove();
            $("#add-jiaolian6InsertLeft3").remove();
            $("#add-jiaolian6SelectRight3").remove();
            $("#add-jiaolian6InsertRight3").remove();

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
        if (selectedValue3 == '开四孔') {
            $("#add-jiaolian5SelectLeft3").remove();
            $("#add-jiaolian5InsertLeft3").remove();
            $("#add-jiaolian5SelectRight3").remove();
            $("#add-jiaolian5InsertRight3").remove();

            $("#add-jiaolian6SelectLeft3").remove();
            $("#add-jiaolian6InsertLeft3").remove();
            $("#add-jiaolian6SelectRight3").remove();
            $("#add-jiaolian6InsertRight3").remove();

            $("#l5sl").remove();
            $("#l5il").remove();
            $("#l5sr").remove();
            $("#l5ir").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
        if (selectedValue3 == '开五孔') {
            $("#add-jiaolian6SelectLeft3").remove();
            $("#add-jiaolian6InsertLeft3").remove();
            $("#add-jiaolian6SelectRight3").remove();
            $("#add-jiaolian6InsertRight3").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
    })

    $('#add-kaijiaolian4').on('change', function () {
        var selectedValue4 = $(this).val();
        if (selectedValue4 == '开二孔') {
            $("#add-jiaolian3SelectLeft4").remove();
            $("#add-jiaolian3InsertLeft4").remove();
            $("#add-jiaolian3SelectRight4").remove();
            $("#add-jiaolian3InsertRight4").remove();

            $("#add-jiaolian4SelectLeft4").remove();
            $("#add-jiaolian4InsertLeft4").remove();
            $("#add-jiaolian4SelectRight4").remove();
            $("#add-jiaolian4InsertRight4").remove();

            $("#add-jiaolian5SelectLeft4").remove();
            $("#add-jiaolian5InsertLeft4").remove();
            $("#add-jiaolian5SelectRight4").remove();
            $("#add-jiaolian5InsertRight4").remove();

            $("#add-jiaolian6SelectLeft4").remove();
            $("#add-jiaolian6InsertLeft4").remove();
            $("#add-jiaolian6SelectRight4").remove();
            $("#add-jiaolian6InsertRight4").remove();

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
        if (selectedValue4 == '开三孔') {
            $("#add-jiaolian4SelectLeft4").remove();
            $("#add-jiaolian4InsertLeft4").remove();
            $("#add-jiaolian4SelectRight4").remove();
            $("#add-jiaolian4InsertRight4").remove();

            $("#add-jiaolian5SelectLeft4").remove();
            $("#add-jiaolian5InsertLeft4").remove();
            $("#add-jiaolian5SelectRight4").remove();
            $("#add-jiaolian5InsertRight4").remove();

            $("#add-jiaolian6SelectLeft4").remove();
            $("#add-jiaolian6InsertLeft4").remove();
            $("#add-jiaolian6SelectRight4").remove();
            $("#add-jiaolian6InsertRight4").remove();

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
        if (selectedValue4 == '开四孔') {
            $("#add-jiaolian5SelectLeft4").remove();
            $("#add-jiaolian5InsertLeft4").remove();
            $("#add-jiaolian5SelectRight4").remove();
            $("#add-jiaolian5InsertRight4").remove();

            $("#add-jiaolian6SelectLeft4").remove();
            $("#add-jiaolian6InsertLeft4").remove();
            $("#add-jiaolian6SelectRight4").remove();
            $("#add-jiaolian6InsertRight4").remove();

            $("#l5sl").remove();
            $("#l5il").remove();
            $("#l5sr").remove();
            $("#l5ir").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
        if (selectedValue4 == '开五孔') {
            $("#add-jiaolian6SelectLeft4").remove();
            $("#add-jiaolian6InsertLeft4").remove();
            $("#add-jiaolian6SelectRight4").remove();
            $("#add-jiaolian6InsertRight4").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
    })

    $('#add-kaijiaolian5').on('change', function () {
        var selectedValue5 = $(this).val();
        if (selectedValue5 == '开二孔') {
            $("#add-jiaolian3SelectLeft5").remove();
            $("#add-jiaolian3InsertLeft5").remove();
            $("#add-jiaolian3SelectRight5").remove();
            $("#add-jiaolian3InsertRight5").remove();

            $("#add-jiaolian4SelectLeft5").remove();
            $("#add-jiaolian4InsertLeft5").remove();
            $("#add-jiaolian4SelectRight5").remove();
            $("#add-jiaolian4InsertRight5").remove();

            $("#add-jiaolian5SelectLeft5").remove();
            $("#add-jiaolian5InsertLeft5").remove();
            $("#add-jiaolian5SelectRight5").remove();
            $("#add-jiaolian5InsertRight5").remove();

            $("#add-jiaolian6SelectLeft5").remove();
            $("#add-jiaolian6InsertLeft5").remove();
            $("#add-jiaolian6SelectRight5").remove();
            $("#add-jiaolian6InsertRight5").remove();

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
        if (selectedValue5 == '开三孔') {
            $("#add-jiaolian4SelectLeft5").remove();
            $("#add-jiaolian4InsertLeft5").remove();
            $("#add-jiaolian4SelectRight5").remove();
            $("#add-jiaolian4InsertRight5").remove();

            $("#add-jiaolian5SelectLeft5").remove();
            $("#add-jiaolian5InsertLeft5").remove();
            $("#add-jiaolian5SelectRight5").remove();
            $("#add-jiaolian5InsertRight5").remove();

            $("#add-jiaolian6SelectLeft5").remove();
            $("#add-jiaolian6InsertLeft5").remove();
            $("#add-jiaolian6SelectRight5").remove();
            $("#add-jiaolian6InsertRight5").remove();

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
        if (selectedValue5 == '开四孔') {
            $("#add-jiaolian5SelectLeft5").remove();
            $("#add-jiaolian5InsertLeft5").remove();
            $("#add-jiaolian5SelectRight5").remove();
            $("#add-jiaolian5InsertRight5").remove();

            $("#add-jiaolian6SelectLeft5").remove();
            $("#add-jiaolian6InsertLeft5").remove();
            $("#add-jiaolian6SelectRight5").remove();
            $("#add-jiaolian6InsertRight5").remove();

            $("#l5sl").remove();
            $("#l5il").remove();
            $("#l5sr").remove();
            $("#l5ir").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
        if (selectedValue5 == '开五孔') {
            $("#add-jiaolian6SelectLeft5").remove();
            $("#add-jiaolian6InsertLeft5").remove();
            $("#add-jiaolian6SelectRight5").remove();
            $("#add-jiaolian6InsertRight5").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
    })

    $('#add-kaijiaolian6').on('change', function () {
        var selectedValue6 = $(this).val();
        if (selectedValue6 == '开二孔') {
            $("#add-jiaolian3SelectLeft6").remove();
            $("#add-jiaolian3InsertLeft6").remove();
            $("#add-jiaolian3SelectRight6").remove();
            $("#add-jiaolian3InsertRight6").remove();

            $("#add-jiaolian4SelectLeft6").remove();
            $("#add-jiaolian4InsertLeft6").remove();
            $("#add-jiaolian4SelectRight6").remove();
            $("#add-jiaolian4InsertRight6").remove();

            $("#add-jiaolian5SelectLeft6").remove();
            $("#add-jiaolian5InsertLeft6").remove();
            $("#add-jiaolian5SelectRight6").remove();
            $("#add-jiaolian5InsertRight6").remove();

            $("#add-jiaolian6SelectLeft6").remove();
            $("#add-jiaolian6InsertLeft6").remove();
            $("#add-jiaolian6SelectRight6").remove();
            $("#add-jiaolian6InsertRight6").remove();

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
        if (selectedValue6 == '开三孔') {
            $("#add-jiaolian4SelectLeft6").remove();
            $("#add-jiaolian4InsertLeft6").remove();
            $("#add-jiaolian4SelectRight6").remove();
            $("#add-jiaolian4InsertRight6").remove();

            $("#add-jiaolian5SelectLeft6").remove();
            $("#add-jiaolian5InsertLeft6").remove();
            $("#add-jiaolian5SelectRight6").remove();
            $("#add-jiaolian5InsertRight6").remove();

            $("#add-jiaolian6SelectLeft6").remove();
            $("#add-jiaolian6InsertLeft6").remove();
            $("#add-jiaolian6SelectRight6").remove();
            $("#add-jiaolian6InsertRight6").remove();

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
        if (selectedValue6 == '开四孔') {
            $("#add-jiaolian5SelectLeft6").remove();
            $("#add-jiaolian5InsertLeft6").remove();
            $("#add-jiaolian5SelectRight6").remove();
            $("#add-jiaolian5InsertRight6").remove();

            $("#add-jiaolian6SelectLeft6").remove();
            $("#add-jiaolian6InsertLeft6").remove();
            $("#add-jiaolian6SelectRight6").remove();
            $("#add-jiaolian6InsertRight6").remove();

            $("#l5sl").remove();
            $("#l5il").remove();
            $("#l5sr").remove();
            $("#l5ir").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
        if (selectedValue6 == '开五孔') {
            $("#add-jiaolian6SelectLeft6").remove();
            $("#add-jiaolian6InsertLeft6").remove();
            $("#add-jiaolian6SelectRight6").remove();
            $("#add-jiaolian6InsertRight6").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
    })

    $('#add-kaijiaolian7').on('change', function () {
        var selectedValue7 = $(this).val();
        if (selectedValue7 == '开二孔') {
            $("#add-jiaolian3SelectLeft7").remove();
            $("#add-jiaolian3InsertLeft7").remove();
            $("#add-jiaolian3SelectRight7").remove();
            $("#add-jiaolian3InsertRight7").remove();

            $("#add-jiaolian4SelectLeft7").remove();
            $("#add-jiaolian4InsertLeft7").remove();
            $("#add-jiaolian4SelectRight7").remove();
            $("#add-jiaolian4InsertRight7").remove();

            $("#add-jiaolian5SelectLeft7").remove();
            $("#add-jiaolian5InsertLeft7").remove();
            $("#add-jiaolian5SelectRight7").remove();
            $("#add-jiaolian5InsertRight7").remove();

            $("#add-jiaolian6SelectLeft7").remove();
            $("#add-jiaolian6InsertLeft7").remove();
            $("#add-jiaolian6SelectRight7").remove();
            $("#add-jiaolian6InsertRight7").remove();

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
        if (selectedValue7 == '开三孔') {
            $("#add-jiaolian4SelectLeft7").remove();
            $("#add-jiaolian4InsertLeft7").remove();
            $("#add-jiaolian4SelectRight7").remove();
            $("#add-jiaolian4InsertRight7").remove();

            $("#add-jiaolian5SelectLeft7").remove();
            $("#add-jiaolian5InsertLeft7").remove();
            $("#add-jiaolian5SelectRight7").remove();
            $("#add-jiaolian5InsertRight7").remove();

            $("#add-jiaolian6SelectLeft7").remove();
            $("#add-jiaolian6InsertLeft7").remove();
            $("#add-jiaolian6SelectRight7").remove();
            $("#add-jiaolian6InsertRight7").remove();

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
        if (selectedValue7 == '开四孔') {
            $("#add-jiaolian5SelectLeft7").remove();
            $("#add-jiaolian5InsertLeft7").remove();
            $("#add-jiaolian5SelectRight7").remove();
            $("#add-jiaolian5InsertRight7").remove();

            $("#add-jiaolian6SelectLeft7").remove();
            $("#add-jiaolian6InsertLeft7").remove();
            $("#add-jiaolian6SelectRight7").remove();
            $("#add-jiaolian6InsertRight7").remove();

            $("#l5sl").remove();
            $("#l5il").remove();
            $("#l5sr").remove();
            $("#l5ir").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
        if (selectedValue7 == '开五孔') {
            $("#add-jiaolian6SelectLeft7").remove();
            $("#add-jiaolian6InsertLeft7").remove();
            $("#add-jiaolian6SelectRight7").remove();
            $("#add-jiaolian6InsertRight7").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
    })

    $('#add-kaijiaolian8').on('change', function () {
        var selectedValue8 = $(this).val();
        if (selectedValue8 == '开二孔') {
            $("#add-jiaolian3SelectLeft8").remove();
            $("#add-jiaolian3InsertLeft8").remove();
            $("#add-jiaolian3SelectRight8").remove();
            $("#add-jiaolian3InsertRight8").remove();

            $("#add-jiaolian4SelectLeft8").remove();
            $("#add-jiaolian4InsertLeft8").remove();
            $("#add-jiaolian4SelectRight8").remove();
            $("#add-jiaolian4InsertRight8").remove();

            $("#add-jiaolian5SelectLeft8").remove();
            $("#add-jiaolian5InsertLeft8").remove();
            $("#add-jiaolian5SelectRight8").remove();
            $("#add-jiaolian5InsertRight8").remove();

            $("#add-jiaolian6SelectLeft8").remove();
            $("#add-jiaolian6InsertLeft8").remove();
            $("#add-jiaolian6SelectRight8").remove();
            $("#add-jiaolian6InsertRight8").remove();

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
        if (selectedValue8 == '开三孔') {
            $("#add-jiaolian4SelectLeft8").remove();
            $("#add-jiaolian4InsertLeft8").remove();
            $("#add-jiaolian4SelectRight8").remove();
            $("#add-jiaolian4InsertRight8").remove();

            $("#add-jiaolian5SelectLeft8").remove();
            $("#add-jiaolian5InsertLeft8").remove();
            $("#add-jiaolian5SelectRight8").remove();
            $("#add-jiaolian5InsertRight8").remove();

            $("#add-jiaolian6SelectLeft8").remove();
            $("#add-jiaolian6InsertLeft8").remove();
            $("#add-jiaolian6SelectRight8").remove();
            $("#add-jiaolian6InsertRight8").remove();

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
        if (selectedValue8 == '开四孔') {
            $("#add-jiaolian5SelectLeft8").remove();
            $("#add-jiaolian5InsertLeft8").remove();
            $("#add-jiaolian5SelectRight8").remove();
            $("#add-jiaolian5InsertRight8").remove();

            $("#add-jiaolian6SelectLeft8").remove();
            $("#add-jiaolian6InsertLeft8").remove();
            $("#add-jiaolian6SelectRight8").remove();
            $("#add-jiaolian6InsertRight8").remove();

            $("#l5sl").remove();
            $("#l5il").remove();
            $("#l5sr").remove();
            $("#l5ir").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
        if (selectedValue8 == '开五孔') {
            $("#add-jiaolian6SelectLeft8").remove();
            $("#add-jiaolian6InsertLeft8").remove();
            $("#add-jiaolian6SelectRight8").remove();
            $("#add-jiaolian6InsertRight8").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
    })

    $('#add-kaijiaolian9').on('change', function () {
        var selectedValue9 = $(this).val();
        if (selectedValue9 == '开二孔') {
            $("#add-jiaolian3SelectLeft9").remove();
            $("#add-jiaolian3InsertLeft9").remove();
            $("#add-jiaolian3SelectRight9").remove();
            $("#add-jiaolian3InsertRight9").remove();

            $("#add-jiaolian4SelectLeft9").remove();
            $("#add-jiaolian4InsertLeft9").remove();
            $("#add-jiaolian4SelectRight9").remove();
            $("#add-jiaolian4InsertRight9").remove();

            $("#add-jiaolian5SelectLeft9").remove();
            $("#add-jiaolian5InsertLeft9").remove();
            $("#add-jiaolian5SelectRight9").remove();
            $("#add-jiaolian5InsertRight9").remove();

            $("#add-jiaolian6SelectLeft9").remove();
            $("#add-jiaolian6InsertLeft9").remove();
            $("#add-jiaolian6SelectRight9").remove();
            $("#add-jiaolian6InsertRight9").remove();

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
        if (selectedValue9 == '开三孔') {
            $("#add-jiaolian4SelectLeft9").remove();
            $("#add-jiaolian4InsertLeft9").remove();
            $("#add-jiaolian4SelectRight9").remove();
            $("#add-jiaolian4InsertRight9").remove();

            $("#add-jiaolian5SelectLeft9").remove();
            $("#add-jiaolian5InsertLeft9").remove();
            $("#add-jiaolian5SelectRight9").remove();
            $("#add-jiaolian5InsertRight9").remove();

            $("#add-jiaolian6SelectLeft9").remove();
            $("#add-jiaolian6InsertLeft9").remove();
            $("#add-jiaolian6SelectRight9").remove();
            $("#add-jiaolian6InsertRight9").remove();

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
        if (selectedValue9 == '开四孔') {
            $("#add-jiaolian5SelectLeft9").remove();
            $("#add-jiaolian5InsertLeft9").remove();
            $("#add-jiaolian5SelectRight9").remove();
            $("#add-jiaolian5InsertRight9").remove();

            $("#add-jiaolian6SelectLeft9").remove();
            $("#add-jiaolian6InsertLeft9").remove();
            $("#add-jiaolian6SelectRight9").remove();
            $("#add-jiaolian6InsertRight9").remove();

            $("#l5sl").remove();
            $("#l5il").remove();
            $("#l5sr").remove();
            $("#l5ir").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
        if (selectedValue9 == '开五孔') {
            $("#add-jiaolian6SelectLeft9").remove();
            $("#add-jiaolian6InsertLeft9").remove();
            $("#add-jiaolian6SelectRight9").remove();
            $("#add-jiaolian6InsertRight9").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
    })

    $('#add-kaijiaolian10').on('change', function () {
        var selectedValue10 = $(this).val();
        if (selectedValue10 == '开二孔') {
            $("#add-jiaolian3SelectLeft10").remove();
            $("#add-jiaolian3InsertLeft10").remove();
            $("#add-jiaolian3SelectRight10").remove();
            $("#add-jiaolian3InsertRight10").remove();

            $("#add-jiaolian4SelectLeft10").remove();
            $("#add-jiaolian4InsertLeft10").remove();
            $("#add-jiaolian4SelectRight10").remove();
            $("#add-jiaolian4InsertRight10").remove();

            $("#add-jiaolian5SelectLeft10").remove();
            $("#add-jiaolian5InsertLeft10").remove();
            $("#add-jiaolian5SelectRight10").remove();
            $("#add-jiaolian5InsertRight10").remove();

            $("#add-jiaolian6SelectLeft10").remove();
            $("#add-jiaolian6InsertLeft10").remove();
            $("#add-jiaolian6SelectRight10").remove();
            $("#add-jiaolian6InsertRight10").remove();

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
        if (selectedValue10 == '开三孔') {
            $("#add-jiaolian4SelectLeft10").remove();
            $("#add-jiaolian4InsertLeft10").remove();
            $("#add-jiaolian4SelectRight10").remove();
            $("#add-jiaolian4InsertRight10").remove();

            $("#add-jiaolian5SelectLeft10").remove();
            $("#add-jiaolian5InsertLeft10").remove();
            $("#add-jiaolian5SelectRight10").remove();
            $("#add-jiaolian5InsertRight10").remove();

            $("#add-jiaolian6SelectLeft10").remove();
            $("#add-jiaolian6InsertLeft10").remove();
            $("#add-jiaolian6SelectRight10").remove();
            $("#add-jiaolian6InsertRight10").remove();

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
        if (selectedValue10 == '开四孔') {
            $("#add-jiaolian5SelectLeft10").remove();
            $("#add-jiaolian5InsertLeft10").remove();
            $("#add-jiaolian5SelectRight10").remove();
            $("#add-jiaolian5InsertRight10").remove();

            $("#add-jiaolian6SelectLeft10").remove();
            $("#add-jiaolian6InsertLeft10").remove();
            $("#add-jiaolian6SelectRight10").remove();
            $("#add-jiaolian6InsertRight10").remove();

            $("#l5sl").remove();
            $("#l5il").remove();
            $("#l5sr").remove();
            $("#l5ir").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
        if (selectedValue10 == '开五孔') {
            $("#add-jiaolian6SelectLeft10").remove();
            $("#add-jiaolian6InsertLeft10").remove();
            $("#add-jiaolian6SelectRight10").remove();
            $("#add-jiaolian6InsertRight10").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
    })

    $('#add-kaijiaolian11').on('change', function () {
        var selectedValue11 = $(this).val();
        if (selectedValue11 == '开二孔') {
            $("#add-jiaolian3SelectLeft11").remove();
            $("#add-jiaolian3InsertLeft11").remove();
            $("#add-jiaolian3SelectRight11").remove();
            $("#add-jiaolian3InsertRight11").remove();

            $("#add-jiaolian4SelectLeft11").remove();
            $("#add-jiaolian4InsertLeft11").remove();
            $("#add-jiaolian4SelectRight11").remove();
            $("#add-jiaolian4InsertRight11").remove();

            $("#add-jiaolian5SelectLeft11").remove();
            $("#add-jiaolian5InsertLeft11").remove();
            $("#add-jiaolian5SelectRight11").remove();
            $("#add-jiaolian5InsertRight11").remove();

            $("#add-jiaolian6SelectLeft11").remove();
            $("#add-jiaolian6InsertLeft11").remove();
            $("#add-jiaolian6SelectRight11").remove();
            $("#add-jiaolian6InsertRight11").remove();

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
        if (selectedValue11 == '开三孔') {
            $("#add-jiaolian4SelectLeft11").remove();
            $("#add-jiaolian4InsertLeft11").remove();
            $("#add-jiaolian4SelectRight11").remove();
            $("#add-jiaolian4InsertRight11").remove();

            $("#add-jiaolian5SelectLeft11").remove();
            $("#add-jiaolian5InsertLeft11").remove();
            $("#add-jiaolian5SelectRight11").remove();
            $("#add-jiaolian5InsertRight11").remove();

            $("#add-jiaolian6SelectLeft11").remove();
            $("#add-jiaolian6InsertLeft11").remove();
            $("#add-jiaolian6SelectRight11").remove();
            $("#add-jiaolian6InsertRight11").remove();

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
        if (selectedValue11 == '开四孔') {
            $("#add-jiaolian5SelectLeft11").remove();
            $("#add-jiaolian5InsertLeft11").remove();
            $("#add-jiaolian5SelectRight11").remove();
            $("#add-jiaolian5InsertRight11").remove();

            $("#add-jiaolian6SelectLeft11").remove();
            $("#add-jiaolian6InsertLeft11").remove();
            $("#add-jiaolian6SelectRight11").remove();
            $("#add-jiaolian6InsertRight11").remove();

            $("#l5sl").remove();
            $("#l5il").remove();
            $("#l5sr").remove();
            $("#l5ir").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
        if (selectedValue11 == '开五孔') {
            $("#add-jiaolian6SelectLeft11").remove();
            $("#add-jiaolian6InsertLeft11").remove();
            $("#add-jiaolian6SelectRight11").remove();
            $("#add-jiaolian6InsertRight11").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
    })

    $('#add-kaijiaolian12').on('change', function () {
        var selectedValue12 = $(this).val();
        if (selectedValue12 == '开二孔') {
            $("#add-jiaolian3SelectLeft12").remove();
            $("#add-jiaolian3InsertLeft12").remove();
            $("#add-jiaolian3SelectRight12").remove();
            $("#add-jiaolian3InsertRight12").remove();

            $("#add-jiaolian4SelectLeft12").remove();
            $("#add-jiaolian4InsertLeft12").remove();
            $("#add-jiaolian4SelectRight12").remove();
            $("#add-jiaolian4InsertRight12").remove();

            $("#add-jiaolian5SelectLeft12").remove();
            $("#add-jiaolian5InsertLeft12").remove();
            $("#add-jiaolian5SelectRight12").remove();
            $("#add-jiaolian5InsertRight12").remove();

            $("#add-jiaolian6SelectLeft12").remove();
            $("#add-jiaolian6InsertLeft12").remove();
            $("#add-jiaolian6SelectRight12").remove();
            $("#add-jiaolian6InsertRight12").remove();

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
        if (selectedValue12 == '开三孔') {
            $("#add-jiaolian4SelectLeft12").remove();
            $("#add-jiaolian4InsertLeft12").remove();
            $("#add-jiaolian4SelectRight12").remove();
            $("#add-jiaolian4InsertRight12").remove();

            $("#add-jiaolian5SelectLeft12").remove();
            $("#add-jiaolian5InsertLeft12").remove();
            $("#add-jiaolian5SelectRight12").remove();
            $("#add-jiaolian5InsertRight12").remove();

            $("#add-jiaolian6SelectLeft12").remove();
            $("#add-jiaolian6InsertLeft12").remove();
            $("#add-jiaolian6SelectRight12").remove();
            $("#add-jiaolian6InsertRight12").remove();

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
        if (selectedValue12 == '开四孔') {
            $("#add-jiaolian5SelectLeft12").remove();
            $("#add-jiaolian5InsertLeft12").remove();
            $("#add-jiaolian5SelectRight12").remove();
            $("#add-jiaolian5InsertRight12").remove();

            $("#add-jiaolian6SelectLeft12").remove();
            $("#add-jiaolian6InsertLeft12").remove();
            $("#add-jiaolian6SelectRight12").remove();
            $("#add-jiaolian6InsertRight12").remove();

            $("#l5sl").remove();
            $("#l5il").remove();
            $("#l5sr").remove();
            $("#l5ir").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
        if (selectedValue12 == '开五孔') {
            $("#add-jiaolian6SelectLeft12").remove();
            $("#add-jiaolian6InsertLeft12").remove();
            $("#add-jiaolian6SelectRight12").remove();
            $("#add-jiaolian6InsertRight12").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
    })

    $('#add-kaijiaolian13').on('change', function () {
        var selectedValue13 = $(this).val();
        if (selectedValue13 == '开二孔') {
            $("#add-jiaolian3SelectLeft13").remove();
            $("#add-jiaolian3InsertLeft13").remove();
            $("#add-jiaolian3SelectRight13").remove();
            $("#add-jiaolian3InsertRight13").remove();

            $("#add-jiaolian4SelectLeft13").remove();
            $("#add-jiaolian4InsertLeft13").remove();
            $("#add-jiaolian4SelectRight13").remove();
            $("#add-jiaolian4InsertRight13").remove();

            $("#add-jiaolian5SelectLeft13").remove();
            $("#add-jiaolian5InsertLeft13").remove();
            $("#add-jiaolian5SelectRight13").remove();
            $("#add-jiaolian5InsertRight13").remove();

            $("#add-jiaolian6SelectLeft13").remove();
            $("#add-jiaolian6InsertLeft13").remove();
            $("#add-jiaolian6SelectRight13").remove();
            $("#add-jiaolian6InsertRight13").remove();

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
        if (selectedValue13 == '开三孔') {
            $("#add-jiaolian4SelectLeft13").remove();
            $("#add-jiaolian4InsertLeft13").remove();
            $("#add-jiaolian4SelectRight13").remove();
            $("#add-jiaolian4InsertRight13").remove();

            $("#add-jiaolian5SelectLeft13").remove();
            $("#add-jiaolian5InsertLeft13").remove();
            $("#add-jiaolian5SelectRight13").remove();
            $("#add-jiaolian5InsertRight13").remove();

            $("#add-jiaolian6SelectLeft13").remove();
            $("#add-jiaolian6InsertLeft13").remove();
            $("#add-jiaolian6SelectRight13").remove();
            $("#add-jiaolian6InsertRight13").remove();

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
        if (selectedValue13 == '开四孔') {
            $("#add-jiaolian5SelectLeft13").remove();
            $("#add-jiaolian5InsertLeft13").remove();
            $("#add-jiaolian5SelectRight13").remove();
            $("#add-jiaolian5InsertRight13").remove();

            $("#add-jiaolian6SelectLeft13").remove();
            $("#add-jiaolian6InsertLeft13").remove();
            $("#add-jiaolian6SelectRight13").remove();
            $("#add-jiaolian6InsertRight13").remove();

            $("#l5sl").remove();
            $("#l5il").remove();
            $("#l5sr").remove();
            $("#l5ir").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
        if (selectedValue13 == '开五孔') {
            $("#add-jiaolian6SelectLeft13").remove();
            $("#add-jiaolian6InsertLeft13").remove();
            $("#add-jiaolian6SelectRight13").remove();
            $("#add-jiaolian6InsertRight13").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
    })

    $('#add-kaijiaolian14').on('change', function () {
        var selectedValue14 = $(this).val();
        if (selectedValue14 == '开二孔') {
            $("#add-jiaolian3SelectLeft14").remove();
            $("#add-jiaolian3InsertLeft14").remove();
            $("#add-jiaolian3SelectRight14").remove();
            $("#add-jiaolian3InsertRight14").remove();

            $("#add-jiaolian4SelectLeft14").remove();
            $("#add-jiaolian4InsertLeft14").remove();
            $("#add-jiaolian4SelectRight14").remove();
            $("#add-jiaolian4InsertRight14").remove();

            $("#add-jiaolian5SelectLeft14").remove();
            $("#add-jiaolian5InsertLeft14").remove();
            $("#add-jiaolian5SelectRight14").remove();
            $("#add-jiaolian5InsertRight14").remove();

            $("#add-jiaolian6SelectLeft14").remove();
            $("#add-jiaolian6InsertLeft14").remove();
            $("#add-jiaolian6SelectRight14").remove();
            $("#add-jiaolian6InsertRight14").remove();

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
        if (selectedValue14 == '开三孔') {
            $("#add-jiaolian4SelectLeft14").remove();
            $("#add-jiaolian4InsertLeft14").remove();
            $("#add-jiaolian4SelectRight14").remove();
            $("#add-jiaolian4InsertRight14").remove();

            $("#add-jiaolian5SelectLeft14").remove();
            $("#add-jiaolian5InsertLeft14").remove();
            $("#add-jiaolian5SelectRight14").remove();
            $("#add-jiaolian5InsertRight14").remove();

            $("#add-jiaolian6SelectLeft14").remove();
            $("#add-jiaolian6InsertLeft14").remove();
            $("#add-jiaolian6SelectRight14").remove();
            $("#add-jiaolian6InsertRight14").remove();

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
        if (selectedValue14 == '开四孔') {
            $("#add-jiaolian5SelectLeft14").remove();
            $("#add-jiaolian5InsertLeft14").remove();
            $("#add-jiaolian5SelectRight14").remove();
            $("#add-jiaolian5InsertRight14").remove();

            $("#add-jiaolian6SelectLeft14").remove();
            $("#add-jiaolian6InsertLeft14").remove();
            $("#add-jiaolian6SelectRight14").remove();
            $("#add-jiaolian6InsertRight14").remove();

            $("#l5sl").remove();
            $("#l5il").remove();
            $("#l5sr").remove();
            $("#l5ir").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
        if (selectedValue14 == '开五孔') {
            $("#add-jiaolian6SelectLeft14").remove();
            $("#add-jiaolian6InsertLeft14").remove();
            $("#add-jiaolian6SelectRight14").remove();
            $("#add-jiaolian6InsertRight14").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
    })

    $('#add-kaijiaolian15').on('change', function () {
        var selectedValue15 = $(this).val();
        if (selectedValue15 == '开二孔') {
            $("#add-jiaolian3SelectLeft15").remove();
            $("#add-jiaolian3InsertLeft15").remove();
            $("#add-jiaolian3SelectRight15").remove();
            $("#add-jiaolian3InsertRight15").remove();

            $("#add-jiaolian4SelectLeft15").remove();
            $("#add-jiaolian4InsertLeft15").remove();
            $("#add-jiaolian4SelectRight15").remove();
            $("#add-jiaolian4InsertRight15").remove();

            $("#add-jiaolian5SelectLeft15").remove();
            $("#add-jiaolian5InsertLeft15").remove();
            $("#add-jiaolian5SelectRight15").remove();
            $("#add-jiaolian5InsertRight15").remove();

            $("#add-jiaolian6SelectLeft15").remove();
            $("#add-jiaolian6InsertLeft15").remove();
            $("#add-jiaolian6SelectRight15").remove();
            $("#add-jiaolian6InsertRight15").remove();

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
        if (selectedValue15 == '开三孔') {
            $("#add-jiaolian4SelectLeft15").remove();
            $("#add-jiaolian4InsertLeft15").remove();
            $("#add-jiaolian4SelectRight15").remove();
            $("#add-jiaolian4InsertRight15").remove();

            $("#add-jiaolian5SelectLeft15").remove();
            $("#add-jiaolian5InsertLeft15").remove();
            $("#add-jiaolian5SelectRight15").remove();
            $("#add-jiaolian5InsertRight15").remove();

            $("#add-jiaolian6SelectLeft15").remove();
            $("#add-jiaolian6InsertLeft15").remove();
            $("#add-jiaolian6SelectRight15").remove();
            $("#add-jiaolian6InsertRight15").remove();

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
        if (selectedValue15 == '开四孔') {
            $("#add-jiaolian5SelectLeft15").remove();
            $("#add-jiaolian5InsertLeft15").remove();
            $("#add-jiaolian5SelectRight15").remove();
            $("#add-jiaolian5InsertRight15").remove();

            $("#add-jiaolian6SelectLeft15").remove();
            $("#add-jiaolian6InsertLeft15").remove();
            $("#add-jiaolian6SelectRight15").remove();
            $("#add-jiaolian6InsertRight15").remove();

            $("#l5sl").remove();
            $("#l5il").remove();
            $("#l5sr").remove();
            $("#l5ir").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
        if (selectedValue15 == '开五孔') {
            $("#add-jiaolian6SelectLeft15").remove();
            $("#add-jiaolian6InsertLeft15").remove();
            $("#add-jiaolian6SelectRight15").remove();
            $("#add-jiaolian6InsertRight15").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
    })

    $('#add-kaijiaolian16').on('change', function () {
        var selectedValue16 = $(this).val();
        if (selectedValue16 == '开二孔') {
            $("#add-jiaolian3SelectLeft16").remove();
            $("#add-jiaolian3InsertLeft16").remove();
            $("#add-jiaolian3SelectRight16").remove();
            $("#add-jiaolian3InsertRight16").remove();

            $("#add-jiaolian4SelectLeft16").remove();
            $("#add-jiaolian4InsertLeft16").remove();
            $("#add-jiaolian4SelectRight16").remove();
            $("#add-jiaolian4InsertRight16").remove();

            $("#add-jiaolian5SelectLeft16").remove();
            $("#add-jiaolian5InsertLeft16").remove();
            $("#add-jiaolian5SelectRight16").remove();
            $("#add-jiaolian5InsertRight16").remove();

            $("#add-jiaolian6SelectLeft16").remove();
            $("#add-jiaolian6InsertLeft16").remove();
            $("#add-jiaolian6SelectRight16").remove();
            $("#add-jiaolian6InsertRight16").remove();

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
        if (selectedValue16 == '开三孔') {
            $("#add-jiaolian4SelectLeft16").remove();
            $("#add-jiaolian4InsertLeft16").remove();
            $("#add-jiaolian4SelectRight16").remove();
            $("#add-jiaolian4InsertRight16").remove();

            $("#add-jiaolian5SelectLeft16").remove();
            $("#add-jiaolian5InsertLeft16").remove();
            $("#add-jiaolian5SelectRight16").remove();
            $("#add-jiaolian5InsertRight16").remove();

            $("#add-jiaolian6SelectLeft16").remove();
            $("#add-jiaolian6InsertLeft16").remove();
            $("#add-jiaolian6SelectRight16").remove();
            $("#add-jiaolian6InsertRight16").remove();

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
        if (selectedValue16 == '开四孔') {
            $("#add-jiaolian5SelectLeft16").remove();
            $("#add-jiaolian5InsertLeft16").remove();
            $("#add-jiaolian5SelectRight16").remove();
            $("#add-jiaolian5InsertRight16").remove();

            $("#add-jiaolian6SelectLeft16").remove();
            $("#add-jiaolian6InsertLeft16").remove();
            $("#add-jiaolian6SelectRight16").remove();
            $("#add-jiaolian6InsertRight16").remove();

            $("#l5sl").remove();
            $("#l5il").remove();
            $("#l5sr").remove();
            $("#l5ir").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
        if (selectedValue16 == '开五孔') {
            $("#add-jiaolian6SelectLeft16").remove();
            $("#add-jiaolian6InsertLeft16").remove();
            $("#add-jiaolian6SelectRight16").remove();
            $("#add-jiaolian6InsertRight16").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
    })

    $('#add-kaijiaolian17').on('change', function () {
        var selectedValue17 = $(this).val();
        if (selectedValue17 == '开二孔') {
            $("#add-jiaolian3SelectLeft17").remove();
            $("#add-jiaolian3InsertLeft17").remove();
            $("#add-jiaolian3SelectRight17").remove();
            $("#add-jiaolian3InsertRight17").remove();

            $("#add-jiaolian4SelectLeft17").remove();
            $("#add-jiaolian4InsertLeft17").remove();
            $("#add-jiaolian4SelectRight17").remove();
            $("#add-jiaolian4InsertRight17").remove();

            $("#add-jiaolian5SelectLeft17").remove();
            $("#add-jiaolian5InsertLeft17").remove();
            $("#add-jiaolian5SelectRight17").remove();
            $("#add-jiaolian5InsertRight17").remove();

            $("#add-jiaolian6SelectLeft17").remove();
            $("#add-jiaolian6InsertLeft17").remove();
            $("#add-jiaolian6SelectRight17").remove();
            $("#add-jiaolian6InsertRight17").remove();

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
        if (selectedValue17 == '开三孔') {
            $("#add-jiaolian4SelectLeft17").remove();
            $("#add-jiaolian4InsertLeft17").remove();
            $("#add-jiaolian4SelectRight17").remove();
            $("#add-jiaolian4InsertRight17").remove();

            $("#add-jiaolian5SelectLeft17").remove();
            $("#add-jiaolian5InsertLeft17").remove();
            $("#add-jiaolian5SelectRight17").remove();
            $("#add-jiaolian5InsertRight17").remove();

            $("#add-jiaolian6SelectLeft17").remove();
            $("#add-jiaolian6InsertLeft17").remove();
            $("#add-jiaolian6SelectRight17").remove();
            $("#add-jiaolian6InsertRight17").remove();

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
        if (selectedValue17 == '开四孔') {
            $("#add-jiaolian5SelectLeft17").remove();
            $("#add-jiaolian5InsertLeft17").remove();
            $("#add-jiaolian5SelectRight17").remove();
            $("#add-jiaolian5InsertRight17").remove();

            $("#add-jiaolian6SelectLeft17").remove();
            $("#add-jiaolian6InsertLeft17").remove();
            $("#add-jiaolian6SelectRight17").remove();
            $("#add-jiaolian6InsertRight17").remove();

            $("#l5sl").remove();
            $("#l5il").remove();
            $("#l5sr").remove();
            $("#l5ir").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
        if (selectedValue17 == '开五孔') {
            $("#add-jiaolian6SelectLeft17").remove();
            $("#add-jiaolian6InsertLeft17").remove();
            $("#add-jiaolian6SelectRight17").remove();
            $("#add-jiaolian6InsertRight17").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
    })

    $('#add-kaijiaolian18').on('change', function () {
        var selectedValue18 = $(this).val();
        if (selectedValue18 == '开二孔') {
            $("#add-jiaolian3SelectLeft18").remove();
            $("#add-jiaolian3InsertLeft18").remove();
            $("#add-jiaolian3SelectRight18").remove();
            $("#add-jiaolian3InsertRight18").remove();

            $("#add-jiaolian4SelectLeft18").remove();
            $("#add-jiaolian4InsertLeft18").remove();
            $("#add-jiaolian4SelectRight18").remove();
            $("#add-jiaolian4InsertRight18").remove();

            $("#add-jiaolian5SelectLeft18").remove();
            $("#add-jiaolian5InsertLeft18").remove();
            $("#add-jiaolian5SelectRight18").remove();
            $("#add-jiaolian5InsertRight18").remove();

            $("#add-jiaolian6SelectLeft18").remove();
            $("#add-jiaolian6InsertLeft18").remove();
            $("#add-jiaolian6SelectRight18").remove();
            $("#add-jiaolian6InsertRight18").remove();

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
        if (selectedValue18 == '开三孔') {
            $("#add-jiaolian4SelectLeft18").remove();
            $("#add-jiaolian4InsertLeft18").remove();
            $("#add-jiaolian4SelectRight18").remove();
            $("#add-jiaolian4InsertRight18").remove();

            $("#add-jiaolian5SelectLeft18").remove();
            $("#add-jiaolian5InsertLeft18").remove();
            $("#add-jiaolian5SelectRight18").remove();
            $("#add-jiaolian5InsertRight18").remove();

            $("#add-jiaolian6SelectLeft18").remove();
            $("#add-jiaolian6InsertLeft18").remove();
            $("#add-jiaolian6SelectRight18").remove();
            $("#add-jiaolian6InsertRight18").remove();

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
        if (selectedValue18 == '开四孔') {
            $("#add-jiaolian5SelectLeft18").remove();
            $("#add-jiaolian5InsertLeft18").remove();
            $("#add-jiaolian5SelectRight18").remove();
            $("#add-jiaolian5InsertRight18").remove();

            $("#add-jiaolian6SelectLeft18").remove();
            $("#add-jiaolian6InsertLeft18").remove();
            $("#add-jiaolian6SelectRight18").remove();
            $("#add-jiaolian6InsertRight18").remove();

            $("#l5sl").remove();
            $("#l5il").remove();
            $("#l5sr").remove();
            $("#l5ir").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
        if (selectedValue18 == '开五孔') {
            $("#add-jiaolian6SelectLeft18").remove();
            $("#add-jiaolian6InsertLeft18").remove();
            $("#add-jiaolian6SelectRight18").remove();
            $("#add-jiaolian6InsertRight18").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
    })

    $('#add-kaijiaolian19').on('change', function () {
        var selectedValue19 = $(this).val();
        if (selectedValue19 == '开二孔') {
            $("#add-jiaolian3SelectLeft19").remove();
            $("#add-jiaolian3InsertLeft19").remove();
            $("#add-jiaolian3SelectRight19").remove();
            $("#add-jiaolian3InsertRight19").remove();

            $("#add-jiaolian4SelectLeft19").remove();
            $("#add-jiaolian4InsertLeft19").remove();
            $("#add-jiaolian4SelectRight19").remove();
            $("#add-jiaolian4InsertRight19").remove();

            $("#add-jiaolian5SelectLeft19").remove();
            $("#add-jiaolian5InsertLeft19").remove();
            $("#add-jiaolian5SelectRight19").remove();
            $("#add-jiaolian5InsertRight19").remove();

            $("#add-jiaolian6SelectLeft19").remove();
            $("#add-jiaolian6InsertLeft19").remove();
            $("#add-jiaolian6SelectRight19").remove();
            $("#add-jiaolian6InsertRight19").remove();

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
        if (selectedValue19 == '开三孔') {
            $("#add-jiaolian4SelectLeft19").remove();
            $("#add-jiaolian4InsertLeft19").remove();
            $("#add-jiaolian4SelectRight19").remove();
            $("#add-jiaolian4InsertRight19").remove();

            $("#add-jiaolian5SelectLeft19").remove();
            $("#add-jiaolian5InsertLeft19").remove();
            $("#add-jiaolian5SelectRight19").remove();
            $("#add-jiaolian5InsertRight19").remove();

            $("#add-jiaolian6SelectLeft19").remove();
            $("#add-jiaolian6InsertLeft19").remove();
            $("#add-jiaolian6SelectRight19").remove();
            $("#add-jiaolian6InsertRight19").remove();

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
        if (selectedValue19 == '开四孔') {
            $("#add-jiaolian5SelectLeft19").remove();
            $("#add-jiaolian5InsertLeft19").remove();
            $("#add-jiaolian5SelectRight19").remove();
            $("#add-jiaolian5InsertRight19").remove();

            $("#add-jiaolian6SelectLeft19").remove();
            $("#add-jiaolian6InsertLeft19").remove();
            $("#add-jiaolian6SelectRight19").remove();
            $("#add-jiaolian6InsertRight19").remove();

            $("#l5sl").remove();
            $("#l5il").remove();
            $("#l5sr").remove();
            $("#l5ir").remove();

            $("#l6sl").remove();
            $("#l6il").remove();
            $("#l6sr").remove();
            $("#l6ir").remove();
        }
        if (selectedValue19 == '开五孔') {
            $("#add-jiaolian6SelectLeft19").remove();
            $("#add-jiaolian6InsertLeft19").remove();
            $("#add-jiaolian6SelectRight19").remove();
            $("#add-jiaolian6InsertRight19").remove();

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

    var jl11 = document.getElementById('add-jiaolian1SelectLeft1').value;
    var jl21 = document.getElementById('add-jiaolian2SelectLeft1').value;
    if ($("#add-jiaolian3SelectLeft1").jiaolian3SelectLeft != "" && $("#add-jiaolian3SelectLeft1").jiaolian3SelectLeft != undefined) {
        var jl31 = $("#add-jiaolian3SelectLeft").jiaolian3SelectLeft;
    }
    if ($("#add-jiaolian4SelectLeft1").jiaolian4SelectLeft != "" && $("#add-jiaolian4SelectLeft1").jiaolian4SelectLeft != undefined) {
        var jl41 = $("#add-jiaolian4SelectLeft1").jiaolian4SelectLeft;
    }
    if ($("#add-jiaolian5SelectLeft1").jiaolian5SelectLeft != "" && $("#add-jiaolian5SelectLeft1").jiaolian5SelectLeft != undefined) {
        var jl51 = $("#add-jiaolian5SelectLeft1").jiaolian5SelectLeft;
    }
    if ($("#add-jiaolian6SelectLeft1").jiaolian6SelectLeft != "" && $("#add-jiaolian6SelectLeft1").jiaolian6SelectLeft != undefined) {
        var jl61 = $("#add-jiaolian6SelectLeft1").jiaolian6SelectLeft;
    }
    var height1 = parseFloat(document.getElementById('add-height1').value);
    if (jl1 == '距中') {
        var jiaolian1Insert1 = height1 / 2;
        document.getElementById("add-jiaolian1SelectRight1").value = jl11
        document.getElementById("add-jiaolian1SelectRight1").value = jl11

        document.getElementById("add-jiaolian1InsertLeft1").value = jiaolian1Insert1;

        document.getElementById("add-jiaolian1InsertRight1").value = jiaolian1Insert1;

    }
    if (jl21 == '距中') {
        var jiaolian2Insert1 = height1 / 2;
        document.getElementById("add-jiaolian2SelectRight1").value = jl21

        document.getElementById("add-jiaolian2InsertLeft1").value = jiaolian2Insert1;

        document.getElementById("add-jiaolian2InsertRight1").value = jiaolian2Insert1;

    }
    if (jl31 == '距中') {
        var jiaolian3Insert1 = height1 / 2;
        document.getElementById("add-jiaolian3SelectRight1").value = jl31

        document.getElementById("add-jiaolian3InsertLeft1").value = jiaolian3Insert1;

        document.getElementById("add-jiaolian3InsertRight1").value = jiaolian3Insert1;

    }
    if (jl41 == '距中') {
        var jiaolian4Insert1 = height1 / 2;
        document.getElementById("add-jiaolian4SelectRight1").value = jl41

        document.getElementById("add-jiaolian4InsertLeft1").value = jiaolian4Insert1;

        document.getElementById("add-jiaolian4InsertRight1").value = jiaolian4Insert1;

    }
    if (jl51 == '距中') {
        var jiaolian5Insert1 = height1 / 2;
        document.getElementById("add-jiaolian5SelectRight1").value = jl51

        document.getElementById("add-jiaolian5InsertLeft1").value = jiaolian5Insert1;

        document.getElementById("add-jiaolian5InsertRight1").value = jiaolian5Insert1;

    }
    if (jl61 == '距中') {
        var jiaolian6Insert1 = height1 / 2;
        document.getElementById("add-jiaolian6SelectRight1").value = jl61

        document.getElementById("add-jiaolian6InsertLeft1").value = jiaolian6Insert1;

        document.getElementById("add-jiaolian6InsertRight1").value = jiaolian6Insert1;

    }

    var jl12 = document.getElementById('add-jiaolian1SelectLeft2').value;
    var jl22 = document.getElementById('add-jiaolian2SelectLeft2').value;
    if ($("#add-jiaolian3SelectLeft2").jiaolian3SelectLeft != "" && $("#add-jiaolian3SelectLeft2").jiaolian3SelectLeft != undefined) {
        var jl32 = $("#add-jiaolian3SelectLeft2").jiaolian3SelectLeft;
    }
    if ($("#add-jiaolian4SelectLeft2").jiaolian4SelectLeft != "" && $("#add-jiaolian4SelectLeft2").jiaolian4SelectLeft != undefined) {
        var jl42 = $("#add-jiaolian4SelectLeft2").jiaolian4SelectLeft;
    }
    if ($("#add-jiaolian5SelectLeft2").jiaolian5SelectLeft != "" && $("#add-jiaolian5SelectLeft2").jiaolian5SelectLeft != undefined) {
        var jl52 = $("#add-jiaolian5SelectLeft2").jiaolian5SelectLeft;
    }
    if ($("#add-jiaolian6SelectLeft2").jiaolian6SelectLeft != "" && $("#add-jiaolian6SelectLeft2").jiaolian6SelectLeft != undefined) {
        var jl62 = $("#add-jiaolian6SelectLeft2").jiaolian6SelectLeft;
    }
    var height2 = parseFloat(document.getElementById('add-height2').value);
    if (jl2 == '距中') {
        var jiaolian1Insert2 = height2 / 2;
        document.getElementById("add-jiaolian1SelectRight2").value = jl12
        document.getElementById("add-jiaolian1SelectRight2").value = jl12

        document.getElementById("add-jiaolian1InsertLeft2").value = jiaolian1Insert2;

        document.getElementById("add-jiaolian1InsertRight2").value = jiaolian1Insert2;

    }
    if (jl22 == '距中') {
        var jiaolian2Insert2 = height2 / 2;
        document.getElementById("add-jiaolian2SelectRight2").value = jl22

        document.getElementById("add-jiaolian2InsertLeft2").value = jiaolian2Insert2;

        document.getElementById("add-jiaolian2InsertRight2").value = jiaolian2Insert2;

    }
    if (jl32 == '距中') {
        var jiaolian3Insert2 = height2 / 2;
        document.getElementById("add-jiaolian3SelectRight2").value = jl32

        document.getElementById("add-jiaolian3InsertLeft2").value = jiaolian3Insert2;

        document.getElementById("add-jiaolian3InsertRight2").value = jiaolian3Insert2;

    }
    if (jl42 == '距中') {
        var jiaolian4Insert2 = height2 / 2;
        document.getElementById("add-jiaolian4SelectRight2").value = jl42

        document.getElementById("add-jiaolian4InsertLeft2").value = jiaolian4Insert2;

        document.getElementById("add-jiaolian4InsertRight2").value = jiaolian4Insert2;

    }
    if (jl52 == '距中') {
        var jiaolian5Insert2 = height2 / 2;
        document.getElementById("add-jiaolian5SelectRight2").value = jl52

        document.getElementById("add-jiaolian5InsertLeft2").value = jiaolian5Insert2;

        document.getElementById("add-jiaolian5InsertRight2").value = jiaolian5Insert2;

    }
    if (jl62 == '距中') {
        var jiaolian6Insert2 = height2 / 2;
        document.getElementById("add-jiaolian6SelectRight2").value = jl62

        document.getElementById("add-jiaolian6InsertLeft2").value = jiaolian6Insert2;

        document.getElementById("add-jiaolian6InsertRight2").value = jiaolian6Insert2;

    }

    var jl13 = document.getElementById('add-jiaolian1SelectLeft3').value;
    var jl23 = document.getElementById('add-jiaolian2SelectLeft3').value;
    if ($("#add-jiaolian3SelectLeft3").jiaolian3SelectLeft != "" && $("#add-jiaolian3SelectLeft3").jiaolian3SelectLeft != undefined) {
        var jl33 = $("#add-jiaolian3SelectLeft3").jiaolian3SelectLeft;
    }
    if ($("#add-jiaolian4SelectLeft3").jiaolian4SelectLeft != "" && $("#add-jiaolian4SelectLeft3").jiaolian4SelectLeft != undefined) {
        var jl43 = $("#add-jiaolian4SelectLeft3").jiaolian4SelectLeft;
    }
    if ($("#add-jiaolian5SelectLeft3").jiaolian5SelectLeft != "" && $("#add-jiaolian5SelectLeft3").jiaolian5SelectLeft != undefined) {
        var jl53 = $("#add-jiaolian5SelectLeft3").jiaolian5SelectLeft;
    }
    if ($("#add-jiaolian6SelectLeft3").jiaolian6SelectLeft != "" && $("#add-jiaolian6SelectLeft3").jiaolian6SelectLeft != undefined) {
        var jl63 = $("#add-jiaolian6SelectLeft3").jiaolian6SelectLeft;
    }
    var height3 = parseFloat(document.getElementById('add-height3').value);
    if (jl3 == '距中') {
        var jiaolian1Insert3 = height3 / 2;
        document.getElementById("add-jiaolian1SelectRight3").value = jl13
        document.getElementById("add-jiaolian1SelectRight3").value = jl13

        document.getElementById("add-jiaolian1InsertLeft3").value = jiaolian1Insert3;

        document.getElementById("add-jiaolian1InsertRight3").value = jiaolian1Insert3;

    }
    if (jl23 == '距中') {
        var jiaolian2Insert3 = height3 / 2;
        document.getElementById("add-jiaolian2SelectRight3").value = jl23

        document.getElementById("add-jiaolian2InsertLeft3").value = jiaolian2Insert3;

        document.getElementById("add-jiaolian2InsertRight3").value = jiaolian2Insert3;

    }
    if (jl33 == '距中') {
        var jiaolian3Insert3 = height3 / 2;
        document.getElementById("add-jiaolian3SelectRight3").value = jl33

        document.getElementById("add-jiaolian3InsertLeft3").value = jiaolian3Insert3;

        document.getElementById("add-jiaolian3InsertRight3").value = jiaolian3Insert3;

    }
    if (jl43 == '距中') {
        var jiaolian4Insert3 = height3 / 2;
        document.getElementById("add-jiaolian4SelectRight3").value = jl43

        document.getElementById("add-jiaolian4InsertLeft3").value = jiaolian4Insert3;

        document.getElementById("add-jiaolian4InsertRight3").value = jiaolian4Insert3;

    }
    if (jl53 == '距中') {
        var jiaolian5Insert3 = height3 / 2;
        document.getElementById("add-jiaolian5SelectRight3").value = jl53

        document.getElementById("add-jiaolian5InsertLeft3").value = jiaolian5Insert3;

        document.getElementById("add-jiaolian5InsertRight3").value = jiaolian5Insert3;

    }
    if (jl63 == '距中') {
        var jiaolian6Insert3 = height3 / 2;
        document.getElementById("add-jiaolian6SelectRight3").value = jl63

        document.getElementById("add-jiaolian6InsertLeft3").value = jiaolian6Insert3;

        document.getElementById("add-jiaolian6InsertRight3").value = jiaolian6Insert3;

    }

    var jl14 = document.getElementById('add-jiaolian1SelectLeft4').value;
    var jl24 = document.getElementById('add-jiaolian2SelectLeft4').value;
    if ($("#add-jiaolian3SelectLeft4").jiaolian3SelectLeft != "" && $("#add-jiaolian3SelectLeft4").jiaolian3SelectLeft != undefined) {
        var jl34 = $("#add-jiaolian3SelectLeft4").jiaolian3SelectLeft;
    }
    if ($("#add-jiaolian4SelectLeft4").jiaolian4SelectLeft != "" && $("#add-jiaolian4SelectLeft4").jiaolian4SelectLeft != undefined) {
        var jl44 = $("#add-jiaolian4SelectLeft4").jiaolian4SelectLeft;
    }
    if ($("#add-jiaolian5SelectLeft4").jiaolian5SelectLeft != "" && $("#add-jiaolian5SelectLeft4").jiaolian5SelectLeft != undefined) {
        var jl54 = $("#add-jiaolian5SelectLeft4").jiaolian5SelectLeft;
    }
    if ($("#add-jiaolian6SelectLeft4").jiaolian6SelectLeft != "" && $("#add-jiaolian6SelectLeft4").jiaolian6SelectLeft != undefined) {
        var jl64 = $("#add-jiaolian6SelectLeft4").jiaolian6SelectLeft;
    }
    var height4 = parseFloat(document.getElementById('add-height4').value);
    if (jl4 == '距中') {
        var jiaolian1Insert4 = height4 / 2;
        document.getElementById("add-jiaolian1SelectRight4").value = jl14
        document.getElementById("add-jiaolian1SelectRight4").value = jl14

        document.getElementById("add-jiaolian1InsertLeft4").value = jiaolian1Insert4;

        document.getElementById("add-jiaolian1InsertRight4").value = jiaolian1Insert4;

    }
    if (jl24 == '距中') {
        var jiaolian2Insert4 = height4 / 2;
        document.getElementById("add-jiaolian2SelectRight4").value = jl24

        document.getElementById("add-jiaolian2InsertLeft4").value = jiaolian2Insert4;

        document.getElementById("add-jiaolian2InsertRight4").value = jiaolian2Insert4;

    }
    if (jl34 == '距中') {
        var jiaolian3Insert4 = height4 / 2;
        document.getElementById("add-jiaolian3SelectRight4").value = jl34

        document.getElementById("add-jiaolian3InsertLeft4").value = jiaolian3Insert4;

        document.getElementById("add-jiaolian3InsertRight4").value = jiaolian3Insert4;

    }
    if (jl44 == '距中') {
        var jiaolian4Insert4 = height4 / 2;
        document.getElementById("add-jiaolian4SelectRight4").value = jl44

        document.getElementById("add-jiaolian4InsertLeft4").value = jiaolian4Insert4;

        document.getElementById("add-jiaolian4InsertRight4").value = jiaolian4Insert4;

    }
    if (jl54 == '距中') {
        var jiaolian5Insert4 = height4 / 2;
        document.getElementById("add-jiaolian5SelectRight4").value = jl54

        document.getElementById("add-jiaolian5InsertLeft4").value = jiaolian5Insert4;

        document.getElementById("add-jiaolian5InsertRight4").value = jiaolian5Insert4;

    }
    if (jl64 == '距中') {
        var jiaolian6Insert4 = height4 / 2;
        document.getElementById("add-jiaolian6SelectRight4").value = jl64

        document.getElementById("add-jiaolian6InsertLeft4").value = jiaolian6Insert4;

        document.getElementById("add-jiaolian6InsertRight4").value = jiaolian6Insert4;

    }

    var jl15 = document.getElementById('add-jiaolian1SelectLeft5').value;
    var jl25 = document.getElementById('add-jiaolian2SelectLeft5').value;
    if ($("#add-jiaolian3SelectLeft5").jiaolian3SelectLeft != "" && $("#add-jiaolian3SelectLeft5").jiaolian3SelectLeft != undefined) {
        var jl35 = $("#add-jiaolian3SelectLeft5").jiaolian3SelectLeft;
    }
    if ($("#add-jiaolian4SelectLeft5").jiaolian4SelectLeft != "" && $("#add-jiaolian4SelectLeft5").jiaolian4SelectLeft != undefined) {
        var jl45 = $("#add-jiaolian4SelectLeft5").jiaolian4SelectLeft;
    }
    if ($("#add-jiaolian5SelectLeft5").jiaolian5SelectLeft != "" && $("#add-jiaolian5SelectLeft5").jiaolian5SelectLeft != undefined) {
        var jl55 = $("#add-jiaolian5SelectLeft5").jiaolian5SelectLeft;
    }
    if ($("#add-jiaolian6SelectLeft5").jiaolian6SelectLeft != "" && $("#add-jiaolian6SelectLeft5").jiaolian6SelectLeft != undefined) {
        var jl65 = $("#add-jiaolian6SelectLeft5").jiaolian6SelectLeft;
    }
    var height5 = parseFloat(document.getElementById('add-height5').value);
    if (jl5 == '距中') {
        var jiaolian1Insert5 = height5 / 2;
        document.getElementById("add-jiaolian1SelectRight5").value = jl15
        document.getElementById("add-jiaolian1SelectRight5").value = jl15

        document.getElementById("add-jiaolian1InsertLeft5").value = jiaolian1Insert5;

        document.getElementById("add-jiaolian1InsertRight5").value = jiaolian1Insert5;

    }
    if (jl25 == '距中') {
        var jiaolian2Insert5 = height5 / 2;
        document.getElementById("add-jiaolian2SelectRight5").value = jl25

        document.getElementById("add-jiaolian2InsertLeft5").value = jiaolian2Insert5;

        document.getElementById("add-jiaolian2InsertRight5").value = jiaolian2Insert5;

    }
    if (jl35 == '距中') {
        var jiaolian3Insert5 = height5 / 2;
        document.getElementById("add-jiaolian3SelectRight5").value = jl35

        document.getElementById("add-jiaolian3InsertLeft5").value = jiaolian3Insert5;

        document.getElementById("add-jiaolian3InsertRight5").value = jiaolian3Insert5;

    }
    if (jl45 == '距中') {
        var jiaolian4Insert5 = height5 / 2;
        document.getElementById("add-jiaolian4SelectRight5").value = jl45

        document.getElementById("add-jiaolian4InsertLeft5").value = jiaolian4Insert5;

        document.getElementById("add-jiaolian4InsertRight5").value = jiaolian4Insert5;

    }
    if (jl55 == '距中') {
        var jiaolian5Insert5 = height5 / 2;
        document.getElementById("add-jiaolian5SelectRight5").value = jl55

        document.getElementById("add-jiaolian5InsertLeft5").value = jiaolian5Insert5;

        document.getElementById("add-jiaolian5InsertRight5").value = jiaolian5Insert5;

    }
    if (jl65 == '距中') {
        var jiaolian6Insert5 = height5 / 2;
        document.getElementById("add-jiaolian6SelectRight5").value = jl65

        document.getElementById("add-jiaolian6InsertLeft5").value = jiaolian6Insert5;

        document.getElementById("add-jiaolian6InsertRight5").value = jiaolian6Insert5;

    }

    var jl16 = document.getElementById('add-jiaolian1SelectLeft6').value;
    var jl26 = document.getElementById('add-jiaolian2SelectLeft6').value;
    if ($("#add-jiaolian3SelectLeft6").jiaolian3SelectLeft != "" && $("#add-jiaolian3SelectLeft6").jiaolian3SelectLeft != undefined) {
        var jl36 = $("#add-jiaolian3SelectLeft6").jiaolian3SelectLeft;
    }
    if ($("#add-jiaolian4SelectLeft6").jiaolian4SelectLeft != "" && $("#add-jiaolian4SelectLeft6").jiaolian4SelectLeft != undefined) {
        var jl46 = $("#add-jiaolian4SelectLeft6").jiaolian4SelectLeft;
    }
    if ($("#add-jiaolian5SelectLeft6").jiaolian5SelectLeft != "" && $("#add-jiaolian5SelectLeft6").jiaolian5SelectLeft != undefined) {
        var jl56 = $("#add-jiaolian5SelectLeft6").jiaolian5SelectLeft;
    }
    if ($("#add-jiaolian6SelectLeft6").jiaolian6SelectLeft != "" && $("#add-jiaolian6SelectLeft6").jiaolian6SelectLeft != undefined) {
        var jl66 = $("#add-jiaolian6SelectLeft6").jiaolian6SelectLeft;
    }
    var height6 = parseFloat(document.getElementById('add-height6').value);
    if (jl6 == '距中') {
        var jiaolian1Insert6 = height6 / 2;
        document.getElementById("add-jiaolian1SelectRight6").value = jl16
        document.getElementById("add-jiaolian1SelectRight6").value = jl16

        document.getElementById("add-jiaolian1InsertLeft6").value = jiaolian1Insert6;

        document.getElementById("add-jiaolian1InsertRight6").value = jiaolian1Insert6;

    }
    if (jl26 == '距中') {
        var jiaolian2Insert6 = height6 / 2;
        document.getElementById("add-jiaolian2SelectRight6").value = jl26

        document.getElementById("add-jiaolian2InsertLeft6").value = jiaolian2Insert6;

        document.getElementById("add-jiaolian2InsertRight6").value = jiaolian2Insert6;

    }
    if (jl36 == '距中') {
        var jiaolian3Insert6 = height6 / 2;
        document.getElementById("add-jiaolian3SelectRight6").value = jl36

        document.getElementById("add-jiaolian3InsertLeft6").value = jiaolian3Insert6;

        document.getElementById("add-jiaolian3InsertRight6").value = jiaolian3Insert6;

    }
    if (jl46 == '距中') {
        var jiaolian4Insert6 = height6 / 2;
        document.getElementById("add-jiaolian4SelectRight6").value = jl46

        document.getElementById("add-jiaolian4InsertLeft6").value = jiaolian4Insert6;

        document.getElementById("add-jiaolian4InsertRight6").value = jiaolian4Insert6;

    }
    if (jl56 == '距中') {
        var jiaolian5Insert6 = height6 / 2;
        document.getElementById("add-jiaolian5SelectRight6").value = jl56

        document.getElementById("add-jiaolian5InsertLeft6").value = jiaolian5Insert6;

        document.getElementById("add-jiaolian5InsertRight6").value = jiaolian5Insert6;

    }
    if (jl66 == '距中') {
        var jiaolian6Insert6 = height6 / 2;
        document.getElementById("add-jiaolian6SelectRight6").value = jl66

        document.getElementById("add-jiaolian6InsertLeft6").value = jiaolian6Insert6;

        document.getElementById("add-jiaolian6InsertRight6").value = jiaolian6Insert6;

    }

    var jl17 = document.getElementById('add-jiaolian1SelectLeft7').value;
    var jl27 = document.getElementById('add-jiaolian2SelectLeft7').value;
    if ($("#add-jiaolian3SelectLeft7").jiaolian3SelectLeft != "" && $("#add-jiaolian3SelectLeft7").jiaolian3SelectLeft != undefined) {
        var jl37 = $("#add-jiaolian3SelectLeft7").jiaolian3SelectLeft;
    }
    if ($("#add-jiaolian4SelectLeft7").jiaolian4SelectLeft != "" && $("#add-jiaolian4SelectLeft7").jiaolian4SelectLeft != undefined) {
        var jl47 = $("#add-jiaolian4SelectLeft7").jiaolian4SelectLeft;
    }
    if ($("#add-jiaolian5SelectLeft7").jiaolian5SelectLeft != "" && $("#add-jiaolian5SelectLeft7").jiaolian5SelectLeft != undefined) {
        var jl57 = $("#add-jiaolian5SelectLeft7").jiaolian5SelectLeft;
    }
    if ($("#add-jiaolian6SelectLeft7").jiaolian6SelectLeft != "" && $("#add-jiaolian6SelectLeft7").jiaolian6SelectLeft != undefined) {
        var jl67 = $("#add-jiaolian6SelectLeft7").jiaolian6SelectLeft;
    }
    var height7 = parseFloat(document.getElementById('add-height7').value);
    if (jl17 == '距中') {
        var jiaolian1Insert7 = height7 / 2;
        document.getElementById("add-jiaolian1SelectRight7").value = jl17
        document.getElementById("add-jiaolian1SelectRight7").value = jl17

        document.getElementById("add-jiaolian1InsertLeft7").value = jiaolian1Insert7;

        document.getElementById("add-jiaolian1InsertRight7").value = jiaolian1Insert7;

    }
    if (jl27 == '距中') {
        var jiaolian2Insert7 = height7 / 2;
        document.getElementById("add-jiaolian2SelectRight7").value = jl27

        document.getElementById("add-jiaolian2InsertLeft7").value = jiaolian2Insert7;

        document.getElementById("add-jiaolian2InsertRight7").value = jiaolian2Insert7;

    }
    if (jl37 == '距中') {
        var jiaolian3Insert7 = height7 / 2;
        document.getElementById("add-jiaolian3SelectRight7").value = jl37

        document.getElementById("add-jiaolian3InsertLeft7").value = jiaolian3Insert7;

        document.getElementById("add-jiaolian3InsertRight7").value = jiaolian3Insert7;

    }
    if (jl47 == '距中') {
        var jiaolian4Insert7 = height7 / 2;
        document.getElementById("add-jiaolian4SelectRight7").value = jl47

        document.getElementById("add-jiaolian4InsertLeft7").value = jiaolian4Insert7;

        document.getElementById("add-jiaolian4InsertRight7").value = jiaolian4Insert7;

    }
    if (jl57 == '距中') {
        var jiaolian5Insert7 = height7 / 2;
        document.getElementById("add-jiaolian5SelectRight7").value = jl57

        document.getElementById("add-jiaolian5InsertLeft7").value = jiaolian5Insert7;

        document.getElementById("add-jiaolian5InsertRight7").value = jiaolian5Insert7;

    }
    if (jl67 == '距中') {
        var jiaolian6Insert7 = height7 / 2;
        document.getElementById("add-jiaolian6SelectRight7").value = jl67

        document.getElementById("add-jiaolian6InsertLeft7").value = jiaolian6Insert7;

        document.getElementById("add-jiaolian6InsertRight7").value = jiaolian6Insert7;

    }

    var jl18 = document.getElementById('add-jiaolian1SelectLeft8').value;
    var jl28 = document.getElementById('add-jiaolian2SelectLeft8').value;
    if ($("#add-jiaolian3SelectLeft8").jiaolian3SelectLeft != "" && $("#add-jiaolian3SelectLeft8").jiaolian3SelectLeft != undefined) {
        var jl38 = $("#add-jiaolian3SelectLeft8").jiaolian3SelectLeft;
    }
    if ($("#add-jiaolian4SelectLeft8").jiaolian4SelectLeft != "" && $("#add-jiaolian4SelectLeft8").jiaolian4SelectLeft != undefined) {
        var jl48 = $("#add-jiaolian4SelectLeft8").jiaolian4SelectLeft;
    }
    if ($("#add-jiaolian5SelectLeft8").jiaolian5SelectLeft != "" && $("#add-jiaolian5SelectLeft8").jiaolian5SelectLeft != undefined) {
        var jl58 = $("#add-jiaolian5SelectLeft8").jiaolian5SelectLeft;
    }
    if ($("#add-jiaolian6SelectLeft8").jiaolian6SelectLeft != "" && $("#add-jiaolian6SelectLeft8").jiaolian6SelectLeft != undefined) {
        var jl68 = $("#add-jiaolian6SelectLeft8").jiaolian6SelectLeft;
    }
    var height8 = parseFloat(document.getElementById('add-height8').value);
    if (jl18 == '距中') {
        var jiaolian1Insert8 = height8 / 2;
        document.getElementById("add-jiaolian1SelectRight8").value = jl18
        document.getElementById("add-jiaolian1SelectRight8").value = jl18

        document.getElementById("add-jiaolian1InsertLeft8").value = jiaolian1Insert8;

        document.getElementById("add-jiaolian1InsertRight8").value = jiaolian1Insert8;

    }
    if (jl28 == '距中') {
        var jiaolian2Insert8 = height8 / 2;
        document.getElementById("add-jiaolian2SelectRight8").value = jl28

        document.getElementById("add-jiaolian2InsertLeft8").value = jiaolian2Insert8;

        document.getElementById("add-jiaolian2InsertRight8").value = jiaolian2Insert8;

    }
    if (jl38 == '距中') {
        var jiaolian3Insert8 = height8 / 2;
        document.getElementById("add-jiaolian3SelectRight8").value = jl38

        document.getElementById("add-jiaolian3InsertLeft8").value = jiaolian3Insert8;

        document.getElementById("add-jiaolian3InsertRight8").value = jiaolian3Insert8;

    }
    if (jl48 == '距中') {
        var jiaolian4Insert8 = height8 / 2;
        document.getElementById("add-jiaolian4SelectRight8").value = jl48

        document.getElementById("add-jiaolian4InsertLeft8").value = jiaolian4Insert8;

        document.getElementById("add-jiaolian4InsertRight8").value = jiaolian4Insert8;

    }
    if (jl58 == '距中') {
        var jiaolian5Insert8 = height8 / 2;
        document.getElementById("add-jiaolian5SelectRight8").value = jl58

        document.getElementById("add-jiaolian5InsertLeft8").value = jiaolian5Insert8;

        document.getElementById("add-jiaolian5InsertRight8").value = jiaolian5Insert8;

    }
    if (jl68 == '距中') {
        var jiaolian6Insert8 = height8 / 2;
        document.getElementById("add-jiaolian6SelectRight8").value = jl68

        document.getElementById("add-jiaolian6InsertLeft8").value = jiaolian6Insert8;

        document.getElementById("add-jiaolian6InsertRight8").value = jiaolian6Insert8;

    }

    var jl19 = document.getElementById('add-jiaolian1SelectLeft9').value;
    var jl29 = document.getElementById('add-jiaolian2SelectLeft9').value;
    if ($("#add-jiaolian3SelectLeft9").jiaolian3SelectLeft != "" && $("#add-jiaolian3SelectLeft9").jiaolian3SelectLeft != undefined) {
        var jl39 = $("#add-jiaolian3SelectLeft9").jiaolian3SelectLeft;
    }
    if ($("#add-jiaolian4SelectLeft9").jiaolian4SelectLeft != "" && $("#add-jiaolian4SelectLeft9").jiaolian4SelectLeft != undefined) {
        var jl49 = $("#add-jiaolian4SelectLeft9").jiaolian4SelectLeft;
    }
    if ($("#add-jiaolian5SelectLeft9").jiaolian5SelectLeft != "" && $("#add-jiaolian5SelectLeft9").jiaolian5SelectLeft != undefined) {
        var jl59 = $("#add-jiaolian5SelectLeft9").jiaolian5SelectLeft;
    }
    if ($("#add-jiaolian6SelectLeft9").jiaolian6SelectLeft != "" && $("#add-jiaolian6SelectLeft9").jiaolian6SelectLeft != undefined) {
        var jl69 = $("#add-jiaolian6SelectLeft9").jiaolian6SelectLeft;
    }
    var height9 = parseFloat(document.getElementById('add-height9').value);
    if (jl19 == '距中') {
        var jiaolian1Insert9 = height9 / 2;
        document.getElementById("add-jiaolian1SelectRight9").value = jl19
        document.getElementById("add-jiaolian1SelectRight9").value = jl19

        document.getElementById("add-jiaolian1InsertLeft9").value = jiaolian1Insert9;

        document.getElementById("add-jiaolian1InsertRight9").value = jiaolian1Insert9;

    }
    if (jl29 == '距中') {
        var jiaolian2Insert9 = height9 / 2;
        document.getElementById("add-jiaolian2SelectRight9").value = jl29

        document.getElementById("add-jiaolian2InsertLeft9").value = jiaolian2Insert9;

        document.getElementById("add-jiaolian2InsertRight9").value = jiaolian2Insert9;

    }
    if (jl39 == '距中') {
        var jiaolian3Insert9 = height9 / 2;
        document.getElementById("add-jiaolian3SelectRight9").value = jl39

        document.getElementById("add-jiaolian3InsertLeft9").value = jiaolian3Insert9;

        document.getElementById("add-jiaolian3InsertRight9").value = jiaolian3Insert9;

    }
    if (jl49 == '距中') {
        var jiaolian4Insert9 = height9 / 2;
        document.getElementById("add-jiaolian4SelectRight9").value = jl49

        document.getElementById("add-jiaolian4InsertLeft9").value = jiaolian4Insert9;

        document.getElementById("add-jiaolian4InsertRight9").value = jiaolian4Insert9;

    }
    if (jl59 == '距中') {
        var jiaolian5Insert9 = height9 / 2;
        document.getElementById("add-jiaolian5SelectRight9").value = jl59

        document.getElementById("add-jiaolian5InsertLeft9").value = jiaolian5Insert9;

        document.getElementById("add-jiaolian5InsertRight9").value = jiaolian5Insert9;

    }
    if (jl69 == '距中') {
        var jiaolian6Insert9 = height9 / 2;
        document.getElementById("add-jiaolian6SelectRight9").value = jl69

        document.getElementById("add-jiaolian6InsertLeft9").value = jiaolian6Insert9;

        document.getElementById("add-jiaolian6InsertRight9").value = jiaolian6Insert9;

    }

    var jl110 = document.getElementById('add-jiaolian1SelectLeft10').value;
    var jl210 = document.getElementById('add-jiaolian2SelectLeft10').value;
    if ($("#add-jiaolian3SelectLeft10").jiaolian3SelectLeft != "" && $("#add-jiaolian3SelectLeft10").jiaolian3SelectLeft != undefined) {
        var jl310 = $("#add-jiaolian3SelectLeft10").jiaolian3SelectLeft;
    }
    if ($("#add-jiaolian4SelectLeft10").jiaolian4SelectLeft != "" && $("#add-jiaolian4SelectLeft10").jiaolian4SelectLeft != undefined) {
        var jl410 = $("#add-jiaolian4SelectLeft10").jiaolian4SelectLeft;
    }
    if ($("#add-jiaolian5SelectLeft10").jiaolian5SelectLeft != "" && $("#add-jiaolian5SelectLeft10").jiaolian5SelectLeft != undefined) {
        var jl510 = $("#add-jiaolian5SelectLeft10").jiaolian5SelectLeft;
    }
    if ($("#add-jiaolian6SelectLeft10").jiaolian6SelectLeft != "" && $("#add-jiaolian6SelectLeft10").jiaolian6SelectLeft != undefined) {
        var jl610 = $("#add-jiaolian6SelectLeft10").jiaolian6SelectLeft;
    }
    var height10 = parseFloat(document.getElementById('add-height10').value);
    if (jl110 == '距中') {
        var jiaolian1Insert10 = height10 / 2;
        document.getElementById("add-jiaolian1SelectRight10").value = jl110
        document.getElementById("add-jiaolian1SelectRight10").value = jl110

        document.getElementById("add-jiaolian1InsertLeft10").value = jiaolian1Insert10;

        document.getElementById("add-jiaolian1InsertRight10").value = jiaolian1Insert10;

    }
    if (jl210 == '距中') {
        var jiaolian2Insert10 = height10 / 2;
        document.getElementById("add-jiaolian2SelectRight10").value = jl210

        document.getElementById("add-jiaolian2InsertLeft10").value = jiaolian2Insert10;

        document.getElementById("add-jiaolian2InsertRight10").value = jiaolian2Insert10;

    }
    if (jl310 == '距中') {
        var jiaolian3Insert10 = height10 / 2;
        document.getElementById("add-jiaolian3SelectRight10").value = jl310

        document.getElementById("add-jiaolian3InsertLeft10").value = jiaolian3Insert10;

        document.getElementById("add-jiaolian3InsertRight10").value = jiaolian3Insert10;

    }
    if (jl410 == '距中') {
        var jiaolian4Insert10 = height10 / 2;
        document.getElementById("add-jiaolian4SelectRight10").value = jl410

        document.getElementById("add-jiaolian4InsertLeft10").value = jiaolian4Insert10;

        document.getElementById("add-jiaolian4InsertRight10").value = jiaolian4Insert10;

    }
    if (jl510 == '距中') {
        var jiaolian5Insert10 = height10 / 2;
        document.getElementById("add-jiaolian5SelectRight10").value = jl510

        document.getElementById("add-jiaolian5InsertLeft10").value = jiaolian5Insert10;

        document.getElementById("add-jiaolian5InsertRight10").value = jiaolian5Insert10;

    }
    if (jl610 == '距中') {
        var jiaolian6Insert10 = height10 / 2;
        document.getElementById("add-jiaolian6SelectRight10").value = jl610

        document.getElementById("add-jiaolian6InsertLeft10").value = jiaolian6Insert10;

        document.getElementById("add-jiaolian6InsertRight10").value = jiaolian6Insert10;

    }

    var jl111 = document.getElementById('add-jiaolian1SelectLeft11').value;
    var jl211 = document.getElementById('add-jiaolian2SelectLeft11').value;
    if ($("#add-jiaolian3SelectLeft11").jiaolian3SelectLeft != "" && $("#add-jiaolian3SelectLeft11").jiaolian3SelectLeft != undefined) {
        var jl311 = $("#add-jiaolian3SelectLeft11").jiaolian3SelectLeft;
    }
    if ($("#add-jiaolian4SelectLeft11").jiaolian4SelectLeft != "" && $("#add-jiaolian4SelectLeft11").jiaolian4SelectLeft != undefined) {
        var jl411 = $("#add-jiaolian4SelectLeft11").jiaolian4SelectLeft;
    }
    if ($("#add-jiaolian5SelectLeft11").jiaolian5SelectLeft != "" && $("#add-jiaolian5SelectLeft11").jiaolian5SelectLeft != undefined) {
        var jl511 = $("#add-jiaolian5SelectLeft11").jiaolian5SelectLeft;
    }
    if ($("#add-jiaolian6SelectLeft11").jiaolian6SelectLeft != "" && $("#add-jiaolian6SelectLeft11").jiaolian6SelectLeft != undefined) {
        var jl611 = $("#add-jiaolian6SelectLeft11").jiaolian6SelectLeft;
    }
    var height11 = parseFloat(document.getElementById('add-height11').value);
    if (jl11 == '距中') {
        var jiaolian1Insert11 = height11 / 2;
        document.getElementById("add-jiaolian1SelectRight11").value = jl111
        document.getElementById("add-jiaolian1SelectRight11").value = jl111

        document.getElementById("add-jiaolian1InsertLeft11").value = jiaolian1Insert11;

        document.getElementById("add-jiaolian1InsertRight11").value = jiaolian1Insert11;

    }
    if (jl211 == '距中') {
        var jiaolian2Insert11 = height11 / 2;
        document.getElementById("add-jiaolian2SelectRight11").value = jl211

        document.getElementById("add-jiaolian2InsertLeft11").value = jiaolian2Insert11;

        document.getElementById("add-jiaolian2InsertRight11").value = jiaolian2Insert11;

    }
    if (jl311 == '距中') {
        var jiaolian3Insert11 = height11 / 2;
        document.getElementById("add-jiaolian3SelectRight11").value = jl311

        document.getElementById("add-jiaolian3InsertLeft11").value = jiaolian3Insert11;

        document.getElementById("add-jiaolian3InsertRight11").value = jiaolian3Insert11;

    }
    if (jl411 == '距中') {
        var jiaolian4Insert11 = height11 / 2;
        document.getElementById("add-jiaolian4SelectRight11").value = jl411

        document.getElementById("add-jiaolian4InsertLeft11").value = jiaolian4Insert11;

        document.getElementById("add-jiaolian4InsertRight11").value = jiaolian4Insert11;

    }
    if (jl511 == '距中') {
        var jiaolian5Insert11 = height11 / 2;
        document.getElementById("add-jiaolian5SelectRight11").value = jl511

        document.getElementById("add-jiaolian5InsertLeft11").value = jiaolian5Insert11;

        document.getElementById("add-jiaolian5InsertRight11").value = jiaolian5Insert11;

    }
    if (jl611 == '距中') {
        var jiaolian6Insert11 = height11 / 2;
        document.getElementById("add-jiaolian6SelectRight11").value = jl611

        document.getElementById("add-jiaolian6InsertLeft11").value = jiaolian6Insert11;

        document.getElementById("add-jiaolian6InsertRight11").value = jiaolian6Insert11;

    }

    var jl112 = document.getElementById('add-jiaolian1SelectLeft12').value;
    var jl212 = document.getElementById('add-jiaolian2SelectLeft12').value;
    if ($("#add-jiaolian3SelectLeft12").jiaolian3SelectLeft != "" && $("#add-jiaolian3SelectLeft12").jiaolian3SelectLeft != undefined) {
        var jl312 = $("#add-jiaolian3SelectLeft12").jiaolian3SelectLeft;
    }
    if ($("#add-jiaolian4SelectLeft12").jiaolian4SelectLeft != "" && $("#add-jiaolian4SelectLeft12").jiaolian4SelectLeft != undefined) {
        var jl412 = $("#add-jiaolian4SelectLeft12").jiaolian4SelectLeft;
    }
    if ($("#add-jiaolian5SelectLeft12").jiaolian5SelectLeft != "" && $("#add-jiaolian5SelectLeft12").jiaolian5SelectLeft != undefined) {
        var jl512 = $("#add-jiaolian5SelectLeft12").jiaolian5SelectLeft;
    }
    if ($("#add-jiaolian6SelectLeft12").jiaolian6SelectLeft != "" && $("#add-jiaolian6SelectLeft12").jiaolian6SelectLeft != undefined) {
        var jl612 = $("#add-jiaolian6SelectLeft12").jiaolian6SelectLeft;
    }
    var height12 = parseFloat(document.getElementById('add-height12').value);
    if (jl12 == '距中') {
        var jiaolian1Insert12 = height12 / 2;
        document.getElementById("add-jiaolian1SelectRight12").value = jl112
        document.getElementById("add-jiaolian1SelectRight12").value = jl112

        document.getElementById("add-jiaolian1InsertLeft12").value = jiaolian1Insert12;

        document.getElementById("add-jiaolian1InsertRight12").value = jiaolian1Insert12;

    }
    if (jl212 == '距中') {
        var jiaolian2Insert12 = height12 / 2;
        document.getElementById("add-jiaolian2SelectRight12").value = jl212

        document.getElementById("add-jiaolian2InsertLeft12").value = jiaolian2Insert12;

        document.getElementById("add-jiaolian2InsertRight12").value = jiaolian2Insert12;

    }
    if (jl312 == '距中') {
        var jiaolian3Insert12 = height12 / 2;
        document.getElementById("add-jiaolian3SelectRight12").value = jl312

        document.getElementById("add-jiaolian3InsertLeft12").value = jiaolian3Insert12;

        document.getElementById("add-jiaolian3InsertRight12").value = jiaolian3Insert12;

    }
    if (jl412 == '距中') {
        var jiaolian4Insert12 = height12 / 2;
        document.getElementById("add-jiaolian4SelectRight12").value = jl412

        document.getElementById("add-jiaolian4InsertLeft12").value = jiaolian4Insert12;

        document.getElementById("add-jiaolian4InsertRight12").value = jiaolian4Insert12;

    }
    if (jl512 == '距中') {
        var jiaolian5Insert12 = height12 / 2;
        document.getElementById("add-jiaolian5SelectRight12").value = jl512

        document.getElementById("add-jiaolian5InsertLeft12").value = jiaolian5Insert12;

        document.getElementById("add-jiaolian5InsertRight12").value = jiaolian5Insert12;

    }
    if (jl612 == '距中') {
        var jiaolian6Insert12 = height12 / 2;
        document.getElementById("add-jiaolian6SelectRight12").value = jl612

        document.getElementById("add-jiaolian6InsertLeft12").value = jiaolian6Insert12;

        document.getElementById("add-jiaolian6InsertRight12").value = jiaolian6Insert12;

    }

    var jl113 = document.getElementById('add-jiaolian1SelectLeft13').value;
    var jl213 = document.getElementById('add-jiaolian2SelectLeft13').value;
    if ($("#add-jiaolian3SelectLeft13").jiaolian3SelectLeft != "" && $("#add-jiaolian3SelectLeft13").jiaolian3SelectLeft != undefined) {
        var jl313 = $("#add-jiaolian3SelectLeft13").jiaolian3SelectLeft;
    }
    if ($("#add-jiaolian4SelectLeft13").jiaolian4SelectLeft != "" && $("#add-jiaolian4SelectLeft13").jiaolian4SelectLeft != undefined) {
        var jl413 = $("#add-jiaolian4SelectLeft13").jiaolian4SelectLeft;
    }
    if ($("#add-jiaolian5SelectLeft13").jiaolian5SelectLeft != "" && $("#add-jiaolian5SelectLeft13").jiaolian5SelectLeft != undefined) {
        var jl513 = $("#add-jiaolian5SelectLeft13").jiaolian5SelectLeft;
    }
    if ($("#add-jiaolian6SelectLeft13").jiaolian6SelectLeft != "" && $("#add-jiaolian6SelectLeft13").jiaolian6SelectLeft != undefined) {
        var jl613 = $("#add-jiaolian6SelectLeft13").jiaolian6SelectLeft;
    }
    var height13 = parseFloat(document.getElementById('add-height13').value);
    if (jl13 == '距中') {
        var jiaolian1Insert13 = height13 / 2;
        document.getElementById("add-jiaolian1SelectRight13").value = jl113
        document.getElementById("add-jiaolian1SelectRight13").value = jl113

        document.getElementById("add-jiaolian1InsertLeft13").value = jiaolian1Insert13;

        document.getElementById("add-jiaolian1InsertRight13").value = jiaolian1Insert13;

    }
    if (jl213 == '距中') {
        var jiaolian2Insert13 = height13 / 2;
        document.getElementById("add-jiaolian2SelectRight13").value = jl213

        document.getElementById("add-jiaolian2InsertLeft13").value = jiaolian2Insert13;

        document.getElementById("add-jiaolian2InsertRight13").value = jiaolian2Insert13;

    }
    if (jl313 == '距中') {
        var jiaolian3Insert13 = height13 / 2;
        document.getElementById("add-jiaolian3SelectRight13").value = jl313

        document.getElementById("add-jiaolian3InsertLeft13").value = jiaolian3Insert13;

        document.getElementById("add-jiaolian3InsertRight13").value = jiaolian3Insert13;

    }
    if (jl413 == '距中') {
        var jiaolian4Insert13 = height13 / 2;
        document.getElementById("add-jiaolian4SelectRight13").value = jl413

        document.getElementById("add-jiaolian4InsertLeft13").value = jiaolian4Insert13;

        document.getElementById("add-jiaolian4InsertRight13").value = jiaolian4Insert13;

    }
    if (jl513 == '距中') {
        var jiaolian5Insert13 = height13 / 2;
        document.getElementById("add-jiaolian5SelectRight13").value = jl513

        document.getElementById("add-jiaolian5InsertLeft13").value = jiaolian5Insert13;

        document.getElementById("add-jiaolian5InsertRight13").value = jiaolian5Insert13;

    }
    if (jl613 == '距中') {
        var jiaolian6Insert13 = height13 / 2;
        document.getElementById("add-jiaolian6SelectRight13").value = jl613

        document.getElementById("add-jiaolian6InsertLeft13").value = jiaolian6Insert13;

        document.getElementById("add-jiaolian6InsertRight13").value = jiaolian6Insert13;

    }

    var jl114 = document.getElementById('add-jiaolian1SelectLeft14').value;
    var jl214 = document.getElementById('add-jiaolian2SelectLeft14').value;
    if ($("#add-jiaolian3SelectLeft14").jiaolian3SelectLeft != "" && $("#add-jiaolian3SelectLeft14").jiaolian3SelectLeft != undefined) {
        var jl314 = $("#add-jiaolian3SelectLeft14").jiaolian3SelectLeft;
    }
    if ($("#add-jiaolian4SelectLeft14").jiaolian4SelectLeft != "" && $("#add-jiaolian4SelectLeft14").jiaolian4SelectLeft != undefined) {
        var jl414 = $("#add-jiaolian4SelectLeft14").jiaolian4SelectLeft;
    }
    if ($("#add-jiaolian5SelectLeft14").jiaolian5SelectLeft != "" && $("#add-jiaolian5SelectLeft14").jiaolian5SelectLeft != undefined) {
        var jl514 = $("#add-jiaolian5SelectLeft14").jiaolian5SelectLeft;
    }
    if ($("#add-jiaolian6SelectLeft14").jiaolian6SelectLeft != "" && $("#add-jiaolian6SelectLeft14").jiaolian6SelectLeft != undefined) {
        var jl614 = $("#add-jiaolian6SelectLeft14").jiaolian6SelectLeft;
    }
    var height14 = parseFloat(document.getElementById('add-height14').value);
    if (jl14 == '距中') {
        var jiaolian1Insert14 = height14 / 2;
        document.getElementById("add-jiaolian1SelectRight14").value = jl114
        document.getElementById("add-jiaolian1SelectRight14").value = jl114

        document.getElementById("add-jiaolian1InsertLeft14").value = jiaolian1Insert14;

        document.getElementById("add-jiaolian1InsertRight14").value = jiaolian1Insert14;

    }
    if (jl214 == '距中') {
        var jiaolian2Insert14 = height14 / 2;
        document.getElementById("add-jiaolian2SelectRight14").value = jl214

        document.getElementById("add-jiaolian2InsertLeft14").value = jiaolian2Insert14;

        document.getElementById("add-jiaolian2InsertRight14").value = jiaolian2Insert14;

    }
    if (jl314 == '距中') {
        var jiaolian3Insert14 = height14 / 2;
        document.getElementById("add-jiaolian3SelectRight14").value = jl314

        document.getElementById("add-jiaolian3InsertLeft14").value = jiaolian3Insert14;

        document.getElementById("add-jiaolian3InsertRight14").value = jiaolian3Insert14;

    }
    if (jl414 == '距中') {
        var jiaolian4Insert14 = height14 / 2;
        document.getElementById("add-jiaolian4SelectRight14").value = jl414

        document.getElementById("add-jiaolian4InsertLeft14").value = jiaolian4Insert14;

        document.getElementById("add-jiaolian4InsertRight14").value = jiaolian4Insert14;

    }
    if (jl514 == '距中') {
        var jiaolian5Insert14 = height14 / 2;
        document.getElementById("add-jiaolian5SelectRight14").value = jl514

        document.getElementById("add-jiaolian5InsertLeft14").value = jiaolian5Insert14;

        document.getElementById("add-jiaolian5InsertRight14").value = jiaolian5Insert14;

    }
    if (jl614 == '距中') {
        var jiaolian6Insert14 = height14 / 2;
        document.getElementById("add-jiaolian6SelectRight14").value = jl614

        document.getElementById("add-jiaolian6InsertLeft14").value = jiaolian6Insert14;

        document.getElementById("add-jiaolian6InsertRight14").value = jiaolian6Insert14;

    }

    var jl115 = document.getElementById('add-jiaolian1SelectLeft15').value;
    var jl215 = document.getElementById('add-jiaolian2SelectLeft15').value;
    if ($("#add-jiaolian3SelectLeft15").jiaolian3SelectLeft != "" && $("#add-jiaolian3SelectLeft15").jiaolian3SelectLeft != undefined) {
        var jl315 = $("#add-jiaolian3SelectLeft15").jiaolian3SelectLeft;
    }
    if ($("#add-jiaolian4SelectLeft15").jiaolian4SelectLeft != "" && $("#add-jiaolian4SelectLeft15").jiaolian4SelectLeft != undefined) {
        var jl415 = $("#add-jiaolian4SelectLeft15").jiaolian4SelectLeft;
    }
    if ($("#add-jiaolian5SelectLeft15").jiaolian5SelectLeft != "" && $("#add-jiaolian5SelectLeft15").jiaolian5SelectLeft != undefined) {
        var jl515 = $("#add-jiaolian5SelectLeft15").jiaolian5SelectLeft;
    }
    if ($("#add-jiaolian6SelectLeft15").jiaolian6SelectLeft != "" && $("#add-jiaolian6SelectLeft15").jiaolian6SelectLeft != undefined) {
        var jl615 = $("#add-jiaolian6SelectLeft15").jiaolian6SelectLeft;
    }
    var height15 = parseFloat(document.getElementById('add-height15').value);
    if (jl15 == '距中') {
        var jiaolian1Insert15 = height15 / 2;
        document.getElementById("add-jiaolian1SelectRight15").value = jl115
        document.getElementById("add-jiaolian1SelectRight15").value = jl115

        document.getElementById("add-jiaolian1InsertLeft15").value = jiaolian1Insert15;

        document.getElementById("add-jiaolian1InsertRight15").value = jiaolian1Insert15;

    }
    if (jl215 == '距中') {
        var jiaolian2Insert15 = height15 / 2;
        document.getElementById("add-jiaolian2SelectRight15").value = jl215

        document.getElementById("add-jiaolian2InsertLeft15").value = jiaolian2Insert15;

        document.getElementById("add-jiaolian2InsertRight15").value = jiaolian2Insert15;

    }
    if (jl315 == '距中') {
        var jiaolian3Insert15 = height15 / 2;
        document.getElementById("add-jiaolian3SelectRight15").value = jl315

        document.getElementById("add-jiaolian3InsertLeft15").value = jiaolian3Insert15;

        document.getElementById("add-jiaolian3InsertRight15").value = jiaolian3Insert15;

    }
    if (jl415 == '距中') {
        var jiaolian4Insert15 = height15 / 2;
        document.getElementById("add-jiaolian4SelectRight15").value = jl415

        document.getElementById("add-jiaolian4InsertLeft15").value = jiaolian4Insert15;

        document.getElementById("add-jiaolian4InsertRight15").value = jiaolian4Insert15;

    }
    if (jl515 == '距中') {
        var jiaolian5Insert15 = height15 / 2;
        document.getElementById("add-jiaolian5SelectRight15").value = jl515

        document.getElementById("add-jiaolian5InsertLeft15").value = jiaolian5Insert15;

        document.getElementById("add-jiaolian5InsertRight15").value = jiaolian5Insert15;

    }
    if (jl615 == '距中') {
        var jiaolian6Insert15 = height15 / 2;
        document.getElementById("add-jiaolian6SelectRight15").value = jl615

        document.getElementById("add-jiaolian6InsertLeft15").value = jiaolian6Insert15;

        document.getElementById("add-jiaolian6InsertRight15").value = jiaolian6Insert15;

    }

    var jl116 = document.getElementById('add-jiaolian1SelectLeft16').value;
    var jl216 = document.getElementById('add-jiaolian2SelectLeft16').value;
    if ($("#add-jiaolian3SelectLeft16").jiaolian3SelectLeft != "" && $("#add-jiaolian3SelectLeft16").jiaolian3SelectLeft != undefined) {
        var jl316 = $("#add-jiaolian3SelectLeft16").jiaolian3SelectLeft;
    }
    if ($("#add-jiaolian4SelectLeft16").jiaolian4SelectLeft != "" && $("#add-jiaolian4SelectLeft16").jiaolian4SelectLeft != undefined) {
        var jl416 = $("#add-jiaolian4SelectLeft16").jiaolian4SelectLeft;
    }
    if ($("#add-jiaolian5SelectLeft16").jiaolian5SelectLeft != "" && $("#add-jiaolian5SelectLeft16").jiaolian5SelectLeft != undefined) {
        var jl516 = $("#add-jiaolian5SelectLeft16").jiaolian5SelectLeft;
    }
    if ($("#add-jiaolian6SelectLeft16").jiaolian6SelectLeft != "" && $("#add-jiaolian6SelectLeft16").jiaolian6SelectLeft != undefined) {
        var jl616 = $("#add-jiaolian6SelectLeft16").jiaolian6SelectLeft;
    }
    var height16 = parseFloat(document.getElementById('add-height16').value);
    if (jl16 == '距中') {
        var jiaolian1Insert16 = height16 / 2;
        document.getElementById("add-jiaolian1SelectRight16").value = jl116
        document.getElementById("add-jiaolian1SelectRight16").value = jl116

        document.getElementById("add-jiaolian1InsertLeft16").value = jiaolian1Insert16;

        document.getElementById("add-jiaolian1InsertRight16").value = jiaolian1Insert16;

    }
    if (jl216 == '距中') {
        var jiaolian2Insert16 = height16 / 2;
        document.getElementById("add-jiaolian2SelectRight16").value = jl216

        document.getElementById("add-jiaolian2InsertLeft16").value = jiaolian2Insert16;

        document.getElementById("add-jiaolian2InsertRight16").value = jiaolian2Insert16;

    }
    if (jl316 == '距中') {
        var jiaolian3Insert16 = height16 / 2;
        document.getElementById("add-jiaolian3SelectRight16").value = jl316

        document.getElementById("add-jiaolian3InsertLeft16").value = jiaolian3Insert16;

        document.getElementById("add-jiaolian3InsertRight16").value = jiaolian3Insert16;

    }
    if (jl416 == '距中') {
        var jiaolian4Insert16 = height16 / 2;
        document.getElementById("add-jiaolian4SelectRight16").value = jl416

        document.getElementById("add-jiaolian4InsertLeft16").value = jiaolian4Insert16;

        document.getElementById("add-jiaolian4InsertRight16").value = jiaolian4Insert16;

    }
    if (jl516 == '距中') {
        var jiaolian5Insert16 = height16 / 2;
        document.getElementById("add-jiaolian5SelectRight16").value = jl516

        document.getElementById("add-jiaolian5InsertLeft16").value = jiaolian5Insert16;

        document.getElementById("add-jiaolian5InsertRight16").value = jiaolian5Insert16;

    }
    if (jl616 == '距中') {
        var jiaolian6Insert16 = height16 / 2;
        document.getElementById("add-jiaolian6SelectRight16").value = jl616

        document.getElementById("add-jiaolian6InsertLeft16").value = jiaolian6Insert16;

        document.getElementById("add-jiaolian6InsertRight16").value = jiaolian6Insert16;

    }

    var jl117 = document.getElementById('add-jiaolian1SelectLeft17').value;
    var jl217 = document.getElementById('add-jiaolian2SelectLeft17').value;
    if ($("#add-jiaolian3SelectLeft17").jiaolian3SelectLeft != "" && $("#add-jiaolian3SelectLeft17").jiaolian3SelectLeft != undefined) {
        var jl317 = $("#add-jiaolian3SelectLeft17").jiaolian3SelectLeft;
    }
    if ($("#add-jiaolian4SelectLeft17").jiaolian4SelectLeft != "" && $("#add-jiaolian4SelectLeft17").jiaolian4SelectLeft != undefined) {
        var jl417 = $("#add-jiaolian4SelectLeft17").jiaolian4SelectLeft;
    }
    if ($("#add-jiaolian5SelectLeft17").jiaolian5SelectLeft != "" && $("#add-jiaolian5SelectLeft17").jiaolian5SelectLeft != undefined) {
        var jl517 = $("#add-jiaolian5SelectLeft17").jiaolian5SelectLeft;
    }
    if ($("#add-jiaolian6SelectLeft17").jiaolian6SelectLeft != "" && $("#add-jiaolian6SelectLeft17").jiaolian6SelectLeft != undefined) {
        var jl617 = $("#add-jiaolian6SelectLeft17").jiaolian6SelectLeft;
    }
    var height17 = parseFloat(document.getElementById('add-height17').value);
    if (jl17 == '距中') {
        var jiaolian1Insert17 = height17 / 2;
        document.getElementById("add-jiaolian1SelectRight17").value = jl117
        document.getElementById("add-jiaolian1SelectRight17").value = jl117

        document.getElementById("add-jiaolian1InsertLeft17").value = jiaolian1Insert17;

        document.getElementById("add-jiaolian1InsertRight17").value = jiaolian1Insert17;

    }
    if (jl217 == '距中') {
        var jiaolian2Insert17 = height17 / 2;
        document.getElementById("add-jiaolian2SelectRight17").value = jl217

        document.getElementById("add-jiaolian2InsertLeft17").value = jiaolian2Insert17;

        document.getElementById("add-jiaolian2InsertRight17").value = jiaolian2Insert17;

    }
    if (jl317 == '距中') {
        var jiaolian3Insert17 = height17 / 2;
        document.getElementById("add-jiaolian3SelectRight17").value = jl317

        document.getElementById("add-jiaolian3InsertLeft17").value = jiaolian3Insert17;

        document.getElementById("add-jiaolian3InsertRight17").value = jiaolian3Insert17;

    }
    if (jl417 == '距中') {
        var jiaolian4Insert17 = height17 / 2;
        document.getElementById("add-jiaolian4SelectRight17").value = jl417

        document.getElementById("add-jiaolian4InsertLeft17").value = jiaolian4Insert17;

        document.getElementById("add-jiaolian4InsertRight17").value = jiaolian4Insert17;

    }
    if (jl517 == '距中') {
        var jiaolian5Insert17 = height17 / 2;
        document.getElementById("add-jiaolian5SelectRight17").value = jl517

        document.getElementById("add-jiaolian5InsertLeft17").value = jiaolian5Insert17;

        document.getElementById("add-jiaolian5InsertRight17").value = jiaolian5Insert17;

    }
    if (jl617 == '距中') {
        var jiaolian6Insert17 = height17 / 2;
        document.getElementById("add-jiaolian6SelectRight17").value = jl617

        document.getElementById("add-jiaolian6InsertLeft17").value = jiaolian6Insert17;

        document.getElementById("add-jiaolian6InsertRight17").value = jiaolian6Insert17;

    }

    var jl118 = document.getElementById('add-jiaolian1SelectLeft18').value;
    var jl218 = document.getElementById('add-jiaolian2SelectLeft18').value;
    if ($("#add-jiaolian3SelectLeft18").jiaolian3SelectLeft != "" && $("#add-jiaolian3SelectLeft18").jiaolian3SelectLeft != undefined) {
        var jl318 = $("#add-jiaolian3SelectLeft18").jiaolian3SelectLeft;
    }
    if ($("#add-jiaolian4SelectLeft18").jiaolian4SelectLeft != "" && $("#add-jiaolian4SelectLeft18").jiaolian4SelectLeft != undefined) {
        var jl418 = $("#add-jiaolian4SelectLeft18").jiaolian4SelectLeft;
    }
    if ($("#add-jiaolian5SelectLeft18").jiaolian5SelectLeft != "" && $("#add-jiaolian5SelectLeft18").jiaolian5SelectLeft != undefined) {
        var jl518 = $("#add-jiaolian5SelectLeft18").jiaolian5SelectLeft;
    }
    if ($("#add-jiaolian6SelectLeft18").jiaolian6SelectLeft != "" && $("#add-jiaolian6SelectLeft18").jiaolian6SelectLeft != undefined) {
        var jl618 = $("#add-jiaolian6SelectLeft18").jiaolian6SelectLeft;
    }
    var height18 = parseFloat(document.getElementById('add-height18').value);
    if (jl18 == '距中') {
        var jiaolian1Insert18 = height18 / 2;
        document.getElementById("add-jiaolian1SelectRight18").value = jl118
        document.getElementById("add-jiaolian1SelectRight18").value = jl118

        document.getElementById("add-jiaolian1InsertLeft18").value = jiaolian1Insert18;

        document.getElementById("add-jiaolian1InsertRight18").value = jiaolian1Insert18;

    }
    if (jl218 == '距中') {
        var jiaolian2Insert18 = height18 / 2;
        document.getElementById("add-jiaolian2SelectRight18").value = jl218

        document.getElementById("add-jiaolian2InsertLeft18").value = jiaolian2Insert18;

        document.getElementById("add-jiaolian2InsertRight18").value = jiaolian2Insert18;

    }
    if (jl318 == '距中') {
        var jiaolian3Insert18 = height18 / 2;
        document.getElementById("add-jiaolian3SelectRight18").value = jl318

        document.getElementById("add-jiaolian3InsertLeft18").value = jiaolian3Insert18;

        document.getElementById("add-jiaolian3InsertRight18").value = jiaolian3Insert18;

    }
    if (jl418 == '距中') {
        var jiaolian4Insert18 = height18 / 2;
        document.getElementById("add-jiaolian4SelectRight18").value = jl418

        document.getElementById("add-jiaolian4InsertLeft18").value = jiaolian4Insert18;

        document.getElementById("add-jiaolian4InsertRight18").value = jiaolian4Insert18;

    }
    if (jl518 == '距中') {
        var jiaolian5Insert18 = height18 / 2;
        document.getElementById("add-jiaolian5SelectRight18").value = jl518

        document.getElementById("add-jiaolian5InsertLeft18").value = jiaolian5Insert18;

        document.getElementById("add-jiaolian5InsertRight18").value = jiaolian5Insert18;

    }
    if (jl618 == '距中') {
        var jiaolian6Insert18 = height18 / 2;
        document.getElementById("add-jiaolian6SelectRight18").value = jl618

        document.getElementById("add-jiaolian6InsertLeft18").value = jiaolian6Insert18;

        document.getElementById("add-jiaolian6InsertRight18").value = jiaolian6Insert18;

    }

    var jl119 = document.getElementById('add-jiaolian1SelectLeft19').value;
    var jl219 = document.getElementById('add-jiaolian2SelectLeft19').value;
    if ($("#add-jiaolian3SelectLeft19").jiaolian3SelectLeft != "" && $("#add-jiaolian3SelectLeft19").jiaolian3SelectLeft != undefined) {
        var jl319 = $("#add-jiaolian3SelectLeft19").jiaolian3SelectLeft;
    }
    if ($("#add-jiaolian4SelectLeft19").jiaolian4SelectLeft != "" && $("#add-jiaolian4SelectLeft19").jiaolian4SelectLeft != undefined) {
        var jl419 = $("#add-jiaolian4SelectLeft19").jiaolian4SelectLeft;
    }
    if ($("#add-jiaolian5SelectLeft19").jiaolian5SelectLeft != "" && $("#add-jiaolian5SelectLeft19").jiaolian5SelectLeft != undefined) {
        var jl519 = $("#add-jiaolian5SelectLeft19").jiaolian5SelectLeft;
    }
    if ($("#add-jiaolian6SelectLeft19").jiaolian6SelectLeft != "" && $("#add-jiaolian6SelectLeft19").jiaolian6SelectLeft != undefined) {
        var jl619 = $("#add-jiaolian6SelectLeft19").jiaolian6SelectLeft;
    }
    var height19 = parseFloat(document.getElementById('add-height19').value);
    if (jl19 == '距中') {
        var jiaolian1Insert19 = height19 / 2;
        document.getElementById("add-jiaolian1SelectRight19").value = jl119
        document.getElementById("add-jiaolian1SelectRight19").value = jl119

        document.getElementById("add-jiaolian1InsertLeft19").value = jiaolian1Insert19;

        document.getElementById("add-jiaolian1InsertRight19").value = jiaolian1Insert19;

    }
    if (jl219 == '距中') {
        var jiaolian2Insert19 = height19 / 2;
        document.getElementById("add-jiaolian2SelectRight19").value = jl219

        document.getElementById("add-jiaolian2InsertLeft19").value = jiaolian2Insert19;

        document.getElementById("add-jiaolian2InsertRight19").value = jiaolian2Insert19;

    }
    if (jl319 == '距中') {
        var jiaolian3Insert19 = height19 / 2;
        document.getElementById("add-jiaolian3SelectRight19").value = jl319

        document.getElementById("add-jiaolian3InsertLeft19").value = jiaolian3Insert19;

        document.getElementById("add-jiaolian3InsertRight19").value = jiaolian3Insert19;

    }
    if (jl419 == '距中') {
        var jiaolian4Insert19 = height19 / 2;
        document.getElementById("add-jiaolian4SelectRight19").value = jl419

        document.getElementById("add-jiaolian4InsertLeft19").value = jiaolian4Insert19;

        document.getElementById("add-jiaolian4InsertRight19").value = jiaolian4Insert19;

    }
    if (jl519 == '距中') {
        var jiaolian5Insert19 = height19 / 2;
        document.getElementById("add-jiaolian5SelectRight19").value = jl519

        document.getElementById("add-jiaolian5InsertLeft19").value = jiaolian5Insert19;

        document.getElementById("add-jiaolian5InsertRight19").value = jiaolian5Insert19;

    }
    if (jl619 == '距中') {
        var jiaolian6Insert19 = height19 / 2;
        document.getElementById("add-jiaolian6SelectRight19").value = jl619

        document.getElementById("add-jiaolian6InsertLeft19").value = jiaolian6Insert19;

        document.getElementById("add-jiaolian6InsertRight19").value = jiaolian6Insert19;

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
    var sum_sl = Math.round(height * width * num);
    document.getElementById("add-sumShuliang1").value = sum_sl

    var height1 = parseFloat(document.getElementById('add-height1').value);
    var width1 = parseFloat(document.getElementById('add-width1').value);
    var num1 = parseFloat(document.getElementById('add-num1').value);
    var sum_sl1 = Math.round(height1 * width1 * num1);
    document.getElementById("add-sumShuliang11").value = sum_sl1

    var height2 = parseFloat(document.getElementById('add-height2').value);
    var width2 = parseFloat(document.getElementById('add-width2').value);
    var num2 = parseFloat(document.getElementById('add-num2').value);
    var sum_sl2 = Math.round(height2 * width2 * num2);
    document.getElementById("add-sumShuliang12").value = sum_sl2

    var height3 = parseFloat(document.getElementById('add-height3').value);
    var width3 = parseFloat(document.getElementById('add-width3').value);
    var num3 = parseFloat(document.getElementById('add-num3').value);
    var sum_sl3 = Math.round(height3 * width3 * num3);
    document.getElementById("add-sumShuliang13").value = sum_sl3

    var height4 = parseFloat(document.getElementById('add-height4').value);
    var width4 = parseFloat(document.getElementById('add-width4').value);
    var num4 = parseFloat(document.getElementById('add-num4').value);
    var sum_sl4 = Math.round(height4 * width4 * num4);
    document.getElementById("add-sumShuliang14").value = sum_sl4

    var height5 = parseFloat(document.getElementById('add-height5').value);
    var width5 = parseFloat(document.getElementById('add-width5').value);
    var num5 = parseFloat(document.getElementById('add-num5').value);
    var sum_sl5 = Math.round(height5 * width5 * num5);
    document.getElementById("add-sumShuliang15").value = sum_sl5

    var height6 = parseFloat(document.getElementById('add-height6').value);
    var width6 = parseFloat(document.getElementById('add-width6').value);
    var num6 = parseFloat(document.getElementById('add-num6').value);
    var sum_sl6 = Math.round(height6 * width6 * num6);
    document.getElementById("add-sumShuliang16").value = sum_sl6

    var height7 = parseFloat(document.getElementById('add-height7').value);
    var width7 = parseFloat(document.getElementById('add-width7').value);
    var num7 = parseFloat(document.getElementById('add-num7').value);
    var sum_sl7 = Math.round(height7 * width7 * num7);
    document.getElementById("add-sumShuliang17").value = sum_sl7

    var height8 = parseFloat(document.getElementById('add-height8').value);
    var width8 = parseFloat(document.getElementById('add-width8').value);
    var num8 = parseFloat(document.getElementById('add-num8').value);
    var sum_sl8 = Math.round(height8 * width8 * num8);
    document.getElementById("add-sumShuliang18").value = sum_sl8

    var height9 = parseFloat(document.getElementById('add-height9').value);
    var width9 = parseFloat(document.getElementById('add-width9').value);
    var num9 = parseFloat(document.getElementById('add-num9').value);
    var sum_sl9 = Math.round(height9 * width9 * num9);
    document.getElementById("add-sumShuliang19").value = sum_sl9

    var height10 = parseFloat(document.getElementById('add-height10').value);
    var width10 = parseFloat(document.getElementById('add-width10').value);
    var num10 = parseFloat(document.getElementById('add-num10').value);
    var sum_sl10 = Math.round(height10 * width10 * num10);
    document.getElementById("add-sumShuliang110").value = sum_sl10

    var height11 = parseFloat(document.getElementById('add-height11').value);
    var width11 = parseFloat(document.getElementById('add-width11').value);
    var num11 = parseFloat(document.getElementById('add-num11').value);
    var sum_sl11 = Math.round(height11 * width11 * num11);
    document.getElementById("add-sumShuliang111").value = sum_sl11

    var height12 = parseFloat(document.getElementById('add-height12').value);
    var width12 = parseFloat(document.getElementById('add-width12').value);
    var num12 = parseFloat(document.getElementById('add-num12').value);
    var sum_sl12 = Math.round(height12 * width12 * num12);
    document.getElementById("add-sumShuliang112").value = sum_sl12

    var height13 = parseFloat(document.getElementById('add-height13').value);
    var width13 = parseFloat(document.getElementById('add-width13').value);
    var num13 = parseFloat(document.getElementById('add-num13').value);
    var sum_sl13 = Math.round(height13 * width13 * num13);
    document.getElementById("add-sumShuliang113").value = sum_sl13

    var height14 = parseFloat(document.getElementById('add-height14').value);
    var width14 = parseFloat(document.getElementById('add-width14').value);
    var num14 = parseFloat(document.getElementById('add-num14').value);
    var sum_sl14 = Math.round(height14 * width14 * num14);
    document.getElementById("add-sumShuliang114").value = sum_sl14

    var height15 = parseFloat(document.getElementById('add-height15').value);
    var width15 = parseFloat(document.getElementById('add-width15').value);
    var num15 = parseFloat(document.getElementById('add-num15').value);
    var sum_sl15 = Math.round(height15 * width15 * num15);
    document.getElementById("add-sumShuliang115").value = sum_sl15

    var height16 = parseFloat(document.getElementById('add-height16').value);
    var width16 = parseFloat(document.getElementById('add-width16').value);
    var num16 = parseFloat(document.getElementById('add-num16').value);
    var sum_sl16 = Math.round(height16 * width16 * num16);
    document.getElementById("add-sumShuliang116").value = sum_sl16

    var height17 = parseFloat(document.getElementById('add-height17').value);
    var width17 = parseFloat(document.getElementById('add-width17').value);
    var num17 = parseFloat(document.getElementById('add-num17').value);
    var sum_sl17 = Math.round(height17 * width17 * num17);
    document.getElementById("add-sumShuliang117").value = sum_sl17

    var height18 = parseFloat(document.getElementById('add-height18').value);
    var width18 = parseFloat(document.getElementById('add-width18').value);
    var num18 = parseFloat(document.getElementById('add-num18').value);
    var sum_sl18 = Math.round(height18 * width18 * num18);
    document.getElementById("add-sumShuliang118").value = sum_sl18

    var height19 = parseFloat(document.getElementById('add-height19').value);
    var width19 = parseFloat(document.getElementById('add-width19').value);
    var num19 = parseFloat(document.getElementById('add-num19').value);
    var sum_sl19 = Math.round(height19 * width19 * num19);
    document.getElementById("add-sumShuliang119").value = sum_sl19

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

    var sum_sl1 = parseFloat(document.getElementById('add-sumShuliang11').value);
    var pfdj1 = parseFloat(document.getElementById('add-danjia11').value);
    var sum_je1 = Math.round(sum_sl1 * pfdj1 * 100) / 100
    document.getElementById("add-sumJine11").value = sum_je1

    var sum_sl2 = parseFloat(document.getElementById('add-sumShuliang12').value);
    var pfdj2 = parseFloat(document.getElementById('add-danjia12').value);
    var sum_je2 = Math.round(sum_sl1 * pfdj1 * 100) / 100
    document.getElementById("add-sumJine12").value = sum_je2

    var sum_sl3 = parseFloat(document.getElementById('add-sumShuliang13').value);
    var pfdj3 = parseFloat(document.getElementById('add-danjia13').value);
    var sum_je3 = Math.round(sum_sl3 * pfdj3 * 100) / 100
    document.getElementById("add-sumJine13").value = sum_je3

    var sum_sl4 = parseFloat(document.getElementById('add-sumShuliang14').value);
    var pfdj4 = parseFloat(document.getElementById('add-danjia14').value);
    var sum_je4 = Math.round(sum_sl4 * pfdj4 * 100) / 100
    document.getElementById("add-sumJine14").value = sum_je4

    var sum_sl5 = parseFloat(document.getElementById('add-sumShuliang15').value);
    var pfdj5 = parseFloat(document.getElementById('add-danjia15').value);
    var sum_je5 = Math.round(sum_sl5 * pfdj5 * 100) / 100
    document.getElementById("add-sumJine15").value = sum_je5

    var sum_sl6 = parseFloat(document.getElementById('add-sumShuliang16').value);
    var pfdj6 = parseFloat(document.getElementById('add-danjia16').value);
    var sum_je6 = Math.round(sum_sl6 * pfdj6 * 100) / 100
    document.getElementById("add-sumJine16").value = sum_je6

    var sum_sl7 = parseFloat(document.getElementById('add-sumShuliang17').value);
    var pfdj7 = parseFloat(document.getElementById('add-danjia17').value);
    var sum_je7 = Math.round(sum_sl7 * pfdj7 * 100) / 100
    document.getElementById("add-sumJine17").value = sum_je7

    var sum_sl8 = parseFloat(document.getElementById('add-sumShuliang18').value);
    var pfdj8 = parseFloat(document.getElementById('add-danjia18').value);
    var sum_je8 = Math.round(sum_sl8 * pfdj8 * 100) / 100
    document.getElementById("add-sumJine18").value = sum_je8

    var sum_sl9 = parseFloat(document.getElementById('add-sumShuliang19').value);
    var pfdj9 = parseFloat(document.getElementById('add-danjia19').value);
    var sum_je9 = Math.round(sum_sl9 * pfdj9 * 100) / 100
    document.getElementById("add-sumJine19").value = sum_je9

    var sum_sl10 = parseFloat(document.getElementById('add-sumShuliang110').value);
    var pfdj10 = parseFloat(document.getElementById('add-danjia110').value);
    var sum_je10 = Math.round(sum_sl10 * pfdj10 * 100) / 100
    document.getElementById("add-sumJine110").value = sum_je10

    var sum_sl11 = parseFloat(document.getElementById('add-sumShuliang111').value);
    var pfdj11 = parseFloat(document.getElementById('add-danjia111').value);
    var sum_je11 = Math.round(sum_sl11 * pfdj11 * 100) / 100
    document.getElementById("add-sumJine111").value = sum_je11

    var sum_sl12 = parseFloat(document.getElementById('add-sumShuliang112').value);
    var pfdj12 = parseFloat(document.getElementById('add-danjia112').value);
    var sum_je12 = Math.round(sum_sl12 * pfdj12 * 100) / 100
    document.getElementById("add-sumJine112").value = sum_je12

    var sum_sl13 = parseFloat(document.getElementById('add-sumShuliang113').value);
    var pfdj13 = parseFloat(document.getElementById('add-danjia113').value);
    var sum_je13 = Math.round(sum_sl13 * pfdj13 * 100) / 100
    document.getElementById("add-sumJine113").value = sum_je13

    var sum_sl14 = parseFloat(document.getElementById('add-sumShuliang114').value);
    var pfdj14 = parseFloat(document.getElementById('add-danjia114').value);
    var sum_je14 = Math.round(sum_sl14 * pfdj14 * 100) / 100
    document.getElementById("add-sumJine114").value = sum_je14

    var sum_sl15 = parseFloat(document.getElementById('add-sumShuliang115').value);
    var pfdj15 = parseFloat(document.getElementById('add-danjia115').value);
    var sum_je15 = Math.round(sum_sl15 * pfdj15 * 100) / 100
    document.getElementById("add-sumJine115").value = sum_je15

    var sum_sl16 = parseFloat(document.getElementById('add-sumShuliang116').value);
    var pfdj16 = parseFloat(document.getElementById('add-danjia116').value);
    var sum_je16 = Math.round(sum_sl16 * pfdj16 * 100) / 100
    document.getElementById("add-sumJine116").value = sum_je16

    var sum_sl17 = parseFloat(document.getElementById('add-sumShuliang117').value);
    var pfdj17 = parseFloat(document.getElementById('add-danjia117').value);
    var sum_je17 = Math.round(sum_sl17 * pfdj17 * 100) / 100
    document.getElementById("add-sumJine117").value = sum_je17

    var sum_sl18 = parseFloat(document.getElementById('add-sumShuliang118').value);
    var pfdj18 = parseFloat(document.getElementById('add-danjia118').value);
    var sum_je18 = Math.round(sum_sl18 * pfdj18 * 100) / 100
    document.getElementById("add-sumJine118").value = sum_je18

    var sum_sl19 = parseFloat(document.getElementById('add-sumShuliang119').value);
    var pfdj19 = parseFloat(document.getElementById('add-danjia119').value);
    var sum_je19 = Math.round(sum_sl19 * pfdj19 * 100) / 100
    document.getElementById("add-sumJine119").value = sum_je19

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
    var sum_sl2 = Math.round((height * 1 + width * 1) * 2 * num);
    document.getElementById("add-sumShuliang2").value = sum_sl2

    var height1 = parseFloat(document.getElementById('add-height1').value);
    var width1 = parseFloat(document.getElementById('add-width1').value);
    var num1 = parseFloat(document.getElementById('add-num1').value);
    var sum_sl21 = Math.round((height1 * 1 + width1 * 1) * 2 * num1);
    document.getElementById("add-sumShuliang21").value = sum_sl21

    var height2 = parseFloat(document.getElementById('add-height2').value);
    var width2 = parseFloat(document.getElementById('add-width2').value);
    var num2 = parseFloat(document.getElementById('add-num2').value);
    var sum_sl22 = Math.round((height2 * 1 + width2 * 1) * 2 * num2);
    document.getElementById("add-sumShuliang22").value = sum_sl22

    var height3 = parseFloat(document.getElementById('add-height3').value);
    var width3 = parseFloat(document.getElementById('add-width3').value);
    var num3 = parseFloat(document.getElementById('add-num3').value);
    var sum_sl23 = Math.round((height3 * 1 + width3 * 1) * 2 * num3);
    document.getElementById("add-sumShuliang23").value = sum_sl23

    var height4 = parseFloat(document.getElementById('add-height4').value);
    var width4 = parseFloat(document.getElementById('add-width4').value);
    var num4 = parseFloat(document.getElementById('add-num4').value);
    var sum_sl24 = Math.round((height4 * 1 + width4 * 1) * 2 * num4);
    document.getElementById("add-sumShuliang24").value = sum_sl24

    var height5 = parseFloat(document.getElementById('add-height5').value);
    var width5 = parseFloat(document.getElementById('add-width5').value);
    var num5 = parseFloat(document.getElementById('add-num5').value);
    var sum_sl25 = Math.round((height5 * 1 + width5 * 1) * 2 * num5);
    document.getElementById("add-sumShuliang25").value = sum_sl25

    var height6 = parseFloat(document.getElementById('add-height6').value);
    var width6 = parseFloat(document.getElementById('add-width6').value);
    var num6 = parseFloat(document.getElementById('add-num6').value);
    var sum_sl26 = Math.round((height6 * 1 + width6 * 1) * 2 * num6);
    document.getElementById("add-sumShuliang26").value = sum_sl26

    var height7 = parseFloat(document.getElementById('add-height7').value);
    var width7 = parseFloat(document.getElementById('add-width7').value);
    var num7 = parseFloat(document.getElementById('add-num7').value);
    var sum_sl27 = Math.round((height7 * 1 + width7 * 1) * 2 * num7);
    document.getElementById("add-sumShuliang27").value = sum_sl27

    var height8 = parseFloat(document.getElementById('add-height8').value);
    var width8 = parseFloat(document.getElementById('add-width8').value);
    var num8 = parseFloat(document.getElementById('add-num8').value);
    var sum_sl28 = Math.round((height8 * 1 + width8 * 1) * 2 * num8);
    document.getElementById("add-sumShuliang28").value = sum_sl28

    var height9 = parseFloat(document.getElementById('add-height9').value);
    var width9 = parseFloat(document.getElementById('add-width9').value);
    var num9 = parseFloat(document.getElementById('add-num9').value);
    var sum_sl29 = Math.round((height9 * 1 + width9 * 1) * 2 * num9);
    document.getElementById("add-sumShuliang29").value = sum_sl29

    var height10 = parseFloat(document.getElementById('add-height10').value);
    var width10 = parseFloat(document.getElementById('add-width10').value);
    var num10 = parseFloat(document.getElementById('add-num10').value);
    var sum_sl210 = Math.round((height10 * 1 + width10 * 1) * 2 * num10);
    document.getElementById("add-sumShuliang210").value = sum_sl210

    var height11 = parseFloat(document.getElementById('add-height11').value);
    var width11 = parseFloat(document.getElementById('add-width11').value);
    var num11 = parseFloat(document.getElementById('add-num11').value);
    var sum_sl211 = Math.round((height11 * 1 + width11 * 1) * 2 * num11);
    document.getElementById("add-sumShuliang211").value = sum_sl211

    var height12 = parseFloat(document.getElementById('add-height12').value);
    var width12 = parseFloat(document.getElementById('add-width12').value);
    var num12 = parseFloat(document.getElementById('add-num12').value);
    var sum_sl212 = Math.round((height12 * 1 + width12 * 1) * 2 * num12);
    document.getElementById("add-sumShuliang212").value = sum_sl212

    var height13 = parseFloat(document.getElementById('add-height13').value);
    var width13 = parseFloat(document.getElementById('add-width13').value);
    var num13 = parseFloat(document.getElementById('add-num13').value);
    var sum_sl213 = Math.round((height13 * 1 + width13 * 1) * 2 * num13);
    document.getElementById("add-sumShuliang213").value = sum_sl213

    var height14 = parseFloat(document.getElementById('add-height14').value);
    var width14 = parseFloat(document.getElementById('add-width14').value);
    var num14 = parseFloat(document.getElementById('add-num14').value);
    var sum_sl214 = Math.round((height14 * 1 + width14 * 1) * 2 * num14);
    document.getElementById("add-sumShuliang214").value = sum_sl214

    var height15 = parseFloat(document.getElementById('add-height15').value);
    var width15 = parseFloat(document.getElementById('add-width15').value);
    var num15 = parseFloat(document.getElementById('add-num15').value);
    var sum_sl215 = Math.round((height15 * 1 + width15 * 1) * 2 * num15);
    document.getElementById("add-sumShuliang215").value = sum_sl215

    var height16 = parseFloat(document.getElementById('add-height16').value);
    var width16 = parseFloat(document.getElementById('add-width16').value);
    var num16 = parseFloat(document.getElementById('add-num16').value);
    var sum_sl216 = Math.round((height16 * 1 + width16 * 1) * 2 * num16);
    document.getElementById("add-sumShuliang216").value = sum_sl216

    var height17 = parseFloat(document.getElementById('add-height17').value);
    var width17 = parseFloat(document.getElementById('add-width17').value);
    var num17 = parseFloat(document.getElementById('add-num17').value);
    var sum_sl217 = Math.round((height17 * 1 + width17 * 1) * 2 * num17);
    document.getElementById("add-sumShuliang217").value = sum_sl217

    var height18 = parseFloat(document.getElementById('add-height18').value);
    var width18 = parseFloat(document.getElementById('add-width18').value);
    var num18 = parseFloat(document.getElementById('add-num18').value);
    var sum_sl218 = Math.round((height18 * 1 + width18 * 1) * 2 * num18);
    document.getElementById("add-sumShuliang218").value = sum_sl218

    var height19 = parseFloat(document.getElementById('add-height19').value);
    var width19 = parseFloat(document.getElementById('add-width19').value);
    var num19 = parseFloat(document.getElementById('add-num19').value);
    var sum_sl219 = Math.round((height19 * 1 + width19 * 1) * 2 * num19);
    document.getElementById("add-sumShuliang219").value = sum_sl219

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

    var sum_sl21 = parseFloat(document.getElementById('add-sumShuliang21').value);
    var zcdj21 = parseFloat(document.getElementById('add-danjia21').value);
    var sum_je21 = Math.round(sum_sl21 * zcdj21 * 100) / 100
    document.getElementById("add-sumJine21").value = sum_je21

    var sum_sl22 = parseFloat(document.getElementById('add-sumShuliang22').value);
    var zcdj22 = parseFloat(document.getElementById('add-danjia22').value);
    var sum_je22 = Math.round(sum_sl22 * zcdj22 * 100) / 100
    document.getElementById("add-sumJine22").value = sum_je22

    var sum_sl23 = parseFloat(document.getElementById('add-sumShuliang23').value);
    var zcdj23 = parseFloat(document.getElementById('add-danjia23').value);
    var sum_je23 = Math.round(sum_sl23 * zcdj23 * 100) / 100
    document.getElementById("add-sumJine23").value = sum_je23

    var sum_sl24 = parseFloat(document.getElementById('add-sumShuliang24').value);
    var zcdj24 = parseFloat(document.getElementById('add-danjia24').value);
    var sum_je24 = Math.round(sum_sl24 * zcdj24 * 100) / 100
    document.getElementById("add-sumJine24").value = sum_je24

    var sum_sl25 = parseFloat(document.getElementById('add-sumShuliang25').value);
    var zcdj25 = parseFloat(document.getElementById('add-danjia25').value);
    var sum_je25 = Math.round(sum_sl25 * zcdj25 * 100) / 100
    document.getElementById("add-sumJine25").value = sum_je25

    var sum_sl26 = parseFloat(document.getElementById('add-sumShuliang26').value);
    var zcdj26 = parseFloat(document.getElementById('add-danjia26').value);
    var sum_je26 = Math.round(sum_sl26 * zcdj26 * 100) / 100
    document.getElementById("add-sumJine26").value = sum_je26

    var sum_sl27 = parseFloat(document.getElementById('add-sumShuliang27').value);
    var zcdj27 = parseFloat(document.getElementById('add-danjia27').value);
    var sum_je27 = Math.round(sum_sl27 * zcdj27 * 100) / 100
    document.getElementById("add-sumJine27").value = sum_je27

    var sum_sl28 = parseFloat(document.getElementById('add-sumShuliang28').value);
    var zcdj28 = parseFloat(document.getElementById('add-danjia28').value);
    var sum_je28 = Math.round(sum_sl28 * zcdj28 * 100) / 100
    document.getElementById("add-sumJine28").value = sum_je28

    var sum_sl29 = parseFloat(document.getElementById('add-sumShuliang29').value);
    var zcdj29 = parseFloat(document.getElementById('add-danjia29').value);
    var sum_je29 = Math.round(sum_sl29 * zcdj29 * 100) / 100
    document.getElementById("add-sumJine29").value = sum_je29

    var sum_sl210 = parseFloat(document.getElementById('add-sumShuliang210').value);
    var zcdj210 = parseFloat(document.getElementById('add-danjia210').value);
    var sum_je210 = Math.round(sum_sl210 * zcdj210 * 100) / 100
    document.getElementById("add-sumJine210").value = sum_je210

    var sum_sl211 = parseFloat(document.getElementById('add-sumShuliang211').value);
    var zcdj211 = parseFloat(document.getElementById('add-danjia211').value);
    var sum_je211 = Math.round(sum_sl211 * zcdj211 * 100) / 100
    document.getElementById("add-sumJine211").value = sum_je211

    var sum_sl212 = parseFloat(document.getElementById('add-sumShuliang212').value);
    var zcdj212 = parseFloat(document.getElementById('add-danjia212').value);
    var sum_je212 = Math.round(sum_sl212 * zcdj212 * 100) / 100
    document.getElementById("add-sumJine212").value = sum_je212

    var sum_sl213 = parseFloat(document.getElementById('add-sumShuliang213').value);
    var zcdj213 = parseFloat(document.getElementById('add-danjia213').value);
    var sum_je213 = Math.round(sum_sl213 * zcdj213 * 100) / 100
    document.getElementById("add-sumJine213").value = sum_je213

    var sum_sl214 = parseFloat(document.getElementById('add-sumShuliang214').value);
    var zcdj214 = parseFloat(document.getElementById('add-danjia214').value);
    var sum_je214 = Math.round(sum_sl214 * zcdj214 * 100) / 100
    document.getElementById("add-sumJine214").value = sum_je214

    var sum_sl215 = parseFloat(document.getElementById('add-sumShuliang215').value);
    var zcdj215 = parseFloat(document.getElementById('add-danjia215').value);
    var sum_je215 = Math.round(sum_sl215 * zcdj215 * 100) / 100
    document.getElementById("add-sumJine215").value = sum_je215

    var sum_sl216 = parseFloat(document.getElementById('add-sumShuliang216').value);
    var zcdj216 = parseFloat(document.getElementById('add-danjia216').value);
    var sum_je216 = Math.round(sum_sl216 * zcdj216 * 100) / 100
    document.getElementById("add-sumJine216").value = sum_je216

    var sum_sl217 = parseFloat(document.getElementById('add-sumShuliang217').value);
    var zcdj217 = parseFloat(document.getElementById('add-danjia217').value);
    var sum_je217 = Math.round(sum_sl217 * zcdj217 * 100) / 100
    document.getElementById("add-sumJine217").value = sum_je217

    var sum_sl218 = parseFloat(document.getElementById('add-sumShuliang218').value);
    var zcdj218 = parseFloat(document.getElementById('add-danjia218').value);
    var sum_je218 = Math.round(sum_sl218 * zcdj218 * 100) / 100
    document.getElementById("add-sumJine218").value = sum_je218

    var sum_sl219 = parseFloat(document.getElementById('add-sumShuliang219').value);
    var zcdj219 = parseFloat(document.getElementById('add-danjia219').value);
    var sum_je219 = Math.round(sum_sl219 * zcdj219 * 100) / 100
    document.getElementById("add-sumJine219").value = sum_je219

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


        // if (checkForm('#add-form')) {
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
                    var arr={
                        customerName : customerName,
                        insertDate : insertDate,
                        orderNumber : orderNumber,
                        shippingAddress : shippingAddress,
                        phone : phone,
                        shippingType : shippingType,
                        installAddress : installAddress,
                        customerNumber : customerNumber,
                        pinyin : pinyin,
                        customerNameRenyuan : customerNameRenyuan,
                        height : height,
                        width : width,
                        num : num,
                        lvxingcai : lvxingcai,
                        lvcaiYanse : lvcaiYanse,
                        boliShenjiagong : boliShenjiagong,
                        boliYanse : boliYanse,
                        lashouXinghao : lashouXinghao,
                        jiaoliankongFangxiangLeft : jiaoliankongFangxiangLeft,
                        jiaoliankongFangxiangRight : jiaoliankongFangxiangRight,
                        lashouShuliangLeft : lashouShuliangLeft,
                        lashouShuliangRight : lashouShuliangRight,
                        lashouweiSelectLeft : lashouweiSelectLeft,
                        lashouweiInsertLeft : lashouweiInsertLeft,
                        lashouweiSelectRight : lashouweiSelectRight,
                        lashouweiInsertRight : lashouweiInsertRight,
                        zhuangsuoshuliangInsertLeft1 : zhuangsuoshuliangInsertLeft1,
                        zhuangsuoshuliangInsertRight1 : zhuangsuoshuliangInsertRight1,
                        zhuangsuofangweiInsertLeft1 : zhuangsuofangweiInsertLeft1,
                        zhuangsuofangweiInsertLeft2 : zhuangsuofangweiInsertLeft2,
                        zhuangsuofangweiInsertRight1 : zhuangsuofangweiInsertRight1,
                        zhuangsuofangweiInsertRight2 : zhuangsuofangweiInsertRight2,
                        kaijiaolian : kaijiaolian,
                        jiaolian1SelectLeft : jiaolian1SelectLeft,
                        jiaolian1InsertLeft : jiaolian1InsertLeft,
                        iaolian1SelectRight : iaolian1SelectRight,
                        jiaolian1InsertRight : jiaolian1InsertRight,
                        jiaolian2SelectLeft : jiaolian2SelectLeft,
                        jiaolian2InsertLeft : jiaolian2InsertLeft,
                        jiaolian2SelectRight : jiaolian2SelectRight,
                        jiaolian2InsertRight : jiaolian2InsertRight,
                        jiaolian3SelectLeft : jiaolian3SelectLeft,
                        jiaolian3InsertLeft : jiaolian3InsertLeft,
                        jiaolian3SelectRight : jiaolian3SelectRight,
                        jiaolian3InsertRight : jiaolian3InsertRight,
                        jiaolian4SelectLeft : jiaolian4SelectLeft,
                        jiaolian4InsertLeft : jiaolian4InsertLeft,
                        jiaolian4SelectRight : jiaolian4SelectRight,
                        jiaolian4InsertRight : jiaolian4InsertRight,
                        jiaolian5SelectLeft : jiaolian5SelectLeft,
                        jiaolian5InsertLeft : jiaolian5InsertLeft,
                        jiaolian5SelectRight : jiaolian5SelectRight,
                        jiaolian6SelectLeft : jiaolian6SelectLeft,
                        jiaolian6InsertLeft : jiaolian6InsertLeft,
                        jiaolian6SelectRight : jiaolian6SelectRight,
                        jiaolian6InsertRight : jiaolian6InsertRight,
                        fujianSelect1 : fujianSelect1,
                        fujianSelect2 : fujianSelect2,
                        fujianSelect3 : fujianSelect3,
                        fujianSelect4 : fujianSelect4,
                        pinpaiSelect1 : pinpaiSelect1,
                        pinpaiSelect2 : pinpaiSelect2,
                        pinpaiSelect3 : pinpaiSelect3,
                        pinpaiSelect4 : pinpaiSelect4,
                        fujianShuliang1 : fujianShuliang1,
                        fujianShuliang2 : fujianShuliang2,
                        fujianShuliang3 : fujianShuliang3,
                        fujianShuliang4 : fujianShuliang4,
                        qita : qita,
                        sumShuliang1 : sumShuliang1,
                        danjia1 : danjia1,
                        sumJine1 : sumJine1,
                        sumShuliang2 : sumShuliang2,
                        danjia2 : danjia2,
                        sumJine2 : sumJine2,
                        wancheng: wancheng
                }
                    $ajax({
                        type: 'post',
                        url: '/lkxd/add',
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
                }else{
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
                    height = $("#add-height"+i).val();
                    if(height=="" || height==null){
                        break;
                    }
                    width = $("#add-width"+i).val();
                    num = $("#add-num"+i).val();
                    lvxingcai = $("#add-lvxingcai"+i).val();
                    lvcaiYanse = $("#add-lvcaiYanse"+i).val();
                    boliShenjiagong = $("#add-boliShenjiagong"+i).val();
                    boliYanse = $("#add-boliYanse"+i).val();
                    lashouXinghao = $("#add-lashouXinghao"+i).val();
                    jiaoliankongFangxiangLeft = $("#add-jiaoliankongFangxiangLeft"+i).val();
                    jiaoliankongFangxiangRight = $("#add-jiaoliankongFangxiangRight"+i).val();
                    lashouShuliangLeft = $("#add-lashouShuliangLeft"+i).val();
                    lashouShuliangRight = $("#add-lashouShuliangRight"+i).val();
                    lashouweiSelectLeft = $("#add-lashouweiSelectLeft"+i).val();
                    lashouweiInsertLeft = $("#add-lashouweiInsertLeft"+i).val();
                    lashouweiSelectRight = $("#add-lashouweiSelectRight"+i).val();
                    lashouweiInsertRight = $("#add-lashouweiInsertRight"+i).val();
                    zhuangsuoshuliangInsertLeft1 = $("#add-zhuangsuoshuliangInsertLeft1"+i).val();
                    zhuangsuoshuliangInsertRight1 = $("#add-zhuangsuoshuliangInsertRight1"+i).val();
                    zhuangsuofangweiInsertLeft1 = $("#add-zhuangsuofangweiInsertLeft1"+i).val();
                    zhuangsuofangweiInsertLeft2 = $("#add-zhuangsuofangweiInsertLeft2"+i).val();
                    zhuangsuofangweiInsertRight1 = $("#add-zhuangsuofangweiInsertRight1"+i).val();
                    zhuangsuofangweiInsertRight2 = $("#add-zhuangsuofangweiInsertRight2"+i).val();
                    kaijiaolian = $("#add-kaijiaolian"+i).val();
                    jiaolian1SelectLeft = $("#add-jiaolian1SelectLeft"+i).val();
                    jiaolian1InsertLeft = $("#add-jiaolian1InsertLeft"+i).val();
                    iaolian1SelectRight = $("#add-iaolian1SelectRight"+i).val();
                    jiaolian1InsertRight = $("#add-jiaolian1InsertRight"+i).val();
                    jiaolian2SelectLeft = $("#add-jiaolian2SelectLeft"+i).val();
                    jiaolian2InsertLeft = $("#add-jiaolian2InsertLeft"+i).val();
                    jiaolian2SelectRight = $("#add-jiaolian2SelectRight"+i).val();
                    jiaolian2InsertRight = $("#add-jiaolian2InsertRight"+i).val();
                    jiaolian3SelectLeft = $("#add-jiaolian3SelectLeft"+i).val();
                    jiaolian3InsertLeft = $("#add-jiaolian3InsertLeft"+i).val();
                    jiaolian3SelectRight = $("#add-jiaolian3SelectRight"+i).val();
                    jiaolian3InsertRight = $("#add-jiaolian3InsertRight"+i).val();
                    jiaolian4SelectLeft = $("#add-jiaolian4SelectLeft"+i).val();
                    jiaolian4InsertLeft = $("#add-jiaolian4InsertLeft"+i).val();
                    jiaolian4SelectRight = $("#add-jiaolian4SelectRight"+i).val();
                    jiaolian4InsertRight = $("#add-jiaolian4InsertRight"+i).val();
                    jiaolian5SelectLeft = $("#add-jiaolian5SelectLeft"+i).val();
                    jiaolian5InsertLeft = $("#add-jiaolian5InsertLeft"+i).val();
                    jiaolian5SelectRight = $("#add-jiaolian5SelectRight"+i).val();
                    jiaolian6SelectLeft = $("#add-jiaolian6SelectLeft"+i).val();
                    jiaolian6InsertLeft = $("#add-jiaolian6InsertLeft"+i).val();
                    jiaolian6SelectRight = $("#add-jiaolian6SelectRight"+i).val();
                    jiaolian6InsertRight = $("#add-jiaolian6InsertRight"+i).val();
                    fujianSelect1 = $("#add-fujianSelect1"+i).val();
                    fujianSelect2 = $("#add-fujianSelect2"+i).val();
                    fujianSelect3 = $("#add-fujianSelect3"+i).val();
                    fujianSelect4 = $("#add-fujianSelect4"+i).val();
                    pinpaiSelect1 = $("#add-pinpaiSelect1"+i).val();
                    pinpaiSelect2 = $("#add-pinpaiSelect2"+i).val();
                    pinpaiSelect3 = $("#add-pinpaiSelect3"+i).val();
                    pinpaiSelect4 = $("#add-pinpaiSelect4"+i).val();
                    fujianShuliang1 = $("#add-fujianShuliang1"+i).val();
                    fujianShuliang2 = $("#add-fujianShuliang2"+i).val();
                    fujianShuliang3 = $("#add-fujianShuliang3"+i).val();
                    fujianShuliang4 = $("#add-fujianShuliang4"+i).val();
                    qita = $("#add-qita"+i).val();
                    sumShuliang1 = $("#add-sumShuliang1"+i).val();
                    danjia1 = $("#add-danjia1"+i).val();
                    sumJine1 = $("#add-sumJine1"+i).val();
                    sumShuliang2 = $("#add-sumShuliang2"+i).val();
                    danjia2 = $("#add-danjia2"+i).val();
                    sumJine2 = $("#add-sumJine2"+i).val();
                    var arr={
                        customerName : customerName,
                        insertDate : insertDate,
                        orderNumber : orderNumber,
                        shippingAddress : shippingAddress,
                        phone : phone,
                        shippingType : shippingType,
                        installAddress : installAddress,
                        customerNumber : customerNumber,
                        pinyin : pinyin,
                        customerNameRenyuan : customerNameRenyuan,
                        height : height,
                        width : width,
                        num : num,
                        lvxingcai : lvxingcai,
                        lvcaiYanse : lvcaiYanse,
                        boliShenjiagong : boliShenjiagong,
                        boliYanse : boliYanse,
                        lashouXinghao : lashouXinghao,
                        jiaoliankongFangxiangLeft : jiaoliankongFangxiangLeft,
                        jiaoliankongFangxiangRight : jiaoliankongFangxiangRight,
                        lashouShuliangLeft : lashouShuliangLeft,
                        lashouShuliangRight : lashouShuliangRight,
                        lashouweiSelectLeft : lashouweiSelectLeft,
                        lashouweiInsertLeft : lashouweiInsertLeft,
                        lashouweiSelectRight : lashouweiSelectRight,
                        lashouweiInsertRight : lashouweiInsertRight,
                        zhuangsuoshuliangInsertLeft1 : zhuangsuoshuliangInsertLeft1,
                        zhuangsuoshuliangInsertRight1 : zhuangsuoshuliangInsertRight1,
                        zhuangsuofangweiInsertLeft1 : zhuangsuofangweiInsertLeft1,
                        zhuangsuofangweiInsertLeft2 : zhuangsuofangweiInsertLeft2,
                        zhuangsuofangweiInsertRight1 : zhuangsuofangweiInsertRight1,
                        zhuangsuofangweiInsertRight2 : zhuangsuofangweiInsertRight2,
                        kaijiaolian : kaijiaolian,
                        jiaolian1SelectLeft : jiaolian1SelectLeft,
                        jiaolian1InsertLeft : jiaolian1InsertLeft,
                        iaolian1SelectRight : iaolian1SelectRight,
                        jiaolian1InsertRight : jiaolian1InsertRight,
                        jiaolian2SelectLeft : jiaolian2SelectLeft,
                        jiaolian2InsertLeft : jiaolian2InsertLeft,
                        jiaolian2SelectRight : jiaolian2SelectRight,
                        jiaolian2InsertRight : jiaolian2InsertRight,
                        jiaolian3SelectLeft : jiaolian3SelectLeft,
                        jiaolian3InsertLeft : jiaolian3InsertLeft,
                        jiaolian3SelectRight : jiaolian3SelectRight,
                        jiaolian3InsertRight : jiaolian3InsertRight,
                        jiaolian4SelectLeft : jiaolian4SelectLeft,
                        jiaolian4InsertLeft : jiaolian4InsertLeft,
                        jiaolian4SelectRight : jiaolian4SelectRight,
                        jiaolian4InsertRight : jiaolian4InsertRight,
                        jiaolian5SelectLeft : jiaolian5SelectLeft,
                        jiaolian5InsertLeft : jiaolian5InsertLeft,
                        jiaolian5SelectRight : jiaolian5SelectRight,
                        jiaolian6SelectLeft : jiaolian6SelectLeft,
                        jiaolian6InsertLeft : jiaolian6InsertLeft,
                        jiaolian6SelectRight : jiaolian6SelectRight,
                        jiaolian6InsertRight : jiaolian6InsertRight,
                        fujianSelect1 : fujianSelect1,
                        fujianSelect2 : fujianSelect2,
                        fujianSelect3 : fujianSelect3,
                        fujianSelect4 : fujianSelect4,
                        pinpaiSelect1 : pinpaiSelect1,
                        pinpaiSelect2 : pinpaiSelect2,
                        pinpaiSelect3 : pinpaiSelect3,
                        pinpaiSelect4 : pinpaiSelect4,
                        fujianShuliang1 : fujianShuliang1,
                        fujianShuliang2 : fujianShuliang2,
                        fujianShuliang3 : fujianShuliang3,
                        fujianShuliang4 : fujianShuliang4,
                        qita : qita,
                        sumShuliang1 : sumShuliang1,
                        danjia1 : danjia1,
                        sumJine1 : sumJine1,
                        sumShuliang2 : sumShuliang2,
                        danjia2 : danjia2,
                        sumJine2 : sumJine2
                    }
                    $ajax({
                        type: 'post',
                        url: '/lkxd/add',
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
            }, {
                field: 'customerName',
                title: '客户名称',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: 'wancheng',
                title: '订单状态',
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
                field: '',
                title: '开孔',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: '',
                title: '铣孔',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
                field: '',
                title: '组装',
                align: 'center',
                sortable: true,
                width: 100,
            }, {
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