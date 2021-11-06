import {PRODUCT} from "../constant/product.constant";

export const productListReducers = (state = { products: []}, action) => {
  switch (action.type) {
    case PRODUCT.PRODUCT_LIST_REQUEST:
      return {loading: true, products: []}
    case PRODUCT.PRODUCT_LIST_SUCCESS:
      return {
        loading: false,
        products: action.payload.products
      }
    case PRODUCT.PRODUCT_LIST_FAIL:
      return {
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}
