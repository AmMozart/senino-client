import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';

const wrapper: React.FC = ({children}) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export {wrapper};
