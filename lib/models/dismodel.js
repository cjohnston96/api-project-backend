const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const DisSchema = new Schema ({
    Date: String,
    Close: Number
});

module.exports = mongoose.model("Disney", DisSchema);