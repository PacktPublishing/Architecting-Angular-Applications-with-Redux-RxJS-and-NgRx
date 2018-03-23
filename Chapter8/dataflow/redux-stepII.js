// this now refers to the reducers.js file we broke out
import { itemsReducer } from "./reducers";

let state = {
  items: []
};

function store(state = { items: [] }, action) {
  return {
    items: itemsReducer(state.items, action)
  };
}

export function getState() {
  return state;
}

export function dispatch(action) {
  state = store(state, action);
}

export function select(slice) {
  return state[slice];
}
