const Rx = require('rxjs/Rx');

let promiseStream = Rx.Observable.from(new Promise(resolve => resolve("data")));

let stream = Rx.Observable.interval(500).take(3);
let stream2 = Rx.Observable.interval(500).take(5);

// instance method version of merge(), emits 0,0, 1,1 2,2 3, 4
stream.merge(stream2).subscribe(data => console.log("merged", data));

// static version of merge(), emits 0,0, 1,1, 2, 2, 3, 4 and 'data'
Rx.Observable.merge(stream, stream2, promiseStream).subscribe(data =>
  console.log("merged static", data)
);
