const User = require('../../models/user.model')
const Password = require('../../service/Password')
const config = require('config')
const jwt = require('jsonwebtoken')
const JWT_SECRET = config.get('JWT_SECRET')

exports.login = async (req, res) => {
  try {
    const {email, password} = req.body;
    const existingUser = await User.findOne({email})

    if (!existingUser) return res.status(400).json({message: 'Email not found!'})

    const passwordMatch = await Password.compare(existingUser.password, password)

    if (!passwordMatch) return res.status(400).json({message: 'Password not found!'})

    const userJWT = jwt.sign({
      id: existingUser.id,
      name: existingUser.name,
      email: existingUser.email,
      userType: existingUser.userType,
    }, JWT_SECRET)

    req.session = {
      jwt: userJWT
    }

    return res.json({existingUser,token : userJWT})
  } catch (e) {
    console.log(e.message)
    return res.status(500).json({message: e.message})
  }
}

exports.register = async (req, res) => {
  try {
    const {name, email, password, phoneNumber, userType} = req.body;
    const existingUser = await User.findOne({email})
    if (existingUser) return res.status(400).json({error: "Email is already used"})
    const user = User.build({name, email, password, phoneNumber, userType})
    await user.save();

    const userJWT = jwt.sign({
      id: user.id,
      name: user.name,
      email: user.email,
      userType: user.userType
    }, JWT_SECRET)

    req.session = {
      jwt: userJWT
    }
    return res.status(201).json(user);
  } catch (e) {
    console.log(e.message)
    return res.status(500).json({message: e.message})
  }
}
