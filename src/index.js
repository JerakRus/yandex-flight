import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { dataLoad } from "./actions";

import './index.css';


import App from './components/App';
import rootReducer from './reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk),
    ),
);
store.dispatch(dataLoad());

ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>
    , document.getElementById('root'));

