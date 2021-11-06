import {useDispatch, useSelector} from "react-redux";
import { useEffect, useState} from "react";
import {addDecimals} from "../utils/helpers";
import axios from "axios";
import {ORDER} from "../store/constant/order.constant";
import {deliverOrder, getOrderDetails, payOrder} from "../store/actions/order.action";
import Loader from "../utils/Loader";
import Message from "../utils/Message";
import {Card, Col, Image, ListGroup, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {PayPalButton} from "react-paypal-button-v2";

function OrderPage({match, history}) {
  const orderId = match.params.id;
  const dispatch = useDispatch()
  const [sdkReady, setSdkReady] = useState(false)

  const {
    orderDetails: {order, loading, error},
    orderPay: {loading: loadingPay, success: successPay}
  } = useSelector(state => state)

  useEffect(() => {
    if (!order || successPay) {
      dispatch({type: ORDER.PAY_RESET})
      dispatch({type: ORDER.DELIVER_RESET})
      dispatch(getOrderDetails(orderId))
    } else if (!order.isPaid) {
      setSdkReady(true)
    }
  }, [dispatch, orderId, successPay, order]);

  useEffect(() => {
    if (!order || order._id !== orderId) {
      dispatch(getOrderDetails(orderId))
    }
  }, [order, orderId, dispatch]);

  useEffect(() => {
    if (!loading) {
      if (!order) history.push('/')
    }
  }, [loading, order]);

  if (!loading) {
    if (order) {
      order.itemsPrice = addDecimals(order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0))
    }
  }

  function successPaymentHandler(paymentResult) {
    console.log(paymentResult)
    dispatch(payOrder(orderId, paymentResult))
  }

  function deliveryHandler() {
    dispatch(deliverOrder(order))
  }

  return loading ? (
    <Loader/>
  ) : error ? (
    <Message variant={'danger'}>{error}</Message>
  ) : (
    <>
      <Row>
        <Col md={8}>
          <ListGroup variant={'flush'}>
            <ListGroup.Item>
              <h3>Shipping</h3>
              <p><strong>Name:</strong> {order.user.name}</p>
              <p><strong>Email:</strong> <a href={`mailto:${order.user.email}`}>{order.user.email}</a></p>
              <p><strong>Address:</strong>
                {order.shippingAddress.address}, {order.shippingAddress.city}, {' '}
                {order.shippingAddress.postalCode}, {' '}
                {order.shippingAddress.country}
              </p>
              {order.isDelivered ? (
                <Message variant={'success'}>
                  Paid on {order.deliveredAt}
                </Message>
              ) : (
                <Message variant={'danger'}>Not delivered</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h3>Payment Method</h3>
              <p><strong>Method:</strong> {order.paymentMethod}</p>
              {order.isPaid ? (
                <Message variant={'success'}>Paid on {order.paidAt}</Message>
              ) : (
                <Message variant={'danger'}>Not paid</Message>
              )}
            </ListGroup.Item>

            <ListGroup.Item>
              <h3>Order items</h3>
              {order.orderItems.length === 0 ? (
                <Message>Oops! your order is empty!</Message>
              ) : (
                <ListGroup variant={'flush'}>
                  {order.orderItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={1}>
                          <Image src={item.image} alt={item.name} fluid rounded/>
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}>{item.name}</Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x {item.price} = ${item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant={'flush'}>
              <ListGroup.Item>
                <h3>Order summary</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${order.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              {!order.isPaid && (
                <ListGroup.Item>
                  {loadingPay && <Loader/>}
                  {!sdkReady ? (
                    <Loader/>
                  ) :  (
                    <PayPalButton amount={order.totalPrice} onSuccess={successPaymentHandler}/>
                  ) }
                </ListGroup.Item>
              )}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default OrderPage;
