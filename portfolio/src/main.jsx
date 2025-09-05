import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" index element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
