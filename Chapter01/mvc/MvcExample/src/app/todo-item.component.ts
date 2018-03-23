import { Component, Input } from "@angular/core";

@Component({
  selector: "todo-item",
  template: `<h1>{{todo.title}}</h1>` // the view
})
export class TodoItemComponent {
  // the class
  @Input() todo;
}
