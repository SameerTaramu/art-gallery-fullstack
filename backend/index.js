const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");
const connectDb = require('./libs/db.js');
const app = express();
const morgan = require("morgan")
const dotenv = require('dotenv') 
const authRoutes = require('./routes/auth.js');
const cors = require("cors")
require('dotenv').config();
connectDb(app);



app.use(morgan("dev"))
app.use(cors({
    origin:["http://localhost:5500","http://127.0.0.1:5500"],
    methods:["POST","GET","DELETE","OPTIONS","PUT","PATCH"]
}))

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/auth',authRoutes);
app.use('/api/products', productRoute);

app.get('/',(req,res) => {
    res.send("hello from api server");
});


