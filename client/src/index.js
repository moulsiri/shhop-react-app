import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store,persistor} from './store';
import { CookiesProvider } from 'react-cookie';
import { PersistGate } from 'redux-persist/integration/react';
import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
     <AlertProvider template={AlertTemplate} {...options}>
     <BrowserRouter>
     <App />
    </BrowserRouter>
    </AlertProvider>
    </PersistGate>
    </Provider> 
);

