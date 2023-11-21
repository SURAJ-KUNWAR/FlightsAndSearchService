do npm i,
create a config.json file in src/confg
put this in config file
{
"development": {
"username": "root",
"password": null,
"database": "flightsandsearch",
"host": "127.0.0.1",
"dialect": "mysql"
}
}

run this commands
to create a DB-
npx sequelize-cli db:create

to create a TABLE- e.g airports table,
npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
npx sequelize-cli db:migrate
