import { createAction } from 'redux-actions';
import axios from 'axios';
const myProxyForYandexApi = 'http://195.133.146.22:4000'; //'http://localhost:4000'; //pfgf
const urlDelayDeparture = '/departureDelay.json';
const urlDelayArrival = '/arrivalDelay.json';

export const setSearchQuery = createAction("SET_SEARCH_QUERY");

export const departureLoadRequest = createAction('DEPARTURE_LOAD_REQUEST');
export const departureLoadSuccess = createAction('DEPARTURE_LOAD_SUCCESS');
export const departureLoadFailure = createAction('DEPARTURE_LOAD_FAILURE');

export const arrivalLoadRequest = createAction('ARRIVAL_LOAD_REQUEST');
export const arrivalLoadSuccess = createAction('ARRIVAL_LOAD_SUCCESS');
export const arrivalLoadFailure = createAction('ARRIVAL_LOAD_FAILURE');

export const departureDelayLoadRequest = createAction('DEPARTURE_DELAY_LOAD_REQUEST');
export const departureDelayLoadSuccess = createAction('DEPARTURE_DELAY_LOAD_SUCCESS');
export const departureDelayLoadFailure = createAction('DEPARTURE_DELAY_LOAD_FAILURE');

export const arrivalDelayLoadRequest = createAction('ARRIVAL_DELAY_LOAD_REQUEST');
export const arrivalDelayLoadSuccess = createAction('ARRIVAL_DELAY_LOAD_SUCCESS');
export const arrivalDelayLoadFailure = createAction('ARRIVAL_DELAY_LOAD_FAILURE');


export const departureLoad = () => async (dispatch) => {
    dispatch(departureLoadRequest());
    try {
        const res = await axios.get(`${myProxyForYandexApi}/departure`);
        console.log('dep', res.data);
        dispatch(departureLoadSuccess(res.data));
    } catch(e) {
        console.log(e);
        alert(`Не получилось загрузить данные, ошибка на сервере. Попробуйте еще раз! ${e}`);
        dispatch(departureLoadFailure());
    }
};

export const arrivalLoad = () => async (dispatch) => {
    dispatch(arrivalLoadRequest());
    try {
        const res = await axios.get(`${myProxyForYandexApi}/arrival`);
        console.log('arr', res.data);
        dispatch(arrivalLoadSuccess(res.data));
    } catch(e) {
        console.log(e);
        alert(`Не получилось загрузить данные, ошибка на сервере. Попробуйте еще раз! ${e}`);
        dispatch(arrivalLoadFailure());
    }
};

export const departureDelayLoad = () => async (dispatch) => {
    dispatch(departureDelayLoadRequest());
    try {
        const res = await axios.get(urlDelayDeparture);
        console.log('depDelay', res.data);
        dispatch(departureDelayLoadSuccess(res.data));
    } catch(e) {
        console.log(e);
        alert(`Не получилось загрузить данные, ошибка на сервере. Попробуйте еще раз! ${e}`);
        dispatch(departureDelayLoadFailure());
    }
};

export const arrivalDelayLoad = () => async (dispatch) => {
    dispatch(arrivalLoadRequest());
    dispatch(arrivalDelayLoadRequest());
    try {
        const res = await axios.get(urlDelayArrival);
        console.log('arrDelay', res.data);
        dispatch(arrivalDelayLoadSuccess(res.data));
    } catch(e) {
        console.log(e);
        alert(`Не получилось загрузить данные, ошибка на сервере. Попробуйте еще раз! ${e}`);
        dispatch(arrivalDelayLoadFailure());
    }
};