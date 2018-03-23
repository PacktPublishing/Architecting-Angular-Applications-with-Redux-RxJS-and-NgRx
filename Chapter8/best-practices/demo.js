const { createStore } = require('./redux');
const { getRootReducer } = require('./root-reducer');

// registering reducer
const { BookView } = require('./books');

const store = createStore(getRootReducer());

console.log('store', store.getState());

const bookView = new BookView(store);
bookView.addBook('my book');

console.log('store', store.getState());


