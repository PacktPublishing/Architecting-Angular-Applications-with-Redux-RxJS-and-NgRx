module.exports = function reducer(state = {}, action) {
  switch (action.type) {
    case "SELECT_JEDI":
      return Object.assign({}, action.payload);
    default:
      return state;
  }
};
