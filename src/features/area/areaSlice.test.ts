import AreaName from './AreaName';
import areaReducer, { change, selectName } from './areaSlice';

import { store } from '../../app/store';

describe('Area reducer', () => {
  it('should be change area name', () => {
    expect(areaReducer(undefined, change(AreaName.Floor1))).toEqual({
      name: AreaName.Floor1,
    });
  });
});

describe('Area Selectors', () => {
  const state = store.getState();

  it('should return false', () => {
    expect(selectName(state)).toBe(AreaName.Floor1);
  });
});
