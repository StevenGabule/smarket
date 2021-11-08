const mongoose = require('mongoose')
const {String, Number, Date, ObjectId} = mongoose.Schema.Types

const voucherSchema = new mongoose.Schema({
  customer: {type: ObjectId, required: true, ref: 'User'},
  StoreBy: {type: ObjectId, required: true, ref: 'Store'},
  code: {type: String, required: true,},
  details: {type: String, required: true,},
  validDate: {type: Date, required: true,},
  pesoDisc: {type: Number,},
  percentageDisc: {type: Number,},
  mainAmount: {type: Number,},
  usability: {type: Number,}
}, {timestamps: true, versionKey: false})

const Voucher = mongoose.model('Voucher', voucherSchema)
module.exports = Voucher;
