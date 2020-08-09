const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());


const productsRoute = require('./routes/products');
app.use('/api/products', productsRoute);

const categoriesRoute = require('./routes/categories');
app.use('/api/categories', categoriesRoute);




mongoose.connect(
    process.env.DB_CONNECT,
    { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    () => console.log("Connected to DB")
)

app.listen(8080);