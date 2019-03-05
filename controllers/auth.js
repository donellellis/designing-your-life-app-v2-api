const jwt = require('jwt-simple') // used to create, sign, and verify tokens
const config = require('../config/config') //get config file


module.exports = function decodeToken(req) {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decodedToken = jwt.decode(token, config.jwtSecret)
    const decodedId = decodedToken.id
    return decodedId
  }
  catch(error) {
    console.log('decodedId failed', error)
    return null
  }
}
