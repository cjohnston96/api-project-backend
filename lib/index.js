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

app.listen(3000, () =>
  console.log("Is your server running? Better go catch it!")
);