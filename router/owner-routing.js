const express = require('express')
const router = express.Router();
const Owner = require('../model/owner-model')

router.post('/', async (req, res) => {
    try {
        const new_owner = new Owner(req.body)
        res.status(201).json(await new_owner.save())
    } catch (err) { res.status(500).json({ message: err.message }) }
})

router.get('/', async (req, res, next) => {
    try {
        const owners = Owner.find()
        res.status(200).json(await owners)
    } catch (err) { res.status(404).json({ message: err.message }) }
})

router.get('/:id', async (req, res, next) => {
    try {
        const owner = Owner.findOne({ _id: req.params.id })
        res.status(200).json(await owner)
    } catch (err) { res.status(404).json({ message: err.message }) }
})

router.delete('/:id', async (req, res, next) => {
    try {
        await Owner.findOneAndDelete({ _id: req.params.id })
        res.status(201).json({ message: 'Delete Successful!' })
    } catch (err) { res.status(500).json({ message: err.message }) }
})

router.patch('/:id', async (req, res, next) => {
    try {
        const owner = Owner.findOneAndUpdate({ _id: req.params.id }, req.body)
        res.status(201).json(await owner)
    } catch (err) { res.status(500).json({ message: err.message }) }
})

module.exports = router