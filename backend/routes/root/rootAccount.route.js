const router = require('express').Router();
const store = require('../../controllers/root/account.controller')
const {rootUserFile} = require('../../middleware/fileUserUpload')

const {rules: accountStoreRules} = require('../../validations/account/store');
const {validate} = require('../../validations');

router.get('/', store.indexUserHandler)
router.post('/store', accountStoreRules, validate, rootUserFile, store.storeUserHandler)
router.get('/edit/:id', store.editUserHandler)
router.put('/update/:id', store.updateUserHandler)
router.delete('/destroy/:id', store.destroyUserHandler)

module.exports = router;
