const {body} = require('express-validator')
const Barangay = require('../../models/barangay.model')

exports.rules = (() => {
  return [
    body('name')
      .notEmpty().withMessage('Name is required!')
      .isLength({min: 3, max: 100}).withMessage('Name most be range of 3 to 100 character long!'),
    body('estimatedDistance')
      .notEmpty().withMessage('Estimated distance is required!')
      .isNumeric().withMessage('Estimated distance must be a number'),
    body('timeTravel').notEmpty()
      .notEmpty().withMessage('Time travel is required!')
      .isNumeric().withMessage('Time travel must be a number'),
    body('barangayId').notEmpty().custom(value => {
      return Barangay.findById(value).then(barangay => {
        if (!barangay) return Promise.reject('Record not found!')
      })
    }),
    body('deliveryFee')
      .notEmpty().withMessage('Delivery fee is required!')
      .isNumeric().withMessage('Delivery fee  must be a number!')
  ]
})()
