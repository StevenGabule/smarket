const Category = require('../../models/category.model')

exports.indexCategoryHandler = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(201).json(categories)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.storeCategoryHandler = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    return res.status(201).json(category)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.editCategoryHandler = async (req, res) => {
  try {
    const checkIfExists = await Category.findById(req.params.id);
    if (checkIfExists) return res.status(400).json({message: 'Category record not found or not exists!'})
    return res.status(201).json(checkIfExists)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.updateCategoryHandler = async (req, res) => {
  try {
    const checkIfExists = await Category.findById(req.params.id);
    if (checkIfExists) return res.status(400).json({message: 'Category not found!'})
    const updatedCategory = await Category.findOneAndUpdate({_id: req.params.id}, req.body, {new: true});
    return res.status(201).json(updatedCategory)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.destroyCategoryHandler = async (req, res) => {
  try {
    const checkIfExists = await Category.findById(req.params.id);
    if (checkIfExists) return res.status(400).json({message: 'Category not found!'})
    const deletedRecord = await Category.deleteOne({_id: req.params.id});
    return res.status(200).json(deletedRecord)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}
