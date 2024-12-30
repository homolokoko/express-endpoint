const mongoose = require('mongoose')

const migration = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    contact: { type: String, required: true },
    to: { type: String, required: true },
    deleted: { type: Boolean, default: false }
})

module.exports = mongoose.model('company', migration)