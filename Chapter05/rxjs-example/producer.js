const Rx = require("rxjs/Rx");

class Producer {
  constructor() {
    this.counterMax = 5;
    this.current = 0;
  }

  hasValues() {
    return this.current < this.counterMax;
  }
  next() {
    return this.current++;
  }
}

let stream$ = Rx.Observable.create(observer => {
  let producer = new Producer();
  while (producer.hasValues()) {
    observer.next(producer.next());
  }
});

stream$.subscribe(data => console.log("data", data));
// data 0, data 1, data 2, data 3, data 4
