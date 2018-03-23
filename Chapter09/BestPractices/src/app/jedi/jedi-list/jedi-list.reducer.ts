import { ADD_JEDI, REMOVE_JEDI, LOAD_JEDIS } from "./jedi-list.constants";
import { Jedi } from "../jedi.model";
import { ActionReducerMap } from "@ngrx/store/src/models";
import { Action } from "@ngrx/store";
import { ActionPayload } from "../../interfaces";

export interface JediState {
  list: Array<Jedi>;
}

export const jediListReducers: ActionReducerMap<JediState> = {
  list: jediListReducer
};

export function jediListReducer(state = [], action: ActionPayload<any>) {
  switch (action.type) {
    case ADD_JEDI:
      return [...state, { ...action.payload }];
    case REMOVE_JEDI:
      return state.filter(jedi => jedi.id !== action.payload.id);
    case LOAD_JEDIS:
      return action.payload.map(jedi => ({ ...jedi }));
    default:
      return state;
  }
}
