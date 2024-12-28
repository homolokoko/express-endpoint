const mongoose = require('mongoose')
const Country = require('../country')

const migration = new mongoose.Schema({
    name: { type: String, required: true },
    country: { type: mongoose.Schema.Types.ObjectId, ref: Country }
})

module.exports = mongoose.model('motorcycle_make', migration)

