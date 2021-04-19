import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

import { StateProvider } from './context/search/stateProvider';
import { reducer, initialState } from './context/search/reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
