import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";

@Injectable()
export class JedisEffects {
  constructor(private actions$: Actions) {}
}
