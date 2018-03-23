import {
  FETCHING_PRODUCTS_SUCCESSFULLY,
  FETCHING_PRODUCTS_ERROR,
  FETCHING_PRODUCTS
} from "./product.constants";
import { Product } from "./product.model";
import { ActionReducerMap } from "@ngrx/store/src/models";

const initialState = {
  loading: false,
  list: [],
  error: void 0
};

export interface ProductState {
  loading: boolean;
  list: Array<Product>;
  error: string;
}

export interface FeatureProducts {
  products: ProductState;
}

export const ProductReducers: ActionReducerMap<FeatureProducts> = {
  products: productReducer
};

export function productReducer(state = initialState, action) {
  switch (action.type) {
    case FETCHING_PRODUCTS_SUCCESSFULLY:
      return { ...state, list: action.payload, loading: false };
    case FETCHING_PRODUCTS_ERROR:
      return { ...state, error: action.payload, loading: false };
    case FETCHING_PRODUCTS:
      return { ...state, loading: true };
    default:
      return state;
  }
}
