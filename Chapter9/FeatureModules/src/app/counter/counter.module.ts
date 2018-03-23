import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CounterComponent } from "./counter.component";
import { StoreModule, ActionReducerMap } from "@ngrx/store";
import { counterReducer } from "./counter.reducer";
import { CounterListComponent } from "./counter-list/counter-list.component";
import { Counter } from "./counter-list/counter.model";
import { counterListReducer } from "./counter-list/counter-list.reducer";
import { FormsModule } from "@angular/forms";

export interface CounterState {
  data: number;
  list: Array<Counter>;
}

const combinedReducers: ActionReducerMap<CounterState> = {
  data: counterReducer,
  list: counterListReducer
};

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("counter", combinedReducers),
    FormsModule
  ],
  declarations: [CounterComponent, CounterListComponent],
  exports: [CounterComponent, CounterListComponent]
})
export class CounterModule {}
