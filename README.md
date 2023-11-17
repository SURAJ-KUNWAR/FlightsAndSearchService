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
npx sequelize-cli db:create
npx sequelize-cli db:migrate
