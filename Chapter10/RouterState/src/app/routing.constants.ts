import { Action } from '@ngrx/store';

export const PRODUCTS = 'Navigation products';
export const TODOS = 'Navigation todos';

export interface RoutingAction extends Action {
  type: string;
  payload: { url: string; query: { page: number } };
}
