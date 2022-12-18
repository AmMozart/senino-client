import * as BABYLON from 'babylonjs';

import { ElectricGroupsState } from '../../../features/controller/controllerSlice';
import AreaName from '../../../features/area/AreaName';
import pubSub from '../../../utils/pubSub';
import EventName from '../../../utils/EventName';
import { lightGroup } from '../../../config/config';
import { Switch } from './Switch';

export class Light extends Switch {
  private standartMaterial?: BABYLON.Nullable<BABYLON.Material>;

  public constructor(public name: string, private scene: BABYLON.Scene) {
    super(name);
    const mesh = this.scene.getMeshByName(name);
    if (mesh) this.standartMaterial = mesh.material;

    pubSub.subscribe(EventName.ChangeArea, (name: AreaName) => {
      if (mesh) {
        mesh.isVisible = lightGroup[name].includes(mesh.name);
      }
    });

    pubSub.subscribe(
      EventName.ChangeState,
      (electricGroupsState: ElectricGroupsState) => {
        // for (const key in electricGroupsState) {
        //   if (name === key) {
        //     this.changeColor(Boolean(electricGroupsState[key]), mesh);
        //   }
        // }
        this.changeColor(Boolean(electricGroupsState[name]), mesh);
      }
    );

    this.addClickEvent(mesh);
  }

  private changeColor(
    isOn: boolean,
    mesh: BABYLON.Nullable<BABYLON.AbstractMesh>
  ) {
    if (mesh) {
      const myMaterial = new BABYLON.StandardMaterial('myMaterial', this.scene);
      myMaterial.diffuseColor = BABYLON.Color3.Yellow();

      if (this.standartMaterial)
        mesh.material = isOn ? myMaterial : this.standartMaterial;
    }
  }

  private addClickEvent(mesh: BABYLON.Nullable<BABYLON.AbstractMesh>) {
    if (mesh) {
      mesh.isPickable = true;
      mesh.actionManager = new BABYLON.ActionManager(this.scene);
      mesh.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnLeftPickTrigger,
          () => {
            pubSub.publish(EventName.ClickOnElectricGroup, mesh.name);
          }
        )
      );
    }
  }
}
