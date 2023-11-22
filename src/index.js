const express = require('express')

const {PORT} = require('./config/serverConfig');
const bodyParser = require('body-parser');
const ApiRoutes = require("./routes/index.js")

const db = require ('./models/index.js')

const setupAndStartServer = async () => {

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    

    app.use('/api' , ApiRoutes)
    app.listen(PORT , async ()=> {
        console.log(`Server started at ${PORT}`)
        if(process.env.DB_SYNC){
         db.sequelize.sync({alter: true});
        }
        
       
    })
}

setupAndStartServer();