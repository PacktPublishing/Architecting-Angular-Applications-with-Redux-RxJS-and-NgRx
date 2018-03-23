import { Observer } from "./observer";

export class Subject {
  observers: Array<Observer>;
  constructor() {
    this.observers = new Array<Observer>();
  }

  attach(observer: Observer) {
    if (this.observers.indexOf(observer) === -1) {
      this.observers.push(observer);
    }
  }

  detach(observer) {
    let index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers = this.observers.slice(index, 1);
    }
  }

  notify() {
    this.observers.forEach(observer => observer.update());
  }
}
