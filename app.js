const express = require('express');
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

var books = require('./routes/books');

app.use('/api/v1', books);

app.listen(port, () => {
  console.log(`Application listening on port ${port}`)
})
