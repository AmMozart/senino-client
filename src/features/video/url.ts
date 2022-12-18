import { IP_VIDEO_REGISTRATOR, PORT } from '../../config/var';

export const serverCamStreamUrl = {
  Road: `wss://${IP_VIDEO_REGISTRATOR}:${PORT}/api/stream`,
  LivingRoom: `wss://${IP_VIDEO_REGISTRATOR}:${PORT}/cam/living_room`,
  Garden: `wss://${IP_VIDEO_REGISTRATOR}:${PORT}/cam/living_room`,
};
