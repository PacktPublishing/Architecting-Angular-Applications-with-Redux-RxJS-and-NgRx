import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YodaComponent } from './yoda.component';

describe('YodaComponent', () => {
  let component: YodaComponent;
  let fixture: ComponentFixture<YodaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YodaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
