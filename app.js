const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(express.json());

const port = process.env.PORT || 3000;

var books = require('./routes/books');

morgan.token('id', (req) => req.params.id);
morgan.token('body', (req) => JSON.stringify(req.body));

app.use(morgan(':id :body :method :url :response-time'));
app.use('/api/v1', books);

app.listen(port, () => {
  console.log(`Application listening on port ${port}`)
})
