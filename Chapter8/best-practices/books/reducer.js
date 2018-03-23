const { registerReducer } = require('../root-reducer');

let initialState = [];

function bookReducer(state = initialState, action) {
  switch(action.type) {
    case 'LIST_BOOKS':
      return state;
    case 'ADD_BOOK':
      return [...state, {...action.payload}];
  }
}

registerReducer({ books: bookReducer });
