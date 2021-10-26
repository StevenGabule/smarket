const Street = require('../../models/street.model')

exports.indexStreetHandler = async (req, res) => {
  try {
    const streets = await Street.find({});
    return res.status(200).json(streets)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.storeStreetHandler = async (req, res) => {
  try {
    const street = await Street.create(req.body);
    return res.status(201).json(street)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.editStreetHandler = async (req, res) => {
  try {
    const street = await Street.findById(req.params.id);
    if (!street) return res.status(404).json({message: 'Street not found!'})
    return res.status(200).json(street)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.updateStreetHandler = async (req, res) => {
  try {
    const checkIfExists = await Street.findById(req.params.id);
    if (!checkIfExists) return res.status(400).json({message: "Street not found!"})
    const updatedStreet = await Street.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    return res.status(201).json(updatedStreet)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.destroyStreetHandler = async (req, res) => {
  try {
    const checkIfExists = await Street.findById(req.params.id);
    if (!checkIfExists) return res.status(400).json({message: "Street not found!"})
    const updatedStreet = await Street.deleteOne({_id: req.params.id})
    return res.status(201).json(updatedStreet)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}
