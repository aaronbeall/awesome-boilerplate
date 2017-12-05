import { IncrementAction, DecrementAction, INCREMENT, DECREMENT } from "./../actions/counterActions";

type CounterActions = IncrementAction | DecrementAction;

export const counterReducer = (state: number = 0, action: CounterActions): number => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      const _exhaustive: never = action; // Ensures all actions have a case handler
      return state;
  }
}