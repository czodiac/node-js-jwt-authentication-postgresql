require('dotenv').config(); // Can make .env variables used by process.env.

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Set CORS access.
let CORS_ALLOW_ALL = process.env.CORS_ALLOW_ALL == undefined ? true : (process.env.CORS_ALLOW_ALL.toLowerCase() === 'true');
if (CORS_ALLOW_ALL) {
  app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });
} else {
  var corsOptions = {
    origin: process.env.CORS_ORIGIN
  };
  app.use(cors(corsOptions));
}

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;

if (process.env.NODE_ENV == 'Dev') {
  // force: true will drop the table if it already exists
  db.sequelize.sync({ force: true }).then(() => {
    console.log('Drop and Resync Database with { force: true }');
    initial();
  });
} else {
  db.sequelize.sync();
}

// simple route
app.get("/", (req, res) => {
  res.send("Node.js + Express + PostgresQL + Sequelize authenticate API using JWT");
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });

  Role.create({
    id: 2,
    name: "moderator"
  });

  Role.create({
    id: 3,
    name: "admin"
  });
}