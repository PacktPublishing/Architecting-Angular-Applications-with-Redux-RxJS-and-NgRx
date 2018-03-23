import { BrowserModule } from '@angular/platform-browser';

import { NgModule, Injectable } from '@angular/core';

import { StoreModule, Action, combineReducers, compose } from '@ngrx/store';

import { AppComponent } from './app.component';
import { TodoModule } from './todo/todo.module';
import { todosReducer, reducers } from './todo/reducer';

import { JediModule } from './jedi/jedi.module';
import { jediListReducer } from './jedi/list.reducer';

import { productsReducer } from './products/products.reducer';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductsModule } from './products/products.module';

import { StoreRouterConnectingModule, routerReducer, RouterStateSerializer } from '@ngrx/router-store';
import { RouterModule } from '@angular/router';
import { TestingComponent } from './testing.component';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { EffectsModule } from '@ngrx/effects';
import { RoutingEffects } from './routing.effects';
import { MySerializer } from './my-serializer';
import { ActionReducerMap } from '@ngrx/store/src/models';
import { CounterModule } from './counter/counter.module';

@NgModule({
  declarations: [AppComponent, TestingComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      jediList: jediListReducer,
      products: productsReducer,
      router: routerReducer
    }),
    EffectsModule.forRoot([RoutingEffects]),
    RouterModule.forRoot([{ path: 'testing', component: TestingComponent }]),
    StoreRouterConnectingModule.forRoot({
      stateKey: 'router' // name of reducer key
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    TodoModule,
    JediModule,
    ProductsModule,
    CounterModule
  ],
  providers: [{ provide: RouterStateSerializer, useClass: MySerializer }],
  bootstrap: [AppComponent]
})
export class AppModule {}
