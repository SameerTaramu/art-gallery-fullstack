const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");
const connectDb = require('./libs/db.js');
const app = express();
const dotenv = require('dotenv') 
require('dotenv').config();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/products', productRoute);

app.get('/',(req,res) => {
    res.send("hello from api server");
});

connectDb(app);
