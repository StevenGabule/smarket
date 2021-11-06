import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Button, Card, Col, Form, Image, ListGroup, Row} from "react-bootstrap";
import Message from "../utils/Message";
import {addToCart, removeFromCart} from "../store/actions/cart.action";

function CartPage({history}) {
  const dispatch = useDispatch()
  const {
    cart: {cartItems},
    userLogin: {userInfo}
  } = useSelector((state) => state)

  function removeCartHandler(id) {
    dispatch(removeFromCart(id))
  }

  function checkHandler() {
    if (userInfo) {
      history.push('/shipping')
    } else {
      history.push('/login?redirect=shipping')
    }
  }

  function handleChange(e, item) {
    dispatch(addToCart(item.product, Number(e.target.value)));
  }

  return (
    <>
      <Row>
        <Col md={8}>
          <h4>Current Shopping Cart</h4>
          {cartItems.length === 0 ? (
            <Message>
              Your cart is empty! <Link to={"/"}>Go back</Link>
            </Message>
          ) : (
            <ListGroup variant={'flush'}>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.product}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded/>
                    </Col>
                    <Col md={3}>
                      <Link to={`/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>${item.price}</Col>
                    <Col md={2}>
                      <Form.Control as={"select"} value={item.qty}
                                    custom={"true"}
                                    onChange={(e) => handleChange(e, item)}>
                        {[...Array(item.countInStock).keys()].map(x => (
                          <option value={x + 1} key={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button type={'button'} variant={'light'} onClick={() => removeCartHandler(item.product)}>
                        <i className={'fas fa-trash'}/>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant={'flush'}>
              <ListGroup.Item>
                <h5>Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h5>
                ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  type={"button"}
                  className={'btn btn-block'}
                  disabled={cartItems.length === 0}
                  onClick={checkHandler}
                >Process To Checkout</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default CartPage;
