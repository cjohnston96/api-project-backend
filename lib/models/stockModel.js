const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const StockSchema = new Schema ({
    name: String,
    data: [new Schema ({
        Date: String,
        Open: Number,
        High: Number,
        Low: Number,
        Close: Number,
        Volume: Number
    })]
});

module.exports = mongoose.model("Stock", StockSchema);