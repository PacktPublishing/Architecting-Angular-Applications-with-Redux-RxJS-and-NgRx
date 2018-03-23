const Rx = require('rxjs/Rx');

let firstStream$ = Rx.Observable.interval(500).take(3);

let secondStream$ = Rx.Observable.interval(500).take(5);

let combinedStream$ = Rx.Observable.combineLatest(firstStream$, secondStream$);

// emits [0, 0] [1,1] [2,2] [2,3] [2,4] [2,5]
combinedStream$.subscribe(data => console.log(data));
