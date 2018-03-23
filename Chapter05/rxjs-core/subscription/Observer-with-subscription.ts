import { MyObserver } from "./Observer";

interface Subscription {
  unsubscribe();
}

class MyObservableWithSubscription {
  static create(behaviourFn): MyObservableWithSubscription {
    return new MyObservableWithSubscription(behaviourFn);
  }
  constructor(private behaviourFn) {}

  subscribe(dataFn): Subscription {
    let observer = new MyObserver(dataFn);
    let cleanUpFn = this.behaviourFn(observer);
    return {
      unsubscribe: cleanUpFn
    };
  }
}

let streamWithSubscription$ = MyObservableWithSubscription.create(observer => {
  let counter = 0;
  let id = setInterval(() => observer.next(counter++), 1000);
  return function cleanUpFn() {
    clearInterval(id);
  };
});

const subscription = streamWithSubscription$.subscribe(data =>
  console.log("data", data)
);
subscription.unsubscribe();
