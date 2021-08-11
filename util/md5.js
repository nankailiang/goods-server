const crypto = require('crypto')

module.exports = srt => {
    return crypto.createHash('md5')
    .update('nkl' + str)
    .digest('hex')
}