import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "../../app-state";
import { Jedi } from "../jedi.model";
import { ADD_JEDI, REMOVE_JEDI, LOAD_JEDIS } from "./jedi-list.constants";

@Component({
  selector: "app-jedi-list",
  template: `
  <div>
    <input [(ngModel)]="newJedi" placeholder="" />
    <button (click)="add()">Add</button>
    <button (click)="clear()" >Clear</button>
  </div>
  <div *ngFor="let jedi of list$ | async">
    {{ jedi.name }}<button (click)="remove(jedi.id)" >Remove</button>
  </div>

 `
})
export class JediListComponent {
  list$;
  counter = 0;
  newJedi = "";

  constructor(private store: Store<AppState>) {
    this.list$ = store.select("jedis");
  }

  add() {
    this.store.dispatch({
      type: ADD_JEDI,
      payload: { id: this.counter++, name: this.newJedi }
    });
    this.newJedi = "";
  }

  remove(id) {
    this.store.dispatch({ type: REMOVE_JEDI, payload: { id } });
  }

  clear() {
    this.store.dispatch({ type: LOAD_JEDIS, payload: [] });
    this.counter = 0;
  }
}
