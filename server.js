const express = require('express');

const PORT = process.env.PORT || 3333;
const app = express();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Running on ${PORT}`);
});
