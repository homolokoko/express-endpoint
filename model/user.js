const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now,
        get: (val) => val.format('MMMM dd, yyyy'),
    }
})

module.exports = mongoose.model('user', userSchema)