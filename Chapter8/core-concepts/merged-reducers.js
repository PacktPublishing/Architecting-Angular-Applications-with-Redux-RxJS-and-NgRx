const jediListReducer = require("./jedilist-reducer");
const selectJediReducer = require("./selectjedi-reducer");

function store(state = { jedis: [], selectedJedi: null }, action) {
  return {
    jedis: jediListReducer(state.jedis, action),
    selectedJedi: selectJediReducer(state.selectedJedi, action)
  };
}

let newJediActionYoda = { type: "ADD_ITEM", payload: { name: "Yoda" } };
let newJediActionVader = { type: "ADD_ITEM", payload: { name: "Vader" } };
let newJediSelection = { type: "SELECT_JEDI", payload: { name: "Yoda" } };

let initialState = { jedis: [], selectedJedi: {} };

let state = store(initialState, newJediActionYoda);
console.log("Merged reducers", state);

state = store(state, newJediActionVader);
console.log("Merged reducers", state);

state = store(state, newJediSelection);
console.log("Merged reducers", state);
/*
{
  jedis: [{ name: 'Yoda' }, { name: 'Vader'}],
  selectedJedi: { name: 'Yoda' }
}
*/
