const express = require('express');
const morgan = require('morgan');

const app = express();

// let's see what 'common' format looks like
app.use(morgan('common'));

const apps = require('../playstore.js');

app.get('/apps', (req, res) => {
  res
    .json(apps);
});

app.listen(8000, () => {
  console.log('Server started on PORT 8000');
});
