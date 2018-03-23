import { MyObserver } from "./Observer";

class MyObservable {
  behaviorFn;

  static create(behaviourFn): MyObservable {
    return new MyObservable(behaviourFn);
  }

  constructor(behaviorFn) {
    this.behaviorFn = behaviorFn;
  }

  filter(filterFn): FilterableObservable {
    return new FilterableObservable(filterFn, this.behaviorFn);
  }

  subscribe(dataFn) {
    let observer = new MyObserver(dataFn);
    let cleanUpFn = this.behaviorFn(observer);
    return {
      unsubscribe: cleanUpFn
    };
  }
}

export class FilterableObservable extends MyObservable {
  constructor(private filterFn, behaviourFn) {
    super(behaviourFn);
  }

  subscribe(dataFn) {
    let observer = new MyObserver(dataFn);

    observer.next = value => {
      if (this.filterFn(value)) {
        dataFn(value);
      }
    };

    let cleanUpFn = this.behaviorFn(observer);
    return {
      unsubscribe: cleanUpFn
    };
  }
}

const stream$ = new MyObservable(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
}).filter(x => x > 2);

stream$.subscribe(data => console.log("data", data));
