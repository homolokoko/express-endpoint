const express = require('express')
const app = express()
const router = express.Router()
const MotorbikeDetail = require('../../model/motorcycle/detail')
const { populate } = require('../../model/company')
const path = require('path')
const _ = require('lodash')

router.get('/image', async (req, res, next) => {
    const result = [];
    const domain = `${req.protocol}://${req.get('host')}`;
    const path = "/motorbike/";
    const list = [
        { name: 'photo_2024-11-19_16-31-17.jpg' },
        { name: 'photo_2024-11-19_16-31-33.jpg' },
        { name: 'photo_2024-11-20_07-48-21.jpg' },
        { name: 'photo_2024-11-20_07-48-32.jpg' },
        { name: 'photo_2024-11-20_07-48-42.jpg' },
        { name: 'photo_2024-11-20_07-48-46.jpg' },
        { name: 'photo_2024-11-20_07-48-59.jpg' }
    ];
    _.each(list, (item) => {
        result.push({
            path: path,
            domain: domain,
            origin: item.name,
            url: `${domain}${path}${item.name}`
        })
    })
    res.status(200).json(result);
})

router.post('/', async (req, res, next) => {
    return res.json(req.body)
    try {
        await MotorbikeDetail.create({
            use: req.body.use,
            engine: req.body.engine,
            features: req.body.features,
            model: req.body.model
        })
        res.status(201).json({ status: 'success', message: 'Make created Success' })
    } catch (err) { res.status(500).json({ message: err.message }) }
})

router.get('/', async (req, res, next) => {
    try {
        const make = MotorbikeDetail.findOne(req.query).populate('model')
        res.status(200).json(await make)
    } catch (err) { res.status(400).json({ message: err.message }) }
})

router.delete('/:id', async (req, res, next) => {
    try {
        await MotorbikeDetail.findByIdAndUpdate(req.params.id, { deleted: true })
        res.status(201).json({ status: 'success', message: 'Make Deleted Successful!' })
    } catch (err) { res.status(500).json({ status: 'error', message: err.message }) }
})

router.patch('/:id', async (req, res, next) => {
    try {
        await MotorbikeDetail.findByIdAndUpdate(req.params.id, {
            use: req.body.use,
            engine: req.body.engine,
            features: req.body.features,
            model: req.body.model
        })
        res.status(201).json({ status: 'success', message: 'Make Updated Successful!' })
    } catch (err) { res.status(500).json({ status: 'error', message: err.message }) }
})

module.exports = router