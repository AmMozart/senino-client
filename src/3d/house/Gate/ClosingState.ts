import { Gate } from './Gate';
import { GateState } from './GateState';
import { StopClosingState } from './StopClosingState';

class ClosingState implements GateState {

  public constructor(private gate: Gate) {}

  public change = () => {
    return new StopClosingState(this.gate);
  }
}

export { ClosingState };
