const mongoose = require('mongoose')

const {ObjectId, Number, String} = mongoose.Schema.Types;

const streetSchema = new mongoose.Schema({
  name: {type: String, required: true},
  estimatedDistance: {type: Number, required: true},
  timeTravel: {type: Number, required: true},
  barangay: {type: ObjectId, ref: 'Barangay'},
  live: {type: Boolean, default: true},
  sortOrder: {type: Number, default: 1},
  deliveryFee: {type: Number, required: true},
}, {timestamps: true, versionKey: false})

const Street = mongoose.model('Street', streetSchema)
module.exports = Street;

