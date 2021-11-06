const StoreProduct = require('../../models/store_product.model')

exports.homeProductHandler = async (req, res) => {
  try {
    const products = await StoreProduct.find().populate('productId');
    return res.status(200).json({products})
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.getProductHandler = async (req, res) => {
  try {
    const products = await StoreProduct.findById(req.params.id)
      .populate('productId');
    return res.json(products)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}
