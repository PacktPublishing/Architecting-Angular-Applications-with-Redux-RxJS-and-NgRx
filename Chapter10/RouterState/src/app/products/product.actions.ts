import {
  FETCHING_PRODUCTS_SUCCESSFULLY,
  FETCHING_PRODUCTS_ERROR,
  FETCHING_PRODUCTS,
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESSFULLY,
  ADD_PRODUCT_ERROR
} from './product.constants';

export const fetchProductsSuccessfully = (products) => ({
  type: FETCHING_PRODUCTS_SUCCESSFULLY,
  payload: products
});

export const fetchError = (error) => ({ type: FETCHING_PRODUCTS_ERROR, payload: error });
export const fetchProductsLoading = () => ({ type: FETCHING_PRODUCTS });
export const fetchProducts = () => ({ type: FETCHING_PRODUCTS  });
export const addProduct = (product) => ({ type: ADD_PRODUCT, payload: { name: product }  });
export const addProductSuccessfully = (product) => ({ type: ADD_PRODUCT_SUCCESSFULLY, payload: product });
export const addProductError = (error) => ({ type: ADD_PRODUCT_ERROR, payload: error });
