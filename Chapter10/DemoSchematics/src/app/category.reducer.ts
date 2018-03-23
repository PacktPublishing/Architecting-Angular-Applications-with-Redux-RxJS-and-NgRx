import { Action } from '@ngrx/store';
import { CategoryActions, CategoryActionTypes } from './category.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: CategoryActions): State {
  switch (action.type) {

    case CategoryActionTypes.CategoryAction:
      return state;


    default:
      return state;
  }
}
