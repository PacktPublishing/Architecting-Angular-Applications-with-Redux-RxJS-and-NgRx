import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { CategoryEffects } from './category.effects';

describe('CategoryService', () => {
  let actions$: Observable<any>;
  let effects: CategoryEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CategoryEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(CategoryEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
