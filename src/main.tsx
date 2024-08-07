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
import LoadingProvider from './contexts/loading.tsx';
import { UserProvider } from './contexts/user.tsx';
import { CartProvider } from './contexts/cart.tsx';
import { OrderProvider } from './contexts/order.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <BrowserRouter>
  <LoadingProvider>
    <UserProvider>
          <CartProvider>
            <OrderProvider>
            <App />
            </OrderProvider>
          </CartProvider>
        </UserProvider>
    </LoadingProvider>
  </BrowserRouter>
</React.StrictMode>
)
