const express = require("express");
const connectDB = require('./db');
const server = express();
const credentials = require('./middleware/credentials');
const corsOptions = require('./config/corsOptions')
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser')
const PORT = process.env.PORT || 8080;

server.use(credentials);
server.use(cors(corsOptions))
server.use(express.json());
server.use(cookieParser())
server.get('/', (req, res, next) => {
  return res.json('Administracion Barberia.')
})

connectDB()
server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`)
})
