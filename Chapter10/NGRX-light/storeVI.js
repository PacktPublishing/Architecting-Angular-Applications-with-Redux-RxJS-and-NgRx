// NGRX-light/storeVI.js

const Rx = require('rxjs');

function counterReducer(state = 0, action) {
  switch(action.type) {
    case "INCREMENT":
      return state + 1;
    default:
      return state;
  }
}

function productsReducer(state = [], action) {
  switch(action.type) {
    case 'ADD_PRODUCT':
      return [ ...state, Object.assign({}, action.payload) ]
    default:
      return state;
  }
}


class Store extends Rx.BehaviorSubject {
  constructor() {
    super({ counter: 0, products: [] });
    this.dispatcher = new Rx.Subject();
    this.state = {};
    this.dispatcher
      .scan((acc, curr) => ({ ...acc, ...curr }))
      .subscribe(data => this.next(data));
  }

  calcState(state, action) {
    return {
      counter: counterReducer(state.counter, action),
      products: productsReducer(state.products, action)
    }
  }

  dispatch(action) {
    const newState = this.calcState(this.value, action);

    this.dispatcher.next(newState);
  }
}

const store = new Store();
store.subscribe(data => console.log('store', data));

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'ADD_PRODUCT', payload: { id: 1, name: 'Yoda' } });
