// redux.js
import { itemsReducer } from "./reducer";
import EventEmitter from "events";

const emitter = new EventEmitter();

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
  const oldState = state;
  state = store(state, action);
  emitter.emit("changed");
}

export function select(slice) {
  return state[slice];
}

export function subscribe(cb) {
  emitter.on("changed", cb);
}
