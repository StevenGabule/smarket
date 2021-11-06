import Header from "./layouts/Header";
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Container} from "react-bootstrap";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import WishlistPage from "./pages/WishlistPage";
import RegisterPage from "./pages/auth/RegisterPage";
import LoginPage from "./pages/auth/LoginPage";
import ShippingPage from "./pages/ShippingPage";
import PaymentPage from "./pages/PaymentPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
    <Router>
      <Header/>
      <main>
        <Container>
          <Route path={'/'} component={HomePage} exact />
          <Route path={'/cart'} component={CartPage} exact />
          <Route path={'/wishlist'} component={WishlistPage} exact />
          <Route path={'/shipping'} component={ShippingPage} exact />
          <Route path={'/payment'} component={PaymentPage} exact />
          <Route path={'/place-order'} component={PlaceOrderPage} exact />
          <Route path={'/order/:id'} component={OrderPage} exact />
          <Route path={'/login'} component={LoginPage} exact />
          <Route path={'/register'} component={RegisterPage} exact />
        </Container>
      </main>
    </Router>
  );
}

export default App;
