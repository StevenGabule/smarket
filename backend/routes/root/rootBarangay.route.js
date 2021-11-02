const router = require('express').Router();
const store = require('../../controllers/root/barangay.controller')
const { validate } = require('../../validations');
const {rules: streetBarangayRules} = require('../../validations/barangay/store');

router.get('/', store.indexBarangayHandler)
router.post('/store', streetBarangayRules, validate, store.storeBarangayHandler)
router.get('/edit/:id', store.editBarangayHandler)
router.put('/update/:id', store.updateBarangayHandler)
router.delete('/destroy/:id', store.destroyBarangayHandler)

module.exports = router;
