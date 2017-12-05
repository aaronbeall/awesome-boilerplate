import * as React from "react";
import { StatelessComponent } from "react";
import { Label, Button } from "react-bootstrap";

interface CounterProps {
  count: number;
  onIncrement(): void;
  onDecrement(): void;
}

export const Counter: StatelessComponent<CounterProps> = ({ count, onIncrement, onDecrement }) => (
  <div>
    <Label bsStyle={ count < 0 ? "danger" : "success" }>{ count }</Label> <Button bsStyle="danger" onClick={ onDecrement }>-</Button> <Button bsStyle="success" onClick={ onIncrement }>+</Button>
  </div>
);