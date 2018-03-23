import { RouterState } from '@angular/router';

import { Jedi } from './jedi/jedi.model';
import { Product } from './products/product.model';
import { ProductsState } from './products/products.reducer';
import { TodoState } from './todo/reducer';
import { CounterState } from './counter/counter.reducer';

export interface AppState {
  counter: CounterState;
  todos: TodoState;
  jediList: Array<Jedi>;
  products: ProductsState;
  router: RouterState;
}
