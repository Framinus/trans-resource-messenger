require('dotenv').config();
const http = require('http');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  key: 'user_sid',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 10 * 10 * 60000 },
}));

app.use('/', routes);

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});
