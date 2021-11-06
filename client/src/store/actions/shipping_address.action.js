import {SHIPPING_ADDRESS} from "../constant/shipping_address.constant";

export const saveShippingAddress = (data) => async(dispatch) => {
  dispatch({
    type: SHIPPING_ADDRESS.SAVE_SHIPPING,
    payload: data
  })
  localStorage.setItem("shippingAddress", JSON.stringify(data));
}


