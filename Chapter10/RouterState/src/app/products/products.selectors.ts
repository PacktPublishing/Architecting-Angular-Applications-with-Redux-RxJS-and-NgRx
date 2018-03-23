import { AppState } from '../app-state';

export const getList = (state: AppState) => state.products.list;
export const getError = (state: AppState) => state.products.error;
export const isLoading = (state: AppState) => state.products.loading;
