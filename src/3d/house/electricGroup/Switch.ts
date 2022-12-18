import { ElectricGroup } from './ElectricGroup';

export class Switch extends ElectricGroup {
  constructor(public name: string) {
    super(name);
  }

  on = () => {
    throw Error('Function on did not implement');
  };

  off = () => {
    throw Error('Function off did not implement');
  };
}
