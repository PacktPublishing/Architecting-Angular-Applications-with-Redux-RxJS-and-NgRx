import { CounterState } from "./counter/counter.reducer";
import { Jedi } from "./jedi/jedi.model";

export interface AppState {
  counter: number;
  jedis: Array<Jedi>;
}
