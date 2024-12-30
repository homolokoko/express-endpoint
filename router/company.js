const express = require("express")
const route = express.Router()
const Company = require("../model/company")


route.post("/", async function (req, res, next) {
    try {
        const company = new Company(req.body)
        res.status(201).json(await company.save())
    } catch (err) { res.status(500).json({ message: err.message }) }
})

route.get("/", async function (req, res, next) {
    try {
        const list = Company.find({ deleted: false })
        res.status(200).json(await list)
    } catch (err) { res.status(400).json({ message: err.message }) }
})

route.get("/:id", async function (req, res, mext) {
    try {
        const company = Company.findOne({ _id: req.params.id })
        res.status(200).json(await company)
    } catch (err) { res.status(404).json({ message: err.message }) }
})

route.delete("/:id", async function (req, res, next) {
    try {
        await Company.findOneAndUpdate({ _id: req.params.id }, { deleted: true })
        res.status(201).json({ status: "success", message: "Country Deleted Successful!" })
    } catch (err) { res.status(500).json({ status: "error", message: err.message }) }
})

route.patch("/:id", async function (req, res, next) {
    try {
        await Company.findOneAndUpdate({ _id: req.params.id }, req.body)
        res.status(201).json({ status: "success", message: "Country Updated Successful!" })
    } catch (err) { res.status(500).json({ status: "error", message: err.message }) }
})


module.exports = route