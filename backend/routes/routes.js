const router = require('express').Router();
const rootStoreRoute = require('./root/rootStore.route')
const rootProvinceRoute = require('./root/rootProvince.route')
const rootMunicipalityRoute = require('./root/rootMunicipality.route')
const rootCategoryRoute = require('./root/rootCategory.route')
const rootProductRoute = require('./root/rootProduct.route')
const rootStoreProductRoute = require('./root/rootStoreProduct.route')
const rootBarangayRoute = require('./root/rootBarangay.route')
const rootStreetRoute = require('./root/rootStreet.route')
const rootAccountRoute = require('./root/rootAccount.route')
const rootAuthRoute = require('./auth/auth.route')
const homeAuthRoute = require('./home/home.route')
const orderCustomerRoute = require('./home/order.route')

// ROOT MODULE:
router.use('/root/vendor', rootStoreRoute)
router.use('/root/province', rootProvinceRoute)
router.use('/root/municipality', rootMunicipalityRoute)
router.use('/root/category', rootCategoryRoute)
router.use('/root/Product', rootProductRoute)
router.use('/root/store-product', rootStoreProductRoute)
router.use('/root/barangay', rootBarangayRoute)
router.use('/root/street', rootStreetRoute)
router.use('/root/account', rootAccountRoute)

// AUTHENTICATION MODULE:
router.use('/auth', rootAuthRoute)

// public routes for client
router.use('/home', homeAuthRoute);

// customer order from client
router.use('/order', orderCustomerRoute)

module.exports = router;
