import { Subject } from "./subject";
import { Observer } from "./observer";

const subject = new Subject();
const observer = <Observer>{
  update: () => console.log("First Observer Updated")
};

const observer2 = <Observer>{
  update: () => console.log("Second Observer updated")
};

subject.attach(observer);
subject.attach(observer2);
subject.notify();
