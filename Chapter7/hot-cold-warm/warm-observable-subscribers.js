const Rx = require("rxjs/Rx");

let warmStream = Rx.Observable.interval(1000)
  .take(3)
  .publish()
  .refCount();
let start = new Date();

setTimeout(() => {
  warmStream.subscribe(data => {
    console.log(`subscriber 1 - ${new Date() - start}`, data);
  });
}, 1000);

setTimeout(() => {
  warmStream.subscribe(data => {
    console.log(`subscriber 2 - ${new Date() - start}`, data);
  });
}, 3000);
