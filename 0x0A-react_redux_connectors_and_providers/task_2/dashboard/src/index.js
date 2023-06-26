import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from './App/App';
import { uiReducer } from './reducers/uiReducer';

const middleware = applyMiddleware(thunk);
const store = createStore(uiReducer, middleware);

const rootId = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>, rootId
);
