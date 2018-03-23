export class MyObserver {
  constructor(private dataFn) {}
  next(value) {
    this.dataFn(value);
  }
}

export class MyObservable {
  static create(behaviourFn): MyObservable {
    return new MyObservable(behaviourFn);
  }
  constructor(private behaviourFn) {}
  subscribe(dataFn) {
    let observer = new MyObserver(dataFn);
    this.behaviourFn(observer);
  }
}
