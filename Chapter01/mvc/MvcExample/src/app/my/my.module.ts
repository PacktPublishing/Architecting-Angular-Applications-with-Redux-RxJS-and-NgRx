import { NgModule } from "@angular/core";

import { MyComponent } from "./my.component";
import { MyPipe } from "./my.pipe";

@NgModule({
  imports: [],
  exports: [MyComponent],
  declarations: [MyComponent, MyPipe],
  providers: []
})
export class MyModule {}
