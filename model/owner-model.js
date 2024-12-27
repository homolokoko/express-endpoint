const mongoose = require('mongoose')

const ownerSchema = mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: String, required: true },
    vin: { type: String, required: true },
    license_plate: { type: String, required: true },
    insurance_company: { type: String, required: true },
    policy_number: { type: String, required: true },
    expiration_date: { type: String, required: true },
    date_of_purchase: { type: String, required: true },
    method_of_purchase: { type: String, required: true },
    registration_type: { type: String, required: true }
})

module.exports = mongoose.model('owner', ownerSchema)