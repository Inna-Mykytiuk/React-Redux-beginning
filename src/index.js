import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';
import { GlobalStyle } from 'GlobalStyle';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './redux/store';

const theme = {
  colors: {
    primary: '#ffffff',
    secondary: '#f2f2f2',
    accent: '#ff6f61',
    text: '#000000',
    textSecondary: '#ffffff',
    textAccent: '#ffffff',
  },
  breakpoints: {
    mobileMax: 767,
  },
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <App />
          <GlobalStyle />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

//<PersistGate loading={null} persistor={persistor}>
//<PersistGate loading={null} persistor={persistor}>
