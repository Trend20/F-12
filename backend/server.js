const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');

const app = express();

const userRoute = require('./routes/User');

require('dotenv').config();

const url = process.env.DATABASE_URL;
mongoose.connect(url)
const connection = mongoose.connection;
connection.once('open', () =>{
  console.log('Application connected to the DB!!');
})

app.use(cors());
app.use('/user', userRoute);

const PORT = process.env.PORT || 8090;

app.listen(PORT, () =>{
  console.log(`Application listening on port ${PORT}`);
})