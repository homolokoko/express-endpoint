const mongoose = require('mongoose')
const Header = require('./header')

const migration = new mongoose.Schema({
    name : { type: String, required: false },
    official_name : { type: String, required: false },
    header_id : { type: mongoose.Schema.Types.ObjectId, ref: Header },
})

module.exports = mongoose.model('rest_country_name', migration)

