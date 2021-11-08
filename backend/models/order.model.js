const mongoose = require('mongoose')

const {ObjectId, String, Number, Date, Boolean} = mongoose.Schema.Types;

const orderSchema = new mongoose.Schema({
  storeBy: {type: ObjectId, ref: 'Store', required: true},

  totalTimeProcessing: {type: Number, required: true, default: 0,},
  deliveryDateTime: {type: Date, required: true},
  deliveryFee: {type: Number, required: true, default: 0,},
  customer: {type: ObjectId, require: true, ref: "User"},
  orderItems: [{
    product: {type: ObjectId, required: true, ref: "Product"},
    name: {type: String, required: true},
    qty: {type: Number, required: true},
    price: {type: Number, required: true},
    supplierPrice: {type: Number, required: true},
    discount: {type: Number},
    itemStatus: {type: Boolean},
    instruction: {type: String},
    createdAt: {type: Date, default: Date.now()},
    updatedAt: {type: Date, default: Date.now()},
  }],
  shippingAddress: {
    street: {type: ObjectId, required: true, ref: 'Street'},
    barangay: {type: ObjectId, required: true, ref: 'Barangay'},
    municipality: {type: String, required: true, ref: 'Municipality'},
    province: {type: String, required: true, ref: 'Province'},
  },
  eta: {type: String,},
  voucher: {type: ObjectId, ref: 'Voucher'},
  // 1-COD|2-PayPal|3-E-wallet|4-GCash|5-PayMaya
  paymentMethod: {type: ObjectId, required: true, ref: 'PaymentMethod'},
  paymentResult: {
    id: {type: String},
    status: {type: String},
    update_time: {type: String},
    email_address: {type: String},
  },
  note: {type: String},
  fastLine: {type: Boolean},
  getter: {type: ObjectId},
  checker: {type: ObjectId},
  cashier: {type: ObjectId},
  driver: {type: ObjectId},
  orderDate: {type: Date, default: Date.now()},
  orderStatus: {type: Number, default: 1}, // 0-Cancel|1-Pending|2-Processing|3-Delivery|4-Completed
  deliveredAt: {type: Date},
  paidAt: {type: Date},
  deliveryType: {
    type: Number,
    default: 1, // 1-light|2-heavy
  }
}, {
  timestamps: true,
  versionKey: false,
})

const Order = mongoose.model("Order", orderSchema)
module.exports = Order;

