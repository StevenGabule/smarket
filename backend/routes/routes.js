const router = require('express').Router();
const rootStore = require('./rootStore.route')
const rootProvince = require('./rootProvince.route')
const rootMunicipality = require('./rootMunicipality.route')
const rootCategory = require('./rootCategory.route')
const rootProduct = require('./rootProduct.route')
const rootStoreProduct = require('./rootStoreProduct.route')


router.use('/root/vendor', rootStore)
router.use('/root/province', rootProvince)
router.use('/root/municipality', rootMunicipality)
router.use('/root/category', rootCategory)
router.use('/root/Product', rootProduct)
router.use('/root/store-product', rootStoreProduct)

module.exports = router;
