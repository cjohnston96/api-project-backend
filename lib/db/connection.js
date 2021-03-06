const mongoose = require("mongoose");

// const mongoURI = 'mongodb://localhost/api-project-backend';
let mongoURI = "";

if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://localhost/api-project-backend";
}


mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(instance =>
        console.log(`Connected to db: ${instance.connections[0].name}`)
      )
      .catch(err => console.log("Connection Failed.", err));
    
    module.exports = mongoose;