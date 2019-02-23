var express = require( 'express');
var request = require('request');
var url = require('url');

var port = 4000;
var server = express();

// base parameters API request
var apiURL = new url.URL('https://api.rasp.yandex.net/v3.0/schedule/');
var searchParams = new url.URLSearchParams({
    apikey: 'c726daa2-f064-4e41-ade9-832f56a4af98',
    station: 'SVO',
    transport_types: 'plane',
    system: 'iata',
    limit: 1000,
});
apiURL.search = searchParams;


/* create REST API my proxy server
 * request to Yandex Api, get schedule and send it to client
 */
var yandexApi = express.Router();
yandexApi.get('/departure', (req, res) => {
    apiURL.searchParams.append('event', 'departure');
    apiURL.searchParams.append('date', new Date().toISOString());
    res.set({
        'Access-Control-Allow-Origin': '*',
    });
    request(apiURL.toString(), (err, yandexRes, data) => {
        if (err) {
            res.sendStatus(500);
        }
        console.log('get departure');
        res.send(data);
   });
});
yandexApi.get('/arrival', (req, res) => {
    apiURL.searchParams.append('event', 'arrival');
    apiURL.searchParams.append('date', new Date().toISOString());
    res.set('Access-Control-Allow-Origin', '*');
    request(apiURL.toString(), (err, yandexRes, data) => {
        if (err) {
            res.sendStatus(500);
        }
        console.log('get arrival');
        res.send(data);
    });
});


server.use(yandexApi);
server.listen(port, () => {
    console.log('server started on port 4000');
});