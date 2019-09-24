// const { Router } = require('express');
import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
    const user = await User.create({
        name: 'Anny Caroline',
        email: 'annycarolinegnr@gmail.com',
        password_hash: '12341234',
    });
    return res.json({ user });
});

// sintaxe antiga: module.exports = routes;
export default routes;
