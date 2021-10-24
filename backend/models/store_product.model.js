const mongoose = require('mongoose')

const {ObjectId} = mongoose.Schema.Types;
const storeProductSchema = new mongoose.Schema({
  productId: {type: ObjectId, required: true, ref: 'Product'},
  storeId: {type: ObjectId, required: true, ref: 'Store'},
  qty: {type: Number, required: true, unique: true},
  reOrderQty: {type: Number, required: true},
  supplierPrice: {type: Number, required: true},
  retailPrice: {type: Number, required: true},
  itemStatus: {type: Number, default: 1},
  instructionStatus: {type: Number, default: 1},
}, {
  timestamps: true,
  versionKey: false,
})

const StoreProduct = mongoose.model('StoreProduct', storeProductSchema)
module.exports = StoreProduct;
