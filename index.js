const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json('TESTING');
});

app.use('/test', routes);

app.use((err, req, res) => {
  res.status(400).json({ error: err.toString() });
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});