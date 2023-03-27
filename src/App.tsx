import React from 'react';

import Dashboard from './features/Dashboard';
import Canvas3D from './features/Canvas3D';
import Sleep from './features/Sleep';
import Password from './features/password';

function App(): JSX.Element {
  return (
    <>
      <Canvas3D />
      <Dashboard />
      <Sleep />
      <Password />
    </>
  );
}

export default App;
