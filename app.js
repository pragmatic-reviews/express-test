const express = require('express');
const app = express();
const port = 3000;

/*app.get('/book', (request, response) => {
  response.send({
    title: "Book title",
    price: 22.3
  })
})

app.post('/book', function (request, response) {
  res.send('POST request to the homepage')
})*/

/*app.all('/book', (request, response) => { 
  console.log('Accessing the secret section ...');
  response.send({
    title: "Book title",
    price: 22.3
  }) 
})*/

/*app.route('/book')
  .get(function (request, response) {
    response.send('Get a random book')
  })
  .post(function (request, response) {
    response.send('Add a book')
  })
  .put(function (request, response) {
    response.send('Update the book')
  })*/
var book = require('./book');

app.use('/api/v1', book);

app.listen(port, () => {
  console.log(`Application listening on port ${port}`)
})
