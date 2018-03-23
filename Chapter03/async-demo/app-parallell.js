const async = require('async');

function getMessages(fn) {
  setTimeout(() => {
    fn(null,['mess1', 'mess2', 'mess3']);
  }, 3000);
}

function getOrders(fn) {
  setTimeout(() => {
    fn(null, ['order1', 'order2', 'order3']);
  }, 5000);
}

async.parallel([
  getMessages,
  getOrders
],(error, results) => {
  if(error) {
    console.log('error', error);
  } else {
    console.log('results', results);
  }

});
