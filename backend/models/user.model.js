const mongoose = require('mongoose')
const Password = require('../service/Password')
const config = require('config')
const URL_HOST = `${config.get('port')}:${config.get('URL')}`

const {ObjectId, Boolean, Date, Number, String} = mongoose.Schema.Types;
const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  storeBy: {type: ObjectId, ref: 'Store'},
  email: {type: String, required: true, unique: true},
  phoneNumber: {type: String, required: true, unique: true},
  password: {type: String, required: true},
  gender: {type: String},
  birthday: {type: Date},
  avatar: {type: String},
  walletAmount: {type: Number, default: 0},
  street: {type: ObjectId, ref: "Street"},
  barangay: {type: ObjectId, ref: "Barangay"},
  municipality: {type: ObjectId, ref: "Municipality"},
  province: {type: ObjectId, ref: "Province"},
  userType: {type: Number, required: true, default: 7}, // '0-root|1-Admin|2-Cashiers|3-checker|4-Getters|5-driver|6-inventories|7-customers'
  emailVerifiedAt: {type: Date},
  status: {type: Boolean, default: true},
  deletedAt: {type: Date}
}, {
  timestamps: true,
  versionKey: false,
  toJSON: {
    transform(_doc, ret) {
      if (ret.avatar != null) {
        ret.avatar = `${URL_HOST}/user/${ret.avatar}`
      }
      delete ret.password
    }
  }
})

userSchema.statics.build = (attrs) => {
  return new User(attrs)
}

userSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    const hashed = await Password.toHash(this.get('password'))
    this.set('password', hashed)
  }
  next();
})

const User = mongoose.model('User', userSchema)
module.exports = User;

