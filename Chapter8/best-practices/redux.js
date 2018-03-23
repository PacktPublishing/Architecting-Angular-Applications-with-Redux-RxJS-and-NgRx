
class Store {
  constructor(reducer) {
    this.state = {};
    this.reducer = reducer;
  }

  dispatch(action) {
    const reducerProps = Object.keys(this.reducer);
    reducerProps.forEach(prop => {
      const specificReducer = this.reducer[prop];
      this.state[prop] = specificReducer(this.state[prop],action);
    });
  }

  getState() {
    return this.state;
  }
}

function createStore(reducer) {
  return new Store(reducer);
}

module.exports = {
  createStore
}
