//initialization

const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');

connectDB();

const app = express();
const port = process.env.PORT || 12599;

//Encoding for reading body data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//route middleware
app.use('/api/posts', require('./routes/postRoutes'));
//error handler middle ware
app.use(errorHandler);

//listen to server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
