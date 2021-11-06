import axios from 'axios'
import {PRODUCT} from '../constant/product.constant'

export const listProducts = () => async (dispatch) => {
  try {
    dispatch({type: PRODUCT.PRODUCT_LIST_REQUEST});
    const config = {headers: {contentType: 'application/json'}}
    const {data} = await axios.get('/home', config)
    console.log(data)
    dispatch({type: PRODUCT.PRODUCT_LIST_SUCCESS, payload: data})
  } catch (e) {
    dispatch({
      type: PRODUCT.PRODUCT_LIST_FAIL,
      payload: e.response && e.response.data.message ? e.response.data.message : e.message
    })
  }
}
