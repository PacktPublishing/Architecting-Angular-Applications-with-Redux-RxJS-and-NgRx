import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./app-state";
import { INCREMENT, DECREMENT } from "./constants";

@Component({
  selector: "app-root",
  template: `
  counter: {{ counter$ | async  }}
  <button (click)="increase()">Increase</button>
  <button (click)="decrease()">Decrease</button>
  `
})
export class AppComponent {
  title = "app";
  counter$;

  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select("counter");
  }

  increase() {
    this.store.dispatch({ type: INCREMENT });
  }

  decrease() {
    this.store.dispatch({ type: DECREMENT });
  }
}
