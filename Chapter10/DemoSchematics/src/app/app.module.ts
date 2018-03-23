import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { reducers, metaReducers, reducers, metaReducers } from "./reducers";
import { environment } from "../environments/environment";
import { EffectsModule } from "@ngrx/effects";
import { AppEffects } from "./app.effects";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { JedisComponent } from "./jedis/jedis.component";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

@NgModule({
  declarations: [AppComponent, TodoListComponent, JedisComponent],
  imports: [
    BrowserModule,
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
