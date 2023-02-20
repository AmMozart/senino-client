import AreaName from '../features/area/AreaName';

type ElectricGroup = {
  [key in AreaName]: string[];
};

export const lightGroup: ElectricGroup = {
  [AreaName.Garden]: ['0-01L', '0-02L', '0-03L'],
  [AreaName.Floor1]: [
    '1-01L',
    '1-02L',
    '1-03L',
    '1-04L',
    '1-05L',
    '1-06L',
    '1-07L',
    '1-08L',
    '1-09L',
    'VV-1',
  ],
  [AreaName.Floor2]: ['2-01L', '2-02L', '2-03L'],
};

export const climateGroup: ElectricGroup = {
  [AreaName.Garden]: ['0-01L', '0-02L', '0-03L'],
  [AreaName.Floor1]: [
    '1-01L',
    '1-02L',
    '1-03L',
    '1-04L',
    '1-05L',
    '1-06L',
    '1-07L',
    '1-08L',
    '1-09L',
    'VV-1',
  ],
  [AreaName.Floor2]: ['2-01L', '2-02L', '2-03L'],
};

export const blindGroup: ElectricGroup = {
  [AreaName.Garden]: ['Vorota', 'Door 1'],
  [AreaName.Floor1]: [],
  [AreaName.Floor2]: [],
};

export const videoCameraGroup: ElectricGroup = {
  [AreaName.Garden]: ['CAM1', 'CAM2', 'CAM3', 'CAM4', 'CAM5', 'CAM6', 'CAM7'],
  [AreaName.Floor1]: ['CAM1', 'CAM2', 'CAM3', 'CAM4', 'CAM5', 'CAM6', 'CAM7'],
  [AreaName.Floor2]: [],
};
