import { Action } from '@ngrx/store';

export enum UserActionTypes {
  UserAction = '[User] Action'
}

export class User implements Action {
  readonly type = UserActionTypes.UserAction;
}

export type UserActions = User;
