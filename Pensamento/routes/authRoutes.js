const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')
 

router.get('/login', AuthController.login)
router.post('/login', AuthController.loginPost) //rota de login
router.get('/register', AuthController.register)
router.post('/register', AuthController.registerPost) //rota de mensagem de erro 
router.get('/logout', AuthController.logout) //rota do logout

module.exports = router