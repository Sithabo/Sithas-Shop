import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import filterReducer from './reducers/filterReducer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import searchReducer from './reducers/searchReducer';
import cartReducer from './reducers/cartReducer';
import {BrowserRouter} from 'react-router-dom'
import WishListReducer from './reducers/WishListReducer';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    search: searchReducer,
    cart: cartReducer,
    wishlist: WishListReducer
  }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <App /> 
          </BrowserRouter>  
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
