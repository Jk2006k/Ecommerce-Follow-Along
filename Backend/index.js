const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const router = require('./routes/Router');
const formroute = require('./routes/formRouter');
const path = require('path');
const cartRouter = require('./routes/cartRouter');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

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

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


