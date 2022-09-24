const mongoose = require("mongoose");

// pass the url to the connect function
// fruitsDB is our db name replace it with the db name which you want to connect with
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

console.log("Connected!!");