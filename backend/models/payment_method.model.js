const mongoose = require('mongoose')

const {String, Boolean, Number} = mongoose.Schema.Types

const paymentMethodSchema = new mongoose.Schema({
  name: {type: String, required: true},
  live: {type: Boolean, default: true},
  sortOrder: {type: Number, default: 1},
}, { timestamps: true, versionKey: false})

const PaymentMethod = mongoose.model('PaymentMethod', paymentMethodSchema)
module.exports = PaymentMethod;
