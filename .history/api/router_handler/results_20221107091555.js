const db = require('../db/index')


// 投票
exports.postResults = (req, res) => {
        res.send('ok')
    }
    //查看结果
exports.getResults = (req, res) => {
    const sql = 'select * from tou'
    db.query(sql, (err, results) => {
        // 1. 执行 SQL 语句失败
        if (err) return res.cc(err)
            // 2. 执行 SQL 语句成功
        res.send({
            status: 0,
            message: '获取邮票结果成功！',
            data: results,
        })
    })

}