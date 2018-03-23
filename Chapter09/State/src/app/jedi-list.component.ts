import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "./app-state";
import { Jedi } from "./jedi.model";
import { ADD_JEDI, REMOVE_JEDI, LOAD_JEDIS } from "./jedi.constants";

@Component({
  selector: "jedi-list",
  template: `
  <div *ngFor="let jedi of list$ | async">
    {{ jedi.name }}<button (click)="remove(jedi.id)" >Remove</button>
  </div>
  <input [(ngModel)]="newJedi" placeholder="" />
  <button (click)="add()">Add</button>
  <button (click)="clear()" >Clear</button>
 `
})
export class JediListComponent {
  list$;
  counter = 0;
  newJedi = "";

  constructor(private store: Store<AppState>) {
    this.list$ = store.select("jediList");
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
