const mongoose = require('mongoose')

const migration = new mongoose.Schema({
    cca2	: { type: String, required: false },
    ccn3	: { type: String, required: false },
    cca3	: { type: String, required: false },
    cioc	: { type: String, required: false },
    independent	: { type: Boolean, required: false },
    status	: { type: String, required: false },
    unMember: { type: Boolean, required: false },
    region	: { type: String, required: false },
    subregion	: { type: String, required: true },
    landlocked: { type: Boolean, required: false },
    area: { type: Number, required: false },
    population: { type: Number, required: false },
    fifa: { type: String, required: false },
    startOfWeek	: { type: String, required: false }
})

module.exports = mongoose.model('rest_country_header', migration)

