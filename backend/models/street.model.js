const mongoose = require('mongoose')

const {ObjectId} = mongoose.Schema.Types;
const streetSchema = new mongoose.Schema({
  name: {type: String, required: true},
  estimatedDistance: {type: Number, required: true},
  timeTravel: {type: Number, required: true},
  barangayId: {type: ObjectId, ref: 'Barangay'},
  deliveryFee: {type: Number, required: true},
}, {timestamps: true, versionKey: false})

const Street = mongoose.model('Street', streetSchema)
module.exports = Street;

