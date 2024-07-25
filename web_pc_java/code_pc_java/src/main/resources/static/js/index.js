var CC="LI";
$(function () {
    $("#submit-btn").click(function () {
        if (checkForm('#login-form')) {
            let params = formToJson('#login-form')
            $ajax({
                type: 'post',
                url: 'user/login',
                data: {
                    username: params.username,
                    password: params.password
                }
            }, true, '', function (res) {
                if (res.code > 0) {
                    swal("", res.msg, "success");

                        $ajax({
                            type:'post',
                            url:'user/getNameByUserName',
                            data:{
                                username:params.username,
                            },

                        },false,'',function (aa){
                            if (res.code>0){
                                const now = new Date(); // 定义并初始化now变量
                                const year = now.getFullYear();
                                const month = String(now.getMonth() + 1).padStart(2, '0');
                                const day = String(now.getDate()).padStart(2, '0');
                                const hours = String(now.getHours()).padStart(2, '0');
                                const minutes = String(now.getMinutes()).padStart(2, '0');
                                const seconds = String(now.getSeconds()).padStart(2, '0');
                                const loginDate = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
                                $ajax({

                                    type:'post',
                                    url:'logindate/add',
                                    data: JSON.stringify({
                                        name:res.data.username,
                                        userName:params.username,
                                        loginDate:loginDate,
                                    })
                                    ,
                                    dataType: 'json',
                                    contentType: 'application/json;charset=utf-8',
                                    success:function (response){
                                        if (response.success) { // 假设后端返回的对象包含 success 属性
                                            swal("", response.msg, "OK");
                                        } else {
                                            swal("", response.msg, "error");
                                        }
                                    }

                                })
                            }
                            }
                        )
                    setTimeout(function() {
                        window.location.href = "html/main.html";
                    }, 1500);

                } else {
                    swal("", res.msg, "error");
                }
            })
        }
    })
});


// function getToken() {
//     // 假设已经引入了jQuery
//     $.ajax({
//         type: 'post',
//         url: 'user/getToken',
//         success: function (res) {
//             if (res.code == 200) {
//
//                 const logindate = 1;
//
//                 const name = res.data.token.name; // 修正属性访问
//                 const username = res.data.token.username; // 修正属性访问
//
//                 $.ajax({
//                     type: 'post',
//                     url: 'logindate/add',
//                     data: {
//                         name: name,
//                         username: username,
//                         logindate: logindate
//                     },
//
//                 });
//             }
//         },
//         error: function (xhr, status, error) {
//             console.error("Error fetching token:", error);
//         }
//     });
// }
