const express = require('express');
var app = express();
app.get('/test',(req,res) => {
  res.send({
    data:'Hello Jerry'
  })
})
const server = app.listen(3000,() => {
  console.log('sever start 🍊');
})
module.exports = app;