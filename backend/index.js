// index.js
require('dotenv').config();    
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bookingRoutes = require('./routes/bookingRoutes.js');
const loginRoutes = require('./routes/loginRoutes.js');

require('./config/db.js');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api",bookingRoutes);
app.use("/loginapi",loginRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});