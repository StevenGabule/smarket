import axios from 'axios'
import {USER} from '../constant/user.constant'

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({type: USER.USER_LOGIN_REQUEST});
    const config = {headers: {contentType: 'application/json'}}
    const {data} = await axios.post('/auth/login', {email, password}, config)
    dispatch({type: USER.USER_LOGIN_SUCCESS, payload: data})
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (e) {
    dispatch({
      type: USER.USER_LOGIN_FAIL,
      payload: e.response && e.response.data.message ? e.response.data.message : e.message
    })
  }
}

export const register = (name, phoneNumber, email, password) => async (dispatch) => {
  try {
    dispatch({type: USER.USER_REGISTER_REQUEST});
    const config = {headers: {contentType: 'application/json'}}
    const {data} = await axios.post('/auth/register', {name, phoneNumber, email, password}, config)
    dispatch({type: USER.USER_REGISTER_SUCCESS, payload: data})
    dispatch({type: USER.USER_LOGIN_SUCCESS, payload: data})
    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (e) {
    dispatch({
      type: USER.USER_REGISTER_FAIL,
      payload: e.response && e.response.data.message ? e.response.data.message : e.message
    })
  }
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({type: USER.USER_LOGOUT})
}
