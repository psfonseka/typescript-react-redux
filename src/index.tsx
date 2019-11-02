import * as React from 'react';
import * as ReactDOM from "react-dom";
import store from './store/store';
import { Provider } from 'react-redux';
import AppContainer from './components/app';

/**
 * Initial Render
 */
ReactDOM.render(  
    <Provider store={store}>
        <AppContainer/>
    </Provider>,document.getElementById('app')
);
  