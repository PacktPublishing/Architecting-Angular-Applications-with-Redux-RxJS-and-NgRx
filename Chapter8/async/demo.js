const { fetchBookLoading, fetchBookSuccess, fetchBookError } = require('./book-actions');
const { dispatch, getState } = require('./redux');


function fetchBook() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ title: 'A new hope - the book' });
    }, 1000);
  })  
}

console.log(getState());
dispatch(fetchBookLoading());
console.log(getState());

async function main() {
   try {
    const book = await fetchBook();
    dispatch(fetchBookSuccess(book));
    console.log(getState());
   } catch(err) {
    dispatch(fetchBookError(err));
    console.log(getState());
   }
}

main();








