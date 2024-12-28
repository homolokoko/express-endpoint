const express = require('express')
const router = express.Router()
const makeRouting = require('./motorcycle/make-routing')


router.use('/make', makeRouting)


module.exports = router