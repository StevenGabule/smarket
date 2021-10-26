const {body} = require('express-validator')
const Municipality = require('../../models/municipality.model')
const Street = require('../../models/street.model')
const Barangay = require('../../models/barangay.model')
const Province = require('../../models/province.model')
const Store = require('../../models/store.model')

exports.rules = (() => {
  return [
    body('name')
      .notEmpty().withMessage('name is required!')
      .isLength({min: 3, max: 100}).withMessage('Name most be range of 3 to 100 character long!'),
    body('storeId')
      .notEmpty().withMessage('Store is required!')
      .custom(value => {
        return Store.findById(value).then(store => {
          if (!store) return Promise.reject('Record not found!')
        })
      }),
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
    body('gender').notEmpty().withMessage('Gender is required!'),
    body('userType').notEmpty().withMessage('User Type is required!'),
    body('password')
      .notEmpty().withMessage('Password is required!')
      .isLength({min: 3, max: 100}).withMessage('Password must be range of 3 to 100 character long!'),
    body('streetId')
      .notEmpty().withMessage('Street is required!')
      .custom(value => {
        return Street.findById(value).then(street => {
          if (!street) return Promise.reject('Record not found!')
        })
      }),
    body('barangayId')
      .notEmpty().withMessage('Barangay is required!')
      .custom(value => {
        return Barangay.findById(value).then(barangay => {
          if (!barangay) return Promise.reject('Record not found!')
        })
      }),
    body('municipalityId')
      .notEmpty().withMessage('Municipality is required!')
      .custom(value => {
        return Municipality.findById(value).then(municipality => {
          if (!municipality) return Promise.reject('Record not found!')
        })
      }),
    body('province_id')
      .notEmpty().withMessage('Province is required!')
      .custom(value => {
        return Province.findById(value).then(province => {
          if (!province) return Promise.reject('Record not found!')
        })
      }),
  ]
})()
