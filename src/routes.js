// const { Router } = require('express');
import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Hello Rocketseat' }));

// sintaxe antiga: module.exports = routes;
export default routes;
