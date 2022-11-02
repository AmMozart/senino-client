
import * as BABYLON from 'babylonjs';

import { ElectricGroupsState } from '../../../features/controller/controllerSlice';
import AreaName from '../../../features/area/AreaName';
import pubSub from '../../../utils/pubSub';
import EventName from '../../../utils/EventName';
import { blindGroup } from '../../../config/config';
import { Driver } from './Driver';
import { GateState } from './GateState';
import { StopClosingState } from './StopClosingState';

export class Gate extends Driver {
  private standartMaterial?: BABYLON.Nullable<BABYLON.Material>
  public intervalID?: ReturnType<typeof setInterval>;
  private mesh: BABYLON.Nullable<BABYLON.AbstractMesh>;
  private animation?: BABYLON.Nullable<BABYLON.Animatable>;
  public state: GateState = new StopClosingState(this);

  public constructor(
    name: string,
    openTimeMs: number,
    private scene: BABYLON.Scene
  ) {
    super(name, openTimeMs);
    this.mesh = this.scene.getMeshByName(name);

    if (this.mesh) this.standartMaterial = this.mesh.material;

    pubSub.subscribe(EventName.ChangeArea, (name: AreaName) => {
      if (this.mesh) {
        this.mesh.isVisible = blindGroup[name].includes(this.mesh.name);
      }
    });

    pubSub.subscribe(EventName.ChangeState, (electricGroupsState: ElectricGroupsState) => {
      this.changeColor(Boolean(electricGroupsState[name]), this.mesh);

      if(electricGroupsState[name]) {
        if(this.intervalID) clearInterval(this.intervalID);
        this.changeState();
      }

    });

    this.addClickEvent(this.mesh);
  }

  public open = () => {
    if (this.mesh) {
      this.animation = BABYLON.Animation.CreateAndStartAnimation(
        'Gate animate',
        this.mesh, 'position',
        30,
        (this.openTime - this.stateTime ) / 1000 * 30,
        new BABYLON.Vector3(0, 0, this.mesh.position.z),
        new BABYLON.Vector3(0, 0, -4),
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
      );
    }
  }

  public close = () => {
    if (this.mesh) {
      this.animation = BABYLON.Animation.CreateAndStartAnimation(
        'Gate animate',
        this.mesh, 'position',
        30,
        this.stateTime / 1000 * 30,
        new BABYLON.Vector3(0, 0, this.mesh.position.z),
        new BABYLON.Vector3(0, 0, 0),
        BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
      );
    }
  }
  
  public stop = () => {
    if(this.animation) this.animation.stop();
  }

  private changeColor(isOn: boolean, mesh: BABYLON.Nullable<BABYLON.AbstractMesh>) {
    if (mesh) {
      const myMaterial = new BABYLON.StandardMaterial('myMaterial', this.scene);
      myMaterial.diffuseColor = BABYLON.Color3.Green();

      if (this.standartMaterial)
        mesh.material = isOn ? myMaterial : this.standartMaterial;
    }
  }

  private addClickEvent(mesh: BABYLON.Nullable<BABYLON.AbstractMesh>) {
    if (mesh) {
      mesh.isPickable = true;
      mesh.actionManager = new BABYLON.ActionManager(this.scene);
      mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnLeftPickTrigger, () => {
        pubSub.publish(EventName.ClickOnElectricGroup, mesh.name);
      }));
    }
  }

  public changeState() {
    this.state = this.state.change();
  }

}
