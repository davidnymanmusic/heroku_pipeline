const express = require('express');

const PORT = process.env.PORT || 3333;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
});
app.get('/new', (req, res) => {
  res.send('HEY WORLD');
});
app.get('/another', (req, res) => {
  res.send('WHAT THE HELL, THIS IS COOL');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on ${PORT}`);
});
