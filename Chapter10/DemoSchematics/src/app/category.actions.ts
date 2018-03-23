import { Action } from '@ngrx/store';

export enum CategoryActionTypes {
  CategoryAction = '[Category] Action'
}

export class Category implements Action {
  readonly type = CategoryActionTypes.CategoryAction;
}

export type CategoryActions = Category;
