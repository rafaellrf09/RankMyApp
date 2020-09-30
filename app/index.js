const express = require('express');
const bodyParser = require('body-parser');

const countAccess = require('./middlewares/countAccess');
const routes = require('./routes');


const app = express();


app.use(bodyParser.json());

app.use(countAccess)
app.use(routes);

app.listen(3333);
console.log("Sevidor iniciado na porta 3333");