const Store = require('../../models/store.model')

exports.indexStoreHandler = async (req, res) => {
  try {
    const stores = await Store.find({});
    return res.status(200).json(stores)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.storeStoreHandler = async (req, res) => {
  try {
    const vendor = await Store.create(req.body);
    return res.status(201).json(vendor)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.editStoreHandler = async (req, res) => {
  try {
    const vendor = await Store.findById(req.params.id);
    return res.status(200).json(vendor)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.updateStoreHandler = async (req, res) => {
  try {
    const checkIfExists = await Store.findById(req.params.id);
    if (!checkIfExists) return res.status(400).json({message: "Store not found!"})
    const updatedStore = await Store.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    return res.status(201).json(updatedStore)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.destroyStoreHandler = async (req, res) => {
  try {
    const checkIfExists = await Store.findById(req.params.id);
    if (!checkIfExists) return res.status(400).json({message: "Store not found!"})
    const updatedStore = await Store.deleteOne({_id: req.params.id})
    return res.status(201).json(updatedStore)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}
