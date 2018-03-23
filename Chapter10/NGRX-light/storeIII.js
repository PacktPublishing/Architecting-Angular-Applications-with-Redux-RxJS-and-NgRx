// NGRX-light/storeIII.js
const Rx = require('rxjs');

class Store extends Rx.Subject {
  constructor() {
    super();
    this.state = {};
    this.subscribe(data => this.state = data);
  }

  dispatch(newState) {
    this.next(newState);
  }
}

const store = new Store();
store.subscribe(data => console.log('store', data));

store.dispatch({});
store.dispatch({ user: 'chris' });

