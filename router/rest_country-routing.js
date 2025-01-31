const express = require('express')
const router = express.Router()
const Header = require('./rest_country/header')
const Name = require('./rest_country/name')


router.use('/header', Header)
router.use('/name', Name)

module.exports = router