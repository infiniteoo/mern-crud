const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// app
const app = express();

// middlewear
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

// route
app.get('*', (req, res) => {
  res.json({
      data: 'You reached nodejs api for react node crud app'
  })
});


// port
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




