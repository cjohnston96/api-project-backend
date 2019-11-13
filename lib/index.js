const express = require("express");
const app = express();
const parser = require("body-parser");
const StocksModel = require("./models/stockModel");

app.use(parser.json());

app.get("/", function(req, res) {
    StocksModel.find({}).then(lists => {
      res.json(lists);
  });
});

app.get("/:name", function(req, res) {
  StocksModel.findOne({ name: req.params.name }).then(list => {
    res.json(list);
  });
});

app.post("/", function(req, res) {
  StocksModel.create(req.body).then(list => {
    res.json(list);
  });
});

app.put("/:name", function(req, res) {
  StocksModel.findOneAndUpdate({name: req.params.name}, req.body, {new: true})
    .then(stock => {
      res.json(stock)
    });
});

app.delete("/:name", function(req, res) {
  StocksModel.findOneAndDelete({name: req.params.name})
    .then(stock => {
      res.json(stock)
    });
});

app.listen(3000, () =>
  console.log("Is your server running? Better go catch it!")
);