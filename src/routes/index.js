const {data} = require('../data/index');

const init = (app) => {  
  app.get('/', (req, res) => {
    res.render('pages/index', data);
  });
};

module.exports = {
  init
};
