import { counterReducer } from "../counterReducer";
import { INCREMENT, DECREMENT, DecrementAction, IncrementAction } from "../../actions/counterActions";

describe("counterReducer", () => {
  it("should increment", () => {
    const action: IncrementAction = { type: INCREMENT }
    const before = 0;
    const after = counterReducer(before, action);
    expect(after).toBe(1);
  });
  it("should decrement", () => {
    const action: DecrementAction = { type: DECREMENT }
    const before = 1;
    const after = counterReducer(before, action);
    expect(after).toBe(0);
  });
});