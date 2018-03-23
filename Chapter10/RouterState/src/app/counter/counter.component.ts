import { Component, OnInit } from '@angular/core';
import { AppState } from '../app-state';
import { Store } from '@ngrx/store';
import { Increment, Decrement } from './counter.actions';

@Component({
  selector: 'app-counter',
  template: `
  {{ counter$ | async }}
  <button (click)="increment()">Increment</button>
  <button (click)="decrement()">Decrement</button>
  `
})

export class CounterComponent{
  counter$;

  constructor(private store: Store<AppState>) {
    this.counter$ = store.select(state => state.counter.value);
  }

  increment() {
    this.store.dispatch(Increment());
  }

  decrement() {
    this.store.dispatch(Decrement());
  }
}
