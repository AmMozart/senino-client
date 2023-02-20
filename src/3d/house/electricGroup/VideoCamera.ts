import * as BABYLON from 'babylonjs';
import { videoCameraGroup } from '../../../config/config';
import AreaName from '../../../features/area/AreaName';

import EventName from '../../../utils/EventName';
import pubSub from '../../../utils/pubSub';

export class VideoCamera {
  public constructor(private name: string, private scene: BABYLON.Scene) {
    const mesh = this.scene.getMeshByName(name);

    pubSub.subscribe(EventName.ChangeArea, (name: AreaName) => {
      if (mesh) {
        mesh.isVisible = videoCameraGroup[name].includes(mesh.name);
      }
    });

    this.addClickEvent(mesh);
  }

  private addClickEvent(mesh: BABYLON.Nullable<BABYLON.AbstractMesh>) {
    if (mesh) {
      mesh.isPickable = true;
      mesh.actionManager = new BABYLON.ActionManager(this.scene);
      mesh.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnLeftPickTrigger,
          () => {
            pubSub.publish(EventName.ClickOnVideoCameraGroup, mesh.name);
          }
        )
      );
    }
  }
}
