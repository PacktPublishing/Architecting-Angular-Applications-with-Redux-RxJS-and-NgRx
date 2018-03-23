// core-concepts/selectjedi-reducer.js

let actionPerson = { type: "SELECT_JEDI", payload: { id: 1, name: "Luke" } };
let actionVader = { type: "SELECT_JEDI", payload: { id: 2, name: "Vader" } };

function selectJediReducer({}, action) {
  switch (action.type) {
    case "SELECT_JEDI":
      return Object.assign({}, action.payload);
    default:
      return state;
  }
}

state = selectJediReducer({}, actionPerson);
console.log(state);
/*
{ name: 'Luke' }
*/

state = selectJediReducer(state, actionVader);
console.log(state);
/*
{ name: 'Vader' }
*/

module.exports = selectJediReducer;
