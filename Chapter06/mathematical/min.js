const Rx = require('rxjs/Rx');

let streamOfValues$ = Rx.Observable.of(1, 2, 3, 4).min();

// emits 1
streamOfValues$.subscribe(data => console.log(data));
