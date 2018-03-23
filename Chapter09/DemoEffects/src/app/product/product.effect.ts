import { Actions, Effect, ofType } from "@ngrx/effects";
import { HttpClient } from "@angular/common/http";
import { FETCHING_PRODUCTS } from "./product.constants";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { delay, map, catchError, switchMap } from "rxjs/operators";
import { fetchProductsSuccessfully, fetchError } from "./product.actions";
import { Action } from "@ngrx/store";
import { of } from "rxjs/observable/of";

@Injectable()
export class ProductEffects {
  @Effect()
  products$: Observable<Action> = this.actions$.pipe(
    ofType(FETCHING_PRODUCTS),
    switchMap(action =>
      this.http
        .get("data/products.json")
        .pipe(
          delay(3000),
          map(fetchProductsSuccessfully),
          catchError(err => of(fetchError(err)))
        )
    )
  );

  constructor(private actions$: Actions<Action>, private http: HttpClient) {
    console.log("product effects init");
  }
}
