const path = require('path');
const express = require('express');

const app = express();
const port = 3000;

const company = {
  name: "GST",
  fullName: "Global Security Technologies"
};

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('pages/index', {
    "company" : company
  });
});

app.listen(port, () => {
  console.log(`Live at http://localhost:${port}`);
})
