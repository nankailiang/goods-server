const express = require('express')
const { port } = require('./config/config.default')
const morgan = require('morgan')
const cors = require('cors')
const routers = require('./router')
const errorHandler = require('./middleware/error-handler')
require('./model')

// 中间件的挂载顺序很重要！！！
// 创建express实例对象
const app = express()

// 配置默认端口
const PORT = port || 3000

// 配置日志
app.use(morgan('dev'))

// 配置表单解析请求体
app.use(express.json())

// 跨域资源共享
app.use(cors())

// 挂载路由
app.use(routers)


// 在所有中间件之后挂载错误处理中间件
app.use(errorHandler())

app.listen(PORT, () => {
    console.log(`running serve at ${PORT}`)
})
