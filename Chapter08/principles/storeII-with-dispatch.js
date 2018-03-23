class Store {
  constructor() {
    this.state = {
      jedis: [],
      selectedJedi: null
    }
  }

  getState() {
    return this.state;
  }

  dispatch(action) {
    // to be implemented in later sections
  }
}

// the action
let action = {
  type: 'LOAD_JEDIS',
  payload:[
    { name: 'Yoda', id: 1 },
    { name: 'Palpatine', id: 2 },
    { name: 'Darth Vader', id: 3 }
  ]
}

// dispatching the action, producing a new state
store.dispatch(action);

console.log(store.getState());
// state should now be
/*
{
  jedis : [
    { name: 'Yoda', id: 1 },
    { name: 'Palpatine', id: 2 },
    { name: 'Darth Vader', id: 3 }
  ],
  selectedJedi: null
}
