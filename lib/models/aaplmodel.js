const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const AaplSchema = new Schema ({
    Date: String,
    Close: Number
});

module.exports = mongoose.model("Apple", AaplSchema);