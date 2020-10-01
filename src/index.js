import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';

const initState = {
  count: 0
};

function reducer(state=initState, action){
  switch(action.type){
    case 'INCREMENT':
      return {
        count: state.count +1
      };
    case 'DECREMENT':
      return {
        count: state.count -1
      };
    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,  
  document.getElementById('root')
);

serviceWorker.unregister();
