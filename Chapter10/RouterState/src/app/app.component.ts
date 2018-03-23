import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from './app-state';

@Component({
  selector: 'app-root',
  template: `
  <app-counter></app-counter>
  <app-todos></app-todos>
  <jedi-list></jedi-list>
  <div>
    <a routerLink="/testing" routerLinkActive="active">Testing</a>
  </div>
  <div>
    <a routerLink="/products">Products</a>
  </div>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {
    store.select(state => state.router).subscribe(route => console.log('router obj', route));
  }

}
