import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import Profile from './pages/ProfilePage'
import './index.css';
import store from './store/store'; 

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/profile" element={<Profile />} /> 
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
