const mongoose = require('mongoose')
const {ObjectId, String, Number, Date} = mongoose.Schema.Types;

const storeSchema = new mongoose.Schema({
  name: {type: String, required: true},
  storeCode: {type: String, required: true},
  storeProducts: [{
    product: {type: ObjectId, required: true, ref: 'Product'},
    qty: {type: Number, required: true, unique: true},
    reOrderQty: {type: Number, required: true},
    supplierPrice: {type: Number, required: true},
    retailPrice: {type: Number, required: true},
    itemStatus: {type: Number, default: 1},
    instructionStatus: {type: Number, default: 1},
    addedDate: {type: Date},
    updatedDate: {type: Date},
  }],
  businessEmail: {type: String, required: true, unique: true},
  phoneNumber: {type: String, required: true, unique: true},
  telephoneNumber: {type: String, required: true, unique: true},
  street: {type: ObjectId, ref: "Street"},
  barangay: {type: ObjectId, ref: "Barangay"},
  municipality: {type: ObjectId, ref: "Municipality"},
  province: {type: ObjectId, ref: "Province"},
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
  instagram: {type: String}
}, {
  timestamps: true,
  versionKey: false,
})

const Store = mongoose.model('Store', storeSchema)
module.exports = Store;
