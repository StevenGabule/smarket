import {Button, Card, Col, FormControl, InputGroup} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/actions/cart.action";

function Product({_id, productId, retailPrice, qty: itemQty}) {
  const dispatch = useDispatch()
  const [qty, setQty] = useState(1);

  function handleDecrement() {
    if (qty !== 1) {
      setQty(qty-1)
    }
  }

  function handleIncrement() {
    if (qty < itemQty) {
      setQty(qty+1)
    }
  }

  function handleAddToCart() {
    dispatch(addToCart(_id, qty))
  }

  return (
    <Col key={_id} sm={12} md={3} lg={2} xl={3}>
      <Card className="my-3 rounded">
        <Link to={`/product/${_id}`}>
          <Card.Img src={productId.image} variant="top"/>
        </Link>
        <Card.Body>
          <Card.Title>
            {productId.title}
          </Card.Title>
          <Card.Text>{retailPrice}</Card.Text>
          <InputGroup className="mb-3">
            <Button variant="outline-dark" onClick={handleDecrement}><i className="fas fa-minus"/></Button>
            <FormControl aria-label="1" value={qty} className={'text-center font-weight-bold'} readOnly={true}/>
            <Button variant="outline-dark" onClick={handleIncrement}><i className="fas fa-plus"/></Button>
          </InputGroup>
          <div className={'d-grid'}>
            <Button variant="primary" size="sm"  onClick={handleAddToCart}>
              Add To Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default Product;
