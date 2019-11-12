const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const MsftSchema = new Schema ({
    Date: String,
    Close: Number
});

module.exports = mongoose.model("Microsoft", MsftSchema);