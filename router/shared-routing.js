const express = require('express')
const router = express.Router()
const Department = require('../model/department-model').db
const lodash = require('lodash')

router.get('/department', async (req, res, next) => {
    try {
        const department = await Department.find({ deleted: false }).sort('name')
        const formation = lodash.map(department, (item) => {
            return { value: item._id, text: item.name }
        })
        res.status(200).json(formation)
    } catch (err) { res.status(404).json({ message: res.message }) }
})

module.exports = router