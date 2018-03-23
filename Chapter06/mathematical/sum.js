const Rx = require('rxjs/Rx');

let stream = Rx.Observable.of(1, 2, 3, 4).reduce((acc, curr) => acc + curr);

// emits 10
stream.subscribe(data => console.log(data));
