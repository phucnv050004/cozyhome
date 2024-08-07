import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000";
import { configureAxios } from './config/axios.ts';
configureAxios();
import "react-toastify/ReactToastify.min.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <BrowserRouter>
    
            <App />
           
  </BrowserRouter>
</React.StrictMode>
)
