const mongoose = require('mongoose')
const { dbUrl } = require('../config/config.default')

// 连接mongodb数据库
mongoose.connect(dbUrl, { 
    useNewUrlParser: true,
    useUnifiedTopology: true 
})

const db = mongoose.connection

// 连接失败
db.on('error', err => {
    console.log('error:', err)
})

// 连接成功
db.once('open', function() {
  console.log('success')
})

// 组织导出模型类
module.exports = {
  User: mongoose.model('User', require('./user'))
}
