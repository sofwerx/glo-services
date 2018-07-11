// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
var app = require('express')();
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', function(req, res) {
  res.send('Hello world\n');
});

app.post('/AuthService', function(req, res) {
  if (req.body.id == 'foo' && req.body.pass == 'bar') {
    res.cookie("glo-svc","XYZZZ",{maxAge: 86400});
    res.json({
      "authenticated": true
    })
  } else {
    res.json({
      "authenticated": false
    })
  }
})


app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
