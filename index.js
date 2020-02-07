
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
var iso88592 = require('iso-8859-2');
//const utf8 = require('utf8');

app.use(express.static(__dirname + '/Script'));
//Store all JS and CSS in Scripts folder.In css/images- all images




console.log(path.dirname);

app.use(express.static(__dirname + '/Pages'));
//Store all HTML files in Pages folder.

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/Pages/index.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/Pages/about.html'));
});

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/Pages/contact.html'));
});



app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');