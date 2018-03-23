import { Component, OnInit } from "@angular/core";
import { AppState } from "../app-state";
import { Store } from "@ngrx/store";
import { fetchProducts } from "./product.actions";
import { FETCHING_PRODUCTS } from "./product.constants";
import { getList, isLoading, getError } from "./product.selector";

@Component({
  selector: "products",
  template: `
    Products:
    <div *ngFor="let product of products$ | async">
      Product: {{ product.name }}
    </div>
    <div *ngIf="loading$ | async; let loading">
      <div *ngIf="loading">
      loading...
      </div>
    </div>
    <div *ngIf="error$ | async; let error" >
      <div *ngIf="error">{{ error }}</div>
    </div>
`
})
export class ProductComponent implements OnInit {
  products$;
  loading$;
  error$;

  constructor(private store: Store<AppState>) {
    this.products$ = this.store.select(getList);
    this.loading$ = this.store.select(isLoading);
    this.error$ = this.store.select(getError);
  }

  ngOnInit() {
    this.store.dispatch(fetchProducts());
  }
}
