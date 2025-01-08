const express = require('express')
const router = express.Router()
const makeRouting = require('./motorcycle/make-routing')
const modelRouting = require('./motorcycle/model-routing')
const detailRouting = require('./motorcycle/detail-routing')
const imagesRouting = require('./motorcycle/images-routing')


router.use('/make', makeRouting)
router.use('/model', modelRouting)
router.use('/detail', detailRouting)
router.use('/images', imagesRouting)

module.exports = router