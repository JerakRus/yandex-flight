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

/*we imitate a state after a request to api departure flights with delay
 *
 */
const departureDelay = handleActions({
    [actions.departureDelayLoadSuccess](state, { payload }) {
        const newState = { ...state, schedule: payload, event: 'departureDelay' };
        const randomDelay = [20, 35, 50, 15, 5, 60, 45];
        newState.schedule.forEach((flight, i) => flight.delay = randomDelay[i]);
        console.log(newState);
        return newState;
    },
}, initState);

const isDepartureDelayLoaded = handleActions({
    [actions.departureDelayLoadRequest]() {
        return 'request';
    },
    [actions.departureDelayLoadSuccess]() {
        return 'success';
    },
    [actions.departureDelayLoadFailure]() {
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

/*we imitate a state after a request for api arrival flights with delay
 *
 */
const arrivalDelay = handleActions({
    [actions.arrivalDelayLoadSuccess](state, { payload }) {
        const newState = { ...state, schedule: payload, event: 'arrivalDelay'};
        const randomDelay = [20, 35, 50, 15];
        newState.schedule.forEach((flight, i) => flight.delay = randomDelay[i]);
        console.log(newState);
        return newState;
    },
}, initState);

const isArrivalDelayLoaded = handleActions({
    [actions.arrivalDelayLoadRequest]() {
        return 'request';
    },
    [actions.arrivalDelayLoadSuccess]() {
        return 'success';
    },
    [actions.arrivalDelayLoadFailure]() {
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
    departureDelay,
    isDepartureDelayLoaded,
    arrivalDelay,
    isArrivalDelayLoaded,
    searchQuery,
});