import { NgModule } from "@angular/core";

import { ProductComponent } from "./product.component";
import { BrowserModule } from "@angular/platform-browser";
import { ProductEffects } from "./product.effect";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule, Action } from "@ngrx/store";
import { ProductReducers } from "./product.reducer";
import { HttpClientModule } from "@angular/common/http";
import { ActionReducerMap } from "@ngrx/store/src/models";

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forFeature("featureProducts", ProductReducers),
    EffectsModule.forFeature([ProductEffects]),
    HttpClientModule
  ],
  exports: [ProductComponent],
  declarations: [ProductComponent],
  providers: []
})
export class ProductModule {}
