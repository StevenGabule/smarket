import {useDispatch, useSelector} from 'react-redux'
import {Form, Button, Card} from "react-bootstrap";
import './auth.scss'
import {useEffect, useState} from "react";
import {login} from "../../store/actions/auth.action";
import Message from "../../utils/Message";
import Loader from "../../utils/Loader";

const INITIAL_STATE = {
  email: "mikeross@smarket.com",
  password: "password",
}

function LoginPage({history, location}) {
  const dispatch = useDispatch();
  const {userLogin: {loading, error, userInfo}} = useSelector((state) => state);

  const [user, setUser] = useState(INITIAL_STATE);

  function inputHandler(e) {
    e.preventDefault();
    dispatch(login(user.email, user.password))
  }

  function handleInput(e) {
    const {name, value} = e.target;
    setUser(prev => ({...prev, [name]: value}))
  }

  const redirect = location.search ? location.search.split("=")[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect]);


  return (
    <Card className={'card-login mt-5'}>
      <Card.Header className={'text-center h4'}>Login</Card.Header>
      <Card.Body>
        <p className={'text-muted text-center'}>Welcome, please login using your credentials.</p>
        {error && <Message variant="danger">{error}</Message>}
        {loading && <Loader/>}
        <Form onSubmit={inputHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={user.email}
                          onChange={handleInput}
                          name={"email"}
                          type="email"
                          placeholder="Enter email"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={user.password}
                          onChange={handleInput}
                          name={"password"}
                          type="password"
                          placeholder="Password"/>
          </Form.Group>
          <div className="d-grid">
            <Button variant="primary" disabled={loading} type="submit" size={'md'}>
              {loading ? "Logging..." : "Login"}
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  )
}

export default LoginPage;
