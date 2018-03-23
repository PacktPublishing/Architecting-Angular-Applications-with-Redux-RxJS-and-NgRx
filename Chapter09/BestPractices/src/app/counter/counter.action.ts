import { INCREMENT, DECREMENT } from "./counter.constant";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
