import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { applyMiddleware, compose, createStore } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
 
const store= createStore(reducers, compose(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store} >
  <React.StrictMode>
    <App />
  </React.StrictMode>
   </Provider>
);
