const db = require('../db/index')
const bcrypt = require('bcryptjs')

//注册
exports.regUser = (req, res) => {
        const userinfo = req.body
        const sql = 'select * from users where username=?'
        db.query(sql, [userinfo.username], (err, results) => {
                if (err) return res.cc(err)
                if (results.length > 0) return res.cc('用户名被占用')
                const sqlStr = 'insert into user set ?'
                db.query(sqlStr, { username: userinfo.username, password: userinfo.password }, (err, results) => {
                    if (err) return res.send({ status: 1, message: err.message })
                        // SQL 语句执行成功，但影响行数不为 1
                    if (results.affectedRows !== 1) {
                        return res.send({ status: 1, message: '注册用户失败，请稍后再试！' })
                    }
                    // 注册成功
                    res.cc('注册成功', 0)
                })
            })
            // res.send('ok')
    }
    //登录
exports.login = (req, res) => {
    res.send('ok')
}