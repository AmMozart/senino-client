import { IP_VIDEO_REGISTRATOR, PORT } from '../../config/var';

export interface Camera {
  id: string;
  name: string;
  url: string;
}

export const cameras: Camera[] = [
  {
    id: 'CAM1',
    name: 'Дорога Выезд',
    url: `wss://${IP_VIDEO_REGISTRATOR}:${PORT}/api/stream`,
  },
  {
    id: 'CAM2',
    name: 'Дорога Въезд',
    url: `wss://${IP_VIDEO_REGISTRATOR}:${PORT}/api/stream`,
  },
  {
    id: 'CAM3',
    name: 'Передний двор',
    url: `wss://${IP_VIDEO_REGISTRATOR}:${PORT}/api/stream`,
  },
  {
    id: 'CAM4',
    name: 'Задний двор',
    url: `wss://${IP_VIDEO_REGISTRATOR}:${PORT}/api/stream`,
  },
  {
    id: 'CAM5',
    name: 'Гостиная',
    url: `wss://${IP_VIDEO_REGISTRATOR}:${PORT}/cam/living_room`,
  },
  {
    id: 'CAM6',
    name: 'Кухня',
    url: `wss://${IP_VIDEO_REGISTRATOR}:${PORT}/cam/living_room`,
  },
  {
    id: 'CAM7',
    name: 'Холл',
    url: `wss://${IP_VIDEO_REGISTRATOR}:${PORT}/cam/living_room`,
  },
];
