import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JedisComponent } from './jedis.component';
import { Store, StoreModule } from '@ngrx/store';

describe('JedisComponent', () => {
  let component: JedisComponent;
  let fixture: ComponentFixture<JedisComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ JedisComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JedisComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
