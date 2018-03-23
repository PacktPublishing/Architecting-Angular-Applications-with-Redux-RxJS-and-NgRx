import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";

import { CounterComponent } from './counter.component';
import { StoreModule, Action, combineReducers, } from '@ngrx/store';

import { counterReducers } from './counter.reducer'
import { counterListReducers } from './counter-list.reducer';
import { CounterListComponent } from './counter-list.component';
import { ActionReducerMap } from '@ngrx/store/src/models';

const combinedReducers = { ...counterReducers, ...counterListReducers };

interface CombinedState {
  list: number[];
  value: number;
};

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.forFeature<CombinedState, Action>('counter', combinedReducers)
  ],
  exports: [CounterComponent, CounterListComponent],
  declarations: [CounterComponent, CounterListComponent],
  providers: [],
})
export class CounterModule { }
