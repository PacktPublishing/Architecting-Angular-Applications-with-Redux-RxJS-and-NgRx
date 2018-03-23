import {
  ADD_COUNTER_ITEM,
  REMOVE_COUNTER_ITEM
} from "./counter-list.constants";
import { ActionPayload } from "../../action-payload";
import { Counter } from "./counter.model";

export function counterListReducer(state = [], action: ActionPayload<Counter>) {
  switch (action.type) {
    case ADD_COUNTER_ITEM:
      return [...state, Object.assign(action.payload)];
    case REMOVE_COUNTER_ITEM:
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
}
