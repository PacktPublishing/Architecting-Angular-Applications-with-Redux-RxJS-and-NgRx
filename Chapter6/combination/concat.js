const Rx = require('rxjs/Rx');

let firstStream$ = Rx.Observable.of(1, 2, 3, 4);
let secondStream$ = Rx.Observable.of(5, 6, 7, 8);

let concatStream$ = Rx.Observable.concat(firstStream$, secondStream$);

concatStream$.subscribe(data => console.log(data));
