import { Action } from "@ngrx/store";

export interface ActionPayload<T> extends Action {
  payload: T;
}
