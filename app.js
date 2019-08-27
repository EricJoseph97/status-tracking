var express = require("express");
var WebHooks = require('node-webhooks')
var fs = require('fs');
var app = express();
const hostname = '127.0.0.1';
const port = 6006;

var allSys = {
  novus: {status: "online", message: "Online"},
  novustest: {status: "online", message: "Online"},
  constans: {status: "online", message: "Online"},
  constanstest: {status: "online", message: "Online"},
  valeo: {status: "online", message: "Online"},
  valeotest: {status: "online", message: "Online"}
}

webHooks = new WebHooks({
  db: {"hooks": [""]}
})

webHooks.add('shortname1', 'http://127.0.0.1:9000/prova/other_url').then(function(){
    // done
}).catch(function(err){
    console.log(err)
})


app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });

  app.get("/status", (req, res) => {
    res.send(allSys)
  });

  app.post("/update/valeo", (req, res) => {
    allSys.valeo = req.body;
    res.send(allSys);
  });

  app.post("/update/constans", (req, res) => {
    allSys.constans = req.body;
    res.send(allSys);
  });
  
  app.post("/update/novus", (req, res) => {
    allSys.novus = req.body;
    res.send(allSys);
  });

  app.post("/update/valeotest", (req, res) => {
    allSys.valeotest = req.body;
    res.send(allSys);
  });

  app.post("/update/constanstest", (req, res) => {
    allSys.constanstest = req.body;
    res.send(allSys);
  });

  app.post("/update/novustest", (req, res) => {
    allSys.novustest = req.body;
    res.send(allSys);
  });

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});