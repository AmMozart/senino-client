import React from 'react';

import Dashboard from './features/Dashboard';
import Canvas3D from './features/Canvas3D1';
import Sleep from './features/Sleep';
import Password from './features/password';
import Ringtone from './features/sip/Ringtone';

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
