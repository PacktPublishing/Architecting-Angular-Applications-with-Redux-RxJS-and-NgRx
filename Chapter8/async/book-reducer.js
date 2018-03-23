let initialState = {
  loading: false,
  data: void 0,
  error: void 0
};

function bookReducer(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_BOOK_LOADING':
      return { ...state, loading: true  };
    case 'FETCH_BOOK_SUCCESS':
      return {...state, loading: false, data: action.payload };
    case 'FETCH_BOOK_ERROR':
      return { ...state, loading: false, error: action.payload };
  }
}

module.exports = bookReducer;