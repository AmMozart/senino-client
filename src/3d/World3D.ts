import * as BABYLON from 'babylonjs';

import AreaName from '../features/area/AreaName';
import { lightGroup } from '../config/config';
import { Light } from './house/electricGroup/Light';
import { ModelImporter } from './ModelImporter';
import { Area } from './house/Area';
import { Camera } from './Camera';

export class World3D {
  private scene: BABYLON.Scene;
  private camera: Camera;
  private light: BABYLON.HemisphericLight;
  private area: Area[];
  private lights: Light[];

  public constructor(canvas: HTMLCanvasElement) {
    const engine = new BABYLON.Engine(canvas);
    this.scene = new BABYLON.Scene(engine);
    this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);

    this.camera = new Camera(canvas, this.scene);
    this.light = new BABYLON.HemisphericLight('HemiLight', new BABYLON.Vector3(0, 50, 0), this.scene);
    this.light.intensity = 1;

    this.area = [];
    this.lights = [];

    this.scene.actionManager = new BABYLON.ActionManager(this.scene);
    this.scene.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnLeftPickTrigger,
        () => {
          console.log('dfd');
        }
      )
    );

    engine.runRenderLoop(() => {
      this.scene.render();
    });

    window.addEventListener('resize', function () {
      engine.resize();
    });
  }

  public async init(): Promise<void> {
    return await ModelImporter.import(this.scene).then(() => {
      const areas = Object.values(AreaName);
      this.area = areas.map(area => new Area(area, this.scene));

      Object.values(lightGroup).forEach((array) => {
        this.lights = array.map(name => new Light(name, this.scene));
      });
    });
  }
}
