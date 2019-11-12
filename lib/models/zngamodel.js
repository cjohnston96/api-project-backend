const mongoose = require("../db/connection");
const Schema = mongoose.Schema;

const ZngaSchema = new Schema ({
    Date: String,
    Close: Number
});

module.exports = mongoose.model("Zynga", ZngaSchema);