const Province = require('../../models/province.model')

exports.indexProvinceHandler = async (req, res) => {
  res.send('index')
}

exports.createProvinceHandler = async (req, res) => {
  try {
    console.log(req.body)

  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.storeProvinceHandler = async (req, res) => {
  try {
    console.log(req.body)
    const province = await Province.create(req.body);
    return res.status(201).json(province)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.editProvinceHandler = async (req, res) => {
  res.send('edit')
}

exports.updateProvinceHandler = async (req, res) => {
  res.send('update')
}

exports.destroyProvinceHandler = async (req, res) => {
  res.send('destroy')
}
