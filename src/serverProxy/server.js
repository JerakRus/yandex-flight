var express = require( 'express');
var request = require('request');
var url = require('url');

var port = 4000;
var server = express();


var apiUrl = new url.URL('https://api.rasp.yandex.net/v3.0/schedule/');
var searchParams = new url.URLSearchParams({
    apikey: 'c726daa2-f064-4e41-ade9-832f56a4af98',
    station: 'SVO',
    transport_types: 'plane',
    system: 'iata',
    limit: 1000,
    date: new Date().toISOString(),
});
apiUrl.search = searchParams;


var yandexApi = express.Router();
yandexApi.get('/departure', (req, res) => {
    apiUrl.searchParams.append('event', 'departure');
    res.set('Access-Control-Allow-Origin', '*');
    request(apiUrl.toString(), (err, yandexRes, data) => {
        if (err) {
            res.send(err);
        }
        console.log('get departure');
        res.send(data);
   });
});
yandexApi.get('/arrival', (req, res) => {
    apiUrl.searchParams.append('event', 'arrival');
    res.set('Access-Control-Allow-Origin', '*');
    request(apiUrl.toString(), (err, yandexRes, data) => {
        if (err) {
            res.send(err);
        }
        console.log('get arrival');
        res.send(data);
    });
});


server.use(yandexApi);
server.listen(port, () => {
    console.log('server started');
});