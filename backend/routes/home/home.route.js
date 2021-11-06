const router = require('express').Router();
const homeController = require('../../controllers/home/home.controller')
router.get('/',  homeController.homeProductHandler);
router.get('/store-product/:id',  homeController.getProductHandler);

module.exports = router;
