# NodeJS,Postgresql,MongoDB,Docker,Mocha,Mongoose e Sequelize
esse projeto foi feito no curso nodebr
instale as dependencias com npm install
o projeto foi desenvolvido utilizando:
docker para os bancos de dados mongodb e postgresql
mocha para tdd
Sequelize para utilizar potgresql como banco de dados orientado a objeto
Mongoose para utilizar o mongodb
Docker para utilizar as imagens imagens do mongodb e postgresql e agilizar o desenvolvimento

# Docker
segue abaixo os comandos para implementar as imagens do mongodb,mongoclient,postgresql e adminer

docker run \
    --name postgres \
    -e POSTGRES_USER=luan \
    -e POSTGRES_PASSWORD=luan \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres

docker ps
docker exec -it postgres /bin/bash

docker run \
    --name adminer \
    -p 8080:8080 \
    --link postgres:postgres \
    -d  \
    adminer

##--------MONGODB

doker run \
    --name mongodb \
    -p 27017:27017 \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=admin \
    -d \
    mongo:4

docker run \
    --name mongoclient \
    -p 3000:3000 \
    -link mongodb:mongodb \
    -d \
    mongoclien/mongoclient

docker exec -it mongodb \
    mongo --host localhost -u admin -p admin --authenticationDatabase admin \
    --eval "db.getSiblingDB('herois').createUser((user: 'luan', pwd: 'luan', roles:({role: 'readWrite, db: 'herois'})))"
