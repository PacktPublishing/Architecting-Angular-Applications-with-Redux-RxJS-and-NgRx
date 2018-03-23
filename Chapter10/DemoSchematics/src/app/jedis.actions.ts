import { Action } from '@ngrx/store';

export enum JedisActionTypes {
  JedisAction = '[Jedis] Action'
}

export class Jedis implements Action {
  readonly type = JedisActionTypes.JedisAction;
}

export type JedisActions = Jedis;
