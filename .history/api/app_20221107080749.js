const express = require('express')

const app = express()

const cors = require('cors')
app.use(cors())

app.use(express.urlencoded({ extended: false }))


app.listen(1234, () => {
    console.log('run')
})