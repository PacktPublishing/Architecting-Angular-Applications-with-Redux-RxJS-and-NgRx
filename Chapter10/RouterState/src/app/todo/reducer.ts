import { Action, ActionReducerMap } from '@ngrx/store';
import { ADD_TODO } from './constants';
import { ActionPayload } from '../interfaces';

const initialState = ['Yoda'];

export interface TodoState {
  list: Array<string>;
}

export const reducers: ActionReducerMap<TodoState> = {
  list: todosReducer
};

export function todosReducer(state = initialState, action: ActionPayload<string>) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
}
