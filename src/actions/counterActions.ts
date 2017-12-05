export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export type IncrementAction = { type: typeof INCREMENT }
export type DecrementAction = { type: typeof DECREMENT }

export const increment = (): IncrementAction => ({
  type: INCREMENT
});

export const decrement = (): DecrementAction => ({
  type: DECREMENT
});