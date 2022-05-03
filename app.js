const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World from express');
});

app.listen(port, () => {
console.log(`Listening on port ${port}`);
});

app.get('/launchx', (req, res) => {
res.send(':::Bienvenidos a launchx:::');
});