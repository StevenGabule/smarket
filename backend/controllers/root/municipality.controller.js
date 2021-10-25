const Municipality = require('../../models/municipality.model')

exports.indexMunicipalityHandler = async (req, res) => {
  try {
    const municipalities = await Municipality.find();
    return res.status(200).json(municipalities)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.storeMunicipalityHandler = async (req, res) => {
  try {
    console.log(req.body)
    const municipality = await Municipality.create(req.body);
    return res.status(201).json(municipality)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.editMunicipalityHandler = async (req, res) => {
  res.send('edit')
}

exports.updateMunicipalityHandler = async (req, res) => {
  res.send('update')
}

exports.destroyMunicipalityHandler = async (req, res) => {
  res.send('destroy')
}
