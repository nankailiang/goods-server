const { User } = require('../model')
const jwt = require('../util/jwt')
const { jwtSecret } = require('../config/config.default')

// 用户登录
exports.login = async (req, res, next) => {
    try {
        // 处理请求
        const user = req.user.toJSON()
        const token = await jwt.sign({
            userId: user._id
        }, jwtSecret)
        // 请求响应
        delete user.password
        res.status(200).json({
            data: {
                ...user,
                token
            }
        })
    } catch (err) {
        next(err)
    }
}

// 用户登录
exports.register = async (req, res, next) => {
    try {
        // 处理请求
        // 将数据保存到数据库
        let user = new User(req.body)
        await user.save()

        user = user.toJSON()
        delete user.password

        // 请求响应
        res.status(200).json({
            user
        })
    } catch (err) {
        next(err)
    }
}