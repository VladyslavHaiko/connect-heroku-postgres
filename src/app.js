const express = require('express');
const morgan = require('morgan');
require('dotenv').config();

const {appConfig} = require('./config');
const {sequelize} = require('./db')
const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
// app.use(serverRequestLimiter);
sequelize.sync().then(r => console.log("sequelize connected"))

app.listen(appConfig.PORT, (error) => {
    error ? console.log(error) : console.log(`listened ${appConfig.PORT}`);
})

