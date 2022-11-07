$(function() {
    // 获取用户的基本信息
    getUserInfo()

    // 退出登录
    $('#btnLogout').on('click', function() {
        layui.layer.confirm('确定退出登录?', { icon: 3, title: '提示' }, function(index) {
            //do something
            //清空本地存储的token
            localStorage.removeItem('token')
                // 返回登录界面
            location.href = '/前端页面/login.html'
            layer.close(index);
        });
    })
})

function getUserInfo() {
    $.ajax({

        method: 'get',
        url: '/my/userinfo',

        success: function(res) {
            if (res.status !== 0) {
                return layui.layer.msg('获取用户信息失败')
            }
            console.log(res)
                // 渲染用户头像
            renderAvatar(res.data)
        },
        // 无论成功还是失败都会执行

    })
}
// 渲染用户头像
function renderAvatar(user) {
    // 获取用户名称并渲染
    var name = user.nicknake || user.username
    $('#welcom').html('欢迎&nbsp' + name)
        // 渲染用户头像
    var avatar = user.user_pic
    if (avatar !== null) {
        $('.layui-nav-img').attr('src', avatar).show()
        $('.text-avatar').hide()
    } else {
        $('.layui-nav-img').hide()
        var first = name[0].toUpperCase()
        $('.text-avatar').html(first).show()
    }
}