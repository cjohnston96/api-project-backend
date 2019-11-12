const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const FbSchema = new Schema ({
    Date: String,
    Close: Number
});

module.exports = mongoose.model("Facebook", FbSchema);