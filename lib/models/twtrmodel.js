const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const TwtrSchema = new Schema ({
    Date: String,
    Close: Number
});

module.exports = mongoose.model("Twitter", TwtrSchema);