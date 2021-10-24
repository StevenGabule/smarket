const User = require('../../models/user.model')

exports.indexUserHandler = async (req, res) => {
  try {
    const users = await User.find({});
    return res.status(200).json(users)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.storeUserHandler = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).json(user)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.editUserHandler = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({message: 'User not found!'})
    return res.status(200).json(user)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.updateUserHandler = async (req, res) => {
  try {
    const checkIfExists = await User.findById(req.params.id);
    if (!checkIfExists) return res.status(400).json({message: "User not found!"})
    const updatedUser = await User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    return res.status(201).json(updatedUser)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.destroyUserHandler = async (req, res) => {
  try {
    const checkIfExists = await User.findById(req.params.id);
    if (!checkIfExists) return res.status(400).json({message: "User not found!"})
    const updatedUser = await User.deleteOne({_id: req.params.id})
    return res.status(201).json(updatedUser)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}
