const express = require('express')
const router = express.Router()
const Department = require('../model/department-model').db

router.get('/', async (req, res, next) => {
    const list = await Department.find({ deleted: false })
    if (list === null)
        res.status(404).json({ message: 'Page not Found' })
    else
        res.status(200).json(list)
})

router.post('/', async (req, res, next) => {
    const newDepartment = new Department({ name: req.body.name })
    try {
        const record = await newDepartment.save()
        res.status(201).json(record);
    } catch (err) { res.status(500).json({ message: err.message }) }
})

router.get('/:id', async (req, res, next) => {
    res.json(await Department.findOne({ _id: req.params.id }))
})

router.delete('/:id', async (req, res, next) => {
    try {
        const department = await Department
            .findOneAndUpdate(
                { _id: req.params.id },
                { deleted: true }
            )
        res.status(200).json(department)
    } catch (err) { res.status(500).json({ message: err.message }) }
})

router.patch('/:id', async (req, res, next) => {
    try {
        const department = await Department
            .findOneAndUpdate({ _id: req.params.id }, req.body)
        res.status(201).json(department)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router