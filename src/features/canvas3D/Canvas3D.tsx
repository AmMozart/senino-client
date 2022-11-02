import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { World3D } from '../../3d/World3D';
import Assets3D from '../Assets3D';

const StyledCanvas3D = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Canvas3D: React.FC = () => {
  const [world3DReady, setWorld3DReady] = useState<boolean>(false);
  
  const canvas = React.useRef<HTMLCanvasElement | null>(null);
  const world3D = useRef<World3D | null>(null);

  useEffect(() => {
    function prepare3D() {
      if (canvas.current) {
        world3D.current = new World3D(canvas.current);

        world3D.current.init().then(() => {
          setWorld3DReady(true);
        });
      }
    }
    prepare3D();
  }, []);

  return (
    <>
      <StyledCanvas3D ref={canvas}>
        You are browser do not support canvas tag!
      </StyledCanvas3D>

      {world3DReady && <Assets3D />}
    </>
  );
};

export default Canvas3D;
