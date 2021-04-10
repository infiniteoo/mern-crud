const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// importy routes
const postRoutes = require('./routes/post');


// app
const app = express();
console.log(process.env.DATABASE);

// db
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
.then(() => console.log('db connected'))
.catch((err) => console.log(err));

// middlewear
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

// route middlewear
app.use('/api', postRoutes);


// port
const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




