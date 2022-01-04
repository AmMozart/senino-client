import * as BABYLON from 'babylonjs';

import EventName from '../../utils/EventName';
import pubSub from '../../utils/pubSub';

export class Area {

  public constructor(
    private name: string,
    private scene: BABYLON.Scene
  ) {

    const mesh = this.scene.getMeshByName(name);

    pubSub.subscribe(EventName.ChangeArea, (name: string) => {
      if (mesh) {
        mesh.isVisible = name === mesh.name;
      }
    });
  }
}
