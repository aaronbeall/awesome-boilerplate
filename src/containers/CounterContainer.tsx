import * as React from "react";
import { connect } from "react-redux";
import { State } from "../store/store";
import { increment, decrement } from "../actions/counterActions";
import { Counter } from "../components/counter/Counter";

export const CounterContainer = connect(
  (state: State) => ({
    count: state.count
  }),
  (dispatch) => ({
    onIncrement() {
      dispatch(increment())
    },
    onDecrement() {
      dispatch(decrement())
    }
  })
)(Counter);