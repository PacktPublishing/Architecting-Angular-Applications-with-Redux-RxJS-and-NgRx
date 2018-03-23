const Rx = require("rxjs/Rx");

let stream$ = Rx.Observable.create(observer => {
  let counter = 0;
  let id = setInterval(() => observer.next(counter++), 1000);

  return function cleanUpFn() {
    clearInterval(id);
  };
});

let subscription = stream$.subscribe(data => console.log("data"));
setTimeout(() => subscription.unsubscribe(), 2000);
