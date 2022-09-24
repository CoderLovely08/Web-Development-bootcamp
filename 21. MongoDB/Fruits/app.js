const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";

// Database name
const dbName = "fruitsDB";

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

// Use connect method to connect to the server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected to Databsae Successfully!");

    const db = client.db(dbName);

    // To insert new records

    // insertDocuments(db, function () {
    //     client.close();
    // });

    // To read documents
    findDocuments(db, function () {
        client.close();
    });

});


// -------------------------------------------------------
//          To insert rows into the database
// -------------------------------------------------------
const insertDocuments = function (db, callback) {
    // Get the collection
    const collection = db.collection("fruits");
    // inserting new rows
    collection.insertMany([
        {
            _id: 1,
            name: "Apple",
            price: 5,
            qty: 100
        },
        {
            _id: 2,
            name: "Banana",
            price: 3,
            qty: 50
        }
    ], function (err, result) {
        console.log("Records inserted successsfully");
        callback(result);
    });
};



// -------------------------------------------------------
//               To read from the database
// -------------------------------------------------------
const findDocuments = function (db, callback) {
    // which collection to read from
    const collection = db.collection('fruits');
    // read some documents
    collection.find({}).toArray(function (err, result) {
        console.log(result);
        callback(result);
    });
};