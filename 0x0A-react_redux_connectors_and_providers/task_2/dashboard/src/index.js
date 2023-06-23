import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { Map } from 'immutable';

import App from './App/App';
import { uiReducer, initialState } from './reducers/uiReducer';

const middleware = applyMiddleware(thunk);
const store = createStore(uiReducer, Map(initialState), applyMiddleware(thunk));

const rootId = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>, rootId
);
