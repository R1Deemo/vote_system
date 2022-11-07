const db = require('../db/index')


// 投票
exports.postResults = (req, res) => {
        // salty=5', 'tomato_flavor=5', 'raw_starchFlavor=5', 'brittleness=5', 'sweet_taste=5
        //  const sql = `update testt set salty=?, tomato_flavor=?, raw_starchFlavor=?, brittleness=?, sweet_taste=?`
        const sql = `update testt set number=? where id= ?`
        const data = req.body
        console.log(data)
        db.query(sql, [1, req.body.id], (err, results) => {
            // 执行 SQL 语句失败
            if (err) return res.cc(err)
                // SQL 语句执行成功，但是影响行数不等于 1
            if (results.affectedRows !== 1) return res.cc('投票失败！')
                // 更新文章分类成功
            res.cc('投票成功！', 0)
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