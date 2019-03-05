const express = require('express')
const parser = require('body-parser')
const methodOverride = require('method-override')
const cors = require('cors')
const passport = require('./config/passport')
const app = express()

//needed for environnental variables in frontend
require('dotenv').config()

//controllers
const userController = require('./controllers/users.js')

app.use(parser.json())
app.use(methodOverride('_method'))
app.use(cors())
app.use(passport.initialize())

//routes
app.use('/users', userController)

app.set('port', process.envPORT || 4000)

app.listen(app.get('port'), () => {
    console.log(`✅ PORT: ${app.get('port')} 🌟`)
})