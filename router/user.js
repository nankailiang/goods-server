// 路由模块
const express = require('express')
const userCtrl = require('../controller/user')

// 创建路由实例
const router = express.Router()

// 用户相关路由
router.post('/user/login', userCtrl.login)

// 导出路由实例
module.exports = router