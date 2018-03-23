import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/observable/of';

import { switchMap } from 'rxjs/operators';

import { FETCHING_PRODUCTS, ADD_PRODUCT } from './product.constants';
import { Product } from './product.model';
import { ActionPayload } from '../interfaces';
import { ProductsHttpActions } from './products-http.actions';

@Injectable()
export class ProductEffects {
  @Effect()
  productsAdd$: Observable<Action> = this.actions$.pipe(
    ofType(ADD_PRODUCT),
    switchMap(action => this.srv.addProduct(action))
  );

  @Effect()
  products$: Observable<Action> = this.actions$.pipe(
    ofType(FETCHING_PRODUCTS),
    switchMap(action => this.srv.fetchProducts())
  );

  constructor(private srv: ProductsHttpActions, private actions$: Actions<ActionPayload<Product>>) {}
}
