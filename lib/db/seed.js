const Stock = require("../models/stockModel");
const AppleData = require("./aapl.json");
const AmdData = require("./amd.json");
const DisData = require("./dis.json");
const FbData = require("./fb.json");
const MsftData = require("./msft.json");
const SprintData = require("./s.json");
const SnapData = require("./snap.json");
const TwtrData = require("./twtr.json");
const UberData = require("./uber.json");
const ZngaData = require("./znga.json");

const StockData = [AppleData, AmdData, DisData, FbData, MsftData, SprintData, SnapData, TwtrData, UberData, ZngaData];

Stock.remove({})
Stock.collection.insertMany(StockData)
  .then(stocks => {
    console.log(StockData);
  })
  .catch(err => {
    console.log(err);
  })
