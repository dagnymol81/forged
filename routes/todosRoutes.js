const express = require('express')
const router = express.Router()
const todoCtrl = require('../controllers/todoController')

router.get('/index', todoCtrl.index)
router.post('/add', todoCtrl.add)

module.exports = router