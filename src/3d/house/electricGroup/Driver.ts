import { ElectricGroup } from './ElectricGroup';

type State = 'OPENING' | 'CLOSING' | 'STOP_OPENING' | 'STOP_CLOSING';

export class Driver extends ElectricGroup {
  public state: State = 'STOP_CLOSING';
  public stateTime = 0;

  constructor(public name: string, public openTime: number) {
    super(name);
  }

  open = (): void => {
    throw Error('Function open did not implement');
  };

  close = (): void => {
    throw Error('Function close did not implement');
  };

  stop = (): void => {
    throw Error('Function close did not implement');
  };
}
