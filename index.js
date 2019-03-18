const express = require('express')
const parser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')
const passport = require('./config/passport')()
const app = express()

// prevents heroku from sleeping
let http = require('http')
setInterval(function() {
    http.get('https://designing-your-life-api.herokuapp.com')
}, 300000) // every 5 minutes (300000)

//needed for environnental variables in frontend
require('dotenv').config()

//controllers
const userController = require('./controllers/users')
const healthController = require('./controllers/health')
const workController = require('./controllers/work')
const loveController = require('./controllers/love')
const playController = require('./controllers/play')

app.use(parser.json())
app.use(methodOverride('_method'))
app.use(cors())
app.use(passport.initialize())

//routes
app.use('/users', userController)
app.use('/health', healthController)
app.use('/work', workController)
app.use('/love', loveController)
app.use('/play', playController)


app.set('port', process.env.PORT || 4000)

app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
})