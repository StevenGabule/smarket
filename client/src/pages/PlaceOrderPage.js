import {useDispatch, useSelector} from "react-redux";
import {Button, Col, Image, ListGroup, Row, Card} from "react-bootstrap";
import {addDecimals} from "../utils/helpers";
import {useEffect} from "react";
import {createOrder} from "../store/actions/order.action";
import Message from "../utils/Message";
import {Link} from "react-router-dom";

function PlaceOrderPage({history}) {
  const dispatch = useDispatch();
  const {
    setPaymentMethod: {paymentMethod},
    setShippingAddress: {shippingAddress},
    cart
  } = useSelector((state) => state)

  if (!shippingAddress) history.push('/shipping')

  cart.itemsPrice = addDecimals(cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0))
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100);
  cart.taxPrice = addDecimals(Number(0.15 * cart.itemsPrice).toFixed(2));
  cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)

  const {orderCreate: {order, success, error}} = useSelector(state => state)

  useEffect(() => {
    if (success) {
      console.log(order)
      history.push(`/order/${order._id}`)
    }
  }, [history, success, order]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createOrder({
      orderItems: cart.cartItems,
      shippingAddress,
      paymentMethod,
      itemsPrice: cart.itemsPrice,
      shippingPrice: cart.shippingPrice,
      taxPrice: cart.taxPrice,
      totalPrice: cart.totalPrice
    }))
  }

  const {address, city, postalCode, country} = shippingAddress;
  return (
    <>
      <Row>
        <Col md={8}>
          <ListGroup variant={'flush'}>

            <ListGroup.Item>
              <h3>Shipping</h3>
              <p>
                <strong>Address: </strong>
                {address}, {city}, {' '}
                {postalCode}, {' '} {country}
              </p>
            </ListGroup.Item>

            <ListGroup.Item>
              <h3>Payment Method</h3>
              <strong>Method: </strong>
              {paymentMethod}
            </ListGroup.Item>

            <ListGroup.Item>
              <h3>Order Items</h3>
              {cart.cartItems.length === 0 ? (
                <Message>Oops! your cart is empty!</Message>
              ) : (
                <ListGroup variant={'flush'}>
                  {cart.cartItems.map((item) => (
                    <ListGroup.Item key={item.product}>
                      <Row>
                        <Col md={1}>
                          <Image src={item.image} alt={item.name} fluid rounded/>
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}
                                className={'text-decoration-none btn-link'}>{item.name}</Link>
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
                <h3>Order Summary</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>${cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${cart.taxPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>

              {error && (
                <ListGroup.Item>
                  <Message variant={'danger'}>{error}</Message>
                </ListGroup.Item>
             )}

              <ListGroup.Item>
                <Button
                  type={'button'}
                  className={'btn-block'}
                  disabled={cart.cartItems === 0}
                  onClick={handleSubmit}>
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default PlaceOrderPage;
