function combineReducers(config) {
  const states = Object.keys(config);
  let stateObject = {};
  states.forEach(state => {
    stateObject[state] = config[state];
  });

  return stateObject;
}

let rootReducer = {};

function registerReducer(reducer) {
  const entry = combineReducers(reducer);
  rootReducer = { ...rootReducer, ...entry };
}

function getRootReducer() {
  return rootReducer;
}

module.exports = {
  registerReducer,
  getRootReducer
};
