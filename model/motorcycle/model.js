const mongoose = require('mongoose')

const Make = require('./make')

const migration = mongoose.Schema({
    name: { type: String, require: true },
    make: { type: mongoose.Schema.Types.ObjectId, ref: Make },
    deleted: { type: Boolean, default: false }
})

module.exports = mongoose.model('motorcycle_model', migration)