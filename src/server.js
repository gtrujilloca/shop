const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.set('PORT', process.env.PORT || 3000);


app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors())

module.exports = app;