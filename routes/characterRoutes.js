const express = require('express')
const router = express.Router()
const charCtrl = require('../controllers/characterController')

router.get('/index', charCtrl.index)
router.post('/add', charCtrl.add)
router.get('/:id', charCtrl.show)

module.exports = router