import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../store/actions/auth.action";
import { useHistory } from "react-router-dom";

function Header() {
  const history = useHistory();
  const dispatch = useDispatch()
  const {userLogin, cart} = useSelector((state) => state)
  const {userInfo} = userLogin;
  const {cartItems} = cart

  function handleLogout(){
    dispatch(logout())
  }
  function redirectToOrders(){
    history.push('/my-order-lists')
  }

  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <LinkContainer to={"/"}>
            <Navbar.Brand>Smarket</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to={'/cart'}>
                <Nav.Link>Cart({cartItems.length})</Nav.Link>
              </LinkContainer>
              <LinkContainer to={"wishlist"}>
                <Nav.Link>
                  Wishlist
                </Nav.Link>
              </LinkContainer>
            </Nav>

            {userInfo ? (
              <Nav>
                <NavDropdown title={userInfo.user.name}>
                  <NavDropdown.Item onClick={redirectToOrders}>
                    Orders
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            ) : (
              <Nav>
                <LinkContainer to="/login">
                  <Nav.Link>Login</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/register">
                  <Nav.Link>
                    Register
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;
