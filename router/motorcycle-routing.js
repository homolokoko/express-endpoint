const express = require('express')
const router = express.Router()
const makeRouting = require('./motorcycle/make-routing')
const modelRouting = require('./motorcycle/model-routing')


router.use('/make', makeRouting)
router.use('/model', modelRouting)

module.exports = router