const mongoose = require('mongoose')

const provinceSchema = new mongoose.Schema({
  name: { type: String, required: true},
}, {timestamps: true, versionKey: false})

const Province = mongoose.model('Province', provinceSchema)
module.exports = Province;

