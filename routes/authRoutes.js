const authController = require('../controllers/authController')

const router = require('express').Router()

router.post('/user-login', authController.user_login)
router.post('/user-register', authController.user_register)

module.exports = router