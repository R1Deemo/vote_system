const express = require('express')

const app = express()
const joi = require('@hapi/joi')

const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({ extended: false }))

app.use(function(req, res, next) {
    res.cc = function(err, status = 1) {
        res.send({
            status,
            message: err instanceof Error ? err.message : err
        })
    }
    next()
})

// 导入路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)

//错误中间件
app.use(function(err, req, res, next) {
    // 数据验证失败
    if (err instanceof joi.ValidationError) return res.cc(err)
        // 未知错误
    res.cc(err)
})

app.listen(1234, () => {
    console.log('run')
})