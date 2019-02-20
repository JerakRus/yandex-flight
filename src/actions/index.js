import { createAction } from 'redux-actions';
import axios from 'axios';

export const dataLoadRequest = createAction('DATA_LOAD_REQUEST');
export const dataLoadSuccess = createAction('DATA_LOAD_SUCCESS');
export const dataLoadFailure = createAction('DATA_LOAD_FAILURE');



export const dataLoad = () => async (dispatch) => {
    dispatch(dataLoadRequest());
    try {
        const res = await axios.get(apiUrl)
            .then(res => console.log(res))
            .catch(err => console.log(err.message));
        console.log(res);
        dispatch(dataLoadSuccess(res.data));
    } catch(e) {
        console.log(e);
        alert(`Не получилось загрузить данные, ошибка на сервере. Попробуйте еще раз! ${e}`);
        dispatch(dataLoadFailure());
    }
};

const apiUrl = new URL('https://api.rasp.yandex.net/v3.0/schedule/');
const searchParams = new URLSearchParams({
    apikey: 'c726daa2-f064-4e41-ade9-832f56a4af98',
    station: 'SVO',
    transport_types: 'plane',
    system: 'iata',
});
apiUrl.search = searchParams;
// event: '',
// date:''
