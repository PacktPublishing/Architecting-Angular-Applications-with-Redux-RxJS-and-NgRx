import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../app-state";

@Component({
  selector: "app-counter",
  templateUrl: "./counter.component.html",
  styleUrls: ["./counter.component.css"]
})
export class CounterComponent implements OnInit {
  counter$;

  constructor(private store: Store<AppState>) {
    this.counter$ = this.store.select(state => state.counter.data);
  }

  ngOnInit() {}

  increment() {
    this.store.dispatch({ type: "INCREMENT" });
  }

  decrement() {
    this.store.dispatch({ type: "DECREMENT" });
  }
}
