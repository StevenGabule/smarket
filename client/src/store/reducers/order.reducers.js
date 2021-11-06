import {ORDER} from "../constant/order.constant";

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER.CREATE_REQUEST:
      return {loading: true}
    case ORDER.CREATE_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload.order
      }
    case ORDER.CREATE_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

const initialValue = {
  loading: true,
  orderItems: [],
  shippingAddress: []
}

export const orderDetailsReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ORDER.DETAILS_REQUEST:
      return {
        loading: true,
      }
    case ORDER.DETAILS_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload
      }
    case ORDER.DETAILS_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export const orderPayReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER.PAY_REQUEST:
      return {
        loading: true
      }
    case ORDER.PAY_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload
      }
    case ORDER.PAY_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case ORDER.PAY_RESET:
      return {}
    default:
      return state;
  }
}

export const orderListMyReducer = (state = {orders: []}, action) => {
  switch (action.type) {
    case ORDER.LIST_MY_REQUEST:
      return {loading: true}
    case ORDER.LIST_MY_SUCCESS:
      return {
        loading: false,
        orders: action.payload
      }
    case ORDER.LIST_MY_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    case ORDER.LIST_MY_RESET:
      return {
        orders: []
      }
    default:
      return state;
  }
}
