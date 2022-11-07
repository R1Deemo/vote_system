const db = require('../db/index')


// 投票
exports.postResults = (req, res) => {
        const sql = `update testt set ? where Id=?`
        db.query(sql, [req.body, req.body.Id], (err, results) => {
            // 执行 SQL 语句失败
            if (err) return res.cc(err)
                // SQL 语句执行成功，但是影响行数不等于 1
            if (results.affectedRows !== 1) return res.cc('更新文章分类失败！')
                // 更新文章分类成功
            res.cc('更新文章分类成功！', 0)
        })
    }
    //查看结果
exports.getResults = (req, res) => {
    const sql = 'select * from testt'
    db.query(sql, (err, results) => {
        // 1. 执行 SQL 语句失败
        if (err) return res.cc(err)
            // 2. 执行 SQL 语句成功
        res.send({
            status: 0,
            message: '获取投票结果成功！',
            data: results,
        })
    })

}