import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import * as fromCountry from "../reducers";

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("country", fromCountry.reducers, {
      metaReducers: fromCountry.metaReducers
    })
  ],
  declarations: []
})
export class CountryModule {}
