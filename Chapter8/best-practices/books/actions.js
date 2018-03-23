const addBook = (title) => ({ type: 'ADD_BOOK', payload: { title }  }); 

module.exports = {
  addBook
}