const express = require('express')
const router = express.Router()

const User = require('../models/User')

const decodeToken = require('./auth')

// shows user work gauge
router.get('/show', (req, res) => {
    const id = decodeToken(req)
    console.log(id)
    User.findById(id)
    .then(user => {
        if (user !== null){
            //request is authenticated
            res.json(user.workGauge)
        }
    })
})

// edits user work gauge
router.put('/edit', (req, res) => {
    console.log(req.body)
    const id = decodeToken(req)
    User.findByIdAndUpdate(id, {
        workGauge: {
            level: req.body.level, 
            assessment: req.body.assessment
        }
    }, {new: true})
    .then(user => {
        user.save(function (err) {
            if (err) {
                console.log(err)
            }
            console.log('work gauge edited')
        })
    })
    res.status(200).end()
})

module.exports = router