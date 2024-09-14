// var idd;
// let select = [];
// let select_lcys = [];
// let select_shfs = [];
// let select_gy = [];
// let select_lxc = [];
// let select_gh= [];
// let select_dy=[];
// let select_kg=[];
// let select_pj=[];
// let n = 0;
// let tbl = 0;
// let r=0;
// let select8="";
// var power1;
// var cishu;
// var id11;
// function getKhmc() {
//     $ajax({
//         type: 'post',
//         url: '/user/hqxlKhmc',
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             for (var i = 0; i < res.data.length; i++) {
//                 $("#add-khmc").append("<option>" + res.data[i].company + "</option>");
//                 $("#update-khmc").append("<option>" + res.data[i].company + "</option>");
//                 $("#khmc").append("<option>" + res.data[i].company + "</option>");
//             }
//         }
//     })
// }
//
// function getShfs() {
//     $ajax({
//         type: 'post',
//         url: '/xlpz/hqxlShfs',
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             var item = "";
//             select_shfs = res.data
//             for (var i = 0; i < res.data.length; i++) {
//
//                 $("#add-shfs").append("<option>" + res.data[i].shfs + "</option>");
//                 $("#update-shfs").append("<option>" + res.data[i].shfs + "</option>");
//                 item = "<option value=\"" + res.data[i].shfs + "\">" + res.data[i].shfs + "</option>"
//             }
//         }
//     })
// }
//
// function getLxc() {
//     $ajax({
//         type: 'post',
//         url: '/xlpz/hqxllxc',
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             var item = "";
//             select_lxc = res.data;
//             r=res.data.length;
//             for (var i = 0; i < res.data.length; i++) {
//                 // $("#add-gh").append("<option>" + res.data[i].lxc + "</option>");
//                 $("#update-gh").append("<option>" + res.data[i].lxc + "</option>");
//                 item = "<option value=\"" + res.data[i].lxc + "\">" + res.data[i].lxc + "</option>"
//             }
//         }
//     })
// }
// // function getGh() {
// //     $ajax({
// //         type: 'post',
// //         url: '/xlpz/ghxl',
// //     }, false, '', function (res) {
// //         if (res.code == 200) {
// //             var item = "";
// //             select_gh = res.data
// //             for (var i = 0; i < res.data.length; i++) {
// //                 // $("#add-gh").append("<option>" + res.data[i].lxc + "</option>");
// //                 $("#update-gh").append("<option>" + res.data[i].ghxl + "</option>");
// //                 item = "<option value=\"" + res.data[i].ghxl + "\">" + res.data[i].ghxl + "</option>"
// //             }
// //         }
// //     })
// // }
//
// function getDy() {
//     $ajax({
//         type: 'post',
//         url: '/xlpz/hqxlDy',
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             var item = "";
//             select_dy = res.data
//             for (var i = 0; i < res.data.length; i++) {
//                 // $("#add-gh").append("<option>" + res.data[i].dy + "</option>");
//                 $("#update-gh").append("<option>" + res.data[i].dy + "</option>");
//                 item = "<option value=\"" + res.data[i].dy + "\">" + res.data[i].dy + "</option>"
//                 if (res.data[i].dy == "") {
//                     break
//                 }
//             }
//         }
//     })
// }
//
// function getKg() {
//     $ajax({
//         type: 'post',
//         url: '/xlpz/hqxlKg',
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             var item = "";
//             select_kg = res.data
//             for (var i = 0; i < res.data.length; i++) {
//                 // $("#add-gh").append("<option>" + res.data[i].kg + "</option>");
//                 $("#update-gh").append("<option>" + res.data[i].kg + "</option>");
//                 item = "<option value=\"" + res.data[i].kg + "\">" + res.data[i].kg + "</option>"
//             }
//         }
//     })
// }
//
// function getPj() {
//     $ajax({
//         type: 'post',
//         url: '/xlpz/hqxlPj',
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             var item = "";
//             select_pj = res.data
//             for (var i = 0; i < res.data.length; i++) {
//                 // $("#add-gh").append("<option>" + res.data[i].pj + "</option>");
//                 $("#update-gh").append("<option>" + res.data[i].pj + "</option>");
//                 item = "<option value=\"" + res.data[i].pj + "\">" + res.data[i].pj + "</option>"
//             }
//         }
//     })
// }
//
// function getLcys() {
//     $ajax({
//         type: 'post',
//         url: '/xlpz/hqxlLcys',
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             var item = "";
//             var arr = {
//                 blsjg:null,
//             blys:null,
//             cxdk:null,
//             dy:null,
//             fjpz:null,
//             ghxl:null,
//             gy:null,
//             id:null,
//             jlkw:null,
//             jlpp:null,
//             kg:null,
//             kjlk:null,
//             lcys:" ",
//             lcysLk:null,
//             lsw:null,
//             lsxh:null,
//             lxc:null,
//             lxcLk:null,
//             pj:null,
//             quyu:null,
//             shfs:null};
//             var arr1 = res.data.concat(arr)
//             select_lcys = arr1;
//             for (var i = 0; i < res.data.length; i++) {
//                 // $("#add-lcys").append("<option>" + res.data[i].lcys + "</option>");
//                 // $("#update-lcys").append("<option>" + res.data[i].lcys + "</option>");
//                 item = "<option value=\"" + res.data[i].lcys + "\">" + res.data[i].lcys + "</option>"
//                 // item= "<option value=\"" + res.data[i].lcys + "\">" + res.data[i].lcys + "</option>"
//                 if (res.data[i].lcys == "") {
//                     break
//                 }
//             }
//         }
//     })
// }
//
// function hqxlGy() {
//     $ajax({
//         type: 'post',
//         url: '/xlpz/hqxlgy',
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             var item = "";
//             select_gy = res.data;
//             for (var i = 0; i < res.data.length; i++) {
//                 // $("#add-gy").append("<option>" + res.data[i].gy + "</option>");
//                 // $("#update-gy").append("<option>" + res.data[i].gy + "</option>");
//                 // item= "<option value=\"" + res.data[i].gy + "\">" + res.data[i].gy + "</option>"
//                 item = "<option value=\"" + res.data[i].gy + "\">" + res.data[i].gy + "</option>"
//                 if (res.data[i].gy == "") {
//                     break
//                 }
//             }
//         }
//     })
// }
//
// function disGy() {
//     document.getElementById("add-gy").setAttribute("disabled", "true")
//     document.getElementById("update-gy").setAttribute("disabled", "true");
// }
//
// // function getInputGh() {
// //
// //     // var elementadd = document.getElementById("class-add-gh");
// //     // elementadd.innerHTML = '';
// //     // elementadd.innerHTML = "<label for='add-gh'>项目名称</label><input id='add-gh' name='gh' type='text' class='form-control' autocomplete='off' data-required='1'>";
// //
// //     var elementupdate = document.getElementById("class-update-gh");
// //     // elementupdate.innerHTML = '';
// //     elementupdate.innerHTML = "<label for='update-gh'>项目名称</label><input id='update-gh' name='gh' type='text' class='form-control' autocomplete='off' data-required='1'>";
// //
// //
// // }
//
// function getInputLcys() {
//
//
//     // var elementadd = document.getElementById("class-add-lcys");
//     // elementadd.innerHTML = '';
//     // elementadd.innerHTML = "<label for='add-lcys'>铝材颜色</label><input id='add-lcys' name='lcys' type='text' class='form-control' autocomplete='off' data-required='1'>";
//
//     var elementupdate = document.getElementById("class-update-lcys");
//     elementupdate.innerHTML = '';
//     elementupdate.innerHTML = "<label for='update-lcys'>铝材颜色</label><input id='update-lcys' name='lcys' type='text' class='form-control' autocomplete='off' data-required='1'>";
//
// }
//
// function getInputGy() {
//
//     var elementadd = document.getElementById("class-add-gy");
//     elementadd.innerHTML = '';
//     elementadd.innerHTML = "<label for='add-gy'>光源</label><input id='add-gy' name='gy' type='text' class='form-control' autocomplete='off' data-required='1'>";
//
//     var elementupdate = document.getElementById("class-update-gy");
//     elementupdate.innerHTML = '';
//     elementupdate.innerHTML = "<label for='update-gy'>光源</label><input id='update-gy' name='gy' type='text' class='form-control' autocomplete='off' data-required='1'>";
//
// }
//
//
// function getSelectGh() {
//     // var elementadd = document.getElementById("add-gh");
//     // elementadd.innerHTML = '';
//     // elementadd.innerHTML = "<label for='add-gh'>项目名称</label><select id='add-gh' name='gh' class='form-control'><option>--请选择--</option></select>";
//
//     var elementupdate = document.getElementById("class-update-gh");
//     elementupdate.innerHTML = '';
//     elementupdate.innerHTML = "<label for='update-gh'>项目名称</label><select id='update-gh' name='gh' class='form-control'><option>--请选择--</option></select>";
// }
//
//
// function getSelectLcys() {
//     // var elementadd = document.getElementById("class-add-lcys");
//     // elementadd.innerHTML = '';
//     // elementadd.innerHTML = "<label for='add-lcys'>铝材颜色</label><select id='add-lcys' name='lcys' class='form-control'><option>--请选择--</option></select>";
//
//     var elementupdate = document.getElementById("class-update-lcys");
//     elementupdate.innerHTML = '';
//     elementupdate.innerHTML = "<label for='update-lcys'>铝材颜色</label><select id='update-lcys' name='lcys' class='form-control'><option>--请选择--</option></select>";
// }
//
//
// function getSelectGy() {
//     // var elementadd = document.getElementById("class-add-gy");
//     // elementadd.innerHTML = '';
//     // elementadd.innerHTML = "<label for='add-gy'>光源</label><select id='add-gy' name='gy' class='form-control'><option>--请选择--</option></select>";
//
//     var elementupdate = document.getElementById("class-update-gy");
//     elementupdate.innerHTML = '';
//     elementupdate.innerHTML = "<label for='update-gy'>光源</label><select id='update-gy' name='gy' class='form-control'><option>--请选择--</option></select>";
// }
//
//
//
// $(document).ready(function () {
//     $('#update-fj').on('change', function () {
//         var selectedValue = $(this).val();
//         var select = document.getElementById('update-gh');
//         if (selectedValue === '房间柜号') {
//             select.innerHTML = '';
//             getInputGh()
//             // getInputLcys()
//             // getInputGy()
//             // disGy()
//         } else if (selectedValue === '铝型材') {
//             // select.innerHTML = '';
//             // getInputGh()
//             getSelectGh();
//             getSelectLcys();
//             // getInputGy();
//             getLxc();
//             getLcys();
//             // disGy();
//         } else if (selectedValue === '电源') {
//             select.innerHTML = '';
//             getSelectGh();
//             // getSelectLcys();
//             getSelectGy();
//             getDy();
//             hqxlGy();
//
//             // getLcys();
//
//         } else if (selectedValue === '开关') {
//             select.innerHTML = '';
//             getSelectGh();
//             // getSelectLcys();
//             // getInputGy();
//             getKg();
//             // getLcys();
//             // disGy();
//         } else if (selectedValue === '配件') {
//             select.innerHTML = '';
//             getSelectGh();
//             // getSelectLcys();
//             // getInputGy();
//             getPj();
//             // getPj();
//             // getLcys();
//             // disGy();
//         }
//
//     })
// })
//
// function getJe() {
//     var ddcd = parseFloat(document.getElementById('add-ddcd').value);
//     var sl = parseFloat(document.getElementById('add-sl').value);
//     var je = ddcd * 1 / 1000 * sl
//
//     document.getElementById("add-je").value = je;
// }
//
// function getupJe() {
//     var ddcd = parseFloat(document.getElementById('update-ddcd').value);
//     var sl = parseFloat(document.getElementById('update-sl').value);
//     var je = ddcd * 1 / 1000 * sl
//
//     document.getElementById("update-je").value = je;
// }
//
// function getupGl() {
//     var ddcd = parseFloat(document.getElementById('update-ddcd').value);
//     var sl = parseFloat(document.getElementById('update-sl').value);
//     var gl = Math.ceil(ddcd / 1000 * sl * 12);
//     document.getElementById("update-gl").value = gl;
// }
//
// function getupkailiao() {
//     var ddcd = parseFloat(document.getElementById('update-ddcd').value);
//     $ajax({
//         type: 'post',
//         url: '/ddxd/getkailiao',
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             for (var i = 0; i < res.data.length; i++) {
//                 var name = res.data[i].name;
//                 var gh = document.getElementById('update-gh').value
//                 if (name == gh) {
//                     var klcc = res.data[i].chicun;
//                     var chicun = ddcd - klcc;
//                     // document.getElementById("add-chicun").value = chicun;
//                     document.getElementById("update-chicun").value = chicun;
//                 }
//             }
//         }
//
//     })
//
// }
//
// function getList() {
//     $('#ksxdrq').val("");
//     $('#jsxdrq').val("");
//     $('#khmc').val("");
//     $('#ddh').val("");
//     $('#azdz').val("");
//     $ajax({
//         type: 'post',
//         url: '/ddxd/getList',
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             setTable(res.data);
//             for(n=0;n<res.data.length;n++) {
//                 document.getElementById("wancheng" + n).value = res.data[n].wancheng;
//             }
//             $("#ddxdTable").colResizable({
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
//
// //     $ajax({
// //         type: 'post',
// //         url: '/user/getPower'
// //     }, false, '', function (res) {
// //         if (res.code == 200) {
// //             var power = res.data;
// //             if (power == "客户") {
// //                 document.getElementById("add-khmc").remove();
// //                 var div = document.getElementById('d-khmc');
// //                 var textBox = document.createElement('input');
// //                 textBox.id='add-khmc';
// //                 textBox.type='text';
// //                 textBox.name='khmc';
// //                 textBox.class='form-control';
// //                 textBox.autocomplete='off';
// //                 div.appendChild(textBox);
// //                 $ajax({
// //                     type: 'post',
// //                     url: '/psd/getloginname',
// //                 }, false, '', function (res) {
// //                     if (res.code == 200) {
// //                         var this_name = res.data;
// //                         document.getElementById("add-khmc").value = this_name;
// //                     }
// //                 })
// //             }
// //         }
// //     })
// // }
//     $ajax({
//         type: 'post',
//         url: '/user/getPower'
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             var power = res.data;
//             power1 = res.data;
//             if (power == "客户") {
//                 document.getElementById("add-khmc").remove();
//                 var div = document.getElementById('d-khmc');
//                 var textBox = document.createElement('input');
//                 textBox.id='add-khmc';
//                 textBox.type='text';
//                 textBox.name='khmc';
//                 textBox.class='form-control';
//                 textBox.autocomplete='off';
//                 div.appendChild(textBox);
//                 document.getElementById("khmc").disabled=true;
//                 $ajax({
//                     type: 'post',
//                     url: '/psd/getloginname',
//                 }, false, '', function (res) {
//                     if (res.code == 200) {
//                         var this_name = res.data;
//                         document.getElementById("add-khmc").value = this_name;
//                         document.getElementById("khmc").value = this_name;
//                     }
//                 })
//             }
//         }
//     })
// }
//
// // function getList2() {
// //     djbh:document.getElementById("add-djbh").value
// //     $ajax({
// //         type: 'post',
// //         url: '/ddxd/getListdjbh',
// //         data:{
// //             djbh:djbh
// //         }
// //     }, false, '', function (res) {
// //         if (res.code == 200) {
// //             setTable2(res.data);
// //             $("#ddxddjbhTable").colResizable({
// //                 liveDrag: true,
// //                 gripInnerHtml: "<div class='grip'></div>",
// //                 draggingClass: "dragging",
// //                 resizeMode: 'fit'
// //             });
// //             for (i = 0; i <= res.data.id; i++) {
// //                 idd = i;
// //             }
// //         }
// //     })
// // }
//
//
// $(function () {
//     getList();
//     getKhmc();
//     getShfs();
//     getLxc();
//     getLcys();
//     getDy();
//     hqxlGy();
//     // getGh();
//     getKg();
//     getPj();
//     // this_kuan = $('table').width();
//     //打印
//     // $('#print-btn').click(function () {
//     //     $('table').width(this_kuan)
//     //     $('.table-div').width(this_kuan)
//     //     var newstr = window.document.getElementById("div").innerHTML;
//     //     var oldstr = window.document.body.innerHTML;
//     //     document.body.innerHTML = newstr;
//     //     window.print();
//     //     document.body.innerHTML = oldstr;
//     //     window.location.reload();
//     //     return false;
//     // });
//     // document.getElementById("dlm").innerText = ($.session.get('username'));
//
//     $ajax({
//         type: 'post',
//         url: '/user/getUserName',
//     }, false, '', function (res) {
//         var this_username = res.data
//         document.getElementById("dlm").innerText = this_username;
//     })
//     // $ajax({
//     //     type: 'post',
//     //     url: '/user/getName',
//     // }, false, '', function (res) {
//     //         var this_name = res.data;
//     //
//     //         document.getElementById("khmc").value = this_name;
//     //
//     // })
//
//     $("#add-djbh").focus(function () {
//         const today = new Date();
//         const year = today.getFullYear();
//         const month = ("0" + (today.getMonth() + 1)).slice(-2);
//         const day = ('0' + today.getDate()).slice(-2);
//         // const djbh = year + month + day + ('000').slice(-3);
//         const bianhao = orderCount.toString().padStart(3, '0');
//         orderCount += 1;
//         $ajax({
//             type: 'post',
//             url: '/ddxd/getList',
//         }, false, '', function (res) {
//             if (res.code == 200) {
//                 if (res.data.length > 0) {
//                     var num = res.data[0].djbh;
//                 }
//                 if (res.data.length = 0) {
//                     $("#add-djbh").val("DD")
//                 } else {
//                     var len = 2;
//                     num = parseInt(num.split("_")[1], 10) + 1
//                     num = num.toString();
//                     while (num.length < len) {
//                         num = "0" + num;
//                     }
//                     $("#add-supplierCode").val("DD" + num)
//                 }
//             }
//         })
//     })
//
//     $('#select-btn').click(function () {
//         var ksxdrq = $('#ksxdrq').val();
//         var jsxdrq = $('#jsxdrq').val();
//         var khmc = $('#khmc').val();
//         var ddh = $('#ddh').val();
//         var azdz = $('#azdz').val();
//         console.log(ksxdrq)
//         if (ksxdrq === "") {
//             ksxdrq = "1999-01-01";
//         }
//         if (jsxdrq === "") {
//             jsxdrq = "2030-12-31";
//         }
//         $ajax({
//             type: 'post',
//             url: '/ddxd/queryList',
//             data: {
//                 ksxdrq: ksxdrq,
//                 jsxdrq: jsxdrq,
//                 khmc: khmc,
//                 ddh: ddh,
//                 azdz: azdz
//             }
//         }, true, '', function (res) {
//             if (res.code == 200) {
//                 setTable(res.data);
//                 for(n=0;n<res.data.length;n++) {
//                     document.getElementById("wancheng" + n).value = res.data[n].wancheng;
//                 }
//             }
//         })
//     });
//
//
//     $('#add-up-btn').click(function () {
//         // alert("请先填入上方数据，点击加一行数据再点击提交");
//         var djbh = document.getElementById("add-djbh").value;
//         $ajax({
//             type: 'post',
//             url: '/ddxd/getListdjbh',
//             async:false,
//             data: {
//                 djbh: djbh
//             }
//         }, false, '', function (res) {
//
//                     cishu = res.data.length
//         })
//         for (i = 0; i < cishu; i = i + 1) {
//             let c = parseFloat($('#id1').val()) + i
//             var q = c.toString();
//             var fj = $('#fj' + q).val();
//             if($('#gh' + q).val()==null || $('#gh' + q).val()==""){
//                 var gh=$('#gh1' + q).val()
//             }else {
//                 var gh = $('#gh' + q).val();
//             }
//             var ddcd = $('#ddcd' + q).val();
//             var sl = $('#sl' + q).val();
//             var d = parseFloat(ddcd);
//             var s = parseFloat(sl);
//             var cxdk = $('#cxdk' + q).val();
//             var lcys = $('#lcys' + q).val();
//             var gy = $('#gy' + q).val();
//             var g = Math.ceil(d / 1000 * s * 12);
//             var gl = g.toString();
//             var bz = $('#bz' + q).val();
//             var dj = $('#dj' + q).val();
//             var j = d * 1 / 1000 * s;
//             var je = j.toString();
//             if(je==null||je==undefined||je==""||isNaN(je)){
//                 id11=q
//             }else{
//                 id11="1"
//             }
//             var chicun = $('#chicun' + q).val();
//             var cxdkRight = $('#cxdkRight' + q).val();
//             var sumMoney = $('#sumMoney' + q).val();
//             var wcsj = $('#wcsj' + q).val();
//             var luruyuan = $('#luruyuan').val();
//
//             $ajax({
//                 type: 'post',
//                 url: '/ddxd/update1',
//                 data: {
//                     fj: fj,
//                     gh: gh,
//                     ddcd: ddcd,
//                     sl: sl,
//                     cxdk: cxdk,
//                     lcys: lcys,
//                     gy: gy,
//                     gl: gl,
//                     bz: bz,
//                     dj: dj,
//                     je: je,
//                     chicun: chicun,
//                     cxdkRight: cxdkRight,
//                     sumMoney: sumMoney,
//                     wcsj: wcsj,
//                     // luruyuan: luruyuan,
//                     id: q,
//                     id11:id11
//                 },
//
//             }, false, '', function (res) {
//                 // swal("", res.msg, "success");
//                 // $('#update-form').reset();
//                 // document.getElementById('add-shouhuo').value = "";
//                 // document.getElementById('add-lxdh').value = "";
//                 $('#add-modal').modal('hide');
//
//             })
//
//         }
//         getList();
//         // alert("添加成功")
//     })
//
//
//     //刷新
//     $("#refresh-btn").click(function () {
//         getList();
//     });
//
//     //点击新增按钮显示弹窗
//     $("#add-btn").click(function () {
//         $('#add-modal').modal('show');
//         $ajax({
//             type: 'post',
//             url: '/ddxd/getListdjbh',
//             data: {
//                 djbh: "exe"
//             }
//         }, true, '', function (res) {
//             setTable2(res.data)
//             $("#ddxddjbhTable").colResizable({
//                 liveDrag: true,
//                 gripInnerHtml: "<div class='grip'></div>",
//                 draggingClass: "dragging",
//                 resizeMode: 'fit'
//             });
//         })
//
//         getToken();
//         // getNumbern();
//         // getInputGh();
//         // getInputLcys();
//         // getInputGy();
//     })
//
//     //  djbh=document.getElementById("add-djbh").value
//
//     //新增弹窗里点击关闭按钮
//     $('#add-close-btn').click(function () {
//
//         $('#add-form')[0].reset();
//         $('#add-modal').modal('hide');
//         // document.getElementById("cishu").value = 0;
//         getList();
//     });
//
//
// //新增弹窗里点击提交按钮
//     $("#update-add-submit-btn").click(function () {
//         getJe();
//         getGl();
//         let params = formToJson("#add-form");
//         if (checkForm('#add-form')) {
//             $ajax({
//                 type: 'post',
//                 url: '/ddxd/add',
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
//             // var ddcd = parseFloat(document.getElementById('add-ddcd').value);
//             // $ajax({
//             //     type: 'post',
//             //     url: '/ddxd/getkailiao',
//             // }, false, '', function (res) {
//             //     if (res.code == 200) {
//             //         for(var i=0;i<res.data.length;i++) {
//             //             var name=res.data[i].name;
//             //             var gh = document.getElementById('add-gh').value
//             //             if (name == gh) {
//             //                 var klcc=res.data[i].chicun;
//             //                 var chicun=ddcd-klcc;
//             //                 // document.getElementById("add-chicun").value = chicun;
//             //                 document.getElementById("add-chicun").value = 111;
//             //             }
//             //         }
//             //     }
//             //
//             // })
//         }
//     });
// //新增一行
//     $("#add-row").click(function () {
//         var khmc = document.getElementById("add-khmc").value
//         var shouhuo = document.getElementById("add-shouhuo").value
//         var lxdh = document.getElementById("add-lxdh").value
//         var shfs = document.getElementById("add-shfs").value
//         var azdz = document.getElementById("add-azdz").value
//         var ddh = document.getElementById("add-ddh").value
//         var lry = document.getElementById("add-luruyuan").value
//         if(khmc==""||shouhuo==""||lxdh==""||shfs==""||azdz==""||ddh==""||lry==""){
//             alert("请输入完整信息")
//         }else {
//             document.getElementById("add-khmc").disabled=true
//             document.getElementById("add-shouhuo").disabled=true
//             document.getElementById("add-lxdh").disabled=true
//             document.getElementById("add-shfs").disabled=true
//             document.getElementById("add-azdz").disabled=true
//             document.getElementById("add-ddh").disabled=true
//             document.getElementById("add-luruyuan").disabled=true
//             n++;
//             let params = formToJson("#add-form");
//             // if (checkForm('#add-form')) {
//             $ajax({
//                     type: 'post',
//                     url: '/ddxd/add1',
//                     data: JSON.stringify({
//                         addInfo: params
//                     }),
//                     dataType: 'json',
//                     contentType: 'application/json;charset=utf-8'
//                 }
//                 , false, '', function (res) {
//                     if (res.code == 200) {
//                         // swal("", res.msg, "success");
//
//                         var djbh = document.getElementById("add-djbh").value;
//                         $ajax({
//                             type: 'post',
//                             url: '/ddxd/getListdjbh',
//                             data: {
//                                 djbh: djbh
//                             }
//                         }, false, '', function (res) {
//
//                             setTable2(res.data)
//                             // addcishu();
//                             getList();
//
//                         })
//
//                     }
//                 })
//             // }
//             // var djbh = document.getElementById("add-djbh").value;
//             // $ajax({
//             //         type: 'post',
//             //         url: '/ddxd/getListdjbh',
//             //         data:{
//             //             djbh: djbh
//             //         },
//             //     }
//             //     , false, '', function (res) {
//             //         setTable2(res.data)
//             //     })
//
//             // function addcishu() {
//             //     var spanElement = document.getElementById("cishu");
//             //     var currentCount = parseInt(spanElement.innerText);
//             //     spanElement.innerText = currentCount + 1;
//             // }
//         }
//     });
//     $('#add-btn3').click(function () {
//         var khmc = document.getElementById("add-khmc").value
//         var shouhuo = document.getElementById("add-shouhuo").value
//         var lxdh = document.getElementById("add-lxdh").value
//         var shfs = document.getElementById("add-shfs").value
//         var azdz = document.getElementById("add-azdz").value
//         var ddh = document.getElementById("add-ddh").value
//         var lry = document.getElementById("add-luruyuan").value
//         if(khmc==""||shouhuo==""||lxdh==""||shfs==""||azdz==""||ddh==""||lry==""){
//             alert("请输入完整信息")
//         }else {
//             document.getElementById("add-khmc").disabled=true
//             document.getElementById("add-shouhuo").disabled=true
//             document.getElementById("add-lxdh").disabled=true
//             document.getElementById("add-shfs").disabled=true
//            document.getElementById("add-azdz").disabled=true
//            document.getElementById("add-ddh").disabled=true
//             document.getElementById("add-luruyuan").disabled=true
//         let params = formToJson("#add-form");
//     for(i=0;i<10;i++) {
//         $ajax({
//                 type: 'post',
//                 url: '/ddxd/add1',
//                 data: JSON.stringify({
//                     addInfo: params
//                 }),
//                 dataType: 'json',
//                 contentType: 'application/json;charset=utf-8'
//             }
//             , false, '', function (res) {
//                 if (res.code == 200) {
//                     // swal("", res.msg, "success");
//
//                     var djbh = document.getElementById("add-djbh").value;
//                     $ajax({
//                         type: 'post',
//                         url: '/ddxd/getListdjbh',
//                         data: {
//                             djbh: djbh
//                         }
//                     }, false, '', function (res) {
//
//                         setTable2(res.data)
//                         addcishu();
//                         getList();
//
//                     })
//
//                 }
//             })
//     }}
//         })
//     //点击修改按钮显示弹窗
//     $('#update-btn').click(function () {
//
//         let rows = getTableSelection('#ddxdTable');
//
//         if (rows.length > 1 || rows.length == 0) {
//             swal('请选择一条数据修改!');
//             return;
//         }
//         $('#update-modal').modal('show');
//         setForm(rows[0].data, '#update-form');
//
//         $('#update-khmc').val(rows[0].data.khmc);
//         $('#update-xdrq').val(rows[0].data.xdrq);
//         // $('#update-djbh').val(rows[0].data.djbh);
//         $('#update-shouhuo').val(rows[0].data.shouhuo);
//         $('#update-lxdh').val(rows[0].data.lxdh);
//         $('#update-shfs').val(rows[0].data.shfs);
//         $('#update-azdz').val(rows[0].data.azdz);
//         $('#update-ddh').val(rows[0].data.ddh);
//         $('#update-luruyuan').val(rows[0].data.luruyuan);
//         $('#update-djbh').val(rows[0].data.djbh);
//         var djbh = document.getElementById("update-djbh").value;
//         $ajax({
//             type: 'post',
//             url: '/ddxd/getListdjbh',
//             data: {
//                 djbh: djbh
//             }
//         }, false, '', function (res) {
//
//             setTable3(res.data)
//             for (i=0;i<res.data.length;i++) {
//                 document.getElementById("fj" + i).value=res.data[i].fj;
//                 document.getElementById("gh"+i).value=res.data[i].gh;
//                 document.getElementById("lcys"+i).value=res.data[i].lcys;
//                 document.getElementById("gy"+i).value=res.data[i].gy;
//             }
//             $("#ddxddjbhTable1").colResizable({
//                 liveDrag: true,
//                 gripInnerHtml: "<div class='grip'></div>",
//                 draggingClass: "dragging",
//                 resizeMode: 'fit'
//             });
//         })
//         // var selectedValue = rows[0].data.fj;
//         // var select = document.getElementById('update-gh');
//         // if (selectedValue === '房间柜号') {
//         //     select.innerHTML = '';
//         //     getSelectGh();
//         //     getInputLcys();
//         //     getInputGy();
//         //     disGy();
//         // } else if (selectedValue === '铝型材') {
//         //     select.innerHTML = '';
//         //     getLxc();
//         //     getLcys();
//         //     disGy();
//         //     getSelectGh();
//         //     getSelectLcys();
//         //     getInputGy();
//         //
//         // } else if (selectedValue === '电源') {
//         //     select.innerHTML = '';
//         //     getSelectGh();
//         //     getSelectLcys();
//         //     getSelectGy();
//         //     hqxlGy();
//         //     getDy();
//         //     getLcys();
//         // } else if (selectedValue === '开关') {
//         //     select.innerHTML = '';
//         //     getSelectGh();
//         //     getSelectLcys();
//         //     getInputGy();
//         //     getKg();
//         //     getLcys();
//         //     disGy();
//         // } else if (selectedValue === '配件') {
//         //     select.innerHTML = '';
//         //     getSelectGh();
//         //     getSelectLcys();
//         //     getInputGy();
//         //     getPj();
//         //     getLcys();
//         //     disGy();
//         // }
//
//         // $('#update-gh').val(rows[0].data.gh);
//         // $('#update-lcys').val(rows[0].data.lcys);
//         // $('#update-ddcd').val(rows[0].data.ddcd);
//         // $('#update-sl').val(rows[0].data.sl);
//         // $('#update-cxdk').val(rows[0].data.cxdk);
//         // $('#update-cxdkRight').val(rows[0].data.cxdkRight);
//         // $('#update-gy').val(rows[0].data.gy);
//         // $('#update-gl').val(rows[0].data.gl);
//         // $('#update-bz').val(rows[0].data.bz);
//         // $('#update-dj').val(rows[0].data.dj);
//         // $('#update-je').val(rows[0].data.je);
//         // $('#update-chicun').val(rows[0].data.chicun);
//     });
//
//     //修改弹窗点击关闭按钮
//     $('#update-close-btn').click(function () {
//
//         $('#update-form')[0].reset();
//         $('#update-modal').modal('hide');
//     });
//
//     //修改弹窗里点击提交按钮
//     $('#update-submit-btn').click(function () {
//         var table = document.getElementById("ddxddjbhTable1")
//         var tbl = table.rows.length;
//         for (i = 0; i < tbl; i = i + 1) {
//             let c = parseFloat($('#id2').val()) + i
//             var q = c.toString();
//             var fj = $('#fj' + q).val();
//             if($('#gh' + q).val()==null || $('#gh' + q).val()==""){
//                 var gh=$('#gh1' + q).val()
//             }else {
//                 var gh = $('#gh' + q).val();
//             }
//             var ddcd = $('#ddcd' + q).val();
//             var sl = $('#sl' + q).val();
//             var d = parseFloat(ddcd);
//             var s = parseFloat(sl);
//             var cxdk = $('#cxdk' + q).val();
//             var lcys = $('#lcys' + q).val();
//             var gy = $('#gy' + q).val();
//             var g = Math.ceil(d / 1000 * s * 12);
//             var gl = g.toString();
//             var bz = $('#bz' + q).val();
//             var dj = $('#dj' + q).val();
//             var j = d * 1 / 1000 * s;
//             var je = j.toString();
//             var chicun = $('#chicun' + q).val();
//             var cxdkRight = $('#cxdkRight' + q).val();
//             var sumMoney = $('#sumMoney' + q).val();
//             var wcsj = $('#wcsj' + q).val();
//             var luruyuan = $('#luruyuan' + q).val();
//             var wancheng = $('#wancheng' + q).val();
//
//             $ajax({
//                 type: 'post',
//                 url: '/ddxd/update1',
//                 data: {
//                     fj: fj,
//                     gh: gh,
//                     ddcd: ddcd,
//                     sl: sl,
//                     cxdk: cxdk,
//                     lcys: lcys,
//                     gy: gy,
//                     gl: gl,
//                     bz: bz,
//                     dj: dj,
//                     je: je,
//                     chicun: chicun,
//                     cxdkRight: cxdkRight,
//                     sumMoney: sumMoney,
//                     wcsj: wcsj,
//                     luruyuan: luruyuan,
//                     wancheng: wancheng,
//                     id: q,
//                     id:1
//                 },
//
//             }, false, '', function (res) {
//                 swal("", res.msg, "success");
//                 $('#update-modal').modal('hide');
//                 getList();
//             })
//
//         }
//         // var d1 = document.getElementById('add-djbh').value;
//         // getupGl();
//         // getupJe();
//         // var msg = confirm("确认要修改吗？");
//         // if (msg) {
//         //     if (checkForm('#update-form')) {
//         //         let params = formToJson('#update-form');
//         //
//         //         $ajax({
//         //             type: 'post',
//         //             url: '/ddxd/update',
//         //             data: {
//         //                 updateJson: JSON.stringify(params),
//         //
//         //             },
//         //             dataType: 'json',
//         //             contentType: 'application/json;charset=utf-8'
//         //         }, false, '', function (res) {
//         //             if (res.code == 200) {
//         //                 swal("", res.msg, "success");
//         //                 $('#update-close-btn').click();
//         //                 $('#update-modal').modal('hide');
//         //                 getList();
//         //             } else {
//         //                 swal("", res.msg, "error");
//         //             }
//         //         })
//         //     }
//         // }
//     });
//
//     //点击删除按钮
//     $('#delete-btn').click(function () {
//         var msg = confirm("确认要删除吗？");
//         if (msg) {
//             let rows = getTableSelection("#ddxdTable");
//             if (rows.length == 0) {
//                 swal('请选择要删除的数据！');
//                 return;
//             }
//
//             var bh = rows[0].data.djbh
//             // let idList = [];
//             // $.each(rows, function (index, row) {
//             //     idList.push(row.data.id)
//             // });
//             $ajax({
//                 type: 'post',
//                 url: '/ddxd/delete',
//                 data: {
//                     djbh: bh
//                 },
//
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
//
// })
//
// function setTable(data) {
//     if ($('#ddxdTable').html != '') {
//         $('#ddxdTable').bootstrapTable('load', data);
//     }
//
//     $('#ddxdTable').bootstrapTable({
//         data: data,
//         sortStable: true,
//         classes: 'table table-hover text-nowrap table table-bordered',
//         idField: 'id',
//         pagination: false,
//         // pageSize: 15,//单页记录数
//         clickToSelect: true,
//         locale: 'zh-CN',
//         toolbar: '#table-toolbar',
//         toolbarAlign: 'left',
//         theadClasses: "thead-light",//这里设置表头样式
//         style: 'table-layout:fixed',
//         height: document.body.clientHeight * 0.60,
//         columns: [
//             {
//                 field: '',
//                 title: '序号',
//                 align: 'center',
//                 width: 70,
//                 formatter: function (value, row, index) {
//                     return index + 1;
//                 }
//             }, {
//                 field: 'xdrq',
//                 title: '下单日期',
//                 align: 'center',
//                 sortable: true,
//                 width: 140,
//             }, {
//                 field: 'khmc',
//                 title: '客户名称',
//                 align: 'center',
//                 sortable: true,
//                 width: 140,
//             }, {
//                 field: 'djbh',
//                 title: '单据编号',
//                 align: 'center',
//                 sortable: true,
//                 width: 140,
//             }
//             , {
//                 field: 'wancheng',
//                 title: '完成状态',
//                 align: 'center',
//                 sortable: true,
//                 width: 180,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//
//                     $(document).ready(function() {
//                         $('#wancheng'+index).change(function() {
//                             var selectedValue = $(this).val();
//                             let rows = getTableSelection("#ddxdTable");
//
//                             $.each(rows, function (index, row) {
//                                 num = row.data.djbh;
//                             })
//                             $ajax({
//                                 type: 'post',
//                                 url: '/ddxd/updatewc',
//                                 data:{
//                                     wancheng:selectedValue,
//                                     djbh:num
//                                 }
//                             })
//                             alert("修改成功");
//                         })
//                     })
//                     return "<select id='wancheng" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"wancheng\"" + ")' placeholder='完成状态' type='text' class='form-control'  value='" + value + "'>" +
//                         "<option value=''>--请选择完成状态--</option>" +
//                         "<option value='已审验'>已审验</option>" +
//                         "<option value='未审验'>未审验</option>" +
//                         "<option value='优先处理'>优先处理</option>" +
//                         "<option value='加工完成'>加工完成</option>" +
//                         "<option value='正在加工'>正在加工</option>" +
//                         "<option value='完成'>完成</option>" +
//                         "</select>"
//                     document.getElementById("wancheng" +index).value=res.data[0].wancheng
//                 }
//             }, {
//                 field: 'je',
//                 title: '订单总金额',
//                 align: 'center',
//                 sortable: true,
//                 width: 140,
//             }, {
//                 field: 'azdz',
//                 title: '安装地址',
//                 align: 'center',
//                 sortable: true,
//                 width: 140,
//             }, {
//                 field: 'ddh',
//                 title: '订单编号',
//                 align: 'center',
//                 sortable: true,
//                 width: 140,
//             }, {
//                 field: 'luruyuan',
//                 title: '操作员',
//                 align: 'center',
//                 sortable: true,
//                 width: 140,
//             }
//             , {
//                 field: 'wcsj',
//                 title: '完成时间',
//                 align: 'center',
//                 sortable: true,
//                 width: 140,
//             }, {
//                 field: 'shfs',
//                 title: '送货方式',
//                 align: 'center',
//                 sortable: true,
//                 width: 140,
//             }
//             // }, {
//             //     field: 'fj',
//             //     title: '项目类别',
//             //     align: 'center',
//             //     sortable: true,
//             //     width: 100,
//             // }, {
//             //     field: 'gh',
//             //     title: '项目名称',
//             //     align: 'center',
//             //     sortable: true,
//             //     width: 100,
//             // }, {
//             //     field: 'lcys',
//             //     title: '铝型材颜色',
//             //     align: 'center',
//             //     sortable: true,
//             //     width: 100,
//             // }, {
//             //     field: 'ddcd',
//             //     title: '灯带长度mm',
//             //     align: 'center',
//             //     sortable: true,
//             //     width: 130,
//             // }, {
//             //     field: 'sl',
//             //     title: '数量(支)',
//             //     align: 'center',
//             //     sortable: true,
//             //     width: 100,
//             // }, {
//             //     field: 'cxdk',
//             //     title: '出线端口左出线',
//             //     align: 'center',
//             //     sortable: true,
//             //     width: 140,
//             // }, {
//             //     field: 'cxdkRight',
//             //     title: '出线端口右出线',
//             //     align: 'center',
//             //     sortable: true,
//             //     width: 140,
//             // }, {
//             //     field: 'gy',
//             //     title: '光源',
//             //     align: 'center',
//             //     sortable: true,
//             //     width: 80,
//             // }, {
//             //     field: 'gl',
//             //     title: '功率W',
//             //     align: 'center',
//             //     sortable: true,
//             //     width: 80,
//             // }, {
//             //     field: 'bz',
//             //     title: '备注',
//             //     align: 'center',
//             //     sortable: true,
//             //     width: 80,
//             // }, {
//             //     field: 'dj',
//             //     title: '单价',
//             //     align: 'center',
//             //     sortable: true,
//             //     width: 80,
//             // }, {
//             //     field: 'chicun',
//             //     title: '开料尺寸',
//             //     align: 'center',
//             //     sortable: true,
//             //     width: 100,
//             //     }, {
//             //         field: 'shouhuo',
//             //         title: '送货地址',
//             //         align: 'center',
//             //         sortable: true,
//             //         width: 100,
//             //     }, {
//             //         field: 'lxdh',
//             //         title: '联系电话',
//             //         align: 'center',
//             //         sortable: true,
//             //         width: 100,
//             //     }, {
//             //         field: 'shfs',
//             //         title: '送货方式',
//             //         align: 'center',
//             //         sortable: true,
//             //         width: 100,
//             //     }
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
//
//
// function setTable2(data) {
// // $(document).ready(function() {
// //         $('#fj'+index).change(function() {
// //             var selectedValue = $(this).val();
// //             var $select8 = $('#gh'+index);
// //             $select8.empty();
// //             if(selectedValue=='铝型材'){
// //                 var this_lcys = ""
// //                 var select4 = ""
// //                 for (var i = 0; i < select_lxc.length; i++) {
// //                     this_lcys = this_lcys + "<option value=\"" + select_lxc[i].lxc + "\" selected=\"selected\">" + select_lxc[i].lxc + "</option>"
// //                     select4 = "<select id='lxc" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"lxc\"" + ")' placeholder='铝材颜色' type='text' class='form-control'  value='" + value + "'>"
// //                     select4 = select4 + this_lxc;
// //                     select4 = select4 + "<select/>"
// //
// //                 }
// //                 return select4;
// //             }
// //             else if(selectedValue=='房间柜号'){
// //                 return "<input id='gh" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"gh\" " + ")' placeholder='项目名称' type='text' class='form-control'  value='" + value + "'>"
// //             }else if(selectedValue=='电源'){
// //                 var this_dy = ""
// //                 var select5 = ""
// //                 for (var i = 0; i < select_dy.length; i++) {
// //                     this_dy = this_dy + "<option value=\"" + select_dy[i].dy + "\" selected=\"selected\">" + select_dy[i].dy + "</option>"
// //                     select5 = "<select id='dy" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"dy\"" + ")' placeholder='电源' type='text' class='form-control'  value='" + value + "'>"
// //                     select5 = select5 + this_dy;
// //                     select5 = select5 + "<select/>"
// //
// //                 }
// //                 return select5;
// //             }else if(selectedValue=='开关'){
// //                 var this_kg = ""
// //                 var select6 = ""
// //                 for (var i = 0; i < select_kg.length; i++) {
// //                     this_kg = this_kg + "<option value=\"" + select_kg[i].kg + "\" selected=\"selected\">" + select_kg[i].kg + "</option>"
// //                     select6 = "<select id='kg" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"kg\"" + ")' placeholder='开关' type='text' class='form-control'  value='" + value + "'>"
// //                     select6 = select6 + this_kg;
// //                     select6 = select6 + "<select/>"
// //
// //                 }
// //                 return select6;
// //             }else if(selectedValue=='配件'){
// //                 var this_pj = ""
// //                 var select7 = ""
// //                 for (var i = 0; i < select_kg.length; i++) {
// //                     this_pj = this_pj + "<option value=\"" + select_pj[i].pj + "\" selected=\"selected\">" + select_pj[i].pj + "</option>"
// //                     select7 = "<select id='pj" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"pj\"" + ")' placeholder='开关' type='text' class='form-control'  value='" + value + "'>"
// //                     select7 = select7 + this_pj;
// //                     select7 = select7 + "<select/>"
// //
// //                 }
// //                 return select7;
// //             }
// //         })
// //     })
//
//     if ($('#ddxddjbhTable').html != '') {
//         $('#ddxddjbhTable').bootstrapTable('load', data);
//     }
//     // $(document).ready(function() {
//     //     $('#fj'+index).change(function() {
//     //         var selectedValue = $(this).val();
//     //         var $select8 = $('#gh'+index);
//     //         $select8.empty();
//     //         if(selectedValue=='铝型材'){
//     //             var this_lcys = ""
//     //             var select4 = ""
//     //             for (var i = 0; i < select_lxc.length; i++) {
//     //                 this_lcys = this_lcys + "<option value=\"" + select_lxc[i].lxc + "\" selected=\"selected\">" + select_lxc[i].lxc + "</option>"
//     //                 select4 = "<select id='lxc" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"lxc\"" + ")' placeholder='铝材颜色' type='text' class='form-control'  value='" + value + "'>"
//     //                 select4 = select4 + this_lxc;
//     //                 select4 = select4 + "<select/>"
//     //
//     //             }
//     //             return select4;
//     //         }
//     //         else if(selectedValue=='房间柜号'){
//     //             return "<input id='gh" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"gh\" " + ")' placeholder='项目名称' type='text' class='form-control'  value='" + value + "'>"
//     //         }else if(selectedValue=='电源'){
//     //             var this_dy = ""
//     //             var select5 = ""
//     //             for (var i = 0; i < select_dy.length; i++) {
//     //                 this_dy = this_dy + "<option value=\"" + select_dy[i].dy + "\" selected=\"selected\">" + select_dy[i].dy + "</option>"
//     //                 select5 = "<select id='dy" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"dy\"" + ")' placeholder='电源' type='text' class='form-control'  value='" + value + "'>"
//     //                 select5 = select5 + this_dy;
//     //                 select5 = select5 + "<select/>"
//     //
//     //             }
//     //             return select5;
//     //         }else if(selectedValue=='开关'){
//     //             var this_kg = ""
//     //             var select6 = ""
//     //             for (var i = 0; i < select_kg.length; i++) {
//     //                 this_kg = this_kg + "<option value=\"" + select_kg[i].kg + "\" selected=\"selected\">" + select_kg[i].kg + "</option>"
//     //                 select6 = "<select id='kg" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"kg\"" + ")' placeholder='开关' type='text' class='form-control'  value='" + value + "'>"
//     //                 select6 = select6 + this_kg;
//     //                 select6 = select6 + "<select/>"
//     //
//     //             }
//     //             return select6;
//     //         }else if(selectedValue=='配件'){
//     //             var this_pj = ""
//     //             var select7 = ""
//     //             for (var i = 0; i < select_kg.length; i++) {
//     //                 this_pj = this_pj + "<option value=\"" + select_pj[i].pj + "\" selected=\"selected\">" + select_pj[i].pj + "</option>"
//     //                 select7 = "<select id='pj" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"pj\"" + ")' placeholder='开关' type='text' class='form-control'  value='" + value + "'>"
//     //                 select7 = select7 + this_pj;
//     //                 select7 = select7 + "<select/>"
//     //
//     //             }
//     //             return select7;
//     //         }
//     //     })
//     // })
//     $('#ddxddjbhTable').bootstrapTable({
//
//         data: data,
//         sortStable: true,
//         classes: 'table table-striped table-hover',
//         idField: 'id',
//         pagination: false,
//         // pageSize: 15,//单页记录数
//         clickToSelect: true,
//         locale: 'zh-CN',
//         toolbarAlign: 'left',
//         theadClasses: "thead-light",//这里设置表头样式
//         style: 'table-layout:fixed',
//         height: document.body.clientHeight * 0.40,
//         columns: [
//             {
//                 field: '',
//                 title: '序号',
//                 align: 'center',
//                 width: 100,
//                 formatter: function (value, row, index) {
//                     return index + 1;
//                 }
//             }, {
//                 field: 'fj',
//                 title: '项目类别',
//                 align: 'center',
//                 sortable: true,
//                 width: 200,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//                     $(document).ready(function() {
//                         $('#fj'+index).change(function() {
//                             var selectedValue = $(this).val();
//
//                             var $select8 = $('#gh'+index);
//                             $select8.empty();
//                             if(selectedValue=='铝型材'){
//                                 var this_lxc = ""
//                                 var this_gy=""
//                                 var select4 = ""
//                                 var select9 = ""
//                                 for (var i = 0; i < r; i++) {
//                                     this_lxc = this_lxc + "<option value=\"" + select_lxc[i].lxc + "\" selected=\"selected\">" + select_lxc[i].lxc + "</option>"
//                                     select4 = "<select id='lxc" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"lxc\"" + ")' placeholder='铝材颜色' type='text' class='form-control'  value='" + value + "'>"
//                                     select4 = select4 + this_lxc;
//                                     select4 = select4 + "<select/>"
//
//                                     $("#gh"+index).append("<option>" + select_lxc[i].lxc + "</option>")
//
//                                 }
//                                 for(var i = 0; i < r; i++) {
//                                     this_gy = this_gy + "<option value=\"" + select_gy[i].gy + "\" selected=\"selected\">" + select_gy[i].gy + "</option>"
//                                     select9 = "<select id='gy" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"gy\"" + ")' placeholder='光源' type='text' class='form-control'  value='" + value + "'>"
//                                     select9 = select9 + this_gy;
//                                     select9 = select9 + "<select/>"
//                                     $("#gy"+index).append("<option>" + select_gy[i].gy + "</option>")
//                                 }
//                                 $("#gh1"+index).hide();
//                                 $("#gh"+index).show();
//                                 return select4;
//                             }
//                             else if(selectedValue=='房间柜号'){
//                                 // $("#gh"+index).remove();
//                                 $("#gy"+index).remove();
//                                 $("#gh"+index).value="";
//                                 $("#gh"+index).hide();
//                                 $("#gh1"+index).show();
//
//                             }else if(selectedValue=='电源'){
//                                 var this_dy = ""
//                                 var select5 = ""
//                                 for (var i = 0; i < select_dy.length; i++) {
//                                     this_dy = this_dy + "<option value=\"" + select_dy[i].dy + "\" selected=\"selected\">" + select_dy[i].dy + "</option>"
//                                     select5 = "<select id='dy" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"dy\"" + ")' placeholder='电源' type='text' class='form-control'  value='" + value + "'>"
//                                     select5 = select5 + this_dy;
//                                     select5 = select5 + "<select/>"
//                                     $("#gh"+index).append("<option>" + select_dy[i].dy + "</option>")
//                                     $("#gy"+index).remove();
//                                     $("#gh1"+index).hide();
//                                     $("#gh"+index).show();
//                                 }
//                                 return select5;
//                             }else if(selectedValue=='开关'){
//                                 var this_kg = ""
//                                 var select6 = ""
//                                 for (var i = 0; i < select_kg.length; i++) {
//                                     this_kg = this_kg + "<option value=\"" + select_kg[i].kg + "\" selected=\"selected\">" + select_kg[i].kg + "</option>"
//                                     select6 = "<select id='kg" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"kg\"" + ")' placeholder='开关' type='text' class='form-control'  value='" + value + "'>"
//                                     select6 = select6 + this_kg;
//                                     select6 = select6 + "<select/>"
//                                     $("#gh"+index).append("<option>" + select_kg[i].kg + "</option>")
//                                     $("#gy"+index).remove();
//                                     $("#gh1"+index).hide();
//                                     $("#gh"+index).show();
//                                 }
//                                 return select6;
//                             }else if(selectedValue=='配件'){
//                                 var this_pj = ""
//                                 var select7 = ""
//                                 for (var i = 0; i < select_kg.length; i++) {
//                                     this_pj = this_pj + "<option value=\"" + select_pj[i].pj + "\" selected=\"selected\">" + select_pj[i].pj + "</option>"
//                                     select7 = "<select id='pj" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"pj\"" + ")' placeholder='开关' type='text' class='form-control'  value='" + value + "'>"
//                                     select7 = select7 + this_pj;
//                                     select7 = select7 + "<select/>"
//                                     $("#gh"+index).append("<option>" + select_pj[i].pj  + "</option>")
//                                     $("#gy"+index).remove();
//                                     $("#gh1"+index).hide();
//                                     $("#gh"+index).show();
//                                 }
//                                 return select7;
//                             }
//                         })
//                     })
//                     return "<select id='fj" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"fj\"" + ")' placeholder='是否月结' type='text' class='form-control'  value='" + value + "'>" +
//                         "<option value=''>请选择项目类别</option>" +
//                         "<option value='铝型材'>铝型材</option>" +
//                         "<option value='房间柜号'>房间柜号</option>" +
//                         "<option value='电源'>电源</option>" +
//                         "<option value='开关'>开关</option>" +
//                         "<option value='配件'>配件</option>" +
//                         "</select>"
//                 }
//             }, {
//                 field: 'gh',
//                 title: '项目名称',
//                 align: 'center',
//                 sortable: true,
//                 width: 200,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//
//                    return "<select id='gh" + index + "' 'columnUpd(" + index + "," + "\"gh\" " + ")' placeholder='项目名称' type='text' class='form-control'  value='" + value + "'>"+
//                        "</select>"
//                 }
//
//
//                 // return "<select id='gh" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"gh\" " + ")' placeholder='项目名称' type='text' class='form-control'  value='" + value + "'>"+"</select>"
//
//             }
//             , {
//                 field: 'gh',
//                 title: '房间柜号',
//                 align: 'center',
//                 sortable: true,
//                 width: 200,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//
//                     return "<input id='gh1" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"gh\" " + ")' placeholder='房间柜号' type='text' class='form-control'  value='" + value + "'>"
//                 }
//             }, {
//                 field: 'lcys',
//                 title: '铝型材颜色',
//                 align: 'center',
//                 sortable: true,
//                 width: 200,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//                     var this_lcys = ""
//                     var select2 = ""
//
//                     for (var i = 0; i < select_lcys.length; i++) {
//                         this_lcys = this_lcys + "<option value=\"" + select_lcys[i].lcys + "\" selected=\"selected\">" + select_lcys[i].lcys + "</option>"
//                         select2 = "<select id='lcys" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"lcys\"" + ")' placeholder='铝材颜色' type='text' class='form-control'  value='" + value + "'>"
//                         select2 = select2 + this_lcys;
//                         select2 = select2 + "<select/>"
//                     }
//                     // $("#lcys"+index).append("<option selected='selected'>" +"--请选择--" + "</option>");
//                     return select2;
//                 }
//             }, {
//                 field: 'ddcd',
//                 title: '灯带长度mm',
//                 align: 'center',
//                 sortable: true,
//                 width: 200,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//
//                     return "<input id='ddcd" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"ddcd\" " + ")' placeholder='灯带长度' type='text' class='form-control'  value='" + value + "'>"
//                 }
//             }, {
//                 field: 'sl',
//                 title: '数量(支)',
//                 align: 'center',
//                 sortable: true,
//                 width: 200,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//
//                     return "<input id='sl" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"sl\" " + ")' placeholder='数量' type='text' class='form-control'  value='" + value + "'>"
//                 }
//             }, {
//                 field: 'cxdk',
//                 title: '出线端口左出线',
//                 align: 'center',
//                 sortable: true,
//                 width: 200,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//
//                     return "<input id='cxdk" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"cxdk\" " + ")' placeholder='出线端口左出线' type='text' class='form-control'  value='" + value + "'>"
//                 }
//             }, {
//                 field: 'cxdk_right',
//                 title: '出线端口右出线',
//                 align: 'center',
//                 sortable: true,
//                 width: 200,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//                     return "<input id='cxdkRight" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"cxdkRight\" " + ")' placeholder='出线端口右出线' type='text' class='form-control'  value='" + value + "'>"
//                 }
//             }, {
//                 field: 'gy',
//                 title: '光源',
//                 align: 'center',
//                 sortable: true,
//                 width: 150,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//                     // var this_gy = ""
//                     // var select3 = ""
//                     // for (var i = 0; i < select_gy.length; i++) {
//                     //     this_gy = this_gy + "<option value=\"" + select_gy[i].gy + "\" selected=\"selected\">" + select_gy[i].gy + "</option>"
//                     //     select3 = "<select id='gy" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"lcys\"" + ")' placeholder='光源' type='text' class='form-control'  value='" + value + "'>"
//                     //     select3 = select3 + this_gy;
//                     //     select3 = select3 + "<select/>"
//                     //
//                     // }
//                     // return select3;
//                     return "<select id='gy" + index + "' 'columnUpd(" + index + "," + "\"gy\" " + ")' placeholder='光源' type='text' class='form-control'  value='" + value + "'>"+
//                         "</select>"
//                 }
//             }, {
//                 field: 'gl',
//                 title: '功率W',
//                 align: 'center',
//                 sortable: true,
//                 width: 150,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//                     return "<input id='gl" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"gl\" " + ")' placeholder='功率' type='text' class='form-control'  value='" + value + "'>"
//                 }
//             }, {
//                 field: 'bz',
//                 title: '备注',
//                 align: 'center',
//                 sortable: true,
//                 width: 150,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//                     return "<input id='bz" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"bz\" " + ")' placeholder='备注' type='text' class='form-control'  value='" + value + "'>"
//                 }
//             }, {
//                 field: 'dj',
//                 title: '单价',
//                 align: 'center',
//                 sortable: true,
//                 width: 150,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//                     return "<input id='dj" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"dj\" " + ")' placeholder='单价' type='text' class='form-control'  value='" + value + "'>"
//                 }
//             }, {
//                 field: 'je',
//                 title: '金额',
//                 align: 'center',
//                 sortable: true,
//                 width: 150,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//                     return "<input id='je" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"je\" " + ")' placeholder='金额' type='text' class='form-control'  value='" + value + "'>"
//                 }
//             }, {
//                 field: 'chicun',
//                 title: '开料尺寸',
//                 align: 'center',
//                 sortable: true,
//                 width: 200,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//                     return "<input id='chicun" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"chicun\" " + ")' placeholder='尺寸' type='text' class='form-control'  value='" + value + "'>"
//                 }
//             }
//             // {
//             //     field: 'shouhuo',
//             //     title: '送货地址',
//             //     align: 'center',
//             //     sortable: true,
//             //     width: 100,
//             //     formatter: function (value, row, index) {
//             //         if (value == null) {
//             //             value = '';
//             //         }
//             //         return "<input id='shouhuo" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"shouhuo\" " + ")' placeholder='收货地址' type='text' class='form-control'  value='" + value + "'>"
//             //     }
//             // }
//             // , {
//             //     field: 'lxdh',
//             //     title: '联系电话',
//             //     align: 'center',
//             //     sortable: true,
//             //     width: 200,
//             //     formatter: function (value, row, index) {
//             //         if (value == null) {
//             //             value = '';
//             //         }
//             //         return "<input id='lxdh" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"lxdh\" " + ")' placeholder='联系电话' type='text' class='form-control'  value='" + value + "'>"
//             //     }
//             // }
//             // , {
//             //     field: 'wancheng',
//             //     title: '完成状态',
//             //     align: 'center',
//             //     sortable: true,
//             //     width: 130,
//             //     formatter: function (value, row, index) {
//             //         if (value == null) {
//             //             value = '';
//             //         }
//             //         return "<input id='lxdh" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"lxdh\" " + ")' placeholder='联系电话' type='text' class='form-control'  value='" + value + "'>"
//             //     }
//             // }
//
//
//             // , {
//             //     field: 'shfs',
//             //     title: '送货方式',
//             //     align: 'center',
//             //     sortable: true,
//             //     width: 100,
//             //     formatter: function (value, row, index) {
//             //         if (value == null) {
//             //             value = '';
//             //         }
//             //         var this_shfs = ""
//             //         var select4 = ""
//             //         for (var i = 0; i < select_shfs.length; i++) {
//             //             this_shfs = this_shfs + "<option value=\"" + select_shfs[i].shfs + "\" selected=\"selected\">" + select_shfs[i].shfs + "</option>"
//             //             select4 = "<select id='shfs" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"shfs\"" + ")' placeholder='收货方式' type='text' class='form-control'  value='" + value + "'>"
//             //             select4 = select4 + this_shfs;
//             //             select4 = select4 + "<select/>"
//             //
//             //         }
//             //         return select4;
//             //     }
//             //
//             // }
//             , {
//                 field: 'id',
//                 title: 'id',
//                 align: 'center',
//                 sortable: true,
//                 hidden:true,
//                 width: 1,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//                     var c = index
//                     return "<input id='id1' name='id' value='" + c + "' oninput='javascript:columnUpd(" + index + "," + "\"id\"" + ")' placeholder='id' type='text' class='form-control'  value='" + value + "'>"
//                 }
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
// function setTable3(data) {
//     if ($('#ddxddjbhTable1').html != '') {
//         $('#ddxddjbhTable1').bootstrapTable('load', data);
//     }
//     // $(document).ready(function() {
//     //     $('#fj'+index).change(function() {
//     //         var selectedValue = $(this).val();
//     //         var $select2 = $('#gh'+index);
//     //         $select2.empty();
//     //         if(selectedValue=='铝型材'){
//     //             var this_lcys = ""
//     //             var select4 = ""
//     //             for (var i = 0; i < select_lxc.length; i++) {
//     //                 this_lcys = this_lcys + "<option value=\"" + select_lxc[i].lxc + "\" selected=\"selected\">" + select_lxc[i].lxc + "</option>"
//     //                 select4 = "<select id='lxc" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"lxc\"" + ")' placeholder='铝材颜色' type='text' class='form-control'  value='" + value + "'>"
//     //                 select4 = select4 + this_lxc;
//     //                 select4 = select4 + "<select/>"
//     //
//     //             }
//     //             return select4;
//     //         }
//     //         // else if(selectedValue=='fangjianguihao')
//     //     })
//     // })
//
//     $('#ddxddjbhTable1').bootstrapTable({
//         data: data,
//         sortStable: true,
//         classes: 'table table-striped table-hover',
//         idField: 'id',
//         pagination: true,
//         pageSize: 15,//单页记录数
//         clickToSelect: true,
//         locale: 'zh-CN',
//         toolbarAlign: 'left',
//         theadClasses: "thead-light",//这里设置表头样式
//         style: 'table-layout:fixed',
//         height: document.body.clientHeight *  0.40,
//         columns: [
//             {
//                 field: '',
//                 title: '序号',
//                 align: 'center',
//                 width: 150,
//                 formatter: function (value, row, index) {
//                     return index + 1;
//                 }
//             }, {
//                 field: 'fj',
//                 title: '项目类别',
//                 align: 'center',
//                 sortable: true,
//                 width: 200,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//                     $(document).ready(function() {
//                         $('#fj'+index).change(function() {
//                             var selectedValue = $(this).val();
//
//                             var $select8 = $('#gh'+index);
//                             $select8.empty();
//                             if(selectedValue=='铝型材'){
//                                 var this_lxc = ""
//                                 var this_gy=""
//                                 var select4 = ""
//                                 var select9 = ""
//                                 for (var i = 0; i < r; i++) {
//                                     this_lxc = this_lxc + "<option value=\"" + select_lxc[i].lxc +">" + select_lxc[i].lxc + "</option>"
//                                     select4 = "<select id='lxc" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"lxc\"" + ")' placeholder='铝材颜色' type='text' class='form-control'  value='" + value + "'>"
//                                     select4 = select4 + this_lxc;
//                                     select4 = select4 + "<select/>"
//
//                                     $("#gh"+index).append("<option>" + select_lxc[i].lxc + "</option>")
//
//                                 }
//                                 for(var i = 0; i < r; i++) {
//                                     this_gy = this_gy + "<option value=\"" + select_gy[i].gy +">" + select_gy[i].gy + "</option>"
//                                     select9 = "<select id='gy" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"gy\"" + ")' placeholder='光源' type='text' class='form-control'  value='" + value + "'>"
//                                     select9 = select9 + this_gy;
//                                     select9 = select9 + "<select/>"
//                                     $("#gy"+index).append("<option>" + select_gy[i].gy + "</option>")
//                                 }
//                                 $("#gh1"+index).value="";
//                                 $("#gh1"+index).hide();
//                                 $("#gh"+index).show();
//                                 return select4;
//                             }
//                             else if(selectedValue=='房间柜号'){
//                                 // $("#gh"+index).remove();
//                                 $("#gy"+index).remove();
//                                 $("#gh"+index).value="";
//                                 $("#gh"+index).hide();
//                                 $("#gh1"+index).show();
//
//                             }else if(selectedValue=='电源'){
//                                 var this_dy = ""
//                                 var select5 = ""
//                                 for (var i = 0; i < select_dy.length; i++) {
//                                     this_dy = this_dy + "<option value=\"" + select_dy[i].dy +">" + select_dy[i].dy + "</option>"
//                                     select5 = "<select id='dy" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"dy\"" + ")' placeholder='电源' type='text' class='form-control'  value='" + value + "'>"
//                                     select5 = select5 + this_dy;
//                                     select5 = select5 + "<select/>"
//                                     $("#gh"+index).append("<option>" + select_dy[i].dy + "</option>")
//                                     $("#gy"+index).remove();
//                                     $("#gh1"+index).hide();
//                                     $("#gh"+index).show();
//                                     $("#gh1"+index).value="";
//                                 }
//
//                                 return select5;
//                             }else if(selectedValue=='开关'){
//                                 var this_kg = ""
//                                 var select6 = ""
//                                 for (var i = 0; i < select_kg.length; i++) {
//                                     this_kg = this_kg + "<option value=\"" + select_kg[i].kg +">" + select_kg[i].kg + "</option>"
//                                     select6 = "<select id='kg" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"kg\"" + ")' placeholder='开关' type='text' class='form-control'  value='" + value + "'>"
//                                     select6 = select6 + this_kg;
//                                     select6 = select6 + "<select/>"
//                                     $("#gh"+index).append("<option>" + select_kg[i].kg + "</option>")
//                                     $("#gy"+index).remove();
//                                     $("#gh1"+index).hide();
//                                     $("#gh"+index).show();
//                                     $("#gh1"+index).value="";
//                                 }
//
//                                 return select6;
//                             }else if(selectedValue=='配件'){
//                                 var this_pj = ""
//                                 var select7 = ""
//                                 for (var i = 0; i < select_kg.length; i++) {
//                                     this_pj = this_pj + "<option value=\"" + select_pj[i].pj +">" + select_pj[i].pj + "</option>"
//                                     select7 = "<select id='pj" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"pj\"" + ")' placeholder='开关' type='text' class='form-control'  value='" + value + "'>"
//                                     select7 = select7 + this_pj;
//                                     select7 = select7 + "<select/>"
//                                     $("#gh"+index).append("<option>" + select_pj[i].pj  + "</option>")
//                                     $("#gy"+index).remove();
//                                     $("#gh1"+index).hide();
//                                     $("#gh"+index).show();
//                                     $("#gh1"+index).value="";
//                                 }
//                                 return select7;
//                             }
//                         })
//                     })
//                     return "<select id='fj" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"fj\"" + ")' placeholder='是否月结' type='text' class='form-control'  value='" + value + "'>" +
//                         "<option value=''>请选择项目类别</option>" +
//                         "<option value='铝型材'>铝型材</option>" +
//                         "<option value='房间柜号'>房间柜号</option>" +
//                         "<option value='电源'>电源</option>" +
//                         "<option value='开关'>开关</option>" +
//                         "<option value='配件'>配件</option>" +
//                         "</select>"
//
//
//                 }
//             }, {
//                 field: 'gh',
//                 title: '项目名称',
//                 align: 'center',
//                 sortable: true,
//                 width: 200,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//
//                     // var this_gh = ""
//                     // var select4 = ""
//                     // for (var i = 0; i < select_lcys.length; i++) {
//                     //     this_gh = this_gh + "<option value=\"" + select_gh[i].ghxl + "\" selected=\"selected\">" + select_gh[i].ghxl + "</option>"
//                     //     select4 = "<select id='gh" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"gh\"" + ")' placeholder='项目名称' type='text' class='form-control'  value='" + value + "'>"
//                     //     select4 = select4 + this_gh;
//                     //     select4 = select4 + "<select/>"
//                     //
//                     // }
//                     // return select4;
//                     return "<select id='gh" + index + "' 'columnUpd(" + index + "," + "\"gh\" " + ")' placeholder='项目名称' type='text' class='form-control'  value='" + value + "'>" +
//                         "</select>"
//                 }
//
//
//                     // return "<select id='gh" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"gh\" " + ")' placeholder='项目名称' type='text' class='form-control'  value='" + value + "'>"+"</select>"
//
//             }, {
//                 field: 'gh',
//                 title: '房间柜号',
//                 align: 'center',
//                 sortable: true,
//                 width: 200,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//
//                     return "<input id='gh1" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"gh\" " + ")' placeholder='房间柜号' type='text' class='form-control'  value='" + value + "'>"
//                 }
//             }, {
//                 field: 'lcys',
//                 title: '铝型材颜色',
//                 align: 'center',
//                 sortable: true,
//                 width: 200,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//                     var this_lcys = ""
//                     var select2 = ""
//                     for (var i = 0; i < select_lcys.length; i++) {
//                         this_lcys = this_lcys + "<option value=\"" + select_lcys[i].lcys +">" + select_lcys[i].lcys + "</option>"
//                         select2 = "<select id='lcys" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"lcys\"" + ")' placeholder='铝材颜色' type='text' class='form-control'  value='" + value + "'>"
//                         select2 = select2 + this_lcys;
//                         select2 = select2 + "<select/>"
//
//                     }
//                     $("#lcys"+index).append("<option selected='selected'>" +"--请选择--" + "</option>");
//                     return select2;
//                 }
//             }, {
//                 field: 'ddcd',
//                 title: '灯带长度mm',
//                 align: 'center',
//                 sortable: true,
//                 width: 200,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//
//                     return "<input id='ddcd" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"ddcd\" " + ")' placeholder='灯带长度' type='text' class='form-control'  value='" + value + "'>"
//                 }
//             }, {
//                 field: 'sl',
//                 title: '数量(支)',
//                 align: 'center',
//                 sortable: true,
//                 width: 200,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//
//                     return "<input id='sl" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"sl\" " + ")' placeholder='数量' type='text' class='form-control'  value='" + value + "'>"
//                 }
//             }, {
//                 field: 'cxdk',
//                 title: '出线端口左出线',
//                 align: 'center',
//                 sortable: true,
//                 width: 200,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//
//                     return "<input id='cxdk" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"cxdk\" " + ")' placeholder='出线端口左出线' type='text' class='form-control'  value='" + value + "'>"
//                 }
//             }, {
//                 field: 'cxdk_right',
//                 title: '出线端口右出线',
//                 align: 'center',
//                 sortable: true,
//                 width: 200,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//                     return "<input id='cxdkRight" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"cxdkRight\" " + ")' placeholder='出线端口右出线' type='text' class='form-control'  value='" + value + "'>"
//                 }
//             }, {
//                 field: 'gy',
//                 title: '光源',
//                 align: 'center',
//                 sortable: true,
//                 width: 150,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//                     var this_gy = ""
//                     var select3 = ""
//                     for (var i = 0; i < select_gy.length; i++) {
//                         this_gy = this_gy + "<option value=\"" + select_gy[i].gy +">" + select_gy[i].gy + "</option>"
//                         select3 = "<select id='gy" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"lcys\"" + ")' placeholder='光源' type='text' class='form-control'  value='" + value + "'>"
//                         select3 = select3 + this_gy;
//                         select3 = select3 + "<select/>"
//
//                     }
//                     return select3;
//                 }
//             }, {
//                 field: 'gl',
//                 title: '功率W',
//                 align: 'center',
//                 sortable: true,
//                 width: 150,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//                     return "<input id='gl" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"gl\" " + ")' placeholder='功率' type='text' class='form-control'  value='" + value + "'>"
//                 }
//             }, {
//                 field: 'bz',
//                 title: '备注',
//                 align: 'center',
//                 sortable: true,
//                 width: 150,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//                     return "<input id='bz" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"bz\" " + ")' placeholder='备注' type='text' class='form-control'  value='" + value + "'>"
//                 }
//             }, {
//                 field: 'dj',
//                 title: '单价',
//                 align: 'center',
//                 sortable: true,
//                 width: 150,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//                     return "<input id='dj" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"dj\" " + ")' placeholder='单价' type='text' class='form-control'  value='" + value + "'>"
//                 }
//             }, {
//                 field: 'je',
//                 title: '金额',
//                 align: 'center',
//                 sortable: true,
//                 width: 150,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//                     return "<input id='je" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"je\" " + ")' placeholder='金额' type='text' class='form-control'  value='" + value + "'>"
//                 }
//             }, {
//                 field: 'chicun',
//                 title: '开料尺寸',
//                 align: 'center',
//                 sortable: true,
//                 width: 200,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//                     return "<input id='chicun" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"chicun\" " + ")' placeholder='尺寸' type='text' class='form-control'  value='" + value + "'>"
//                 }
//             }
//             // , {
//             //     field: 'lxdh',
//             //     title: '联系电话',
//             //     align: 'center',
//             //     sortable: true,
//             //     width: 130,
//             //     formatter: function (value, row, index) {
//             //         if (value == null) {
//             //             value = '';
//             //         }
//             //         return "<input id='lxdh" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"lxdh\" " + ")' placeholder='联系电话' type='text' class='form-control'  value='" + value + "'>"
//             //     }
//             // }
//             , {
//                 field: 'wancheng',
//                 title: '完成状态',
//                 align: 'center',
//                 sortable: true,
//                 width: 180,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//                     return "<select id='wancheng" + index + "' oninput='javascript:columnUpd(" + index + "," + "\"wancheng\"" + ")' placeholder='完成状态' type='text' class='form-control'  value='" + value + "'>" +
//                         "<option value=''>--请选择完成状态--</option>" +
//                         "<option value='已审验'>已审验</option>" +
//                         "<option value='未审验'>未审验</option>" +
//                         "<option value='优先处理'>优先处理</option>" +
//                         "<option value='加工完成'>加工完成</option>" +
//                         "<option value='正在加工'>正在加工</option>" +
//                         "<option value='完成'>完成</option>" +
//                         "</select>"
//                 }
//             }, {
//                 field: 'id',
//                 title: 'id',
//                 align: 'center',
//                 sortable: true,
//                 width: 1,
//                 formatter: function (value, row, index) {
//                     if (value == null) {
//                         value = '';
//                     }
//                     var c = index
//                     return "<input id='id2' name='id' value='" + c + "' oninput='javascript:columnUpd(" + index + "," + "\"id\"" + ")' placeholder='id' type='text' class='form-control'  value='" + value + "'>"
//                 }
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
//         url: '/ddxd/getList',
//         data: {
//             query: query,
//         }
//     }, true, '', function (res) {
//         if (res.code == 200) {
//             setTable(res.data);
//             console.log(res.data)
//             var array = res.data
//             var header = []
//             for (var i = 0; i < array.length; i++) {
//                 var body = {
//                     khmc: array[i].khmc,
//                     xdrq: array[i].xdrq,
//                     djbh: array[i].djbh,
//                     shouhuo: array[i].shouhuo,
//                     lxdh: array[i].lxdh,
//                     shfs: array[i].shfs,
//                     azdz: array[i].azdz,
//                     ddh: array[i].ddh,
//                     fj: array[i].fj,
//                     gh: array[i].gh,
//                     ddcd: array[i].ddcd,
//                     sl: array[i].sl,
//                     cxdk: array[i].cxdk,
//                     cxdkRight: array[i].cxdkRight,
//                     lcys: array[i].lcys,
//                     gy: array[i].gy,
//                     dy: array[i].dy,
//                     kg: array[i].kg,
//                     pj: array[i].pj,
//                     gl: array[i].gl,
//                     bz: array[i].bz,
//                     dj: array[i].dj,
//                     fkzt: array[i].fkzt,
//                     hd: array[i].hd,
//                     shunxu: array[i].shunxu,
//                     chicun: array[i].chicun,
//                     summoney: array[i].summoney,
//                     wancheng: array[i].wancheng,
//                     jgczy: array[i].jgczy,
//                     wcsj: array[i].wcsj,
//                     luruyuan: array[i].luruyuan,
//                     je: array[i].je,
//                 }
//                 header.push(body)
//             }
//             console.log(header)
//             title = ['客户名称', '下单日期', '单据编号', '收货', '联系电话', '送货方式', '安装地址', '订单号', '项目类别', '项目名称', '灯带长度mm', '数量(支)', '出线端口左', '出线端口右', '铝材颜色', '光源', '电源', '开关', '配件', '功率W', '备注', '单价', '付款状态', '审单', '顺序', '尺寸', '总金额', '完成状态', '加工操作员', '完成时间', '录入员', '金额']
//             JSONToExcelConvertor(header, "灯带下单", title)
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
//         if (res.code == 200) {
//
//             //默认当前日期
//             var date = new Date();
//             var day = ("0" + date.getDate()).slice(-2);
//             var month = ("0" + (date.getMonth() + 1)).slice(-2);
//             //拼接成yyyy-MM-dd的形式
//             var xdrq = date.getFullYear() + "-" + (month) + "-" + (day);
//             var djbh = "";
//             var ksxdrq = date.getFullYear() + "-" + (month) + "-" + (day);
//             var jsxdrq = date.getFullYear() + "-" + (month) + "-" + ("0" + (date.getDate() + 1)).slice(-2);
//             var khmc = "";
//             var ddh = "";
//             var azdz = "";
//             $ajax({
//                 type: 'post',
//                 url: '/ddxd/queryList1',
//                 data: {
//                     ksxdrq: ksxdrq,
//                     jsxdrq: jsxdrq,
//                     khmc: khmc,
//                     ddh: ddh,
//                     azdz: azdz
//                 },
//                 async: false,
//             }, false, '', function (res) {
//                 var length;
//
//                 length = 0;
//                 if (res.data != undefined) {
//                     length = res.data.length
//                 }
//                 console.log(length)
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
//                 djbh = "DD" + date.getFullYear() + (month) + (day) + length;
//                 console.log(djbh)
//             })
//             console.log(djbh)
//             setForm(res.data, '#add-form');
//             $('#add-luruyuan').val(res.data.name);
//             $('#add-xdrq').val(xdrq);
//             $('#add-djbh').val(djbh);
//
//         }
//     })
// }
// // function getNumbern() {
// //     //默认当前日期
// //     //默认当前日期
// //     var date = new Date();
// //     var day = ("0" + date.getDate()).slice(-2);
// //     var month = ("0" + (date.getMonth() + 1)).slice(-2);
// //     //拼接成yyyy-MM-dd的形式
// //     var xdrq = date.getFullYear() + "-" + (month) + "-" + (day);
// //     var djbh = "";
// //     var ksxdrq = date.getFullYear() + "-" + (month) + "-" + (day);
// //     var jsxdrq = date.getFullYear() + "-" + (month) + "-" + ("0" + (date.getDate() + 1)).slice(-2);
// //     var khmc = "";
// //     var ddh = "";
// //     var azdz = "";
// //     $ajax({
// //         type: 'post',
// //         url: '/ddxd/queryList1',
// //         data: {
// //             ksxdrq: ksxdrq,
// //             jsxdrq: jsxdrq,
// //             khmc: khmc,
// //             ddh: ddh,
// //             azdz: azdz
// //         },
// //         async: false,
// //     }, false, '', function (res) {
// //         var length;
// //
// //         length = 0;
// //         if (res.data != undefined) {
// //             length = res.data.length
// //         }
// //         console.log(length)
// //         if (Math.floor((length + 1) / 10) === 0) {
// //             length = "000" + (length + 1);
// //         } else if (Math.floor((length + 1) / 100) === 0) {
// //             length = "00" + (length + 1);
// //         } else if (Math.floor((length + 1) / 1000) === 0) {
// //             length = "0" + (length + 1);
// //         } else if (Math.floor((length + 1) / 10000) === 0) {
// //             length = (length + 1);
// //         }
// //         console.log(length)
// //         djbh = "DD" + date.getFullYear() + (month) + (day) + length;
// //         console.log(djbh)
// //     })
// //     console.log(djbh)
// //     setForm(res.data, '#add-form');
// //     $('#add-luruyuan').val(res.data.name);
// //     $('#add-xdrq').val(xdrq);
// //     $('#add-djbh').val(djbh);
// //
// //
// // }
//
// $('#add-comeAgain-btn').click(function () {
//
//     getJe();
//     getGl();
//     getkailiao();
//     let params = formToJson("#add-form");
//     if (checkForm('#add-form')) {
//         $ajax({
//             type: 'post',
//             url: '/ddxd/add',
//             data: JSON.stringify({
//                 addInfo: params
//             }),
//             dataType: 'json',
//             contentType: 'application/json;charset=utf-8'
//         }, false, '', function (res) {
//             if (res.code == 200) {
//                 swal("", res.msg, "success");
//                 $('#add-form')[0].reset();
//                 getList();
//                 $('#add-close-btn').click();
//             }
//         })
//     }
//
//
//     // $('#add-modal').modal('show');
//     getToken()
//     // getNumbern()
//     // getInputGh()
//     getInputLcys()
//     getInputGy()
//
// })

var idd;
let select = [];
let select_lcys = [];
let select_shfs = [];
let select_gy = [];
let select_lxc = [];
let select_gh= [];
let select_dy=[];
let select_kg=[];
let select_pj=[];
let n = 0;
let tbl = 0;
let r=0;
let select8="";
var power1;
var cishu;
var id11;
var cname="";


function getKhmc() {
    $ajax({
        type: 'post',
        url: '/user/hqxlKhmc',
    }, false, '', function (res) {
        if (res.code == 200) {
            for (var i = 0; i < res.data.length; i++) {
                $("#add-khmc").append("<option>" + res.data[i].company + "</option>");
                $("#update-khmc").append("<option>" + res.data[i].company + "</option>");
                $("#khmc").append("<option>" + res.data[i].company + "</option>");
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
            var item = "";
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
                quyu:null,
                shfs:""};
            var arr1 = res.data.concat(arr)
            select_shfs = arr1;

            for (var i = 0; i < res.data.length; i++) {

                $("#add-shfs").append("<option>" + res.data[i].shfs + "</option>");
                $("#update-shfs").append("<option>" + res.data[i].shfs + "</option>");
                item = "<option value=\"" + res.data[i].shfs + "\">" + res.data[i].shfs + "</option>"
            }
        }
    })
}

function getLxc() {
    $ajax({
        type: 'post',
        url: '/xlpz/hqxllxc',
    }, false, '', function (res) {
        if (res.code == 200) {
            var item = "";
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
                lxc:"",
                lxcLk:null,
                pj:null,
                quyu:null,
                shfs:null};
            var arr1 = res.data.concat(arr)
            select_lxc = arr1;

            r=res.data.length;
            for (var i = 0; i < res.data.length; i++) {
                // $("#add-gh").append("<option>" + res.data[i].lxc + "</option>");
                $("#update-gh").append("<option>" + res.data[i].lxc + "</option>");
                item = "<option value=\"" + res.data[i].lxc + "\">" + res.data[i].lxc + "</option>"
            }
        }
    })
}
// function getGh() {
//     $ajax({
//         type: 'post',
//         url: '/xlpz/ghxl',
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             var item = "";
//             select_gh = res.data
//             for (var i = 0; i < res.data.length; i++) {
//                 // $("#add-gh").append("<option>" + res.data[i].lxc + "</option>");
//                 $("#update-gh").append("<option>" + res.data[i].ghxl + "</option>");
//                 item = "<option value=\"" + res.data[i].ghxl + "\">" + res.data[i].ghxl + "</option>"
//             }
//         }
//     })
// }

function getDy() {
    $ajax({
        type: 'post',
        url: '/xlpz/hqxlDy',
    }, false, '', function (res) {
        if (res.code == 200) {
            var item = "";
            var arr = {
                blsjg:null,
                blys:null,
                cxdk:null,
                dy:"",
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
                quyu:null,
                shfs:null};
            var arr1 = res.data.concat(arr)
            select_dy = arr1;

            for (var i = 0; i < res.data.length; i++) {
                // $("#add-gh").append("<option>" + res.data[i].dy + "</option>");
                $("#update-gh").append("<option>" + res.data[i].dy + "</option>");
                item = "<option value=\"" + res.data[i].dy + "\">" + res.data[i].dy + "</option>"
                if (res.data[i].dy == "") {
                    break
                }
            }
        }
    })
}

function getKg() {
    $ajax({
        type: 'post',
        url: '/xlpz/hqxlKg',
    }, false, '', function (res) {
        if (res.code == 200) {
            var item = "";
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
                kg:"",
                kjlk:null,
                lcys:null,
                lcysLk:null,
                lsw:null,
                lsxh:null,
                lxc:null,
                lxcLk:null,
                pj:null,
                quyu:null,
                shfs:null};
            var arr1 = res.data.concat(arr)
            select_kg = arr1;

            for (var i = 0; i < res.data.length; i++) {
                // $("#add-gh").append("<option>" + res.data[i].kg + "</option>");
                $("#update-gh").append("<option>" + res.data[i].kg + "</option>");
                item = "<option value=\"" + res.data[i].kg + "\">" + res.data[i].kg + "</option>"
            }
        }
    })
}

function getPj() {
    $ajax({
        type: 'post',
        url: '/xlpz/hqxlPj',
    }, false, '', function (res) {
        if (res.code == 200) {
            var item = "";
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
                pj:"",
                quyu:null,
                shfs:null};
            var arr1 = res.data.concat(arr)
            select_pj = arr1;

            for (var i = 0; i < res.data.length; i++) {
                // $("#add-gh").append("<option>" + res.data[i].pj + "</option>");
                $("#update-gh").append("<option>" + res.data[i].pj + "</option>");
                item = "<option value=\"" + res.data[i].pj + "\">" + res.data[i].pj + "</option>"
            }
        }
    })
}

function getLcys() {
    $ajax({
        type: 'post',
        url: '/xlpz/hqxlLcys',
    }, false, '', function (res) {
        if (res.code == 200) {
            var item = "";
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
                lcys:" ",
                lcysLk:null,
                lsw:null,
                lsxh:null,
                lxc:null,
                lxcLk:null,
                pj:null,
                quyu:null,
                shfs:null};
            var arr1 = res.data.concat(arr)
            select_lcys = arr1;
            for (var i = 0; i < res.data.length; i++) {
                // $("#add-lcys").append("<option>" + res.data[i].lcys + "</option>");
                // $("#update-lcys").append("<option>" + res.data[i].lcys + "</option>");
                item = "<option value=\"" + res.data[i].lcys + "\">" + res.data[i].lcys + "</option>"
                // item= "<option value=\"" + res.data[i].lcys + "\">" + res.data[i].lcys + "</option>"
                if (res.data[i].lcys == "") {
                    break
                }
            }
        }
    })
}

function hqxlGy() {
    $ajax({
        type: 'post',
        url: '/xlpz/hqxlgy',
    }, false, '', function (res) {
        if (res.code == 200) {
            var item = "";
            var arr = {
                blsjg:null,
                blys:null,
                cxdk:null,
                dy:null,
                fjpz:null,
                ghxl:null,
                gy:"",
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
                quyu:null,
                shfs:null};
            var arr1 = res.data.concat(arr)
            select_gy = arr1;

            for (var i = 0; i < res.data.length; i++) {
                // $("#add-gy").append("<option>" + res.data[i].gy + "</option>");
                // $("#update-gy").append("<option>" + res.data[i].gy + "</option>");
                // item= "<option value=\"" + res.data[i].gy + "\">" + res.data[i].gy + "</option>"
                item = "<option value=\"" + res.data[i].gy + "\">" + res.data[i].gy + "</option>"
                if (res.data[i].gy == "") {
                    break
                }
            }
        }
    })
}

function disGy() {
    document.getElementById("add-gy").setAttribute("disabled", "true")
    document.getElementById("update-gy").setAttribute("disabled", "true");
}

// function getInputGh() {
//
//     // var elementadd = document.getElementById("class-add-gh");
//     // elementadd.innerHTML = '';
//     // elementadd.innerHTML = "<label for='add-gh'>项目名称</label><input id='add-gh' name='gh' type='text' class='form-control' autocomplete='off' data-required='1'>";
//
//     var elementupdate = document.getElementById("class-update-gh");
//     // elementupdate.innerHTML = '';
//     elementupdate.innerHTML = "<label for='update-gh'>项目名称</label><input id='update-gh' name='gh' type='text' class='form-control' autocomplete='off' data-required='1'>";
//
//
// }

function getInputLcys() {


    // var elementadd = document.getElementById("class-add-lcys");
    // elementadd.innerHTML = '';
    // elementadd.innerHTML = "<label for='add-lcys'>铝材颜色</label><input id='add-lcys' name='lcys' type='text' class='form-control' autocomplete='off' data-required='1'>";

    var elementupdate = document.getElementById("class-update-lcys");
    elementupdate.innerHTML = '';
    elementupdate.innerHTML = "<label for='update-lcys'>铝材颜色</label><input id='update-lcys' name='lcys' type='text' class='form-control' autocomplete='off' data-required='1'>";

}

function getInputGy() {

    var elementadd = document.getElementById("class-add-gy");
    elementadd.innerHTML = '';
    elementadd.innerHTML = "<label for='add-gy'>光源</label><input id='add-gy' name='gy' type='text' class='form-control' autocomplete='off' data-required='1'>";

    var elementupdate = document.getElementById("class-update-gy");
    elementupdate.innerHTML = '';
    elementupdate.innerHTML = "<label for='update-gy'>光源</label><input id='update-gy' name='gy' type='text' class='form-control' autocomplete='off' data-required='1'>";

}


function getSelectGh() {
    // var elementadd = document.getElementById("add-gh");
    // elementadd.innerHTML = '';
    // elementadd.innerHTML = "<label for='add-gh'>项目名称</label><select id='add-gh' name='gh' class='form-control'><option>--请选择--</option></select>";

    var elementupdate = document.getElementById("class-update-gh");
    elementupdate.innerHTML = '';
    elementupdate.innerHTML = "<label for='update-gh'>项目名称</label><select id='update-gh' name='gh' class='form-control'><option>--请选择--</option></select>";
}


function getSelectLcys() {
    // var elementadd = document.getElementById("class-add-lcys");
    // elementadd.innerHTML = '';
    // elementadd.innerHTML = "<label for='add-lcys'>铝材颜色</label><select id='add-lcys' name='lcys' class='form-control'><option>--请选择--</option></select>";

    var elementupdate = document.getElementById("class-update-lcys");
    elementupdate.innerHTML = '';
    elementupdate.innerHTML = "<label for='update-lcys'>铝材颜色</label><select id='update-lcys' name='lcys' class='form-control'><option>--请选择--</option></select>";
}


function getSelectGy() {
    // var elementadd = document.getElementById("class-add-gy");
    // elementadd.innerHTML = '';
    // elementadd.innerHTML = "<label for='add-gy'>光源</label><select id='add-gy' name='gy' class='form-control'><option>--请选择--</option></select>";

    var elementupdate = document.getElementById("class-update-gy");
    elementupdate.innerHTML = '';
    elementupdate.innerHTML = "<label for='update-gy'>光源</label><select id='update-gy' name='gy' class='form-control'><option>--请选择--</option></select>";
}



$(document).ready(function () {
    $('#update-fj').on('change', function () {
        var selectedValue = $(this).val();
        var select = document.getElementById('update-gh');
        if (selectedValue === '房间柜号') {
            select.innerHTML = '';
            getInputGh()
            // getInputLcys()
            // getInputGy()
            // disGy()
        } else if (selectedValue === '铝型材') {
            // select.innerHTML = '';
            // getInputGh()
            getSelectGh();
            getSelectLcys();
            // getInputGy();
            getLxc();
            getLcys();
            // disGy();
        } else if (selectedValue === '电源') {
            select.innerHTML = '';
            getSelectGh();
            // getSelectLcys();
            getSelectGy();
            getDy();
            hqxlGy();

            // getLcys();

        } else if (selectedValue === '开关') {
            select.innerHTML = '';
            getSelectGh();
            // getSelectLcys();
            // getInputGy();
            getKg();
            // getLcys();
            // disGy();
        } else if (selectedValue === '配件') {
            select.innerHTML = '';
            getSelectGh();
            // getSelectLcys();
            // getInputGy();
            getPj();
            // getPj();
            // getLcys();
            // disGy();
        }

    })
})

function getJe() {
    var ddcd = parseFloat(document.getElementById('add-ddcd').value);
    var sl = parseFloat(document.getElementById('add-sl').value);
    var je = ddcd * 1 / 1000 * sl

    document.getElementById("add-je").value = je;
}

function getupJe() {
    var ddcd = parseFloat(document.getElementById('update-ddcd').value);
    var sl = parseFloat(document.getElementById('update-sl').value);
    var je = ddcd * 1 / 1000 * sl

    document.getElementById("update-je").value = je;
}

function getupGl() {
    var ddcd = parseFloat(document.getElementById('update-ddcd').value);
    var sl = parseFloat(document.getElementById('update-sl').value);
    var gl = Math.ceil(ddcd / 1000 * sl * 12);
    document.getElementById("update-gl").value = gl;
}

function getupkailiao() {
    var ddcd = parseFloat(document.getElementById('update-ddcd').value);
    $ajax({
        type: 'post',
        url: '/ddxd/getkailiao',
    }, false, '', function (res) {
        if (res.code == 200) {
            for (var i = 0; i < res.data.length; i++) {
                var name = res.data[i].name;
                var gh = document.getElementById('update-gh').value
                if (name == gh) {
                    var klcc = res.data[i].chicun;
                    var chicun = ddcd - klcc;
                    // document.getElementById("add-chicun").value = chicun;
                    document.getElementById("update-chicun").value = chicun;
                }
            }
        }

    })

}

function getList() {
    $('#ksxdrq').val("");
    $('#jsxdrq').val("");
    $('#khmc').val("");
    $('#ddh').val("");
    $('#azdz').val("");
    $ajax({
        type: 'post',
        url: '/ddxd/getList',
    }, false, '', function (res) {
        if (res.code == 200) {
            setTable(res.data);
            for(n=0;n<res.data.length;n++) {
                document.getElementById("wancheng" + n).value = res.data[n].wancheng;
            }
            $("#ddxdTable").colResizable({
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

//     $ajax({
//         type: 'post',
//         url: '/user/getPower'
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             var power = res.data;
//             if (power == "客户") {
//                 document.getElementById("add-khmc").remove();
//                 var div = document.getElementById('d-khmc');
//                 var textBox = document.createElement('input');
//                 textBox.id='add-khmc';
//                 textBox.type='text';
//                 textBox.name='khmc';
//                 textBox.class='form-control';
//                 textBox.autocomplete='off';
//                 div.appendChild(textBox);
//                 $ajax({
//                     type: 'post',
//                     url: '/psd/getloginname',
//                 }, false, '', function (res) {
//                     if (res.code == 200) {
//                         var this_name = res.data;
//                         document.getElementById("add-khmc").value = this_name;
//                     }
//                 })
//             }
//         }
//     })
// }
    $ajax({
        type: 'post',
        url: '/user/getPower'
    }, false, '', function (res) {
        if (res.code == 200) {
            var power = res.data;
            power1 = res.data;
            if (power == "客户") {
                document.getElementById("add-khmc").remove();
                var div = document.getElementById('d-khmc');
                var textBox = document.createElement('input');
                textBox.id='add-khmc';
                textBox.type='text';
                textBox.name='khmc';
                textBox.class='form-control';
                textBox.autocomplete='off';
                div.appendChild(textBox);
                document.getElementById("add-khmc").disabled=true;
                document.getElementById("update-khmc").disabled=true;
                document.getElementById("khmc").disabled =true
                $ajax({
                    type: 'post',
                    url: '/psd/getloginname1',
                }, false, '', function (res) {
                    if (res.code == 200) {
                        var this_name = res.data;
                        document.getElementById("add-khmc").value = this_name;
                        document.getElementById("khmc").value = this_name;
                        cname= this_name;
                    }
                })
            }
        }
    })
}

// function getList2() {
//     djbh:document.getElementById("add-djbh").value
//     $ajax({
//         type: 'post',
//         url: '/ddxd/getListdjbh',
//         data:{
//             djbh:djbh
//         }
//     }, false, '', function (res) {
//         if (res.code == 200) {
//             setTable2(res.data);
//             $("#ddxddjbhTable").colResizable({
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


$(function () {
    getList();
    getKhmc();
    getShfs();
    getLxc();
    getLcys();
    getDy();
    hqxlGy();
    // getGh();
    getKg();
    getPj();
    // this_kuan = $('table').width();
    //打印
    // $('#print-btn').click(function () {
    //     $('table').width(this_kuan)
    //     $('.table-div').width(this_kuan)
    //     var newstr = window.document.getElementById("div").innerHTML;
    //     var oldstr = window.document.body.innerHTML;
    //     document.body.innerHTML = newstr;
    //     window.print();
    //     document.body.innerHTML = oldstr;
    //     window.location.reload();
    //     return false;
    // });
    // document.getElementById("dlm").innerText = ($.session.get('username'));

    $ajax({
        type: 'post',
        url: '/user/getUserName',
    }, false, '', function (res) {
        var this_username = res.data
        document.getElementById("dlm").innerText = this_username;
    })
    // $ajax({
    //     type: 'post',
    //     url: '/user/getName',
    // }, false, '', function (res) {
    //         var this_name = res.data;
    //
    //         document.getElementById("khmc").value = this_name;
    //
    // })

    $("#add-djbh").focus(function () {
        const today = new Date();
        const year = today.getFullYear();
        const month = ("0" + (today.getMonth() + 1)).slice(-2);
        const day = ('0' + today.getDate()).slice(-2);
        // const djbh = year + month + day + ('000').slice(-3);
        const bianhao = orderCount.toString().padStart(3, '0');
        orderCount += 1;
        $ajax({
            type: 'post',
            url: '/ddxd/getList',
        }, false, '', function (res) {
            if (res.code == 200) {
                if (res.data.length > 0) {
                    var num = res.data[0].djbh;
                }
                if (res.data.length = 0) {
                    $("#add-djbh").val("DD")
                } else {
                    var len = 2;
                    num = parseInt(num.split("_")[1], 10) + 1
                    num = num.toString();
                    while (num.length < len) {
                        num = "0" + num;
                    }
                    $("#add-supplierCode").val("DD" + num)
                }
            }
        })
    })

    $('#select-btn').click(function () {
        var ksxdrq = $('#ksxdrq').val();
        var jsxdrq = $('#jsxdrq').val();
        var khmc = $('#khmc').val();
        var ddh = $('#ddh').val();
        var azdz = $('#azdz').val();
        console.log(ksxdrq)
        if (ksxdrq === "") {
            ksxdrq = "1999-01-01";
        }
        if (jsxdrq === "") {
            jsxdrq = "2030-12-31";
        }
        $ajax({
            type: 'post',
            url: '/ddxd/queryList',
            data: {
                ksxdrq: ksxdrq,
                jsxdrq: jsxdrq,
                khmc: khmc,
                ddh: ddh,
                azdz: azdz
            }
        }, true, '', function (res) {
            if (res.code == 200) {
                setTable(res.data);
                for(n=0;n<res.data.length;n++) {
                    document.getElementById("wancheng" + n).value = res.data[n].wancheng;
                }
            }
        })
    });


    $('#add-up-btn').click(function () {
        // alert("请先填入上方数据，点击加一行数据再点击提交");
        var djbh = document.getElementById("add-djbh").value;
        $ajax({
            type: 'post',
            url: '/ddxd/getListdjbh',
            async:false,
            data: {
                djbh: djbh
            }
        }, false, '', function (res) {

            cishu = res.data.length
        })
        for (i = 0; i < cishu; i = i + 1) {
            let c = parseFloat($('#id1').val()) + i
            var q = c.toString();
            var fj = $('#fj' + q).val();
            if(fj==null||fj==undefined||fj==""){
                id11=q
            }else{
                id11="1"
            }
            if($('#gh' + q).val()==null || $('#gh' + q).val()==""){
                var gh=$('#gh1' + q).val()
            }else {
                var gh = $('#gh' + q).val();
            }
            var ddcd = $('#ddcd' + q).val();
            var sl = $('#sl' + q).val();
            var d = parseFloat(ddcd);
            var s = parseFloat(sl);
            var cxdk = $('#cxdk' + q).val();
            var lcys = $('#lcys' + q).val();
            var gy = $('#gy' + q).val();
            var g = Math.ceil(d / 1000 * s * 12);
            var gl = g.toString();
            var bz = $('#bz' + q).val();
            var dj = $('#dj' + q).val();
            var j = d * 1 / 1000 * s;

            var cxdkRight = $('#cxdkRight' + q).val();

            var wcsj = $('#wcsj' + q).val();

            var khmc =$('#add-khmc').val();
            var xdrq =$('#add-xdrq').val();
            var djbh =$('#add-djbh').val();
            var shouhuo =$('#add-shouhuo').val();
            var lxdh =$('#add-lxdh').val();
            var shfs =$('#add-shfs').val();
            var azdz =$('#add-azdz').val();
            var ddh =$('#add-ddh').val();
            var luruyuan = $('#add-luruyuan').val();
            $ajax({
                type: 'post',
                url: '/ddxd/update1',
                data: {
                    khmc:khmc,
                    xdrq:xdrq,
                    djbh:djbh,
                     shouhuo :shouhuo,
                     lxdh :lxdh,
                     shfs :shfs,
                     azdz :azdz,
                     ddh :ddh,
                     luruyuan : luruyuan,
                    fj: fj,
                    gh: gh,
                    ddcd: ddcd,
                    sl: sl,
                    cxdk: cxdk,
                    lcys: lcys,
                    gy: gy,
                    gl: gl,
                    bz: bz,
                    dj: dj,

                    cxdkRight: cxdkRight,

                    wcsj: wcsj,
                    luruyuan: luruyuan,
                    id: q,
                    id11:id11
                },

            }, false, '', function (res) {
                // swal("", res.msg, "success");
                // $('#update-form').reset();
                // document.getElementById('add-shouhuo').value = "";
                // document.getElementById('add-lxdh').value = "";
                if(cname=="客户"){
                    document.getElementById("add-khmc").disabled = true
                }else {
                    document.getElementById("add-khmc").disabled = false
                }
                document.getElementById("add-shouhuo").disabled = false
                document.getElementById("add-lxdh").disabled = false
                document.getElementById("add-shfs").disabled = false
                document.getElementById("add-azdz").disabled = false
                document.getElementById("add-ddh").disabled = false
                document.getElementById("add-luruyuan").value = false
                if(cname!="客户") {
                    document.getElementById("add-khmc").value = ""
                }
                document.getElementById("add-shouhuo").value = ""
                document.getElementById("add-lxdh").value = ""
                document.getElementById("add-shfs").value = ""
                document.getElementById("add-azdz").value = ""
                document.getElementById("add-ddh").value = ""
                document.getElementById("add-luruyuan").value = ""
                $('#add-modal').modal('hide');

            })

        }
        getList();
        // alert("添加成功")
    })


    //刷新
    $("#refresh-btn").click(function () {
        getList();
    });

    //点击新增按钮显示弹窗
    $("#add-btn").click(function () {
        $('#add-modal').modal('show');
        document.getElementById("add-khmc").value=cname
        $ajax({
            type: 'post',
            url: '/ddxd/getListdjbh',
            data: {
                djbh: "exe"
            }
        }, true, '', function (res) {
            setTable2(res.data)
            $("#ddxddjbhTable").colResizable({
                liveDrag: true,
                gripInnerHtml: "<div class='grip'></div>",
                draggingClass: "dragging",
                resizeMode: 'fit'
            });
        })

        getToken();
        // getNumbern();
        // getInputGh();
        // getInputLcys();
        // getInputGy();
    })

    //  djbh=document.getElementById("add-djbh").value

    //新增弹窗里点击关闭按钮
    $('#add-close-btn').click(function () {
        if (cname == "客户") {
            document.getElementById("add-khmc").disabled = true
        } else {
            document.getElementById("add-khmc").disabled = false
        }
        document.getElementById("add-shouhuo").disabled = false
        document.getElementById("add-lxdh").disabled = false
        document.getElementById("add-shfs").disabled = false
        document.getElementById("add-azdz").disabled = false
        document.getElementById("add-ddh").disabled = false
        document.getElementById("add-luruyuan").value = false
        if (cname != "客户") {
            document.getElementById("add-khmc").value = ""
        }
        document.getElementById("add-shouhuo").value = ""
        document.getElementById("add-lxdh").value = ""
        document.getElementById("add-shfs").value = ""
        document.getElementById("add-azdz").value = ""
        document.getElementById("add-ddh").value = ""
        document.getElementById("add-luruyuan").value = ""

        $('#add-form')[0].reset();
        $('#add-modal').modal('hide');
        // document.getElementById("cishu").value = 0;
        getList();
    });


//新增弹窗里点击提交按钮
    $("#update-add-submit-btn").click(function () {
        getJe();
        getGl();
        let params = formToJson("#add-form");
        if (checkForm('#add-form')) {
            $ajax({
                type: 'post',
                url: '/ddxd/add',
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
            // var ddcd = parseFloat(document.getElementById('add-ddcd').value);
            // $ajax({
            //     type: 'post',
            //     url: '/ddxd/getkailiao',
            // }, false, '', function (res) {
            //     if (res.code == 200) {
            //         for(var i=0;i<res.data.length;i++) {
            //             var name=res.data[i].name;
            //             var gh = document.getElementById('add-gh').value
            //             if (name == gh) {
            //                 var klcc=res.data[i].chicun;
            //                 var chicun=ddcd-klcc;
            //                 // document.getElementById("add-chicun").value = chicun;
            //                 document.getElementById("add-chicun").value = 111;
            //             }
            //         }
            //     }
            //
            // })
        }
    });
//新增一行
    $("#add-row").click(function () {
        var khmc = document.getElementById("add-khmc").value
        var shouhuo = document.getElementById("add-shouhuo").value
        var lxdh = document.getElementById("add-lxdh").value
        var shfs = document.getElementById("add-shfs").value
        var azdz = document.getElementById("add-azdz").value
        var ddh = document.getElementById("add-ddh").value
        var lry = document.getElementById("add-luruyuan").value
        if(khmc==""||shouhuo==""||lxdh==""||shfs==""||azdz==""||ddh==""||lry==""){
            alert("请输入完整信息")
        }else {
            document.getElementById("add-khmc").disabled = true
            document.getElementById("add-shouhuo").disabled = true
            document.getElementById("add-lxdh").disabled = true
            document.getElementById("add-shfs").disabled = true
            document.getElementById("add-azdz").disabled = true
            document.getElementById("add-ddh").disabled = true
            document.getElementById("add-luruyuan").disabled = true
            n++;
            let params = formToJson("#add-form");
            // if (checkForm('#add-form')) {
            $ajax({
                    type: 'post',
                    url: '/ddxd/add1',
                    data: JSON.stringify({
                        addInfo: params
                    }),
                    dataType: 'json',
                    contentType: 'application/json;charset=utf-8'
                }
                , false, '', function (res) {
                    if (res.code == 200) {
                        // swal("", res.msg, "success");

                        var djbh = document.getElementById("add-djbh").value;
                        $ajax({
                            type: 'post',
                            url: '/ddxd/getListdjbh',
                            data: {
                                djbh: djbh
                            }
                        }, false, '', function (res) {

                            setTable2(res.data)
                            // addcishu();
                            getList();

                        })

                    }
                })
            // }
            // var djbh = document.getElementById("add-djbh").value;
            // $ajax({
            //         type: 'post',
            //         url: '/ddxd/getListdjbh',
            //         data:{
            //             djbh: djbh
            //         },
            //     }
            //     , false, '', function (res) {
            //         setTable2(res.data)
            //     })

            // function addcishu() {
            //     var spanElement = document.getElementById("cishu");
            //     var currentCount = parseInt(spanElement.innerText);
            //     spanElement.innerText = currentCount + 1;
            // }
        }
    });
    $('#add-btn3').click(function () {
        var khmc = document.getElementById("add-khmc").value
        var shouhuo = document.getElementById("add-shouhuo").value
        var lxdh = document.getElementById("add-lxdh").value
        var shfs = document.getElementById("add-shfs").value
        var azdz = document.getElementById("add-azdz").value
        var ddh = document.getElementById("add-ddh").value
        var lry = document.getElementById("add-luruyuan").value
        if(khmc==""||shouhuo==""||lxdh==""||shfs==""||azdz==""||ddh==""||lry==""){
            alert("请输入完整信息")
        }else {
            document.getElementById("add-khmc").disabled = true
            document.getElementById("add-shouhuo").disabled = true
            document.getElementById("add-lxdh").disabled = true
            document.getElementById("add-shfs").disabled = true
            document.getElementById("add-azdz").disabled = true
            document.getElementById("add-ddh").disabled = true
            document.getElementById("add-luruyuan").disabled = true
            if ($('#shdw').prop("disabled") == false) {
                alert("未点击固定条件，不可以增行！")
                return;
            }
            let params = formToJson("#add-form");
            for (i = 0; i < 10; i++) {
                $ajax({
                        type: 'post',
                        url: '/ddxd/add1',
                        data: JSON.stringify({
                            addInfo: params
                        }),
                        dataType: 'json',
                        contentType: 'application/json;charset=utf-8'
                    }
                    , false, '', function (res) {
                        if (res.code == 200) {
                            // swal("", res.msg, "success");

                            var djbh = document.getElementById("add-djbh").value;
                            $ajax({
                                type: 'post',
                                url: '/ddxd/getListdjbh',
                                data: {
                                    djbh: djbh
                                }
                            }, false, '', function (res) {

                                setTable2(res.data)
                                addcishu();
                                getList();

                            })

                        }
                    })
            }
        }
    })
    //点击修改按钮显示弹窗
    $('#update-btn').click(function () {

        let rows = getTableSelection('#ddxdTable');

        if (rows.length > 1 || rows.length == 0) {
            swal('请选择一条数据修改!');
            return;
        }
        $('#update-modal').modal('show');
        setForm(rows[0].data, '#update-form');
        $('#update-khmc').val(rows[0].data.khmc);
        $('#update-xdrq').val(rows[0].data.xdrq);
        // $('#update-djbh').val(rows[0].data.djbh);
        $('#update-shouhuo').val(rows[0].data.shouhuo);
        $('#update-lxdh').val(rows[0].data.lxdh);
        $('#update-shfs').val(rows[0].data.shfs);
        $('#update-azdz').val(rows[0].data.azdz);
        $('#update-ddh').val(rows[0].data.ddh);
        $('#update-luruyuan').val(rows[0].data.luruyuan);
        $('#update-djbh').val(rows[0].data.djbh);
        var djbh = document.getElementById("update-djbh").value;
        $ajax({
            type: 'post',
            url: '/ddxd/getListdjbh',
            data: {
                djbh: djbh
            }
        }, false, '', function (res) {

            setTable3(res.data)
            for (i=0;i<res.data.length;i++) {
                document.getElementById("fj"+res.data[i].id).value=res.data[i].fj;
                document.getElementById("gh"+res.data[i].id).value=res.data[i].gh;
                document.getElementById("lcys"+res.data[i].id).value=res.data[i].lcys;
                document.getElementById("gy"+res.data[i].id).value=res.data[i].gy;
            }
            $("#ddxddjbhTable1").colResizable({
                liveDrag: true,
                gripInnerHtml: "<div class='grip'></div>",
                draggingClass: "dragging",
                resizeMode: 'fit'
            });
        })
        // var selectedValue = rows[0].data.fj;
        // var select = document.getElementById('update-gh');
        // if (selectedValue === '房间柜号') {
        //     select.innerHTML = '';
        //     getSelectGh();
        //     getInputLcys();
        //     getInputGy();
        //     disGy();
        // } else if (selectedValue === '铝型材') {
        //     select.innerHTML = '';
        //     getLxc();
        //     getLcys();
        //     disGy();
        //     getSelectGh();
        //     getSelectLcys();
        //     getInputGy();
        //
        // } else if (selectedValue === '电源') {
        //     select.innerHTML = '';
        //     getSelectGh();
        //     getSelectLcys();
        //     getSelectGy();
        //     hqxlGy();
        //     getDy();
        //     getLcys();
        // } else if (selectedValue === '开关') {
        //     select.innerHTML = '';
        //     getSelectGh();
        //     getSelectLcys();
        //     getInputGy();
        //     getKg();
        //     getLcys();
        //     disGy();
        // } else if (selectedValue === '配件') {
        //     select.innerHTML = '';
        //     getSelectGh();
        //     getSelectLcys();
        //     getInputGy();
        //     getPj();
        //     getLcys();
        //     disGy();
        // }

        // $('#update-gh').val(rows[0].data.gh);
        // $('#update-lcys').val(rows[0].data.lcys);
        // $('#update-ddcd').val(rows[0].data.ddcd);
        // $('#update-sl').val(rows[0].data.sl);
        // $('#update-cxdk').val(rows[0].data.cxdk);
        // $('#update-cxdkRight').val(rows[0].data.cxdkRight);
        // $('#update-gy').val(rows[0].data.gy);
        // $('#update-gl').val(rows[0].data.gl);
        // $('#update-bz').val(rows[0].data.bz);
        // $('#update-dj').val(rows[0].data.dj);
        // $('#update-je').val(rows[0].data.je);
        // $('#update-chicun').val(rows[0].data.chicun);
    });

    //修改弹窗点击关闭按钮
    $('#update-close-btn').click(function () {

        $('#update-form')[0].reset();
        $('#update-modal').modal('hide');
    });

    //修改弹窗里点击提交按钮
    $('#update-submit-btn').click(function () {
        var table = document.getElementById("ddxddjbhTable1")
        var tbl = table.rows.length;
        for (i = 0; i < tbl; i = i + 1) {
            let c = parseFloat($('#id2').val()) + i
            var q = c.toString();
            var fj = $('#fj' + q).val();
            if($('#gh' + q).val()==null || $('#gh' + q).val()==""){
                var gh=$('#gh1' + q).val()
            }else {
                var gh = $('#gh' + q).val();
            }
            var ddcd = $('#ddcd' + q).val();
            var sl = $('#sl' + q).val();

            var cxdk = $('#cxdk' + q).val();
            var lcys = $('#lcys' + q).val();
            var gy = $('#gy' + q).val();

            var bz = $('#bz' + q).val();
            var dj = $('#dj' + q).val();


            var cxdkRight = $('#cxdkRight' + q).val();

            var wcsj = $('#wcsj' + q).val();

            var khmc =$('#add-khmc').val();
            var xdrq =$('#add-xdrq').val();
            var djbh =$('#add-djbh').val();
            var shouhuo =$('#add-shouhuo').val();
            var lxdh =$('#add-lxdh').val();
            var shfs =$('#add-shfs').val();
            var azdz =$('#add-azdz').val();
            var ddh =$('#add-ddh').val();
            var luruyuan = $('#add-luruyuan').val();

            $ajax({
                type: 'post',
                url: '/ddxd/update1',
                data: {
                    khmc:khmc,
                    xdrq:xdrq,
                    djbh:djbh,
                    shouhuo :shouhuo,
                    lxdh :lxdh,
                    shfs :shfs,
                    azdz :azdz,
                    ddh :ddh,
                    luruyuan : luruyuan,
                    fj: fj,
                    gh: gh,
                    ddcd: ddcd,
                    sl: sl,
                    cxdk: cxdk,
                    lcys: lcys,
                    gy: gy,
                    gl: gl,
                    bz: bz,
                    dj: dj,

                    cxdkRight: cxdkRight,

                    wcsj: wcsj,
                    luruyuan: luruyuan,
                    // wancheng: wancheng,
                    id: q,
                    id11:1
                },

            }, false, '', function (res) {
                swal("", res.msg, "success");
                $('#update-modal').modal('hide');
                getList();
            })

        }
        // var d1 = document.getElementById('add-djbh').value;
        // getupGl();
        // getupJe();
        // var msg = confirm("确认要修改吗？");
        // if (msg) {
        //     if (checkForm('#update-form')) {
        //         let params = formToJson('#update-form');
        //
        //         $ajax({
        //             type: 'post',
        //             url: '/ddxd/update',
        //             data: {
        //                 updateJson: JSON.stringify(params),
        //
        //             },
        //             dataType: 'json',
        //             contentType: 'application/json;charset=utf-8'
        //         }, false, '', function (res) {
        //             if (res.code == 200) {
        //                 swal("", res.msg, "success");
        //                 $('#update-close-btn').click();
        //                 $('#update-modal').modal('hide');
        //                 getList();
        //             } else {
        //                 swal("", res.msg, "error");
        //             }
        //         })
        //     }
        // }
    });

    //点击删除按钮
    $('#delete-btn').click(function () {
        var msg = confirm("确认要删除吗？");
        if (msg) {
            let rows = getTableSelection("#ddxdTable");
            if (rows.length == 0) {
                swal('请选择要删除的数据！');
                return;
            }

            var bh = rows[0].data.djbh
            // let idList = [];
            // $.each(rows, function (index, row) {
            //     idList.push(row.data.id)
            // });
            $ajax({
                type: 'post',
                url: '/ddxd/delete',
                data: {
                    djbh: bh
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

})

function setTable(data) {
    if ($('#ddxdTable').html != '') {
        $('#ddxdTable').bootstrapTable('load', data);
    }

    $('#ddxdTable').bootstrapTable({
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
            {
                field: '',
                title: '序号',
                align: 'center',
                width: 70,
                formatter: function (value, row, index) {
                    return index + 1;
                }
            }, {
                field: 'xdrq',
                title: '下单日期',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'khmc',
                title: '客户名称',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'djbh',
                title: '单据编号',
                align: 'center',
                sortable: true,
                width: 140,
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

                    $(document).ready(function() {
                        $('#wancheng'+index).change(function() {
                            var selectedValue = $(this).val();
                            let rows = getTableSelection("#ddxdTable");

                            $.each(rows, function (index, row) {
                                num = row.data.djbh;
                            })
                            $ajax({
                                type: 'post',
                                url: '/ddxd/updatewc',
                                data:{
                                    wancheng:selectedValue,
                                    djbh:num
                                }
                            })
                            alert("修改成功");
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
                    document.getElementById("wancheng" +index).value=res.data[0].wancheng
                }
            }, {
                field: 'je',
                title: '订单总金额',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'azdz',
                title: '安装地址',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'ddh',
                title: '订单编号',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'luruyuan',
                title: '操作员',
                align: 'center',
                sortable: true,
                width: 140,
            }
            , {
                field: 'wcsj',
                title: '完成时间',
                align: 'center',
                sortable: true,
                width: 140,
            }, {
                field: 'shfs',
                title: '送货方式',
                align: 'center',
                sortable: true,
                width: 140,
            }
            // }, {
            //     field: 'fj',
            //     title: '项目类别',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'gh',
            //     title: '项目名称',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'lcys',
            //     title: '铝型材颜色',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'ddcd',
            //     title: '灯带长度mm',
            //     align: 'center',
            //     sortable: true,
            //     width: 130,
            // }, {
            //     field: 'sl',
            //     title: '数量(支)',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            // }, {
            //     field: 'cxdk',
            //     title: '出线端口左出线',
            //     align: 'center',
            //     sortable: true,
            //     width: 140,
            // }, {
            //     field: 'cxdkRight',
            //     title: '出线端口右出线',
            //     align: 'center',
            //     sortable: true,
            //     width: 140,
            // }, {
            //     field: 'gy',
            //     title: '光源',
            //     align: 'center',
            //     sortable: true,
            //     width: 80,
            // }, {
            //     field: 'gl',
            //     title: '功率W',
            //     align: 'center',
            //     sortable: true,
            //     width: 80,
            // }, {
            //     field: 'bz',
            //     title: '备注',
            //     align: 'center',
            //     sortable: true,
            //     width: 80,
            // }, {
            //     field: 'dj',
            //     title: '单价',
            //     align: 'center',
            //     sortable: true,
            //     width: 80,
            // }, {
            //     field: 'chicun',
            //     title: '开料尺寸',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            //     }, {
            //         field: 'shouhuo',
            //         title: '送货地址',
            //         align: 'center',
            //         sortable: true,
            //         width: 100,
            //     }, {
            //         field: 'lxdh',
            //         title: '联系电话',
            //         align: 'center',
            //         sortable: true,
            //         width: 100,
            //     }, {
            //         field: 'shfs',
            //         title: '送货方式',
            //         align: 'center',
            //         sortable: true,
            //         width: 100,
            //     }

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


function setTable2(data) {
// $(document).ready(function() {
//         $('#fj'+row.id).change(function() {
//             var selectedValue = $(this).val();
//             var $select8 = $('#gh'+row.id);
//             $select8.empty();
//             if(selectedValue=='铝型材'){
//                 var this_lcys = ""
//                 var select4 = ""
//                 for (var i = 0; i < select_lxc.length; i++) {
//                     this_lcys = this_lcys + "<option value=\"" + select_lxc[i].lxc + "\" selected=\"selected\">" + select_lxc[i].lxc + "</option>"
//                     select4 = "<select id='lxc" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"lxc\"" + ")' placeholder='铝材颜色' type='text' class='form-control'  value='" + value + "'>"
//                     select4 = select4 + this_lxc;
//                     select4 = select4 + "<select/>"
//
//                 }
//                 return select4;
//             }
//             else if(selectedValue=='房间柜号'){
//                 return "<input id='gh" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"gh\" " + ")' placeholder='项目名称' type='text' class='form-control'  value='" + value + "'>"
//             }else if(selectedValue=='电源'){
//                 var this_dy = ""
//                 var select5 = ""
//                 for (var i = 0; i < select_dy.length; i++) {
//                     this_dy = this_dy + "<option value=\"" + select_dy[i].dy + "\" selected=\"selected\">" + select_dy[i].dy + "</option>"
//                     select5 = "<select id='dy" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"dy\"" + ")' placeholder='电源' type='text' class='form-control'  value='" + value + "'>"
//                     select5 = select5 + this_dy;
//                     select5 = select5 + "<select/>"
//
//                 }
//                 return select5;
//             }else if(selectedValue=='开关'){
//                 var this_kg = ""
//                 var select6 = ""
//                 for (var i = 0; i < select_kg.length; i++) {
//                     this_kg = this_kg + "<option value=\"" + select_kg[i].kg + "\" selected=\"selected\">" + select_kg[i].kg + "</option>"
//                     select6 = "<select id='kg" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"kg\"" + ")' placeholder='开关' type='text' class='form-control'  value='" + value + "'>"
//                     select6 = select6 + this_kg;
//                     select6 = select6 + "<select/>"
//
//                 }
//                 return select6;
//             }else if(selectedValue=='配件'){
//                 var this_pj = ""
//                 var select7 = ""
//                 for (var i = 0; i < select_kg.length; i++) {
//                     this_pj = this_pj + "<option value=\"" + select_pj[i].pj + "\" selected=\"selected\">" + select_pj[i].pj + "</option>"
//                     select7 = "<select id='pj" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"pj\"" + ")' placeholder='开关' type='text' class='form-control'  value='" + value + "'>"
//                     select7 = select7 + this_pj;
//                     select7 = select7 + "<select/>"
//
//                 }
//                 return select7;
//             }
//         })
//     })

    if ($('#ddxddjbhTable').html != '') {
        $('#ddxddjbhTable').bootstrapTable('load', data);
    }
    // $(document).ready(function() {
    //     $('#fj'+row.id).change(function() {
    //         var selectedValue = $(this).val();
    //         var $select8 = $('#gh'+row.id);
    //         $select8.empty();
    //         if(selectedValue=='铝型材'){
    //             var this_lcys = ""
    //             var select4 = ""
    //             for (var i = 0; i < select_lxc.length; i++) {
    //                 this_lcys = this_lcys + "<option value=\"" + select_lxc[i].lxc + "\" selected=\"selected\">" + select_lxc[i].lxc + "</option>"
    //                 select4 = "<select id='lxc" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"lxc\"" + ")' placeholder='铝材颜色' type='text' class='form-control'  value='" + value + "'>"
    //                 select4 = select4 + this_lxc;
    //                 select4 = select4 + "<select/>"
    //
    //             }
    //             return select4;
    //         }
    //         else if(selectedValue=='房间柜号'){
    //             return "<input id='gh" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"gh\" " + ")' placeholder='项目名称' type='text' class='form-control'  value='" + value + "'>"
    //         }else if(selectedValue=='电源'){
    //             var this_dy = ""
    //             var select5 = ""
    //             for (var i = 0; i < select_dy.length; i++) {
    //                 this_dy = this_dy + "<option value=\"" + select_dy[i].dy + "\" selected=\"selected\">" + select_dy[i].dy + "</option>"
    //                 select5 = "<select id='dy" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"dy\"" + ")' placeholder='电源' type='text' class='form-control'  value='" + value + "'>"
    //                 select5 = select5 + this_dy;
    //                 select5 = select5 + "<select/>"
    //
    //             }
    //             return select5;
    //         }else if(selectedValue=='开关'){
    //             var this_kg = ""
    //             var select6 = ""
    //             for (var i = 0; i < select_kg.length; i++) {
    //                 this_kg = this_kg + "<option value=\"" + select_kg[i].kg + "\" selected=\"selected\">" + select_kg[i].kg + "</option>"
    //                 select6 = "<select id='kg" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"kg\"" + ")' placeholder='开关' type='text' class='form-control'  value='" + value + "'>"
    //                 select6 = select6 + this_kg;
    //                 select6 = select6 + "<select/>"
    //
    //             }
    //             return select6;
    //         }else if(selectedValue=='配件'){
    //             var this_pj = ""
    //             var select7 = ""
    //             for (var i = 0; i < select_kg.length; i++) {
    //                 this_pj = this_pj + "<option value=\"" + select_pj[i].pj + "\" selected=\"selected\">" + select_pj[i].pj + "</option>"
    //                 select7 = "<select id='pj" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"pj\"" + ")' placeholder='开关' type='text' class='form-control'  value='" + value + "'>"
    //                 select7 = select7 + this_pj;
    //                 select7 = select7 + "<select/>"
    //
    //             }
    //             return select7;
    //         }
    //     })
    // })
    $('#ddxddjbhTable').bootstrapTable({

        data: data,
        sortStable: true,
        classes: 'table table-striped table-hover',
        idField: 'id',
        pagination: false,
        // pageSize: 15,//单页记录数
        clickToSelect: true,
        locale: 'zh-CN',
        fixedColumns:true,
        toolbarAlign: 'left',
        theadClasses: "thead-light",//这里设置表头样式
        style: 'table-layout:fixed',
        height: document.body.clientHeight * 0.40,
        columns: [
            {
                field: '',
                title: '序号',
                align: 'center',
                width: 50,
                fixed: 'left',
                formatter: function (value, row, index) {
                    return index + 1;
                }
            }, {
                field: 'fj',
                title: '项目类别',
                align: 'center',
                sortable: true,
                width: 150,
                size: 13,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }
                    $(document).ready(function() {
                        $('#fj'+row.id).change(function() {
                            var selectedValue = $(this).val();

                            var $select8 = $('#gh'+row.id);
                            $select8.empty();
                            if(selectedValue=='铝型材') {
                                $("#gh1" + row.id).hide();
                                $("#gh" + row.id).show();
                                $("#lcys" + row.id).show();
                                $("#ddcd" + row.id).show();
                                $("#sl" + row.id).show();
                                $("#cxdk" + row.id).show();
                                $("#cxdkRight" + row.id).show();
                                $("#gy" + row.id).show();
                                $("#dj" + row.id).show();
                                $("#bz" + row.id).show();
                                var this_lxc = ""
                                var this_gy = ""
                                var select4 = ""
                                var select9 = ""
                                // for (var i = 0; i < r; i++) {
                                //     this_lxc = this_lxc + "<option value=\"" + select_lxc[i].lxc + "\" >" + select_lxc[i].lxc + "</option>"
                                //
                                //
                                //     select4 = "<select id='lxc" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"lxc\"" + ")' placeholder='铝材颜色' type='text' class='form-control'  value='" + value + "'>"
                                //     select4 = select4 + this_lxc;
                                //     select4 = select4 + "<select/>"
                                //
                                //     $("#gh" + row.id).append("<option>" + select_lxc[i].lxc + "</option>")
                                // }
                                //
                                //
                                //
                                // for (var i = 0; i < r; i++) {
                                //     this_gy = this_gy + "<option value=\"" + select_gy[i].gy + "\" >" + select_gy[i].gy + "</option>"
                                //
                                //     // this_lxc = this_lxc + "<option value=\"\" selected>请选择</option>";
                                //     select9 = "<select id='gy" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"gy\"" + ")' placeholder='光源' type='text' class='form-control'  value='" + value + "'>"
                                //
                                //
                                //     select9 = select9 + this_gy;
                                //     select9 = select9 + "<select/>"
                                //     $("#gy" + row.id).append("<option>" + select_gy[i].gy + "</option>")
                                //
                                //
                                //     return select4;
                                // }
                                for (var i = 0; i < r; i++) {

                                    this_lxc = this_lxc + "<option value=\"" + select_lxc[i].lxc + "\" >" + select_lxc[i].lxc + "</option>";

                                    select4 = "<select id='lxc" + row.id + "' 'columnUpd(" + row.id + "," + "\"lxc\"" + ")' placeholder='铝材颜色' type='text' class='form-control'  value=''>";
                                    select4 = select4 + this_lxc;
                                    select4 = select4 + "<select/>";


                                }
                                this_lxc = this_lxc + "<option value=\"\" selected>请选择</option>";
                                $("#gh" + row.id).append("<option selected>" + this_lxc + "</option>");
                                for (var i = 0; i < r; i++) {

                                    this_gy = this_gy + "<option value=\"" + select_gy[i].gy + "\" >" + select_gy[i].gy + "</option>";

                                    select9 = "<select id='gy" + row.id + "' 'columnUpd(" + row.id + "," + "\"gy\"" + ")' placeholder='光源' type='text' class='form-control'  value=''>";
                                    select9 = select9 + this_gy;
                                    select9 = select9 + "<select/>";


                                    return select4;
                                }
                                this_gy = this_gy + "<option value=\"\" selected>请选择</option>";
                                $("#gy" + row.id).append("<option>" + select_gy[i].gy + "</option>");
                            }
                            else if(selectedValue=='房间柜号'){
                                // $("#gh"+row.id).remove();

                                $("#gh"+row.id).value="";
                                $("#gh"+row.id).hide();
                                $("#gh1"+row.id).show();
                                $("#lcys"+row.id).hide();
                                $("#ddcd"+row.id).hide();
                                $("#sl"+row.id).hide();
                                $("#cxdk"+row.id).hide();
                                $("#cxdkRight"+row.id).hide();
                                $("#gy"+row.id).hide();
                                $("#dj"+row.id).hide();
                                $("#bz"+row.id).hide();

                            }else if(selectedValue=='电源'){
                                $("#gh"+row.id).show();
                                $("#gh1"+row.id).hide();
                                $("#lcys"+row.id).hide();
                                $("#ddcd"+row.id).hide();
                                $("#sl"+row.id).show();
                                $("#cxdk"+row.id).hide();
                                $("#cxdkRight"+row.id).hide();
                                $("#gy"+row.id).hide();
                                $("#dj"+row.id).show();
                                $("#bz"+row.id).hide();
                                var this_dy = ""
                                var select5 = ""
                                for (var i = 0; i < select_dy.length; i++) {
                                    this_dy = this_dy + "<option value=\"" + select_dy[i].dy + "\" >" + select_dy[i].dy + "</option>"
                                    select5 = "<select id='dy" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"dy\"" + ")' placeholder='电源' type='text' class='form-control'  value='" + value + "'>"
                                    select5 = select5 + this_dy;
                                    select5 = select5 + "<select/>"


                                }
                                this_dy = this_dy + "<option value=\"\" selected>请选择</option>";
                                $("#gh"+row.id).append("<option>" + this_dy+ "</option>")
                                return select5;
                            }else if(selectedValue=='开关'){
                                $("#gh"+row.id).show();
                                $("#gh1"+row.id).hide();
                                $("#lcys"+row.id).hide();
                                $("#ddcd"+row.id).hide();
                                $("#sl"+row.id).show();
                                $("#cxdk"+row.id).hide();
                                $("#cxdkRight"+row.id).hide();
                                $("#gy"+row.id).hide();
                                $("#dj"+row.id).show();
                                $("#bz"+row.id).hide();
                                var this_kg = ""
                                var select6 = ""
                                for (var i = 0; i < select_kg.length; i++) {
                                    this_kg = this_kg + "<option value=\"" + select_kg[i].kg + "\" >" + select_kg[i].kg + "</option>"
                                    select6 = "<select id='kg" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"kg\"" + ")' placeholder='开关' type='text' class='form-control'  value='" + value + "'>"
                                    select6 = select6 + this_kg;
                                    select6 = select6 + "<select/>"
                                    $("#gh"+row.id).append("<option>" + select_kg[i].kg + "</option>")

                                }
                                this_kg = this_kg + "<option value=\"\" selected>请选择</option>";
                                $("#gh"+row.id).append("<option>" + this_kg + "</option>")
                                return select6;
                            }else if(selectedValue=='配件'){
                                ("#gh"+row.id).show();
                                $("#gh1"+row.id).hide();
                                $("#lcys"+row.id).hide();
                                $("#ddcd"+row.id).hide();
                                $("#sl"+row.id).show();
                                $("#cxdk"+row.id).hide();
                                $("#cxdkRight"+row.id).hide();
                                $("#gy"+row.id).hide();
                                $("#dj"+row.id).show();
                                $("#bz"+row.id).hide();
                                var this_pj = ""
                                var select7 = ""
                                for (var i = 0; i < select_kg.length; i++) {
                                    this_pj = this_pj + "<option value=\"" + select_pj[i].pj + "\" >" + select_pj[i].pj + "</option>"
                                    select7 = "<select id='pj" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"pj\"" + ")' placeholder='"+index+"' type='text' class='form-control'  value='" + value + "'>"
                                    select7 = select7 + this_pj;
                                    select7 = select7 + "<select/>"
                                    $("#gh"+row.id).append("<option>" + select_pj[i].pj  + "</option>")
                                    $
                                }
                                return select7;
                            }
                        })
                    })
                    return "<select id='fj" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"fj\"" + ")' placeholder='是否月结' type='text' class='form-control'  value='" + value + "'>" +
                        "<option value=''>请选择项目类别</option>" +
                        "<option value='铝型材'>铝型材</option>" +
                        "<option value='房间柜号'>房间柜号</option>" +
                        "<option value='电源'>电源</option>" +
                        "<option value='开关'>开关</option>" +
                        "<option value='配件'>配件</option>" +
                        "</select>"
                }
            }, {
                field: 'gh',
                title: '项目名称',
                align: 'center',
                sortable: true,
                width: 150,
                size: 13,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }

                    return "<select id='gh" + row.id + "' 'columnUpd(" + row.id + "," + "\"gh\" " + ")' placeholder='"+index+1+"' type='text' class='form-control'  value='" + value + "'>"+
                        "</select>"
                }


                // return "<select id='gh" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"gh\" " + ")' placeholder='项目名称' type='text' class='form-control'  value='" + value + "'>"+"</select>"

            }
            , {
                field: 'gh',
                title: '房间柜号',
                align: 'center',
                sortable: true,
                width: 100,
                size: 13,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }

                    return "<input id='gh1" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"gh\" " + ")' placeholder='"+index+1+"' type='text' class='form-control'  value='" + value + "'>"
                }
            }, {
                field: 'lcys',
                title: '铝型材颜色',
                align: 'center',
                sortable: true,
                width: 100,
                size: 13,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }
                    var this_lcys = ""
                    var select2 = ""

                    for (var i = 0; i < select_lcys.length; i++) {
                        this_lcys = this_lcys + "<option value=\"" + select_lcys[i].lcys + "\" selected=\"selected\">" + select_lcys[i].lcys + "</option>"
                        select2 = "<select id='lcys" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"lcys\"" + ")' placeholder='"+index+1+"' type='text' class='form-control'  value='" + value + "'>"
                        select2 = select2 + this_lcys;
                        select2 = select2 + "<select/>"
                    }
                    // $("#lcys"+row.id).append("<option selected='selected'>" +"--请选择--" + "</option>");
                    return select2;
                }
            }, {
                field: 'ddcd',
                title: '灯带长度mm',
                align: 'center',
                sortable: true,
                width: 100,
                size: 13,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }

                    return "<input id='ddcd" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"ddcd\" " + ")' placeholder='"+index+1+"' type='text' class='form-control'  value='" + value + "'>"
                }
            }, {
                field: 'sl',
                title: '数量(支)',
                align: 'center',
                sortable: true,
                width: 80,
                size: 13,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }

                    return "<input id='sl" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"sl\" " + ")' placeholder='"+index+1+"' type='text' class='form-control'  value='" + value + "'>"
                }
            }, {
                field: 'cxdk',
                title: '出线端口左出线',
                align: 'center',
                sortable: true,
                width: 80,
                size: 13,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }

                    return "<input id='cxdk" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"cxdk\" " + ")' placeholder='"+index+1+"' type='text' class='form-control'  value='" + value + "'>"
                }
            }, {
                field: 'cxdk_right',
                title: '出线端口右出线',
                align: 'center',
                sortable: true,
                width: 80,
                size: 13,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }
                    return "<input id='cxdkRight" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"cxdkRight\" " + ")' placeholder='"+index+1+"' type='text' class='form-control'  value='" + value + "'>"
                }
            }, {
                field: 'gy',
                title: '光源',
                align: 'center',
                sortable: true,
                width: 120,
                size: 13,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }
                    var this_gy = ""
                    var select3 = ""
                    for (var i = 0; i < select_gy.length; i++) {
                        this_gy = this_gy + "<option value=\"" + select_gy[i].gy + "\"selected=\"selected\" >" + select_gy[i].gy + "</option>"
                        select3 = "<select id='gy" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"lcys\"" + ")' placeholder='光源' type='text' class='form-control'  value='" + value + "'>"
                        select3 = select3 + this_gy;
                        select3 = select3 + "<select/>"

                    }

                  return select3

                    // return "<select id='gy" + row.id + "' 'columnUpd(" + row.id + "," + "\"gy\" " + ")' placeholder='"+index+1+"' type='text' class='form-control'  value='" + value + "'>"+
                    //     "</select>"

                }

            }
            // , {
            //     field: 'gl',
            //     title: '功率W',
            //     align: 'center',
            //     sortable: true,
            //     width: 150,
            //     formatter: function (value, row, index) {
            //         if (value == null) {
            //             value = '';
            //         }
            //         return "<input id='gl" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"gl\" " + ")' placeholder='功率' type='text' class='form-control'  value='" + value + "'>"
            //     }
            // }
            , {
                field: 'bz',
                title: '备注',
                align: 'center',
                sortable: true,
                width: 90,
                size: 13,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }
                    return "<input id='bz" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"bz\" " + ")' placeholder='"+index+1+"' type='text' class='form-control'  value='" + value + "'>"
                }
            }, {
                field: 'dj',
                title: '单价',
                align: 'center',
                sortable: true,
                width: 80,
                size: 13,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }
                    return "<input id='dj" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"dj\" " + ")' placeholder='"+index+"' type='text' class='form-control'  value='" + value + "'>"
                }
            }
            // {
            //     field: 'je',
            //     title: '金额',
            //     align: 'center',
            //     sortable: true,
            //     width: 150,
            //     formatter: function (value, row, index) {
            //         if (value == null) {
            //             value = '';
            //         }
            //         return "<input id='je" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"je\" " + ")' placeholder='金额' type='text' class='form-control'  value='" + value + "'>"
            //     }
            // },
            // {
            //     field: 'chicun',
            //     title: '开料尺寸',
            //     align: 'center',
            //     sortable: true,
            //     width: 200,
            //     formatter: function (value, row, index) {
            //         if (value == null) {
            //             value = '';
            //         }
            //         return "<input id='chicun" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"chicun\" " + ")' placeholder='尺寸' type='text' class='form-control'  value='" + value + "'>"
            //     }
            // }
            // {
            //     field: 'shouhuo',
            //     title: '送货地址',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            //     formatter: function (value, row, index) {
            //         if (value == null) {
            //             value = '';
            //         }
            //         return "<input id='shouhuo" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"shouhuo\" " + ")' placeholder='收货地址' type='text' class='form-control'  value='" + value + "'>"
            //     }
            // }
            // , {
            //     field: 'lxdh',
            //     title: '联系电话',
            //     align: 'center',
            //     sortable: true,
            //     width: 200,
            //     formatter: function (value, row, index) {
            //         if (value == null) {
            //             value = '';
            //         }
            //         return "<input id='lxdh" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"lxdh\" " + ")' placeholder='联系电话' type='text' class='form-control'  value='" + value + "'>"
            //     }
            // }
            // , {
            //     field: 'wancheng',
            //     title: '完成状态',
            //     align: 'center',
            //     sortable: true,
            //     width: 130,
            //     formatter: function (value, row, index) {
            //         if (value == null) {
            //             value = '';
            //         }
            //         return "<input id='lxdh" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"lxdh\" " + ")' placeholder='联系电话' type='text' class='form-control'  value='" + value + "'>"
            //     }
            // }


            // , {
            //     field: 'shfs',
            //     title: '送货方式',
            //     align: 'center',
            //     sortable: true,
            //     width: 100,
            //     formatter: function (value, row, index) {
            //         if (value == null) {
            //             value = '';
            //         }
            //         var this_shfs = ""
            //         var select4 = ""
            //         for (var i = 0; i < select_shfs.length; i++) {
            //             this_shfs = this_shfs + "<option value=\"" + select_shfs[i].shfs + "\" selected=\"selected\">" + select_shfs[i].shfs + "</option>"
            //             select4 = "<select id='shfs" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"shfs\"" + ")' placeholder='收货方式' type='text' class='form-control'  value='" + value + "'>"
            //             select4 = select4 + this_shfs;
            //             select4 = select4 + "<select/>"
            //
            //         }
            //         return select4;
            //     }
            //
            // }
            , {
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
                    return "<input id='id1' name='id' value='" + c + "' oninput='javascript:columnUpd(" + row.id + "," + "\"id\"" + ")' placeholder='id' type='text' class='form-control'  value='" + value + "'>"
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

function setTable3(data) {
    if ($('#ddxddjbhTable1').html != '') {
        $('#ddxddjbhTable1').bootstrapTable('load', data);
    }
    // $(document).ready(function() {
    //     $('#fj'+row.id).change(function() {
    //         var selectedValue = $(this).val();
    //         var $select2 = $('#gh'+row.id);
    //         $select2.empty();
    //         if(selectedValue=='铝型材'){
    //             var this_lcys = ""
    //             var select4 = ""
    //             for (var i = 0; i < select_lxc.length; i++) {
    //                 this_lcys = this_lcys + "<option value=\"" + select_lxc[i].lxc + "\" selected=\"selected\">" + select_lxc[i].lxc + "</option>"
    //                 select4 = "<select id='lxc" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"lxc\"" + ")' placeholder='铝材颜色' type='text' class='form-control'  value='" + value + "'>"
    //                 select4 = select4 + this_lxc;
    //                 select4 = select4 + "<select/>"
    //
    //             }
    //             return select4;
    //         }
    //         // else if(selectedValue=='fangjianguihao')
    //     })
    // })

    $('#ddxddjbhTable1').bootstrapTable({
        data: data,
        sortStable: true,
        classes: 'table table-striped table-hover',
        idField: 'id',
        pagination: true,
        pageSize: 15,//单页记录数
        clickToSelect: true,
        locale: 'zh-CN',
        toolbarAlign: 'left',
        theadClasses: "thead-light",//这里设置表头样式
        style: 'table-layout:fixed',
        height: document.body.clientHeight *  0.40,
        columns: [
            {
                field: '',
                title: '序号',
                align: 'center',
                width: 80,
                formatter: function (value, row, index) {
                    return index + 1;
                }
            }, {
                field: 'fj',
                title: '项目类别',
                align: 'center',
                sortable: true,
                width: 160,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }
                    $(document).ready(function() {
                        $('#fj'+row.id).change(function() {
                            var selectedValue = $(this).val();

                            var $select8 = $('#gh'+row.id);
                            $select8.empty();
                            if(selectedValue=='铝型材'){
                                $("#gh1"+row.id).hide();
                                $("#gh"+row.id).show();
                                $("#lcys"+row.id).show();
                                $("#ddcd"+row.id).show();
                                $("#sl"+row.id).show();
                                $("#cxdk"+row.id).show();
                                $("#cxdkRight"+row.id).show();
                                $("#gy"+row.id).show();
                                $("#dj"+row.id).show();
                                $("#bz"+row.id).show();
                                var this_lxc = ""
                                var this_gy=""
                                var select4 = ""
                                var select9 = ""
                                for (var i = 0; i < r; i++) {
                                    this_lxc = this_lxc + "<option value=\"" + select_lxc[i].lxc + "\" selected=\"selected\">" + select_lxc[i].lxc + "</option>"
                                    select4 = "<select id='lxc" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"lxc\"" + ")' placeholder='铝材颜色' type='text' class='form-control'  value='" + value + "'>"
                                    select4 = select4 + this_lxc;
                                    select4 = select4 + "<select/>"

                                    $("#gh"+row.id).append("<option>" + select_lxc[i].lxc + "</option>")

                                }
                                for(var i = 0; i < r; i++) {
                                    this_gy = this_gy + "<option value=\"" + select_gy[i].gy + "\" selected=\"selected\">" + select_gy[i].gy + "</option>"
                                    select9 = "<select id='gy" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"gy\"" + ")' placeholder='光源' type='text' class='form-control'  value='" + value + "'>"
                                    select9 = select9 + this_gy;
                                    select9 = select9 + "<select/>"
                                    $("#gy"+row.id).append("<option>" + select_gy[i].gy + "</option>")
                                }

                                return select4;
                            }
                            else if(selectedValue=='房间柜号'){
                                // $("#gh"+row.id).remove();
                                $("#gh"+row.id).value="";
                                $("#gh"+row.id).hide();
                                $("#gh1"+row.id).show();
                                $("#lcys"+row.id).hide();
                                $("#ddcd"+row.id).hide();
                                $("#sl"+row.id).hide();
                                $("#cxdk"+row.id).hide();
                                $("#cxdkRight"+row.id).hide();
                                $("#gy"+row.id).hide();
                                $("#dj"+row.id).hide();
                                $("#bz"+row.id).hide();

                            }else if(selectedValue=='电源'){
                                $("#gh"+row.id).show();
                                $("#gh1"+row.id).hide();
                                $("#lcys"+row.id).hide();
                                $("#ddcd"+row.id).hide();
                                $("#sl"+row.id).show();
                                $("#cxdk"+row.id).hide();
                                $("#cxdkRight"+row.id).hide();
                                $("#gy"+row.id).hide();
                                $("#dj"+row.id).show();
                                $("#bz"+row.id).show();
                                var this_dy = ""
                                var select5 = ""
                                for (var i = 0; i < select_dy.length; i++) {
                                    this_dy = this_dy + "<option value=\"" + select_dy[i].dy + "\" selected=\"selected\">" + select_dy[i].dy + "</option>"
                                    select5 = "<select id='dy" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"dy\"" + ")' placeholder='电源' type='text' class='form-control'  value='" + value + "'>"
                                    select5 = select5 + this_dy;
                                    select5 = select5 + "<select/>"
                                    $("#gh"+row.id).append("<option>" + select_dy[i].dy + "</option>")

                                }

                                return select5;
                            }else if(selectedValue=='开关'){
                                ("#gh"+row.id).show();
                                $("#gh1"+row.id).hide();
                                $("#lcys"+row.id).hide();
                                $("#ddcd"+row.id).hide();
                                $("#sl"+row.id).show();
                                $("#cxdk"+row.id).hide();
                                $("#cxdkRight"+row.id).hide();
                                $("#gy"+row.id).hide();
                                $("#dj"+row.id).show();
                                $("#bz"+row.id).show();
                                var this_kg = ""
                                var select6 = ""
                                for (var i = 0; i < select_kg.length; i++) {
                                    this_kg = this_kg + "<option value=\"" + select_kg[i].kg + "\" selected=\"selected\">" + select_kg[i].kg + "</option>"
                                    select6 = "<select id='kg" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"kg\"" + ")' placeholder='开关' type='text' class='form-control'  value='" + value + "'>"
                                    select6 = select6 + this_kg;
                                    select6 = select6 + "<select/>"
                                    $("#gh"+row.id).append("<option>" + select_kg[i].kg + "</option>")

                                }

                                return select6;
                            }else if(selectedValue=='配件'){
                                ("#gh"+row.id).show();
                                $("#gh1"+row.id).hide();
                                $("#lcys"+row.id).hide();
                                $("#ddcd"+row.id).hide();
                                $("#sl"+row.id).show();
                                $("#cxdk"+row.id).hide();
                                $("#cxdkRight"+row.id).hide();
                                $("#gy"+row.id).hide();
                                $("#dj"+row.id).show();
                                $("#bz"+row.id).show();
                                var this_pj = ""
                                var select7 = ""
                                for (var i = 0; i < select_kg.length; i++) {
                                    this_pj = this_pj + "<option value=\"" + select_pj[i].pj + "\" selected=\"selected\">" + select_pj[i].pj + "</option>"
                                    select7 = "<select id='pj" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"pj\"" + ")' placeholder='开关' type='text' class='form-control'  value='" + value + "'>"
                                    select7 = select7 + this_pj;
                                    select7 = select7 + "<select/>"
                                    $("#gh"+row.id).append("<option>" + select_pj[i].pj  + "</option>")

                                }
                                return select7;
                            }
                        })
                    })
                    return "<select id='fj" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"fj\"" + ")' placeholder='是否月结' type='text' class='form-control'  value='" + value + "'>" +
                        "<option value=''>请选择项目类别</option>" +
                        "<option value='铝型材'>铝型材</option>" +
                        "<option value='房间柜号'>房间柜号</option>" +
                        "<option value='电源'>电源</option>" +
                        "<option value='开关'>开关</option>" +
                        "<option value='配件'>配件</option>" +
                        "</select>"

                }
            }, {
                field: 'gh',
                title: '项目名称',
                align: 'center',
                sortable: true,
                width: 100,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }

                    // var this_gh = ""
                    // var select4 = ""
                    // for (var i = 0; i < select_lcys.length; i++) {
                    //     this_gh = this_gh + "<option value=\"" + select_gh[i].ghxl + "\" selected=\"selected\">" + select_gh[i].ghxl + "</option>"
                    //     select4 = "<select id='gh" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"gh\"" + ")' placeholder='项目名称' type='text' class='form-control'  value='" + value + "'>"
                    //     select4 = select4 + this_gh;
                    //     select4 = select4 + "<select/>"
                    //
                    // }
                    // return select4;
                    return "<select id='gh" + row.id + "' 'columnUpd(" + row.id + "," + "\"gh\" " + ")' placeholder='"+index+"' type='text' class='form-control'  value='" + value + "'>" +
                        "</select>"
                }


                // return "<select id='gh" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"gh\" " + ")' placeholder='项目名称' type='text' class='form-control'  value='" + value + "'>"+"</select>"

            }, {
                field: 'gh',
                title: '房间柜号',
                align: 'center',
                sortable: true,
                width: 100,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }

                    return "<input id='gh1" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"gh\" " + ")' placeholder='"+index+"' type='text' class='form-control'  value='" + value + "'>"
                }
            }, {
                field: 'lcys',
                title: '铝型材颜色',
                align: 'center',
                sortable: true,
                width: 100,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }
                    var this_lcys = ""
                    var select2 = ""
                    for (var i = 0; i < select_lcys.length; i++) {
                        this_lcys = this_lcys + "<option value=\"" + select_lcys[i].lcys + "\" selected=\"selected\">" + select_lcys[i].lcys + "</option>"
                        select2 = "<select id='lcys" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"lcys\"" + ")' placeholder='铝材颜色' type='text' class='form-control'  value='" + value + "'>"
                        select2 = select2 + this_lcys;
                        select2 = select2 + "<select/>"

                    }
                    $("#lcys"+row.id).append("<option selected='selected'>" +"--请选择--" + "</option>");
                    return select2;
                }
            }, {
                field: 'ddcd',
                title: '灯带长度mm',
                align: 'center',
                sortable: true,
                width: 80,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }

                    return "<input id='ddcd" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"ddcd\" " + ")' placeholder='"+index+"' type='text' class='form-control'  value='" + value + "'>"
                }
            }, {
                field: 'sl',
                title: '数量(支)',
                align: 'center',
                sortable: true,
                width: 80,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }

                    return "<input id='sl" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"sl\" " + ")' placeholder='"+index+"' type='text' class='form-control'  value='" + value + "'>"
                }
            }, {
                field: 'cxdk',
                title: '出线端口左出线',
                align: 'center',
                sortable: true,
                width: 80,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }

                    return "<input id='cxdk" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"cxdk\" " + ")' placeholder='"+index+"' type='text' class='form-control'  value='" + value + "'>"
                }
            }, {
                field: 'cxdkRight',
                title: '出线端口右出线',
                align: 'center',
                sortable: true,
                width: 80,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }
                    return "<input id='cxdkRight" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"cxdkRight\" " + ")' placeholder='"+index+"' type='text' class='form-control'  value='" + value + "'>"
                }
            }, {
                field: 'gy',
                title: '光源',
                align: 'center',
                sortable: true,
                width: 100,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }
                    var this_gy = ""
                    var select3 = ""
                    for (var i = 0; i < select_gy.length; i++) {
                        this_gy = this_gy + "<option value=\"" + select_gy[i].gy + "\" selected=\"selected\">" + select_gy[i].gy + "</option>"
                        select3 = "<select id='gy" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"lcys\"" + ")' placeholder='光源' type='text' class='form-control'  value='" + value + "'>"
                        select3 = select3 + this_gy;
                        select3 = select3 + "<select/>"

                    }
                    return select3;
                }
            }
            , {
                field: 'gl',
                title: '功率W',
                align: 'center',
                sortable: true,
                width: 150,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }
                    return "<input id='gl" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"gl\" " + ")' placeholder='"+index+"' type='text' class='form-control'  value='" + value + "' readonly>"
                }
            }
            , {
                field: 'bz',
                title: '备注',
                align: 'center',
                sortable: true,
                width: 80,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }
                    return "<input id='bz" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"bz\" " + ")' placeholder='"+index+"' type='text' class='form-control'  value='" + value + "'>"
                }
            }, {
                field: 'dj',
                title: '单价',
                align: 'center',
                sortable: true,
                width: 50,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }
                    return "<input id='dj" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"dj\" " + ")' placeholder='"+index+"' type='text' class='form-control'  value='" + value + "'>"
                }
            }
            , {
                field: 'je',
                title: '金额',
                align: 'center',
                sortable: true,
                width: 150,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }
                    return "<input id='je" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"je\" " + ")' placeholder='"+index+"' type='text' class='form-control'  value='" + value + "' readonly>"
                }
            }, {
                field: 'chicun',
                title: '开料尺寸',
                align: 'center',
                sortable: true,
                width: 160,
                formatter: function (value, row, index) {
                    if (value == null) {
                        value = '';
                    }
                    return "<input id='chicun" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"chicun\" " + ")' placeholder='"+index+"' type='text' class='form-control'  value='" + value + "' readonly>"
                }
            }
            // , {
            //     field: 'lxdh',
            //     title: '联系电话',
            //     align: 'center',
            //     sortable: true,
            //     width: 130,
            //     formatter: function (value, row, index) {
            //         if (value == null) {
            //             value = '';
            //         }
            //         return "<input id='lxdh" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"lxdh\" " + ")' placeholder='联系电话' type='text' class='form-control'  value='" + value + "'>"
            //     }
            // }
            // , {
            //     field: 'wancheng',
            //     title: '完成状态',
            //     align: 'center',
            //     sortable: true,
            //     width: 180,
            //     formatter: function (value, row, index) {
            //         if (value == null) {
            //             value = '';
            //         }
            //         return "<select id='wancheng" + row.id + "' oninput='javascript:columnUpd(" + row.id + "," + "\"wancheng\"" + ")' placeholder='完成状态' type='text' class='form-control'  value='" + value + "'>" +
            //             "<option value=''>--请选择完成状态--</option>" +
            //             "<option value='已审验'>已审验</option>" +
            //             "<option value='未审验'>未审验</option>" +
            //             "<option value='优先处理'>优先处理</option>" +
            //             "<option value='加工完成'>加工完成</option>" +
            //             "<option value='正在加工'>正在加工</option>" +
            //             "<option value='完成'>完成</option>" +
            //             "</select>"
            //     }
            // }
            , {
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
        url: '/ddxd/getList',
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
                    khmc: array[i].khmc,
                    xdrq: array[i].xdrq,
                    djbh: array[i].djbh,
                    shouhuo: array[i].shouhuo,
                    lxdh: array[i].lxdh,
                    shfs: array[i].shfs,
                    azdz: array[i].azdz,
                    ddh: array[i].ddh,
                    fj: array[i].fj,
                    gh: array[i].gh,
                    ddcd: array[i].ddcd,
                    sl: array[i].sl,
                    cxdk: array[i].cxdk,
                    cxdkRight: array[i].cxdkRight,
                    lcys: array[i].lcys,
                    gy: array[i].gy,
                    dy: array[i].dy,
                    kg: array[i].kg,
                    pj: array[i].pj,
                    gl: array[i].gl,
                    bz: array[i].bz,
                    dj: array[i].dj,
                    fkzt: array[i].fkzt,
                    hd: array[i].hd,
                    shunxu: array[i].shunxu,
                    chicun: array[i].chicun,
                    summoney: array[i].summoney,
                    wancheng: array[i].wancheng,
                    jgczy: array[i].jgczy,
                    wcsj: array[i].wcsj,
                    luruyuan: array[i].luruyuan,
                    je: array[i].je,
                }
                header.push(body)
            }
            console.log(header)
            title = ['客户名称', '下单日期', '单据编号', '收货', '联系电话', '送货方式', '安装地址', '订单号', '项目类别', '项目名称', '灯带长度mm', '数量(支)', '出线端口左', '出线端口右', '铝材颜色', '光源', '电源', '开关', '配件', '功率W', '备注', '单价', '付款状态', '审单', '顺序', '尺寸', '总金额', '完成状态', '加工操作员', '完成时间', '录入员', '金额']
            JSONToExcelConvertor(header, "灯带下单", title)

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

        if (res.code == 200) {

            //默认当前日期
            var date = new Date();
            var day = ("0" + date.getDate()).slice(-2);
            var month = ("0" + (date.getMonth() + 1)).slice(-2);
            //拼接成yyyy-MM-dd的形式
            var xdrq = date.getFullYear() + "-" + (month) + "-" + (day);
            var djbh = "";
            var ksxdrq = date.getFullYear() + "-" + (month) + "-" + (day);
            var jsxdrq = date.getFullYear() + "-" + (month) + "-" + ("0" + (date.getDate() + 1)).slice(-2);
            var khmc = "";
            var ddh = "";
            var azdz = "";
            $ajax({
                type: 'post',
                url: '/ddxd/queryList1',
                data: {
                    ksxdrq: ksxdrq,
                    jsxdrq: jsxdrq,
                    khmc: khmc,
                    ddh: ddh,
                    azdz: azdz
                },
                async: false,
            }, false, '', function (res) {
                var length;

                length = 0;
                if (res.data != undefined) {
                    length = res.data.length
                }
                console.log(length)
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
                djbh = "DD" + date.getFullYear() + (month) + (day) + length;
                console.log(djbh)
            })
            console.log(djbh)
            setForm(res.data, '#add-form');
            $('#add-luruyuan').val(res.data.name);
            $('#add-xdrq').val(xdrq);
            $('#add-djbh').val(djbh);

        }
    })
}
// function getNumbern() {
//     //默认当前日期
//     //默认当前日期
//     var date = new Date();
//     var day = ("0" + date.getDate()).slice(-2);
//     var month = ("0" + (date.getMonth() + 1)).slice(-2);
//     //拼接成yyyy-MM-dd的形式
//     var xdrq = date.getFullYear() + "-" + (month) + "-" + (day);
//     var djbh = "";
//     var ksxdrq = date.getFullYear() + "-" + (month) + "-" + (day);
//     var jsxdrq = date.getFullYear() + "-" + (month) + "-" + ("0" + (date.getDate() + 1)).slice(-2);
//     var khmc = "";
//     var ddh = "";
//     var azdz = "";
//     $ajax({
//         type: 'post',
//         url: '/ddxd/queryList1',
//         data: {
//             ksxdrq: ksxdrq,
//             jsxdrq: jsxdrq,
//             khmc: khmc,
//             ddh: ddh,
//             azdz: azdz
//         },
//         async: false,
//     }, false, '', function (res) {
//         var length;
//
//         length = 0;
//         if (res.data != undefined) {
//             length = res.data.length
//         }
//         console.log(length)
//         if (Math.floor((length + 1) / 10) === 0) {
//             length = "000" + (length + 1);
//         } else if (Math.floor((length + 1) / 100) === 0) {
//             length = "00" + (length + 1);
//         } else if (Math.floor((length + 1) / 1000) === 0) {
//             length = "0" + (length + 1);
//         } else if (Math.floor((length + 1) / 10000) === 0) {
//             length = (length + 1);
//         }
//         console.log(length)
//         djbh = "DD" + date.getFullYear() + (month) + (day) + length;
//         console.log(djbh)
//     })
//     console.log(djbh)
//     setForm(res.data, '#add-form');
//     $('#add-luruyuan').val(res.data.name);
//     $('#add-xdrq').val(xdrq);
//     $('#add-djbh').val(djbh);
//
//
// }

$('#add-comeAgain-btn').click(function () {

    getJe();
    getGl();
    getkailiao();
    let params = formToJson("#add-form");
    if (checkForm('#add-form')) {
        $ajax({
            type: 'post',
            url: '/ddxd/add',
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


    // $('#add-modal').modal('show');
    getToken()
    // getNumbern()
    // getInputGh()
    getInputLcys()
    getInputGy()

})