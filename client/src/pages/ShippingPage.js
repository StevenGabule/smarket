import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {saveShippingAddress} from "../store/actions/shipping_address.action";
import FormContainer from "../layouts/FormContainer";
import {Button, Form} from "react-bootstrap";

function ShippingPage({history}) {
  const {setShippingAddress: {shippingAddress}} = useSelector((state) => state);
  const [shipping, setShipping] = useState(shippingAddress);
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(saveShippingAddress(shipping))
    history.push('/payment')
  }

  function handleChange(e) {
    const {name, value} = e.target;
    setShipping(prev => ({...prev, [name]: value}))
  }

  const {address, city, country, postalCode} = shipping;

  return (
    <FormContainer>
      <h3>Shipping Information</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId={'address'} className={'mb-3'}>
          <Form.Label>Address:</Form.Label>
          <Form.Control type={"text"} name={"address"} value={address} required onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId={'city'} className={'mb-3'}>
          <Form.Label>City:</Form.Label>
          <Form.Control type={"text"} name={"city"} value={city} required onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId={'postalCode'} className={'mb-3'}>
          <Form.Label>Postal Code:</Form.Label>
          <Form.Control type={"text"} name={"postalCode"} value={postalCode} required onChange={handleChange}/>
        </Form.Group>
        <Form.Group controlId={'country'} className={'mb-3'}>
          <Form.Label>Country:</Form.Label>
          <Form.Control type={"text"} name={"country"} value={country} required onChange={handleChange}/>
        </Form.Group>
        <Button type={'submit'} variant={'primary'}>Continue</Button>
      </Form>
    </FormContainer>
  )
}

export default ShippingPage;
