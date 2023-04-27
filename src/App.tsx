import React from 'react';

import Canvas3D from './features/Canvas3D';
import Dashboard from './features/Dashboard';
import Password from './features/password';
import Ringtone from './features/sip/Ringtone';
import Sleep from './features/Sleep';

function App(): JSX.Element {
  return (
    <>
      <Canvas3D />
      <Dashboard />
      <Sleep />
      <Password />
      <Ringtone />
    </>
  );
}

export default App;
