import * as BABYLON from 'babylonjs'
import { EventTypes } from '../utils/EventTypes'
import pubSub from '../utils/pubSub'

export class Floor {
  mesh: BABYLON.Nullable<BABYLON.AbstractMesh>

  public constructor(private title: string, private scene: BABYLON.Scene) {

    this.mesh = this.scene.getMeshByName(title)
    pubSub.subscribe(EventTypes.CHANGE_SELECTED_FLOOR, (title: string) => {

      if (this.mesh) {
        this.mesh.isVisible = title === this.mesh.name
      }
    })
  }
}
