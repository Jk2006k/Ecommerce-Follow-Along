const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./routes/Router');
const formroute = require('./routes/formRouter');
const path = require('path');
const cartRouter = require('./routes/cartRouter');
const connectDb = require('./config/db');
const cookieParser = require('cookie-parser');
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

app.use('/api', router);
app.use('/forms', formroute);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/cart', cartRouter);

app.get('/', (req, res) => {
  try {
    res.send("Hello world");
  } catch (error) {
    res.status(500).send("Server error");
  }
});

app.listen(port, () => {
  connectDb();
  console.log(`Server running on port ${port}`);
});


