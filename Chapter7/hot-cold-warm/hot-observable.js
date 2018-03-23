const Rx = require("rxjs/Rx");

let start = new Date();
let stream = Rx.Observable.interval(1000)
  .take(5)
  .publish();

setTimeout(() => {
  stream.subscribe(data => {
    console.log(`subscriber 1 ${new Date() - start}`, data);
  });
}, 2000);

setTimeout(() => {
  stream.subscribe(data => {
    console.log(`subscriber 2 ${new Date() - start}`, data);
  });
}, 3000);

stream.connect();
stream.subscribe(data =>
  console.log(`subscriber 0 - I was here first ${new Date() - start}`, data)
);
