const mongoose = require('mongoose')

const {ObjectId} = mongoose.Schema.Types;
const storeSchema = new mongoose.Schema({
  name: {type: String, required: true},
  store_code: {type: String, required: true},
  email: {type: String, required: true, unique: true},
  address: {type: String, required: true},
  phoneNumber: {type: String, required: true, unique: true},
  telephoneNumber: {type: String, required: true, unique: true},
  municipalityId: {type: ObjectId, ref: 'Municipality'},
  orderTimeAllowance: {type: Number, required: true},
  itemProcessingTime: {type: Number, required: true, default: 0},
  driverPerHour: {type: Number, required: true, default: 0},
  driverCommission: {type: Number, required: true, default: 0},
  deliveryStart: {type: String, required: true},
  deliveryEnd: {type: String, required: true},
  openAt: {type: Number, required: true},
  closeAt: {type: Number, required: true},
  fb: {type: String},
  twitter: {type: String},
  instagram: {type: String},
}, {
  timestamps: true,
  versionKey: false,
})

const Store = mongoose.model('Store', storeSchema)
module.exports = Store;
