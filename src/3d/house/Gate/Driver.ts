import { ElectricGroup } from './ElectricGroup';

export class Driver extends ElectricGroup {
  public stateTime = 0;
  
  constructor(public name: string, public openTime: number) {
    super(name);
  }
}
