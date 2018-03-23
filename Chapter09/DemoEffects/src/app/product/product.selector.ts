import { AppState } from "../app-state";

export const getList = (state: AppState) => state.featureProducts.products.list;
export const getError = (state: AppState) =>
  state.featureProducts.products.error;
export const isLoading = (state: AppState) =>
  state.featureProducts.products.loading;
