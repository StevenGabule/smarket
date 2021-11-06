import axios from 'axios'
import {CART} from "../constant/cart.constant";

export const addToCart = (id, qty) => async(dispatch, getState) => {
  // dispatch({ type: CART.CART_ADD_REQUEST })
  const {data} = await axios.get(`/home/store-product/${id}`)
  dispatch({
    type: CART.CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.productId.title,
      image: data.productId.image,
      price: data.retailPrice,
      countInStock: data.qty,
      qty,
    }
  })
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
}

export const removeFromCart = (id) => async(dispatch, getState) => {
  dispatch({
    type: CART.CART_REMOVE_ITEM,
    payload: id,
  })
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}


