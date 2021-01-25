import React from 'react';
import ReactDOM from 'react-dom';

import { ColorContextProvider } from './contexts/BgColorContext';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ColorContextProvider>
      <App />
    </ColorContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

