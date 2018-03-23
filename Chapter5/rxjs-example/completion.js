const Rx = require("rxjs/Rx");

let stream$ = Rx.Observable.create(observer => {
  observer.next(1);
  observer.complete();
});

stream$.subscribe(
  data => console.log("data", data), // 1
  error => console.error("err", error), // never hit
  () => console.log("complete")
); // will be hit
