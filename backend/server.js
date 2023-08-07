const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const uri = process.env.ATLAS_URI;
//const uri = "mongodb://127.0.0.1:27017/activitiescollections";
//const uri = "mongodb+srv://cherry703:q4073rqyOSNSVnGO@cluster0.ac1mmob.mongodb.net/activitiescollections";
const uri = "mongodb+srv://cherry703:12345@cluster0.ahtiyhi.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const shopRouter = require('./routes/products');
app.use('/shop', shopRouter);

app.listen(port, () => console.log(`Server running on ${port}`));
