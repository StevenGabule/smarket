const Barangay = require('../../models/barangay.model')

exports.indexBarangayHandler = async (req, res) => {
  try {
    const barangays = await Barangay.find({});
    return res.status(200).json(barangays)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.storeBarangayHandler = async (req, res) => {
  try {
    const user = await Barangay.create(req.body);
    return res.status(201).json(user)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.editBarangayHandler = async (req, res) => {
  try {
    const user = await Barangay.findById(req.params.id);
    if (!user) return res.status(404).json({message: 'Barangay not found!'})
    return res.status(200).json(user)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.updateBarangayHandler = async (req, res) => {
  try {
    const checkIfExists = await Barangay.findById(req.params.id);
    if (!checkIfExists) return res.status(400).json({message: "Barangay not found!"})
    const updatedBarangay = await Barangay.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    return res.status(201).json(updatedBarangay)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.destroyBarangayHandler = async (req, res) => {
  try {
    const checkIfExists = await Barangay.findById(req.params.id);
    if (!checkIfExists) return res.status(400).json({message: "Barangay not found!"})
    const updatedBarangay = await Barangay.deleteOne({_id: req.params.id})
    return res.status(201).json(updatedBarangay)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}
