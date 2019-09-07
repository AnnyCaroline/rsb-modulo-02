import express from 'express';
import routes from './routes';

// const express = require('express');
// const routes = require('./routes');
// Por padrão o node ainda não suporta importação com a sintaxe:
// import express from 'express';
// essa sintaxe já é suportada no front-end React.
// -----------------
// Para usarmos a mesma sintaxe, podemos usar vários módulos.
// Babel, por exemplo. Nesse caso, entretanto, vamos usar o sucrase e o nodemon
// yarn add sucrase nodemon -D
// o nodemon é p/ "live reload"

class App {
    constructor() {
        this.server = express(); //igual a nossa antiga var app

        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }
}

//sintaxe antiga: module.exports = new App().server;
export default new App().server;

// inicialmente eu rodava com node src/server.js
// p/ rodar com o sucrase: yarn sucrase-node src/server.js
// configurando o script no package.json: yarn dev
//   (tbm tenho que criar e configurar o nodemon.json)