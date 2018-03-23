const bookReducer = require('./book-reducer');
const EventEmitter = require('events');
const emitter = new EventEmitter();

let state = {
  book: {}
};

function store(state = {}, action) {
  return {
    book: bookReducer(state.book, action)
  };
}

function getState() {
  return state;
}

function dispatch(action) {
   const oldState = state;
   state = store(state, action);
   emitter.emit('changed'); 
}

function select(slice) {
  return state[slice];
}

function subscribe(cb) {
  emitter.on('changed', cb);
}

module.exports = {
  getState, dispatch, select, subscribe
}