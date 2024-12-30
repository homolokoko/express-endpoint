const express = require('express')
const router = express.Router()
const MotorModel = require('../../model/motorcycle/model')

router.get('/', async (req, res, next) => {
    try {
        const list = MotorModel.find()
            .populate({ path: 'make', populate: { path: 'country' } })
        res.status(200).json(await list)
    } catch (err) { res.status(400).json({ message: err.message }) }
})

router.post('/', async (req, res, next) => {
    try {
        await MotorModel.create({ name: req.body.name, make: req.body.make })
        res.status(201).json({ status: 'success', message: 'Make created Success' })
    } catch (err) { res.status(500).json({ message: err.message }) }
})

router.get('/:id', async (req, res, next) => {
    try {
        const make = MotorModel.findById(req.params.id)
            .populate({ path: 'make', populate: { path: 'country' } })
        res.status(200).json(await make)
    } catch (err) { res.status(400).json({ message: err.message }) }
})

router.delete('/:id', async (req, res, next) => {
    try {
        await MotorModel.findByIdAndUpdate(req.params.id, { deleted: true })
        res.status(201).json({ status: 'success', message: 'Make Deleted Successful!' })
    } catch (err) { res.status(500).json({ status: 'error', message: err.message }) }
})

router.patch('/:id', async (req, res, next) => {
    try {
        await MotorModel.findByIdAndUpdate(req.params.id, { name: req.body.name, make: req.body.make })
        res.status(201).json({ status: 'success', message: 'Make Updated Successful!' })
    } catch (err) { res.status(500).json({ status: 'error', message: err.message }) }
})

module.exports = router