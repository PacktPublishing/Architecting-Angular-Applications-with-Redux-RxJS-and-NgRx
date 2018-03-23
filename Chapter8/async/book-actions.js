const fetchBookLoading = () => ({ type: 'FETCH_BOOK_LOADING' });
const fetchBookSuccess = (data) => ({ type: 'FETCH_BOOK_SUCCESS', payload: data });
const fetchBookError = (error) => ({ type: 'FETCH_BOOK_ERROR', payload: error });

module.exports = {
  fetchBookLoading,
  fetchBookSuccess,
  fetchBookError
};