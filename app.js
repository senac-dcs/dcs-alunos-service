const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./configs/routes');
const dbs = require('./configs/dbs');

const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE, PATCH, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Origin, X-Requested-With, Accept');
    next();
});

app.use('/', routes);

dbs.connect;

app.set('port', 3000);
app.listen(app.get('port'), () => console.log('app is running on '+app.get('port')));