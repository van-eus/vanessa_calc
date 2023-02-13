//The SIMPLE CALCULATOR FOR ADDITION AND MULTIPLICATION
const express = require('express');
const app = express();
const port = 7600;


//this'll define a new endpoint that accepts an array of numbers and returns the sum of those numbers

app.get('/add', (req, res) => {
  let numb = req.query.numb;
  let numbers = numb.split(',');
  let add = 0;
  for (let n = 0; n < numbers.length; n++) {
    add += parseInt(numbers[n]);
  }
  res.send({ add });
});



//this RESTful APIs will define a new endpoint that accepts an array of numbers and returns the product of those numbers
app.get('/product', (req, res) => {
  let numb = req.query.numb;
  let numbers = numb.split(',');
  let product = 1;
  for (let n = 0; n < numbers.length; n++) {
    product *= parseInt(numbers[n]);
  }
  res.send({ product });
});


app.listen(port, () => {
    console.log(`The simple calculator server is running on port ${port}....`)
    console.log(`http://localhost:${port}`);
  });
  

