const mongoose = require('mongoose')
const Department = require('./department-model').db

const migration = new mongoose.Schema({
    first_name: { type: String, required: false },
    last_name: { type: String, required: false },
    gender: { type: String, required: false },
    dob: { type: String, required: false },
    phone_number: { type: String, required: false },
    email: { type: String, required: false },
    address: { type: String, required: false },
    created_at: { type: Date, required: false },
    updated_at: { type: Date, required: true, default: Date.now },
    deleted_at: { type: Date, required: false },
    department_id: { type: mongoose.Schema.Types.ObjectId, ref: Department }
})

module.exports = mongoose.model('employee', migration)

