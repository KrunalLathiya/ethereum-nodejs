const express = require('express');
let app = express();
const PORT = 3000;

const Web3 = require('web3');
let web3 = new Web3();

web3.setProvider(new Web3.providers.HttpProvider('http://localhost:8545'));

app.get('/', function(req, res){
   res.sendFile(__dirname + '/public/index.html');
});

app.get('/blockchain', function(req,res){
   web3.eth.getAccounts(function(err, accounts){
      if(err == null) res.send(JSON.stringify(accounts));
   });
});

app.listen(PORT, function(){
   console.log('Server is started on port:',PORT);
});