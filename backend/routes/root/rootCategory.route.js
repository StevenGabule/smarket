const router = require('express').Router();
const store = require('../../controllers/root/category.controller')
router.get('/', store.indexCategoryHandler)
router.post('/store', store.storeCategoryHandler)
router.get('/edit/:id', store.editCategoryHandler)
router.put('/update/:id', store.updateCategoryHandler)
router.delete('/destroy/:id', store.destroyCategoryHandler)

module.exports = router;
