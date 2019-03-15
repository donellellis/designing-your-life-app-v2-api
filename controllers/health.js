const express = require('express')
const router = express.Router()

const User = require('../models/User')

const decodeToken = require('./auth')

router.get('/show', (req, res) => {
    const id = decodeToken(req)
    console.log(id)
    User.findById(id)
    .then(user => {
        if (user !== null){
            //request is authenticated
            console.log("this is the user's health gauge" + user.healthGauge)
            res.json(user.healthGauge)
        }
    })
})

router.put('/edit', (req, res) => {
    console.log(req.body)
    const id = decodeToken(req)
    User.findByIdAndUpdate(id)
    .then(user => {
        console.log('user')
        // user.save(function (err) {
        //     if (err) return handleError(err)
        //     console.log('project updated')
        // })
    })
    .catch(err => {
        console.log(err)
    })

})

module.exports = router