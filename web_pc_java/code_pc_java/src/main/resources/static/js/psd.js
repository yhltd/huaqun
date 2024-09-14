// var idd;
// var num;
// var select_quyu = [];
// var newFile;
// function getList() {
//     $('#orderNumber').val("");
//     $('#customerName').val("");
//     $('#songhuoAddress').val("");
//     $('#anzhuangAddress').val("");
//     $('#customerOrder').val("");
//     $('#songhuoDanhao').val("");
//
//
//     $ajax({
//         type: 'post',
//         url: '/user/getPower',
//         async:false,
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             var power = res.data;
//             if (power == "客户" || power == "操作员") {
//                 document.getElementById("update-customerNeedText").disabled = true;
//                 document.getElementById("update-customerNeedText1").disabled = true;
//
//             }
//         }
//     })
//
//
//
//     $ajax({
//         type: 'post',
//         url: '/user/getPower',
//         async:false,
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             var power = res.data;
//             if (power == "客户") {
//                 document.getElementById("update-wancheng").disabled = true;
//                 document.getElementById("update-shoukuan").disabled = true;
//                 document.getElementById("update-kucun").hidden = true;
//                 document.getElementById("add-shoukuan").disabled = true;
//
//                 document.getElementById("add-wancheng").disabled = true;
//                 document.getElementById("customerName").disabled = true;
//                 document.getElementById("ukc").hidden = true;
//                 document.getElementById("a-psi1").hidden = true;
//                 document.getElementById("a-phi2").hidden = true;
//                 document.getElementById("a-phi1").hidden = true;
//                 document.getElementById("a-cnt2").hidden = true;
//
//                 document.getElementById("add-peihuoImg5").hidden = true;
//                 document.getElementById("add-peisongImg1").hidden = true;
//                 document.getElementById("add-peisongImg2").hidden = true;
//                 document.getElementById("add-peisongImg3").hidden = true;
//
//                 document.getElementById("add-peihuoImg5Renyuan").hidden = true;
//                 document.getElementById("add-peihuoImg5Riqi").hidden = true;
//                 document.getElementById("add-peisongImg1Renyuan").hidden = true;
//                 document.getElementById("add-peisongImg1Riqi").hidden = true;
//                 document.getElementById("add-peisongImg2Renyuan").hidden = true;
//                 document.getElementById("add-peisongImg2Riqi").hidden = true;
//                 document.getElementById("add-peisongImg3Renyuan").hidden = true;
//                 document.getElementById("add-peisongImg3Riqi").hidden = true;
//                 document.getElementById("ac1").hidden = true;
//                 document.getElementById("ac2").hidden = true;
//                 document.getElementById("ac3").hidden = true;
//                 document.getElementById("ac4").hidden = true;
//                 document.getElementById("ac5").hidden = true;
//                 document.getElementById("ac6").hidden = true;
//                 document.getElementById("ac7").hidden = true;
//                 document.getElementById("ac8").hidden = true;
//                 document.getElementById("uc1").hidden = true;
//                 document.getElementById("uc2").hidden = true;
//                 document.getElementById("uc3").hidden = true;
//                 document.getElementById("uc4").hidden = true;
//                 document.getElementById("u-psi1").hidden = true;
//                 document.getElementById("u-phi2").hidden = true;
//                 document.getElementById("u-phi1").hidden = true;
//                 document.getElementById("u-cnt2").hidden = true;
//
//                 document.getElementById("update-peihuoImg5").hidden = true;
//                 document.getElementById("update-peisongImg1").hidden = true;
//                 document.getElementById("update-peisongImg2").hidden = true;
//                 document.getElementById("update-peisongImg3").hidden = true;
//                 // document.getElementById("update-customerNeedText2").hidden = true;
//
//                 document.getElementById("update-peihuoImg5Renyuan").hidden = true;
//                 document.getElementById("update-peihuoImg5Riqi").hidden = true;
//                 document.getElementById("update-peisongImg1Renyuan").hidden = true;
//                 document.getElementById("update-peisongImg1Riqi").hidden = true;
//                 document.getElementById("update-peisongImg2Renyuan").hidden = true;
//                 document.getElementById("update-peisongImg2Riqi").hidden = true;
//                 document.getElementById("update-peisongImg3Renyuan").hidden = true;
//                 document.getElementById("update-peisongImg3Riqi").hidden = true;
//
//                 document.getElementById("kc").hidden = true;
//                 document.getElementById("kclry").hidden = true;
//                 document.getElementById("kcwcsj").hidden = true;
//                 document.getElementById("add-kucun").hidden = true;
//                 document.getElementById("add-kucunTextRenyuan").hidden = true;
//                 document.getElementById("add-kucunTextRiqi").hidden = true;
//                 document.getElementById("customerName").disabled=true;
//                 document.getElementById("add-customerName").remove();
//                 var div = document.getElementById('d-customerName');
//                 var textBox = document.createElement('input');
//                 textBox.id = 'add-customerName';
//                 textBox.type = 'text';
//                 textBox.name = 'customerName';
//                 textBox.class = 'form-control';
//                 textBox.autocomplete = 'off';
//                 div.appendChild(textBox);
//                 $ajax({
//                     type: 'post',
//                     url: '/psd/getloginname',
//                     async:false,
//                 }, false, '', function (res) {
//                     if (res.code == 200) {
//                         var this_name = res.data;
//                         document.getElementById("add-customerName").value = this_name;
//                         document.getElementById("add-customerNameRenyuan").value = this_name;
//                         document.getElementById("customerName").value=this_name;
//                     }
//                 })
//             }
//         }
//     })
//
//
//     $ajax({
//         type: 'post',
//         url: '/psd/getList',
//
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             setTable(res.data);
//             for (n = 0; n < res.data.length; n++) {
//                 document.getElementById("wancheng" + n).value = res.data[n].wancheng;
//                 document.getElementById("money"+n).value = res.data[n].money;
//                 document.getElementById("shoukuan"+n).value = res.data[n].shoukuan;
//                 document.getElementById("quyu"+n).value = res.data[n].quyu;
//             }
//             $("#psdTable").colResizable({
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
// // function getriqi(){
// //     const now = new Date();
// //     const year = now.getFullYear();
// //     const month = (now.getMonth() + 1).toString().padStart(2, '0');
// //     const day = now.getDate().toString().padStart(2, '0');
// //     const hours = now.getHours().toString().padStart(2, '0');
// //     const minutes = now.getMinutes().toString().padStart(2, '0');
// //     const seconds = now.getSeconds().toString().padStart(2, '0');
// // }
// function getKhmc() {
//     $ajax({
//         type: 'post',
//         url: '/user/hqxlKhmc',
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             for (var i = 0; i < res.data.length; i++) {
//                 $("#add-customerName").append("<option>" + res.data[i].company + "</option>");
//                 $("#update-customerName").append("<option>" + res.data[i].company + "</option>");
//                 $("#customerName").append("<option>" + res.data[i].company + "</option>")
//             }
//         }
//     })
// }
//
// // function getName() {
// //     $ajax({
// //         type: 'post',
// //         url: '/psd/getloginname',
// //     }, false, '', function (res) {
// //         if (res.code == 200) {
// //             var this_name = res.data;
// //             document.getElementById("add-customerNameRenyuan").value = this_name;
// //
// //             // $("#update-customerName").append("<option>" + res.data[i].company + "</option>");
// //
// //         }
// //     })
// // }
//
// $(function () {
//
//     var textarea = document.getElementById('add-customerNeedText');
//     textarea.addEventListener('blur', function () {
//         var this_textarea = $('#add-customerNeedText').val();
//         document.getElementById('add-customerNeedText1').value = this_textarea;
//
//     });
//
//     // var inp1 = document.getElementById('add-songhuoAddress');
//     // var yuanvalue1 = $('#add-songhuoAddress').val();
//     // inp1.addEventListener('blur', function () {
//     //     var invalue1 = $('#add-songhuoAddress').val();
//     //     if (invalue1 != yuanvalue1) {
//     //         var date = new Date();
//     //         var day = ("0" + date.getDate()).slice(-2);
//     //         var month = ("0" + (date.getMonth() + 1)).slice(-2);
//     //         var hh = date.getHours();
//     //         var mm = date.getMinutes();
//     //         var ss = date.getSeconds();
//     //         var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//     //
//     //         $ajax({
//     //             type: 'post',
//     //             url: '/psd/getloginname',
//     //         }, false, '', function (res) {
//     //             var this_name = res.data
//     //             document.getElementById('add-songhuoAddressRenyuan').value = this_name;
//     //         })
//     //         document.getElementById('add-songhuoAddressRiqi').value = dqrq;
//     //         document.getElementById("add-songhuoAddressRiqi").disabled = true;
//     //     }
//     // });
//     //
//     // var inp2 = document.getElementById('add-hqquyu');
//     // var yuanvalue2 = $('#add-hqquyu').val();
//     // inp2.addEventListener('blur', function () {
//     //     var invalue2 = $('#add-hqquyu').val();
//     //     if (invalue2 != yuanvalue2) {
//     //         var date = new Date();
//     //         var day = ("0" + date.getDate()).slice(-2);
//     //         var month = ("0" + (date.getMonth() + 1)).slice(-2);
//     //         var hh = date.getHours();
//     //         var mm = date.getMinutes();
//     //         var ss = date.getSeconds();
//     //         var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//     //
//     //         $ajax({
//     //             type: 'post',
//     //             url: '/psd/getloginname',
//     //         }, false, '', function (res) {
//     //             var this_name = res.data
//     //             document.getElementById('add-quyuRenyuan').value = this_name;
//     //         })
//     //         document.getElementById('add-quyuRiqi').value = dqrq;
//     //         document.getElementById("add-quyuRiqi").disabled = true;
//     //     }
//     // });
//     //
//     // var inp3 = document.getElementById('add-anzhuangAddress');
//     // var yuanvalue3 = $('#add-anzhuangAddress').val();
//     // inp3.addEventListener('blur', function () {
//     //     var invalue3 = $('#add-anzhuangAddress').val();
//     //     if (invalue3 != yuanvalue3) {
//     //         var date = new Date();
//     //         var day = ("0" + date.getDate()).slice(-2);
//     //         var month = ("0" + (date.getMonth() + 1)).slice(-2);
//     //         var hh = date.getHours();
//     //         var mm = date.getMinutes();
//     //         var ss = date.getSeconds();
//     //         var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//     //
//     //         $ajax({
//     //             type: 'post',
//     //             url: '/psd/getloginname',
//     //         }, false, '', function (res) {
//     //             var this_name = res.data
//     //             document.getElementById('add-anzhuangAddressRenyuan').value = this_name;
//     //         })
//     //         document.getElementById('add-anzhuangAddressRiqi').value = dqrq;
//     //         document.getElementById("add-anzhuangAddressRiqi").disabled = true;
//     //     }
//     // });
//     //
//     // var inp4 = document.getElementById('add-phone');
//     // var yuanvalue4 = $('#add-phone').val();
//     // inp4.addEventListener('blur', function () {
//     //     var invalue4 = $('#add-phone').val();
//     //     if (invalue4 != yuanvalue4) {
//     //         var date = new Date();
//     //         var day = ("0" + date.getDate()).slice(-2);
//     //         var month = ("0" + (date.getMonth() + 1)).slice(-2);
//     //         var hh = date.getHours();
//     //         var mm = date.getMinutes();
//     //         var ss = date.getSeconds();
//     //         var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//     //
//     //         $ajax({
//     //             type: 'post',
//     //             url: '/psd/getloginname',
//     //         }, false, '', function (res) {
//     //             var this_name = res.data
//     //             document.getElementById('add-phoneRenyuan').value = this_name;
//     //         })
//     //         document.getElementById('add-phoneRiqi').value = dqrq;
//     //         document.getElementById("add-phoneRiqi").disabled = true;
//     //     }
//     // });
//     //
//     // var inp5 = document.getElementById('add-customerOrder');
//     // var yuanvalue5 = $('#add-customerOrder').val();
//     // inp5.addEventListener('blur', function () {
//     //     var invalue5 = $('#add-customerOrder').val();
//     //     if (invalue5 != yuanvalue5) {
//     //         var date = new Date();
//     //         var day = ("0" + date.getDate()).slice(-2);
//     //         var month = ("0" + (date.getMonth() + 1)).slice(-2);
//     //         var hh = date.getHours();
//     //         var mm = date.getMinutes();
//     //         var ss = date.getSeconds();
//     //         var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//     //
//     //         $ajax({
//     //             type: 'post',
//     //             url: '/psd/getloginname',
//     //         }, false, '', function (res) {
//     //             var this_name = res.data
//     //             document.getElementById('add-customerOrderRenyuan').value = this_name;
//     //         })
//     //         document.getElementById('add-customerOrderRiqi').value = dqrq;
//     //         document.getElementById("add-customerOrderRiqi").disabled = true;
//     //     }
//     // });
//     //
//     // var inp6 = document.getElementById('add-customerNeedText');
//     // var yuanvalue6 = $('#add-customerNeedText').val();
//     // inp6.addEventListener('blur', function () {
//     //     var invalue6 = $('#add-customerNeedText').val();
//     //     if (invalue6 != yuanvalue6) {
//     //         var date = new Date();
//     //         var day = ("0" + date.getDate()).slice(-2);
//     //         var month = ("0" + (date.getMonth() + 1)).slice(-2);
//     //         var hh = date.getHours();
//     //         var mm = date.getMinutes();
//     //         var ss = date.getSeconds();
//     //         var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//     //
//     //         $ajax({
//     //             type: 'post',
//     //             url: '/psd/getloginname',
//     //         }, false, '', function (res) {
//     //             var this_name = res.data
//     //             document.getElementById('add-customerNeedTextRenyuan').value = this_name;
//     //             document.getElementById('add-customerNeedText1Renyuan').value = this_name;
//     //         })
//     //         document.getElementById('add-customerNeedTextRiqi').value = dqrq;
//     //         document.getElementById("add-customerNeedTextRiqi").disabled = true;
//     //         document.getElementById('add-customerNeedText1Riqi').value = dqrq;
//     //         document.getElementById("add-customerNeedText1Riqi").disabled = true;
//     //     }
//     // });
//     //
//     // // var inp7 = document.getElementById('add-customerNeedText1');
//     // // var yuanvalue7 = $('#add-customerNeedText1').val();
//     // // inp7.addEventListener('blur', function() {
//     // //     var invalue7 = $('#add-customerNeedText1').val();
//     // //     if (invalue7 !== yuanvalue7) {
//     // //         var date = new Date();
//     // //         var day = ("0" + date.getDate()).slice(-2);
//     // //         var month = ("0" + (date.getMonth() + 1)).slice(-2);
//     // //         var hh = date.getHours();
//     // //         var mm = date.getMinutes();
//     // //         var ss = date.getSeconds();
//     // //         var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//     // //
//     // //         $ajax({
//     // //             type: 'post',
//     // //             url: '/psd/getloginname',
//     // //         }, false, '', function (res) {
//     // //             var this_name = res.data
//     // //             document.getElementById('add-customerNeedText1Renyuan').value = this_name;
//     // //         })
//     // //         document.getElementById('add-customerNeedText1Riqi').value = dqrq;
//     // //         document.getElementById("add-customerNeedText1Riqi").disabled = true;
//     // //     }
//     // // });
//     //
//     // var inp8 = document.getElementById('add-money');
//     // var yuanvalue8 = $('#add-money').val();
//     // inp8.addEventListener('blur', function () {
//     //     var invalue8 = $('#add-money').val();
//     //     if (invalue8 != yuanvalue8) {
//     //         var date = new Date();
//     //         var day = ("0" + date.getDate()).slice(-2);
//     //         var month = ("0" + (date.getMonth() + 1)).slice(-2);
//     //         var hh = date.getHours();
//     //         var mm = date.getMinutes();
//     //         var ss = date.getSeconds();
//     //         var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//     //
//     //         $ajax({
//     //             type: 'post',
//     //             url: '/psd/getloginname',
//     //         }, false, '', function (res) {
//     //             var this_name = res.data
//     //             document.getElementById('add-moneyRenyuan').value = this_name;
//     //         })
//     //         document.getElementById('add-moneyRiqi').value = dqrq;
//     //         document.getElementById("add-moneyRiqi").disabled = true;
//     //     }
//     // });
//     //
//     // var inp9 = document.getElementById('add-shoukuan');
//     // var yuanvalue9 = $('#add-shoukuan').val();
//     // inp9.addEventListener('blur', function () {
//     //     var invalue9 = $('#add-shoukuan').val();
//     //     if (invalue9 != yuanvalue9) {
//     //         var date = new Date();
//     //         var day = ("0" + date.getDate()).slice(-2);
//     //         var month = ("0" + (date.getMonth() + 1)).slice(-2);
//     //         var hh = date.getHours();
//     //         var mm = date.getMinutes();
//     //         var ss = date.getSeconds();
//     //         var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//     //
//     //         $ajax({
//     //             type: 'post',
//     //             url: '/psd/getloginname',
//     //         }, false, '', function (res) {
//     //             var this_name = res.data
//     //             document.getElementById('add-shoukuanRenyuan').value = this_name;
//     //         })
//     //         document.getElementById('add-shoukuanRiqi').value = dqrq;
//     //         document.getElementById("add-shoukuanRiqi").disabled = true;
//     //     }
//     // });
//     //
//     // var inp10 = document.getElementById('add-wancheng');
//     // var yuanvalue10 = $('#add-wancheng').val();
//     // inp10.addEventListener('blur', function () {
//     //     var invalue10 = $('#add-wancheng').val();
//     //     if (invalue10 != yuanvalue10) {
//     //         var date = new Date();
//     //         var day = ("0" + date.getDate()).slice(-2);
//     //         var month = ("0" + (date.getMonth() + 1)).slice(-2);
//     //         var hh = date.getHours();
//     //         var mm = date.getMinutes();
//     //         var ss = date.getSeconds();
//     //         var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//     //
//     //         $ajax({
//     //             type: 'post',
//     //             url: '/psd/getloginname',
//     //         }, false, '', function (res) {
//     //             var this_name = res.data
//     //             document.getElementById('add-wanchengRenyuan').value = this_name;
//     //         })
//     //         document.getElementById('add-wanchengRiqi').value = dqrq;
//     //         document.getElementById("add-wanchengRiqi").disabled = true;
//     //     }
//     // });
//     //
//     // var inp11 = document.getElementById('fileInput1');
//     // var yuanvalue11 = $('#fileInput1').val();
//     // inp11.addEventListener('blur', function () {
//     //     var invalue11 = $('#fileInput1').val();
//     //     if (invalue11 != yuanvalue11) {
//     //         var date = new Date();
//     //         var day = ("0" + date.getDate()).slice(-2);
//     //         var month = ("0" + (date.getMonth() + 1)).slice(-2);
//     //         var hh = date.getHours();
//     //         var mm = date.getMinutes();
//     //         var ss = date.getSeconds();
//     //         var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//     //
//     //         $ajax({
//     //             type: 'post',
//     //             url: '/psd/getloginname',
//     //         }, false, '', function (res) {
//     //             var this_name = res.data
//     //             document.getElementById('add-peisongImg1Renyuan').value = this_name;
//     //         })
//     //         document.getElementById('add-peisongImg1Riqi').value = dqrq;
//     //         document.getElementById("add-peisongImg1Riqi").disabled = true;
//     //     }
//     // });
//     //
//     // var inp12 = document.getElementById('add-kucun');
//     // var yuanvalue12 = $('#add-kucun').val();
//     // inp12.addEventListener('blur', function () {
//     //     var invalue12 = $('#add-kucun').val();
//     //     if (invalue12 != yuanvalue12) {
//     //         var date = new Date();
//     //         var day = ("0" + date.getDate()).slice(-2);
//     //         var month = ("0" + (date.getMonth() + 1)).slice(-2);
//     //         var hh = date.getHours();
//     //         var mm = date.getMinutes();
//     //         var ss = date.getSeconds();
//     //         var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//     //
//     //         $ajax({
//     //             type: 'post',
//     //             url: '/psd/getloginname',
//     //         }, false, '', function (res) {
//     //             var this_name = res.data
//     //             document.getElementById('add-kucunTextRenyuan').value = this_name;
//     //         })
//     //         document.getElementById('add-kucunTextRiqi').value = dqrq;
//     //         document.getElementById("add-kucunTextRiqi").disabled = true;
//     //     }
//     // });
//     //
//     //
//     // var inupd1 = document.getElementById('update-songhuoAddress');
//     // var yuanvalue1 = $('#add-songhuoAddress').val();
//     // inupd1.addEventListener('blur', function () {
//     //     var invalue1 = $('#add-songhuoAddress').val();
//     //     if (invalue1 != yuanvalue1) {
//     //         var date = new Date();
//     //         var day = ("0" + date.getDate()).slice(-2);
//     //         var month = ("0" + (date.getMonth() + 1)).slice(-2);
//     //         var hh = date.getHours();
//     //         var mm = date.getMinutes();
//     //         var ss = date.getSeconds();
//     //         var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//     //
//     //         $ajax({
//     //             type: 'post',
//     //             url: '/psd/getloginname',
//     //         }, false, '', function (res) {
//     //             var this_name = res.data
//     //             document.getElementById('update-songhuoAddressRenyuan').value = this_name;
//     //         })
//     //         document.getElementById('update-songhuoAddressRiqi').value = dqrq;
//     //         document.getElementById("update-songhuoAddressRiqi").disabled = true;
//     //     }
//     // });
//     //
//     // var inupd2 = document.getElementById('update-hqquyu');
//     // var yuanvalue2 = $('#update-hqquyu').val();
//     // inupd2.addEventListener('blur', function () {
//     //     var invalue2 = $('#update-hqquyu').val();
//     //     if (invalue2 != yuanvalue2) {
//     //         var date = new Date();
//     //         var day = ("0" + date.getDate()).slice(-2);
//     //         var month = ("0" + (date.getMonth() + 1)).slice(-2);
//     //         var hh = date.getHours();
//     //         var mm = date.getMinutes();
//     //         var ss = date.getSeconds();
//     //         var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//     //
//     //         $ajax({
//     //             type: 'post',
//     //             url: '/psd/getloginname',
//     //         }, false, '', function (res) {
//     //             var this_name = res.data
//     //             document.getElementById('update-quyuRenyuan').value = this_name;
//     //         })
//     //         document.getElementById('update-quyuRiqi').value = dqrq;
//     //         document.getElementById("update-quyuRiqi").disabled = true;
//     //     }
//     // });
//     //
//     // var inupd3 = document.getElementById('update-anzhuangAddress');
//     // var yuanvalue3 = $('#update-anzhuangAddress').val();
//     // inupd3.addEventListener('blur', function () {
//     //     var invalue3 = $('#update-anzhuangAddress').val();
//     //     if (invalue3 != yuanvalue3) {
//     //         var date = new Date();
//     //         var day = ("0" + date.getDate()).slice(-2);
//     //         var month = ("0" + (date.getMonth() + 1)).slice(-2);
//     //         var hh = date.getHours();
//     //         var mm = date.getMinutes();
//     //         var ss = date.getSeconds();
//     //         var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//     //
//     //         $ajax({
//     //             type: 'post',
//     //             url: '/psd/getloginname',
//     //         }, false, '', function (res) {
//     //             var this_name = res.data
//     //             document.getElementById('update-anzhuangAddressRenyuan').value = this_name;
//     //         })
//     //         document.getElementById('update-anzhuangAddressRiqi').value = dqrq;
//     //         document.getElementById("update-anzhuangAddressRiqi").disabled = true;
//     //     }
//     // });
//     //
//     // var inupd4 = document.getElementById('update-phone');
//     // var yuanvalue4 = $('#update-phone').val();
//     // inupd4.addEventListener('blur', function () {
//     //     var invalue4 = $('#update-phone').val();
//     //     if (invalue4 != yuanvalue4) {
//     //         var date = new Date();
//     //         var day = ("0" + date.getDate()).slice(-2);
//     //         var month = ("0" + (date.getMonth() + 1)).slice(-2);
//     //         var hh = date.getHours();
//     //         var mm = date.getMinutes();
//     //         var ss = date.getSeconds();
//     //         var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//     //
//     //         $ajax({
//     //             type: 'post',
//     //             url: '/psd/getloginname',
//     //         }, false, '', function (res) {
//     //             var this_name = res.data
//     //             document.getElementById('update-phoneRenyuan').value = this_name;
//     //         })
//     //         document.getElementById('update-phoneRiqi').value = dqrq;
//     //         document.getElementById("update-phoneRiqi").disabled = true;
//     //     }
//     // });
//     //
//     // var inupd5 = document.getElementById('update-customerOrder');
//     // var yuanvalue5 = $('#update-customerOrder').val();
//     // inupd5.addEventListener('blur', function () {
//     //     var invalue5 = $('#update-customerOrder').val();
//     //     if (invalue5 != yuanvalue5) {
//     //         var date = new Date();
//     //         var day = ("0" + date.getDate()).slice(-2);
//     //         var month = ("0" + (date.getMonth() + 1)).slice(-2);
//     //         var hh = date.getHours();
//     //         var mm = date.getMinutes();
//     //         var ss = date.getSeconds();
//     //         var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//     //
//     //         $ajax({
//     //             type: 'post',
//     //             url: '/psd/getloginname',
//     //         }, false, '', function (res) {
//     //             var this_name = res.data
//     //             document.getElementById('update-customerOrderRenyuan').value = this_name;
//     //         })
//     //         document.getElementById('update-customerOrderRiqi').value = dqrq;
//     //         document.getElementById("update-customerOrderRiqi").disabled = true;
//     //     }
//     // });
//     //
//     // var inupd6 = document.getElementById('update-customerNeedText');
//     // var yuanvalue6 = $('#update-customerNeedText').val();
//     // inupd6.addEventListener('blur', function () {
//     //     var invalue6 = $('#update-customerNeedText').val();
//     //     if (invalue6 != yuanvalue6) {
//     //         var date = new Date();
//     //         var day = ("0" + date.getDate()).slice(-2);
//     //         var month = ("0" + (date.getMonth() + 1)).slice(-2);
//     //         var hh = date.getHours();
//     //         var mm = date.getMinutes();
//     //         var ss = date.getSeconds();
//     //         var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//     //
//     //         $ajax({
//     //             type: 'post',
//     //             url: '/psd/getloginname',
//     //         }, false, '', function (res) {
//     //             var this_name = res.data
//     //             document.getElementById('update-customerNeedTextRenyuan').value = this_name;
//     //         })
//     //         document.getElementById('update-customerNeedTextRiqi').value = dqrq;
//     //         document.getElementById("update-customerNeedTextRiqi").disabled = true;
//     //     }
//     // });
//     //
//     // var inupd7 = document.getElementById('update-customerNeedText1');
//     // var yuanvalue7 = $('#update-customerNeedText1').val();
//     // inupd7.addEventListener('blur', function () {
//     //     var invalue7 = $('#update-customerNeedText1').val();
//     //     if (invalue7 != yuanvalue7) {
//     //         var date = new Date();
//     //         var day = ("0" + date.getDate()).slice(-2);
//     //         var month = ("0" + (date.getMonth() + 1)).slice(-2);
//     //         var hh = date.getHours();
//     //         var mm = date.getMinutes();
//     //         var ss = date.getSeconds();
//     //         var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//     //
//     //         $ajax({
//     //             type: 'post',
//     //             url: '/psd/getloginname',
//     //         }, false, '', function (res) {
//     //             var this_name = res.data
//     //             document.getElementById('update-customerNeedText1Renyuan').value = this_name;
//     //         })
//     //         document.getElementById('update-customerNeedText1Riqi').value = dqrq;
//     //         document.getElementById("update-customerNeedText1Riqi").disabled = true;
//     //     }
//     // });
//     //
//     // var inupd8 = document.getElementById('update-money');
//     // var yuanvalue8 = $('#update-money').val();
//     // inupd8.addEventListener('blur', function () {
//     //     var invalue8 = $('#update-money').val();
//     //     if (invalue8 != yuanvalue8) {
//     //         var date = new Date();
//     //         var day = ("0" + date.getDate()).slice(-2);
//     //         var month = ("0" + (date.getMonth() + 1)).slice(-2);
//     //         var hh = date.getHours();
//     //         var mm = date.getMinutes();
//     //         var ss = date.getSeconds();
//     //         var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//     //
//     //         $ajax({
//     //             type: 'post',
//     //             url: '/psd/getloginname',
//     //         }, false, '', function (res) {
//     //             var this_name = res.data
//     //             document.getElementById('update-moneyRenyuan').value = this_name;
//     //         })
//     //         document.getElementById('update-moneyRiqi').value = dqrq;
//     //         document.getElementById("update-moneyRiqi").disabled = true;
//     //     }
//     // });
//     //
//     // var inupd9 = document.getElementById('update-shoukuan');
//     // var yuanvalue9 = $('#update-shoukuan').val();
//     // inupd9.addEventListener('blur', function () {
//     //     var invalue9 = $('#update-shoukuan').val();
//     //     if (invalue9 != yuanvalue9) {
//     //         var date = new Date();
//     //         var day = ("0" + date.getDate()).slice(-2);
//     //         var month = ("0" + (date.getMonth() + 1)).slice(-2);
//     //         var hh = date.getHours();
//     //         var mm = date.getMinutes();
//     //         var ss = date.getSeconds();
//     //         var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//     //
//     //         $ajax({
//     //             type: 'post',
//     //             url: '/psd/getloginname',
//     //         }, false, '', function (res) {
//     //             var this_name = res.data
//     //             document.getElementById('update-shoukuanRenyuan').value = this_name;
//     //         })
//     //         document.getElementById('update-shoukuanRiqi').value = dqrq;
//     //         document.getElementById("update-shoukuanRiqi").disabled = true;
//     //     }
//     // });
//     //
//     // var inupd10 = document.getElementById('update-wancheng');
//     // var yuanvalue10 = $('#update-wancheng').val();
//     // inupd10.addEventListener('blur', function () {
//     //     var invalue10 = $('#update-wancheng').val();
//     //     if (invalue10 != yuanvalue10) {
//     //         var date = new Date();
//     //         var day = ("0" + date.getDate()).slice(-2);
//     //         var month = ("0" + (date.getMonth() + 1)).slice(-2);
//     //         var hh = date.getHours();
//     //         var mm = date.getMinutes();
//     //         var ss = date.getSeconds();
//     //         var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//     //
//     //         $ajax({
//     //             type: 'post',
//     //             url: '/psd/getloginname',
//     //         }, false, '', function (res) {
//     //             var this_name = res.data
//     //             document.getElementById('update-wanchengRenyuan').value = this_name;
//     //         })
//     //         document.getElementById('update-wanchengRiqi').value = dqrq;
//     //         document.getElementById("update-wanchengRiqi").disabled = true;
//     //     }
//     // });
//     //
//     var inp1 = document.getElementById('add-songhuoAddress');
//     var yuanvalue1 = $('#add-songhuoAddress').val();
//     inp1.addEventListener('blur', function() {
//         var invalue1 = $('#add-songhuoAddress').val();
//         if (invalue1 != yuanvalue1) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('add-songhuoAddressRenyuan').value = this_name;
//             })
//             document.getElementById('add-songhuoAddressRiqi').value = dqrq;
//             document.getElementById("add-songhuoAddressRiqi").disabled = true;
//         }
//     });
//
//     var inp1 = document.getElementById('update-songhuoAddress');
//     var yuanvalue1 = $('#update-songhuoAddress').val();
//     inp1.addEventListener('blur', function() {
//         var invalue1 = $('#update-songhuoAddress').val();
//         if (invalue1 != yuanvalue1) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-songhuoAddressRenyuan').value = this_name;
//             })
//             document.getElementById('update-songhuoAddressRiqi').value = dqrq;
//             document.getElementById("update-songhuoAddressRiqi").disabled = true;
//         }
//     });
//
//     var inp2 = document.getElementById('add-hqquyu');
//     var yuanvalue2 = $('#add-hqquyu').val();
//     inp2.addEventListener('blur', function() {
//         var invalue2 = $('#add-hqquyu').val();
//         if (invalue2 != yuanvalue2) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('add-quyuRenyuan').value = this_name;
//             })
//             document.getElementById('add-quyuRiqi').value = dqrq;
//             document.getElementById("add-quyuRiqi").disabled = true;
//         }
//     });
//
//     var inp2 = document.getElementById('update-hqquyu');
//     var yuanvalue2 = $('#update-hqquyu').val();
//     inp2.addEventListener('blur', function() {
//         var invalue2 = $('#update-hqquyu').val();
//         if (invalue2 != yuanvalue2) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-quyuRenyuan').value = this_name;
//             })
//             document.getElementById('update-quyuRiqi').value = dqrq;
//             document.getElementById("update-quyuRiqi").disabled = true;
//         }
//     });
//
//     var inp3 = document.getElementById('add-anzhuangAddress');
//     var yuanvalue3 = $('#add-anzhuangAddress').val();
//     inp3.addEventListener('blur', function() {
//         var invalue3 = $('#add-anzhuangAddress').val();
//         if (invalue3 != yuanvalue3) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('add-anzhuangAddressRenyuan').value = this_name;
//             })
//             document.getElementById('add-anzhuangAddressRiqi').value = dqrq;
//             document.getElementById("add-anzhuangAddressRiqi").disabled = true;
//         }
//     });
//
//     var inp3 = document.getElementById('update-anzhuangAddress');
//     var yuanvalue3 = $('#update-anzhuangAddress').val();
//     inp3.addEventListener('blur', function() {
//         var invalue3 = $('#update-anzhuangAddress').val();
//         if (invalue3 != yuanvalue3) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-anzhuangAddressRenyuan').value = this_name;
//             })
//             document.getElementById('update-anzhuangAddressRiqi').value = dqrq;
//             document.getElementById("update-anzhuangAddressRiqi").disabled = true;
//         }
//     });
//
//     var inp4 = document.getElementById('add-phone');
//     var yuanvalue4 = $('#add-phone').val();
//     inp4.addEventListener('blur', function() {
//         var invalue4 = $('#add-phone').val();
//         if (invalue4 != yuanvalue4) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('add-phoneRenyuan').value = this_name;
//             })
//             document.getElementById('add-phoneRiqi').value = dqrq;
//             document.getElementById("add-phoneRiqi").disabled = true;
//         }
//     });
//
//     var inp4 = document.getElementById('update-phone');
//     var yuanvalue4 = $('#update-phone').val();
//     inp4.addEventListener('blur', function() {
//         var invalue4 = $('#update-phone').val();
//         if (invalue4 != yuanvalue4) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-phoneRenyuan').value = this_name;
//             })
//             document.getElementById('update-phoneRiqi').value = dqrq;
//             document.getElementById("update-phoneRiqi").disabled = true;
//         }
//     });
//
//     var inp5 = document.getElementById('add-customerOrder');
//     var yuanvalue5 = $('#add-customerOrder').val();
//     inp5.addEventListener('blur', function() {
//         var invalue5 = $('#add-customerOrder').val();
//         if (invalue5 != yuanvalue5) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('add-customerOrderRenyuan').value = this_name;
//             })
//             document.getElementById('add-customerOrderRiqi').value = dqrq;
//             document.getElementById("add-customerOrderRiqi").disabled = true;
//         }
//     });
//
//     var inp5 = document.getElementById('update-customerOrder');
//     var yuanvalue5 = $('#update-customerOrder').val();
//     inp5.addEventListener('blur', function() {
//         var invalue5 = $('#update-customerOrder').val();
//         if (invalue5 != yuanvalue5) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-customerOrderRenyuan').value = this_name;
//             })
//             document.getElementById('update-customerOrderRiqi').value = dqrq;
//             document.getElementById("update-customerOrderRiqi").disabled = true;
//         }
//     });
//
//     var inp6 = document.getElementById('add-customerNeedText');
//     var yuanvalue6 = $('#add-customerNeedText').val();
//     inp6.addEventListener('blur', function() {
//         var invalue6 = $('#add-customerNeedText').val();
//         if (invalue6 != yuanvalue6) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('add-customerNeedTextRenyuan').value = this_name;
//                 document.getElementById('add-customerNeedText1Renyuan').value = this_name;
//             })
//             document.getElementById('add-customerNeedTextRiqi').value = dqrq;
//             document.getElementById("add-customerNeedTextRiqi").disabled = true;
//             document.getElementById('add-customerNeedText1Riqi').value = dqrq;
//             document.getElementById("add-customerNeedText1Riqi").disabled = true;
//         }
//     });
//
//     var inp6 = document.getElementById('update-customerNeedText');
//     var yuanvalue6 = $('#update-customerNeedText').val();
//     inp6.addEventListener('blur', function() {
//         var invalue6 = $('#update-customerNeedText').val();
//         if (invalue6 != yuanvalue6) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-customerNeedTextRenyuan').value = this_name;
//                 document.getElementById('update-customerNeedText1Renyuan').value = this_name;
//             })
//             document.getElementById('update-customerNeedTextRiqi').value = dqrq;
//             document.getElementById("update-customerNeedTextRiqi").disabled = true;
//             document.getElementById('update-customerNeedText1Riqi').value = dqrq;
//             document.getElementById("update-customerNeedText1Riqi").disabled = true;
//         }
//     });
//
//     var inp8 = document.getElementById('add-money');
//     var yuanvalue8 = $('#add-money').val();
//     inp8.addEventListener('blur', function() {
//         var invalue8 = $('#add-money').val();
//         if (invalue8 != yuanvalue8) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('add-moneyRenyuan').value = this_name;
//             })
//             document.getElementById('add-moneyRiqi').value = dqrq;
//             document.getElementById("add-moneyRiqi").disabled = true;
//         }
//     });
//
//     var inp8 = document.getElementById('update-money');
//     var yuanvalue8 = $('#update-money').val();
//     inp8.addEventListener('blur', function() {
//         var invalue8 = $('#update-money').val();
//         if (invalue8 != yuanvalue8) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-moneyRenyuan').value = this_name;
//             })
//             document.getElementById('update-moneyRiqi').value = dqrq;
//             document.getElementById("update-moneyRiqi").disabled = true;
//         }
//     });
//
//     var inp9 = document.getElementById('add-shoukuan');
//     var yuanvalue9 = $('#add-shoukuan').val();
//     inp9.addEventListener('blur', function() {
//         var invalue9 = $('#add-shoukuan').val();
//         if (invalue9 != yuanvalue9) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('add-shoukuanRenyuan').value = this_name;
//             })
//             document.getElementById('add-shoukuanRiqi').value = dqrq;
//             document.getElementById("add-shoukuanRiqi").disabled = true;
//         }
//     });
//
//     var inp9 = document.getElementById('update-shoukuan');
//     var yuanvalue9 = $('#update-shoukuan').val();
//     inp9.addEventListener('blur', function() {
//         var invalue9 = $('#update-shoukuan').val();
//         if (invalue9 != yuanvalue9) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-shoukuanRenyuan').value = this_name;
//             })
//             document.getElementById('update-shoukuanRiqi').value = dqrq;
//             document.getElementById("update-shoukuanRiqi").disabled = true;
//         }
//     });
//
//     var inp10 = document.getElementById('add-wancheng');
//     var yuanvalue10 = $('#add-wancheng').val();
//     inp10.addEventListener('blur', function() {
//         var invalue10 = $('#add-wancheng').val();
//         if (invalue10 != yuanvalue10) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('add-wanchengRenyuan').value = this_name;
//             })
//             document.getElementById('add-wanchengRiqi').value = dqrq;
//             document.getElementById("add-wanchengRiqi").disabled = true;
//         }
//     });
//
//     var inp10 = document.getElementById('update-wancheng');
//     var yuanvalue10 = $('#update-wancheng').val();
//     inp10.addEventListener('blur', function() {
//         var invalue10 = $('#update-wancheng').val();
//         if (invalue10 != yuanvalue10) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-wanchengRenyuan').value = this_name;
//             })
//             document.getElementById('update-wanchengRiqi').value = dqrq;
//             document.getElementById("update-wanchengRiqi").disabled = true;
//         }
//     });
//
//     var inp12 = document.getElementById('add-kucun');
//     var yuanvalue12 = $('#add-kucun').val();
//     inp12.addEventListener('blur', function() {
//         var invalue12 = $('#add-kucun').val();
//         if (invalue12 != yuanvalue12) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('add-kucunTextRenyuan').value = this_name;
//             })
//             document.getElementById('add-kucunTextRiqi').value = dqrq;
//             document.getElementById("add-kucunTextRiqi").disabled = true;
//         }
//     });
//
//     var inp12 = document.getElementById('update-kucun');
//     var yuanvalue12 = $('#update-kucun').val();
//     inp12.addEventListener('blur', function() {
//         var invalue12 = $('#update-kucun').val();
//         if (invalue12 != yuanvalue12) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-kucunTextRenyuan').value = this_name;
//             })
//             document.getElementById('update-kucunTextRiqi').value = dqrq;
//             document.getElementById("update-kucunTextRiqi").disabled = true;
//         }
//     });
//
//     var inupd1 = document.getElementById('update-songhuoAddress');
//     var yuanvalue1 = $('#add-songhuoAddress').val();
//     inupd1.addEventListener('blur', function() {
//         var invalue1 = $('#add-songhuoAddress').val();
//         if (invalue1 != yuanvalue1) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-songhuoAddressRenyuan').value = this_name;
//             })
//             document.getElementById('update-songhuoAddressRiqi').value = dqrq;
//             document.getElementById("update-songhuoAddressRiqi").disabled = true;
//         }
//     });
//
//     var inupd2 = document.getElementById('update-hqquyu');
//     var yuanvalue2 = $('#update-hqquyu').val();
//     inupd2.addEventListener('blur', function() {
//         var invalue2 = $('#update-hqquyu').val();
//         if (invalue2 != yuanvalue2) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-quyuRenyuan').value = this_name;
//             })
//             document.getElementById('update-quyuRiqi').value = dqrq;
//             document.getElementById("update-quyuRiqi").disabled = true;
//         }
//     });
//
//     var inupd3 = document.getElementById('update-anzhuangAddress');
//     var yuanvalue3 = $('#update-anzhuangAddress').val();
//     inupd3.addEventListener('blur', function() {
//         var invalue3 = $('#update-anzhuangAddress').val();
//         if (invalue3 != yuanvalue3) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-anzhuangAddressRenyuan').value = this_name;
//             })
//             document.getElementById('update-anzhuangAddressRiqi').value = dqrq;
//             document.getElementById("update-anzhuangAddressRiqi").disabled = true;
//         }
//     });
//
//     var inupd4 = document.getElementById('update-phone');
//     var yuanvalue4 = $('#update-phone').val();
//     inupd4.addEventListener('blur', function() {
//         var invalue4 = $('#update-phone').val();
//         if (invalue4 != yuanvalue4) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-phoneRenyuan').value = this_name;
//             })
//             document.getElementById('update-phoneRiqi').value = dqrq;
//             document.getElementById("update-phoneRiqi").disabled = true;
//         }
//     });
//
//     var inupd5 = document.getElementById('update-customerOrder');
//     var yuanvalue5 = $('#update-customerOrder').val();
//     inupd5.addEventListener('blur', function() {
//         var invalue5 = $('#update-customerOrder').val();
//         if (invalue5 != yuanvalue5) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-customerOrderRenyuan').value = this_name;
//             })
//             document.getElementById('update-customerOrderRiqi').value = dqrq;
//             document.getElementById("update-customerOrderRiqi").disabled = true;
//         }
//     });
//
//     var inupd6 = document.getElementById('update-customerNeedText');
//     var yuanvalue6 = $('#update-customerNeedText').val();
//     inupd6.addEventListener('blur', function() {
//         var invalue6 = $('#update-customerNeedText').val();
//         if (invalue6 != yuanvalue6) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-customerNeedTextRenyuan').value = this_name;
//             })
//             document.getElementById('update-customerNeedTextRiqi').value = dqrq;
//             document.getElementById("update-customerNeedTextRiqi").disabled = true;
//         }
//     });
//
//     var inupd7 = document.getElementById('update-customerNeedText1');
//     var yuanvalue7 = $('#update-customerNeedText1').val();
//     inupd7.addEventListener('blur', function() {
//         var invalue7 = $('#update-customerNeedText1').val();
//         if (invalue7 != yuanvalue7) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-customerNeedText1Renyuan').value = this_name;
//             })
//             document.getElementById('update-customerNeedText1Riqi').value = dqrq;
//             document.getElementById("update-customerNeedText1Riqi").disabled = true;
//         }
//     });
//
//     var inupd8 = document.getElementById('update-money');
//     var yuanvalue8 = $('#update-money').val();
//     inupd8.addEventListener('blur', function() {
//         var invalue8 = $('#update-money').val();
//         if (invalue8 != yuanvalue8) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-moneyRenyuan').value = this_name;
//             })
//             document.getElementById('update-moneyRiqi').value = dqrq;
//             document.getElementById("update-moneyRiqi").disabled = true;
//         }
//     });
//
//     var inupd9 = document.getElementById('update-shoukuan');
//     var yuanvalue9 = $('#update-shoukuan').val();
//     inupd9.addEventListener('blur', function() {
//         var invalue9 = $('#update-shoukuan').val();
//         if (invalue9 != yuanvalue9) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-shoukuanRenyuan').value = this_name;
//             })
//             document.getElementById('update-shoukuanRiqi').value = dqrq;
//             document.getElementById("update-shoukuanRiqi").disabled = true;
//         }
//     });
//
//     var inupd10 = document.getElementById('update-wancheng');
//     var yuanvalue10 = $('#update-wancheng').val();
//     inupd10.addEventListener('blur', function() {
//         var invalue10 = $('#update-wancheng').val();
//         if (invalue10 != yuanvalue10) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-wanchengRenyuan').value = this_name;
//             })
//             document.getElementById('update-wanchengRiqi').value = dqrq;
//             document.getElementById("update-wanchengRiqi").disabled = true;
//         }
//     });
//
//     var inupd11 = document.getElementById('fileInput1');
//     var yuanvalue11 = $('#fileInput1').val();
//     inupd11.addEventListener('blur', function() {
//         var invalue11 = $('#fileInput1').val();
//         if (invalue11 != yuanvalue11) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('add-peihuoImg1Renyuan').value = this_name;
//             })
//             document.getElementById('add-peihuoImg1Riqi').value = dqrq;
//             document.getElementById("add-peihuoImg1Riqi").disabled = true;
//         }
//     });
//
//     var inupd11 = document.getElementById('fileInput2');
//     var yuanvalue11 = $('#fileInput2').val();
//     inupd11.addEventListener('blur', function() {
//         var invalue11 = $('#fileInput2').val();
//         if (invalue11 != yuanvalue11) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('add-peihuoImg2Renyuan').value = this_name;
//             })
//             document.getElementById('add-peihuoImg2Riqi').value = dqrq;
//             document.getElementById("add-peihuoImg2Riqi").disabled = true;
//         }
//     });
//
//     var inupd11 = document.getElementById('fileInput3');
//     var yuanvalue11 = $('#fileInput3').val();
//     inupd11.addEventListener('blur', function() {
//         var invalue11 = $('#fileInput3').val();
//         if (invalue11 != yuanvalue11) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('add-peihuoImg3Renyuan').value = this_name;
//             })
//             document.getElementById('add-peihuoImg3Riqi').value = dqrq;
//             document.getElementById("add-peihuoImg3Riqi").disabled = true;
//         }
//     });
//
//     var inupd11 = document.getElementById('fileInput4');
//     var yuanvalue11 = $('#fileInput4').val();
//     inupd11.addEventListener('blur', function() {
//         var invalue11 = $('#fileInput4').val();
//         if (invalue11 != yuanvalue11) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('add-peihuoImg4Renyuan').value = this_name;
//             })
//             document.getElementById('add-peihuoImg4Riqi').value = dqrq;
//             document.getElementById("add-peihuoImg4Riqi").disabled = true;
//         }
//     });
//
//     var inupd11 = document.getElementById('fileInput5');
//     var yuanvalue11 = $('#fileInput5').val();
//     inupd11.addEventListener('blur', function() {
//         var invalue11 = $('#fileInput5').val();
//         if (invalue11 != yuanvalue11) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('add-peihuoImg5Renyuan').value = this_name;
//             })
//             document.getElementById('add-peihuoImg5Riqi').value = dqrq;
//             document.getElementById("add-peihuoImg5Riqi").disabled = true;
//         }
//     });
//
//     var inupd11 = document.getElementById('fileInput6');
//     var yuanvalue11 = $('#fileInput6').val();
//     inupd11.addEventListener('blur', function() {
//         var invalue11 = $('#fileInput6').val();
//         if (invalue11 != yuanvalue11) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('add-peisongImg1Renyuan').value = this_name;
//             })
//             document.getElementById('add-peisongImg1Riqi').value = dqrq;
//             document.getElementById("add-peisongImg1Riqi").disabled = true;
//         }
//     });
//
//     var inupd11 = document.getElementById('fileInput7');
//     var yuanvalue11 = $('#fileInput7').val();
//     inupd11.addEventListener('blur', function() {
//         var invalue11 = $('#fileInput7').val();
//         if (invalue11 != yuanvalue11) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('add-peisongImg2Renyuan').value = this_name;
//             })
//             document.getElementById('add-peisongImg2Riqi').value = dqrq;
//             document.getElementById("add-peisongImg2Riqi").disabled = true;
//         }
//     });
//
//     var inupd11 = document.getElementById('fileInput8');
//     var yuanvalue11 = $('#fileInput8').val();
//     inupd11.addEventListener('blur', function() {
//         var invalue11 = $('#fileInput8').val();
//         if (invalue11 != yuanvalue11) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('add-peisongImg3Renyuan').value = this_name;
//             })
//             document.getElementById('add-peisongImg3Riqi').value = dqrq;
//             document.getElementById("add-peisongImg3Riqi").disabled = true;
//         }
//     });
//
//     // --------------编辑
//     var upd = document.getElementById('update-customerName');
//     var yuanupdvalue = $('#update-customerName').val();
//     upd.addEventListener('blur', function() {
//         var updvalue = $('#update-customerName').val();
//         if (updvalue != yuanupdvalue) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-customerNameRenyuan').value = this_name;
//             })
//             document.getElementById('update-customerNameRiqi').value = dqrq;
//             document.getElementById('update-customerNameRiqi').disabled = true;
//         }
//     });
//
//     var upd = document.getElementById('update-customerNeedText');
//     var yuanupdvalue = $('#update-customerNeedText').val();
//     upd.addEventListener('blur', function() {
//         var updvalue = $('#update-customerNeedText').val();
//         if (updvalue != yuanupdvalue) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-customerNeedTextRenyuan').value = this_name;
//             })
//             document.getElementById('update-customerNeedTextRiqi').value = dqrq;
//             document.getElementById('update-customerNeedTextRiqi').disabled = true;
//         }
//     });
//
//     var upd = document.getElementById('update-customerNeedText1');
//     var yuanupdvalue = $('#update-customerNeedText1').val();
//     upd.addEventListener('blur', function() {
//         var updvalue = $('#update-customerNeedText1').val();
//         if (updvalue != yuanupdvalue) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 // document.getElementById('update-customerNeedTextRenyuan').value = this_name;
//             })
//             document.getElementById('update-customerNeedText1Riqi').value = dqrq;
//             document.getElementById('update-customerNeedText1Riqi').disabled = true;
//         }
//     });
//
//     var upd = document.getElementById('update-songhuoAddress');
//     var yuanupdvalue = $('#update-songhuoAddress').val();
//     upd.addEventListener('blur', function() {
//         var updvalue = $('#update-songhuoAddress').val();
//         if (updvalue != yuanupdvalue) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-songhuoAddressRenyuan').value = this_name;
//             })
//             document.getElementById('update-songhuoAddressRiqi').value = dqrq;
//             document.getElementById('update-songhuoAddressRiqi').disabled = true;
//         }
//     });
//
//     var upd = document.getElementById('update-anzhuangAddress');
//     var yuanupdvalue = $('#update-anzhuangAddress').val();
//     upd.addEventListener('blur', function() {
//         var updvalue = $('#update-anzhuangAddress').val();
//         if (updvalue != yuanupdvalue) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-anzhuangAddressRenyuan').value = this_name;
//             })
//             document.getElementById('update-anzhuangAddressRiqi').value = dqrq;
//             document.getElementById('update-anzhuangAddressRiqi').disabled = true;
//         }
//     });
//
//     var upd = document.getElementById('update-phone');
//     var yuanupdvalue = $('#update-phone').val();
//     upd.addEventListener('blur', function() {
//         var updvalue = $('#update-phone').val();
//         if (updvalue != yuanupdvalue) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-phoneRenyuan').value = this_name;
//             })
//             document.getElementById('update-phoneRiqi').value = dqrq;
//             document.getElementById('update-phoneRiqi').disabled = true;
//         }
//     });
//
//     var upd = document.getElementById('update-customerOrder');
//     var yuanupdvalue = $('#update-customerOrder').val();
//     upd.addEventListener('blur', function() {
//         var updvalue = $('#update-customerOrder').val();
//         if (updvalue != yuanupdvalue) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-customerOrderRenyuan').value = this_name;
//             })
//             document.getElementById('update-customerOrderRiqi').value = dqrq;
//             document.getElementById('update-customerOrderRiqi').disabled = true;
//         }
//     });
//
//     // var upd = document.getElementById('update-songhuoDanhao');
//     // var yuanupdvalue = $('#update-songhuoDanhao').val();
//     // upd.addEventListener('blur', function() {
//     //     var updvalue = $('#update-songhuoDanhao').val();
//     //     if (updvalue != yuanupdvalue) {
//     //         var date = new Date();
//     //         var day = ("0" + date.getDate()).slice(-2);
//     //         var month = ("0" + (date.getMonth() + 1)).slice(-2);
//     //         var hh = date.getHours();
//     //         var mm = date.getMinutes();
//     //         var ss = date.getSeconds();
//     //         var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//     //
//     //         $ajax({
//     //             type: 'post',
//     //             url: '/psd/getloginname',
//     //         }, false, '', function (res) {
//     //             var this_name = res.data
//     //             document.getElementById('update-songhuoDanhaoRenyuan').value = this_name;
//     //         })
//     //         document.getElementById('update-songhuoDanhaoRiqi').value = dqrq;
//     //         document.getElementById('update-songhuoDanhaoRiqi').disabled = true;
//     //     }
//     // });
//
//     var upd = document.getElementById('update-wancheng');
//     var yuanupdvalue = $('#update-wancheng').val();
//     upd.addEventListener('blur', function() {
//         var updvalue = $('#update-wancheng').val();
//         if (updvalue != yuanupdvalue) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-wanchengRenyuan').value = this_name;
//             })
//             document.getElementById('update-wanchengRiqi').value = dqrq;
//             document.getElementById('update-wanchengRiqi').disabled = true;
//         }
//     });
//
//     var upd = document.getElementById('update-money');
//     var yuanupdvalue = $('#update-money').val();
//     upd.addEventListener('blur', function() {
//         var updvalue = $('#update-money').val();
//         if (updvalue != yuanupdvalue) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-moneyRenyuan').value = this_name;
//             })
//             document.getElementById('update-moneyRiqi').value = dqrq;
//             document.getElementById('update-moneyRiqi').disabled = true;
//         }
//     });
//
//     var upd = document.getElementById('update-shoukuan');
//     var yuanupdvalue = $('#update-shoukuan').val();
//     upd.addEventListener('blur', function() {
//         var updvalue = $('#update-shoukuan').val();
//         if (updvalue != yuanupdvalue) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-shoukuanRenyuan').value = this_name;
//             })
//             document.getElementById('update-shoukuanRiqi').value = dqrq;
//             document.getElementById('update-shoukuanRiqi').disabled = true;
//         }
//     });
//
//     var upd = document.getElementById('update-kucun');
//     var yuanupdvalue = $('#update-kucun').val();
//     upd.addEventListener('blur', function() {
//         var updvalue = $('#update-kucun').val();
//         if (updvalue != yuanupdvalue) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-kucunTextRenyuan').value = this_name;
//             })
//             document.getElementById('update-kucunTextRiqi').value = dqrq;
//             document.getElementById('update-kucunTextRiqi').disabled = true;
//         }
//     });
//
//     var upd = document.getElementById('update-hqquyu');
//     var yuanupdvalue = $('#update-hqquyu').val();
//     upd.addEventListener('blur', function() {
//         var updvalue = $('#update-hqquyu').val();
//         if (updvalue != yuanupdvalue) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-quyuRenyuan').value = this_name;
//             })
//             document.getElementById('update-quyuRiqi').value = dqrq;
//             document.getElementById('update-quyuRiqi').disabled = true;
//         }
//     });
//
//     var upd = document.getElementById('fileInput9');
//     var yuanupdvalue = $('#fileInput9').val();
//     upd.addEventListener('blur', function() {
//         var updvalue = $('#fileInput9').val();
//         if (updvalue != yuanupdvalue) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-peihuoImg1Renyuan').value = this_name;
//             })
//             document.getElementById('update-peihuoImg1Riqi').value = dqrq;
//             document.getElementById('update-peihuoImg1Riqi').disabled = true;
//         }
//     });
//
//     var upd = document.getElementById('fileInput10');
//     var yuanupdvalue = $('#fileInput10').val();
//     upd.addEventListener('blur', function() {
//         var updvalue = $('#fileInput10').val();
//         if (updvalue != yuanupdvalue) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-peihuoImg2Renyuan').value = this_name;
//             })
//             document.getElementById('update-peihuoImg2Riqi').value = dqrq;
//             document.getElementById('update-peihuoImg2Riqi').disabled = true;
//         }
//     });
//
//     var upd = document.getElementById('fileInput11');
//     var yuanupdvalue = $('#fileInput11').val();
//     upd.addEventListener('blur', function() {
//         var updvalue = $('#fileInput11').val();
//         if (updvalue != yuanupdvalue) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-peihuoImg3Renyuan').value = this_name;
//             })
//             document.getElementById('update-peihuoImg3Riqi').value = dqrq;
//             document.getElementById('update-peihuoImg3Riqi').disabled = true;
//         }
//     });
//
//     var upd = document.getElementById('fileInput12');
//     var yuanupdvalue = $('#fileInput12').val();
//     upd.addEventListener('blur', function() {
//         var updvalue = $('#fileInput12').val();
//         if (updvalue != yuanupdvalue) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-peihuoImg4Renyuan').value = this_name;
//             })
//             document.getElementById('update-peihuoImg4Riqi').value = dqrq;
//             document.getElementById('update-peihuoImg4Riqi').disabled = true;
//         }
//     });
//
//     var upd = document.getElementById('fileInput13');
//     var yuanupdvalue = $('#fileInput13').val();
//     upd.addEventListener('blur', function() {
//         var updvalue = $('#fileInput13').val();
//         if (updvalue != yuanupdvalue) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-peihuoImg5Renyuan').value = this_name;
//             })
//             document.getElementById('update-peihuoImg5Riqi').value = dqrq;
//             document.getElementById('update-peihuoImg5Riqi').disabled = true;
//         }
//     });
//
//     var upd = document.getElementById('fileInput14');
//     var yuanupdvalue = $('#fileInput14').val();
//     upd.addEventListener('blur', function() {
//         var updvalue = $('#fileInput14').val();
//         if (updvalue != yuanupdvalue) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-peisongImg1Renyuan').value = this_name;
//             })
//             document.getElementById('update-peisongImg1Riqi').value = dqrq;
//             document.getElementById('update-peisongImg1Riqi').disabled = true;
//         }
//     });
//
//     var upd = document.getElementById('fileInput26');
//     var yuanupdvalue = $('#fileInput26').val();
//     upd.addEventListener('blur', function() {
//         var updvalue = $('#fileInput26').val();
//         if (updvalue != yuanupdvalue) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-peisongImg2Renyuan').value = this_name;
//             })
//             document.getElementById('update-peisongImg2Riqi').value = dqrq;
//             document.getElementById('update-peisongImg2Riqi').disabled = true;
//         }
//     });
//
//     var upd = document.getElementById('fileInput15');
//     var yuanupdvalue = $('#fileInput15').val();
//     upd.addEventListener('blur', function() {
//         var updvalue = $('#fileInput15').val();
//         if (updvalue != yuanupdvalue) {
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             var hh = date.getHours();
//             var mm = date.getMinutes();
//             var ss = date.getSeconds();
//             var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//
//             $ajax({
//                 type: 'post',
//                 url: '/psd/getloginname',
//             }, false, '', function (res) {
//                 var this_name = res.data
//                 document.getElementById('update-peisongImg3Renyuan').value = this_name;
//             })
//             document.getElementById('update-peisongImg3Riqi').value = dqrq;
//             document.getElementById('update-peisongImg3Riqi').disabled = true;
//         }
//     });
//     // var inupd11 = document.getElementById('fileInput43');
//     // var yuanvalue11 = $('#fileInput43').val();
//     // inupd11.addEventListener('blur', function () {
//     //     var invalue11 = $('#fileInput43').val();
//     //     if (invalue11 != yuanvalue11) {
//     //         var date = new Date();
//     //         var day = ("0" + date.getDate()).slice(-2);
//     //         var month = ("0" + (date.getMonth() + 1)).slice(-2);
//     //         var hh = date.getHours();
//     //         var mm = date.getMinutes();
//     //         var ss = date.getSeconds();
//     //         var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
//     //
//     //         $ajax({
//     //             type: 'post',
//     //             url: '/psd/getloginname',
//     //         }, false, '', function (res) {
//     //             var this_name = res.data
//     //             document.getElementById('update-peisongImg1Renyuan').value = this_name;
//     //         })
//     //         document.getElementById('update-peisongImg1Riqi').value = dqrq;
//     //         document.getElementById("update-peisongImg1Riqi").disabled = true;
//     //     }
//     // });
//
//
//     $ajax({
//         type: 'post',
//         url: '/user/getUserName',
//     }, false, '', function (res) {
//         var this_username = res.data
//         document.getElementById("dlm").innerText = this_username;
//     })
//
//     getList();
//     getKhmc();
//     // getName();
//     // getriqi();
//     setTable();
//     // getkucun();
//     getquyuxl();
var idd;
var num;
var select_qy = [];
var name="";

function getPower() {
    $ajax({
        type: 'post',
        url: '/user/getPower',
    }, false, '', function (res) {
        if (res.code == 200) {
            var power = res.data;
            // if (power == "客户" || power == "操作员") {
            //     document.getElementById("update-customerNeedText").disabled = true;
            //     document.getElementById("update-customerNeedText1").disabled = true;
            //
            // }
        }
    })
}
function clearFileValue(input) {
    input.outerHTML = input.outerHTML;
}



function getPowerKehu() {
    $ajax({
        type: 'post',
        url: '/user/getPower',

    }, false, '', function (res) {
        if (res.code == 200) {
            var power = res.data;
            if (power == "客户") {
                document.getElementById("update-wancheng").disabled = true;
                document.getElementById("update-shoukuan").disabled = true;
                document.getElementById("update-kucun").hidden = true;
                document.getElementById("add-shoukuan").hidden = true;
                document.getElementById("add-customerName").disabled = true;
                document.getElementById("add-wancheng").hidden = true;
                // document.getElementById("customerName").disabled = true;
                document.getElementById("ukc").hidden = true;
                document.getElementById("a-psi1").hidden = true;
                document.getElementById("a-phi2").hidden = true;
                document.getElementById("a-phi1").hidden = true;
                document.getElementById("a-cnt2").hidden = true;

                document.getElementById("add-peihuoImg5").hidden = true;
                document.getElementById("add-peisongImg1").hidden = true;
                document.getElementById("add-peisongImg2").hidden = true;
                document.getElementById("add-peisongImg3").hidden = true;

                document.getElementById("add-peihuoImg5Renyuan").hidden = true;
                document.getElementById("add-peihuoImg5Riqi").hidden = true;
                document.getElementById("add-peisongImg1Renyuan").hidden = true;
                document.getElementById("add-peisongImg1Riqi").hidden = true;
                document.getElementById("add-peisongImg2Renyuan").hidden = true;
                document.getElementById("add-peisongImg2Riqi").hidden = true;
                document.getElementById("add-peisongImg3Renyuan").hidden = true;
                document.getElementById("add-peisongImg3Riqi").hidden = true;
                document.getElementById("ac1").hidden = true;
                document.getElementById("ac2").hidden = true;
                document.getElementById("ac3").hidden = true;
                document.getElementById("ac4").hidden = true;
                document.getElementById("ac5").hidden = true;
                document.getElementById("ac6").hidden = true;
                document.getElementById("ac7").hidden = true;
                document.getElementById("ac8").hidden = true;
                document.getElementById("uc1").hidden = true;
                document.getElementById("uc2").hidden = true;
                document.getElementById("uc3").hidden = true;
                document.getElementById("uc4").hidden = true;
                document.getElementById("u-psi1").hidden = true;
                document.getElementById("u-phi2").hidden = true;
                document.getElementById("u-phi1").hidden = true;
                document.getElementById("u-cnt2").hidden = true;

                document.getElementById("update-peihuoImg5").hidden = true;
                document.getElementById("update-peisongImg1").hidden = true;
                document.getElementById("update-peisongImg2").hidden = true;
                document.getElementById("update-peisongImg3").hidden = true;
                // document.getElementById("update-customerNeedText2").hidden = true;

                document.getElementById("update-peihuoImg5Renyuan").hidden = true;
                document.getElementById("update-peihuoImg5Riqi").hidden = true;
                document.getElementById("update-peisongImg1Renyuan").hidden = true;
                document.getElementById("update-peisongImg1Riqi").hidden = true;
                document.getElementById("update-peisongImg2Renyuan").hidden = true;
                document.getElementById("update-peisongImg2Riqi").hidden = true;
                document.getElementById("update-peisongImg3Renyuan").hidden = true;
                document.getElementById("update-peisongImg3Riqi").hidden = true;

                document.getElementById("kc").hidden = true;
                document.getElementById("kclry").hidden = true;
                document.getElementById("kcwcsj").hidden = true;
                document.getElementById("add-kucun").hidden = true;
                document.getElementById("add-kucunTextRenyuan").hidden = true;
                document.getElementById("add-kucunTextRiqi").hidden = true;
                // document.getElementById("customerName").disabled=true;
                document.getElementById("add-customerName").remove();
                var div = document.getElementById('d-customerName');
                var textBox = document.createElement('input');
                textBox.id = 'add-customerName';
                textBox.type = 'text';
                textBox.name = 'customerName';
                textBox.class = 'form-control';
                textBox.autocomplete = 'off';
                div.appendChild(textBox);
                document.getElementById("add-customerName").value=customerName;

                document.getElementById("customerName").remove();
                var div = document.getElementById('cusName');
                var textBox = document.createElement('input');
                textBox.id = 'customerName';
                textBox.type = 'text';
                textBox.name = 'customerName';
                textBox.class = 'form-control';
                textBox.autocomplete = 'off';
                div.appendChild(textBox);
                document.getElementById("customerName").disabled = true;
                document.getElementById("add-customerName").readOnly =true;
                $ajax({
                    type: 'post',
                    url: '/psd/getloginname1',
                }, false, '', function (res) {
                    if (res.code == 200) {
                        var this_name = res.data;
                        document.getElementById("add-customerName").value = this_name;
                        // document.getElementById("add-customerNameRenyuan").value = this_name;
                        document.getElementById("customerName").value = this_name;
                        name=this_name;
                    }
                })
            }
        }
    })
}
function reloadPage() {
    setTimeout(function() {
        location.reload();
    }, 2000); // 延迟5秒后重新加载页面
}
function getList() {
    $('#orderNumber').val("");
    $('#customerName').val("");
    $('#songhuoAddress').val("");
    $('#anzhuangAddress').val("");
    $('#customerOrder').val("");
    $('#songhuoDanhao').val("");

    $ajax({
        type: 'post',
        url: '/user/getPower',
        async: false,
    }, false, '', function (res) {
        if (res.code == 200) {
            var power = res.data;
            if (power == "客户") {
                $ajax({
                    type: 'post',
                    url: '/psd/getloginname1',
                }, false, '', function (res) {
                    if (res.code == 200) {
                        var this_name = res.data;
                        document.getElementById("customerName").value = this_name;
                    }
                })
            }
        }
    })

    $ajax({
        type: 'post',
        url: '/psd/getList',
    }, false, '', function (res) {
        if (res.code == 200) {
            setTable(res.data);
            for (n = 0; n < res.data.length; n++) {
                document.getElementById("wancheng"+n).value = res.data[n].wancheng;
                document.getElementById("money"+n).value = res.data[n].money;
                document.getElementById("shoukuan"+n).value = res.data[n].shoukuan;
                document.getElementById("quyu"+n).value = res.data[n].quyu;
            }
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

function getKhmc() {
    $ajax({
        type: 'post',
        url: '/user/hqxlKhmc',
    }, false, '', function (res) {
        if (res.code == 200) {
            for (var i = 0; i < res.data.length; i++) {
                $("#add-customerName").append("<option>" + res.data[i].company + "</option>");
                $("#update-customerName").append("<option>" + res.data[i].company + "</option>");
                $("#customerName").append("<option>" + res.data[i].company + "</option>")
            }
        }
    })
}


$(function () {

    var textarea = document.getElementById('add-customerNeedText');
    textarea.addEventListener('blur', function () {
        var this_textarea = $('#add-customerNeedText').val();
        document.getElementById('add-customerNeedText1').value = this_textarea;

    });

    var inp1 = document.getElementById('add-songhuoAddress');
    var yuanvalue1 = $('#add-songhuoAddress').val();
    inp1.addEventListener('blur', function() {
        var invalue1 = $('#add-songhuoAddress').val();
        if (invalue1 != yuanvalue1) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('add-songhuoAddressRenyuan').value = this_name;
                document.getElementById('add-customerNameRenyuan').value = this_name;
            })
            document.getElementById('add-songhuoAddressRiqi').value = dqrq;
            // document.getElementById("add-songhuoAddressRiqi").disabled = true;
        }
    });

    var inp1 = document.getElementById('update-songhuoAddress');
    var yuanvalue1 = $('#update-songhuoAddress').val();
    inp1.addEventListener('blur', function() {
        var invalue1 = $('#update-songhuoAddress').val();
        if (invalue1 != yuanvalue1) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-songhuoAddressRenyuan').value = this_name;
            })
            document.getElementById('update-songhuoAddressRiqi').value = dqrq;
            // document.getElementById("update-songhuoAddressRiqi").disabled = true;
        }
    });
    var inp1 = document.getElementById('add-songhuoDanhao');
    var yuanvalue1 = $('#add-songhuoDanhao').val();
    inp1.addEventListener('blur', function() {
        var invalue1 = $('#add-songhuoDanhao').val();
        if (invalue1 != yuanvalue1) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('add-songhuoDanhaoRenyuan').value = this_name;
            })
            document.getElementById('add-songhuoDanhaoRiqi').value = dqrq;
            // document.getElementById("add-songhuoAddressRiqi").disabled = true;
        }
    });

    var inp1 = document.getElementById('update-songhuoDanhao');
    var yuanvalue1 = $('#update-songhuoDanhao').val();
    inp1.addEventListener('blur', function() {
        var invalue1 = $('#update-songhuoDanhao').val();
        if (invalue1 != yuanvalue1) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-songhuoDanhaoRenyuan').value = this_name;
            })
            document.getElementById('update-songhuoDanhaoRiqi').value = dqrq;
            // document.getElementById("add-songhuoAddressRiqi").disabled = true;
        }
    });

    var inp2 = document.getElementById('add-hqquyu');
    var yuanvalue2 = $('#add-hqquyu').val();
    inp2.addEventListener('blur', function() {
        var invalue2 = $('#add-hqquyu').val();
        if (invalue2 != yuanvalue2) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('add-quyuRenyuan').value = this_name;
            })
            document.getElementById('add-quyuRiqi').value = dqrq;
            // document.getElementById("add-quyuRiqi").disabled = true;
        }
    });

    // var inp2 = document.getElementById('update-hqquyu');
    // var yuanvalue2 = $('#update-hqquyu').val();
    // inp2.addEventListener('blur', function() {
    //     var invalue2 = $('#update-hqquyu').val();
    //     if (invalue2 != yuanvalue2) {
    //         var date = new Date();
    //         var day = ("0" + date.getDate()).slice(-2);
    //         var month = ("0" + (date.getMonth() + 1)).slice(-2);
    //         var hh = date.getHours();
    //         var mm = date.getMinutes();
    //         var ss = date.getSeconds();
    //         var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
    //
    //         $ajax({
    //             type: 'post',
    //             url: '/psd/getloginname',
    //         }, false, '', function (res) {
    //             var this_name = res.data
    //             document.getElementById('update-quyuRenyuan').value = this_name;
    //         })
    //         document.getElementById('update-quyuRiqi').value = dqrq;
    //         // document.getElementById("update-quyuRiqi").disabled = true;
    //     }
    // });

    var inp3 = document.getElementById('add-anzhuangAddress');
    var yuanvalue3 = $('#add-anzhuangAddress').val();
    inp3.addEventListener('blur', function() {
        var invalue3 = $('#add-anzhuangAddress').val();
        if (invalue3 != yuanvalue3) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('add-anzhuangAddressRenyuan').value = this_name;
            })
            document.getElementById('add-anzhuangAddressRiqi').value = dqrq;
            // document.getElementById("add-anzhuangAddressRiqi").disabled = true;
        }
    });

    var inp3 = document.getElementById('update-anzhuangAddress');
    var yuanvalue3 = $('#update-anzhuangAddress').val();
    inp3.addEventListener('blur', function() {
        var invalue3 = $('#update-anzhuangAddress').val();
        if (invalue3 != yuanvalue3) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-anzhuangAddressRenyuan').value = this_name;
            })
            document.getElementById('update-anzhuangAddressRiqi').value = dqrq;
            // document.getElementById("update-anzhuangAddressRiqi").disabled = true;
        }
    });

    var inp4 = document.getElementById('add-phone');
    var yuanvalue4 = $('#add-phone').val();
    inp4.addEventListener('blur', function() {
        var invalue4 = $('#add-phone').val();
        if (invalue4 != yuanvalue4) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('add-phoneRenyuan').value = this_name;
            })
            document.getElementById('add-phoneRiqi').value = dqrq;
            // document.getElementById("add-phoneRiqi").disabled = true;
        }
    });

    var inp4 = document.getElementById('update-phone');
    var yuanvalue4 = $('#update-phone').val();
    inp4.addEventListener('blur', function() {
        var invalue4 = $('#update-phone').val();
        if (invalue4 != yuanvalue4) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-phoneRenyuan').value = this_name;
            })
            document.getElementById('update-phoneRiqi').value = dqrq;
            // document.getElementById("update-phoneRiqi").disabled = true;
        }
    });

    var inp5 = document.getElementById('add-customerOrder');
    var yuanvalue5 = $('#add-customerOrder').val();
    inp5.addEventListener('blur', function() {
        var invalue5 = $('#add-customerOrder').val();
        if (invalue5 != yuanvalue5) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('add-customerOrderRenyuan').value = this_name;
            })
            document.getElementById('add-customerOrderRiqi').value = dqrq;
            // document.getElementById("add-customerOrderRiqi").disabled = true;
        }
    });

    var inp5 = document.getElementById('update-customerOrder');
    var yuanvalue5 = $('#update-customerOrder').val();
    inp5.addEventListener('blur', function() {
        var invalue5 = $('#update-customerOrder').val();
        if (invalue5 != yuanvalue5) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-customerOrderRenyuan').value = this_name;
            })
            document.getElementById('update-customerOrderRiqi').value = dqrq;
            // document.getElementById("update-customerOrderRiqi").disabled = true;
        }
    });

    var inp6 = document.getElementById('add-customerNeedText');
    var yuanvalue6 = $('#add-customerNeedText').val();
    inp6.addEventListener('blur', function() {
        var invalue6 = $('#add-customerNeedText').val();
        if (invalue6 != yuanvalue6) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('add-customerNeedTextRenyuan').value = this_name;
                document.getElementById('add-customerNeedText1Renyuan').value = this_name;
            })
            document.getElementById('add-customerNeedTextRiqi').value = dqrq;
            // document.getElementById('add-customerNeedTextRiqi').disabled = true;
            document.getElementById('add-customerNeedText1Riqi').value = dqrq;
            // document.getElementById('add-customerNeedText1Riqi').disabled = true;
        }
    });

    var inp6 = document.getElementById('update-customerNeedText');
    var yuanvalue6 = $('#update-customerNeedText').val();
    inp6.addEventListener('blur', function() {
        var invalue6 = $('#update-customerNeedText').val();
        if (invalue6 != yuanvalue6) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-customerNeedTextRenyuan').value = this_name;

            })
            document.getElementById('update-customerNeedTextRiqi').value = dqrq;
            // document.getElementById("update-customerNeedTextRiqi").disabled = true;

        }
    });
    var inp6 = document.getElementById('update-customerNeedText');
    var yuanvalue6 = $('#update-customerNeedText1').val();
    inp6.addEventListener('blur', function() {
        var invalue6 = $('#update-customerNeedText1').val();
        if (invalue6 != yuanvalue6) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-customerNeedText1Renyuan').value = this_name;

            })
            document.getElementById('update-customerNeedText1Riqi').value = dqrq;

        }
    });
    var inp8 = document.getElementById('add-money');
    var yuanvalue8 = $('#add-money').val();
    inp8.addEventListener('blur', function() {
        var invalue8 = $('#add-money').val();
        if (invalue8 != yuanvalue8) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('add-moneyRenyuan').value = this_name;
            })
            document.getElementById('add-moneyRiqi').value = dqrq;
            // document.getElementById("add-moneyRiqi").disabled = true;
        }
    });

    var inp8 = document.getElementById('update-money');
    var yuanvalue8 = $('#update-money').val();
    inp8.addEventListener('blur', function() {
        var invalue8 = $('#update-money').val();
        if (invalue8 != yuanvalue8) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-moneyRenyuan').value = this_name;
            })
            document.getElementById('update-moneyRiqi').value = dqrq;
            // document.getElementById("update-moneyRiqi").disabled = true;
        }
    });

    var inp9 = document.getElementById('add-shoukuan');
    var yuanvalue9 = $('#add-shoukuan').val();
    inp9.addEventListener('blur', function() {
        var invalue9 = $('#add-shoukuan').val();
        if (invalue9 != yuanvalue9) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('add-shoukuanRenyuan').value = this_name;
            })
            document.getElementById('add-shoukuanRiqi').value = dqrq;
            // document.getElementById("add-shoukuanRiqi").disabled = true;
        }
    });

    var inp9 = document.getElementById('update-shoukuan');
    var yuanvalue9 = $('#update-shoukuan').val();
    inp9.addEventListener('blur', function() {
        var invalue9 = $('#update-shoukuan').val();
        if (invalue9 != yuanvalue9) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-shoukuanRenyuan').value = this_name;
            })
            document.getElementById('update-shoukuanRiqi').value = dqrq;
            // document.getElementById("update-shoukuanRiqi").disabled = true;
        }
    });

    var inp10 = document.getElementById('add-wancheng');
    var yuanvalue10 = $('#add-wancheng').val();
    inp10.addEventListener('blur', function() {
        var invalue10 = $('#add-wancheng').val();
        if (invalue10 != yuanvalue10) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('add-wanchengRenyuan').value = this_name;
            })
            document.getElementById('add-wanchengRiqi').value = dqrq;
            // document.getElementById("add-wanchengRiqi").disabled = true;
        }
    });

    var inp10 = document.getElementById('update-wancheng');
    var yuanvalue10 = $('#update-wancheng').val();
    inp10.addEventListener('blur', function() {
        var invalue10 = $('#update-wancheng').val();
        if (invalue10 != yuanvalue10) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-wanchengRenyuan').value = this_name;
            })
            document.getElementById('update-wanchengRiqi').value = dqrq;
            // document.getElementById("update-wanchengRiqi").disabled = true;
        }
    });

    var inp12 = document.getElementById('add-kucun');
    var yuanvalue12 = $('#add-kucun').val();
    inp12.addEventListener('blur', function() {
        var invalue12 = $('#add-kucun').val();
        if (invalue12 != yuanvalue12) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('add-kucunTextRenyuan').value = this_name;
            })
            document.getElementById('add-kucunTextRiqi').value = dqrq;
            // document.getElementById("add-kucunTextRiqi").disabled = true;
        }
    });

    var inp12 = document.getElementById('update-kucun');
    var yuanvalue12 = $('#update-kucun').val();
    inp12.addEventListener('blur', function() {
        var invalue12 = $('#update-kucun').val();
        if (invalue12 != yuanvalue12) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-kucunTextRenyuan').value = this_name;
            })
            document.getElementById('update-kucunTextRiqi').value = dqrq;
            // document.getElementById("update-kucunTextRiqi").disabled = true;
        }
    });

    var inupd1 = document.getElementById('update-songhuoAddress');
    var yuanvalue1 = $('#add-songhuoAddress').val();
    inupd1.addEventListener('blur', function() {
        var invalue1 = $('#add-songhuoAddress').val();
        if (invalue1 != yuanvalue1) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-songhuoAddressRenyuan').value = this_name;
            })
            document.getElementById('update-songhuoAddressRiqi').value = dqrq;
            // document.getElementById("update-songhuoAddressRiqi").disabled = true;
        }
    });

    // var inupd2 = document.getElementById('update-hqquyu');
    // var yuanvalue2 = $('#update-hqquyu').val();
    // inupd2.addEventListener('blur', function() {
    //     var invalue2 = $('#update-hqquyu').val();
    //     if (invalue2 != yuanvalue2) {
    //         var date = new Date();
    //         var day = ("0" + date.getDate()).slice(-2);
    //         var month = ("0" + (date.getMonth() + 1)).slice(-2);
    //         var hh = date.getHours();
    //         var mm = date.getMinutes();
    //         var ss = date.getSeconds();
    //         var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
    //
    //         $ajax({
    //             type: 'post',
    //             url: '/psd/getloginname',
    //         }, false, '', function (res) {
    //             var this_name = res.data
    //             document.getElementById('update-quyuRenyuan').value = this_name;
    //         })
    //         document.getElementById('update-quyuRiqi').value = dqrq;
    //         // document.getElementById("update-quyuRiqi").disabled = true;
    //     }
    // });

    var inupd3 = document.getElementById('update-anzhuangAddress');
    var yuanvalue3 = $('#update-anzhuangAddress').val();
    inupd3.addEventListener('blur', function() {
        var invalue3 = $('#update-anzhuangAddress').val();
        if (invalue3 != yuanvalue3) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-anzhuangAddressRenyuan').value = this_name;
            })
            document.getElementById('update-anzhuangAddressRiqi').value = dqrq;
            // document.getElementById("update-anzhuangAddressRiqi").disabled = true;
        }
    });

    var inupd4 = document.getElementById('update-phone');
    var yuanvalue4 = $('#update-phone').val();
    inupd4.addEventListener('blur', function() {
        var invalue4 = $('#update-phone').val();
        if (invalue4 != yuanvalue4) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-phoneRenyuan').value = this_name;
            })
            document.getElementById('update-phoneRiqi').value = dqrq;
            // document.getElementById("update-phoneRiqi").disabled = true;
        }
    });

    var inupd5 = document.getElementById('update-customerOrder');
    var yuanvalue5 = $('#update-customerOrder').val();
    inupd5.addEventListener('blur', function() {
        var invalue5 = $('#update-customerOrder').val();
        if (invalue5 != yuanvalue5) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-customerOrderRenyuan').value = this_name;
            })
            document.getElementById('update-customerOrderRiqi').value = dqrq;
            // document.getElementById("update-customerOrderRiqi").disabled = true;
        }
    });

    var inupd6 = document.getElementById('update-customerNeedText');
    var yuanvalue6 = $('#update-customerNeedText').val();
    inupd6.addEventListener('blur', function() {
        var invalue6 = $('#update-customerNeedText').val();
        if (invalue6 != yuanvalue6) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-customerNeedTextRenyuan').value = this_name;
            })
            document.getElementById('update-customerNeedTextRiqi').value = dqrq;
            // document.getElementById("update-customerNeedTextRiqi").disabled = true;
        }
    });

    var inupd7 = document.getElementById('update-customerNeedText1');
    var yuanvalue7 = $('#update-customerNeedText1').val();
    inupd7.addEventListener('blur', function() {
        var invalue7 = $('#update-customerNeedText1').val();
        if (invalue7 != yuanvalue7) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-customerNeedText1Renyuan').value = this_name;
            })
            document.getElementById('update-customerNeedText1Riqi').value = dqrq;
            // document.getElementById("update-customerNeedText1Riqi").disabled = true;
        }
    });

    var inupd8 = document.getElementById('update-money');
    var yuanvalue8 = $('#update-money').val();
    inupd8.addEventListener('blur', function() {
        var invalue8 = $('#update-money').val();
        if (invalue8 != yuanvalue8) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-moneyRenyuan').value = this_name;
            })
            document.getElementById('update-moneyRiqi').value = dqrq;
            // document.getElementById("update-moneyRiqi").disabled = true;
        }
    });

    var inupd9 = document.getElementById('update-shoukuan');
    var yuanvalue9 = $('#update-shoukuan').val();
    inupd9.addEventListener('blur', function() {
        var invalue9 = $('#update-shoukuan').val();
        if (invalue9 != yuanvalue9) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-shoukuanRenyuan').value = this_name;
            })
            document.getElementById('update-shoukuanRiqi').value = dqrq;
            // document.getElementById("update-shoukuanRiqi").disabled = true;
        }
    });

    var inupd10 = document.getElementById('update-wancheng');
    var yuanvalue10 = $('#update-wancheng').val();
    inupd10.addEventListener('blur', function() {
        var invalue10 = $('#update-wancheng').val();
        if (invalue10 != yuanvalue10) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-wanchengRenyuan').value = this_name;
            })
            document.getElementById('update-wanchengRiqi').value = dqrq;
            // document.getElementById("update-wanchengRiqi").disabled = true;
        }
    });

    var inupd11 = document.getElementById('fileInput1');
    var yuanvalue11 = $('#fileInput1').val();
    inupd11.addEventListener('blur', function() {
        var invalue11 = $('#fileInput1').val();
        if (invalue11 != yuanvalue11) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('add-peihuoImg1Renyuan').value = this_name;
            })
            document.getElementById('add-peihuoImg1Riqi').value = dqrq;
            // document.getElementById("add-peihuoImg1Riqi").disabled = true;
        }
    });

    var inupd11 = document.getElementById('fileInput2');
    var yuanvalue11 = $('#fileInput2').val();
    inupd11.addEventListener('blur', function() {
        var invalue11 = $('#fileInput2').val();
        if (invalue11 != yuanvalue11) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('add-peihuoImg2Renyuan').value = this_name;
            })
            document.getElementById('add-peihuoImg2Riqi').value = dqrq;
            // document.getElementById("add-peihuoImg2Riqi").disabled = true;
        }
    });

    var inupd11 = document.getElementById('fileInput3');
    var yuanvalue11 = $('#fileInput3').val();
    inupd11.addEventListener('blur', function() {
        var invalue11 = $('#fileInput3').val();
        if (invalue11 != yuanvalue11) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('add-peihuoImg3Renyuan').value = this_name;
            })
            document.getElementById('add-peihuoImg3Riqi').value = dqrq;
            // document.getElementById("add-peihuoImg3Riqi").disabled = true;
        }
    });

    var inupd11 = document.getElementById('fileInput4');
    var yuanvalue11 = $('#fileInput4').val();
    inupd11.addEventListener('blur', function() {
        var invalue11 = $('#fileInput4').val();
        if (invalue11 != yuanvalue11) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('add-peihuoImg4Renyuan').value = this_name;
            })
            document.getElementById('add-peihuoImg4Riqi').value = dqrq;
            // document.getElementById("add-peihuoImg4Riqi").disabled = true;
        }
    });

    var inupd11 = document.getElementById('fileInput5');
    var yuanvalue11 = $('#fileInput5').val();
    inupd11.addEventListener('blur', function() {
        var invalue11 = $('#fileInput5').val();
        if (invalue11 != yuanvalue11) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('add-peihuoImg5Renyuan').value = this_name;
            })
            document.getElementById('add-peihuoImg5Riqi').value = dqrq;
            // document.getElementById("add-peihuoImg5Riqi").disabled = true;
        }
    });

    var inupd11 = document.getElementById('fileInput6');
    var yuanvalue11 = $('#fileInput6').val();
    inupd11.addEventListener('blur', function() {
        var invalue11 = $('#fileInput6').val();
        if (invalue11 != yuanvalue11) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('add-peisongImg1Renyuan').value = this_name;
            })
            document.getElementById('add-peisongImg1Riqi').value = dqrq;
            // document.getElementById("add-peisongImg1Riqi").disabled = true;
        }
    });

    var inupd11 = document.getElementById('fileInput7');
    var yuanvalue11 = $('#fileInput7').val();
    inupd11.addEventListener('blur', function() {
        var invalue11 = $('#fileInput7').val();
        if (invalue11 != yuanvalue11) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('add-peisongImg2Renyuan').value = this_name;
            })
            document.getElementById('add-peisongImg2Riqi').value = dqrq;
            // document.getElementById("add-peisongImg2Riqi").disabled = true;
        }
    });

    var inupd11 = document.getElementById('fileInput8');
    var yuanvalue11 = $('#fileInput8').val();
    inupd11.addEventListener('blur', function() {
        var invalue11 = $('#fileInput8').val();
        if (invalue11 != yuanvalue11) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('add-peisongImg3Renyuan').value = this_name;
            })
            document.getElementById('add-peisongImg3Riqi').value = dqrq;
            // document.getElementById("add-peisongImg3Riqi").disabled = true;
        }
    });

    // --------------编辑
    var upd = document.getElementById('update-customerName');
    var yuanupdvalue = $('#update-customerName').val();
    upd.addEventListener('blur', function() {
        var updvalue = $('#update-customerName').val();
        if (updvalue != yuanupdvalue) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-customerNameRenyuan').value = this_name;
            })
            document.getElementById('update-customerNameRiqi').value = dqrq;
            // document.getElementById('update-customerNameRiqi').disabled = true;
        }
    });

    var upd = document.getElementById('update-customerNeedText');
    var yuanupdvalue = $('#update-customerNeedText').val();
    upd.addEventListener('blur', function() {
        var updvalue = $('#update-customerNeedText').val();
        if (updvalue != yuanupdvalue) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-customerNeedTextRenyuan').value = this_name;
            })
            document.getElementById('update-customerNeedTextRiqi').value = dqrq;
            // document.getElementById('update-customerNeedTextRiqi').disabled = true;
        }
    });

    var upd = document.getElementById('update-customerNeedText1');
    var yuanupdvalue = $('#update-customerNeedText1').val();
    upd.addEventListener('blur', function() {
        var updvalue = $('#update-customerNeedText1').val();
        if (updvalue != yuanupdvalue) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                // document.getElementById('update-customerNeedTextRenyuan').value = this_name;
            })
            document.getElementById('update-customerNeedText1Riqi').value = dqrq;
            // document.getElementById('update-customerNeedText1Riqi').disabled = true;
        }
    });

    var upd = document.getElementById('update-songhuoAddress');
    var yuanupdvalue = $('#update-songhuoAddress').val();
    upd.addEventListener('blur', function() {
        var updvalue = $('#update-songhuoAddress').val();
        if (updvalue != yuanupdvalue) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-songhuoAddressRenyuan').value = this_name;
            })
            document.getElementById('update-songhuoAddressRiqi').value = dqrq;
            // document.getElementById('update-songhuoAddressRiqi').disabled = true;
        }
    });

    var upd = document.getElementById('update-anzhuangAddress');
    var yuanupdvalue = $('#update-anzhuangAddress').val();
    upd.addEventListener('blur', function() {
        var updvalue = $('#update-anzhuangAddress').val();
        if (updvalue != yuanupdvalue) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-anzhuangAddressRenyuan').value = this_name;
            })
            document.getElementById('update-anzhuangAddressRiqi').value = dqrq;
            // document.getElementById('update-anzhuangAddressRiqi').disabled = true;
        }
    });

    var upd = document.getElementById('update-phone');
    var yuanupdvalue = $('#update-phone').val();
    upd.addEventListener('blur', function() {
        var updvalue = $('#update-phone').val();
        if (updvalue != yuanupdvalue) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-phoneRenyuan').value = this_name;
            })
            document.getElementById('update-phoneRiqi').value = dqrq;
            // document.getElementById('update-phoneRiqi').disabled = true;
        }
    });

    var upd = document.getElementById('update-customerOrder');
    var yuanupdvalue = $('#update-customerOrder').val();
    upd.addEventListener('blur', function() {
        var updvalue = $('#update-customerOrder').val();
        if (updvalue != yuanupdvalue) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-customerOrderRenyuan').value = this_name;
            })
            document.getElementById('update-customerOrderRiqi').value = dqrq;
            // document.getElementById('update-customerOrderRiqi').disabled = true;
        }
    });

    // var upd = document.getElementById('update-songhuoDanhao');
    // var yuanupdvalue = $('#update-songhuoDanhao').val();
    // upd.addEventListener('blur', function() {
    //     var updvalue = $('#update-songhuoDanhao').val();
    //     if (updvalue != yuanupdvalue) {
    //         var date = new Date();
    //         var day = ("0" + date.getDate()).slice(-2);
    //         var month = ("0" + (date.getMonth() + 1)).slice(-2);
    //         var hh = date.getHours();
    //         var mm = date.getMinutes();
    //         var ss = date.getSeconds();
    //         var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
    //
    //         $ajax({
    //             type: 'post',
    //             url: '/psd/getloginname',
    //         }, false, '', function (res) {
    //             var this_name = res.data
    //             document.getElementById('update-songhuoDanhaoRenyuan').value = this_name;
    //         })
    //         document.getElementById('update-songhuoDanhaoRiqi').value = dqrq;
    //         document.getElementById('update-songhuoDanhaoRiqi').disabled = true;
    //     }
    // });

    var upd = document.getElementById('update-wancheng');
    var yuanupdvalue = $('#update-wancheng').val();
    upd.addEventListener('blur', function() {
        var updvalue = $('#update-wancheng').val();
        if (updvalue != yuanupdvalue) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-wanchengRenyuan').value = this_name;
            })
            document.getElementById('update-wanchengRiqi').value = dqrq;
            // document.getElementById('update-wanchengRiqi').disabled = true;
        }
    });

    var upd = document.getElementById('update-money');
    var yuanupdvalue = $('#update-money').val();
    upd.addEventListener('blur', function() {
        var updvalue = $('#update-money').val();
        if (updvalue != yuanupdvalue) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-moneyRenyuan').value = this_name;
            })
            document.getElementById('update-moneyRiqi').value = dqrq;
            // document.getElementById('update-moneyRiqi').disabled = true;
        }
    });

    var upd = document.getElementById('update-shoukuan');
    var yuanupdvalue = $('#update-shoukuan').val();
    upd.addEventListener('blur', function() {
        var updvalue = $('#update-shoukuan').val();
        if (updvalue != yuanupdvalue) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-shoukuanRenyuan').value = this_name;
            })
            document.getElementById('update-shoukuanRiqi').value = dqrq;
            // document.getElementById('update-shoukuanRiqi').disabled = true;
        }
    });

    var upd = document.getElementById('update-kucun');
    var yuanupdvalue = $('#update-kucun').val();
    upd.addEventListener('blur', function() {
        var updvalue = $('#update-kucun').val();
        if (updvalue != yuanupdvalue) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-kucunTextRenyuan').value = this_name;
            })
            document.getElementById('update-kucunTextRiqi').value = dqrq;
            // document.getElementById('update-kucunTextRiqi').disabled = true;
        }
    });

    // var upd = document.getElementById('update-hqquyu');
    // var yuanupdvalue = $('#update-hqquyu').val();
    // upd.addEventListener('blur', function() {
    //     var updvalue = $('#update-hqquyu').val();
    //     if (updvalue != yuanupdvalue) {
    //         var date = new Date();
    //         var day = ("0" + date.getDate()).slice(-2);
    //         var month = ("0" + (date.getMonth() + 1)).slice(-2);
    //         var hh = date.getHours();
    //         var mm = date.getMinutes();
    //         var ss = date.getSeconds();
    //         var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);
    //
    //         $ajax({
    //             type: 'post',
    //             url: '/psd/getloginname',
    //         }, false, '', function (res) {
    //             var this_name = res.data
    //             document.getElementById('update-quyuRenyuan').value = this_name;
    //         })
    //         document.getElementById('update-quyuRiqi').value = dqrq;
    //         // document.getElementById('update-quyuRiqi').disabled = true;
    //     }
    // });

    var upd = document.getElementById('fileInput9');
    var yuanupdvalue = $('#fileInput9').val();
    upd.addEventListener('blur', function() {
        var updvalue = $('#fileInput9').val();
        if (updvalue != yuanupdvalue) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-peihuoImg1Renyuan').value = this_name;
            })
            document.getElementById('update-peihuoImg1Riqi').value = dqrq;
            // document.getElementById('update-peihuoImg1Riqi').disabled = true;
        }
    });

    var upd = document.getElementById('fileInput10');
    var yuanupdvalue = $('#fileInput10').val();
    upd.addEventListener('blur', function() {
        var updvalue = $('#fileInput10').val();
        if (updvalue != yuanupdvalue) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-peihuoImg2Renyuan').value = this_name;
            })
            document.getElementById('update-peihuoImg2Riqi').value = dqrq;
            // document.getElementById('update-peihuoImg2Riqi').disabled = true;
        }
    });

    var upd = document.getElementById('fileInput11');
    var yuanupdvalue = $('#fileInput11').val();
    upd.addEventListener('blur', function() {
        var updvalue = $('#fileInput11').val();
        if (updvalue != yuanupdvalue) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-peihuoImg3Renyuan').value = this_name;
            })
            document.getElementById('update-peihuoImg3Riqi').value = dqrq;
            // document.getElementById('update-peihuoImg3Riqi').disabled = true;
        }
    });

    var upd = document.getElementById('fileInput12');
    var yuanupdvalue = $('#fileInput12').val();
    upd.addEventListener('blur', function() {
        var updvalue = $('#fileInput12').val();
        if (updvalue != yuanupdvalue) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-peihuoImg4Renyuan').value = this_name;
            })
            document.getElementById('update-peihuoImg4Riqi').value = dqrq;
            // document.getElementById('update-peihuoImg4Riqi').disabled = true;
        }
    });

    var upd = document.getElementById('fileInput13');
    var yuanupdvalue = $('#fileInput13').val();
    upd.addEventListener('blur', function() {
        var updvalue = $('#fileInput13').val();
        if (updvalue != yuanupdvalue) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-peihuoImg5Renyuan').value = this_name;
            })
            document.getElementById('update-peihuoImg5Riqi').value = dqrq;
            // document.getElementById('update-peihuoImg5Riqi').disabled = true;
        }
    });

    var upd = document.getElementById('fileInput14');
    var yuanupdvalue = $('#fileInput14').val();
    upd.addEventListener('blur', function() {
        var updvalue = $('#fileInput14').val();
        if (updvalue != yuanupdvalue) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-peisongImg1Renyuan').value = this_name;
            })
            document.getElementById('update-peisongImg1Riqi').value = dqrq;
            // document.getElementById('update-peisongImg1Riqi').disabled = true;
        }
    });

    var upd = document.getElementById('fileInput26');
    var yuanupdvalue = $('#fileInput26').val();
    upd.addEventListener('blur', function() {
        var updvalue = $('#fileInput26').val();
        if (updvalue != yuanupdvalue) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-peisongImg2Renyuan').value = this_name;
            })
            document.getElementById('update-peisongImg2Riqi').value = dqrq;
            // document.getElementById('update-peisongImg2Riqi').disabled = true;
        }
    });

    var upd = document.getElementById('fileInput15');
    var yuanupdvalue = $('#fileInput15').val();
    upd.addEventListener('blur', function() {
        var updvalue = $('#fileInput15').val();
        if (updvalue != yuanupdvalue) {
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            var hh = date.getHours();
            var mm = date.getMinutes();
            var ss = date.getSeconds();
            var dqrq = date.getFullYear() + "/" + (month) + "/" + (day) + " " + (hh) + ":" + (mm) + ":" + (ss);

            $ajax({
                type: 'post',
                url: '/psd/getloginname',
            }, false, '', function (res) {
                var this_name = res.data
                document.getElementById('update-peisongImg3Renyuan').value = this_name;
            })
            document.getElementById('update-peisongImg3Riqi').value = dqrq;
            // document.getElementById('update-peisongImg3Riqi').disabled = true;
        }
    });

    $ajax({
        type: 'post',
        url: '/user/getUserName',
    }, false, '', function (res) {
        var this_username = res.data
        document.getElementById("dlm").innerText = this_username;
    })

    getquyuxl();
    getList();
    getPower();
    getPowerKehu();
    getKhmc();
    setTable();
    // initFileInput("fileInput1");
    // initFileInput("fileInput2");
    // initFileInput("fileInput3");
    // initFileInput("fileInput4");
    // initFileInput("fileInput5");
    // initFileInput("fileInput6");
    // initFileInput("fileInput7");
    // initFileInput("fileInput8");
    // initFileInput("fileInput9");
    // initFileInput("fileInput10");
    // initFileInput("fileInput11");
    // initFileInput("fileInput12");
    // initFileInput("fileInput13");
    // initFileInput("fileInput14");
    // initFileInput("fileInput15");
    // initFileInput("fileInput16");
    // initFileInput("fileInput17");
    // initFileInput("fileInput18");
    // initFileInput("fileInput19");
    // initFileInput("fileInput20");
    // initFileInput("fileInput21");
    // initFileInput("fileInput22");
    // initFileInput("fileInput23");
    // initFileInput("fileInput24");
    // initFileInput("fileInput25");
    // initFileInput("fileInput26");
    // initFileInput("fileInput27");
    // initFileInput("fileInput28");
    // initFileInput("fileInput29");
    // initFileInput("fileInput30");
    // initFileInput("fileInput31");
    // initFileInput("fileInput32");
    // initFileInput("fileInput33");
    // initFileInput("fileInput34");
    // initFileInput("fileInput35");
    // initFileInput("fileInput36");
    // initFileInput("fileInput37");
    // initFileInput("fileInput38");
    // initFileInput("fileInput39");
    // initFileInput("fileInput40");
    // initFileInput("fileInput41");
    // initFileInput("fileInput42");
    // initFileInput("fileInput43");
    // initFileInput("fileInput44");
    // initFileInput("fileInput45");
    // initFileInput("fileInput46");
    // initFileInput("fileInput47");
    // initFileInput("fileInput48");
    // initFileInput("fileInput49");
    // initFileInput("fileInput50");
    // initFileInput("fileInput51");
    // initFileInput("fileInput52");
    // initFileInput("fileInput53");
    // initFileInput("fileInput54");
    // initFileInput("fileInput55");
    // initFileInput("fileInput56");
    // initFileInput("fileInput57");
    // initFileInput("fileInput58");
    // initFileInput("fileInput59");
    // initFileInput("fileInput60");
    // initFileInput("fileInput61");
    // initFileInput("fileInput62");
    // initFileInput("fileInput63");
    // initFileInput("fileInput64");
    // initFileInput("fileInput65");
    // initFileInput("fileInput66");
    // initFileInput("fileInput67");
    // initFileInput("fileInput68");
    // initFileInput("fileInput69");
    // initFileInput("fileInput70");
    // initFileInput("fileInput71");
    // initFileInput("fileInput72");
    // initFileInput("fileInput73");
    initFileInput1("fileInput1");
    initFileInput2("fileInput2");
    initFileInput3("fileInput3");
    initFileInput4("fileInput4");
    initFileInput5("fileInput5");
    initFileInput6("fileInput6");
    initFileInput7("fileInput7");
    initFileInput8("fileInput8");
    initFileInput9("fileInput9");
    initFileInput10("fileInput10");
    initFileInput11("fileInput11");
    initFileInput12("fileInput12");
    initFileInput13("fileInput13");
    initFileInput14("fileInput14");
    initFileInput26("fileInput26");
    initFileInput15("fileInput15");
    // document.getElementById("dlm").innerText = ($.session.get('username'));

    // $ajax({
    //     type: 'post',
    //     url: '/user/getName',
    // }, false, '', function (res) {
    //     var this_name = res.data;
    //     document.getElementById("customerName").value = this_name;
    // })


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
                // songhuoDanhao: songhuoDanhao,
                ksinsertDate: ksinsertDate,
                jsinsertDate: jsinsertDate,
                wancheng: wancheng,
                kucun: kucun,
            }
        }, true, '', function (res) {
            if (res.code == 200) {
                setTable(res.data);
                for (n = 0; n < res.data.length; n++) {
                    document.getElementById("wancheng" + n).value = res.data[n].wancheng;
                    document.getElementById("money"+n).value = res.data[n].money;
                    document.getElementById("shoukuan"+n).value = res.data[n].shoukuan;
                    document.getElementById("quyu"+n).value = res.data[n].quyu;
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
        $('#add-modal').modal('show');
        document.getElementById("add-customerName").value = name;
        var acnt = document.getElementById("add-customerNeedText");
        var acnt1 = document.getElementById("add-customerNeedText1");
        acnt1.addEventListener('input', function () {
            acnt1.value = acnt.value;
            acnt1.setSelectionRange(acnt1.value.length, acnt1.value.length);
        })
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

                //录入员的value也""
                document.getElementById('add-peihuoImg1Renyuan').value=""
                document.getElementById('add-peihuoImg2Renyuan').value=""
                document.getElementById('add-peihuoImg3Renyuan').value=""
                document.getElementById('add-peihuoImg4Renyuan').value=""
                document.getElementById('add-peihuoImg5Renyuan').value=""
                //录入员的value也""
                document.getElementById('add-peihuoImg1Riqi').value=""
                document.getElementById('add-peihuoImg2Riqi').value=""
                document.getElementById('add-peihuoImg3Riqi').value=""
                document.getElementById('add-peihuoImg4Riqi').value=""
                document.getElementById('add-peihuoImg5Riqi').value=""
                document.getElementById('add-peisongImg1Renyuan').value=""
                document.getElementById('add-peisongImg2Renyuan').value=""
                document.getElementById('add-peisongImg3Renyuan').value=""

                //录入员的value也""
                document.getElementById('add-peisongImg1Riqi').value=""
                document.getElementById('add-peisongImg2Riqi').value=""
                document.getElementById('add-peisongImg3Riqi').value=""
                document.getElementById('add-kucun').value=""
                document.getElementById('add-kucunTextRenyuan').value=""
                document.getElementById('add-kucunTextRiqi').value=""

                $('#add-form')[0].reset();
                getList();
                $('#add-close-btn').click();
                reloadPage()
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
        $('#update-songhuoDanhao').val(rows[0].data.songhuoDanhao);
        $('#update-songhuoDanhaoRenyuan').val(rows[0].data.songhuoDanhaoRenyuan);
        $('#update-songhuoDanhaoRiqi').val(rows[0].data.songhuoDanhaoRiqi);
        $('#update-anzhuangAddress').val(rows[0].data.anzhuangAddress);
        $('#update-anzhuangAddressRenyuan').val(rows[0].data.anzhuangAddressRenyuan);
        $('#update-anzhuangAddressRiqi').val(rows[0].data.anzhuangAddressRiqi);
        $('#update-phone').val(rows[0].data.phone);
        $('#update-phoneRenyuan').val(rows[0].data.phoneRenyuan);
        $('#update-phoneRiqi').val(rows[0].data.phoneRiqi);
        $('#update-customerOrder').val(rows[0].data.customerOrder);
        $('#update-customerOrderRenyuan').val(rows[0].data.customerOrderRenyuan);
        $('#update-customerOrderRiqi').val(rows[0].data.customerOrderRiqi);
        // $('#update-songhuoDanhao').val(rows[0].data.songhuoDanhao);
        // $('#update-songhuoDanhaoRenyuan').val(rows[0].data.songhuoDanhaoRenyuan);
        // $('#update-songhuoDanhaoRiqi').val(rows[0].data.songhuoDanhaoRiqi);
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
        $('#update-kucun').val(rows[0].data.kucun);
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



        document.getElementById("tp1").src = rows[0].data.peihuoImg1;
        document.getElementById("tp2").src=rows[0].data.peihuoImg2;
        document.getElementById("tp3").src=rows[0].data.peihuoImg3;
        document.getElementById("tp4").src=rows[0].data.peihuoImg4;
        document.getElementById("tp5").src=rows[0].data.peihuoImg5;
        document.getElementById("tp6").src=rows[0].data.peisongImg1;
        document.getElementById("tp7").src=rows[0].data.peisongImg2;
        document.getElementById("tp8").src=rows[0].data.peisongImg3;

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
            // if (checkForm('#update-form')) {
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
                    document.getElementById("fileInput9").value=""
                    document.getElementById("fileInput10").value=""
                    document.getElementById("fileInput11").value=""
                    document.getElementById("fileInput12").value=""
                    document.getElementById("fileInput13").value=""
                    document.getElementById("fileInput14").value=""
                    document.getElementById("fileInput26").value=""
                    document.getElementById("fileInput15").value=""
                    document.getElementById('update-peihuoImg1Renyuan').value=""
                    document.getElementById('update-peihuoImg2Renyuan').value=""
                    document.getElementById('update-peihuoImg3Renyuan').value=""
                    document.getElementById('update-peihuoImg4Renyuan').value=""
                    document.getElementById('update-peihuoImg5Renyuan').value=""
                    //录入员的value也""
                    document.getElementById('update-peihuoImg1Riqi').value=""
                    document.getElementById('update-peihuoImg2Riqi').value=""
                    document.getElementById('update-peihuoImg3Riqi').value=""
                    document.getElementById('update-peihuoImg4Riqi').value=""
                    document.getElementById('update-peihuoImg5Riqi').value=""
                    document.getElementById('update-peisongImg1Renyuan').value=""
                    document.getElementById('update-peisongImg2Renyuan').value=""
                    document.getElementById('update-peisongImg3Renyuan').value=""

                    //录入员的value也""
                    document.getElementById('update-peisongImg1Riqi').value=""
                    document.getElementById('update-peisongImg2Riqi').value=""
                    document.getElementById('update-peisongImg3Riqi').value=""
                    document.getElementById('update-kucun').value=""
                    document.getElementById('update-kucunTextRenyuan').value=""
                    document.getElementById('update-kucunTextRiqi').value=""
                    $('#update-close-btn').click();
                    $('#update-modal').modal('hide');
                    getList();
                } else {
                    swal("", res.msg, "error");
                }
            })
            // }
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

//     function initFileInput(ctrlName) {
//         var control = $('#' + ctrlName);
//
//         control.fileinput({
//             language: 'zh',
//             uploadUrl: "https://huaqunwechar.com:9076/file/upload",
//             allowedFileExtensions: ['jpg', 'gif', 'png'],
//             uploadAsync: false,
//             showUpload: true,
//             showRemove: true,
//             showPreview: true,
//             showCaption: false,
//             browseClass: "btn btn-primary",
//             maxFileCount: 1,
//             enctype: 'multipart/form-data',
//             validateInialCount: true,
//             msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}!",
//             layoutTelates: {},
//             uploadExtraData: function () {
//                 // var file = $("#add-orderNumber").val() + "-01.jpg"
//                 // // for (var i = 0; i < files.length; i++) {
//                 // //     // var file = files[i];
//                 //
//                 //     // 创建一个新的 Blob 对象，包含原始文件的数据
//                 //     var newBlob = new Blob([file], {type: file.type});
//                 //
//                 //     // 创建一个新的 File 对象，指定新的文件名
//                 //     var newFileName = $("#add-orderNumber").val() + "-01.jpg"; // 这里可以根据需要自定义新的文件名
//                 //     newFile = new File([newBlob], newFileName, {type: file.type});
//                 //     // var formData = new FormData();
//                 //     // formData.append('file', newFile);
//                 //     // return formData;
//                 //
//                 // // }
//                 var name =$("#add-orderNumber").val() + "-01.jpg";
//                 var path = "/huaqun_erqi/"
//                 var kongjian = 3
//                 var formData = {
//                     file: newFile,
//                     name:name,
//                     path: path,
//                     kongjian: kongjian,
//                 };
//
//                 // fetch('https://huaqunwechar.com:9076/file/upload', {
//                 //     method: 'POST',
//                 //     body: formData
//                 // })
//                 return formData;
//             }
//
//         }).on("filebatchuploadsuccess", function (event, data, previewId, index) {
//             console.log('正在上传');
//         }).on("filebatchuploadsuccess", function (event, data, previewId, index) {
//             var files = data.files;
//             // 遍历每个文件
//             // for (var i = 0; i < files.length; i++) {
//             //     var file = files[i];
//             //
//             //     // 创建一个新的 Blob 对象，包含原始文件的数据
//             //     var newBlob = new Blob([file], {type: file.type});
//             //
//             //     // 创建一个新的 File 对象，指定新的文件名
//             //     var newFileName = $("#add-orderNumber").val() + "-01.jpg"; // 这里可以根据需要自定义新的文件名
//             //      newFile = new File([newBlob], newFileName, {type: file.type});
//             //     var formData = new FormData();
//             //     formData.append('file', newFile);
//             //     // return formData;
//             //
//             // }
//             //替换File中的文件
//             var form = data.form,
//                 files = data.files,
//                 extra = data.extra,
//                 response = data.response, reader = data.reader;
//
//             console.log(response);
//             console.log(response.status);
//         }).on("filebatchuploaderror", function (event, data, msg) {
//             console.log('上传失败!' + data.status);
//         })
//     }
// })
        function initFileInput1(ctrlName) {
        var control = $('#' + ctrlName);
        control.fileinput({
            language: 'zh',
            uploadUrl: "https://huaqunwechar.com:9076/file/upload",
            // uploadUrl: "https://localhost:9076/file/upload",
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
                var file = $("#add-orderNumber").val() + "-10.jpg"
                var name = file
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

    function initFileInput2(ctrlName) {
        var control = $('#' + ctrlName);
        control.fileinput({
            language: 'zh',
            uploadUrl: "https://huaqunwechar.com:9076/file/upload",
            // uploadUrl: "https://localhost:9076/file/upload",
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
                var file = $("#add-orderNumber").val() + "-11.jpg"
                var name = file
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

    function initFileInput3(ctrlName) {
        var control = $('#' + ctrlName);
        control.fileinput({
            language: 'zh',
            uploadUrl: "https://huaqunwechar.com:9076/file/upload",
            // uploadUrl: "https://localhost:9076/file/upload",
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
                var file = $("#add-orderNumber").val() + "-12.jpg"
                var name = file
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

    function initFileInput4(ctrlName) {
        var control = $('#' + ctrlName);
        control.fileinput({
            language: 'zh',
            uploadUrl: "https://huaqunwechar.com:9076/file/upload",
            // uploadUrl: "https://localhost:9076/file/upload",
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
                var file = $("#add-orderNumber").val() + "-13.jpg"
                var name = file
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

    function initFileInput5(ctrlName) {
        var control = $('#' + ctrlName);
        control.fileinput({
            language: 'zh',
            uploadUrl: "https://huaqunwechar.com:9076/file/upload",
            // uploadUrl: "https://localhost:9076/file/upload",
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
                var file = $("#add-orderNumber").val() + "-14.jpg"
                var name = file
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

    function initFileInput6(ctrlName) {
        var control = $('#' + ctrlName);
        control.fileinput({
            language: 'zh',
            uploadUrl: "https://huaqunwechar.com:9076/file/upload",
            // uploadUrl: "https://localhost:9076/file/upload",
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
                var file = $("#add-orderNumber").val() + "-18.jpg"
                var name = file
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

    function initFileInput7(ctrlName) {
        var control = $('#' + ctrlName);
        control.fileinput({
            language: 'zh',
            uploadUrl: "https://huaqunwechar.com:9076/file/upload",
            // uploadUrl: "https://localhost:9076/file/upload",
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
                var file = $("#add-orderNumber").val() + "-19.jpg"
                var name = file
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

    function initFileInput8(ctrlName) {
        var control = $('#' + ctrlName);
        control.fileinput({
            language: 'zh',
            uploadUrl: "https://huaqunwechar.com:9076/file/upload",
            // uploadUrl: "https://localhost:9076/file/upload",
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
                var file = $("#add-orderNumber").val() + "-20.jpg"
                var name = file
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

    // function initFileInput9(ctrlName) {
    //     var control = $('#' + ctrlName);
    //     control.fileinput({
    //         language: 'zh',
    //         uploadUrl: "https://huaqunwechar.com:9076/file/upload",
    //         // uploadUrl: "https://localhost:9076/file/upload",
    //         allowedFileExtensions: ['jpg', 'gif', 'png'],
    //         uploadAsync: false,
    //         showUpload: true,
    //         showRemove: true,
    //         showPreview: true,
    //         showCaption: false,
    //         browseClass: "btn btn-primary",
    //         maxFileCount: 1,
    //         enctype: 'multipart/form-data',
    //         validateInialCount: true,
    //         msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}!",
    //         layoutTelates: {},
    //         uploadExtraData: function () {
    //             var file = $("#add-orderNumber").val() + "-10.jpg"
    //             var name = file
    //             var path = "/huaqun_erqi/"
    //             var kongjian = 3
    //             var formData = {
    //                 file: file,
    //                 name: name,
    //                 path: path,
    //                 kongjian: kongjian,
    //             };
    //             return formData;
    //         }
    //     }).on("filebatchuploadsuccess", function (event, data, previewId, index) {
    //         console.log('正在上传');
    //     }).on("filebatchuploadsuccess", function (event, data, previewId, index) {
    //         var form = data.form, files = data.files, extra = data.extra,
    //             response = data.response, reader = data.reader;
    //         console.log(response);
    //         console.log(response.status);
    //     }).on("filebatchuploaderror", function (event, data, msg) {
    //         console.log('上传失败!' + data.status);
    //     })
    // }
    //
    // function initFileInput10(ctrlName) {
    //     var control = $('#' + ctrlName);
    //     control.fileinput({
    //         language: 'zh',
    //         uploadUrl: "https://huaqunwechar.com:9076/file/upload",
    //         // uploadUrl: "https://localhost:9076/file/upload",
    //         allowedFileExtensions: ['jpg', 'gif', 'png'],
    //         uploadAsync: false,
    //         showUpload: true,
    //         showRemove: true,
    //         showPreview: true,
    //         showCaption: false,
    //         browseClass: "btn btn-primary",
    //         maxFileCount: 1,
    //         enctype: 'multipart/form-data',
    //         validateInialCount: true,
    //         msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}!",
    //         layoutTelates: {},
    //         uploadExtraData: function () {
    //             var file = $("#add-orderNumber").val() + "-11.jpg"
    //             var name = file
    //             var path = "/huaqun_erqi/"
    //             var kongjian = 3
    //             var formData = {
    //                 file: file,
    //                 name: name,
    //                 path: path,
    //                 kongjian: kongjian,
    //             };
    //             return formData;
    //         }
    //     }).on("filebatchuploadsuccess", function (event, data, previewId, index) {
    //         console.log('正在上传');
    //     }).on("filebatchuploadsuccess", function (event, data, previewId, index) {
    //         var form = data.form, files = data.files, extra = data.extra,
    //             response = data.response, reader = data.reader;
    //         console.log(response);
    //         console.log(response.status);
    //     }).on("filebatchuploaderror", function (event, data, msg) {
    //         console.log('上传失败!' + data.status);
    //     })
    // }
    //
    // function initFileInput11(ctrlName) {
    //     var control = $('#' + ctrlName);
    //     control.fileinput({
    //         language: 'zh',
    //         uploadUrl: "https://huaqunwechar.com:9076/file/upload",
    //         // uploadUrl: "https://localhost:9076/file/upload",
    //         allowedFileExtensions: ['jpg', 'gif', 'png'],
    //         uploadAsync: false,
    //         showUpload: true,
    //         showRemove: true,
    //         showPreview: true,
    //         showCaption: false,
    //         browseClass: "btn btn-primary",
    //         maxFileCount: 1,
    //         enctype: 'multipart/form-data',
    //         validateInialCount: true,
    //         msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}!",
    //         layoutTelates: {},
    //         uploadExtraData: function () {
    //             var file = $("#add-orderNumber").val() + "-12.jpg"
    //             var name = file
    //             var path = "/huaqun_erqi/"
    //             var kongjian = 3
    //             var formData = {
    //                 file: file,
    //                 name: name,
    //                 path: path,
    //                 kongjian: kongjian,
    //             };
    //             return formData;
    //         }
    //     }).on("filebatchuploadsuccess", function (event, data, previewId, index) {
    //         console.log('正在上传');
    //     }).on("filebatchuploadsuccess", function (event, data, previewId, index) {
    //         var form = data.form, files = data.files, extra = data.extra,
    //             response = data.response, reader = data.reader;
    //         console.log(response);
    //         console.log(response.status);
    //     }).on("filebatchuploaderror", function (event, data, msg) {
    //         console.log('上传失败!' + data.status);
    //     })
    // }
    //
    // function initFileInput12(ctrlName) {
    //     var control = $('#' + ctrlName);
    //     control.fileinput({
    //         language: 'zh',
    //         uploadUrl: "https://huaqunwechar.com:9076/file/upload",
    //         // uploadUrl: "https://localhost:9076/file/upload",
    //         allowedFileExtensions: ['jpg', 'gif', 'png'],
    //         uploadAsync: false,
    //         showUpload: true,
    //         showRemove: true,
    //         showPreview: true,
    //         showCaption: false,
    //         browseClass: "btn btn-primary",
    //         maxFileCount: 1,
    //         enctype: 'multipart/form-data',
    //         validateInialCount: true,
    //         msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}!",
    //         layoutTelates: {},
    //         uploadExtraData: function () {
    //             var file = $("#add-orderNumber").val() + "-13.jpg"
    //             var name = file
    //             var path = "/huaqun_erqi/"
    //             var kongjian = 3
    //             var formData = {
    //                 file: file,
    //                 name: name,
    //                 path: path,
    //                 kongjian: kongjian,
    //             };
    //             return formData;
    //         }
    //     }).on("filebatchuploadsuccess", function (event, data, previewId, index) {
    //         console.log('正在上传');
    //     }).on("filebatchuploadsuccess", function (event, data, previewId, index) {
    //         var form = data.form, files = data.files, extra = data.extra,
    //             response = data.response, reader = data.reader;
    //         console.log(response);
    //         console.log(response.status);
    //     }).on("filebatchuploaderror", function (event, data, msg) {
    //         console.log('上传失败!' + data.status);
    //     })
    // }
    //
    // function initFileInput13(ctrlName) {
    //     var control = $('#' + ctrlName);
    //     control.fileinput({
    //         language: 'zh',
    //         uploadUrl: "https://huaqunwechar.com:9076/file/upload",
    //         // uploadUrl: "https://localhost:9076/file/upload",
    //         allowedFileExtensions: ['jpg', 'gif', 'png'],
    //         uploadAsync: false,
    //         showUpload: true,
    //         showRemove: true,
    //         showPreview: true,
    //         showCaption: false,
    //         browseClass: "btn btn-primary",
    //         maxFileCount: 1,
    //         enctype: 'multipart/form-data',
    //         validateInialCount: true,
    //         msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}!",
    //         layoutTelates: {},
    //         uploadExtraData: function () {
    //             var file = $("#add-orderNumber").val() + "-14.jpg"
    //             var name = file
    //             var path = "/huaqun_erqi/"
    //             var kongjian = 3
    //             var formData = {
    //                 file: file,
    //                 name: name,
    //                 path: path,
    //                 kongjian: kongjian,
    //             };
    //             return formData;
    //         }
    //     }).on("filebatchuploadsuccess", function (event, data, previewId, index) {
    //         console.log('正在上传');
    //     }).on("filebatchuploadsuccess", function (event, data, previewId, index) {
    //         var form = data.form, files = data.files, extra = data.extra,
    //             response = data.response, reader = data.reader;
    //         console.log(response);
    //         console.log(response.status);
    //     }).on("filebatchuploaderror", function (event, data, msg) {
    //         console.log('上传失败!' + data.status);
    //     })
    // }
    //
    // function initFileInput14(ctrlName) {
    //     var control = $('#' + ctrlName);
    //     control.fileinput({
    //         language: 'zh',
    //         uploadUrl: "https://huaqunwechar.com:9076/file/upload",
    //         // uploadUrl: "https://localhost:9076/file/upload",
    //         allowedFileExtensions: ['jpg', 'gif', 'png'],
    //         uploadAsync: false,
    //         showUpload: true,
    //         showRemove: true,
    //         showPreview: true,
    //         showCaption: false,
    //         browseClass: "btn btn-primary",
    //         maxFileCount: 1,
    //         enctype: 'multipart/form-data',
    //         validateInialCount: true,
    //         msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}!",
    //         layoutTelates: {},
    //         uploadExtraData: function () {
    //             var file = $("#add-orderNumber").val() + "-18.jpg"
    //             var name = file
    //             var path = "/huaqun_erqi/"
    //             var kongjian = 3
    //             var formData = {
    //                 file: file,
    //                 name: name,
    //                 path: path,
    //                 kongjian: kongjian,
    //             };
    //             return formData;
    //         }
    //     }).on("filebatchuploadsuccess", function (event, data, previewId, index) {
    //         console.log('正在上传');
    //     }).on("filebatchuploadsuccess", function (event, data, previewId, index) {
    //         var form = data.form, files = data.files, extra = data.extra,
    //             response = data.response, reader = data.reader;
    //         console.log(response);
    //         console.log(response.status);
    //     }).on("filebatchuploaderror", function (event, data, msg) {
    //         console.log('上传失败!' + data.status);
    //     })
    // }
    //
    // function initFileInput26(ctrlName) {
    //     var control = $('#' + ctrlName);
    //     control.fileinput({
    //         language: 'zh',
    //         uploadUrl: "https://huaqunwechar.com:9076/file/upload",
    //         // uploadUrl: "https://localhost:9076/file/upload",
    //         allowedFileExtensions: ['jpg', 'gif', 'png'],
    //         uploadAsync: false,
    //         showUpload: true,
    //         showRemove: true,
    //         showPreview: true,
    //         showCaption: false,
    //         browseClass: "btn btn-primary",
    //         maxFileCount: 1,
    //         enctype: 'multipart/form-data',
    //         validateInialCount: true,
    //         msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}!",
    //         layoutTelates: {},
    //         uploadExtraData: function () {
    //             var file = $("#add-orderNumber").val() + "-19.jpg"
    //             var name = file
    //             var path = "/huaqun_erqi/"
    //             var kongjian = 3
    //             var formData = {
    //                 file: file,
    //                 name: name,
    //                 path: path,
    //                 kongjian: kongjian,
    //             };
    //             return formData;
    //         }
    //     }).on("filebatchuploadsuccess", function (event, data, previewId, index) {
    //         console.log('正在上传');
    //     }).on("filebatchuploadsuccess", function (event, data, previewId, index) {
    //         var form = data.form, files = data.files, extra = data.extra,
    //             response = data.response, reader = data.reader;
    //         console.log(response);
    //         console.log(response.status);
    //     }).on("filebatchuploaderror", function (event, data, msg) {
    //         console.log('上传失败!' + data.status);
    //     })
    // }

//     function initFileInput15(ctrlName) {
//         var control = $('#' + ctrlName);
//         control.fileinput({
//             language: 'zh',
//             uploadUrl: "https://huaqunwechar.com:9076/file/upload",
//             // uploadUrl: "https://localhost:9076/file/upload",
//             allowedFileExtensions: ['jpg', 'gif', 'png'],
//             uploadAsync: false,
//             showUpload: true,
//             showRemove: true,
//             showPreview: true,
//             showCaption: false,
//             browseClass: "btn btn-primary",
//             maxFileCount: 1,
//             enctype: 'multipart/form-data',
//             validateInialCount: true,
//             msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}!",
//             layoutTelates: {},
//             uploadExtraData: function () {
//                 var file = $("#add-orderNumber").val() + "-20.jpg"
//                 var name = file
//                 var path = "/huaqun_erqi/"
//                 var kongjian = 3
//                 var formData = {
//                     file: file,
//                     name: name,
//                     path: path,
//                     kongjian: kongjian,
//                 };
//                 return formData;
//             }
//         }).on("filebatchuploadsuccess", function (event, data, previewId, index) {
//             console.log('正在上传');
//         }).on("filebatchuploadsuccess", function (event, data, previewId, index) {
//             var form = data.form, files = data.files, extra = data.extra,
//                 response = data.response, reader = data.reader;
//             console.log(response);
//             console.log(response.status);
//         }).on("filebatchuploaderror", function (event, data, msg) {
//             console.log('上传失败!' + data.status);
//         })
//     }
//
// });
    function initFileInput9(ctrlName) {
        var control = $('#' + ctrlName);
        control.fileinput({
            language: 'zh',
            uploadUrl: "https://huaqunwechar.com:9076/file/upload",
            // uploadUrl: "https://localhost:9076/file/upload",
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
                var file = $("#update-orderNumber").val() + "-10.jpg"
                var name = file
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

    function initFileInput10(ctrlName) {
        var control = $('#' + ctrlName);
        control.fileinput({
            language: 'zh',
            uploadUrl: "https://huaqunwechar.com:9076/file/upload",
            // uploadUrl: "https://localhost:9076/file/upload",
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
                var file = $("#update-orderNumber").val() + "-11.jpg"
                var name = file
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

    function initFileInput11(ctrlName) {
        var control = $('#' + ctrlName);
        control.fileinput({
            language: 'zh',
            uploadUrl: "https://huaqunwechar.com:9076/file/upload",
            // uploadUrl: "https://localhost:9076/file/upload",
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
                var file = $("#update-orderNumber").val() + "-12.jpg"
                var name = file
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

    function initFileInput12(ctrlName) {
        var control = $('#' + ctrlName);
        control.fileinput({
            language: 'zh',
            uploadUrl: "https://huaqunwechar.com:9076/file/upload",
            // uploadUrl: "https://localhost:9076/file/upload",
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
                var file = $("#update-orderNumber").val() + "-13.jpg"
                var name = file
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

    function initFileInput13(ctrlName) {
        var control = $('#' + ctrlName);
        control.fileinput({
            language: 'zh',
            uploadUrl: "https://huaqunwechar.com:9076/file/upload",
            // uploadUrl: "https://localhost:9076/file/upload",
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
                var file = $("#update-orderNumber").val() + "-14.jpg"
                var name = file
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

    function initFileInput14(ctrlName) {
        var control = $('#' + ctrlName);
        control.fileinput({
            language: 'zh',
            uploadUrl: "https://huaqunwechar.com:9076/file/upload",
            // uploadUrl: "https://localhost:9076/file/upload",
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
                var file = $("#update-orderNumber").val() + "-18.jpg"
                var name = file
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

    function initFileInput26(ctrlName) {
        var control = $('#' + ctrlName);
        control.fileinput({
            language: 'zh',
            uploadUrl: "https://huaqunwechar.com:9076/file/upload",
            // uploadUrl: "https://localhost:9076/file/upload",
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
                var file = $("#update-orderNumber").val() + "-19.jpg"
                var name = file
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

    function initFileInput15(ctrlName) {
        var control = $('#' + ctrlName);
        control.fileinput({
            language: 'zh',
            uploadUrl: "https://huaqunwechar.com:9076/file/upload",
            // uploadUrl: "https://localhost:9076/file/upload",
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
                var file = $("#update-orderNumber").val() + "-20.jpg"
                var name = file
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


//         control.fileinput({
//             language: 'zh',
//             uploadUrl: "https://huaqunwechar.com:9076/file/upload",
//             allowedFileExtensions: ['jpg', 'gif', 'png'],
//             uploadAsync: false,
//             showUpload: true,
//             showRemove: true,
//             showPreview: true,
//             showCaption: false,
//             browseClass: "btn btn-primary",
//             maxFileCount: 1,
//             enctype: 'multipart/form-data',
//             validateInialCount: true,
//             msgFilesTooMany: "选择上传的文件数量({n}) 超过允许的最大数值{m}!",
//             layoutTelates: {},
//             uploadExtraData: function () {
//                 // var file = document.getElementById("fileInput1").files;
//                 var file = $("#add-orderNumber").val() + "-01.jpg"
//                 var path = "/huaqun_erqi/"
//                 var kongjian = 3
//                 var formData = {
//                     file: file,
//                     name: name,
//                     path: path,
//                     kongjian: kongjian,
//                 };
//                 return formData;
//             }
//         }).on("filebatchuploadsuccess", function (event, data, previewId, index) {
//             console.log('正在上传');
//         }).on("filebatchuploadsuccess", function (event, data, previewId, index) {
//             var form = data.form, files = data.files, extra = data.extra,
//                 response = data.response, reader = data.reader;
//             console.log(response);
//             console.log(response.status);
//         }).on("filebatchuploaderror", function (event, data, msg) {
//             console.log('上传失败!' + data.status);
//         })
//     }
// });

function getquyuxl() {
    $ajax({
        type: 'post',
        url: '/xlpz/hqquyu',
    }, false, '', function (res) {
        if (res.code == 200) {
            var item="";
            var arr = {
            blsjg:null,
            blys:null,
            cxdk:null,
            dy:null,
            fjpz:null,
            ghxl:null,
            gy:null,
            id:null,
            jlkw:null,
            jlpp:null,
            kg:null,
            kjlk:null,
            lcys:null,
            lcysLk:null,
            lsw:null,
            lsxh:null,
            lxc:null,
            lxcLk:null,
            pj:null,
            quyu:"",
            shfs:null,
            }
            var arr1 = res.data.concat(arr)
            select_qy = arr1;
            for (var i = 0; i < res.data.length; i++) {
                $("#add-hqquyu").append("<option>" + res.data[i].quyu + "</option>");
                $("#update-hqquyu").append("<option>" + res.data[i].quyu + "</option>");
                item = "<option value=\"" + res.data[i].quyu + "\">" + res.data[i].quyu + "</option>"
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

// let myf1val = document.getElementById('add-customerName').value;
// let myf1val = $('#add-customerName').val();
// function myf1(){
//     // let invalue = document.getElementById('add-customerName').value;
//     let invalue = $('#add-customerName').val();
//     if (invalue !== myf1val) {
//         console.log("123123123");
//     }
// }

// function getkucun() {
//     $ajax({
//         type: 'post',
//         url: '/xlpz/hqkucun',
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             for (var i = 0; i < res.data.length; i++) {
//                 $("#add-kucun").append("<option>" + res.data[i].kucun + "</option>");
//                 $("#update-kucun").append("<option>" + res.data[i].kucun + "</option>");
//             }
//         }
//     })
// }

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
        pagination: false,
        // pageSize: 15,//单页记录数
        clickToSelect: true,
        locale: 'zh-CN',
        toolbar: '#table-toolbar',
        toolbarAlign: 'left',
        theadClasses: "thead-light",//这里设置表头样式
        style: 'table-layout:fixed',
        height: document.body.clientHeight * 0.60,
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
                field: 'wancheng',
                title: '完成情况',
                align: 'center',
                sortable: true,
                width: 130,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }

                    $(document).ready(function () {
                        $('#wancheng' + index).change(function () {
                            var selectedValue = $(this).val();
                            let rows = getTableSelection("#psdTable");
                            $.each(rows, function (index, row) {
                                num = row.data.orderNumber;
                            })
                            $ajax({
                                type: 'post',
                                url: '/psd/updatewc',
                                data: {
                                    wancheng: selectedValue,
                                    orderNumber: num
                                }
                            })

                        })
                    })
                    return "<select id='wancheng" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"wancheng\"" + ")' placeholder='完成状态' type='text' class='form-control'  value='" + value + "'>" +
                        "<option value=''>--请选择完成状态--</option>" +
                        "<option value='优先处理'>优先处理</option>" +
                        "<option value='配货作业中'>配货作业中</option>" +
                        "<option value='配货完成'>配货完成</option>" +
                        "<option value='正在配送'>正在配送</option>" +
                        "<option value='完成'>完成</option>" +
                        "<option value='未完成-缺货'>未完成-缺货</option>" +
                        "<option value='未完成-配错货'>未完成-配错货</option>" +
                        "</select>"
                    document.getElementById("wancheng" + index).value = res.data[0].wancheng
                }
            },
            {
                field: 'orderNumber',
                title: '单号',
                align: 'center',
                sortable: true,
                width: 100,
            }
            // , {
            //     field: 'songhuoDanhao',
            //     title: '送货单号',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }
            , {
                field: 'money',
                title: '货款金额',
                align: 'center',
                sortable: true,
                width: 100,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }
                    $(document).ready(function () {
                        $('#money' + index).change(function () {
                            var selectedValue = $(this).val();
                            let rows = getTableSelection("#psdTable");
                            $.each(rows, function (index, row) {
                                num = row.data.orderNumber;
                            })
                            $ajax({
                                type: 'post',
                                url: '/psd/updatemy',
                                data: {
                                    money: selectedValue,
                                    orderNumber: num
                                }
                            })

                        })
                    })

                    return "<input id='money" + index + "' oninput='javascript:columnUpd(" +index + "," + "\"money\" " + ")' placeholder='货款金额' type='text' class='form-control'  value='" + value + "'>"
                }
            }, {
                field: 'shoukuan',
                title: '收款情况',
                align: 'center',
                sortable: true,
                width: 100,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }
                $(document).ready(function () {
                    $('#shoukuan' + index).change(function () {
                        var selectedValue = $(this).val();
                        let rows = getTableSelection("#psdTable");
                        $.each(rows, function (index, row) {
                            num = row.data.orderNumber;
                        })
                        $ajax({
                            type: 'post',
                            url: '/psd/updatesk',
                            data: {
                                shoukuan: selectedValue,
                                orderNumber: num
                            }
                        })

                    })
                })
                return "<select id='shoukuan" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"shoukuan\"" + ")' placeholder='收款情况' type='text' class='form-control'  value='" + value + "'>" +
                    "<option value=''>--请选择完成状态--</option>" +
                    "<option value='已收款'>已收款</option>" +
                    "<option value='配货收款'>配货收款</option>" +
                    "</select>"
                document.getElementById("shoukuan" + index).value = res.data[0].shoukuan
            }
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
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }

                    $(document).ready(function () {
                        $('#quyu' + index).change(function () {
                            var selectedValue = $(this).val();
                            let rows = getTableSelection("#psdTable");
                            $.each(rows, function (index, row) {
                                num = row.data.orderNumber;
                            })
                            $ajax({
                                type: 'post',
                                url: '/psd/updateqy',
                                data: {
                                    quyu: selectedValue,
                                    orderNumber: num
                                }
                            })

                        })
                    })
                    var this_qy = ""
                    var select2 = ""
                    for (var i = 0; i < select_qy.length; i++) {
                        this_qy = this_qy + "<option value=\"" + select_qy[i].quyu + "\" selected=\"selected\">" + select_qy[i].quyu + "</option>"
                        select2 = "<select id='quyu" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"index\"" + ")' placeholder='区域' type='text' class='form-control'  value='" + value + "'>"
                        select2 = select2 + this_qy;
                        select2 = select2 + "<select/>"
                    }
                    return select2;
                }
            },
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
            }
            // , {
            //     field: 'kucun',
            //     title: '商品库存(文字)',
            //     align: 'center',
            //     sortable: true,
            //     width: 200,
            //     height: 400,
            // }

//             , {
//                 field: 'customerNeedImg1',
//                 title: '图片',
//                 align: 'center',
//                 sortable: true,
//                 width: 130,
//                 height: 50,
//                 formatter: function (value, row, index) {
//                     console.log("value", value)
//                     console.log("row", row)
//                     return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
//                 }
//             }, {
//                 field: 'customerNeedImg2',
//                 title: '图片',
//                 align: 'center',
//                 sortable: true,
//                 width: 130,
//                 height: 50,
//                 formatter: function (value, row, index) {
//                     console.log("value", value)
//                     console.log("row", row)
//                     return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
//                 }
//             }, {
//                 field: 'customerNeedImg3',
//                 title: '图片',
//                 align: 'center',
//                 sortable: true,
//                 width: 130,
//                 height: 50,
//                 formatter: function (value, row, index) {
//                     console.log("value", value)
//                     console.log("row", row)
//                     return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
//                 }
//             }, {
//                 field: 'customerNeedImg4',
//                 title: '图片',
//                 align: 'center',
//                 sortable: true,
//                 width: 130,
//                 height: 50,
//                 formatter: function (value, row, index) {
//                     console.log("value", value)
//                     console.log("row", row)
//                     return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
//                 }
//             }
//             , {
//                 field: 'customerNeedText2',
//                 title: '图片',
//                 align: 'center',
//                 sortable: true,
//                 width: 120,
//                 height: 50,
//                 formatter: function (value, row, index) {
//                     console.log("value", value)
//                     console.log("row", row)
//                     return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
//                 }
//             }
//             , {
//                 field: 'peihuoImg1',
//                 title: '图片',
//                 align: 'center',
//                 sortable: true,
//                 width: 100,
//                 height: 50,
//                 formatter: function (value, row, index) {
//                     console.log("value", value)
//                     console.log("row", row)
//                     return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
//                 }
//             }
//             , {
//                 field: 'peihuoImg2',
//                 title: '图片',
//                 align: 'center',
//                 sortable: true,
//                 width: 100,
//                 height: 50,
//                 formatter: function (value, row, index) {
//                     console.log("value", value)
//                     console.log("row", row)
//                     return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
//                 }
//             }
//             , {
//                 field: 'peisongImg1',
//                 title: '图片',
//                 align: 'center',
//                 sortable: true,
//                 width: 100,
//                 height: 50,
//                 formatter: function (value, row, index) {
//                     console.log("value", value)
//                     console.log("row", row)
//                     return '<img  src=' + value + '  style="width: 50px ;height : 50px;">';
//                 }
//             }
//
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
            , {
                field: 'peihuoImg1',
                title: '图片',
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
                field: 'peihuoImg2',
                title: '图片',
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
                field: 'peihuoImg3',
                title: '图片',
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
                field: 'peihuoImg4',
                title: '图片',
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
            , {
                field: 'peihuoImg5',
                title: '图片',
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
            , {
                field: 'peisongImg1',
                title: '图片',
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
                field: 'peisongImg2',
                title: '图片',
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
                field: 'peisongImg3',
                title: '图片',
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
            length = "00" + (length + 1);
        } else if (Math.floor((length + 1) / 100) === 0) {
            length = "0" + (length + 1);
        } else if (Math.floor((length + 1) / 1000) === 0) {
            // length = "0" + (length + 1);
            length =  (length + 1);
        }
        // else if (Math.floor((length + 1) / 10000) === 0) {
        //     length = (length + 1);
        // }
        console.log(length)
        // djbh = "LK" + date.getFullYear() + (month) + (day) + length;
        djbh = "PS" + date.getFullYear() + (month) + (day) + length;
        console.log(djbh)
    })
    console.log(djbh)
    // $('#add-orderNumber').val(djbh);
    // $('#add-insertDate').val(xdrq);
    // $('#update-insertDate').val(xdrq);
    // $('#add-customerNameRiqi').val(xdrq);
    $('#add-orderNumber').val(djbh);
    $('#add-insertDate').val(xdrq.toString());
    $('#update-insertDate').val(xdrq.toString());
    $('#add-customerNameRiqi').val(xdrq.toString());

}

