var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Prueba trigger!\n');
});
app.get('/Alex', function(req, res) {
  res.send('Hello ALex!\n');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

