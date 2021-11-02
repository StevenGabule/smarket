const router = require('express').Router();
const store = require('../../controllers/root/province.controller')
router.get('/', store.indexProvinceHandler)
router.get('/create', store.createProvinceHandler)
router.post('/store', store.storeProvinceHandler)
router.get('/edit/:id', store.editProvinceHandler)
router.put('/update/:id', store.updateProvinceHandler)
router.delete('/destroy/:id', store.destroyProvinceHandler)

module.exports = router;
