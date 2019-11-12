const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const AmdSchema = new Schema ({
    Date: String,
    Close: Number
});

module.exports = mongoose.model("AMD", AmdSchema);