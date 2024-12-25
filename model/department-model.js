const mongoose = require('mongoose')
const softDelete = require('mongoose-delete')

const migration = new mongoose.Schema({
    name: { type: String, required: true }
})

migration.plugin(softDelete)

db = mongoose.model('department', migration)

module.exports = { db, migration }

