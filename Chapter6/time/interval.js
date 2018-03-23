const Rx = require('rxjs/Rx');

let stream$ = Rx.Observable.interval(1000);

// emits 0, 1, 2, 3 ... n with 1 second in between emits, til the end of time
stream$.subscribe(data => console.log(data));
