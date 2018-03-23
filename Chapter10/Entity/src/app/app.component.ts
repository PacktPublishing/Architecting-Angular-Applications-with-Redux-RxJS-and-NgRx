import { Component } from "@angular/core";
import { AppState } from "./app-state";
import { Store } from "@ngrx/store";
import { map } from "rxjs/operators";

@Component({
  selector: "app-root",
  template: `
    <div style="border: solid 1px black; padding: 10px;" *ngFor="let user of users$ | async">
      {{ user.name }}
      <!-- <button (click)="remove(user.id)" >Remove</button> -->
      <edit-user [user]="user" (save)="update($event)"  ></edit-user>
    </div>
    <div>
    <input [(ngModel)]="user" /> <button (click)="add()">Add</button>

    </div>
  `
})
export class AppComponent {
  title = "app";
  users$;
  user;
  id = 1;

  constructor(private store: Store<AppState>) {
    this.users$ = this.store
      .select(state => state.users.entities)
      .pipe(map(this.toArray));
    this.users$.subscribe(data => console.log("users", data));
  }

  toArray(obj) {
    const keys = Object.keys(obj);
    return keys.map(key => obj[key]);
  }

  add() {
    const newUser = { id: this.id++, name: this.user };
    this.store.dispatch({
      type: "ADD_USER",
      payload: newUser
    });
  }

  remove(id) {
    console.log("removing", id);
    this.store.dispatch({ type: "REMOVE_USER", payload: { id } });
  }

  update(user) {
    console.log("updating", user);
    this.store.dispatch({ type: "UPDATE_USER", payload: user });
  }
}
