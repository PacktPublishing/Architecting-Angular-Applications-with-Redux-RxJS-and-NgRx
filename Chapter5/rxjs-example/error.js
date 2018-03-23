const Rx = require("rxjs/Rx");

let stream$ = Rx.Observable.create(observer => {
  observer.error("we have an error");
});

stream$.subscribe(
  data => console.log("data", data),
  error => console.error("err", error)
);
