import React, { useEffect, useRef } from 'react'
import { House } from './3d/House'
import style from './App.module.css'

function App() {

  const canvas = React.useRef<HTMLCanvasElement | null>(null)
  const game = useRef<House | null>(null)


  useEffect(() => {
    if (canvas.current) {
      game.current = new House(canvas.current);
    }
  }, [])

  return (
    <>
      <div className={style.canvasWrapper}>
        <canvas ref={canvas} className={style.renderCanvas}>You're browser don't support canvas tag</canvas>
      </div>
    </>
  );
}

export default App