import { Component } from "@angular/core";

// decorator function
@Component({
  selector: "custom",
  template: `<h1>{{title}}</h1>`. // the view
})
export class ExampleComponent { // the class
  title: string;
}
