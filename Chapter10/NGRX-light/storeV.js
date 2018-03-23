// NGRX-light/storeV.js

const Rx = require('rxjs');

class Store extends Rx.Subject {
  constructor() {
    super();
    this.dispatcher = new Rx.Subject();
    this.state = {};
    this.dispatcher
      .scan((acc, curr) => ({ ...acc, ...curr }))
      .subscribe(data => this.next(data));
  }

  dispatch(newState) {
    this.dispatcher.next(newState);
  }
}

const store = new Store();
store.subscribe(data => console.log('store', data));

store.dispatch({ name: 'chris' });
store.dispatch({ address: 'London' });
