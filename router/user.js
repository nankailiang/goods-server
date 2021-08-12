// 路由模块
const express = require('express')
const userCtrl = require('../controller/user')
const userValidator = require('../validator/user')

// 创建路由实例
const router = express.Router()

// 用户相关路由
// 用户登录
router.post('/user/login',userValidator.login ,userCtrl.login)
// 用户注册
router.post('/user/register', userValidator.register, userCtrl.register)

// 导出路由实例
module.exports = router