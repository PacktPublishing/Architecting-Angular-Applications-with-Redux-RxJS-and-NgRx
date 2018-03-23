import {
  ADD_COUNTER_ITEM,
  REMOVE_COUNTER_ITEM
} from "./counter-list.constants";

export const addItem = (title, id) => ({
  type: ADD_COUNTER_ITEM,
  payload: { id, title }
});
export const removeItem = id => ({
  type: REMOVE_COUNTER_ITEM,
  payload: { id }
});
