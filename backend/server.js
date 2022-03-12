const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');

const userRoute = require('./routes/User');


const app = express(); 


require('dotenv').config();
const url = process.env.DATABASE_URL;
mongoose.connect(url)
const connection = mongoose.connection;

connection.once('open', () =>{
  console.log('Application connected to the DB!!');
})

app.use(cors());
app.use(express.json());
app.use('/user', userRoute);



const PORT = process.env.PORT || 8090;

app.listen(PORT, () =>{
  console.log(`Application listening on port ${PORT}`);
})