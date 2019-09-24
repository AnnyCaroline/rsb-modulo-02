// const { Router } = require('express');
import { Router } from 'express';

import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store);

// sintaxe antiga: module.exports = routes;
export default routes;
