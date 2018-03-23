import { Component, OnInit } from "@angular/core";
import { AppState } from "../app-state";
import { Store } from "@ngrx/store";
import { INCREMENT, DECREMENT } from "./counter.constant";
import { increment, decrement } from "./counter.action";

@Component({
  selector: "app-counter",
  template: `
  {{ counter$ | async }}
  <button (click)="increase()">Increase</button>
  <button (click)="decrease()">Descrease</button>
  `
})
export class CounterComponent implements OnInit {
  counter$;

  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select("counter");
  }

  ngOnInit() {}

  increase() {
    this.store.dispatch(increment());
  }

  decrease() {
    this.store.dispatch(decrement());
  }
}
