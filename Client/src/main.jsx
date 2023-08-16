import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.jsx';

import { Provider } from 'react-redux';
import store from './app/store';

import Login from './components/login/Login'
import Register from './components/register/Register'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
    <Login />
    <Register />
  </Provider>
);
