const express = require('express')
const router = express.Router()

const touHandler = require('../router_handler/results')

//投票
router.post('/results', touHandler.getResults)