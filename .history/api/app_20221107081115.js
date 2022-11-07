const express = require('express')

const app = express()

const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({ extended: false }))


// 导入路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)


app.listen(1234, () => {
    console.log('run')
})