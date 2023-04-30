// import React from 'react';
// import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import './index.css';
import { GlobalStyle } from 'GlobalStyle';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//     <GlobalStyle />
//   </React.StrictMode>
// );

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <GlobalStyle />
  </Provider>
);
