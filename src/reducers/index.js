import { handleActions } from 'redux-actions';
import { combineReducers } from "redux";
import * as actions from '../actions';


const initState = {};

const departure = handleActions({
    [actions.departureLoadSuccess](state, { payload }) {
        console.log(payload);
        return payload;
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
        console.log(payload);
        return payload;
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

export default combineReducers({
    departure,
    isDepartureLoaded,
    arrival,
    isArrivalLoaded,
});