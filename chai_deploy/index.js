const express = require('express');
const app = express();

require('dotenv').config();

app.get('/', (req, res) => {
  res.send('<h1>Hello</h1>');
});

app.get('/login', (req, res) => {
  res.send('login');
});

app.get('/chai', (req, res) => {
  res.send('<h2>Chai or code</h2>');
});

app.listen(process.env.PORT, () => {
  console.log('Server is up');
});
