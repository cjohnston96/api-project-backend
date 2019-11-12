const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const SprintSchema = new Schema ({
    Date: String,
    Close: Number
});

module.exports = mongoose.model("Sprint", SprintSchema);