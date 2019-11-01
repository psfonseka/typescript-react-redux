import * as React from 'react';
import * as ReactDOM from "react-dom";
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import App from './components/app';

/**
 * Redux Store Configuration
 */
const store = createStore(rootReducer, {}, applyMiddleware(thunk));

/**
 * Initial Render
 */
ReactDOM.render(  
    <Provider store={store}>
        <App name="jane"/>
    </Provider>,document.getElementById('app')
);
  
