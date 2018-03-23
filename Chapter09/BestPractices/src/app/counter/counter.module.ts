import { NgModule } from "@angular/core";

import { CounterComponent } from "./counter.component";
import { StoreModule } from "@ngrx/store";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  imports: [BrowserModule],
  exports: [CounterComponent],
  declarations: [CounterComponent],
  providers: []
})
export class CounterModule {}
