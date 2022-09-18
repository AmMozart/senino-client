import * as BABYLON from 'babylonjs';

import { ElectricGroupsState } from '../../../features/controller/controllerSlice';
import AreaName from '../../../features/area/AreaName';
import pubSub from '../../../utils/pubSub';
import EventName from '../../../utils/EventName';
import { blindGroup } from '../../../config/config';
import { Driver } from './Driver';

export class Gate extends Driver {
  private standartMaterial?: BABYLON.Nullable<BABYLON.Material>
  private intervalID: ReturnType<typeof setInterval> | undefined;
  private mesh: BABYLON.Nullable<BABYLON.AbstractMesh>;
  private animation: BABYLON.Nullable<BABYLON.Animatable> | undefined;

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
      const ms = 200;

      if(electricGroupsState[name]) {
        if(this.intervalID) clearInterval(this.intervalID);

        switch(this.state) {

        case 'STOP_CLOSING': {
          this.open();
          this.intervalID = setInterval(() => {
            this.stateTime += ms;
            
            if(this.stateTime >= this.openTime) {
              if(this.intervalID) clearInterval(this.intervalID);
              this.state = 'STOP_OPENING';
            }
          }, ms);
          break;
        }

        case 'STOP_OPENING': {
          this.close();
          this.intervalID = setInterval(() => {
            this.stateTime -= ms;
            
            if(this.stateTime <= 0) {
              if(this.intervalID) clearInterval(this.intervalID);
              this.state = 'STOP_CLOSING';
            }
          }, ms);
          break;
        }

        case 'OPENING':
        case 'CLOSING': {
          this.stop();
          break;
        }
        }

      }
    });

    this.addClickEvent(this.mesh);
  }

  public open = () => {
    this.state = 'OPENING';
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
    this.state = 'CLOSING';

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
    this.state = this.state === 'OPENING'
      ? 'STOP_OPENING'
      : 'STOP_CLOSING';

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
}
