import * as BABYLON from 'babylonjs'
import { ISceneLoaderAsyncResult } from 'babylonjs/Loading/sceneLoader'

export class ModelImporter {

  public static import(scene: BABYLON.Scene): Promise<ISceneLoaderAsyncResult> {
    return BABYLON.SceneLoader.ImportMeshAsync("", "./models/", "plan.babylon", scene)
  }

}
