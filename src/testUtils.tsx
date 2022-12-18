import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';

const Wrapper = ({ children }: React.PropsWithChildren): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

export default Wrapper;
