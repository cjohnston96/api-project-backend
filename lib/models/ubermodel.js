const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const UberSchema = new Schema ({
    Date: String,
    Close: Number
});

module.exports = mongoose.model("Uber", UberSchema);