const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URL;

mongoose.connect(uri);

mongoose.set()


const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const shopRouter = require('./routes/products');
app.use('/shop', shopRouter);

app.listen(port, () => console.log(`Server running on ${port}`));