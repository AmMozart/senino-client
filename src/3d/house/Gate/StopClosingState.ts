import { Gate } from './Gate';
import { GateState } from './GateState';
import { OpeningState } from './OpeningState';
import { StopOpeningState } from './StopOpeningState';

class StopClosingState implements GateState {
  public constructor(private gate: Gate) {}

  public change = () => {
    this.gate.open();
    this.gate.intervalID = setInterval(() => {
      this.gate.stateTime += 200;

      if (this.gate.stateTime >= this.gate.openTime) {
        if (this.gate.intervalID) clearInterval(this.gate.intervalID);
        this.gate.state = new StopOpeningState(this.gate);
      }
    }, 200);

    return new OpeningState(this.gate);
  };
}

export { StopClosingState };
