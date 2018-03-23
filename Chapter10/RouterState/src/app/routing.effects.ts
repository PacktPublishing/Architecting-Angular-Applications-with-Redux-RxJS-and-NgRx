import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { map, tap, switchMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';

import { PRODUCTS, RoutingAction } from './routing.constants';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RoutingEffects {
  @Effect({ dispatch: false })
  gotoProducts$ = this.actions$.ofType(PRODUCTS).pipe(
    tap(action => {
      this.router.navigate([action.payload.url]);
    })
  );

  @Effect({ dispatch: false })
  locationUpdate$: Observable<Action> = this.actions$.ofType('ROUTER_NAVIGATION').pipe(
    tap((action: any) => {
      console.log('router navigation effect', action);
    })
  );

  constructor(private router: Router, private actions$: Actions<RoutingAction>) {}
}
