const express = require('express')
const route = express.Router()
const Country = require('../model/country')


route.post('/', async function (req, res, next) {
    try {
        const country = new Country(req.body)
        res.status(201).json(await country.save())
    } catch (err) { res.status(500).json({ message: err.message }) }
})

route.get('/', async function (req, res, next) {
    try {
        const list = Country.find()
        res.status(200).json(await list)
    } catch (err) { res.status(400).json({ message: err.message }) }
})

route.get('/:id', async function (req, res, mext) {
    try {
        const country = Country.findOne({ _id: req.params.id })
        res.status(200).json(await country)
    } catch (err) { res.status(404).json({ message: err.message }) }
})

route.delete('/:id', async function (req, res, next) {
    try {
        await Country.findOneAndUpdate({ _id: req.params.id }, { deleted: true })
        res.status(201).json({ status: 'success', message: 'Country Deleted Successful!' })
    } catch (err) { res.status(500).json({ status: 'error', message: err.message }) }
})

route.patch("/:id", async function (req, res, next) {
    try {
        await Country.findOneAndUpdate({ _id: req.params.id }, req.body)
        res.status(201).json({ status: 'success', message: "Country Updated Successful!" })
    } catch (err) { res.status(500).json({ status: 'error', message: err.message }) }
})


module.exports = route