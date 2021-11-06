import {CART} from "../constant/cart.constant";

export const cartReducers = (state = { cartItems: []}, action) => {
  switch (action.type) {
/*    case CART.CART_ADD_REQUEST:
      return {loading: true}*/

    case CART.CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find(x => x.product === item.product)
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x => x.product === existItem.product ? item : x)
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item]
        }
      }
    case CART.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(x => x.product !== action.payload)
      }
    case CART.CART_EMPTY:
      return {
        ...state,
        cartItems: []
      }
    default:
      return state;
  }
}
