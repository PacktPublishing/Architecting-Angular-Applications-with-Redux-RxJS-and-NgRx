// reducer.js
export function itemsReducer(state = [], action) {
  switch (action.type) {
    case "CREATE_ITEM":
      return [...state, Object.assign(action.payload)];
    default:
      return state;
  }
}
