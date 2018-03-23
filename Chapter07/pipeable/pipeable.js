const Rx = require("rxjs/Rx");

const { map } =  require('rxjs/operators/map');
const { filter } = require('rxjs/operators/filter');
const { Observable } =  require('rxjs/Observable');

let stream = Observable.of(1,2);
stream.pipe(
  map(x => x + 1),
  filter(x => x > 1)
)
.subscribe(x => console.log('piped', x));
