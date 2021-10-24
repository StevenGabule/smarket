const StoreProduct = require('../../models/store_product.model')

exports.indexStoreProductHandler = async (req, res) => {
  try {
    const stores = await StoreProduct.find({})
      .populate('productId')
      .populate('storeId');
    return res.status(200).json(stores)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.storeStoreProductHandler = async (req, res) => {
  try {
    const vendor = await StoreProduct.create(req.body);
    return res.status(201).json(vendor)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.editStoreProductHandler = async (req, res) => {
  try {
    const vendor = await StoreProduct.findById(req.params.id);
    if (!vendor) return res.status(400).json({message: 'Product not found!'})
    return res.status(200).json(vendor)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.updateStoreProductHandler = async (req, res) => {
  try {
    const checkIfExists = await StoreProduct.findById(req.params.id);
    if (!checkIfExists) return res.status(400).json({message: "Store Product not found!"})
    const updatedStoreProduct = await StoreProduct.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    return res.status(201).json(updatedStoreProduct)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.destroyStoreProductHandler = async (req, res) => {
  try {
    const checkIfExists = await StoreProduct.findById(req.params.id);
    if (!checkIfExists) return res.status(400).json({message: "Store Product not found!"})
    const updatedStoreProduct = await StoreProduct.deleteOne({_id: req.params.id})
    return res.status(201).json(updatedStoreProduct)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}
