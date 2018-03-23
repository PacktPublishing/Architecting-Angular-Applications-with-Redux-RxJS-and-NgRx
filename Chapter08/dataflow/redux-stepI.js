// 1)
function itemsReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_ITEM":
      return [...state, Object.assign(action.payload)];
    default:
      return state;
  }
}

// 2)
let state = {
  items: []
};

// 3
function store(state = { items: [] }, action) {
  return {
    items: itemsReducer(state.items, action)
  };
}

// 4)
export function getState() {
  return state;
}

// 5)
export function dispatch(action) {
  state = store(state, action);
}
