const Rx = require('rxjs/Rx');

let stream$ = Rx.Observable.interval(100)
  .take(3)
  .delay(500);

// 0 after 600 ms, 1 after 1200 ms, 2 after 1800 ms
stream$.subscribe(data => console.log(data));
