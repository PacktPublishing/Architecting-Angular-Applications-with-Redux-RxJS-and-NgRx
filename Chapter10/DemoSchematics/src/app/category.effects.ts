import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { CategoryActions, CategoryActionTypes } from './category.actions';

@Injectable()
export class CategoryEffects {

  @Effect()
  effect$ = this.actions$.ofType(CategoryActionTypes.CategoryAction);

  constructor(private actions$: Actions) {}
}
