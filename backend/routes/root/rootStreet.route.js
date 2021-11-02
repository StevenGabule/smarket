const router = require('express').Router();
const store = require('../../controllers/root/street.controller')
const { validate } = require('../../validations');
const {rules: streetStoreRules} = require('../../validations/street/store');

router.get('/', store.indexStreetHandler)
router.post('/store', streetStoreRules, validate,store.storeStreetHandler)
router.get('/edit/:id', store.editStreetHandler)
router.put('/update/:id', store.updateStreetHandler)
router.delete('/destroy/:id', store.destroyStreetHandler)

module.exports = router;
