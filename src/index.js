import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App_Saga';
import { applyMiddleware, createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import appReducers from './reducers'
import thunk from 'redux-thunk'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  appReducers,
  composeEnhancer(applyMiddleware(thunk))
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);