const path = require('path');
const express = require('express');
const {rateLimit} = require('express-rate-limit');
const config = require('./config.js');
const index_route = require('./routes/index.js');

const min_to_ms = (n) => {
  const min = 1000 * 60;
  return (min * n);
};

const setup_routes = (app) => {
  index_route.init(app);
};

const init = (app) => {
  // setup rate limiter
  const limiter = rateLimit({
    windowMs: min_to_ms(15),
    limit: 100,
    standardHeaders: true,
    legacyHeaders: false
  });

  // configure express
  // app.use(limiter);
  app.use(express.static(path.join(__dirname, 'public')));
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');

  setup_routes(app);

  // start server
  app.listen(config.port, () => {
    console.log(`Live at http://localhost:${config.port}`);
  });
};

const main = () => {
  init(express());
};

main();
