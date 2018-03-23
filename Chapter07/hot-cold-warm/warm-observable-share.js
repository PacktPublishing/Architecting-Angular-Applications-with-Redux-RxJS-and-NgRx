const Rx = require("rxjs/Rx");

let stream$ = Rx.Observable.create(observer => {
  let i = 0;
  let id = setInterval(() => {
    observer.next(i++);
  }, 400);

  return () => {
    clearInterval(id);
  };
}).share();

let sub0, sub;

// first subscription happens immediately
sub0 = stream$.subscribe(
  data => console.log("subscriber 0", data),
  err => console.error(err),
  () => console.log("completed")
);

// second subscription happens after 1 second
setTimeout(() => {
  sub = stream$.subscribe(
    data => console.log("subscriber 1", data),
    err => console.error(err),
    () => console.log("completed")
  );
}, 1000);

// everything is unscubscribed after 2 seconds
setTimeout(() => {
  sub0.unsubscribe();
  sub.unsubscribe();
}, 2000);
