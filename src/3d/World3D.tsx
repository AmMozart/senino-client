import * as BABYLON from 'babylonjs'
import { floorTitleArr } from '../config/config'
import { Camera } from './Camera'
import { Floor } from './Floor'
import { ModelImporter } from './ModelImporter'
export class World3D {
  private scene: BABYLON.Scene
  private camera: Camera
  private light: BABYLON.HemisphericLight
  private floors: Floor[]

  public constructor(canvas: HTMLCanvasElement) {
    const engine = new BABYLON.Engine(canvas)
    this.scene = new BABYLON.Scene(engine)
    // this.scene.debugLayer.show();
    this.camera = new Camera(canvas, this.scene)
    this.light = new BABYLON.HemisphericLight("HemiLight", new BABYLON.Vector3(0, 50, 0), this.scene)
    this.light.intensity = 1
    this.floors = []

    ModelImporter.import(this.scene).then(() => {
      this.floors = floorTitleArr.map(title => new Floor(title, this.scene))
    })

    engine.runRenderLoop(() => {
      this.scene.render()
    })

    window.addEventListener("resize", function () {
      engine.resize()
    })
  }

}
