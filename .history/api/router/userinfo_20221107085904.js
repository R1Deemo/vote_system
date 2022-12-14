const express = require('express')
const router = express.Router()

const userinfo_handler = require('../router_handler/userinfo')

// 获取用户的基本信息
router.get('/userinfo', userinfo_handler.getUserInfo)
    // 向外共享路由对象
module.exports = router