import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CounterListComponent } from "./counter-list.component";

describe("CounterListComponent", () => {
  let component: CounterListComponent;
  let fixture: ComponentFixture<CounterListComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [CounterListComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
