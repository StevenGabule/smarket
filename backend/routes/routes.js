const router = require('express').Router();
const rootStore = require('./rootStore.route')
const rootProvince = require('./rootProvince.route')
const rootMunicipality = require('./rootMunicipality.route')
const rootCategory = require('./rootCategory.route')
const rootProduct = require('./rootProduct.route')
const rootStoreProduct = require('./rootStoreProduct.route')
const rootBarangay = require('./rootBarangay.route')
const rootStreet = require('./rootStreet.route')
const rootAccount = require('./rootAccount.route')

router.use('/root/vendor', rootStore)
router.use('/root/province', rootProvince)
router.use('/root/municipality', rootMunicipality)
router.use('/root/category', rootCategory)
router.use('/root/Product', rootProduct)
router.use('/root/store-product', rootStoreProduct)
router.use('/root/barangay', rootBarangay)
router.use('/root/street', rootStreet)
router.use('/root/account', rootAccount)

module.exports = router;
