const express = require('express')
const router = express.Router()
const makeRouting = require('./motorcycle/make-routing')
const modelRouting = require('./motorcycle/model-routing')
const detailRouting = require('./motorcycle/detail-routing')


router.use('/make', makeRouting)
router.use('/model', modelRouting)
router.use('/detail', detailRouting)

module.exports = router