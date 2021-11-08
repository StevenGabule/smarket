const mongoose = require('mongoose')

const {ObjectId} = mongoose.Schema.Types;
const barangaySchema = new mongoose.Schema({
  name: { type: String, required: true},
  live: {type: Boolean, default: true},
  sortOrder: {type: Number, default: 1},
  municipality: { type: ObjectId, ref: 'Municipality'},
  deliveryFee: { type: Number, required: true},
  minimumOrder: { type: Number, required: true},
}, {timestamps: true, versionKey: false,})

const Barangay = mongoose.model('Barangay', barangaySchema)
module.exports = Barangay;

