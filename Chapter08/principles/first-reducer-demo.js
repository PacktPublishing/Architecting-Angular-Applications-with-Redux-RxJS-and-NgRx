const reducer = require("./first-reducer");

let initialState = {};
let action = { type: "SELECT_JEDI", payload: { id: 1, name: "Jedi" } };
let state = reducer(initialState, action);

console.log(state);
/* this produces the following:
{ id: 1, name: 'Yoda' }
*/
