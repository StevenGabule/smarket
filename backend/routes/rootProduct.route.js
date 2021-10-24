const router = require('express').Router();
const store = require('../controllers/root/product.controller')
const {rootProductFile} = require("../middleware/fileProductUpload");

router.get('/', store.indexProductHandler)
router.post('/store', [rootProductFile], store.storeProductHandler)
router.get('/edit/:id', store.editProductHandler)
router.put('/update/:id', [rootProductFile], store.updateProductHandler)
router.delete('/destroy/:id', store.destroyProductHandler)

module.exports = router;
