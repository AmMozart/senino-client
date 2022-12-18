import { Gate } from './Gate';
import { GateState } from './GateState';
import { StopOpeningState } from './StopOpeningState';

class OpeningState implements GateState {
  public constructor(private gate: Gate) {}

  public change = () => {
    return new StopOpeningState(this.gate);
  };
}

export { OpeningState };
