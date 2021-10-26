const {body} = require('express-validator')
const Municipality = require('../../models/municipality.model')

exports.rules = (() => {
  return [
    body('name')
      .notEmpty().withMessage('name is required!')
      .isLength({min: 3, max: 100}).withMessage('Name most be range of 3 to 100 character long!'),
    body('minimumOrder')
      .notEmpty().withMessage('Minimum order is required!')
      .isNumeric().withMessage('Minimum order must be a number!'),
    body('deliveryFee')
      .notEmpty().withMessage('Delivery fee is required!')
      .isNumeric().withMessage('Delivery fee  must be a number!'),
    body('municipalityId')
      .notEmpty().withMessage('Municipality is required!')
      .custom(value => {
      return Municipality.findById(value).then(barangay => {
        if (!barangay) return Promise.reject('Record not found!')
      })
    })
  ]
})()
