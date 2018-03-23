import { Action, ActionReducerMap } from "@ngrx/store";

export interface CounterListState {
  list: Array<number>;
};

export const counterListReducers: ActionReducerMap<CounterListState> = {
  list: reducer
};

export function reducer(state = [], action: Action) {
  switch(action.type) {
    default:
      return state;
  }
}
