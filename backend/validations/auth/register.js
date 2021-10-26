const {body} = require('express-validator')
const Store = require('../../models/store.model')

exports.rules = (() => {
  return [
    body('name')
      .notEmpty().withMessage('name is required!')
      .isLength({min: 3, max: 100}).withMessage('Name most be range of 3 to 100 character long!'),

    body('email')
      .notEmpty().withMessage('Email is required!')
      .isEmail().withMessage('Invalid format of email.')
      .custom(value => {
        return Store.findOne({email: value}).then(store => {
          if (store) return Promise.reject('Email is already used!')
        })
      }),

    body('phoneNumber')
      .notEmpty().withMessage('Phone number is required!')
      .isMobilePhone('en-US').withMessage('Invalid format of phone number.')
      .custom(value => {
        return Store.findOne({phoneNumber: value}).then(store => {
          if (store) return Promise.reject('Phone number is already used!')
        })
      }),

    body('password')
      .notEmpty().withMessage('Password is required!')
      .isLength({min: 3, max: 100}).withMessage('Password must be range of 3 to 100 character long!'),
  ]
})()
