const express = require('express')
const router = express.Router()
const Department = require('../model/department-model').db
const lodash = require('lodash')
const Country = require('../model/country')
const MotorbikeMake = require('../model/motorcycle/make')
const MotorbikeModel = require('../model/motorcycle/model')

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

router.get('/makes', async (req, res, next) => {
    // res.json(req.query)
    try {
        const list = MotorbikeMake.find(req.query)
        const formation = lodash.map(await list, (item) => {
            return { value: item._id, text: item.name }
        })
        res.status(200).json(formation)
    } catch (err) { res.status(404).json({ message: res.message }) }
})


router.get('/models', async (req, res, next) => {
    try {
        const list = MotorbikeModel.find(req.query)
        const formation = lodash.map(await list, (item) => {
            return { value: item._id, text: item.name }
        })
        res.status(200).json(formation)
    } catch (err) { res.status(404).json({ message: res.message }) }
})



module.exports = router