import { HttpClient } from '@angular/common/http';
import { catchError, map, mergeMap, delay, tap, switchMap } from 'rxjs/operators';
import { ActionPayload } from '../interfaces';
import { fetchProductsSuccessfully, fetchError, addProductSuccessfully, addProductError } from './product.actions';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductsHttpActions {
  constructor(private http: HttpClient) {}

  addProduct(action) {
    return this.http
      .post('products/', action.payload)
      .pipe(map(addProductSuccessfully), catchError(err => of(addProductError(err))));
  }

  fetchProducts() {
    return this.http
      .get('data/products.json')
      .pipe(delay(3000), map(fetchProductsSuccessfully), catchError(err => of(fetchError(err))));
  }
}
