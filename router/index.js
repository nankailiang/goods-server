// 路由模块
const express = require('express')

// 创建路由实例
const router = express.Router()

// 用户相关路由
router.use(require('./user'))

// 商品相关路由

// 导出路由实例
module.exports = router