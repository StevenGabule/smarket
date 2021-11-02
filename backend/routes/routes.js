const router = require('express').Router();
const rootStore = require('./root/rootStore.route')
const rootProvince = require('./root/rootProvince.route')
const rootMunicipality = require('./root/rootMunicipality.route')
const rootCategory = require('./root/rootCategory.route')
const rootProduct = require('./root/rootProduct.route')
const rootStoreProduct = require('./root/rootStoreProduct.route')
const rootBarangay = require('./root/rootBarangay.route')
const rootStreet = require('./root/rootStreet.route')
const rootAccount = require('./root/rootAccount.route')
const rootAuth = require('./auth/auth.route')

router.use('/root/vendor', rootStore)
router.use('/root/province', rootProvince)
router.use('/root/municipality', rootMunicipality)
router.use('/root/category', rootCategory)
router.use('/root/Product', rootProduct)
router.use('/root/store-product', rootStoreProduct)
router.use('/root/barangay', rootBarangay)
router.use('/root/street', rootStreet)
router.use('/root/account', rootAccount)
router.use('/auth', rootAuth)

module.exports = router;
