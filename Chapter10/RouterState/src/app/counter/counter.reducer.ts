import { Action, ActionReducerMap } from "@ngrx/store";
import { INCREMENT, DECREMENT } from "./counter.constants";

export interface CounterState {
  value: number;
};

export const counterReducers: ActionReducerMap<CounterState> = {
  value: counterReducer
};

function counterReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
