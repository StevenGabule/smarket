const mongoose = require('mongoose')

const {ObjectId} = mongoose.Schema.Types;
const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  storeId: {type: ObjectId, ref: 'Store'},
  email: {type: String, required: true, unique: true},
  phoneNumber: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  gender: {type: String},
  birthday: {type: Date},
  avatar: {type: String},
  streetId: {type: ObjectId, ref: "Street"},
  barangayId: {type: ObjectId, ref: "Barangay"},
  municipalityId: {type: ObjectId, ref: "Municipality"},
  province_id: {type: ObjectId, ref: "Province"},
  userType: {type: Number, required: true}, // '0-root|1-Admin|2-Cashiers|3-checker|4-Getters|5-driver|6-inventories|7-customers'
  emailVerifiedAt: {type: Date},
  status: {type: Boolean, default: true},
}, {
  timestamps: true, versionKey: false, toJSON: {
    transform(_doc, ret) {
      delete ret.password
    }
  }
})

const User = mongoose.model('User', userSchema)
module.exports = User;

