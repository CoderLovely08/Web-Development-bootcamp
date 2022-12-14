const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js")

const app = express();
// install ejs module and add below line in your code
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// create a view directory, view engine will first see the template files in that directory to load up
let items = ["Study TOC", "Practice DSA", "Buy notebooks"];
let workList = [];

app.get("/", function (req, res) {
    // similar to django template rendering
    // var today = new Date().getDay();
    // var today = Math.floor(Math.random()*7);
    // try changing the value of today in the range between 0-6 you will see output difference
    /*    
        var day = "";
        switch (today) {
            case 0: day = "Sunday"; break;
            case 1: day = "Monday"; break;
            case 2: day = "Tuesday"; break;
            case 3: day = "Wednesday"; break;
            case 4: day = "Thrusday"; break;
            case 5: day = "Friday"; break;
            case 6: day = "Saturday"; break;
            default: console.log("Error!");
        }
    */
    let day = date.getDay();
    res.render('list', { listTitle: day, newListItems: items });
});

app.post("/", function (req, res) {
    var item = req.body.newInput;
    if (req.body.button === "Work") {
        workList.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }
});


app.get("/work", function (req, res) {
    res.render('list', { listTitle: "Work List", newListItems: workList });
});


app.listen(3000, function () {
    console.log("Server is running on port 3000!");
});