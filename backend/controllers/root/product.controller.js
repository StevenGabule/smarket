const Product = require('../../models/product.model')

exports.indexProductHandler = async (req, res) => {
  try {
    const products = await Product.find().populate('mainCategoryId');
    return res.status(200).json(products)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.storeProductHandler = async (req, res) => {
  try {
    if (req.file) {
      req.body.avatar = req.file.filename;
    }

    if (typeof req.body.image !== 'undefined' && req.body.image.length === 0) {
      delete req.body.image;
    }

    req.body.slug = req.body.title.split(" ").join("-");
    const product = await Product.create(req.body);
    return res.status(201).json(product)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.editProductHandler = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(400).json({message: 'Product not found!'})
    return res.status(200).json(product)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.updateProductHandler = async (req, res) => {
  try {
    if (req.file) {
      req.body.image = req.file.filename;
    }

    if (typeof req.body.image !== 'undefined' && req.body.image.length === 0) {
      delete req.body.image;
    }

    const checkIfProductExist = await Product.findById(req.params.id);
    if (!checkIfProductExist) return res.status(400).json({message: 'Product not found!'})
    req.body.slug = req.body.title ? req.body.title.toLowerCase().split(" ").join("-") : '';
    const result = await Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    if (result) {
      return res.status(200).json(result)
    }
    return res.status(400).json({message: 'Something goes wrong!'})
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.destroyProductHandler = async (req, res) => {
  try {
    const checkIfProductExist = await Product.findById(req.params.id);
    if (!checkIfProductExist) return res.status(400).json({message: 'Product not found!'})
    const result = await Product.deleteOne({_id: req.params.id})
    if (result) {
      return res.status(200).json({message: 'Product record deleted successfully!'})
    }
    return res.status(400).json({message: 'Something goes wrong!'})
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}
