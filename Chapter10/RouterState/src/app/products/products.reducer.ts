import {
  FETCHING_PRODUCTS_SUCCESSFULLY,
  FETCHING_PRODUCTS_ERROR,
  FETCHING_PRODUCTS,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESSFULLY,
  ADD_PRODUCT_ERROR
} from './product.constants';
import { Product } from './product.model';

const initialState = {
  loading: false,
  list: [],
  error: void 0
};

export interface ProductsState {
  loading: boolean;
  list: Array<Product>;
  error: string;
}

function addProduct(list, product) {
  return [...list, product];
}

export function productsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_PRODUCTS_SUCCESSFULLY:
      return { ...state, list: action.payload, loading: false };
    case FETCHING_PRODUCTS_ERROR:
    case ADD_PRODUCT_ERROR:
      return { ...state, error: action.payload, loading: false };
    case FETCHING_PRODUCTS:
    case ADD_PRODUCT:
      return { ...state, loading: true };
    case ADD_PRODUCT_SUCCESSFULLY:
      return { ...state, list: addProduct(state.list, action.payload) };
    default:
      return state;
  }
}
