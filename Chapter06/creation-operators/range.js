const Rx = require('rxjs/Rx');

const stream$ = Rx.Observable.range(1, 10);

stream$.subscribe(data => console.log(data));
// emits 1... 99
