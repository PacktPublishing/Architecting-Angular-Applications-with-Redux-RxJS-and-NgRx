// NGRX-light/storeIV.js

const Rx = require('rxjs');

class Store extends Rx.Subject {
  constructor() {
    super();
    this.dispatcher = new Rx.Subject();

    this.state = {};
    this.dispatcher.subscribe(data => {
      this.state = Object.assign({}, this.state, data);
      this.next(this.state);
    });
  }

  dispatch(newState) {
    this.dispatcher.next(newState);
  }
}

const store = new Store();
store.subscribe(data => console.log('store', data));

store.dispatch({ name: 'chris' });
store.dispatch({ address: 'London' });
