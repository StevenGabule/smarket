const Order = require('../../models/order.model')

exports.addOrderItems = async (req, res) => {
  try {
    const {orderItems, shippingAddress, paymentMethod, itemPrice, taxPrice, shippingPrice, totalPrice} = req.body;
    if (orderItems && orderItems.length === 0) return res.status(400).json({message: "No order items found!"})
    const order = new Order({
      orderItems, user: req.user._id, shippingAddress, shippingPrice, paymentMethod, itemPrice, taxPrice, totalPrice
    })
    const createdOrder = await order.save();
    return res.status(201).json({order: createdOrder})
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('user', 'name email');
    if (order) {
      return res.json(order)
    }
    return res.status(400).json({message: "Order not found!"})
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.updateOrderToPaid = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(400).json({message: "Order not found or not exists!"})
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address
    }
    const updatedOrder = await order.save();
    return res.status(201).json(updatedOrder)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}

exports.getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({user: req.user._id});
    return res.json(orders)
  } catch (e) {
    console.log(e.message)
    return res.status(500).send(e.message)
  }
}
