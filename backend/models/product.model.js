const mongoose = require('mongoose')
const config = require('config')
const PORT = config.get('port');
const URL = config.get('URL');
const URL_HOST = `${URL}:${PORT}`
const {ObjectId} = mongoose.Schema.Types;

const productSchema = new mongoose.Schema({
  productCode: {type: String, required: true},
  mainCategoryId: {type: ObjectId, required: true, ref: 'Category'},
  SubCategoryId: {type: ObjectId, ref: 'Category'},
  title: {type: String, required: true},
  slug: {type: String, required: true},
  shortDescription: {type: String, required: true},
  longDescription: {type: String, required: true},
  unit: {type: String, required: true},
  image: {type: String},
  deleted_at: {type: Date},
}, {
  timestamps: true,
  versionKey: false,
  toJSON: {
    transform(_doc, ret) {
      if (ret.image !== null) {
        ret.image = `${URL_HOST}/root/product/${ret.image}`
      }
    }
  }
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product;
