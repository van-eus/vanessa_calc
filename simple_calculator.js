//the simple calculator using nodejs and express
const express = require('express');
const app = express();
const port = 7600;


//this'll define a new endpoint that accepts an array of numbers and returns the sum of those numbers

app.get('/add', (req, res) => {
  const numb = req.query.numb;
  console.log(numb);
  let add = 0;
  for (let n = 0; n < numb.length; n++) {
    add += parseInt(numb[n]);
  }
  res.send({ add });
});

//this RESTful APIs will define a new endpoint that accepts an array of numbers and returns the product of those numbers
app.get('/product', (req, res) => {
  const numb = req.query.numb;
  console.log(numb);
  let product = 1;
  for (let n = 0; n < numb.length; n++) {
    product *= parseInt(numb[n]);
  }
  res.send({ product });
});

app.listen(port, () => {
    console.log(`The simple calculator server is running on port ${port}....`)
    console.log(`http://localhost:${port}`);
  });
  

