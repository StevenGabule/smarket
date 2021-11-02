const router = require('express').Router();
const store = require('../../controllers/root/municipality.controller')
router.get('/', store.indexMunicipalityHandler)
router.post('/store', store.storeMunicipalityHandler)
router.get('/edit/:id', store.editMunicipalityHandler)
router.put('/update/:id', store.updateMunicipalityHandler)
router.delete('/destroy/:id', store.destroyMunicipalityHandler)

module.exports = router;
