import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import {configureStore } from '@reduxjs/toolkit'
import {Provider} from 'react-redux';

import productReducer, {productsFetch} from './Main.js/Features/productSlice';
import { productsApi } from './Main.js/Features/ProductsApi';
import cartReducer from './Main.js/Features/cartSlice';


const store = configureStore ({
  reducer:{
    products: productReducer,
    [productsApi.reducerPath] : productsApi.reducer,
    cart: cartReducer,
   
  }, 
  middleware : (getDefaultMiddleware) => {
   return getDefaultMiddleware().concat(productsApi.middleware);
  }, 
});

store.dispatch(productsFetch());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={store}>
  <App />
  </Provider>
    
  </React.StrictMode>
);


