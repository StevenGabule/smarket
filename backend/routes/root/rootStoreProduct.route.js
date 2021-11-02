const router = require('express').Router();
const store = require('../../controllers/root/store_product.controller')
router.get('/', store.indexStoreProductHandler)
router.post('/store', store.storeStoreProductHandler)
router.get('/edit/:id', store.editStoreProductHandler)
router.put('/update/:id', store.updateStoreProductHandler)
router.delete('/destroy/:id', store.destroyStoreProductHandler)

module.exports = router;
