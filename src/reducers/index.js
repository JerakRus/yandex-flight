import { handleActions } from 'redux-actions';
import { combineReducers } from "redux";
import * as actions from '../actions';


const initState = {};

const data = handleActions({
    [actions.dataLoadSuccess](state, payload) {
        console.log(payload);
        return payload;
    },
}, initState);

const isLoadedData = handleActions({
    [actions.dataLoadRequest]() {
        return 'request';
    },
    [actions.dataLoadSuccess]() {
        return 'success';
    },
    [actions.dataLoadFailure]() {
        return 'failure';
    },
}, 'none');

export default combineReducers({
    data,
    isLoadedData,
});