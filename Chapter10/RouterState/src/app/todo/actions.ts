import { ADD_TODO } from './constants';

export const addTodo = todo => ({ type: ADD_TODO, payload: todo });
