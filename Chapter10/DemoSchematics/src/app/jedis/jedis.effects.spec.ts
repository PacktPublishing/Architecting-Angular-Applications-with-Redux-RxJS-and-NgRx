import { TestBed, inject } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { Observable } from "rxjs/Observable";

import { JedisEffects } from "./jedis.effects";

describe("JedisService", () => {
  let actions$: Observable<any>;
  let effects: JedisEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JedisEffects, provideMockActions(() => actions$)]
    });

    effects = TestBed.get(JedisEffects);
  });

  it("should be created", () => {
    expect(effects).toBeTruthy();
  });
});
