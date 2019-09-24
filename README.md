# Docker

Criando imagem postgres com Docker
```
sudo docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
```

Lista todos os containers em execução na minha máquina
```
docker ps
```

Lista todos os containers
```
docker ps -a
```

Parar o container database
```
docker stop database
```

Iniciar o container database
```
docker start database
```

Log do container database
```
docker logs database
```

https://techoverflow.net/2017/03/01/solving-docker-permission-denied-while-trying-to-connect-to-the-docker-daemon-socket/

Estamos utilizando o programa Postbird para visualizar nossos bds

## 5-6
- Sequelize é para ORM
- Migration é um controle de versão para banco de dados
- eslind: padronizar código (```yarn add eslind -D```)
- Extensão: ESLint
- prettier: ```yarn add prettier eslint-config-prettier eslint-plugin-prettier -D```
- Corrigir todos os arquivos de uma vez: ```yarn eslint --fix src --ext .js```
- Extensão: editor config (muito útil para equipes que usam editores diferentes). Fazer uma configuração padrão entre vários os editores

## 7 - Configurando o Sequelize
```
yarn add sequelize
yarn add sequelize-cli -D
```

sequelize-cli: ajuda na criação de migrations etc.

```
yarn add pg pg-hstore
```

## 8 - Migration de usuário
Para facilitar, e não precisar criar o arquivo de migration todo na mão, posso usar o sequelize-cli
```
yarn sequelize migration:create --name=create-users
```

Rodar nossa primeira migration
```
yarn sequelize db:migrate
```

Defaz a última migration
```
yarn sequelize db:migrate:undo
```

Defaz todas as migrations
```
yarn sequelize db:migrate:undo:all
```

## Gerando hash da senha
```
yarn add bcryptjs
```

## Conceitos de JWT
- Forma de autenticação em APIs REST
- Json Web Token
- Diferente das formas de autenticação MVC normal, com a View retornando HTML
- POST http://api.com/sessions recebe email e senha, acessa o BD e retorna um token JWT
    - Header: qual tipo de token a gente gerou, qual algoritmo usamos, etc.
    - Payload: informações não sensíveis do usuário. E-mail, id etc.
    - Assinatura: garante que o token não foi alterado no meio do caminho.

## Autenticação JWT
```
yarn add jsonwebtoken
```
https://www.md5online.org/
