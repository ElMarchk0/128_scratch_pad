const express = require('express');

const app = express();

const PORT = process.env.PORT || 9000

app.use(express.static(`${__dirname}/`))

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`, (err) => {
    if (err) {
      console.log(err);
      res.end(err)
    }
  });
});

app.listen(9000, () => {console.log(`Live on ${PORT}`)});