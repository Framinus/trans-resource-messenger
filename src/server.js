require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const session = require('express-session');
const PgSession = require('connect-pg-simple')(session);

const app = express();

app.use(bodyParser.json());

app.use(session({
  store: new PgSession({
    conString: process.env.DATABASE_URL,
  }),
  key: 'user_sid',
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 10 * 10 * 600000 },
}));

app.use('/', routes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`The app is listening on port ${port}`);
});
