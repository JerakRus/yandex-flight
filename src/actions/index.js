import { createAction } from 'redux-actions';
import axios from 'axios';
const myProxyForYandexApi = 'http://195.133.146.22:4000';

export const setSearchQuery = createAction("SET_SEARCH_QUERY");

export const departureLoadRequest = createAction('DEPARTURE_LOAD_REQUEST');
export const departureLoadSuccess = createAction('DEPARTURE_LOAD_SUCCESS');
export const departureLoadFailure = createAction('DEPARTURE_LOAD_FAILURE');

export const arrivalLoadRequest = createAction('ARRIVAL_LOAD_REQUEST');
export const arrivalLoadSuccess = createAction('ARRIVAL_LOAD_SUCCESS');
export const arrivalLoadFailure = createAction('ARRIVAL_LOAD_FAILURE');



export const departureLoad = () => async (dispatch) => {
    dispatch(departureLoadRequest());
    try {
        const res = await axios.get(`${myProxyForYandexApi}/departure`);
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
        dispatch(arrivalLoadSuccess(res.data));
    } catch(e) {
        console.log(e);
        alert(`Не получилось загрузить данные, ошибка на сервере. Попробуйте еще раз! ${e}`);
        dispatch(arrivalLoadFailure());
    }
};