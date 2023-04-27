import * as BABYLON from 'babylonjs';

import { Camera } from './Camera';
import { Area } from './house/Area';
import { Gate } from './house/electricGroup/Gate';
import { Light } from './house/electricGroup/Light';
import { VideoCamera } from './house/electricGroup/VideoCamera';
import { ModelImporter } from './ModelImporter';

import { blindGroup, lightGroup, videoCameraGroup } from '../config/config';
import AreaName from '../features/area/AreaName';
import EventName from '../utils/EventName';
import pubSub from '../utils/pubSub';

const TIME_FOR_OPEN_GATE_MS = 25_000;
export class World3D {
  private scene: BABYLON.Scene;
  private camera: Camera;
  private light: BABYLON.HemisphericLight;
  private area: Area[];
  private lights: Light[];
  private blinds: Gate[];
  private videoCameras: VideoCamera[];

  public constructor(canvas: HTMLCanvasElement) {
    const engine = new BABYLON.Engine(canvas);
    this.scene = new BABYLON.Scene(engine);
    this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);

    this.camera = new Camera(canvas, this.scene);
    this.light = new BABYLON.HemisphericLight(
      'HemiLight',
      new BABYLON.Vector3(0, 50, 0),
      this.scene
    );
    this.light.intensity = 1;

    this.area = [];
    this.lights = [];
    this.blinds = [];
    this.videoCameras = [];

    const startRender = () => {
      engine.runRenderLoop(() => {
        this.scene.render();
      });
    };

    const stopRender = () => {
      engine.stopRenderLoop();
    };

    pubSub.subscribe(EventName.Start3DRender, startRender);
    pubSub.subscribe(EventName.Stop3DRender, stopRender);

    startRender();
    window.addEventListener('resize', function () {
      engine.resize();
    });
  }

  public async init(): Promise<void> {
    return await ModelImporter.import(this.scene).then(() => {
      const areas = Object.values(AreaName);
      this.area = areas.map((area) => new Area(area, this.scene));

      Object.values(lightGroup).forEach((array) => {
        this.lights = array.map((name) => new Light(name, this.scene));
      });

      Object.values(blindGroup).forEach((array) => {
        this.blinds = array.map(
          (name) => new Gate(name, TIME_FOR_OPEN_GATE_MS, this.scene)
        );
      });

      Object.values(videoCameraGroup).forEach((array) => {
        this.videoCameras = array.map(
          (name) => new VideoCamera(name, this.scene)
        );
      });
    });
  }
}
