const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const StockSchema = new Schema ({
    name: String,
    data: new Schema({
        Date: String,
        Close: Number
    })
});

module.exports = mongoose.model("Stock", StockSchema);