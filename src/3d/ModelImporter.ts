import * as BABYLON from 'babylonjs';
// eslint-disable-next-line import/no-unresolved
import { ISceneLoaderAsyncResult } from 'babylonjs/Loading/sceneLoader';

export class ModelImporter {
  public static async import(
    scene: BABYLON.Scene
  ): Promise<ISceneLoaderAsyncResult> {
    const result = await BABYLON.SceneLoader.AppendAsync(
      '/models/',
      'plan.babylon',
      scene
    );
    return result;
  }
}
