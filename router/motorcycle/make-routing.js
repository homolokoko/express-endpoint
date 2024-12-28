const express = require('express')
const router = express.Router()
const Make = require('../../model/motorcycle/make')

router.get('/', async (req, res, next) => {
    try {
        const list = Make.find().populate('country')
        res.status(200).json(await list)
    } catch (err) { res.status(400).json({ message: err.message }) }
})

router.post('/', async (req, res, next) => {
    try {
        await Make.create({ name: req.body.name, country: req.body.country })
        res.status(201).json({ status: 'success', message: 'Make created Success' })
    } catch (err) { res.status(500).json({ message: err.message }) }
})

router.get('/:id', async (req, res, next) => {
    try {
        const make = Make.findById(req.params.id)
        res.status(200).json(await make)
    } catch (err) { res.status(400).json({ message: err.message }) }
})

router.delete('/:id', async (req, res, next) => {
    try {
        await Make.findByIdAndDelete(req.params.id)
        res.status(201).json({ status: 'success', message: 'Make Deleted Successful!' })
    } catch (err) { res.status(500).json({ status: 'error', message: err.message }) }
})

router.patch('/:id', async (req, res, next) => {
    try {
        await Make.findByIdAndUpdate(req.params.id, { name: req.body.name, country: req.body.country })
        res.status(201).json({ status: 'success', message: 'Make Updated Successful!' })
    } catch (err) { res.status(500).json({ status: 'error', message: err.message }) }
})

module.exports = router