const db = require('../db/index')


// 投票
exports.postResults = (req, res) => {
        // salty=5', 'tomato_flavor=5', 'raw_starchFlavor=5', 'brittleness=5', 'sweet_taste=5
        //  const sql = `update testt set salty=?, tomato_flavor=?, raw_starchFlavor=?, brittleness=?, sweet_taste=?`
        // console.log(req.body)
        var arr = []
        for (let j in req.body) {
            arr.push(j)
        }
        // console.log(arr)

        const sqlStr = 'select * from testt where id=? '
        for (var i = 1; i <= 5; i++) {
            // console.log(arr)

            // console.log(req.body.arr[1])
            db.query(sqlStr, i, (err, results) => {
                if (err) return res.cc(err)
                if (results.length > 0) {
                    const sql = 'update testt set number=number+? where id=?'

                    db.query(sql, [req.body.arr[i], 1], (err, results) => {
                        if (err) return res.cc(err)
                            // SQL 语句执行成功，但是影响行数不等于 1
                        if (results.affectedRows !== 1) return res.cc('投票失败！')
                            // 投票成功
                        res.cc('投票成功！', 0)
                    })
                }

            })
        }


        // const sql = `update testt set number=? where id= ?`
        // const data = req.body
        // console.log(data)
        // db.query(sql, [1, req.body.id], (err, results) => {
        //     // 执行 SQL 语句失败
        //     if (err) return res.cc(err)
        //         // SQL 语句执行成功，但是影响行数不等于 1
        //     if (results.affectedRows !== 1) return res.cc('投票失败！')
        //         // 更新文章分类成功
        //     res.cc('投票成功！', 0)
        // })
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