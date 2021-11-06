import {PAYMENT} from "../constant/payment.constant";

export const paymentMethodReducers = (state = {}, action) => {
  switch (action.type) {
    case PAYMENT.SAVE_METHOD:
      return {
        ...state,
        paymentMethod: action.payload
      }
    default:
      return state;
  }
}
