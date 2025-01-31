const express = require('express')
const router = express.Router()
const Header = require('../../model/rest_country/header')

router.get('/', async (req, res, next) => {
    try {
        const list = Header.find()
        res.status(200).json(await list)
    } catch (err) { res.status(400).json({ message: err.message }) }
})

router.post('/', async (req, res, next) => {
    try {
        await Header.create(req.body)
        res.status(201).json({ status: 'true', message: 'success' })
    } catch (err) { res.status(500).json({ message: err.message }) }
})

router.get('/:id', async (req, res, next) => {
    try {
        const make = Header.findById(req.params.id)
        res.status(200).json(await make)
    } catch (err) { res.status(400).json({ message: err.message }) }
})

router.delete('/:id', async (req, res, next) => {
    try {
        await Header.findByIdAndDelete(req.params.id)
        res.status(201).json({ status: true, message: 'success' })
    } catch (err) { res.status(500).json({ status: 'error', message: err.message }) }
})

router.patch('/:id', async (req, res, next) => {
    try {
        await Header.findByIdAndUpdate(req.params.id, req.body)
        res.status(201).json({ status: true, message: 'success' })
    } catch (err) { res.status(500).json({ status: 'error', message: err.message }) }
})

module.exports = router