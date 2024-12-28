const express = require('express')
const router = express.Router()
const Department = require('../model/department-model').db
const lodash = require('lodash')
const Country = require('../model/country')

router.get('/department', async (req, res, next) => {
    try {
        const department = await Department.find({ deleted: false }).sort('name')
        const formation = lodash.map(department, (item) => {
            return { value: item._id, text: item.name }
        })
        res.status(200).json(formation)
    } catch (err) { res.status(404).json({ message: res.message }) }
})

router.get('/countries', async (req, res, next) => {
    try {
        const department = await Country.find({ deleted: false }).sort('name')
        const formation = lodash.map(department, (item) => {
            return { value: item._id, text: item.name }
        })
        res.status(200).json(formation)
    } catch (err) { res.status(404).json({ message: res.message }) }
})

module.exports = router