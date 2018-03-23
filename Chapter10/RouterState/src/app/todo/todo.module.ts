import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodosComponent } from './todos-component';
import { FormsModule } from '@angular/forms';
import { StoreModule, Action } from '@ngrx/store';
import { reducers, TodoState } from './reducer';
import { ActionReducerMap, ActionReducer } from '@ngrx/store/src/models';
import { ActionPayload } from '../interfaces';

function someReducer(state ={}, action:Action){
  switch(action.type) {
    default:
      return false;
  }
}

interface SomeState {
  loading: boolean;
};

const someMap: ActionReducerMap<SomeState> = {
  loading: someReducer
};


function listReducer(state = [], action:ActionPayload<string>) {
  switch(action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]
    default:
      return state;
  }
}

const reducerMap = {
  list: listReducer
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forFeature('todos', reducerMap)
    // StoreModule.forFeature<TodoState, Action>('todos', reducers)
  ],
  exports: [TodosComponent],
  declarations: [TodosComponent],
  providers: []
})
export class TodoModule {}
