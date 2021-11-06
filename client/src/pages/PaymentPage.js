import {useDispatch, useSelector} from "react-redux";
import {savePaymentMethod} from "../store/actions/payment.action";
import {useState} from "react";
import FormContainer from "../layouts/FormContainer";
import {Button, Col, Form} from "react-bootstrap";

function PaymentPage({history}) {
  const [paymentMethod, setPaymentMethod] = useState('PayPal');
  const {setShippingAddress: {shippingAddress}} = useSelector((state) => state)

  if (!shippingAddress) history.push('/shipping')

  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod))
    history.push('/place-order')
  }

  return (
    <FormContainer>
      <h3>Payment Method</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label as={"legend"}>Select Method:</Form.Label>
          <Col>
            <Form.Check
              checked
              onChange={e => setPaymentMethod(e.target.value)}
              type={'radio'}
              label={"Paypal or Credit Card"}
              id={"PayPal"}
              name={'paymentMethod'}
              value={"PayPal"}/>

            <Form.Check
              onChange={e => setPaymentMethod(e.target.value)}
              type={'radio'}
              label={"Stripe"}
              id={"Stripe"}
              name={'paymentMethod'}
              value={"Stripe"}/>
          </Col>
        </Form.Group>
        <Button type={"submit"} variant={'primary'}>Continue</Button>
      </Form>
    </FormContainer>
  )
}

export default PaymentPage;
