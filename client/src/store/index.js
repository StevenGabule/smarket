import {createStore, combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from "redux-thunk";
import {userLoginReducer, userRegisterReducer} from './reducers/auth.reducers'
import {productListReducers} from "./reducers/product.reducers";
import {cartReducers} from "./reducers/cart.reducers";
import {shippingAddressReducers} from "./reducers/shipping_address.reducers";
import {paymentMethodReducers} from "./reducers/payment_save.reducers";
import {orderCreateReducer, orderDetailsReducer, orderListMyReducer, orderPayReducer} from "./reducers/order.reducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,

  productList: productListReducers,

  cart: cartReducers,
  setShippingAddress: shippingAddressReducers,
  setPaymentMethod: paymentMethodReducers,

  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,

  orderMyList: orderListMyReducer
});

const cartItemsFromStorage = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
  JSON.parse(localStorage.getItem('shippingAddress')) : { address: "", city: "", country: "", postalCode: ""};
const paymentMethodFromStorage = localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : ""

const initialState = {
  cart: { cartItems: cartItemsFromStorage },
  setShippingAddress: { shippingAddress: shippingAddressFromStorage  },
  userLogin: {userInfo: userInfoFromStorage},
  setPaymentMethod: { paymentMethod: paymentMethodFromStorage }
}

const middleware = [thunk];
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
export default store;
