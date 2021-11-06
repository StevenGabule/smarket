const router = require('express').Router();
const orderController = require('../../controllers/home/order.controller')
const {checkAuthUser} = require("../../middleware/auth.middleware");
const config = require('config')
const PAYPAL_CLIENT_ID = config.get('PAYPAL_CLIENT_ID')
router.post('/', checkAuthUser, orderController.addOrderItems);
router.get('/:id', checkAuthUser, orderController.getOrderById);
router.get('/config/paypal', (req, res) => {
  return res.send(PAYPAL_CLIENT_ID)
})
router.put('/:id/pay', checkAuthUser, orderController.updateOrderToPaid)
module.exports = router;
