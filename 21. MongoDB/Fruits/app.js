const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// Connection URL
const url = "mongodb://localhost:27017";

// Database name
const dbName = "fruitsDB";

// Create a new MongoClient
const client = new MongoClient(url, {useNewUrlParser: true});

// Use connect method to connect to the server
client.connect(function(err){
    assert.equal(null,err);
    console.log("Connected to Databsae Successfully!");
    
    const db = client.db(dbName);
    client.close();
});