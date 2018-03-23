import { Component, OnInit } from '@angular/core';
import { AppState } from '../app-state';
import { Store } from '@ngrx/store';
import { fetchProducts, addProduct } from './product.actions';
import { getList, isLoading, getError } from './products.selectors';

@Component({
  selector: 'app-products',
  template: `
  <div>
    <input [(ngModel)]="newProduct" placeholder="new product..." />
    <button (click)="addNewProduct()">Add product</button>
  </div>
  <div *ngFor="let product of products$ | async">
  Product: {{ product.name }}
  </div>
  <div *ngIf="loading$ | async; let loading">
    <div *ngIf="loading">
      loading...
    </div>
  </div>
  <div *ngIf="error$ | async; let error">
    {{ error }}
  </div>
  `
})
export class ProductsComponent implements OnInit {
  products$;
  loading$;
  error$;
  newProduct: string;

  constructor(private store: Store<AppState>) {
    this.products$ = this.store.select(getList);
    this.loading$ = store.select(isLoading);
    this.error$ = store.select(getError);
  }

  ngOnInit() {
    this.store.dispatch(fetchProducts());
  }

  addNewProduct() {
    this.store.dispatch(addProduct(this.newProduct));
  }
}
