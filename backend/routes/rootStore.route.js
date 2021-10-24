const router = require('express').Router();
const store = require('../controllers/root/store.controller')
router.get('/', store.indexStoreHandler)
router.post('/store', store.storeStoreHandler)
router.get('/edit/:id', store.editStoreHandler)
router.put('/update/:id', store.updateStoreHandler)
router.delete('/destroy/:id', store.destroyStoreHandler)

module.exports = router;
