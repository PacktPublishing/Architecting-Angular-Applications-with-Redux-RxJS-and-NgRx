import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './products.effect';
import { HttpClientModule } from '@angular/common/http';

import { ProductsComponent } from './products.component';
import { FormsModule } from '@angular/forms';
import { ProductsHttpActions } from './products-http.actions';
import { RouterModule } from '@angular/router';
import { ProductsDetailComponent } from './products-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    EffectsModule.forFeature([ProductEffects]),
    RouterModule.forChild([
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/:id',
        component: ProductsDetailComponent
      }
    ])
  ],
  exports: [ProductsComponent],
  declarations: [ProductsComponent, ProductsDetailComponent],
  providers: [ProductsHttpActions]
})
export class ProductsModule {}
