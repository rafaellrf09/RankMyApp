const { Router } = require('express');

const rickController = require('./controller/RickController');

const countAccess = require('./middlewares/countAccess');

const routes = Router();

routes.get('/list', rickController.index);
routes.get('/listAlive', rickController.findAlive);


module.exports = routes;