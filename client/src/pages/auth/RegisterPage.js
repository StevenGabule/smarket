import {Button, Card, Form} from "react-bootstrap";
import './auth.scss'
import {useEffect, useState} from "react";
import {register} from "../../store/actions/auth.action";
import Message from "../../utils/Message";
import Loader from "../../utils/Loader";
import {useDispatch, useSelector} from "react-redux";

const INITIAL_STATE = {
  name: "John Paul Gabule",
  phoneNumber: "+1(408) 785-9751",
  email: "jpg@smarket.com",
  password: "password",
  passwordConfirm: "password",
}

function RegisterPage({history}) {
  const dispatch = useDispatch();
  const {userRegister: {loading, error, userInfo}} = useSelector((state) => state);
  const [user, setUser] = useState(INITIAL_STATE);
  const [passwordError, setPasswordError] = useState(false);

  function handleInput(e) {
    const {name, value} = e.target;
    setUser(prev => ({...prev, [name]: value}))
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (user.password === user.passwordConfirm) {
      dispatch(register(user.name, user.phoneNumber, user.email, user.password))
    } else {
      setPasswordError(true)
    }
  }

  useEffect(() => {
    if (userInfo) {
      history.push('/')
    }
  }, [history, userInfo]);

  return (
    <Card className={'card-login mt-5'}>
      <Card.Header className={'text-center h4'}>Register</Card.Header>
      <Card.Body>
        <p className={'text-muted text-center'}>Free registration.</p>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader/>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control value={user.name} onChange={handleInput} name={"name"} type="text" placeholder="Enter name"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPhoneNumber">
            <Form.Label>Phone number</Form.Label>
            <Form.Control value={user.phoneNumber} onChange={handleInput} name={"phoneNumber"} type="text"
                          placeholder="Enter phone number"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={user.email} onChange={handleInput} name={"email"} type="email"
                          placeholder="Enter email"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={user.password} onChange={handleInput} name={"password"} type="password"
                          placeholder="Password"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              isInvalid={passwordError}
              value={user.passwordConfirm} onChange={handleInput} name={"passwordConfirm"} type="password"
              placeholder="Confirm password"/>
            {passwordError && <Form.Text id="passwordHelpBlock" muted>
              <small>Password mismatch!</small>
            </Form.Text>}
          </Form.Group>

          <div className="d-grid">
            <Button variant="success" disabled={loading} type="submit" size={'md'}>
              Create an account
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default RegisterPage;
