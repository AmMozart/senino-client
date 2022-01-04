import * as BABYLON from 'babylonjs';
export class Camera {
  private camera

  constructor(private canvas: HTMLCanvasElement, private scene: BABYLON.Scene) {

    this.camera = new BABYLON.ArcRotateCamera('myCamera', 0, 0, 0, new BABYLON.Vector3(-10, 13, -10), this.scene);
    this.camera.attachControl(this.canvas, true);
    this.camera.setTarget(BABYLON.Vector3.Zero());

    this.camera.lowerRadiusLimit = 10;
    this.camera.upperRadiusLimit = 30;
    this.camera.lowerBetaLimit = 0;
    this.camera.upperBetaLimit = Math.PI / 2;
  }
}
