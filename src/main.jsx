import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { TodosProvider as Provider } from "@/store/provider"
import './styles/global.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
