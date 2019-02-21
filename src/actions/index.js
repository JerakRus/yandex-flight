import { createAction } from 'redux-actions';
import axios from 'axios';
const myProxyForYandexApi = 'http://localhost:4000'//'http://195.133.146.22:4000';

export const dataLoadRequest = createAction('DATA_LOAD_REQUEST');
export const dataLoadSuccess = createAction('DATA_LOAD_SUCCESS');
export const dataLoadFailure = createAction('DATA_LOAD_FAILURE');



export const dataLoad = () => async (dispatch) => {
    dispatch(dataLoadRequest());
    try {
        const res = await axios.get(`${myProxyForYandexApi}/arrival`);
        console.log(res.data);
        dispatch(dataLoadSuccess(res.data));
    } catch(e) {
        console.log(e);
        alert(`Не получилось загрузить данные, ошибка на сервере. Попробуйте еще раз! ${e}`);
        dispatch(dataLoadFailure());
    }
};
