const express = require('express')
const router = express.Router()

const authCtrl = require('../controllers/authController')

router.post('/register', authCtrl.register)
router.post('/login', authCtrl.login)
router.get('/test', authCtrl.test)

module.exports = router