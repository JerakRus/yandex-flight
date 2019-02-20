import { createAction } from 'redux-actions';
import axios from 'axios';
import https from 'https';

export const dataLoadRequest = createAction('DATA_LOAD_REQUEST');
export const dataLoadSuccess = createAction('DATA_LOAD_SUCCESS');
export const dataLoadFailure = createAction('DATA_LOAD_FAILURE');



export const dataLoad = () => async (dispatch) => {
    dispatch(dataLoadRequest());
    try {
         axios.get(apiUrl, {
            Method: 'GET',
            headers: {
                'Access-Control-Allow-Origin': '*',
                Referer: 'http://195.133.146.22:3002',
            }
        })
            .then(res => console.log(res))
            ;
        //console.log(res);
        //dispatch(dataLoadSuccess(res.data));
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

