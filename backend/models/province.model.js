const mongoose = require('mongoose')

const provinceSchema = new mongoose.Schema({
  name: { type: String, required: true},
  live: {type: Boolean, default: true},
  sortOrder: {type: Number, default: 1},
}, {timestamps: true, versionKey: false})

const Province = mongoose.model('Province', provinceSchema)
module.exports = Province;

