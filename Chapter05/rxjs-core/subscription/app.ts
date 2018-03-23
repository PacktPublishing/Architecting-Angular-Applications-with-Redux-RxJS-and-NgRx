import { MyObservable } from "./Observer";

const corestream$ = MyObservable.create(observer => observer.next(1));
// 1

corestream$.subscribe(data => console.log("data", data));
