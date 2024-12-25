const express = require('express')
const router = express.Router();
const modelEmployee = require('../model/employee');

router.get('/', async (req, res) => {
    try {
        const employee = await modelEmployee.find({ deleted_at: null })
            .populate('department_id').sort('name')
        res.status(200).json(employee)
    } catch {
        res.status(404).json({ message: 'not found' })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const employee = await modelEmployee
            .findById(req.params.id)
            .populate('department_id')
        res.status(200).json(employee)
    } catch (err) {
        res.status(404).json({ message: 'not found' })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await modelEmployee.findOneAndUpdate({ _id: req.params.id }, { deleted_at: true })
        res.status(201).json({ message: 'Employee Deleted!' })
    } catch (err) { res.status(500).json({ message: err.message }) }
})

router.post('/', async (req, res) => {
    let newItem = {}
    newItem.first_name = req.body.first_name
    newItem.last_name = req.body.last_name
    newItem.gender = req.body.gender
    newItem.dob = req.body.dob
    newItem.phone_number = req.body.phone_number
    newItem.email = req.body.email
    newItem.address = req.body.address
    newItem.created_at = Date.now()
    newItem.deleted_at = null
    newItem.department_id = req.body.department_id
    const newEmployee = new modelEmployee(newItem)
    try {
        const employee = await newEmployee.save()
        res.status(201).json(employee)
    } catch (err) { res.status(500).json({ message: err.message }) }
})

router.patch('/:id', async (req, res, next) => {
    try {
        const employee = await modelEmployee.findOneAndUpdate({ _id: req.params.id }, req.body)
        res.status(201).json(employee)
    } catch (err) { res.status(500).json({ message: err.message }) }
})


module.exports = router
