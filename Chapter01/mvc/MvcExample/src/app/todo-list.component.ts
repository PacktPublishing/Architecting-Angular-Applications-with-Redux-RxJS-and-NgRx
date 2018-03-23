import { Component } from "@angular/core";

@Component({
  selector: "todo-list",
  template: `
  <h1>{{title}}</h1> <custom></custom>
  <div *ngFor="let todo of todos">
    <todo-item [todo]="todo" ></todo-item>
  </div>
  ` . // the view
})
export class TodoListComponent { // the controller class
  title: string;
  todos = [{
    title: "todo1"
  },
  {
    title: "todo1"
  }]
}
