import { Component, OnInit } from '@angular/core';
import { AppState } from '../app-state';
import { Store } from '@ngrx/store';
import { addTodo } from './actions';

@Component({
  selector: 'app-todos',
  template: `
    todos
    <input [(ngModel)]="todo" placeholder="todo" >
    <button (click)="add()">Add</button>
    <div *ngFor="let todo of todos$ | async">
      {{ todo }}
    </div>
  `
})
export class TodosComponent implements OnInit {
  todos$;
  todo: string;

  constructor(private store: Store<AppState>) {
    this.todos$ = this.store.select( state => {
      return state.todos.list;
    });
  }

  ngOnInit() {}

  add() {
    const action = addTodo(this.todo);
    this.store.dispatch(action);
    this.todo = '';
  }
  remove() {}
}
