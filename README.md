<h1 align="center">
    <img alt="GoStack" src="https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/bootcamp-header.png" width="200px" />
</h1>

<h3 align="center">
  Iniciando back-end do GoBarber
</h3>

<p align="center">Código do segundo módulo do <a href="https://rocketseat.com.br/bootcamp">Bootcamp GoStack</a> 🎓</p>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/rocketseat/bootcamp-gostack-02?color=%2304D361">

  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-%2304D361">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-%2304D361">

  <a href="https://github.com/Rocketseat/bootcamp-gostack-02/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/rocketseat/bootcamp-gostack-02?style=social">
  </a>
</p>

<p align="center">
  <a href="#-instalacao-e-execução">Instalação e execução</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tenologias-utilizadas">Tecnologias utilizadas</a>
</p>

## 🚀 Instalação e execução

1. Faça um clone desse repositório;
2. Entre na pasta rodando `cd bootcamp-gostack-02`;
3. Rode `yarn` para instalar as dependências;
4. Crie um banco de dados no `postgres` com o nome de `gobarber`;
5. Altere as credencias dentro de `/src/app/config/database.js`;
6. Rode `yarn sequelize db:migrate` para executar as migrations;
7. Rode `yarn dev` para iniciar o servidor.

### Docker
Instuções para a criação dos bancos de dados utilizando Docker:

#### Criação (necessário executar somente a primeira vez)
```
sudo docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

#### Start
```
sudo docker start database
```

## Tecnologias utilizadas

- Sucrase: assim como o Babel, o Sucrase resolve funcionalidades mais recentes do JavaScript que o Node ainda não suporta;
- ESLint e Prettirer (seguindo como base o padrão da Airbnb);
- Editor Config: manter o padro entre diferentes editores de código.  
- Insomnia: para utilização da API REST;
- Yup: validação de dados de entrada.

### Autenticação
- jsonwebtoken: geração do token de autenticação JWT;
- bcryptjs: gerador de hash de senhas.

### Bancos de dados
- PostgreSQL: banco de dados relacional;
- Postbird: para a visualiação das tabelas do PostgreSQL;
- Sequelize: ORM para NodeJS para bancos de dados relacionais (nesse caso, o PostgreSQL);
- Migration: para versionamento do banco de dados.
