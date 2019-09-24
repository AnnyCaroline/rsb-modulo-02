// const { Router } = require('express');
import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleare from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);
// routes.put('/users', authMiddleare, UserController.update);

// ou
routes.use(authMiddleare);
routes.put('/users', UserController.update);

// sintaxe antiga: module.exports = routes;
export default routes;
