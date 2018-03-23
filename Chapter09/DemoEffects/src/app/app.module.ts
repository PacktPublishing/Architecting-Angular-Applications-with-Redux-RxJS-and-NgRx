import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";

import { AppComponent } from "./app.component";
import { StoreModule } from "@ngrx/store";
import { ProductModule } from "./product/product.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    EffectsModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
