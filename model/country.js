const mongoose = require('mongoose')

const Country = new mongoose.Schema({
    name: { type: String, required: true },
    deleted: { type: Boolean, default: false }
})

module.exports = mongoose.model('country', Country)