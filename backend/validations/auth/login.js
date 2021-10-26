const {body} = require('express-validator')
const Store = require('../../models/store.model')

exports.rules = (() => {
  return [
    body('email')
      .notEmpty().withMessage('Email is required!')
      .isEmail().withMessage('Invalid format of email.'),
    body('password').notEmpty().withMessage('Password is required!')
  ]
})()
