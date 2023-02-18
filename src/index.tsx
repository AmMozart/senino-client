import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { enableMapSet } from 'immer';
import { createGlobalStyle } from 'styled-components';

import App from './App';
import { store } from './app/store';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    border: 0;
    margin: 0;
    user-select: none;
  }

  body,
  html {
    width: 100%;
    height: 100%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
  }

  #root {
    width: 100%;
    height: 100%;
  }
  
  :root {
  --btn-text-color: #bbb;
  --btn-text-color-active: #fff;
  --h1-text-color: var(--btn-text-color);
  --panel-background-color: rgb(18 18 18 / 90%);
  --panel-border: 3px solid #1f1f1f;
  --metallic-color: #5f7286;
}

`;

enableMapSet();

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />

    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register();
