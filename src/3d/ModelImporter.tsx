import * as BABYLON from 'babylonjs'
import { ISceneLoaderAsyncResult } from 'babylonjs/Loading/sceneLoader'

export class ModelImporter {
  public isLoaded = false
  public constructor(private scene: BABYLON.Scene) {
  }

  public import(): Promise<ISceneLoaderAsyncResult> {
    return BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "plan.babylon", this.scene)
  }

}
