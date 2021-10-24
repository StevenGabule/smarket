const mongoose = require('mongoose')

const {ObjectId} = mongoose.Schema.Types;
const municipalitySchema = new mongoose.Schema({
  name: { type: String, required: true},
  provinceId: { type: ObjectId, ref: 'Province', required: true},
}, {timestamps: true, versionKey: false})

const Municipality = mongoose.model('Municipality', municipalitySchema)
module.exports = Municipality;

