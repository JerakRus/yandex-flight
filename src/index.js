import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import * as actions from "./actions";

import 'semantic-ui-css/semantic.min.css';

import AppContainer from './containers/app';
import rootReducer from './reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk),
    ),
);
store.dispatch(actions.departureLoad());
store.dispatch(actions.arrivalLoad());
store.dispatch(actions.departureDelayLoad());
store.dispatch(actions.arrivalDelayLoad());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
           <AppContainer />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

