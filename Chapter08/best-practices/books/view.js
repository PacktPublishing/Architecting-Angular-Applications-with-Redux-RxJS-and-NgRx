const { addBook } = require('./actions');

class View {
  constructor(store) {
    this.store = store;
  }

  addBook(title) {
    this.store.dispatch(addBook(title));
  }
}

module.exports = View;