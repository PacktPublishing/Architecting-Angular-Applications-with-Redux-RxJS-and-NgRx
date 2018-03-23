// NGRX-light/storeVIII.js

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
      return [ ...state, Object.assign({}, action.payload) ];
    case 'LOAD_PRODUCTS':
      return action.payload.map(p => Object.assign({}, p));
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

  select(slice) {
    return this.map(state => state[slice]);
  }

  effect(fn) {
    fn(this.dispatch.bind(this));
  }
}

const store = new Store();
store
  .select('products')
  .subscribe(data => console.log('store using select', data));

store.subscribe(data => console.log('store', data));

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'ADD_PRODUCT', payload: { id: 1, name: 'Yoda' } });


const getProducts = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([{ id: 1, name: "Vader" }]);
    }, 3000);
  })
}

store.effect(async(dispatch) => {
  const products = await getProducts();
  dispatch({ type: 'LOAD_PRODUCTS', payload: products });
})
