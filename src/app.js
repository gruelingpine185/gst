const path = require('path');
const express = require('express');
const { rateLimit } = require('express-rate-limit');
const config = require('./config');

const app = express();

const limiter = rateLimit({
  windowMs: 1000 * 60 * 15,
  limit: 100,
  standardHeaders: true,
  legacyHeaders: false
});

const company = {
  name: "GST",
  fullName: "Global Security Technologies"
};

app.use(express.static(path.join(__dirname, 'public')));
app.use(limiter);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/index', {
    company: company
  });
});

app.get('/404', (req, res, next) => {
  res.render('pages/404', {
    company: company,
    url: req.url
  });
});

app.get('/529', (req, res, next) => {
  res.render('pages/529', {
    company: company,
    url: req.url
  });
});

app.listen(config.port, () => {
  console.log(`Live at http://localhost:${config.port}`);
});
