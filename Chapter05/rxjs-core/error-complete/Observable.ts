import { Observer } from "./Observer";

class Observable {
  behaviourFn;

  static create(behaviourFn): Observable {
    return new Observable(behaviourFn);
  }

  constructor(behaviourFn) {
    this.behaviourFn = behaviourFn;
  }

  subscribe(dataFn, errorFn, completeFn) {
    let observer = new Observer(dataFn, errorFn, completeFn);
    let cleanUpFn = this.behaviourFn(observer);

    return {
      unsubscribe: cleanUpFn
    };
  }
}

const stream$ = new Observable(observer => {
  observer.next(1);
  observer.error("error");
  observer.next(2);
});

stream$.subscribe(
  data => console.log("data", data),
  err => console.log("error", err),
  () => console.log("completed")
);
