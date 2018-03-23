const Rx = require('rxjs');
const { Subject, BehaviorSubject } = Rx;


const countReducer = (state, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    default:
      return state;
  }
}

const productsReducer = (state, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

const storeCalc = (state, action) => {
  return {
    counter: countReducer(state.counter, action),
    products: productsReducer(state.products, action)
  }
};

class Store extends BehaviorSubject {
  constructor(initialState = {}) {
    super(initialState);
    this.listenerMap = {};

    this.dispatcher = new Subject();
    this.dispatcher
    .scan((acc, value) =>({ ...acc, ...value }))
    .subscribe(state => super.next(state));
  }

  dispatch(newState) {
    this.dispatcher.next(newState);
  }

  betterDispatch(action) {
    console.log('dispatching action', action.type);

    // console.log('current state', this.getValue());
    const newState = storeCalc(this.getValue(),action);
    this.dispatcher.next(newState);
    if(this.listenerMap[action.type]) {
      this.listenerMap[action.type].forEach(listener => {
        listener(this.betterDispatch.bind(this),action);
      });
    }
  }

  select(key) {
    return this.map( state => state[key]);
  }

  selectWithFn(fn) {
    return this.map(fn);
  }

  effect(listenToAction, listener) {
    if(!this.listenerMap.hasOwnProperty(listenToAction)) {
      this.listenerMap[listenToAction] = [];
    }

    this.listenerMap[listenToAction].push( listener );
  }
}

function getUser() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ name: 'chris' })
    }, 2000);
  })
}

function getProducts() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(['DVD', 'VHS'])
    }, 3000);
  })
}

let store = new Store();
store.subscribe(data => console.log('state class', data));
store.select('counter').subscribe(data => console.log('store select', data));
store.effect('DECREMENT', async(dispatch, action) => {
  // side effect, do AJAX
  const user = await getUser();
  console.log('user', user);
  const products = await getProducts();
  console.log('products', products);
  console.log('EFFECT', action);
  dispatch({type: 'INCREMENT'});
});

store.dispatch({ counter: 1, products: [] });

store.dispatch({ counter: 2, products: [] });

store.betterDispatch({ type: 'INCREMENT' });
store.betterDispatch({ type: 'DECREMENT' });


let stream = Rx.Observable.of(1,2,3);
stream.subscribe(data => console.log(data));
