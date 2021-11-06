import {SHIPPING_ADDRESS} from "../constant/shipping_address.constant";

export const shippingAddressReducers = (state={} , action) => {
  switch (action.type) {
    case SHIPPING_ADDRESS.SAVE_SHIPPING:
      return {
        ...state,
        shippingAddress: action.payload
      }
    default:
      return state;
  }
}
