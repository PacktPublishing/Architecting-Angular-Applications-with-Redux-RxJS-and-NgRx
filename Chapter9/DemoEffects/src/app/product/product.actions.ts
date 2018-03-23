import {
  FETCHING_PRODUCTS_SUCCESSFULLY,
  FETCHING_PRODUCTS_ERROR,
  FETCHING_PRODUCTS
} from "./product.constants";

export const fetchSuccessfully = products => ({
  type: FETCHING_PRODUCTS_SUCCESSFULLY,
  payload: products
});

export const fetchError = error => ({
  type: FETCHING_PRODUCTS_ERROR,
  payload: error
});

export const fetchProductsSuccessfully = products => ({
  type: FETCHING_PRODUCTS_SUCCESSFULLY,
  payload: products
});

export const fetchProducts = () => ({ type: FETCHING_PRODUCTS });
