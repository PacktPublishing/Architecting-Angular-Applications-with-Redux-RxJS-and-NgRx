class Observable {
  behaviorFn;

  constructor(behaviorFn) {
    this.behaviorFn = behaviorFn;
  }

  static bindCallback(behaviorFn): Function {
    return (): Observable => {
      return new Observable(behaviorFn);
    };
  }

  subscribe(dataCb) {
    this.behaviorFn(dataCb);
  }
}

let fn = Observable.bindCallback(cb => {
  setTimeout(() => cb("data"), 3000);
});

const stream$ = fn();
stream$.subscribe(data => console.log("data", data));
