const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const SnapSchema = new Schema ({
    Date: String,
    Close: Number
});

module.exports = mongoose.model("Snapchat", SnapSchema);