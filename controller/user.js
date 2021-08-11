const { User } = require('../model')

// 用户登录
exports.login = async (req, res, next) => {
    try {
        // 处理请求
        console.log(req.body)

        // 将数据保存到数据库
        const user = new User(req.body)
        await user.save()

        // 请求响应
        res.status(201).json({
            user
        })
    } catch (err) {
        next(err)
    }
}