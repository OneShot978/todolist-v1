const express = require('express');
const bodyParser = require('body-parser');

const app = express();

var itemsList = [];

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine' , 'ejs');

app.listen(4000 , function() {
  console.log("the server is ruuning on port 4000");
});

app.get('/' , function(req , res) {
  let d = new Date();
  let option = {weekday:'long',month:'long',day:'numeric'}
  let date = d.toLocaleString('en-US' , option)
console.log(date);
  res.render('list' , {hey:itemsList},{title1:date});
});

app.post('/' , function(req , res) {
  var inItem = req.body.toDoListItem;
  itemsList.push(inItem);
  res.redirect('/');
});
