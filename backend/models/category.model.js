const mongoose = require('mongoose')

const {ObjectId} = mongoose.Schema.Types;
const categorySchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String},
  category: {type: ObjectId, ref: 'Category'},
  image: {type: String},
  live: {type: Boolean, default: true},
  sortOrder: {type: Number, default: 1},
}, {timestamps: true, versionKey: false,})

const Category = mongoose.model('Category', categorySchema)
module.exports = Category;

