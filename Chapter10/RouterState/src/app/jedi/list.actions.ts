import { ADD_JEDI, REMOVE_JEDI, LOAD_JEDIS } from "./list.constants";

let counter = 0;

export const addJedi = (name) => ({ type: ADD_JEDI, payload: { id: counter++, name }});
export const removeJedi = (id) => ({ type: REMOVE_JEDI, payload: { id } });
export const loadJedis = (jedis) => ({ type: LOAD_JEDIS, payload: jedis });
