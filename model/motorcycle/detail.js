const mongoose = require('mongoose')

const MotorbikeModel = require('./model')

const migration = mongoose.Schema({
    use: { type: String, require: true },
    engine: { type: String, require: true },
    features: { type: String, require: true },
    model: { type: mongoose.Schema.Types.ObjectId, ref: MotorbikeModel },
    deleted: { type: Boolean, default: false }
})

module.exports = mongoose.model('motorcycle_detail', migration)