import {PAYMENT} from "../constant/payment.constant";

export const savePaymentMethod = (data) => async(dispatch) => {
  dispatch({
    type: PAYMENT.SAVE_METHOD,
    payload: data
  })
  localStorage.setItem("paymentMethod", JSON.stringify(data));
}
