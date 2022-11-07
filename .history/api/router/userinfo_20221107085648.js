const express = require('express')
const router = express.Router()



// 获取用户的基本信息
router.get('/userinfo', (req, res) => {
        res.send('ok')
    })
    // 向外共享路由对象
module.exports = router