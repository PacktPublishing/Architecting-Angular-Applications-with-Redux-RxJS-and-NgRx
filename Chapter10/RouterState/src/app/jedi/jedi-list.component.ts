import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import { AppState } from "../app-state";
import { Jedi } from "./jedi.model";
import { addJedi, removeJedi, loadJedis } from './list.actions';

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
  list$: Observable<Array<Jedi>>;
  counter = 0;
  newJedi = "";

  constructor(private store: Store<AppState>) {
    this.list$ = store.select("jediList");
  }

  add() {
    this.store.dispatch(addJedi(this.newJedi));
    this.newJedi = '';
  }

  remove(id) {
    this.store.dispatch(removeJedi(id));
  }

  clear() {
    this.store.dispatch(loadJedis([]));
    this.counter = 0;
  }
}
