import { ClosingState } from './ClosingState';
import { Gate } from './Gate';
import { GateState } from './GateState';
import { StopClosingState } from './StopClosingState';

class StopOpeningState implements GateState {

  public constructor(private gate: Gate) {}

  public change = () => {
    this.gate.close();
    this.gate.intervalID = setInterval(() => {
      this.gate.stateTime -= 200;
      
      if(this.gate.stateTime <= 0) {
        if(this.gate.intervalID) clearInterval(this.gate.intervalID);
        this.gate.state = new StopClosingState(this.gate);
      }
    }, 200);

    return new ClosingState(this.gate);
  }
}

export { StopOpeningState };
