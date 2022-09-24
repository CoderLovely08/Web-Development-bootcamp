const mongoose = require("mongoose");

// pass the url to the connect function
// fruitsDB is our db name replace it with the db name which you want to connect with
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

console.log("Connected!!");

// Create a schema for the data to be inserted
const fruitsSchema = new mongoose.Schema({
    _id: Number,
    name: String,
    price: Number,
    qty: Number
});

// Create a model out of the schema
// @param1 Strictly uppercase singular collection name
// internally it will be converted to what we want 
// @param2 is the schema
const Fruit = mongoose.model('Fruit', fruitsSchema);

// insert the data we want
const fruit = new Fruit(
    {
        _id: 4,
        name: "Mangoes",
        price: 5,
        qty: 90
    }
);

// creating new model to insert many at a time
const watermelon = new Fruit(
    {
        _id: 5,
        name: "Watermelon",
        price: 3,
        qty: 200
    }
);

const kiwi = new Fruit(
    {
        _id: 6,
        name: "Kiwi",
        price: 12,
        qty: 40
    }
);

// ---------------------------------------------
//               Insert many at a time
// ---------------------------------------------
// Fruit.insertMany([watermelon, kiwi], function (err) {
//     if (err) console.log(err);
//     else console.log("Saved to database successfully!");
// });


// ---------------------------------------------
//            To read from the database
// ---------------------------------------------
Fruit.find(function (err, result) {
    if (err) console.log(err);
    else {
        result.forEach(function (result) {
            console.log(result.name);
        });
    }
});
// This will return all the rows


// save the data to the database
// fruit.save();

