import { NgModule } from "@angular/core";
import { JediListComponent } from "./jedi-list/jedi-list.component";
import { StoreModule } from "@ngrx/store";
import {
  jediListReducer,
  jediListReducers
} from "./jedi-list/jedi-list.reducer";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { Jedi } from "./jedi.model";
import { Action } from "@ngrx/store";

@NgModule({
  imports: [FormsModule, BrowserModule],
  exports: [JediListComponent],
  declarations: [JediListComponent],
  providers: []
})
export class JediModule {}
