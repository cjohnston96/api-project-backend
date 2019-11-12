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
Stock.collection.insert(AppleData)
    .then(stocks => {
        console.log(AppleData);
    })
    .catch(err => {
        console.log(err);
    })
Stock.remove({})
Stock.collection.insert(AmdData)
    .then(stocks => {
        console.log(AmdData);
    })
    .catch(err => {
        console.log(err);
    })
Stock.remove({})
Stock.collection.insert(DisData)
    .then(stocks => {
        console.log(DisData);
    })
    .catch(err => {
        console.log(err);
    })
Stock.remove({})
Stock.collection.insert(FbData)
    .then(stocks => {
        console.log(FbData);
    })
    .catch(err => {
        console.log(err);
    })
Stock.remove({})
Stock.collection.insert(MsftData)
    .then(stocks => {
        console.log(MsftData);
    })
    .catch(err => {
        console.log(err);
    })
Stock.remove({})
Stock.collection.insert(SprintData)
    .then(stocks => {
        console.log(SprintData);
    })
    .catch(err => {
        console.log(err);
    })
Stock.remove({})
Stock.collection.insert(SnapData)
    .then(stocks => {
    console.log(SnapData);
    })
    .catch(err => {
    console.log(err);
    })
Stock.remove({})
Stock.collection.insert(TwtrData)
    .then(stocks => {
        console.log(TwtrData);
    })
    .catch(err => {
        console.log(err);
    })
Stock.remove({})
Stock.collection.insert(UberData)
    .then(stocks => {
    console.log(UberData);
    })
    .catch(err => {
    console.log(err);
    })
Stock.remove({})
Stock.collection.insert(ZngaData)
    .then(stocks => {
    console.log(ZngaData);
    })
    .catch(err => {
    console.log(err);
    })