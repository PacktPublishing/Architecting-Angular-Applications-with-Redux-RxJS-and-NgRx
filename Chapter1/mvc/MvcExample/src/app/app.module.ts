import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ContainerComponent } from "./container.component";
import { ExampleComponent } from "./example.component";
import { MyModule } from "./my/my.module";
import { TodoItemComponent } from "./todo-item.component";
import { TodoListComponent } from "./todo-list.component";

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    ExampleComponent,
    TodoItemComponent,
    TodoListComponent
  ],
  imports: [BrowserModule, MyModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
