import axios from "axios";
import {ORDER} from "../constant/order.constant";
import {CART} from "../constant/cart.constant";

export const createOrder = order => async (dispatch, getState) => {
  try {
    dispatch({type: ORDER.CREATE_REQUEST});
    const {userLogin: {userInfo}} = getState();
    const config = {headers: {ContentType: "application/json", Authorization: `Bearer ${userInfo.token}`}};
    const {data} = await axios.post('/order', order, config);
    dispatch({
      type: ORDER.CREATE_SUCCESS,
      payload: data
    })
    dispatch({type: CART.CART_EMPTY});
  } catch (e) {
    dispatch({
      type: ORDER.CREATE_FAIL,
      payload: e.response && e.response.data.message ? e.response.data.message : e.message
    })
  }
}

export const getOrderDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({type: ORDER.DETAILS_REQUEST})
    const {userLogin: {userInfo}} = getState();
    const config = {headers: {Authorization: `Bearer ${userInfo.token}`}}
    const {data} = await axios.get(`/order/${id}`, config)
    dispatch({type: ORDER.DETAILS_SUCCESS, payload: data})
  } catch (e) {
    dispatch({
      type: ORDER.DETAILS_FAIL,
      payload: e.response && e.response.data.message ? e.response.data.message : e.message,
    })
  }
}

export const payOrder = (orderId, paymentResult) => async (dispatch, getState) => {
  try {
    dispatch({type: ORDER.PAY_REQUEST})
    const {userLogin: {userInfo: {token}}} = getState()
    const config = {headers: {contentType: 'application/json', authorization: `Bearer ${token}`}}
    const {data} = await axios.put(`/order/${orderId}/pay`, paymentResult, config);
    dispatch({type: ORDER.PAY_SUCCESS, payload: data})
  } catch (e) {
    dispatch({
      type: ORDER.PAY_FAIL,
      payload: e.response && e.response.data.message ? e.response.data.message : e.message
    })
  }
}

export const deliverOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({type: ORDER.DELIVER_REQUEST})
    const {userLogin: {userInfo: {token}}} = getState();
    const config = {headers: {authorization: `Bearer ${token}`}}
    const {data} = await axios.put(`/order/${order._id}/deliver`, {}, config)
    dispatch({type: ORDER.DELIVER_SUCCESS, payload: data})
  } catch (e) {
    dispatch({
      type: ORDER.DELIVER_FAIL,
      payload: e.response && e.response.data.message ? e.response.data.message : e.message,
    })
  }
}
