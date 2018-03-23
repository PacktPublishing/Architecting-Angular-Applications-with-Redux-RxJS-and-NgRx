import { ADD_JEDI, REMOVE_JEDI, LOAD_JEDIS } from "./jedi.constants";

export const addJedi = (id, name) => ({
  type: ADD_JEDI,
  payload: { id, name }
});
export const removeJedi = id => ({ type: REMOVE_JEDI, payload: { id } });
export const loadJedis = jedis => ({ type: LOAD_JEDIS, payload: jedis });
