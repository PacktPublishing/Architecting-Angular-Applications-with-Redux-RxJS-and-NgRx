import { Component } from "@angular/core";

// decorator function
@Component({
  selector: "container-component",
  template: `
  <h1>{{title}}</h1> <custom></custom>
  `. // the view
})
export class ContainerComponent { // the class
  title: string;
}
