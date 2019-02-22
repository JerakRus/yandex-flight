import { handleActions } from 'redux-actions';
import { combineReducers } from "redux";
import * as actions from '../actions';


const initState = {};

const departure = handleActions({
    [actions.departureLoadSuccess](state, { payload }) {
        return { ...state, ...payload };
    },
}, initState);

const isDepartureLoaded = handleActions({
    [actions.departureLoadRequest]() {
        return 'request';
    },
    [actions.departureLoadSuccess]() {
        return 'success';
    },
    [actions.departureLoadFailure]() {
        return 'failure';
    },
}, 'none');

const arrival = handleActions({
    [actions.arrivalLoadSuccess](state, { payload }) {
        return { ...state, ...payload };
    },
}, initState);

const isArrivalLoaded = handleActions({
    [actions.arrivalLoadRequest]() {
        return 'request';
    },
    [actions.arrivalLoadSuccess]() {
        return 'success';
    },
    [actions.arrivalLoadFailure]() {
        return 'failure';
    },
}, 'none');

const searchQuery = handleActions({
    [actions.setSearchQuery](state, { payload }) {
        return payload;
    }
}, '');

export default combineReducers({
    departure,
    isDepartureLoaded,
    arrival,
    isArrivalLoaded,
    searchQuery,
});