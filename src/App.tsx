import React, { useEffect, useRef } from 'react'
import { World3D } from './3d/World3D'
import style from './App.module.css'
import Assets3D from './features/Assets3D/Assets3D'
import { FloorPanelButtons } from './features/floorPanelButtons/FloorPanelButtons'


function App() {

  const canvas = React.useRef<HTMLCanvasElement | null>(null)
  const world3D = useRef<World3D | null>(null)

  useEffect(() => {
    if (canvas.current) {
      world3D.current = new World3D(canvas.current)
    }
  }, [])

  return (
    <>
      <div className={style.canvasWrapper}>
        <canvas ref={canvas} className={style.renderCanvas}>You're browser don't support canvas tag</canvas>
      </div>
      <FloorPanelButtons />
      <Assets3D />
    </>
  );
}

export default App
