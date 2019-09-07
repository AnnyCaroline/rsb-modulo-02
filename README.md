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