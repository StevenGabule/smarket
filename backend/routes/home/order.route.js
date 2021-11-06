const router = require('express').Router();
const orderController = require('../../controllers/home/order.controller')
const {checkAuthUser} = require("../../middleware/auth.middleware");

router.post('/', checkAuthUser, orderController.addOrderItems);
router.get('/:id', checkAuthUser, orderController.getOrderById);
router.put('/:id/pay', checkAuthUser, orderController.updateOrderToPaid)
router.get('/customer/my-order-lists', checkAuthUser, orderController.getUserOrders)

module.exports = router;
